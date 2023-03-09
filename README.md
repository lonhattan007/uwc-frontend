# UWC Frontend

## Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Bootstrap

- Clone this project

- Run the following commands inside the project folder:
	```bash
	nvm install && nvm use
	npm install
	npm run dev
	```

## Workflow

- To work on a new feature, checkout a new branch from the `main` branch on your local machine:
	```bash
	git checkout -b <branch-name>
	```
	- The branch name should be in the form of `ft/<functionality>`, for example `ft/login`

- To push changes from that new branch to the repo for the first time:
	```bash
	git push -u origin <branch-name>
	```
	- `<branch-name>` here is the name of the respective branch on the Github repo, and it should be similar to the local branch name.

- After that you can just push changes simply with `git push`.

- When a feature is ready for merging, create a `pull request`.

- __NEVER PUSH TO THE MAIN BRANCH__

## Project Structure

```markdown
uwc-frontent/
|__ src/
|   |__ assets/ - dynamic assets
|   |__ components/ - shared components
|   |__ pages/ - page-level components
|   |__ scss/styles.scss - global styling
|   |__ main.jsx - main js entry
|__ mocks/ - mock data
|__ tests/ - testing setup
|__ public/ - public assets
|__ index.html - HTML entry
|__ vite.config.js - Vite config
```

## Conventions

### Commits

- Commit messages should be in the form `<action> + <target>`, eg. _updated configs_
  - `<action>`: in past tense, eg. _added_, _updated_
  - `<target>`: files, packages, or features, eg. _side bar component_, _Bootstrap_, _assign task module_

### Naming

- Variables and functions should be named in camel case, eg. _selectedStaffs_, _customHook_

- Constants should be named in snake case with all caps, eg. _API_KEY_

- Components and their respective files should be named with Pascal case, eg. _AddStaffModal_, _AddStaffModal.jsx_.

- To be added.
