const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // ✅ ربط قاعدة البيانات
const middlewares = jsonServer.defaults();

server.db = router.db; // ✅ ربط قاعدة البيانات بالسيرفر

server.use(middlewares);
server.use(auth); // ✅ تفعيل المصادقة
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
