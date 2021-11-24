/*
 * @Descripttion:
 * @version:
 * @Author: yunx
 * @Date: 2021-11-19 19:45:18
 * @LastEditors:
 * @LastEditTime: 2021-11-24 20:30:30
 */
const Router = require("koa-router");
const router = new Router();
const cors = require("koa-cors");
const Mock = require("mockjs");

//people
const buildingSet = Mock.mock({
  "peoples|10": [
    {
      "id|+1": 5600246,
      name: "@title",
      code: "@guid",
      structureType: null,
      area: 0,
      projectId: 5605112,
      openingTime: null,
      presaleTime: null,
      extData: null,
      businessTypeId: null,
      segmentId: 5600746,
      segmentName: "旭辉测试标段",
      businessTypeName: null,
      hasParent: "@boolean",
      childList: function () {
        if (this.hasParent) {
          return Mock.mock({
            "childList|+5": [
              {
                guid: "@guid",
                name: "@cname",
              },
            ],
          });
        }
        return null;
      },
    },
  ],
});

//ctx.params 路由传值
//ctx.query  参数传值
//ctx.request.body Post参数

router.get("/projects/5605112/buildingSet", async (ctx, next) => {
  // 打印get请求携带的参数
  console.log(ctx.query);
  // 允许cors跨域请求
  await cors();
  ctx.body = JSON.stringify(buildingSet["peoples"], null, 2);
});

// 导出 router 实例
module.exports = router;
