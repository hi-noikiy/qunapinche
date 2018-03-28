<template>
 <div class='side' >
     <div class="left">
         <div class="imgHead">
             <img :src="imgHeadUrl" alt="">
             <input type="file" @change="upload">
             <p>{{userName}}</p>
         </div>
         <ul>
             <li>评价</li>
             <li>钱包</li>
             <li>北京</li>
             <li>涞水</li>
             <li>设置</li>
             <li>
               <router-link to="/publish">发布</router-link>
             </li>
         </ul>
     </div>
     <div class="right" @click="hideSide" ></div>
 </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      //   imgHeadUrl: "",
      userName: "去哪拼车去哪拼车"
    };
  },
  computed: {
    imgHeadUrl() {
      return localStorage.getItem("imgHeadUrl")
        ? localStorage.getItem("imgHeadUrl")
        : "../../../static/imgs/lt.jpg";
    }
  },
  created() {},
  methods: {
    ...mapMutations(["SET_SIDESHOW"]),
    //设置侧边栏的显示与影藏
    hideSide() {
      this.SET_SIDESHOW();
    },
    // 上传头像
    upload(e) {
      console.log(e);
      let files = e.target.files;
      if (files.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          let img = new Image();
          img.src = reader.result;
          img.onload = () => {
            let canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 100, 100);
            let data64 = canvas.toDataURL();
            localStorage.setItem("imgHeadUrl", data64);
            // this.imgHeadUrl = data64;
            // console.log(this.imgHeadUrl);
          };
        };
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
.side {
  position: absolute;
  top: -60px;
  width: 100%;
  height: 667px;
  z-index: 100;
  display: flex;
  .left {
    width: 60%;
    height: 100%;
    background-color: purple;
    .imgHead {
      width: 100%;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      input[type="file"] {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 20px;
        opacity: 0;
      }
      p {
        padding-top: 20px;
        font-size: 18px;
        color: #fff;
        max-width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    ul {
      padding-top: 50px;
      font-size: 18px;
      li {
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .right {
    width: 40%;
    height: 100%;
    background-color: transparent;
  }
}
</style>
