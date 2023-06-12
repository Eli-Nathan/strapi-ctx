"use strict";

/**
 * author router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/authors",
      handler: "author.find",
      middlewares: ["enrich-author"],
    },
  ],
};
