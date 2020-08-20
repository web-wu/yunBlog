<template>
  <div id="coorpetion">
    <div class="card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>合作</el-breadcrumb-item>
          <el-breadcrumb-item>业务合作</el-breadcrumb-item>
        </el-breadcrumb>
        <section>
          <div class="workTittle">
            <h2>业务合作</h2>
            <p>网站定制 | 网站仿制 | 企业官网 | 个人博客</p>
            <p>APP | 小程序 | H5定制</p>
          </div>
          <ul>
            <li>
              <i class="iconfont iconwangzhandingzhi"></i>
              <div class="describe">
                <h3>网站定制</h3>
                <p>需求方给出相应要求和相关资料，服务从web-ui设计到产品项目上线，之后还有三次小幅度修改服务。</p>
              </div>
            </li>
            <li>
              <i class="iconfont iconziyuan"></i>
              <div class="describe">
                <h3>网站仿制</h3>
                <p>根据需求方的要求或者指定的网站进行相应的仿制,周期15日左右。</p>
              </div>
            </li>
            <li>
              <i class="iconfont iconqiyeguanwang-xuanzhong"></i>
              <div class="describe">
                <h3>企业官网</h3>
                <p>根据需求方提供的产品图为企业量身定制适合的公司官网，告别模板套用的尴尬问题。</p>
              </div>
            </li>
            <li>
              <i class="iconfont iconboke"></i>
              <div class="describe">
                <h3>个人博客</h3>
                <p>各类型博客设计，制作只属于您自己的小天地。</p>
              </div>
            </li>
            <li>
              <i class="iconfont iconxiaochengxu"></i>
              <div class="describe">
                <h3>APP、小程序</h3>
                <p>APP、小程序制作，各种bug修复和版本升级。</p>
              </div>
            </li>
            <li>
              <i class="iconfont iconH"></i>
              <div class="describe">
                <h3>H5定制</h3>
                <p>创意小动画，各类型短片宣传广告尽在H5制作。</p>
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
#coorpetion{
  width: 100%;
  min-height: 9.375rem;
  padding: 0 3.447917rem;
  background-color:@bgColor;
  .el-breadcrumb{
    padding: 0.208333rem 0.104167rem;
    font-size: 0.166667rem;
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
        float: left;
        font-size: 0.166667rem;
        h3{
          margin-bottom: 10px;
          font-size: 0.25rem;
        }
        width: 2.395833rem;
        word-wrap: break-word;
        padding-right: 0.208333rem;
      }
    }
  }
}
</style>
