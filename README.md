# News From the Wormhole
Read the latest news articles and blog posts regarding space flight.

## Built With
- [This awesome React/Tailwind/Vite/TypeScript boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)
- React
- Tailwindcss
- Vite
- [Spaceflight News Api](https://spaceflightnewsapi.net/)
- [Heroicons](https://heroicons.com/)

## Contribute [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Please feel free to contribute to this open source project. First timers are more than welcome. Take a look at the open issues under the [issues tab](https://github.com/JasonFritsche/news-from-the-wormhole/issues). If you identify a bug, or would like to implement a feature that isn't posted under the issues, please feel free to submit a new issue. Also, if you see anything that needs to be updated in the README file, you're more than welcome to update it. **For issues you want to work on please assign yourself to the issue.**

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

### Getting Started

1. Fork the project.
2. Clone your fork.
3. Make sure you are in the right directory: `cd news-from-the-wormhole`.
4. Add an `upstream` remote for keeping your local repository up-to-date:
   > `git remote add upstream git@github.com:JasonFritsche/news-from-the-wormhole.git`
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start your dev environment.

### Creating a new PR

1. Make sure you are on the `main` branch, and you have pulled the latest changes.

   > `git checkout main && git pull upstream main`

2. Install any new dependencies: `npm install`.

3. Create a new branch off of the `main` branch.

   > `git checkout -b [NEW BRANCH NAME]`

   > **Branch naming conventions:** `fix/[BRANCH]` for bug fixes, `feat/[BRANCH]` for new features, `doc/[BRANCH]` for changes to documents. The `[BRANCH]` portion should be kebab case. For example, if you want to update the README.md file, your branch could be called `doc/update-readme`.

4. Make changes and fix any warnings and/or errors that arise in the console.
5. Commit your changes: `git add . && git commit -m [YOUR COMMIT MESSAGE]`.

   > The subject of a commit message (the first line) should be 72 characters or less. If you need more room for a longer explanation of your changes, you can add a blank line below the subject and write a commit body. The commit message should be in present-imperative tense ("update README.md" rather than "updates" or "updated").

6. Push your branch to your fork: `git push -u origin [BRANCH NAME]`.
7. Open a new PR against the `main` branch from your fork using the GitHub user interface.
