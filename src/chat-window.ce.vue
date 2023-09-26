<template>
  <div class="chat-window">
    <h1>{{ title }}</h1>
    <input type="text" name="" id="" />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "Chat window",
    },
  },
};
</script>

<style lang="less" scoped>
:host {
  --component-text-color: green;
}

.chat-window {
  border: 1px solid #000;

  h1 {
    color: var(--component-text-color);
  }
}
</style>
