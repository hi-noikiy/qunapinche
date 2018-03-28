<template>
 <div class='comment' >
     <h2>评论</h2>
     <div class="inp">
         <textarea placeholder="来吐槽吧!!!" v-model="comment"></textarea>
         <button @click="publish">发布评论</button>
         <ul>
             <li v-for="(v,i) in commentData" :key="i" >
                 <div class="userInfo">
                     <img src="../../../static/imgs/lt.jpg" alt="">
                     <p>乘客名字</p>
                     <p>2018-4-1 12:09</p>
                 </div>
                 
                 <p>
                     {{v}}
                 </p>
                 <span @click="commentDel(i)" >删除</span>
             </li>
             
         </ul>
     </div>

 </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      commentData: ["老司机"]
    };
  },
  computed: {},
  methods: {
    publish() {
      if (this.comment.trim()) {
        this.commentData.push(this.comment.trim());
        this.comment = "";
      }
    },
    commentDel(index) {
      //   console.log(this.commentData.find(index))
      this.commentData.splice(index, 1);
      console.log();
    }
  },
  components: {}
};
</script>
<style lang="scss">
.comment {
  padding: 0 30px;
  h2 {
    // padding-left: ;
  }
  .inp {
    textarea {
      width: 100%;
      height: 60px;
      border: 1px solid #ccc;
      resize: none;
    }
    button {
      width: 100%;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.4);
    }
    & > ul {
      li {
        padding: 10px;
        position: relative;
        //   background-color: #fff;
        .userInfo {
          display: flex;
          img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          p {
            padding-left: 20px;
          }
          p:nth-of-type(2) {
            flex-grow: 1;
            text-align: right;
          }
        }
        & > p {
          padding: 10px 0;
        }
        & > span {
          position: absolute;
          width: 40px;
          right: 5px;
          bottom: 4px;
          color: blue;
        }
      }
    }
  }
}
</style>
