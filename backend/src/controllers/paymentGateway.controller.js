import paymentGatewayService from "../services/paymentGateway.service.js";

const paymentGatewayController = {
  async createSession(req, res) {
    const { name, description, currency, unit_amount, quantity, mode, success_url, cancel_url } = req.body;

    try {
      const session = await paymentGatewayService.createSession({ name, description, currency, unit_amount, quantity, mode, success_url, cancel_url });
      res.status(200).json({ message: "Stripe exitoso", session: session });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getCheckoutSession(req, res) {
    const { sessionID } = req.query;

    try {
      const session = await paymentGatewayService.getCheckoutSession(sessionID);
      res.status(200).json({ message: "Session de Stripe exitoso", session: session });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async cancel(req, res) {
    try {
      res.redirect('/');
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

export default paymentGatewayController;