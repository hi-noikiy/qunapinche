<template>
 <div class='infoDetatil' >
     <head-top :title="'车辆详细信息'"></head-top>
     <ul>
         <li>
             <img src="../../../static/imgs/lt.jpg" alt="">
             <p>车主名字</p>
         </li>
         <li>全程高速ETC</li>
         <li>
             <h3>出发地:</h3> 
             <p>北京  </p>
        </li>
         <li>
             <h3>目的地:</h3> 
             <p>北京</p>
        </li>
         <li>
             <h3>出发时间:</h3>
            <span>2018-4-1 16:00</span>
            <h3>发布时间:</h3>
            <span>2018-4-1 10:00</span>
         </li>
         <li>
             <h3>评分:</h3>
             <span></span> 9.2
         </li>
     </ul>
     <!-- 评论组件 -->
     <comment></comment>
 </div>
</template>

<script>
import headTop from "@/components/common/headTop";
import comment from "@/components/common/comment";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    headTop,
    comment
  }
};
</script>

<style lang="scss">
.infoDetatil {
  & > ul {
    li:nth-of-type(1) {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      p {
        padding-top: 10px;
      }
    }
    li:nth-of-type(1) ~ li {
      padding: 5px 30px;
      .adress {
        display: block;
      }
    }
    li:last-child {
      span {
        display: inline-block;
        width: 55px;
        height: 11px;
        margin: 0 3px 0 0;
        overflow: hidden;
        background: url("../../../static/imgs/star.png") no-repeat;
      }
    }
  }
}
</style>
