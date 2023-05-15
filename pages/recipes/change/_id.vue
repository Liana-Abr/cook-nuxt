<template>
  <div class="container">
    <h1>Страница изменения рецепта <br/> ID рецепта: {{recipe.id}}</h1>
    <h3>{{status}}</h3>
    <form @submit.prevent="updateRecipe">
      <p class="w">В поле, которое Вы не хотите изменять, впишите значение из подсказки</p>
      <input type="text" v-model="updateName" :placeholder="`${recipe.name}`">
      <input type="text" v-model="updateDesc" :placeholder="`${recipe.description}`">
      <input type="text" v-model="updateImg" placeholder="URL изображения">
      <input type="text" v-model="formattedTags" :placeholder="`${recipe.tags}`">
      <p class="w">Теги писать через точку</p>
      <button type="submit">Изменить</button>
    </form>
    <NuxtLink :to="`/recipes/${recipe.id}`">Отменить</NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const id = params.id
    const recipe = await fetch(
      `http://localhost:3001/api/recipes/${id}`
    ).then((res) => res.json())
    return { id, recipe }
  },
  data(){
    return{
      status: "",
      updateName: "",
      updateDesc: "",
      updateImg: "",
      updateTags: [],
    }
  },
  methods:{
    updateRecipe: async function(){
      let body = {
        id: this.recipe.id,
        name : this.updateName,
        description: this.updateDesc,
        image: this.updateImg,
        tags: this.updateTags
      }
      console.log(this.recipe.id)
      await fetch(`http://localhost:3001/api/recipes/${this.recipe.id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
        .then(data =>{
          this.status = "Данные рецепта обновлены"
          console.log(data)
      })
        .catch(err => {
          this.status = "Ошибка! Попробуйте снова"
          console.log(err)});
    }
  },
  computed:{
    formattedTags :{
      get(){
        return this.updateTags.join(".");
      },
      set(value){
        this.updateTags = value.split('.');
      }
    },
  }
}
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
}
form input{
  width: 400px;
  font-size: 30px;
}
form button{
  background-color: #729343;
  color: white;
  margin: 20px;
  border: none;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
form button:hover{
  background-color: #628037;
}
a{
  border: 1px solid;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  color: black;
  text-decoration: none;
}
a:hover{
  color: #8A8A8A;
}
.w{
  font-size: 20px;
  text-align: left;
  margin: 0;
  color: #729343;
  font-weight: bold;
  width: 400px;
}
</style>
