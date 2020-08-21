<template>
  <div class="advertising">
    <div id="card">
       <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>合作</el-breadcrumb-item>
          <el-breadcrumb-item>投放广告</el-breadcrumb-item>
        </el-breadcrumb>
        <section>
          <div class="workTittle">
            <h2>投放广告</h2>
            <p>首页banner | 首页侧边栏 | 详情页侧边栏</p>
          </div>
          <ol>
            <li><h4>本站优势:</h4><span>注册用户: 5000+</span> <span>百度权重: 3</span> <span>流量: 30000/天</span></li>
            <li>首页banner: 每位792 * 318px / 1000RMB, 共5个位置，已售3个，未售2个。</li>
            <li>首页侧边栏: 每位425 * 318px / 700RMB, 共3个位置，已售2个，未售1个。</li>
            <li>详情页侧边栏: 每位425 * 318px / 500RMB, 共5个位置，已售3个，未售2个。</li>
          </ol>
          <ul>
            <li>
              <i class="iconfont iconguanggao"></i>
              <div class="describe">
                <h3>首页banner</h3>
                <img src="" alt="">
              </div>
            </li>
            <li>
              <i class="iconfont iconpinpaiwangzhandingzhi"></i>
              <div class="describe">
                <h3>首页侧边栏</h3>
                <img src="" alt="">
              </div>
            </li>
            <li>
              <i class="iconfont iconwangzhandingzhi"></i>
              <div class="describe">
                <h3>详情页侧边栏</h3>
                <img src="" alt="">
              </div>
            </li>
          </ul>
        </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
.advertising {
  width: 11.979167rem;
  margin: 0 auto;
  min-height: 9.375rem;
  margin: 0 auto;
  #card{
    background-color: @bgColor;
    .el-breadcrumb{
      font-size: 0.166667rem;
      padding: 0.208333rem 0.104167rem;
    }
  }
}
section{
  overflow: hidden;
  .workTittle{
    margin: 0.520833rem 0;
    text-align: center;
    h2{
      margin-bottom: 0.208333rem;
      font-size: 0.3125rem;
    }
    p{
      font-size: 0.166667rem;
      line-height: 0.291667rem;
    }
  }
  ol{
    font-size: 0.15625rem;
    width: 10rem;
    margin: 0 auto;
    margin-bottom: 0.260417rem;
    h4{
      font-size: 0.25rem;
    }
    li{
      line-height: 0.3125rem;
      margin-left: 0.333333rem;
    }
  }
  ul{
    width: 10rem;
    margin: 0 auto;
    li{
      float: left;
      width: 3.125rem;
      height: 1.875rem;
      margin-left: 0.208333rem;
      i{
        float: left;
        display: block;
        width: 0.520833rem;
        color: #5609bf;
        text-align: center;
        font-size: 0.333333rem;
        text-align: center;
      }
      .describe{
        font-size: 0.166667rem;
        float: left;
        h3{
          margin-bottom: 0.104167rem;
          font-size: 0.25rem;
        }
        width: 2.604167rem;
        word-wrap: break-word;
        img{
          width: 2.604167rem;
        }
      }
    }
  }
}
</style>
