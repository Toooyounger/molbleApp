<template>
  <div class="back">
    <div class="navigation">
      <div class="item" id="item1" @click="tobaoxiudan">报修单</div>
      <div class="item" id="item2" @click="tojiedanren">接单人</div>
      <div class="item" id="item3" @click="toshenheyuan1">审核员1</div>
      <div class="item" id="item4" @click="toshenheyuan2">审核员2</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "mainPag",
  methods:{
    tobaoxiudan(){
      this.$router.push('/baoXiu')
    },
    tojiedanren(){
      this.$router.push('/jieDan')
    },
    toshenheyuan1(){
      this.$router.push('/shenHe1')
    },
    toshenheyuan2(){
      this.$router.push('/shenHe2')
    }
  }
}
</script>

<style scoped>
.back{
  background-color: rgb(136,91,210);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.navigation{
  display: flex;
  width: 86%;
  height: 250px;
  margin-left: 7%;
  flex-wrap: wrap;
  margin-top: 20%;
  justify-content: space-between;

}
.item{
  height: 50%;
  width: 49%;
  background-color: #32b39f;
  margin-top: 2%;
  border-radius: 10px;
  text-align: center;
  line-height: 125px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  transition: 0.35s;
}
#item1{
  background-color: rgb(180,73,194);
}
#item2{
  background-color: rgb(237,72,123);
}
#item3{
  background-color: rgb(50,149,251);
}
#item4{
  background-color: rgb(84,209,193);
}
.item:hover{
  transform: scale(1.06);
}
</style>