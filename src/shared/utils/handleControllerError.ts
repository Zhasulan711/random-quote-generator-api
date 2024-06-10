import type { Request, Response } from "express";

export const handleControllerError =
  (controllerFunc: Function) =>
  async (request: Request, response: Response) => {
    try {
      await controllerFunc(request, response);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  };
