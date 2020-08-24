<template>
  <div class="containner">
    <ul>
      <li v-for="item in nav" :key="item.id"><span @click="handleLink(item)">{{item.title}}</span>
        <ol>
          <li v-for="v in item.children" :key="v.id"><span @click="handleLink(v)">{{v.title}}</span></li>
        </ol>
      </li>
      <li>
        <img :src="avaterUrl" alt="">
        <ol>
          <li v-for="v1 in signIn" :key="v1.id"><span @click="handleLink(v1)">{{v1.title}}</span></li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['nav', 'signIn'],
  data () {
    return {
      avaterUrl: require('../../assets/images/login.png')
    }
  },
  methods: {
    handleLink (val) {
      this.$router.push(val.path)
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@fontColor: #123456;
ul{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: @fontColor;
  li{
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img{
      width: .375rem;
      height: .375rem;
    }
    &:hover >span{
      color: aqua;
      cursor: pointer;
    }
    &:hover ol{
      display: block;
    }
    ol{
      display: none;
      position: absolute;
      top: .625rem;
      background-color: @themoColor;
      width: 100%;
      z-index: 100;
      li{
        padding: .052083rem;
        &:hover span{
          color: aqua;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
