<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'HomePage' }"
      >Task(Click to View Task)</router-link
    >
    |
    <router-link :to="{ name: 'AddTask' }"
      >Add New Task(Click to Add New Task)</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: darkslategray;
  font-size: 25px;
}
a.router-link-active {
  border-bottom: 3px solid indigo;
  padding-bottom: 4px;
  color: darkslateblue;
}
</style>
