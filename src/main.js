import App from './App.vue'
import routerMap from './routers'

Vue.config.devtools = true;
Vue.use(VueRouter);

// 创建一个路由实例
const router = new VueRouter({
    history: false
});
// 定义路由规则
routerMap(router);
router.redirect({
    '*': '/'
});

router.beforeEach((transition) => {
    document.body.scrollTop = 0;
    $('#drawer-toggle-btn').get(0).click();
    transition.next();
});

/**
 * 现在我们可以启动应用了！
 * 路由器会创建一个 App 实例，并且挂载到<body>上。
 */
router.start(App, 'body');
