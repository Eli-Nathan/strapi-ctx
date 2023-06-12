"use strict";

/**
 * book router
 */
const populateList = ["author"];
const enrichCtx = (ctx) => {
  if (!ctx.query) {
    ctx.query = {};
  }
  const currentPopulateList = ctx.query.populate || [];
  ctx.query.populate = [...currentPopulateList, ...populateList];
  return ctx;
};

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/books",
      handler: "book.find",
      config: {
        middlewares: [
          async (context, next) => {
            const newCtx = enrichCtx(context);
            context = newCtx;
            await next();
          },
        ],
      },
    },
  ],
};
