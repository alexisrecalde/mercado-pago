import { Router } from "express";
import { CreateOrder, Webhook } from "../controllers/payment.js";

const router = Router();

router.post("/create-order", CreateOrder);

router.get("/success", (req, res) => {
  res.send("Success");
});

router.get("/failure", (req, res) => {
  res.send("failure");
});

router.get("/pending", (req, res) => {
  res.send("pending");
});

router.post("/webhook", Webhook);
export default router;
