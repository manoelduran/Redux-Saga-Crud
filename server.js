const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors");
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults({
    static: "./build"
});

const port = 5000;
server.use(middleware);
server.use(jsonServer.rewriter({
    "/api/*": "/$1"
}));
server.use(router);
server.use(cors());
server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
