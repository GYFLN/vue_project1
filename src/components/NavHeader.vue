<template>
  <div class="navBox">
      <div  class="nav-header">
          <img class="mini" src="http://www.songguolife.com/nuts/images/phone_navLogo.png">
        
          <img v-show="!isShow" @click="isShow=!isShow" class="open-img" src="http://www.songguolife.com/nuts/images/nav_button.png">
          <img v-show="isShow" @click="isShow=!isShow" class="close-img" src='http://www.songguolife.com/nuts/images/nav_button_close.png'>

      </div>

      <div class="nav-content" v-show="isShow" @click="isShow=!isShow">
          <ul >
         
                <router-link :to="{path:'article'}" class="article" replace tag="li">文章</router-link>
     
           
                <router-link :to="{path:'active'}" class="article" replace  tag="li">活动</router-link>
            
                <router-link :to="{path:'live'}" class="article" replace  tag="li">连线</router-link>
            
                <router-link :to="{path:'column'}" class="article" replace  tag="li">课堂</router-link>
          
                <router-link :to="{path:'login'}" class="article" replace  tag="li">登录</router-link>
           
                <router-link :to="{path:'search'}" class="article" replace  tag="li"> <input type="text" placeholder="搜索松果"> </router-link>          
            
            
          </ul>
  </div>
  </div>

</template>

<script>
import {mapActions,mapState}  from 'vuex'
export default {
  name: 'NavHeader',
  data () {
    return {
      isShow:false
    
    }
  },
  computed:{

  },
  methods:{
    ...mapActions({getInfo:'getAcFun'})
  },


  mounted(){
    this.getInfo()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBox{
  position: relative;
}
.nav-header{
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content:space-between;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #eee;
  .mini{
    width:0.7rem;
    height:0.3rem;
    padding-top: 0.07rem;
    padding-left: 0.1rem;
  }
  .open-img,.close-img{
    width: 0.4rem;
    height: 0.4rem;
  }
}

.nav-content{ 
  position: absolute;
  z-index:4;
  background: #fff;;
  width: 100%;
  ul{
    width: 100%; 
    li{
        width:100%;
          list-style: none;
      height:0.44rem;
      text-align:center;
        line-height: 0.44rem;
      border-top: 1px solid #eee;
    }    
    .article{       
      font-size: 0.16rem;
      text-decoration: none;
      color:#000;
      input{
        background-image: url('http://www.songguolife.com/nuts/images/search_default.png');
        background-repeat: no-repeat;
        background-position: 1.25rem center;
        background-size: 0.2rem;
        width: 50%;
        height: 0.3rem;
        border: none;
        border: 1px solid #eee;
        padding-left: 1.5rem;
      }
    }
  }
}
.nav-content ul .router-link-active{
  background: #faf8f6;
  color:red;
}
</style>
