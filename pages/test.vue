<template>
  <div class="container">
    <h1>TEST users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{user.name || "Пользователей нет"}}</li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "test-page",
  async fetch(){
    this.users = await fetch(
      'http://localhost:3001/users'
    ).then((res)=> res.json())
  },
  data(){
    return{
      users: []
    }
  }
}

</script>
<style>

</style>
