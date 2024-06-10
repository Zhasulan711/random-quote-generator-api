import { db } from "../src/shared/utils/db.server";
import { getQuotes } from "./data/quotes";

const seed = async () => {
  await Promise.all(
    getQuotes().map((quote) => {
      const { author, content } = quote;
      return db.quote.create({
        data: {
          author,
          content,
        },
      });
    })
  );
};

seed();