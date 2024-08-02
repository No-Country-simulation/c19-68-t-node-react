import Stripe from 'stripe';
import CustomError from "../middlewares/error.middleware.js";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

class PaymentGatewayService {
  async createSession({ name, description, currency, unit_amount, quantity, mode, success_url, cancel_url }) {
    if (!name || !description || !currency || !unit_amount || !quantity || !mode || !success_url || !cancel_url) {
      throw new CustomError("Falta enviar datos obligatorios", 422);
    }

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              product_data: {
                name: name,
                description: description
              },
              currency: currency,
              unit_amount: unit_amount // Se pone en centimos, 20000 equivale a 200.00 dolares
            },
            quantity: quantity
          }
        ],
        mode: mode,
        success_url: success_url,
        cancel_url: cancel_url
      });

      return session;
    } catch (error) {
      throw new CustomError("Error creating Stripe session: " + error.message, 500);
    }
  }

  async getCheckoutSession(sessionID) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionID);
      return session;
    } catch (error) {
      throw new CustomError("Error retrieving Stripe session: " + error.message, 500);
    }
  }
}

export default new PaymentGatewayService();