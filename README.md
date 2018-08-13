# Roster Bots

This code challenge uses Node and React to create an algorithm that builds robot sports team. The league requires that your roster be filled out with 10 starters and 5
substitutes.
Each player bot needs a name, and has three attribute scores associated with each:
Speed
Strength
Agility
The total sum of the speed, strength, and agility attributes is calculated as the "total attribute score" for each
player bot.

The league has mandated that the total attribute score of each of your player bots can not exceed 100 points,
and no two players can have the same score, otherwise your team is disqualified from league play.
The league has also implemented a salary cap. Each team's roster can not exceed 175 points.

## The Algorithm
Thinking about this, there are several different ways to approach. My assumption was the owner would prefer the best possible starters, meaning the weakest substitutes. The methods built in Node are flexible in that they are structured to take optional parameters if the specifications changed down the line (eg: different salary cap, team size, number of starters, or max total attribute score). For the purposes of this assignment, I've set default values based on the specifications.

My approach involved giving lowest possible total attribute scores to substitutes (0 up to number of subs), then dividing the remaining points amongst the starters, while being sure not to duplicate values. I use this methodology first to create an array of all the total attribute scores (this is the `makeRoster` method in the `team.js` model).

From there, I map over these scores to create Player objects. Player names must be unique, as should their scores, so the player name is `teamName + totalScore`. A players speed, strength, and agility attributes are randomly assigned based on the total score.

### Future Iterations
In next steps, I'd like the user to have more choice in their team design. If they wanted their starters to be the top 10 agility players, rather than top 10 overall, I could update the sorting method I build to sort by that attribute instead of just the total attribute score. I'd also like to allow for user input in how many "throw-away" players they'd like. Currently, the team is built off of having 5 very low performing substitutes. It seems logical that someone may only want 1 or 2 low performers, or even none.

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

## Built With

* [Express](https://expressjs.com/) - A Minimalist Web Framework for Node.js
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Mocha](https://mochajs.org/) - JavaScript test framework running on Node.js


## Authors

* **Margaret Williford**
