const Router = require("koa-router");
const router = new Router();
const cors = require("koa-cors");
const Mock = require("mockjs");
//people
const mockPeople = Mock.mock({
  "peoples|1-5": [
    {
      id: "@id", // 身份证号
      guid: "@guid",
      name: "@cname",
      age: "@integer(20, 50)",
      birthday: '@date("MM-dd")',
      address: "@county(true)",
      email: "@email",
      "warnName|1": ["报警类型1", "报警类型2", "报警类型3"],
      "contact|4": "abc",
      "string|+3": "string",
      hasParent: "@boolean",
      date: "@datetime",
      childList: function () {
        let hasParent = this.hasParent;
        if (hasParent) {
          const mockChild = Mock.mock({
            "child|1-3": [{ guid: "@guid", name: "@cname" }],
          });
          return mockChild["child"];
        }
        return null;
      },
    },
  ],
});
//ctx.params 路由传值
//ctx.query  参数传值
//ctx.request.body Post参数
router.get("/userInfo", async (ctx, next) => {
  // 打印get请求携带的参数
  console.log(ctx.query);
  console.log(JSON.stringify(mockPeople["peoples"], null, 2));
  // 允许cors跨域请求
  await cors();
  ctx.body = JSON.stringify(mockPeople["peoples"], null, 2);
});

// 导出 router 实例
module.exports = router;
