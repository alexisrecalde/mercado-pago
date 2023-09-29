import Express from "express";
import PaymentRouter from "./routes/payment.js";
import { PORT } from "./routes/config.js";
import morgan from "morgan";

const app = Express();

app.use(morgan("dev"));

app.use(PaymentRouter);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
