<template>
  <div id="articleDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-purple left_con">
          <h2>{{article.title}}</h2>
          <p>
            <span>作者: {{article.author}}</span><span>发布时间: {{article.publicDate | dtformat}}</span>
          </p>
          <hr />
          <h5>摘要:{{article.describe}}</h5>
          <article id="article_detail" v-html="article.content"></article>
          <div class="share">
            <span>文章分享:</span>
            <i class="iconfont iconweixingongzhonghao"></i>
            <i class="iconfont iconweibo"></i>
            <i class="iconfont iconQQ"></i>
          </div>
          <div class="comment">
            <div class="input_user">
              <el-form size="mini" :model="formComment" class="demo-form-inline">
                <el-form-item>
                  <el-input placeholder="在这发表您的看法吧" v-model.trim="formComment.comment" @focus="validate_signIn"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="mini" type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </el-form>
              <ul class="commentList">
                <li v-for="(v, i) in comment_list" :key="i">
                  <span>{{v.author}}</span> <span> | </span>
                  <span>{{v.createDate | dateformat}}</span>
                  <p>{{v.content}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple right_con">
          <div class="aboutAuthor">
            <div class="avator">
              <img src="../../assets/images/login.png" alt="">
            </div>
            <div class="info_author">
              <h3>web-wu</h3>
              <p>文章: <span>{{author_article_toatal}}</span></p>
            </div>
          </div>
        </div>
        <div class="otherArticle">
          <h3>作者的其他文章推介:</h3>
          <ul>
            <li v-for="(item, index) in author_article_refer" :key="index">
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="ad_site">
          jskkk
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicComment: '',
      article: {},
      formComment: {
        comment: ''
      },
      comment_list: [],
      author_article_toatal: null,
      author_article_refer: []
    }
  },
  mounted() {
    this.getArticleDetail()
  },
  methods: {
    async getArticleDetail () {
      const { data } = await this.$http.post('/getArticleDetail', {
        id: this.$route.params.id
      })
      let number = data.preview
      if (!!number === false) {
        number = 1
      } else {
        number++
      }
      await this.$http.put('/articleNumberChange', { id: this.$route.params.id, num: 1, number: number })
      this.article = data
      this.getArticle_comment()
      this.getAuthor_total(data.author)
    },
    async getAuthor_total (username) {
      const { data } = await this.$http.post('/author_article_total', { author: username })
      if (data.status !== 1) return false
      this.author_article_toatal = data.total
      this.author_article_refer = data.article
    },
    async getArticle_comment () {
      const { data } = await this.$http.post('/getArticle_comment', { article_name: this.article.title })
      this.comment_list = data
    },
    async validate_signIn () {
      const isLogin = await this.$store.dispatch('validate_login')
      if (!isLogin) {
        this.$message.info('请先登录再发表评论！！！')
        this.$router.push('/login')
      }
    },
    async onSubmit () {
      this.publicComment = this.formComment.comment
      if (this.publicComment.length === 0) return false
      const { data } = await this.$http.post('/admin/addComment', { author: this.$store.state.username, content: this.publicComment, article_com: this.article.title })
      this.getArticle_comment()
      this.formComment.comment = ''
      if (data.status !== 1) return false
      let number = this.article.comment
      if (!!number === false) {
        number = 1
      } else {
        number++
      }
      await this.$http.put('/articleNumberChange', { id: this.$route.params.id, num: 3, number: number })
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@bg1Color: #008ddd;
#articleDetail {
  width: 11.979167rem;
  margin: 0 auto;
  font-size: 0.166667rem;
}
.el-breadcrumb {
  padding: 0.208333rem 0;
}
.el-row {
  padding-bottom: 0.520833rem;
  min-height: 9.375rem;
  .left_con,
  .right_con {
    padding: 0.208333rem 0.104167rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @bg1Color;
    h2 {
      font-size: 0.270833rem;
    }
    p {
      font-size: 0.15625rem;
      padding: 0.052083rem 0.104167rem;
      span {
        margin-right: 0.208333rem;
      }
    }
    h5 {
      font-size: 0.166667rem;
      padding: 0.208333rem 0;
    }
    .share {
      height: 2.083333rem;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 0.333333rem;
        margin-left: 0.520833rem;
        &:hover {
          cursor: pointer;
          color: aqua;
        }
      }
    }
    .comment{
      .el-form{
        .el-form-item{
          margin: 0.104167rem 0.520833rem;
        }
      }
      .commentList{
        li{
          margin: 0.104167rem 0.520833rem;
          background-color: #fff;
          padding: 0.052083rem 0.104167rem;
          border-radius: 0.052083rem;
          p{
            padding: 0.104167rem 2em;
          }
        }
      }
    }
  }
  .aboutAuthor{
    padding: 0 0.104167rem;
    display: flex;
    align-items: center;
    .avator{
      margin-right: 0.208333rem;
      img{
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .info_author{
      p{
        padding: 0;
        line-height: 0.333333rem;
      }
    }
  }
  .otherArticle{
    margin-top: 0.208333rem;
    padding: 0.208333rem 0.104167rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @bg1Color;
    ul{
      padding: 0.104167rem 0;
      li{
        list-style-type: circle;
        margin-left: 2em;
        line-height: 0.270833rem;
        font-size: 0.145833rem;
      }
    }
  }
  .ad_site{
    margin-top: 0.208333rem;
    padding: 0.208333rem 0.104167rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @bg1Color;
  }
}

</style>
