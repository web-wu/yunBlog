<template>
  <div class="successful">
    <div id="card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>成功案例</el-breadcrumb-item>
        </el-breadcrumb>
        <section>
          <div class="workTittle">
            <h2>成功案例</h2>
            <p>successful</p>
          </div>
          <ul>
            <li v-for="(item, index) in caseList" :key="index">
              <img :src="item.img_url" alt="">
              <div class="mask">
              </div><h3>{{case_describe[index].title}}</h3>
              <p>{{case_describe[index].desc}}</p>
            </li>
          </ul>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      caseList: [],
      case_describe: [{
        title: '1111111',
        desc: 'jsohohhohohohohohohoho'
      }, {
        title: '1111111',
        desc: 'jsohohhohohohohohohoho'
      }, {
        title: '1111111',
        desc: 'jsohohhohohohohohohoho'
      }, {
        title: '1111111',
        desc: 'jsohohhohohohohohohoho'
      }]
    }
  },
  async created () {
    const { data } = await this.$http.post('/get_ad_case', { num: 2, claasify: 2 })
    this.caseList = data
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
.successful {
  width: 11.979167rem;
  margin: 0 auto;
  min-height: 9.375rem;
  .el-breadcrumb{
    font-size: 0.166667rem;
    padding: 0.208333rem 0;
  }
}
section{
  .workTittle{
    font-size: 0.166667rem;
    margin: 0.520833rem 0 0.3125rem;
    text-align: center;
    h2{
      font-size: 0.3125rem;
    }
  }
  ul{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 11.5625rem;
    margin: 0 auto;
    li{
      position: relative;
      overflow: hidden;
      width: 3.645833rem;
      height: 2.083333rem;
      margin-bottom: 0.104167rem;
      img{
        width: 3.645833rem;
        height: 2.083333rem;
      }
      &:hover .mask{
        transform: translate(0.911458rem, 0) scaleX(2);
      }
      &:hover p{
        transform: translate(0, 1.554167rem);
      }
      &:hover h3{
        transform: translateX(150%);
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 1.822917rem;
        height: 2.083333rem;
        transition: all .6s;
        background-color: rgba(56, 35, 12,.5);
      }
      h3{
        font-size: 0.166667rem;
        position: absolute;
        top: 35%;
        left: 0.520833rem;
        transition: all .8s;
      }
      p{
        font-size: 0.166667rem;
        position: absolute;
        top: -0.520833rem;
        right: 0.520833rem;
        transition: all .6s;
      }
    }
  }
}
</style>
