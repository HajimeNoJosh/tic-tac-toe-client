[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe-client

This project is for General Assembly SEI-05 first project of a 10 week full time immersive. We were tasked with creating a tic-tac-toe game engine supporting a Authentication API and Game storage API. This project includes: Sign-in, Sign-up, Change Password, Sign-out, Amount of games played per account, games completed, games in progress and Tic-Tac-Toe game engine.

I began my project with game logic. I updated my html to visualize the game board better. From there I created an array for my board and created a way to switch between users. I wanted to be able to fill up my array with said player pieces as they made moves. I was also begining to manipulate the page with my pieces. I realized that I needed to check for winners and I could not think of a intial DRY way to do this, so I began to hard code my idea out. Basically wanted to check index of board based off the win condition. So, win1[0, 1, 2] would be board[0] board[1] and board[2] which should all equal the same letter. This is also why I use numbers instead of empty strings in my board array. I also wanted to know which turn it was which would come in handy later as I wanted to switch whose turn it was and visualize this for users. I also began to realize how useful a reset feature would be and began to expand it upon it with more data. I began to split files a little. Mostly looking to not work in app.js as I wanted to begin work on APIs. As I continued I ran into issues with my game and needed to fix these bugs in order to better work with my API. I would like to continue to DRY and split my code, I would also like to let users be able to call upon a previous game and fill up there game board with that game and continue it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install dependencies with npm install.

## Built With

* [Javascript](https://www.javascript.com/) - The main game engine
* [Jquery](https://jquery.com/) - The main library used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/HajimeNoJosh/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Joshuah Martin** - *Initial work* - [HajimeNoJosh](https://github.com/HajimeNoJosh)


## License

This project is licensed under the CC-BY-NC-SA 4.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* General Assembly
