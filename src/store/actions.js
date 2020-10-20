import { request } from '../network/request'
import router from '../router/index'
import Vue from 'vue';
import store from '@/store'
import qs from 'qs'
export default {
    //  注册功能
    registeUser(context,user) {
        console.log(user);
        request({
            url:"/UserInfo/saveUserInfo",
            method: "post",
            data: {
                 username:user.email,
                 password:user.password,
                 name:user.username
            },
           
        }).then(result=>{
        console.log(result);
                if(result.code == 200){
                   store.state.registeMessage = "注册成功，正在跳转"
                   setTimeout(() => {
                    router.push("/login");
                    store.state.registeMessage = ""
                   }, 2000);
                }else {
                    store.state.registeMessage = result.message;
                }

        }).catch(err=>{
            console.log(err);
        })

},



//登录验证功能
verifyUser(context, user) {
    request({
        url:"/user",
        //测试接口
        // url: "/search?keywords=勾指起誓",
        method: "get",
        params:{
            name:user.name,
            password:user.password
        }

    }).then(result => {
        context.commit("saveUserData", result);
        if(result !="" && result !=null){
        router.push("/home");
    }

    }).catch(err => {
        console.log(err);
        
        Vue.set(context.state, "message", "登录失败");
    })


}



}