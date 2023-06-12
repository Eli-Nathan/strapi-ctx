const populateList = ["books"];

const enrichCtx = (ctx) => {
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

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    const newCtx = enrichCtx(context);
    context = newCtx;
    await next();
  };
};
