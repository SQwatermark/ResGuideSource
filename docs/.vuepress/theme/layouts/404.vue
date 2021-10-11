<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        回到首页
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `你已进入虚空。`,
  `这里什么都没有！`,
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
