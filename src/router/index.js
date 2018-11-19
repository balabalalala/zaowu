import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import My from '@/pages/my'
import Kind from '@/pages/kind'
import Find from '@/pages/find'
import Register from '@/pages/register'
import Loading from '@/pages/loading'
import ShoppingCar from '@/pages/shoppingCar'
import ConfirmOrder from '@/pages/confirmOrder'
import Login from '@/pages/login'
import Setting from '@/pages/set'
import Order from '@/pages/order'
import LookLogistic from '@/pages/lookLogistic'
import Evaluate from '@/pages/evaluate'
import OrderDetail from '@/pages/orderDetail'
import PaymentResult from '@/pages/paymentResult'
import CustomerService from '@/pages/customerService'
import Coupon from '@/pages/coupon'
import ReceivingAddress from '@/pages/ReceivingAddress'
import Security from '@/pages/security'
import CustomerContact from '@/pages/customerContact'
import PersonalData from '@/pages/personalData'
import PayBind from '@/pages/payBind'
import Collection from '@/pages/collection'
import About from '@/pages/about'
import TypeDetail from '@/pages/kind/TypeDetail'
import KindDetail from '@/pages/KindDetail'
import Underwear from '@/pages/Underwear'
import GoodRecommond from '@/pages/GoodRecommond'
import ArticleDetail from '@/pages/ArticleDetail'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta:{setNavShow:true}
            
        },
        {
            path: '/loading',
            name: 'Loading',
            component: Loading,
            meta:{setNavShow:false},
        },
        {
            path: '/shoppingCar',
            name: 'ShoppingCar',
            component: ShoppingCar,
            meta: { setNavShow: false }
        },
        {
            path: '/confirmOrder',
            name: 'ConfirmOrder',
            component: ConfirmOrder,
            meta: { setNavShow: false },
        },
        {
            path: '/my',
            name: 'My',
            component: My,
            meta: { setNavShow: true }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: { setNavShow: false },
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { setNavShow: false },
        },
        {
            path: '/set',
            name: 'Setting',
            component: Setting,
            meta: { setNavShow: false }
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
            meta: { setNavShow: false },
        },
        {
            path: '/lookLogistic',
            name: 'LookLogistic',
            component: LookLogistic,
            meta: { setNavShow: false },
        },
        {
            path: '/evaluate',
            name: 'Evaluate',
            component: Evaluate,
            meta: { setNavShow: false },
        },
        {
            path: '/orderDetail',
            name: 'OrderDetail',
            component: OrderDetail,
            meta: { setNavShow: false },
        },
        {
            path: '/paymentResult',
            name: 'PaymentResult',
            component: PaymentResult,
            meta: { setNavShow: false },
        },
        {
            path: '/customerService',
            name: 'CustomerService',
            component: CustomerService,
            meta: { setNavShow: false },
        },
        {
            path: '/ReceivingAddress',
            name: 'ReceivingAddress',
            component: ReceivingAddress,
            meta: { setNavShow: false },
        },
        {
            path: '/coupon',
            name: 'Coupon',
            component: Coupon,
            meta: { setNavShow: false },
        },
        {
            path: '/security',
            name: 'Security',
            component: Security,
            meta: { setNavShow: false },
        },
        {
            path: '/customerContact',
            name: 'CustomerContact',
            component: CustomerContact,
            meta: { setNavShow: false },
        },
        {
            path: '/personalData',
            name: 'PersonalData',
            component: PersonalData,
            meta: { setNavShow: false },
        },
        {
            path: '/payBind',
            name: 'PayBind',
            component: PayBind,
            meta: { setNavShow: false },
        },
        {
            path: '/collection',
            name: 'Collection',
            component: Collection,
            meta: { setNavShow: false },
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: { setNavShow: false },
        },
        {
            path: '/kind',
            name: 'Kind',
            component: Kind,
            meta: { setNavShow: true },
            children: [
                // {
                //     path: ':pType/:type',
                //     name: 'typeDetail',
                //     component: TypeDetail
                // },
                {
                    path:':id',
                    name:'KindDetail',
                    component:KindDetail,
                    meta: { setNavShow: true },
                    children: [{
                        path:':underwarId',
                        name:'Underwear',
                        component: Underwear,
                    }]
                },
            ]
        },
        {
            path: '/find',
            name: 'Find',
            component: Find,
            meta: { setNavShow: true },
            children:[
                {
                path:':id',
                name:'GoodRecommond',
                component: GoodRecommond
                },
                // {
                // path:':id1',
                // name:'ArticleDetail',
                // component: ArticleDetail
                // },
            ]
        }
    ],
    //linkActiveClass: 'is-active'//这是链接激活时的class
})