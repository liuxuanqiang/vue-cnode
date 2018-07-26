<template>
  <div>
    <Header></Header>
    <main class="container page">
        <div class="panel">
            <div class="header">
                <ol class="breadcrumb">
                    <li><a href="/">主页</a></li>
                    <li>关于</li>
                </ol>
            </div>
            <div class="about-content">
                <section>
                    <h3>关于CNode</h3>
                    <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                    <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                    <p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
                    <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
                </section>
                <section>
                    <h3>关于本项目</h3>
                    <p>本项目借助CNode社区公开的API，使用Vue2 + Vue-router + Vuex + Axios + webpack 重新构建的Webapp，旨在让自己更深入全面地学习Vue全家桶相关知识，同时也希望看到此项目并且想深入学习Vue的同学作为学习参考。</p>
                    <p>项目地址：<a href="https://github.com/liuxuanqiang/vue-cnode" target="_blank">https://github.com/liuxuanqiang/vue-cnode</a></p>
                </section>
            </div>
        </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: { Header, Footer }
};
</script>
<style lang="less">
.panel {
  .header {
    border-bottom: 1px solid #e5e5e5;
    .breadcrumb {
      margin-bottom: 0;
    }
  }
  .about-content {
    padding: 15px;
    section {
      margin-bottom: 25px;
    }
    h3 {
      margin-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
