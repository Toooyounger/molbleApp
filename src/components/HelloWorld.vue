<template>
  <div class="back" >
    <div class="hello"  >
      <div class="itemText" >
        欢迎来到
      </div>
      <div class="itemText">
        桂林医学院报修系统
      </div>
      <div class="itemText2">
        请登录！
      </div>
      <div class="item">
        <my-icons id="iconUser" name="User"></my-icons>
        <input type="text" >
      </div>
      <div class="item">
        <my-icons id="iconUser" name="Lock"></my-icons>
        <input type="text">
      </div>
      <div class="itemlogin">
        <button @click="login">
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import myIcons from "@/components/myIcons";
</script>

<script>

export default {

  name: 'HelloWorld',
  components: {},
  methods:{
    login(){
      this.$router.push('/main');
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 30%;
}
.back{
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-image: url("http://47.107.233.71:90/img/1661316357028.jpg");
  background-size: 100%;
}
.itemText{
  color: rgb(250,102,76);
  font-size: 30px;
  font-family: "Microsoft Himalaya";
}
.itemText2{
  font-size: 25px;
  font-weight: bold;
  color: rgb(242,115,150);
}
.item{
  font-size: 15px;
  width: 70%;
}
.itemlogin{
  font-size: 15px;
  width: 70%;
}
input{
  width: 90%;
  min-width: 230px;
  height: 30px;
  border-radius: 15px;
  margin-top: 10px;
  border: none;
  outline: skyblue;
  padding-left:30px;
  font-size: 15px;
  opacity: 0.5;
  z-index: 10;
}
#iconUser{
  position: absolute;
  font-size: 20px;
  margin-top: 17px;
  margin-left: 5px;
  z-index: 11;
}
button{
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 25px;
  border: none;
  color: white;
  background-image: linear-gradient(to right,#32be8f,#32b39f,#32be8f);
  transition: 0.5s;
  background-size: 200%;
  outline: none;
}
button:hover{
  background-position: right;
}
</style>
