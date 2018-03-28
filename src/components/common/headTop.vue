<template>
 <div class='head' >
     <div class="wrap">
       <van-icon  v-if="$route.path=='/index'" name="wap-nav" class="icon" @click="showSilde"/>
       <van-icon v-else name="arrow-left" class="icon" @click="goBack"/>
       <!-- <slot name="logo"></slot> -->
       <span class="title">{{title?title:"去哪拼车"}}</span>
       <span class="login">登录</span>
     </div>
 </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["title"],
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapMutations(["SET_SIDESHOW"]),
    showSilde() {
      this.SET_SIDESHOW();
    },
    goBack() {
      this.$common.goBack.call(this);
    }
  },
  components: {}
};
</script>

<style lang="scss">
.head {
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  .wrap {
    height: 60px;
    width: 100%;
    // border-bottom: 1px solid #000;
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    .icon {
      padding-top: 6px;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 26px;
    }
    .title {
      // float: left;
      width: 70%;
      // background-color: #fff;
      color: #fff;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
    }
    .login {
      line-height: 60px;
      font-size: 18px;
      padding-left: 10px;
    }
  }
}
</style>
