import { db } from "../src/shared/utils/db.server";
import { getQuotes } from "./data/quotes";
import * as fs from "fs";
import path from "path";

const seed = async () => {
  await Promise.all(
    getQuotes().map((quote) => {
      const { author, content } = quote;
      const avatarPathFileName = `${author.replace(" ", "_")}.jpg`;
      const avatarFilePath = path.resolve(
        "./src/storage/images",
        avatarPathFileName
      );
      console.log(`Attempting to seed image with path: ${avatarFilePath}`);

      if (!fs.existsSync(avatarFilePath)) {
        console.error(`avatar file not found: ${avatarFilePath}`);
        process.exit(1);
      }

      return db.quote.create({
        data: {
          author,
          content,
          avatarPath: avatarPathFileName,
        },
      });
    })
  );
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
