# Specification

## Summary
**Goal:** Ensure all Call Now/Call Us phone actions across the site dial the provided number (+918824495515) using a single centralized config value.

**Planned changes:**
- Update `frontend/src/config/contact.ts` so `contactConfig.phoneNumber` is set to `"+918824495515"` and `contactConfig.phoneUrl` resolves to `tel:+918824495515`.
- Replace any hard-coded `tel:` links and any occurrences of the old number `+971501234567` in the frontend UI with `contactConfig.phoneUrl` (including the sticky call button usage).
- Add/refresh a post-deploy smoke-check step in `frontend/scripts/post-deploy-smoke-check.md` to confirm the mobile dialer opens with `+918824495515` when tapping Call Now/Call Us.

**User-visible outcome:** On mobile, tapping any Call Now/Call Us button opens the phone dialer with `+918824495515`.
