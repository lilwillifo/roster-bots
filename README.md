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
* [React](hhttps://reactjs.org/) - A JavaScript library for building user interfaces
* [Mocha](https://mochajs.org/) - JavaScript test framework running on Node.js


## Authors

* **Margaret Williford**
