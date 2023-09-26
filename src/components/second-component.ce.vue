<template>
  <div class="second-component">
    <h1>I am the second component</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: "default text",
    },
  },
};
</script>

<style lang="less" scoped>
.second-component h1 {
  color: red;
}
</style>
