import axios from 'axios'
//这个是后台服务器的地址
const preUrl = 'http://160.0.0.188:9090/';

// 接口的实现

function goodsList(params) {
    //希望
    //疑问？ api地址是谁？ 这个需要跟后台协商确定
    // http://160.0.0.188:9090/api/goodsList
    return http('api/goodsList', 'get', params);
}

// 添加商品
function goodsAdd(params) {
    return http('api/goodsAdd', 'post', params)
}

// 封装的axios的网络请求方法  不管get还是post都能处理
// 返回一个promise对象
function http(url, type, params) {
    //拼接出完整的url路径  http://160.0.0.188:9090/api/goodsList
    url = preUrl + url;
    var axiosParams = type == 'get' ? { params: params } : params;
    return new Promise((resolve, reject) => {
        if (type == 'get') {
            axios.get(url, axiosParams)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        } else {
            axios.post(url, axiosParams)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        }

    })
}


export default {
    goodsList,
    goodsAdd
}
