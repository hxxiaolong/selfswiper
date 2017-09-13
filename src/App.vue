<template>
  <div id="app">
    <swiper>
      <li v-for="ob in objArr" class="wrap-list">
        <img v-lazy="ob.img" lazy="loading">
      </li>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from 'base/swipe/swipe.vue';

  export default {
    components: {
      swiper
    },
    data(){
      return {
        objArr: [
          {img: 'http://p.qpic.cn/music_cover/Ay2w92PeiaO57pZWMwecv6Q31W5F63McX7IHU6dXqoicUC5P4cOJIP8Q/600?n=1'},
          {img: 'http://pic.uzzf.com/up/2017-4/14935192039088514.jpg'},
          {img: 'http://p.qpic.cn/music_cover/9nRiabv4x7ia0PE103qdsnoicHTXYkmzXpwG5XsYfygIzW3f38jREtn4A/600?n=1'},
          {img: 'http://p.qpic.cn/music_cover/RmB5rROTr5HKQyILQpFRq5qHcXkgtvdwUt96OfYwv3BGVnfPYP5W6A/600?n=1'}
//          {img: 'http://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86oe4Cze9OLcbCOnYF2NxAzHxq8ckYohloQ/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/TPTQPoBDp8OplC2TkaewjzwEh33G2keTRo5qfKrCkQm85y1dRBr3eA/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/63akicr9cibdb0n8Sl4g5a0N6wk7oOWtrVQASQJia9Gia5iaRhfkrnlVzfg/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5RYqwqiaib95tbw194FiciaEhS1GRKIYf1u4tg/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/bExxovQqJ1rzMJ7pblQUu1GV9GTbSvL9A4V8HrJqvuHyhHkaNOQ7Hw/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/SKXRlmcsZ6l0lL51kvt2heHSwncxFiam16kpUgUkRl0UugjiaMyI6Lgg/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/SKXRlmcsZ6l0lL51kvt2heHSwncxFiam16kpUgUkRl0UugjiaMyI6Lgg/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/OXxWppM0lFJZj4ibYiaf8XYbnicl1zeqq0HUgySgnZuuVzW4A7hCzYJow/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/4y7iatwYqHbpo2iaJPyJiaanrr4bwc2Zy2yVx83YSDzk4EmucUC0UII1g/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/DGbiaDs1Uo7XsibiaOiaTVWGeWDqiaYG0dkwSTbvGF02TexI2gibfJcMHGPA/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/4R8XfMNqF63nu0rAgricJR3cZGoFiaibRHtmia0Ny61B4NSvnGSQWKERLQ/600?n=1'},
//          {img: 'http://p.qpic.cn/music_cover/Y26O2NZMfa4exUCS3srzia6gBK9xn8DQyfiaibdudEpp25YUBeUkFQn2g/600?n=1'}
        ]
      };
    }
  };
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  li {
    background-color: yellow;
    list-style: none;
  }

  img {
    display: block;
    width: 100vw;
    height: 220px;
  }

  img[lazy=loading] {
    background-color: #000;
  }
</style>
