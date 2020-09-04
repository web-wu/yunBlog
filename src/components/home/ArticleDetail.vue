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
            <span>作者: {{article.author}}</span>
            <span>发布时间: {{article.publicDate | dtformat()}}</span>
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
                  <el-input placeholder="在这发表您的看法吧" v-model="formComment.comment" @focus="validate_signIn"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="mini" type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </el-form>
              <ul class="commentList">
                <li><span>{{this.$store.state.username}}:</span><p>{{publicComment}}</p></li>
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
              <p>文章: <span>122222</span></p>
            </div>
          </div>
        </div>
        <div class="otherArticle">
          <h3>作者的其他文章推介:</h3>
          <ul>
            <li>ljkljjkjjjjljjljjljl</li>
            <li>ljkljjkjjjjljjljjljl</li>
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
      }
    }
  },
  mounted() {
    this.getArticleDetail()
  },
  methods: {
    async validate_signIn () {
      const isLogin = await this.$store.dispatch('validate_login')
      if (!isLogin) {
        this.$message.info('请先登录再发表评论！！！')
        this.$router.push('/login')
      }
    },
    onSubmit () {
      this.publicComment = this.formComment.comment
    },
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
          margin-left: 0.520833rem;
          p{
            padding: 0.208333rem 4em;
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
        padding-left: 1em;
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
