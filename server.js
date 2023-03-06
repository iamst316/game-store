//sk_test_51MiBO5SCYRjE8Z5GeSS60Ro0KYmwMdvv9D6crTkP6S7V0qE4V6LfW7LadZpHURXxA4eHEEgdpQSvjT4u9MV4vY90006IZ8pYG5

//price_1MihoJSCYRjE8Z5GiK4iSSd0

//price_1MihnvSCYRjE8Z5G6UKuFN7r

//price_1MihnASCYRjE8Z5GFBJWu5yW

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MiBO5SCYRjE8Z5GeSS60Ro0KYmwMdvv9D6crTkP6S7V0qE4V6LfW7LadZpHURXxA4eHEEgdpQSvjT4u9MV4vY90006IZ8pYG5');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));