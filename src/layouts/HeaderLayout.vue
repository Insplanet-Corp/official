<template>
  <header>
    <h1>
      <RouterLink to="/">insplanet</RouterLink>
    </h1>
    <nav>
      <RouterLink to="/work">Work</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  max-width: 1920px;
  justify-content: space-between;
  h1 {
  }
  nav {
  }
}
</style>
