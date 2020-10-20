import { request } from '../network/request'
import router from '../router/index'
import Vue from 'vue'
import store from '@/store'
export default {
    getDocumentById(context,id){
        request({
            url:"/apis/queryDocumentById",
            method:"get",
            params:{
                id:id,
            }
        }).then((result)=>{
            if(result!=null&&result!=null){
                context.commit("getDocumentById" ,result)
                router.push("/blogDocm")
            }
        },(err)=>{
            //尝试elem组键信息框
        })

    },
    //注销用户
    logout(context){
        request({
            url:"/apis/uesrLogout",
        }).then((result)=>{
            context.commit("saveUserData", "");
        },(err)=>{
            context.commit("saveUserData", "");
        })
    },

//添加文档
createBlog(context,data){
    request({
        url:"document/saveDocument",
        method:"post",
        data:{
            title:data.title,
            document:data.document,
            classify:classify
        }
    }).then((result)=>{
        if(result=="success"){
            // router.push("/home");
        }
    },(err)=>{

    })

},

    //文档查询
    getDocument(context) {
        request({
            url: "document/queryDocuments",
            method: "get",
            params:{
                start : store.state.documentStart,
            }
        }
        ).then((result) => {

            console.log(result.content);
            if(result != "" && result != undefined){
                context.commit("getDocument",result.content);
                context.commit("updateDocumentStart");
            }
        }, (err) => {
            alert("查询失败")
        })

    },





    //  注册功能
    registeUser(context, user) {
        console.log(user);
        request({
            url: "/user",
            method: "post",
            data: {
                name: user.name,
                password: user.password,
                email: user.email
            },

        }).then(result => {
            console.log(result);
            if (result == 1) {
                store.state.registeMessage = "注册成功，正在跳转"
                setTimeout(() => {
                    router.push("/login");
                    store.state.registeMessage = ""
                }, 2000);
            }

        }).catch(err => {
            console.log(err);

        })

    },


 //登录验证功能byid
 verifyUserById(context) {
    request({
        url: "/apis/userId",
        //测试接口
        // url: "/search?keywords=勾指起誓",
        method: "get",

    }).then(result => {
        context.commit("saveUserData", result);
        if (result != "" && result != undefined) {
            context.commit("saveUserData", result);
    
        }

    }).catch(err => {
        Vue.set(context.state, "message", "登录失败");
    })


},


    //登录验证功能
    verifyUser(context, user) {
        request({
            url: "/user",
            //测试接口
            // url: "/search?keywords=勾指起誓",
            method: "get",
            params: {
                name: user.name,
                password: user.password
            }

        }).then(result => {
            context.commit("saveUserData", result);
            if (result != "" && result != null) {
                router.push("/home");
            }

        }).catch(err => {
            console.log(err);

            Vue.set(context.state, "message", "登录失败");
        })


    }



}