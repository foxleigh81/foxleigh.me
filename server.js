if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const http = require("http");
const { postgraphile } = require("postgraphile");

http
  .createServer(
    postgraphile(
      process.env.DB_URL,
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        options: {
          appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")]
        }
      }
    )
  )
  .listen(process.env.PORT || 5000);