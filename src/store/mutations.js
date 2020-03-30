import Vue from 'vue';
export default {
        saveUserData(state, data) {
            //插入userDto数据
           Vue.set(state, "userDto", data);
         
        }


}