# Post-Deploy Smoke Check

Run through this checklist after deploying to IC mainnet to verify core functionality. This ensures the site is live and all critical features work as expected.

## Prerequisites

- Deployment completed successfully
- Live site URL recorded in `frontend/DEPLOYED_MAINNET.md`
- Project domain configured as `techmarket-digital` in `frontend/project-domain.json`
- Access to mobile device for mobile-specific tests (optional but recommended)

## Smoke Test Checklist

### 0. Verify Deployment Record ✓

- [ ] Open `frontend/DEPLOYED_MAINNET.md`
- [ ] Verify live site URL is filled in: `https://<FRONTEND_CANISTER_ID>.ic0.app/`
- [ ] Verify frontend canister ID matches deployed canister
- [ ] Verify backend canister ID matches deployed canister
- [ ] Verify deployment timestamp is recorded
- [ ] Confirm project domain is `techmarket-digital` in `frontend/project-domain.json`

### 1. Homepage Loads ✓

- [ ] Visit the live site URL from `DEPLOYED_MAINNET.md`
- [ ] Page loads without errors (check browser console)
- [ ] Hero section displays with background image
- [ ] All sections render: Trust, Services, Why Choose Us, Results, Process, CTA, Contact
- [ ] Header and footer are visible
- [ ] No broken images or missing assets

### 2. WhatsApp Link ✓

- [ ] Click the floating WhatsApp button (bottom-right corner)
- [ ] Verify it opens `https://wa.me/918824495515` in a new tab/window
- [ ] On mobile: Verify it opens WhatsApp app (if installed)
- [ ] No pre-filled message should appear (link should be clean)

### 3. Call Link (Mobile Only) ✓

- [ ] On mobile device, verify the Call button appears (bottom-right, above WhatsApp)
- [ ] Click the Call button
- [ ] Verify it initiates a call to `+918824495515`
- [ ] On desktop: Call button should not be visible

### 4. Lead Form Submission ✓

- [ ] Scroll to the Contact section
- [ ] Fill out the form:
  - Name: `Test User` (required)
  - Phone: `+1234567890` (required)
  - Email: `test@example.com` (optional)
  - Business Type: Select any option (optional)
- [ ] Click "Send Message"
- [ ] Verify success message appears: "Thank you! We'll be in touch soon."
- [ ] Form should reset after successful submission
- [ ] Try submitting with empty Name/Phone: Verify validation errors appear

### 5. Navigation & Links ✓

- [ ] Click navigation links in header (Services, Why Us, Results, Contact)
- [ ] Verify smooth scroll to each section
- [ ] On mobile: Open hamburger menu and test navigation
- [ ] Click "Book Your Free Strategy Call" CTA buttons
- [ ] Verify they scroll to Contact section or trigger expected action

### 6. Social Media Links ✓

- [ ] Scroll to footer
- [ ] Click Facebook icon
- [ ] Verify it opens `https://www.facebook.com/share/1CEG54jCVe/` in new tab
- [ ] Click Instagram icon
- [ ] Verify it opens `https://www.instagram.com/techmarket.digital?igsh=ZTRjaTl3d255bXNw&utm_source=ig_contact_invite` in new tab
- [ ] Both links should have `target="_blank"` and `rel="noopener noreferrer"`

### 7. Responsive Behavior ✓

- [ ] Test on desktop (1920px+): Layout looks professional, no overflow
- [ ] Test on tablet (768px-1024px): Sections stack appropriately
- [ ] Test on mobile (320px-767px): Mobile menu works, buttons are accessible
- [ ] Sticky contact buttons (WhatsApp/Call) don't block content
- [ ] All text is readable at different screen sizes

### 8. Dark/Light Mode ✓

- [ ] Locate theme toggle (if visible in UI)
- [ ] Switch between light and dark modes
- [ ] Verify colors change appropriately
- [ ] Check contrast and readability in both modes
- [ ] Verify images and assets display correctly in both modes

### 9. Performance & Assets ✓

- [ ] All images load (hero background, service icons, etc.)
- [ ] Logo displays in header and footer
- [ ] No console errors in browser DevTools
- [ ] Page loads in under 3 seconds (on reasonable connection)
- [ ] Animations are smooth (scroll reveals, hover effects)

### 10. Backend Integration ✓

- [ ] Open browser DevTools → Network tab
- [ ] Submit the contact form
- [ ] Verify network request to backend canister succeeds (status 200)
- [ ] Check for any failed API calls or CORS errors
- [ ] Optional: Visit backend Candid UI at `https://<BACKEND_CANISTER_ID>.ic0.app/` and test `submitLead` method directly

### 11. Canister URL Verification ✓

- [ ] Verify the live site URL in `DEPLOYED_MAINNET.md` matches the actual deployed URL
- [ ] Confirm frontend canister ID in URL matches the ID in `DEPLOYED_MAINNET.md`
- [ ] Test the URL in multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify URL loads successfully without redirects or errors

## Post-Check Actions

After completing the smoke check:

1. **If all tests pass:**
   - ✅ Mark deployment as successful
   - Ensure `frontend/DEPLOYED_MAINNET.md` is fully filled out with live URLs and canister IDs
   - Share live link with stakeholders
   - Archive deployment record for future reference

2. **If any tests fail:**
   - 🔍 Check browser console for errors
   - Review deployment logs: `dfx canister --network ic logs frontend`
   - Verify canister status: `dfx canister --network ic status frontend`
   - Check backend status: `dfx canister --network ic status backend`
   - Fix issues locally, rebuild, and redeploy
   - Re-run smoke check

## Quick Test Script

For rapid verification, test these four critical paths:

1. **Homepage loads** → Visit URL from `DEPLOYED_MAINNET.md`, verify no errors
2. **WhatsApp link works** → Click button, verify opens correct URL
3. **Form submits** → Fill form, submit, verify success message
4. **Canister IDs match** → Verify URL canister ID matches `DEPLOYED_MAINNET.md`

If these four pass, the core functionality is working.

---

**Note:** This smoke check focuses on free-only functionality. No payment processing, subscriptions, or paid service integrations are tested because none are included in this deployment. The project domain is configured as `techmarket-digital` and validated during deployment.
