<template>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <router-link :to="{name:'index'}" class="brand">
                  <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
                </router-link>
                <ul class="nav pull-right" v-if="!userInfo.loginname">
                    <li><router-link :to="{name:'index'}">首页</router-link></li>
                    <li><a href="https://cnodejs.org/getstart" target="_blank">新手入门</a></li>
                    <li><a href="https://cnodejs.org/api" target="_blank">API</a></li>                   
                    <li><router-link :to="{name:'about'}">关于</router-link></li>    
                    <li><router-link :to="{name:'login'}">登录</router-link></li>
                </ul>
                <ul class="nav pull-right" v-if="userInfo.loginname">
                    <li><router-link :to="{name:'index'}">首页</router-link></li>
                    <li><a href="https://cnodejs.org/getstart" target="_blank">新手入门</a></li>
                    <li><a href="https://cnodejs.org/api" target="_blank">API</a></li>                   
                    <li><router-link :to="{name:'about'}">关于</router-link></li>    
                    <li><router-link :to="{name:'login'}">退出</router-link></li>  
                    <li><a href="javascript:;" class="avatar"><img :src="userInfo.avatar_url" @click="goUser"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  replace: true,
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo"
    })
  },
  methods: {
    goUser() {
      this.$router.push({
        name: "user",
        params: {
          id: this.userInfo.loginname
        }
      });
    }
  }
};
</script>

<style lang="less">
.navbar {
  width: 100%;
  background: #444;
  .navbar-inner {
    background: 0 0;
    border-radius: 0;
    border: none;
    box-shadow: none;
    width: 90%;
    margin: auto;
    padding: 5px;
    .brand {
      display: inline-block;
      width: 120px;
      height: 34px;
      line-height: 34px;
      color: #ccc;
      img {
        width: 100%;
      }
    }
    .nav {
      li {
        float: left;
        a {
          color: #ccc;
          &:hover {
            background: #444;
            color: #fff;
          }
        }
        .avatar {
          width: 30px;
          height: 30px;
          margin-top: 5px;
          padding: 0;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>