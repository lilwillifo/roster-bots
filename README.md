# Roster Bots

<!-- Foodi allows users to track their eating habits and nutrition. Use the search bar to find calorie and nutrition information for any food. When logged in, you can enter the number of servings and save to your daily diary. Save time by selecting from your frequently eaten foods. Then head to the analytics page to see a nutritional breakdown. The deployed version can be found [here](https://foodi-tracker.herokuapp.com/). -->

## Getting Started

1. Clone this repository.

  ```shell
  git clone git@github.com:lilwillifo/roster-bots.git
  ```
2. Change into the `roster-bots` directory

3.  Install dependencies
  ```shell
  npm install
  ```

4. Run test suite (unit and feature tests).

  ```shell
    npm test
  ```
5. Fire up your servers. We'll need both a backend and front end server running.
  From the project root directory:
    ```shell
      npm start
    ```

  Then in a separate tab:
  ```shell
    cd client
    npm start
  ```
  6. Visit `http://localhost:3000/` to create your team!
  7. If you'd like to see the raw JSON, visit http://localhost:3001/api/v1/generate_team


### Prerequisites

<!-- You'll need [Django](https://www.djangoproject.com/) and [Python3](https://www.python.org/downloads/) installed -->


## Contributing

Please follow the Getting Started guide to set up your local dev environment.

This guide assumes that the git remote name of the main repo is `upstream` and that your fork is named `origin`.

Create a new branch on your local machine to make your changes against (based on `upstream/master`):

    git checkout -b branch-name-here --no-track upstream/master

Make sure the tests pass on your new branch:

    `npm test`

### Making a change

Make your changes to the codebase. I recommend using TDD. Add a test, make changes and get the test suite back to green.

Once the tests are passing you can commit your changes. See [How to Write a Good Commit Message](https://chris.beams.io/posts/git-commit/) for more tips.

    git add .
    git commit -m "Add a concise commit message describing your change here"

Push your changes to a branch on your fork:

    git push origin branch-name-here
### Submitting a Pull Request

Use the GitHub UI to submit a new pull request against upstream/master. To increase the chances that your pull request is swiftly accepted please have a look at this guide to [making a great pull request](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)

TL;DR:
* Write tests
* Make sure the whole test suite is passing
* Keep your PR small, with a single focus
* Maintain a clean commit history
* Use a style consistent with the rest of the codebase
* Before submitting, [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on the current master branch
## Built With

<!-- * [Django](https://www.djangoproject.com/) - Web Framework
* [Plotly](https://plot.ly/feed/#/) - Building data visualization
* [Django Rest Framework](http://www.django-rest-framework.org/) - Backend API to feed data to Plotly
* [JQuery](https://jquery.com/) - Asynchronous loading of charts
* [Bootstrap](https://getbootstrap.com/) - Bootstrap for styling
* [Behave-Django](https://github.com/behave/behave-django) - Django package for BDD testing -->


## Authors

* **Margaret Williford**

## Acknowledgments

<!-- * A huge shoutout to [Vitor Freitas](https://simpleisbetterthancomplex.com/). For nearly every Django issue I ran into, he had written a blog post to solve my problem. -->
