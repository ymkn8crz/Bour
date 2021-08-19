<template>
  <header class="header">
    <div class="header__title"><a href="/">Hello Favorite Directory!!</a></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: palevioletred;
  color: #FFFFFF;
  height: 50px;
  top: 0;
  position: sticky;

  &__title {
    padding: 15px;
    a {
      text-decoration: none;
      color: #FFFFFF;
    }
  }
}
</style>