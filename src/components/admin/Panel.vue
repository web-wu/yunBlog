<template>
    <div>
        <section>
            <div class="panel_info">
                <div class="left">
                    <i class="iconfont iconzuozhe"></i>
                </div>
                <div class="right">
                    用户：122222
                </div>
            </div>
            <div class="panel_info">
                <div class="left">
                    <i class="iconfont iconwenzhang"></i>
                </div>
                <div class="right">
                    文章：200
                </div>
            </div>
            <div class="panel_info">
                <div class="left">
                    <i class="iconfont icondianzan_active"></i>
                </div>
                <div class="right">
                    点赞：82000
                </div>
            </div>
            <div class="panel_info">
                <div class="left">
                    <i class="iconfont iconpinglun1"></i>
                </div>
                <div class="right">
                    评论：566
                </div>
            </div>
            <div class="panel_info">
                <div class="left">
                    <i class="iconfont iconchakan-copy"></i>
                </div>
                <div class="right">
                    阅览：5656666
                </div>
            </div>
        </section>
        <div id="line" ref="line">

        </div>
        <div class="echartBar">
          <div class="echart">
            <h3>流量统计</h3>
            <div class="bar" ref="reflow">
            </div>
          </div>
          <div class="echart">
            <h3>文章统计</h3>
            <div class="bar" ref="article">
            </div>
          </div>
          <div class="echart">
            <h3>站点收录</h3>
            <div class="bar" ref="webSl">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    var Line = this.$echarts.init(this.$refs.line)
    var option1 = {
      color: ['#00f2f1', '#ed3f35', '#409EFF', '#67C23A', '#E6A23C'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['用户', '文章', '点赞', '评论', '阅览']
      },
      grid: {
        top: '50',
        left: '0',
        right: '10',
        bottom: '10',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#01148c' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#01148c'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: '用户',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3
          },
          data: [1200, 132, 1001, 2034, 909, 230, 210, 501, 134, 440, 2330, 2110],
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 242, 241, 0.1)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(0, 242, 241, 0.6)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        },
        {
          name: '文章',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3
          },
          data: [2020, 1812, 391, 2304, 290, 930, 410, 520, 1802, 1901, 734, 2960],
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(237, 63, 53, 0.1)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(237, 63, 53, 0.6)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        },
        {
          name: '点赞',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3
          },
          data: [550, 552, 901, 754, 690, 1110, 410, 2032, 801, 1504, 1090, 930],
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(64, 158, 255, 0.1)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(64, 158, 255, 0.6)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        },
        {
          name: '评论',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3
          },
          data: [1220, 552, 901, 1004, 950, 830, 1010, 991, 534, 2200, 1330, 3320],
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(103, 194, 58, 0.1)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(103, 194, 58, 0.6)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        },
        {
          name: '阅览',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          smooth: true,
          lineStyle: {
            width: 3
          },
          data: [820, 1932, 901, 2234, 1290, 1830, 1320, 820, 932, 2221, 934, 1290],
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(230, 162, 60, 0.1)' // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(230, 162, 60, 0.6)' // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false
        }
      ]
    }
    Line.setOption(option1)
    window.addEventListener('resize', function () {
      Line.resize()
    })
    var reflow = this.$echarts.init(this.$refs.reflow)
    var option2 = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#01148c'
        },
        boundaryGap: false
      }],
      grid: {
        top: '10',
        bottom: '20',
        left: '30',
        right: '20'
      },
      yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#01148c'
        },
        nameTextStyle: {
          color: '#999'
        },
        splitArea: {
          show: false
        }
      }],
      series: [{
        name: '课时',
        type: 'line',
        data: [213, 260, 320, 136, 523, 385, 244, 300, 512, 244, 426, 369],
        lineStyle: {
          normal: {
            width: 8,
            color: {
              type: 'linear',

              colorStops: [{
                offset: 0,
                color: '#A9F387' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#48D8BF' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(72,216,191, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#fff',
            borderWidth: 10,
            borderColor: '#A9F387'
          }
        },
        smooth: true
      }]
    }
    reflow.setOption(option2)
    window.addEventListener('resize', function () {
      reflow.resize()
    })
    var articleEchart = this.$echarts.init(this.$refs.article)
    var option3 = {
      legend: {
        orient: 'vertical',
        top: 'center',
        right: '5%',
        data: ['javascript', 'nodejs', 'vue', 'react', 'php'],
        textStyle: {
          color: '#01148c',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
          show: true,
          normal: {
            position: 'outside',
            fontSize: 14
          }
        },
        labelLine: {
          length: 1,
          length2: 20,
          smooth: true
        },
        data: [{
          value: 105,
          name: 'javascript',
          itemStyle: {
            color: 'rgba(50,123,250,0.7)',
            borderColor: 'rgba(50,123,250,1)',
            borderWidth: 3
          }
        },
        {
          value: 36,
          name: 'nodejs',
          itemStyle: {
            color: 'rgba(244,201,7,0.7)',
            borderColor: 'rgba(244,201,7,1)',
            borderWidth: 3
          }
        },
        {
          value: 55,
          name: 'vue',
          itemStyle: {
            color: 'rgba(23,216,161,0.7)',
            borderColor: 'rgba(23,216,161,1)',
            borderWidth: 3
          }
        },
        {
          value: 80,
          name: 'react',
          itemStyle: {
            color: 'rgba(122,60,235,0.7)',
            borderColor: 'rgba(122,60,235,1)',
            borderWidth: 3
          }
        },
        {
          value: 85,
          name: 'php',
          itemStyle: {
            color: 'rgba(15,197,243,0.7)',
            borderColor: 'rgba(15,197,243,1)',
            borderWidth: 3
          }
        }
        ]
      }]
    }
    articleEchart.setOption(option3)
    window.addEventListener('resize', function () {
      articleEchart.resize()
    })
    var webSl = this.$echarts.init(this.$refs.webSl)
    var img = 'data:image/png;base64,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'

    var trafficWay = [{
      name: '百度',
      value: 180
    }, {
      name: '谷歌',
      value: 99
    }, {
      name: '搜狗',
      value: 150
    }]

    var data = []
    var color = ['#00ffff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
    for (var i = 0; i < trafficWay.length; i++) {
      data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }
      }, {
        value: 2,
        name: '',
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        }
      })
    }
    var seriesOption = [{
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [60, 65],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            fontSize: 10,
            formatter: function (params) {
              var percent = 0
              var total = 0
              for (var i = 0; i < trafficWay.length; i++) {
                total += trafficWay[i].value
              }
              percent = ((params.value / total) * 100).toFixed(0)
              if (params.name !== '') {
                return '站点收录：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%'
              } else {
                return ''
              }
            }
          },
          labelLine: {
            length: 30,
            length2: 30,
            show: true,
            color: '#01148c'
          }
        }
      },
      data: data
    }]
    var option4 = {
      color: color,
      title: {
        text: '站点收录',
        top: '48%',
        textAlign: 'center',
        left: '49%',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '400'
        }
      },
      graphic: {
        elements: [{
          type: 'image',
          z: 3,
          style: {
            image: img,
            width: 100,
            height: 100
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        }]
      },
      tooltip: {
        show: false
      },
      toolbox: {
        show: false
      },
      series: seriesOption
    }
    webSl.setOption(option4)
    window.addEventListener('resize', function () {
      webSl.resize()
    })
  }
}
</script>

<style lang="less" scoped>
section{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.208333rem;
    .panel_info{
        overflow: hidden;
        width: 2.708333rem;
        height: 1.145833rem;
        padding: 0.208333rem;
        color: #01148c;
        border-radius: 0.052083rem;
        box-shadow: 0 0 0.020833rem antiquewhite;
        background-color: rgba(255,255,255,0.7);
        .left{
            width: 32%;
            height: 0.729167rem;
            float: left;
            text-align: center;
            line-height: 0.729167rem;
            i{
              font-size: 0.46875rem;
            }
        }
        .right{
            width: 68%;
            height: 0.729167rem;
            float: left;
            text-align: center;
            line-height: 0.729167rem;
        }
    }
}
#line{
    width: 100%;
    height: 3.125rem;
    // border: 1px solid blue;
}
.echartBar{
  display: flex;
  width: 100%;
  padding: 0.208333rem 0.208333rem;
  color: #01148c;
  .echart{
    flex: 1;
    padding: 0 0.104167rem;
    h3{
      text-align: center;
      height: 0.520833rem;
      line-height: 0.520833rem;
    }
    .bar{
      height: 2.416667rem;
    }
  }
}
</style>
