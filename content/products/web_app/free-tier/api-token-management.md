---
title: "🔐 API token management"
layout: products
status: complete
---

### 🎯 Purpose
Enables users to generate, manage, and revoke API tokens for secure access to Gratheon services from external devices and applications.

### 🎭 User Story
- As a beekeeper with IoT devices or custom integrations
- I want to generate and manage API tokens for my hardware devices
- So that I can securely connect entrance observers, sensors, and other equipment to my Gratheon account

### 🚀 Key Benefits
- **Secure device authentication**: Bearer token-based authentication for IoT devices
- **Token lifecycle management**: Generate, view, and revoke tokens as needed
- **Multiple device support**: Create separate tokens for different devices or applications
- **Security control**: Revoke compromised tokens without affecting other devices

### 🔧 Technical Overview
API token management system allowing users to generate bearer tokens for device authentication. Tokens are used by entrance observers, telemetry systems, and video upload services to authenticate with Gratheon APIs without requiring user credentials.

### 📋 Acceptance Criteria
- Token management interface accessible in user account settings
- Generate new API tokens with descriptive names/labels
- Display existing tokens with creation dates and usage status
- Revoke individual tokens with immediate effect
- Token validation for all API endpoints requiring authentication
- Secure token generation using cryptographically secure methods
- Token usage tracking and last-used timestamps

### 🚫 Out of Scope
- Token expiration dates (tokens are permanent until revoked)
- Scoped permissions (tokens have full account access)
- Token usage analytics beyond basic tracking
- Bulk token operations

### 🏗️ Implementation Approach
- **Frontend**: Token management interface within account settings
- **Backend**: Secure token generation using cryptographic libraries
- **Database**: Token storage with user association and metadata
- **API Integration**: Bearer token validation across all protected endpoints
- **Security**: Token hashing and secure storage practices

### 📊 Success Metrics
- Token generation success rate 100%
- API authentication success rate >99% for valid tokens
- Token revocation immediate effectiveness
- Zero unauthorized access incidents
- User adoption rate for device connectivity features

### 🔗 Related Features
- [🧑‍🚀 User editing](user-editing.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)
- [🎥 Video streaming via API](../../entrance_observer/features/🎥%20Video%20streaming%20via%20API.md)

### 📚 Resources & References
- [API token usage in entrance observer](https://github.com/Gratheon/entrance-observer/blob/main/example.env)
- [Telemetry API authentication documentation](../../scales/features/📈%20Telemetry%20API.md)

### 💬 Notes
Critical security feature enabling device connectivity. Essential for entrance observers, telemetry systems, and any hardware integrations requiring secure API access.

---
**Last Updated**: November 18, 2025
**Next Review**: December 2025
