<template>
 <div class='index' >
     <div class="header">
       <head-top></head-top>
      <!-- 航线 省级联动 -->
       <div class="line">
        <ul>
          <li>
            <p>出发地</p>
            <!-- <van-area :area-list="areaList" value="110101" class="start"/> -->
            <p class="signOver" @click="showArea('s')">{{start?start:startDef}}</p>
          </li>
          <li>
            <p>目的地</p>
            <p class="signOver" @click="showArea('e')">{{end?end:endDef}}</p>
          </li>
        </ul>
        <ul>
          <li><span @click="goToback">往返切换</span></li>
          <li>2018-3-27 20:32</li>
        </ul>
       </div>
     </div>
      <!-- 消息主体部分 -->
      <div class="main">
        <ul>
          <li>
            <ul>
              
               <li >
                <div class="tips">
                  <p>全程高速ETC</p>
                </div>
                <p class="signOver">出发地:北京市 昌平区 新康园 新康园 新康园新康园新康园新康园 新</p>
                <p class="signOver">目的地:涞水县 野三坡</p>
                
                <div class="time">
                  <span>出发时间:2018-4-1 16:00</span>
                  <br>
                  <span>发布时间:2018-4-1 10:00</span>
                </div>
                <div class="start">
                  评分:&nbsp;<span></span> 9.2
                </div>
              </li> 
              <li>
                <img src="../../../static/imgs/lt.jpg" alt="">
                  <span @click="goDetail">详情>>></span>
              </li> 
            </ul>
          </li>
        </ul>
      </div>
      <!-- 城市联动组件 -->
       <van-area  class="cityMenu" :area-list="areaList" value="110101"  v-show="isAreaShow" @cancel="cancel" @confirm="confirm"/>
    <transition name="slide-fade">
     <side v-if="sideFlag"></side>
    </transition>
 </div>
</template>

<script>
import side from "@/components/common/side";
import headTop from "@/components/common/headTop";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      type: "",
      start: false,
      end: false,
      startDef: "北京",
      endDef: "涞水",
      isAreaShow: false,
      // sideFlag: false,
      areaList: {
        province_list: {
          110000: "北京市",
          130000: "河北省"
        },
        city_list: {
          110100: "北京市",
          130600: "保定市"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          130623: "涞水县"
        }
      }
    };
  },
  computed: {
    ...mapState(["sideFlag"])
  },
  methods: {
    ...mapMutations(["SET_SIDESHOW"]),
    showSide() {
      this.SET_SIDESHOW();
    },
    showArea(type) {
      this.type = type;
      this.isAreaShow = true;
    },
    cancel() {
      this.isAreaShow = false;
    },
    confirm(arr) {
      this.isAreaShow = false;
      let data = arr.reverse();
      for (let v of data) {
        if (v.code != -1) {
          if (this.type == "s") {
            this.start = v.name;
          } else if (this.type == "e") {
            this.end = v.name;
          }
          break;
        }
      }
    },
    goToback() {
      [this.start, this.end] = [this.end, this.start];
      [this.startDef, this.endDef] = [this.endDef, this.startDef];
    },
    goDetail() {
      this.$router.push("/infoDetatil");
    }
  },
  components: {
    side,
    headTop
  }
};
</script>

<style lang="scss">
.index {
  .slide-fade-enter-active {
    transition: all 0.5s;
  }
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-100%);
  }
  position: relative;
  .header {
    height: 120px;
    width: 100%;
    background-color: #ccc;
    .line {
      background-color: #cccccc;
      & > ul:nth-of-type(2) {
        padding-top: 10px;
        li:first-child {
          padding: 0 30px;
          span {
            display: inline-block;
            width: 100px;
            background-color: #fff;
          }
        }
      }
      ul {
        display: flex;
        li {
          width: 50%;
          text-align: center;
          line-height: 40px;
          padding: 0 30px;
          p {
            width: 100%;
            font-size: 18px;
          }
          & > p:nth-of-type(2) {
            height: 30px;
            background-color: #fff;
            line-height: 30px;
            font-size: 16px;
          }
        }
      }
    }
  }
  & > .cityMenu {
    background-color: #fff;
    height: 300px;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  //
  .main {
    padding-top: 10px;
    width: 100%;
    & > ul {
      width: 100%;
      & > li {
        margin-bottom: 2px;
        width: 100%;
        ul {
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: space-around;
          li {
            padding: 10px;
            font-size: 12px;
          }
          li:first-child {
            width: 80%;
            .tips {
              p {
                color: green;
                padding: 5px 0;
              }
            }
            .start {
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
          li:last-child {
            display: flex;
            width: 20%;
            align-items: center;
            position: relative;
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
            span {
              position: absolute;
              bottom: 0;
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
