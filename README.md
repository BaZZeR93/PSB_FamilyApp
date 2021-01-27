# PSB_FamilyApp

*Family App* is a web-based application through family members can manage their activities, budget and free time.

Roles in the team:

* Irina Covrescu – Business analyst
* Florin Smeu - Designer
* Robert Rada – Front-end Developer, QA Engineer
* Radu Nechita – Back-end Developer
* Robert Roman - Devops Engineer

# Requirements:

* ##  Registration page:
Each member of a family (parent or child) should first register using the registration form.

### Acceptance criteria:

* User need to provide username, email and a password.
* User is only able to submit after all fields are correctly filled.

*  ## Login page:
After registration is done, the user can enter his account using his email and password.

### Acceptance criteria:

* If the user is not registered, he can not enter his account.
* If username or email does not correspond with the password, he can not enter his account.

*  ## Recover password page:
If the user forgot the password, he can choose to reset it.

### Acceptance criteria:

* If the user is not registered, he will not receive an email with the new password.

npm test fix error on windows:

Run PowerShell as Administrator
Run Set-ExecutionPolicy RemoteSigned
