<template>
  <div class="mask">
    <div class="input to-flex in-col set-bet">
      <input v-model="tel" class="number-input" placeholder="请输入手机号" />
      <div @click="getSign" class="toast-btn">报名</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modal"
    }
</script>

<style scoped>

</style>
