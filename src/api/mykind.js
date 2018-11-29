import request from './request' 
// var editAdress = 'http://192.168.0.171/'
// var uploadAdress = 'http://192.168.0.171/api/admin/upload'
//获取分类列表
function getKindList(data){
    return request({
        method:'get',
        url:'bufanapi/api/kind/list',
        data
    })
}
// 根据分类id获取商品列表
// 获取商品信息列表
function getGoodsList(data){
    return request({
        method:'get',
        url:'bufanapi/api/admin/goods/list',
        data
    })
}
export default{
    getKindList,
    getGoodsList,
    // editAdress,
    // uploadAdress
}