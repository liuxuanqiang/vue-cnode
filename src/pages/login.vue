<template>
    <div class="login-page">
        <Header></Header>
        <div class="container">
          <div class="page-body">
            <div class="label">
                <input class="txt" type="text" placeholder="Access Token" v-model="token" maxlength="36">
            </div>
            <div class="label">
                <a href="javascript:;" class="button" @click="login">登录</a>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  data() {
    return {
      token: ""
    };
  },
  methods: {
    login() {
      if (this.token === "") {
        alert("令牌格式错误，应为36位UUID字符串");
        return false;
      }
      this.$axios
        .post("https://cnodejs.org/api/v1/accesstoken", {
          accesstoken: this.token
        })
        .then(res => {
          if (res.data.success) {
            let user = {
              loginname: res.data.loginname,
              avatar_url: res.data.avatar_url,
              userId: res.data.id,
              token: this.token
            };
            this.$store.dispatch("setUserInfo", user);
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect
            });
          } else {
            alert("登录失败，请稍后再试！");
          }
        })
        .catch(err => {
          alert("登录失败，请稍后再试！\n错误原因：" + err);
        });
    }
  },
  components: { Header, Footer }
};
</script>
<style lang="less">
.page-body {
  margin-top: 65px;
  min-height: 80vh;
  background-color: #fff;
  border-radius: 3px;
  .label {
    display: inline-block;
    width: 100%;
    margin-top: 15px;
    position: relative;
    left: 0;
    top: 0;
    .txt {
      padding: 12px 5px;
      border: none;
      border-bottom: 1px solid #80bd01;
      background-color: transparent;
      width: 100%;
      font-size: 14px;
      color: #313131;
      outline: 0;
    }
    .button {
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 3px;
      color: #fff;
      font-size: 16px;
      background-color: #80bd01;
      border: none;
      text-align: center;
      vertical-align: middle;
      text-decoration: none;
      &:hover {
        background-color: #79b300;
      }
    }
    .file {
      position: absolute;
      top: 0;
      left: 0;
      height: 42px;
      width: 48%;
      outline: medium none;
      opacity: 0;
    }
  }
}
</style>
