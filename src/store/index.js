import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {//你的状态
        //购物车列表
        list:[],
        zongjia:0,
        isNavShow: true
    },
    getters: {
        //类似计算属性
    },
    mutations:{
        setNavShow(state,flag){
            state.isNavShow = flag;
        },
        //更改状态
        lessCount(state,item){
           for(let i = 0 ;i < state.list.length ;i++){
              if(state.list[i].id === item.id){
                 state.list[i].count -- ;  //记得返回并利用数据
                 //判断--的临界值
                 if(state.list[i].count < 1){
                    return  state.list[i].count = 1;
                 }
              }
          }
      },
        addList(state, item) {
            console.log(item)
            // 如果添加同类物品，筛选id重复的。只添加次数
            if (state.list.length > 0) {
                for (let i = 0; i < state.list.length; i++) {
                    if (state.list[i].id === item.id) {
                        return state.list[i].count += 1
                    }
                }
                state.list.push(item)
            } else {
                // 可以继续添加新一条信息
                state.list.push(item)
            }
        }
    }
})