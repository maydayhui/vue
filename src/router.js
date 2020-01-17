import VueRouter from 'vue-router'
import home from '../components/tabbar/HomeContainer.vue'
import member from '../components/tabbar/MemberContainer.vue'
import shopcar from '../components/tabbar/ShopcatContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'
import newslist from '../components/news/NewList.vue'
import newsinfo from '../components/news/NewsInfo.vue'
import photolist from '../components/photos/PhotoList.vue'
import photoinfo from '../components/photos/PhotoInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

var router = new VueRouter({
  routes:[
    {path:'/', redirect:'/home'},
    {path:'/home', component:home},
    {path:'/member', component:member},
    {path:'/shopcar', component:shopcar},
    {path:'/search', component:search},
    {path:'/home/newslist', component:newslist},
    {path: '/home/newsinfo/:id', component:newsinfo},
    {path:'/home/photolist', component:photolist},
    {path:'/home/photoinfo/:id', component:photoinfo},
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
    
  ],
  linkActiveClass: 'mui-active'
   
   
})

export default router