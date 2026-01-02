import { REST, Routes } from "discord.js";
import "dotenv/config";

const commands = [
  {
    name: "uranai",
    description: "誕生日から占います",
    options: [
      {
        name: "birthday",
        description: "YYYY-MM-DD",
        type: 3,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("サーバー専用コマンド登録中...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("サーバー専用コマンド登録完了！");
  } catch (error) {
    console.error(error);
  }
})();
