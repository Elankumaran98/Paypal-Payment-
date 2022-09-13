const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("STRIPE_SECRET_TEST");
const uuid = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Kumaran");
});

app.post("/pay", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  const idempotency_key = uuid();

  return stripe.custom
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
          amount:product.price*100,
          currency: "USD",
          customer: customer.id,
          receipt_email:token.email,
          description: `purchase of ${product.name}`,
          shipping_method:{
              name:token.card.name, 
              address:{
                  country:token.card.address_country,
              }
          }
      }, idempotency_key);
    })
    .then((result) => {
      res
        .status(200)
        .json(result)
        .catch((err) => {
          console.log(err);
        });
    });
});

app.listen(7777, () => {
  console.log("listening on Port 7777");
});
