// https://www.cnblogs.com/jasonwang2y60/p/7302449.html
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
//这个是后台服务器的地址
const preUrl = 'http://160.0.0.188:9090/';
// mock一组数据
const goodsList = function () {
    let list = [];
    for (let i = 0; i < 10; i++) {
        let goods = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        list.push(goods)
    }

    return {
        list: list
    }
    console.log('mock 拦截 goodsList')
}

// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock(preUrl'/news/index', 'post', produceNewsData);
// http://160.0.0.188:9090/api/goodsList   可以拦截
// http://160.0.0.188:9090/api/goodsList?type=all  无法拦截
// post 请求可以直接拦截url  但是get请求 地址栏参数问题 需要用正则表达式拦截
// 参考 https://github.com/PanJiaChen/vue-element-admin/blob/master/src/mock/index.js
Mock.mock(/api\/goodsList/, 'get', goodsList);
