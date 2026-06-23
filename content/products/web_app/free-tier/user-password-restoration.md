---
title: "🔑 User password restoration"
layout: products
status: complete
---

### 🎯 Purpose
Allows a registered Gratheon user to regain access to their account when they forget their password, without contacting support and without exposing whether an email address is registered.

### 🎭 User Story
- As a beekeeper with a Gratheon account
- I want to reset my password from the login screen
- So that I can securely return to my hive, apiary, and monitoring data when I lose access

### 🚀 Key Benefits
- **Self-service recovery**: Users can request a password reset directly from the login page
- **Email-based verification**: A secure reset link is sent to the account email address
- **Protected privacy**: The request screen shows a generic success message and does not reveal whether an email exists
- **Short-lived reset links**: Reset links expire after 1 hour and can be used only once
- **Abuse prevention**: Reset requests are rate-limited to reduce spam and credential attack attempts
- **Clear guidance**: Invalid, expired, or already-used links show user-friendly recovery messages

### 🔧 Technical Overview
Password restoration is implemented across the `web-app` frontend and `user-cycle` authentication service. The web app exposes a "Forgot password?" link from the login page, a reset request form, and a new-password form opened from the email link. The backend generates cryptographically secure reset tokens, stores only hashed token values, sends the reset email, validates token expiry and one-time use, and updates the user's password after successful confirmation.

### 📋 Acceptance Criteria
- "Forgot password?" link is available on the login screen
- User can submit their account email to request a reset link
- The request page returns a generic success message for both existing and non-existing emails
- The system sends a password reset email with a unique link for registered accounts
- Reset link opens the password restoration page with a token
- User can enter and confirm a new password before submitting
- Password is updated after a valid token is submitted
- Expired, invalid, or already-used tokens are rejected with a clear message
- Reset links expire after 1 hour and are one-time use
- Reset requests are limited to 3 per day per user/email/IP identity
- Existing active sessions remain valid after a password reset

### 🚫 Out of Scope
- Password recovery for accounts that only use third-party OAuth login
- Support-assisted password reset flows
- Forced logout of existing sessions after password reset
- Multi-factor authentication recovery
- Manual account ownership verification

### 🏗️ Implementation Approach
- **Frontend**: Login page links to `/account/forgot-password`; reset emails open `/account/reset-password?token=...`
- **Backend**: `user-cycle` exposes `requestPasswordReset(email)` and `resetPassword(token, password)` GraphQL mutations
- **Security**: Reset tokens are random, hashed before storage, one-time use, and expire after 1 hour
- **Abuse control**: Request rate limiting is applied by email, user, and IP-derived identities
- **UX**: Forms show generic request success, password mismatch validation, and clear invalid-link feedback

### 📊 Success Metrics
- Users can recover account access without support intervention
- Password reset request completion rate remains high
- Invalid or expired token errors are understandable to users
- No account enumeration through the reset request flow
- Low rate of repeated reset requests from the same identity

### 🔗 Related Features
- [🧑‍🚀 User login](user-login.md)
- [🧑‍🚀 User registration](user-registration.md)
- [🧑‍🚀 User editing](user-editing.md)
- [🌍 Localization](localization.md)

### 📚 Resources & References
- [`web-app` password restoration design](https://github.com/Gratheon/web-app/blob/main/docs/password-restoration.md)
- [`user-cycle` GraphQL schema](https://github.com/Gratheon/user-cycle/blob/main/schema.graphql)
- [`web-app` reset request page](https://github.com/Gratheon/web-app/blob/main/src/page/accountForgotPassword/index.tsx)
- [`web-app` new password page](https://github.com/Gratheon/web-app/blob/main/src/page/accountResetPassword/index.tsx)
- [`user-cycle` password reset model](https://github.com/Gratheon/user-cycle/blob/main/src/models/password-reset.ts)

### 💬 Notes
This feature is part of the core account lifecycle. It keeps account recovery simple for beekeepers while protecting user privacy and reducing reset-link abuse.

---
**Last Updated**: June 23, 2026
**Next Review**: July 2026
