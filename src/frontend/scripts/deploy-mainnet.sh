#!/bin/bash

# Deploy to Internet Computer Mainnet - Free Hosting Only
# This script deploys both frontend and backend canisters to IC mainnet
# No paid services, payments, or subscriptions involved

set -e

echo "=========================================="
echo "  IC Mainnet Deployment (Free Hosting)"
echo "=========================================="
echo ""

# Check if dfx is installed
if ! command -v dfx &> /dev/null; then
    echo "❌ Error: dfx CLI not found. Please install it first:"
    echo "   sh -ci \"\$(curl -fsSL https://internetcomputer.org/install.sh)\""
    exit 1
fi

echo "✅ DFX CLI found"
echo ""

# Validate project domain configuration
DOMAIN_FILE="frontend/project-domain.json"
if [ ! -f "$DOMAIN_FILE" ]; then
    echo "❌ Error: $DOMAIN_FILE not found"
    exit 1
fi

# Extract domain from JSON (requires jq or manual parsing)
if command -v jq &> /dev/null; then
    DOMAIN=$(jq -r '.domain' "$DOMAIN_FILE")
else
    # Fallback: simple grep/sed parsing
    DOMAIN=$(grep -o '"domain"[[:space:]]*:[[:space:]]*"[^"]*"' "$DOMAIN_FILE" | sed 's/.*"domain"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/')
fi

echo "📋 Project Domain: $DOMAIN"

# Validate domain format
if [ -z "$DOMAIN" ]; then
    echo "❌ Error: Domain is empty in $DOMAIN_FILE"
    exit 1
fi

# Check length (5-50 characters)
DOMAIN_LENGTH=${#DOMAIN}
if [ $DOMAIN_LENGTH -lt 5 ] || [ $DOMAIN_LENGTH -gt 50 ]; then
    echo "❌ Error: Domain must be between 5 and 50 characters (current: $DOMAIN_LENGTH)"
    exit 1
fi

# Check format (only letters, numbers, and hyphens)
if ! [[ "$DOMAIN" =~ ^[a-zA-Z0-9-]+$ ]]; then
    echo "❌ Error: Domain must contain only letters, numbers, and hyphens"
    exit 1
fi

# Verify exact domain value
if [ "$DOMAIN" != "techmarket-digital" ]; then
    echo "❌ Error: Domain must be exactly 'techmarket-digital' (found: '$DOMAIN')"
    exit 1
fi

echo "✅ Domain validation passed: $DOMAIN"
echo ""

# Check current identity
echo "📋 Current DFX Identity:"
dfx identity whoami
echo "   Principal: $(dfx identity get-principal)"
echo ""

# Confirm deployment
read -p "🚀 Deploy to IC mainnet? This will use cycles. (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

echo ""
echo "🔨 Building frontend..."
cd frontend
npm run build
cd ..
echo "✅ Frontend build complete"
echo ""

echo "🚀 Deploying to IC mainnet..."
echo "   This will deploy both frontend and backend canisters..."
echo ""

# Deploy to mainnet
dfx deploy --network ic

echo ""
echo "=========================================="
echo "  ✅ Deployment Complete!"
echo "=========================================="
echo ""
echo "📝 IMPORTANT: Record the following information"
echo ""
echo "1. Copy the canister URLs displayed above"
echo "2. Note the canister IDs for frontend and backend"
echo "3. Fill out frontend/DEPLOYED_MAINNET.md with:"
echo "   - Live site URL"
echo "   - Frontend canister ID"
echo "   - Backend canister ID"
echo "   - Deployment timestamp"
echo ""
echo "🔍 To retrieve canister information:"
echo "   dfx canister --network ic info frontend"
echo "   dfx canister --network ic info backend"
echo ""
echo "🌐 Your site should be live at:"
echo "   https://<FRONTEND_CANISTER_ID>.ic0.app/"
echo ""
echo "📋 Next steps:"
echo "   1. Visit the live site and verify it loads"
echo "   2. Run smoke tests (see frontend/scripts/post-deploy-smoke-check.md)"
echo "   3. Complete frontend/DEPLOYED_MAINNET.md for handoff"
echo "   4. Update DEPLOYED_MAINNET.md with the exact URLs and canister IDs from this deployment"
echo ""
echo "=========================================="
