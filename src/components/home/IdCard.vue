<template>
  <div class="idCa">
    <div class="title">
      <span>四维空间</span>
      <div class="tool">
        <ul>
          <li>
            <a href="#"><i class="iconfont icongithup"></i></a>
          </li>
          <li>
            <a href="#"><i class="iconfont iconmayun"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="information">
      <p>网名：web-wu | 冷色调</p>
      <p>职业：web前端工程师 | ui设计</p>
      <p>手机：18722299595</p>
      <p>QQ：2206507664</p>
      <p>email：760264858@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.idCa {
  background-color: @bg1Color;
  width: 100%;
  height: 2.083333rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  overflow: hidden;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.416667rem;
    font-size: 0.25rem;
    line-height: 0.416667rem;
    padding: 0 0.104167rem;
    border-radius: 0.104167rem;
    background-color: @themoColor;
    .tool ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        width: .520833rem;
        font-size: .416667rem;
      }
    }
  }
  .information {
    padding: 0 0.208333rem;
    font-size: 0.166667rem;
    p {
      padding: 0.041667rem;
    }
  }
}
</style>
