const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
// 将koa和中间件连起来
app.use(router.routes()).use(router.allowedMethods());
// get请求用户信息
const userInfo = require("./state/userinfo");
app.use(userInfo.routes(), userInfo.allowedMethods());
const buildingSet = require("./state/buildingSet");
app.use(buildingSet.routes(), buildingSet.allowedMethods());

const postdata = require("./state/postdata");
app.use(postdata.routes(), postdata.allowedMethods());

// 设置启动端口

let port = 3000;
// http://localhost:3000

app.listen(port, (ctx) => {
  console.log("\u001b[33m心跳服务启动成功");
  router.get("/", async (ctx, next) => {
    ctx.body = `
        <h2 style="text-align: center;margin: 10%;">
            当你看到此页面时表示服务启动成功
        </h2>
        `;
  });
});
