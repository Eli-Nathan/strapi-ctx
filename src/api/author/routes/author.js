"use strict";

/**
 * author router
 */
const populateList = ["books"];
const enrichCtx = (ctx) => {
  console.log(`
    ==========
    ${ctx}
    ==========
  `);
  if (!ctx.query) {
    ctx.query = {};
  }
  if (!ctx.query.pagination) {
    ctx.query.pagination = {};
  }
  ctx.query.pagination = {
    ...ctx.query.pagination,
    pageSize: ctx.query.pagination?.pageSize || 100,
  };
  const currentPopulateList = ctx.query.populate || [];
  ctx.query.populate = [...currentPopulateList, ...populateList];
  return ctx;
};

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/authors",
      handler: "author.find",
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
