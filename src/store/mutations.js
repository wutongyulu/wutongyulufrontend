import Vue from 'vue';
export default {
        getDocumentById(state,data){
        state.documentById = data;

        },
        
        //文档计数
        updateDocumentStart(state) {
                state.documentStart += 10;

        },


        //更改document文档
        getDocument(state, data) {
                state.document.push(data);
                console.log( state.document);
        },

        //更改user
        saveUserData(state, data) {
                console.log(data);

                //插入userDto数据
                Vue.set(state, "userDto", data);

        }


}