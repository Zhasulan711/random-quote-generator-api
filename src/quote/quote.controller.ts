import type { Request, Response } from "express";

import * as QuoteService from "./quote.service";
import { handleControllerError } from "../shared/utils/handleControllerError";

// Get all quotes
// PARAMS: none
export const listQuotesController = handleControllerError(
  async (request: Request, response: Response) => {
    const quotes = await QuoteService.listQuotes();
    return response.status(200).json(quotes);
  }
);

// Get a single quote by ID
// PARAMS: id
export const getQuoteController = handleControllerError(
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    const quote = await QuoteService.getQuote(id);
    return quote
      ? response.status(200).json(quote)
      : response.status(404).json("Quote not found");
  }
);
