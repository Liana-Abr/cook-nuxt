<template>
  <div class="search-container">
    <input class="search" type="text" placeholder="Введите название">
    <button>Найти</button>
  </div>
</template>
<script>
export default {
  name: "search-component"
}
</script>

<style scoped>
.search-container{
  justify-content: center;
  display: flex;
  gap: 20px;
  width: 100%;
}
.search-container .search{
  width: 33%;
  height: 50px;
  padding: 20px;
  font-size: 32px;
  outline: none;
}
.search-container button{
  padding: 20px;
  cursor: pointer;
  border: none;
  background-color: #729343;
  color: white;
  border-radius: 10px;
  font-size: 30px;
}
.search-container button:hover{
  background-color: #628037;
}
</style>
