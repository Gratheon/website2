## Why

For user management, we need email verification to prevent users registering with emails they do not and side-effects due to that like

- inadvertently spamming others
- having account driven away because of using wrong email
- blocking others from registering with their email

## Suggested solution

### Activations

- During user registration
    - generate verification URL
        - update it in user table
    - send email verification URL on user registration
    - update that user was activated once user visits the link
- In user profile, show if user email was verified or not
- If user email was not verified, he should not receive any alerts to that email, see [Alerts](https://www.notion.so/Alerts-8b65dea8fc164a7f91b0a76fa0948189?pvs=21)

### Email change

- to change email from user profile, user must
    - enter new email
    - have email verified that its not in use by other accounts
    - receive new email verification URL