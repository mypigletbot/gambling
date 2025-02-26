require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'slots') {
        const bet = interaction.options.getString('bet');
        // Add logic to handle the slots game
        const helpText = `
Try your luck in the slots!

The best odds match will be selected so if you get 3 bells and 2 bars, the payout will be for 2 bars.

Payouts:
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
        `;
        await interaction.reply(`You bet ${bet} on the slots!\n\n${helpText}`);
    }
});

client.login(process.env.DISCORD_TOKEN);
