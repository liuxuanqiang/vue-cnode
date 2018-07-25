<template>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a class="brand" href="/">
                  <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
                </a>
                <ul class="nav pull-right">
                    <li><a href="/">首页</a></li>
                    <li><a href="/getstart">新手入门</a></li>
                    <li><a href="/api">API</a></li>                   
                    <li><a href="/about" target="">关于</a></li>    
                    <li><a href="/signup">注册</a></li>
                    <li><a href="/signin">登录</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
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
      }
    }
  }
}
</style>