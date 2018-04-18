<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
  .container {
    background: linear-gradient(to right, #ffa14d, #ff8b4f);
  }
</style>
