import { request } from '../network/request'
import router from '../router/index'
import Vue from 'vue';
export default {
    //  注册功能
    registeUser(context, user) {
        request({
            // url:"/user",
            //测试接口
            url: "/search?keywords=勾指起誓",
            method: "get",
            // data: {
            //     user: user,
            // }

        }).then(result=>{
        console.log(result);
        
            router.push("/login");

        }).catch(err=>{
            console.log(err);
            
        })

},



//登录验证功能
verifyUser(context, user) {
    request({
        // url:"/user",
        //测试接口
        url: "/search?keywords=勾指起誓",
        method: "get",
        // params:{
        //    username:user.email,
        //    password:user.password
        // }

    }).then(result => {
        context.commit("saveUserData", result);
        console.log(1);

        router.push("/home");
        console.log(1);


    }).catch(err => {
        Vue.set(context.state, "message", "登录失败");
    })


}



}