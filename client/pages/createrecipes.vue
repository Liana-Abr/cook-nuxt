<template>
  <div class="container">
    <h1 class="title">На этой странице можно создать рецепт</h1>
    <div :style="{display: openModal ? 'flex' : 'none' }" class="modal">
      <div class="modal-icon"><i class="bi bi-check-circle-fill"></i></div>
      <h3>{{ status }}</h3>
      <button @click="closeModal" class="modal-btn">Хорошо</button>
    </div>
    <div class="addRecipeForm">
      <form @submit.prevent="addRecipes">
        <p class="info">Описание рецепта</p>
        <input type="text" name="name" placeholder="Название*" v-model="recipeName" required>

        <input type="text" name="description" placeholder="Описание" v-model="recipeDesc">
        <ul class="w">
          <li>Обязательно укажите источник рецепта</li>
        </ul>
        <input type="text" name="category" placeholder="Категория*(Пример: Завтрак)" v-model="formattedCategory" required>
        <input type="text" name="time" placeholder="Время готовки" v-model="recipeTime">
        <ul class="w">
          <li>
            Пример: 30 минут
          </li>
        </ul>
        <input type="text" name="img" placeholder="URL изображения*" v-model="recipeImg" required>
        <img :style="{display: recipeImg ? 'flex':'none'}" class="inp-img" :src="recipeImg" alt="no img">
        <input type="text" name="tags" placeholder="Теги" v-model="formattedTags">
        <ul class="w">
          <li>
            Пример: Завтрак.Обед.Ужин. ...
          </li>
        </ul>
        <textarea class="inp-long" name="ingredients" placeholder="Ингредиенты*" v-model="formattedIng" required/>
        <ul class="w">
          <li>Новый ингредиент через точку. </li>
          <li>После последнего ингредиента точку ставить не надо, пример: Масло 200г. ...</li>
        </ul>
        <textarea class="inp-long" name="steps" placeholder="Способ приготовления*"  v-model="formattedSteps" required/>
        <ul class="w">
          <li>Новый шаг через точку</li>
          <li>После последнего шага точку ставить не надо</li>
        </ul>
        <p class="info">КБЖУ</p>
        <input type="text" name="fat" placeholder="Жиры" v-model="recipeFat">
        <input type="text" name="protein" placeholder="Белки" v-model="recipeProt">
        <input type="text" name="carb" placeholder="Углеводы" v-model="recipeCarb">
        <input type="text" name="calories" placeholder="Калорийность" v-model="recipeCal">
        <button type="submit" class="addRecipeBtn" >Добавить</button>
      </form>
      <p class="warn">
        * - это обязательное поле для заполнения
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:"create-recipes-page",
  data(){
    return {
      // name, description, category, time, image, tags, ingredients, steps, fat, protein, carb, calories
      status: "",
      openModal: false,
      recipeName: "",
      recipeDesc: "",
      recipeCategory: [],
      recipeTime: "",
      recipeImg: "",
      recipeTags: [],
      recipeIng: [],
      recipeSteps: [],
      recipeFat: "",
      recipeProt: "",
      recipeCarb: "",
      recipeCal: "",
    }
  },
  computed: {
    formattedCategory :{
      get(){
        return this.recipeCategory.join(".");
      },
      set(value){
        this.recipeCategory = value.split('.');
      }
    },
    formattedTags :{
      get(){
        return this.recipeTags.join(".");
      },
      set(value){
        this.recipeTags = value.split('.');
      }
    },
    formattedIng :{
      get(){
        return this.recipeIng.join(".");
      },
      set(value){
        this.recipeIng = value.split('.');
      }
    },
    formattedSteps :{
      get(){
        return this.recipeSteps.join(".");
      },
      set(value){
        this.recipeSteps = value.split('.');
      }
    }
  },
  methods:{
    // openMenuAddRecipe(){
    //   this.openMenu = !this.openMenu
    // },
    closeModal(){
      this.openModal = !this.openModal
        this.recipeName = "",
        this.recipeDesc = "",
        this.recipeCategory = [],
        this.recipeTime = "",
        this.recipeImg = "",
        this.recipeTags = [],
        this.recipeIng = [],
        this.recipeSteps = [],
        this.recipeFat = "",
        this.recipeProt = "",
        this.recipeCarb = "",
        this.recipeCal = ""

    },
    addRecipes: async function(e){
      e.preventDefault()
      let body = {
        name: this.recipeName,
        description: this.recipeDesc ,
        category: this.recipeCategory,
        time:this.recipeTime ,
        image: this.recipeImg,
        tags:this.recipeTags ,
        ingredients:this.recipeIng ,
        steps:this.recipeSteps ,
        fat: this.recipeFat,
        protein: this.recipeProt,
        carb:this.recipeCarb ,
        calories:this.recipeCal ,
      }
     await fetch("http://localhost:3001/api/recipes/add",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
       .then(data =>{
        console.log(data)
         this.openModal = true
         this.status = `Ваш рецепт успешно добавлен!`
      })
       .catch(err => {
         console.log(err)
         this.openModal = true
         this.status = `${err}`
       });
    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
  position: relative;
}
.container .title{
  text-align: center;
  font-size: 35px;
}
.container .addRecipeBtn{
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  background-color: #729343;
  color: white;
  width: 400px;
  margin-bottom: 50px;
  border-radius: 10px;
  border: none;
}
.container .addRecipeBtn:hover{
  background-color: #628037;
}
.modal{
  display: none;
  flex-direction: column;
  width: 500px;
  background-color: white;
  position: absolute;
  left: 47%;
  top: 400px;
  font-size: 25px;
  z-index: 99;
  border: 5px solid;
  border-radius: 20px;
}
.modal-icon i{
  font-size: 70px;
  color: #729343;
}
.modal-btn{
  padding: 10px;
  font-size: 25px;
  background-color: #729343;
  margin: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
.modal-btn:hover{
  background-color: #628037;
}
.addRecipeForm{
  display: flex;
  position: absolute;
  margin-top: 50px;
  left: 45%;
  top: 100%;
  justify-content: center;
}
.addRecipeForm form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.addRecipeForm .info{
  font-size: 30px;
}
.addRecipeForm .input-field{
  display: flex;
}
.w{
  font-size: 20px;
  text-align: left;
  margin: 0;
  color: #729343;
  font-weight: bold;
  width: 350px;
}
.inp-img{
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.inp-long{
  width: 400px;
  height: 300px;
  font-size: 25px;
  align-items: flex-end;
}
input{
  width: 400px;
  height: 50px;
  border-radius: 5px;
  font-size: 25px;
}
.warn{
  font-size: 30px;
  color: #ff7676;
}

</style>
