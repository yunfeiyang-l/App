<template>
  <div class="About">

    <div class="box1">111</div>

    <div
      class="box2"
      @click="bnt"
    ></div>
    <div class="box3"></div>
    <van-cell-group>
      <van-field
        v-model="value"
        label="文本"
        placeholder="请输入用户名"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    bnt() {
      console.info(11);
      Toast.success("成功文案");
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
/* 引入公共css类 */
.About {
  height: 100%;
  .box3 {
    width: 80%;
  }
  .box1 {
    background: red;
  }
  .box2 {
    border: 0.1rem solid #58bc58;
    height: 10rem;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>