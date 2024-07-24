import dotenv from "dotenv";
//config environment variables
dotenv.config();

import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);


const controllerPay = {

  createSession:  async (req, res) => {

    console.log("Se inicia la configuracion de Stripe");

    const {name, description, currency, unit_amount, quantity, mode, success_url, cancel_url} = req.body;

    if(!name || !description || !currency || !unit_amount || !quantity || !mode || !success_url || !cancel_url) {
      console.log("Falta enviar datos obligatorios");
      return res.status(422).json({message: "Falta enviar datos obligatorios"});
    }
    
    const session = await stripe.checkout.sessions.create({ 
                                                            line_items: [
                                                                {
                                                                  price_data: {
                                                                    product_data:{
                                                                      name: name,
                                                                      description: description
                                                                    },
                                                                    currency: currency,
                                                                    unit_amount: unit_amount //Se pone en centimos, 20000 equivale a 200.00 dolares
                                                                  },
                                                                  quantity: quantity
                                                                }
                                                            ],
                                                            mode: mode,
                                                            success_url: success_url,
                                                            cancel_url: cancel_url
                                                         });
    res.status(200).json({ message: "Stripe exitoso", session: session });
  },

  getCheckoutSession:  async (req, res) => {
    const { sessionID } = req.query;

    console.log("El sessionID de Stripe es: " + sessionID);

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionID);
      res.status(200).json({ message: "Session de Stripe exitoso", session: session });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
  },

  cancel:  async (req, res) => {
    res.redirect('/');
  },  

};

export default controllerPay;