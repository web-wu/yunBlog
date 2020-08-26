<template>
  <div>
    <div class="articleList" v-for="(item, index) in articles" :key="index">
      <div class="top">
        <div class="image">
          <img src="../../assets/images/avator.jpg" alt />
        </div>
        <div class="content">
          <h3>{{item.title.substr(0,25)}}</h3>
          <p>{{item.describe.substr(0, 80) + '...'}}</p>
          <div id="tag">
            <el-tag
              v-for="(v,i) in item.tag"
              :key="i"
              :type="tag_type[i]"
              effect="dark"
              size="mini"
            >{{v}}</el-tag>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="timer">
          <span>
            <i class="iconfont iconshijian"></i>{{item.publicDate | dtformat()}}
          </span>
          <span>
            <i class="iconfont iconzuozhe"></i>{{item.author}}
          </span>
        </div>
        <div class="preview">
          <span>
            <i class="iconfont iconchakan-copy"></i>{{item.preview}}
          </span>
          <span>
            <i class="iconfont icondianzan_active"></i>{{item.like}}
          </span>
          <span>
            <i class="iconfont iconpinglun"></i>{{item.comment}}
          </span>
        </div>
      </div>
    </div>
    <div class="paginatons">
      <el-pagination
        id="pageing"
        layout="prev, pager, next"
        :total="query.total"
        :page-size="query.size"
        :pager-count="5"
        :current-page="query.currentPage"
        @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag_type: {
        0: 'success',
        1: 'danger',
        2: 'warning',
        3: 'primary',
        4: 'info'
      },
      articles: [],
      query: {
        size: 8,
        total: null,
        currentPage: 1
      },
      switchNum: 1,
      tagVal: null,
      searchVal: null
    }
  },
  mounted () {
    this.getArticleList()
    this.$bus.$on('tagsVal', val => {
      this.tagVal = val
      this.getTagArticles(val)
    })
    this.$bus.$on('searcher', searchValue => {
      this.searchVal = searchValue
      this.getSearchArticles(searchValue)
    })
  },
  methods: {
    async getArticleList () {
      const { data } = await this.$http.get('/getHotArticle?page=' + this.query.currentPage)
      this.articles = data.records
      this.query.size = data.size
      this.query.total = data.total
      this.query.currentPage = data.page
    },
    async getTagArticles (val) {
      const { data } = await this.$http.post('/tagSearch?page=' + this.query.currentPage, { tag: val })
      this.articles = data.records
      this.query.size = data.size
      this.query.total = data.total
      this.query.currentPage = data.page
      this.switchNum = 3
    },
    async getSearchArticles (val) {
      const { data } = await this.$http.post('/titleInfo?page=' + this.query.currentPage, { info: val })
      this.articles = data.records
      this.query.size = data.size
      this.query.total = data.total
      this.query.currentPage = data.page
      this.switchNum = 2
    },
    pageChange (newPage) {
      this.query.currentPage = newPage
      switch (this.switchNum) {
        case 2:
          this.getSearchArticles(this.searchVal)
          break
        case 3:
          this.getTagArticles(this.tagVal)
          break
        default:
          this.getArticleList()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.articleList {
  position: relative;
  width: 100%;
  height: 2.083333rem;
  padding: 0.208333rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  background-color: @bg1Color;
  margin-top: 0.520833rem;
  .top {
    display: flex;
    img {
      width: 1.5625rem;
    }
    .content {
      width: 100%;
      height: 1.458333rem;
      margin-left: 0.208333rem;
      &:hover {
        transform: scale(0.98);
        cursor: pointer;
      }
      h3 {
        font-size: 0.1875rem;
        margin-bottom: 0.104167rem;
        &:hover {
          cursor: pointer;
        }
      }
      p {
        font-size: 0.166667rem;
        word-break: break-all;
        text-indent: 2em;
      }
      #tag {
        display: flex;
        height: 0.208333rem;
        margin-top: 0.052083rem;
        .el-tag {
          margin: 0.03125rem;
        }
      }
    }
  }
  .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.333333rem;
    font-size: 0.166667rem;
    padding: 0 0.208333rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @themoColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin-left: 0.104167rem;
      &:first-of-type {
        margin: 0;
      }
      i {
        margin-right: 0.052083rem;
      }
    }
  }
}
.paginatons{
  width: 100%;
  height: 0.291667rem;
  display: flex;
  justify-content: center;
}
</style>
