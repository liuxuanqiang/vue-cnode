<template>
  <div>
    <Header></Header>
    <main class="container page">
        <div class="panel">
            <div class="header">
                <ol class="breadcrumb">
                    <li><a href="/">主页</a></li>
                    <li>{{result.loginname}}</li>
                </ol>
            </div>
            <div class="user-info">
                <p>
                    <img :src="result.avatar_url" alt="" class="avatar">
                    <span class="name">{{result.loginname}}</span>
                </p>
                <p>GitHub主页：<a :href="'https://github.com/' + result.githubUsername" target="_blank">https://github.com/{{result.githubUsername}}</a></p>
                <p>积分：{{result.score}}</p>
                <p>注册时间：{{$utils.timeFormat(result.create_at)}}</p>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <h4>最近创建的话题：</h4>
            </div>
            <div class="topic-list">
                <ul v-if="result.recent_topics.length > 0">
                    <li v-for="item in result.recent_topics" :key="item.id">
                        <router-link :to="'/user/' + item.author.loginname" class="user-avatar">
                            <img :src="item.author.avatar_url" alt="">
                        </router-link>
                        <router-link :to="'/topic/' + item.id" class="reply-content">{{item.title}}</router-link>
                        <time class="times pull-right">{{$utils.timeFormat(item.last_reply_at)}}</time>
                    </li>
                </ul>
                <p v-else>暂无~</p>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <h4>最近参与的回复：</h4>
            </div>
            <div class="topic-list">
                <ul v-if="result.recent_replies.length > 0">
                    <li v-for="item in result.recent_replies" :key="item.id">
                        <router-link :to="'/user/' + item.author.loginname" class="user-avatar">
                            <img :src="item.author.avatar_url" alt="">
                        </router-link>
                        <span class="author">{{item.author.loginname}}</span>
                        <router-link :to="'/topic/' + item.id" class="reply-content">{{item.title}}</router-link>
                        <span class="times pull-right">{{$utils.timeFormat(item.last_reply_at)}}</span>
                    </li>
                </ul>
                <p v-else>暂无~</p>
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
  components: { Header, Footer },
  data() {
    return {
      id: this.$route.params.id,
      result: {}
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$axios
        .get("https://cnodejs.org/api/v1/user/" + this.id)
        .then(res => {
          this.result = res.data.data;
        });
    }
  }
};
</script>
<style lang="less">
.panel {
  .header {
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;
    .breadcrumb {
      margin-bottom: 0;
    }
  }
  .user-info {
    padding: 10px;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 3px;
    }
    .name {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .topic-list {
    padding: 10px;
    ul {
      padding: 0;
      li {
        padding: 10px 0;
        border-top: 1px solid #f0f0f0;
        list-style: none;
        &:first-child {
          border-top: none;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 3px;
        }
        .author {
          margin: 0 3px;
          font-weight: bold;
        }
        .times {
          margin-top: 6px;
          color: #838383;
        }
        .reply-content {
          padding-left: 20px;
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
