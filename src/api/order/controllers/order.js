("use strict");
const stripe = require("stripe")(
  "sk_test_51MPVLyKnQZ3NP7WypNm7zH3MHKAdY7EWLj0Rf3OhCpyXwPJfiKW2SGu2YFJ5eiURQquzlZaW8k58RXGtaVPSDt9s00aHyvNRew"
);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.slug);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        // shipping_address_collection: { allowed_countries: ["US", "CA"] },
        // payment_method_types: ["card"],
        line_items: lineItems,

        mode: "payment",
        success_url: process.env.CLIENT_URL + "?success=true",
        cancel_url: process.env.CLIENT_URL + "?success=false",
      });
      await strapi
        .service("api::order.order")
        .create({ data: { products, stripe_id: session.id } });
      console.log({ session });
      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
