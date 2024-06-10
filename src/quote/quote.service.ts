import { db } from "../shared/utils/db.server";
import { Quote } from "../shared/types";
import { quoteSelect } from "../shared/utils";

// Get all quotes
export const listQuotes = async (): Promise<Quote[]> => {
  return db.quote.findMany({
    select: quoteSelect,
  });
};

// Get a single quote by ID
export const getQuote = async (id: number): Promise<Quote | null> => {
  return db.quote.findUnique({
    where: {
      id,
    },
    select: quoteSelect,
  });
};
