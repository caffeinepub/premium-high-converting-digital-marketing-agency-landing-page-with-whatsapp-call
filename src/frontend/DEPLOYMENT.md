# Deployment Guide

## Free-Only Hosting / No Payments / No Subscriptions

**This deployment uses only free Internet Computer (IC) hosting.** No paid hosting providers, payment processing, or subscription services are required or included. The IC provides free hosting for canisters with sufficient cycles, which can be obtained through the cycles faucet or other free methods.

## Project Domain Configuration

**Required Domain:** `techmarket-digital`

The project domain/slug is configured in `frontend/project-domain.json` and must be exactly `techmarket-digital` to pass validation.

### Domain Validation Rules

- **Length:** Between 5 and 50 characters
- **Format:** Only letters, numbers, and hyphens (no spaces, underscores, or special characters)
- **Value:** Must be exactly `techmarket-digital`

The deployment script (`frontend/scripts/deploy-mainnet.sh`) automatically validates the domain before deploying. If validation fails, the deployment will abort with a clear error message.

## Deploying to Internet Computer Mainnet (Production)

This guide covers deploying your digital marketing agency website to the Internet Computer mainnet using only free options.

### Prerequisites

- **DFX CLI** installed and configured (free tool from DFINITY)
- **Cycles** for deployment (obtain free cycles via the [cycles faucet](https://faucet.dfinity.org/) or community programs)
- All changes committed and tested locally
- Internet Identity for authentication (free)
- **Project domain configured:** Verify `frontend/project-domain.json` contains `"domain": "techmarket-digital"`

### Quick Deploy

Use the provided helper script for a streamlined deployment:

