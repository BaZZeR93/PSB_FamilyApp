# PSB_FamilyApp

*Family App* is a web-based application through family members can manage their activities, budget and free time.

Roles in the team:

* Irina Covrescu – Business analyst
* Florin Smeu - Designer
* Robert Rada – Front-end Developer, QA Engineer
* Radu Nechita – Back-end Developer
* Robert Roman - Devops Engineer

# Requirements:

## * Registration page:
Each member of a family (parent or child) should first register using the registration form.

### Acceptance criteria:

User need to provide username and email.
User need to provide a password. Password can not be smaller than 6 characters.
User need to choose a role in the family he wants to register in.
User is only able to submit after all fields are correctly filled.

## * Login page:
After registration is done, the user can enter his account.

### Acceptance criteria:

If the user is not registered, he can not enter his account.
If username or email does not correspond with the password, he can not enter his account.

npm test fix error on windows:

Run PowerShell as Administrator
Run Set-ExecutionPolicy RemoteSigned
