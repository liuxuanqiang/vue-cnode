<template>
  <div>
    <Header></Header>
    <main class="container page">
        <div class="panel">
            <div class="header">
                <span v-if="result.top" class="put-top">置顶</span>
                <h3 v-text="result.title"></h3>
                <p class="infos">
                    <span>作者：{{result.author.loginname}}</span>
                    <span>发布于：{{$utils.timeFormat(result.create_at)}}</span>
                    <span>浏览次数：{{result.visit_count}}</span>
                    <span>最后一次编辑：{{$utils.timeFormat(result.last_reply_at)}}</span>
                    <span>来自：{{result.tab | toZhCN}}</span>
                </p>
            </div>
            <article v-html="result.content" class="topic-content"></article>
        </div>
        <div class="panel">
            <div class="header">
                <h4>共{{result.replies.length}}条回复：</h4>
            </div>
            <div class="reply-list">
                <ul v-if="result.replies.length > 0">
                    <li v-for="item in result.replies" :key="item.id">
                        <img :src="item.author.avatar_url" alt="">
                        <span class="author">{{item.author.loginname}}</span>
                        <span class="times">{{$utils.timeFormat(item.create_at)}}</span>
                        <div v-html="item.content" class="reply-content"></div>
                    </li>
                </ul>
                <p v-else>暂无回复~</p>
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
          return "其它";
          break;
      }
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topic/" + this.id)
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
    .put-top {
      background: #80bd01;
      padding: 2px 4px;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
      vertical-align: 3px;
    }
    h3 {
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
    }
    .infos {
      font-size: 12px;
      color: #838383;
      >span{
        margin-right: 10px;
      }
    }
  }
  .topic-content {
    padding: 10px;
    line-height: 24px;
    .markdown-text {
      p {
        white-space: pre-wrap;
      }
      img{
          max-width: 100%;
      }
    }
    h2 {
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
    }
  }
  .reply-list {
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
          color: #838383;
        }
        .reply-content {
          padding-left: 37px;
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
