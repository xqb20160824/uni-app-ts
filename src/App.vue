<script setup lang="ts">
// import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
const name=ref("asd");
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
