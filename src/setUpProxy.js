import React from "react";

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gharaanav1-1.onrender.com',
      changeOrigin: true,
    }),
  )
}