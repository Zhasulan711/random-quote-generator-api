import express from "express";

import * as QuoteController from "./quote.controller";
export const quoteRouter = express.Router();

// Get all quotes
// PARAMS: none
quoteRouter.get("/", QuoteController.listQuotesController);

// Get a single quote by ID
// PARAMS: id
quoteRouter.get("/:id", QuoteController.getQuoteController);
