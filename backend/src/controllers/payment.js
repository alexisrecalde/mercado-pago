import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

export const CreateOrder = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Celular",
        unit_price: 100,
        quantity: 1,
        currency_id: "ARS",
      },
    ],
    back_urls: {
      success:
        "https://1386-2800-810-4fb-2f1f-c896-177a-9a6d-b036.ngrok.io/success",
      failure:
        "https://1386-2800-810-4fb-2f1f-c896-177a-9a6d-b036.ngrok.io/failure",
      pending:
        "https://1386-2800-810-4fb-2f1f-c896-177a-9a6d-b036.ngrok.io/pending",
    },
    notification_url:
      "https://1386-2800-810-4fb-2f1f-c896-177a-9a6d-b036.ngrok.io/webhook",
  });

  res.send(result.body);
};

export const Webhook = async (req, res) => {
  try {
    const payment = req.query;

    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ error: error.message });
  }
};
