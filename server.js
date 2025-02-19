const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(jsonServer.defaults());
server.use(auth);
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
