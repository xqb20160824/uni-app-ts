<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/store/modules/login";
import{resGetCaptchaImage} from "@/api/login/index"
const store = useLoginStore();
const a = store.token;

console.log(a);
store.login('token')
fetch();
async function fetch(){
  console.log(11111)
  const res=await resGetCaptchaImage();
  console.log(res);
  console.log(22)
}


const title = ref('Hello1122')
// const b:String=process.env.ENV;
// console.log("b",b)

</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    color: red;
  }

}
</style>
