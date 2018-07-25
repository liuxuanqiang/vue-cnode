<template>
    <div>
        <Header></Header>
        <main class="page container">
            <div class="panel">
                <div class="header">
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'all'}}">全部</router-link>
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'good'}}">精华</router-link>
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'share'}}">分享</router-link>
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'ask'}}">问答</router-link>
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'job'}}">招聘</router-link>
                    <router-link class="topic-tab" :to="{'name':'topics',query:{tab:'dev'}}">客户端测试</router-link>
                </div>
                <div class="topic-list">
                    <ul>
                        <li v-for="item in topicList" :key="item.id">
                            <router-link :to="'/user/' + item.author.loginname" class="user-avatar">
                                <img :src="item.author.avatar_url" alt="">
                            </router-link>
                            <span class="reply-count">
                                <span title="回复数">{{item.reply_count}}</span>
                                <span>/</span>
                                <span title="点击数">{{item.visit_count}}</span>
                            </span>
                            <span>
                                <span v-if="item.top" class="put-top">置顶</span>
                                <span v-else class="topic-tab">{{item.tab | toZhCN}}</span>
                            </span>
                            <router-link :to="'/topic/' + item.id" class="topic-title">{{item.title}}</router-link>
                            <time class="last-active-time pull-right">{{$utils.timeFormat(item.create_at)}}</time>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      topicList: [],
      tab: "all"
    };
  },
  filters: {
    toZhCN(str) {
      switch (str) {
        case "share":
          return "分享";
          break;
        case "ask":
          return "问答";
          break;
        case "job":
          return "招聘";
          break;
        case "good":
          return "精华";
          break;
        default:
          return "测试";
          break;
      }
    }
  },
  created() {
    this.getTopics();
  },
  watch: {
    //切换分类
    $route(to, from) {
      if (to.query && to.query.tab) {
        this.tab = to.query.tab;
        this.topicList = [];
      }
      this.getTopics();
    }
  },
  methods: {
    getTopics() {
      var _this = this;
      this.$axios
        .get("https://cnodejs.org/api/v1/topics?tab=" + this.tab)
        .then(res => {
          if (res.data.success) {
            this.topicList = res.data.data;
          }
        });
    }
  }
};
</script>
<style lang="less">
.page {
  .panel {
    .header {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      .topic-tab {
        margin: 0 10px;
        color: #80bd01;
        text-decoration: none;
        &.router-link-exact-active {
          background-color: #80bd01;
          color: #fff;
          padding: 3px 4px;
          border-radius: 3px;
        }
        &:hover {
          color: #08c;
        }
      }
    }
  }
  .topic-list {
    ul {
      padding: 0 10px;
      li {
        padding: 10px 0 10px 10px;
        border-top: 1px solid #f0f0f0;
        list-style: none;
        &:first-child {
          border-top: none;
        }
        .user-avatar {
          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
          }
        }
        .reply-count {
          display: inline-block;
          width: 70px;
          text-align: center;
          font-size: 12px;
          color: #b4b4b4;
        }
        .put-top {
          background: #80bd01;
          padding: 2px 4px;
          border-radius: 3px;
          color: #fff;
          font-size: 12px;
        }
        .topic-tab {
          background-color: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          border-radius: 3px;
          font-size: 12px;
        }
        .topic-title {
          color: #333;
          &:visited {
            color: #888;
          }
        }
        .last-active-time {
          margin-top: 9px;
          color: #778087;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
