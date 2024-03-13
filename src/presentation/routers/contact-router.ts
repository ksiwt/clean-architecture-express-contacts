import express, { Request, Response } from "express";
import { GetAllContactsUseCase } from "../../use-cases/contact/get-all-contact";
import { CreateContactUseCase } from "../../use-cases/contact/create-contact";

export default function ContactRouter(
  getAllContactsUseCase: GetAllContactsUseCase,
  createContactUseCase: CreateContactUseCase
) {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const contacts = await getAllContactsUseCase.execute();
      res.send(contacts);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      await createContactUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Error saving data" });
    }
  });

  return router;
}
