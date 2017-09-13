<template>
  <div class='wai' ref='wai'>
    <div class='wrap' ref='wrap'>
      <slot></slot>
    </div>
    <div class="dot">
      <span v-for="(dn,index) in dots" :class="{activite:index===currentPage}"></span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import BScroll from 'better-scroll';
  export default{
    data(){
      return {
        currentPage: 0,
        dots:[]
      };
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      intervalTime: {
        type: Number,
        default: 400
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    mounted(){
      setTimeout(() => {
        // 获得整个屏幕的宽和滚动内容的宽，无缝滚动需要+2
        this._initWidth();
        // 初始化BScroll并开启滚动
        this._initBScroll();
        // 初始化dot
        this._initDot();
      }, 20);
    },
    methods: {
      addClass(el, className){
        var regexp = /^|\s+className+\s|$/;
        // 如果包含
        if (regexp.test(el.className)) {
          return;
        }
        el.className += ` ${className}`;
      },
      _initWidth(){
        // 获嘚一张图片的宽度
        this.width = this.$refs.wai.offsetWidth;
        // 获取所有图片的宽度
        this.children = this.$refs.wrap.children;
        var sumWidth = 0;
        for (var i = 0; i < this.children.length; i++) {
          var obj = this.children[i];
          // 循环遍历的加样式
          this.addClass(obj, 'wrap-list');
          sumWidth += this.width;
          obj.style.width = this.width + 'px';
        }
        // 最终赋值之前判断是否为无线滚动
        if (this.loop) {
          sumWidth += this.width * 2;
        }
        this.$refs.wrap.style.width = sumWidth + 'px';
      },
      _initBScroll(){
        this.bscroll = new BScroll(this.$refs.wai, {
          'snap': true,
          'snapLoop': this.loop,
          'snapThreshold': 0.3,
          'snapSpeed': this.intervalTime,
          'scrollY': false,
          'scrollX': true,
          'momentum': false
        });

        this.bscroll.on('scrollEnd', () => {
          this.currentPage = this.bscroll.getCurrentPage().pageX-1;
        });
      },
      _initDot(){
        // 判断是否为无限轮播
        if (this.loop) {
          this.dots = new Array(this.children.length - 2);
        } else {
          this.dots = new Array(this.children.length);
        }
      }
    }
  };
</script>

<style lang='scss' rel='stylesheet/scss'>
  .wai {
    width: 100vw;
    height: 220px;
    background-color: red;
    overflow: hidden;
    position: relative;
    .wrap {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      height: 100%;
      .wrap-list {
        float: left;
        list-style: none;
        width: 100%;
        a {
          display: block;
          overflow: hidden;
          width: 100%;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    .dot {
      position: absolute;
      height: 10px;
      bottom: 5px;
      margin-left: 50%;
      transform: translate3d(-50%, 0, 0);
      span {
        float: left;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        text-align: center;
        margin-right: 5px;
        &.activite {
          width: 16px;
          height: 8px;
          border-radius: 40%;
        }
      }
      span:nth-last-child(1) {
        margin-right: 0px;
      }
    }
  }
</style>
