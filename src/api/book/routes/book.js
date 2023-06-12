"use strict";

/**
 * book router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/books",
      handler: "book.find",
      middlewares: ["enrich-book"],
    },
  ],
};
