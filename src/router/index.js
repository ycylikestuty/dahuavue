import Vue from 'vue'
import Router from 'vue-router'   // 引入路由
import Login from '../views/Vedio'  // 引入刚刚暴露出去的 页面组件 Login
import Main from '../views/Main'   

Vue.use(Router); // 使用路由 必须
//配置路由 规则
export default new Router({
    routes:[{   
       //查看视频页  路由
        path:"/vedio",                // 路径
        name:'Vedio',               // 名称
        component:Login        // 跳转页面（组件）
    },
	//开始页  路由
    {
        path:"/",
        name:'Main',
        component:Main
    }
]
})
