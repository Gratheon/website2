To help beekeepers do [Varroa Treatment diary](https://www.notion.so/Varroa-Treatment-diary-90030bfde0c749ce922d43a2d46c273a?pvs=21) and plan their events without the need of using our app all the time, we should integrate popular google calendar to synchronize events

## User story: (dis-) connecting service

- I go to web-app → settings page → google integration
    - Ask our [Designer (UX / UI / Industrial)](https://www.notion.so/Designer-UX-UI-Industrial-454c89d18d7e4eeb822c54d9966bc169?pvs=21) to design google integrations page, or do yourself
- I click `Connect` button to authorize access to google API and user’s calendar data
    - it will need permissions to add/edit/delete events in calendar
    - proficiency with OAuth is needed here
    - we should be able to reuse some code and experience in user-cycle that does [**user-cycle - Login with google**](https://www.notion.so/user-cycle-Login-with-google-9b8ec50402e84c8a9960031fafd46552?pvs=21)
    - after OAuth process, we should store google tokens in our DB [table and service t
- If I authorized google calendar access, I get redirected back to same page, now instead of `Connect` button, I should see `Disconnect`
    - if I press `Disconnect`, we should cleanup stored tokens

![](../../../../img/Screenshot%202024-06-20%20at%2014.00.19.png)


example of the menu in Pipedrive app

![](../../../../img/Screenshot%202024-06-20%20at%2014.00.27.png)

an example of UI for Calendar sync in Pipedrive

![](../../../../img/Screenshot%202024-06-20%20at%2014.02.48.png)


An example dialog to enter custom email for calendar sync

- Once we get tokes and access, we should select which `calendar` we use for our events in case user has multiple calendars, for example in google calendar I mean these below →

![](../../../../img/Screenshot%202024-06-20%20at%2014.05.22.png)

## User story: event sync

- When user **adds** a new event in [Varroa Treatment diary](https://www.notion.so/Varroa-Treatment-diary-90030bfde0c749ce922d43a2d46c273a?pvs=21) or [Calendar view (of events, treatments, alerts)](https://www.notion.so/Calendar-view-of-events-treatments-alerts-49f6c9ffde1843099136db7333591f26?pvs=21), we should synchronize this event one way → google calendar
- When user **removes** event that was synchronized, we should remove it → from google calendar

### Two-way sync

- Allow user to have a setting. `one-way-sync` or `two-way-sync`.
    - In case of two-way sync, we would need to delete event from our system if user deletes it from google calendar. Research needed if this is doable and if there will be any side effects