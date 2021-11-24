const Router = require("koa-router");
const router = new Router();
const Mock = require("mockjs");

//people
const mockPeople = Mock.mock({
  "peoples|10": [
    {
      "id|+1": 100,
      guid: "@guid",
      name: "@cname",
      age: "@integer(20, 50)",
      birthday: '@date("MM-dd")',
      address: "@county(true)",
      email: "@email",
    },
  ],
});

// post请求用户信息
router.post("/postUserList", async (ctx, next) => {
  // 打印post请求传递过来的参数
  console.log(JSON.stringify(ctx.request.body, null, 2));
  // 获取post请求参数中携带的idcls
  const index = ctx.request.body.id;
  ctx.body = JSON.stringify(ctx.request.body, null, 2);
});

// 导出 router 实例
module.exports = router;
