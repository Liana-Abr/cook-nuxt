<template>
  <div class="container">
    <div class="modal-box" :style="{display : seeModal ? 'flex' : 'none'}">
      <h3>Уверены, что хотите удалить рецепт?</h3>
      <div class="modal-btns">
        <button class="modal-delete-btn" @click.prevent="deleteRecipe" :style="{display: seeIcon ? 'block' : 'none'}">
        Да
        </button>
        <button @click="seeModal = !seeModal" class="modal-close-modal">Нет</button>
      </div>

    </div>
    <div class="recipe-container">
      <div class="left-container">
        <div class="back-btn">
          <NuxtLink to="/">
            <i class="bi bi-chevron-left"></i>
          </NuxtLink>
        </div>
        <p class="path">главная/рецепты/{{recipe.name}}</p>
        <div class="categories">
        <div class="category" v-for="category in recipe.categories" :key="category.id">
          <p>{{ category }}</p>
        </div>
      </div>
        <div class="recipe-name">
          <h3>{{recipe.name}}</h3>

          <NuxtLink :to="`/recipes/change/${recipe.id}`" class="change-btn" :style="{display: seeIcon ? 'block' : 'none'}">
            <i class="bi bi-pencil"></i>
          </NuxtLink>
          <button class="delete-btn" @click="seeModal = true" :style="{display: seeIcon ? 'block' : 'none'}">
            <i class="bi bi-trash"></i>
          </button>
        </div>

        <div v-if="recipe.image" class="img" :style="{backgroundImage: `url( ${recipe.image})`}"></div>
        <div v-else class="img">no img</div>
        <div class="contain">
          <div class="tags">
            <div v-for="tag in recipe.tags" :key="tag.id" class="tag">
              <p>{{ tag }}</p>
            </div>
          </div>

          <div class="clockID">
            <i class="bi bi-clock"></i>
            <p>{{recipe.time}}</p>
          </div>
          <p class="description">{{recipe.description}}</p>
          <div class="info">

            <div class="info-box">
              <p>КБЖУ на 100г</p>
              <table>
                <tr>
                  <th>Калории</th>
                  <th>Белки</th>
                  <th>Жиры</th>
                  <th>Углеводы</th>
                </tr>
                <tr>
                  <td>{{ recipe.calories }}</td>
                  <td>{{ recipe.protein }}</td>
                  <td>{{ recipe.fat }}</td>
                  <td>{{ recipe.carb }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="vl"></div>
      <div class="right">
        <h3>Ингредиенты</h3>
        <div class="right-container">

          <div class="ingredients">
            <div class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              <p>{{ ingredient }}</p>
            </div>
          </div>

        </div>
        <h3>Способ приготовления</h3>
        <div class="steps">
          <ul v-for="step in recipe.steps" :key="step.id">
            <li>{{ step }}</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      seeIcon: false,
      seeModal: false,
    }
  },
  async asyncData({ params }) {
    const id = params.id
    const recipe = await fetch(
      `http://localhost:3001/api/recipes/${id}`
    ).then((res) => res.json())
    return { id, recipe }
  },
  mounted() {
    this.seeIcon = !!localStorage.getItem("UserEmail") && !!localStorage.getItem("UserToken")
  },
  methods:{
    deleteRecipe: async function(){
      await fetch(`http://localhost:3001/api/recipes/${this.recipe.id}`,{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
        .then((res) => res.json())
        .catch((err) => console.log(err))
        this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.container{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container h3{
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
  font-size: 30px;
  margin: 5% 20%;
}
.modal-box{
  position: absolute;
  display: none;
  justify-content: center;
  flex-direction: column;
  top: 47%;
  z-index: 99;
  font-size: 25px;
  border: 5px solid;
  background-color: white;
  border-radius: 20px;
  text-align: center;
}
.modal-btns{
  display: flex;
  gap: 50px;
  justify-content: center;
}
.modal-delete-btn{
  cursor: pointer;
  color: white;
  width: 80px;
  font-size: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: #de5c5c;
  border: none;
  padding: 10px;
}
.modal-close-modal{
  cursor: pointer;
  color: white;
  font-size: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: #729343;
  border: none;
  padding: 10px;

}
.right{
  height: 900px;
  box-sizing: border-box;
  overflow-y: inherit;
}
.back-btn a{
  border-radius: 50%;
  border: 1px solid;
  padding: 10px;
  text-decoration: none;
  color: black;
}
.recipe-container{
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.left-container, .contain{
  margin: 8% 0 0 20%;
  text-align: left;
  width: 100%;
}
.left-container h3{
  font-size: 30px;
  display: flex;
  justify-content: left;
  font-weight: bold;
}
.left-container h3:hover{
  color: #8A8A8A;
}
.path{
  color: gray;
  font-size: 20px;
  margin-left: 20%;
  text-transform: lowercase;
}
.recipe-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.recipe-name i{
  margin: 0;
}
.change-btn{
  color: #729343;
  font-size: 30px;
  margin-left: 20px;
}
.delete-btn{
  cursor: pointer;
  color: #de5c5c;
  font-size: 30px;
  margin-left: 20px;
  background-color: transparent;
  border: none;
}
.contain .clockID {
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.contain .clockID:hover{
  color: #8A8A8A;
}
.tags{
  display: flex;
  gap: 20px;
  text-transform: uppercase;
  font-size: 30px;
}
.tag:hover{
  color: #8A8A8A;
}
.img{
  /*background-image: url("https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/426/5082/no-image__12882.1665668288.jpg?c=2");*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  margin: 0 0 0 20%;
  height: 600px;
}
.vl {
  border-left: 2px solid;
  margin: 30%;
  height: 800px;
}
.right{
  position: absolute;
  overflow-y: scroll;
  left: 54%;
  margin-top: 75px;
  height: 1600px;
}
.right h3 {
  text-transform: uppercase;
  font-size: 40px;
  margin-left: 0px;
}
.right-container{
  /*display: grid;*/
  /*grid-template-rows: repeat(2,1fr);*/
}
.ingredients{
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ingredient{
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: 30px;
  word-spacing: 5px;
}
.steps{
  text-transform: uppercase;
  font-size: 25px;
}
.steps li{
  margin-bottom: 50px;
}
.clockID i{
  font-size: 30px;
}
.description{
  font-size: 30px;
}
.description:hover{
  color: #8A8A8A;
}
.info-box p{
  font-size: 30px;
}
.info-box p:hover{
  color: #8A8A8A;
}
.info-box tr:nth-child(even){background-color: #f2f2f2;}
.info-box th {
  padding: 10px;
  background-color: #729343;
  color: white;
  font-size: 25px;
}
.info-box th:hover{
  background-color: #628037;
}
.info-box td{
  text-align: center;
  font-size: 25px;
}
.info-box td:hover{
  background-color: #dedddd;
}
.info-box p{
  font-size: 25px;
}
</style>
