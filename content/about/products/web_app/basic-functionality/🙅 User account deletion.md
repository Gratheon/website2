---
status: complete
---

# 🙅 User account deletion

### 🎯 Purpose
Enables users to permanently delete their Gratheon accounts and associated data in compliance with privacy regulations and app store requirements.

### 🎭 User Story
- As a registered beekeeper user
- I want to permanently delete my account and all associated data
- So that I can exercise my right to data deletion and remove my presence from the platform

### 🚀 Key Benefits
- **Privacy compliance**: Meets GDPR and Google Play Store data deletion requirements
- **Complete data removal**: Irreversible deletion of all user data and associations
- **Regulatory compliance**: Satisfies privacy law requirements for data subject rights
- **User control**: Full control over account lifecycle and data presence

### 🔧 Technical Overview
Account deletion system providing irreversible removal of user accounts and all associated data including hives, telemetry data, videos, and profile information. Implements Google Play Store compliance requirements for data deletion functionality.

### 📋 Acceptance Criteria
- Account deletion accessible at app.gratheon.com/account
- Clear "Delete Account" button with confirmation dialog
- Complete removal of user profile, hives, sensors, and telemetry data
- Irreversible deletion process with appropriate user warnings
- Compliance with Google Play Store data deletion requirements
- Confirmation message upon successful account deletion
- No data recovery options after deletion completion

### 🚫 Out of Scope
- Data export before deletion (separate feature)
- Temporary account deactivation (permanent deletion only)
- Selective data deletion (all or nothing approach)
- Account recovery after deletion

### 🏗️ Implementation Approach
- **Frontend**: Account deletion interface with clear warnings and confirmation
- **Backend**: Cascading deletion of all user-associated data
- **Database**: Complete removal from all tables and references
- **Compliance**: Implementation meeting Google Play Store requirements
- **Audit**: Deletion logging for compliance verification

### 📊 Success Metrics
- Account deletion completion rate 100% when initiated
- Data removal verification across all system components
- Zero data remnants after deletion process
- Compliance audit success rate
- User confirmation understanding before deletion

### 🔗 Related Features
- [🧑‍🚀 User editing](🧑‍🚀%20User%20editing.md)
- [💶 Billing subscription](💶%20Billing%20subscription.md)
- [🔐 API token management](🔐%20API%20token%20management.md)

### 📚 Resources & References
- [Google Play Store data deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Account deletion interface](https://app.gratheon.com/account)

### 💬 Notes
Regulatory compliance feature required for Google Play Store distribution. Implements irreversible account and data deletion with proper user warnings and confirmation.

## Flow

- Open [https://app.gratheon.com/account](https://app.gratheon.com/account)
- Click Delete Account to remove all of the data
- Its not reversible, data will be removed

![](../../../img/Screenshot%202024-06-02%20at%2014.13.40.png)

---
**Last Updated**: November 18, 2025
**Next Review**: December 2025
