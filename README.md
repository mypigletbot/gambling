# Gamble Bot

Gamble Bot is a Discord bot that allows users to play gambling games such as slots.

## Features

- Slots game with various payouts

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/mypigletboy/gamble-bot.git
    cd gamble-bot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Discord bot token:
    ```env
    DISCORD_TOKEN=your_discord_token_here
    ```

4. Start the bot:
    ```sh
    npm start
    ```

## Usage

- Use the `/slots` command to play the slots game. You can specify the amount to bet using the `bet` option.

## Commands

- `/slots bet:<amount>` - Try your luck in the slots! Use `m` for max and `a` for all in.

## Payouts

- 3 bells = 500:1
- 2 bells = 25:1
- 3 bars = 25:1
- 2 bars = 10:1
- 3 cherries = 5:1
- 2 cherries = 3:1
- 3 lemons = 3:1
- 2 lemons = 2:1
- 3 oranges = 2:1
- 2 oranges = 1:1
- 3 grapes = 1:1
- 2 grapes = 1:1
- 2 plums = 1:1
- 3 plums = 3:4
- 2 watermelons = 3:4
- 3 watermelons = 1:2
- 3 apples = 1:2
- 2 apples = 1:4

No match = 0

## License

This project is licensed under the ISC License.
