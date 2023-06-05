<template>
  <div class="container">
    <h1>Профиль</h1>
    <h2>Почта: <br/>{{userEmail.replace(/[""]/g,'')}}</h2>
    <h2>Дата создания аккаунта: <br/>{{userRegDate.replace(/[""]/g, '')}}</h2>
<!--    <h2>Дата создания аккаунта:{{userRegDate.replace(/[""]/g,'')}}</h2>-->
<!--    <button @click.prevent="seeForm = !seeForm" >Изменить пароль</button>-->
<!--    <form :style="{display: seeForm ? 'flex' : 'none'}" class="pwdchange">-->
<!--      <input type="password" name="pwd" placeholder="Введите новый пароль">-->
<!--      <button class="change">Изменить</button>-->
<!--    </form>-->

  </div>
</template>

<script>
export default {
  name: "profile-page",
  data() {
    return {
      // seeLink: false,
      // seeForm: false,
      userEmail: "",
      userRegDate: ""
      // userPwd:"",
      // newUserPwd: ""
    }
  },
  mounted() {
    this.userEmail = localStorage.getItem("UserEmail")
    this.userRegDate = localStorage.getItem("UserRegDate")
  },
}
</script>

<style scoped>
.container{
  text-align: center;
}
.container h2{
  font-size: 35px;
}
/*button{*/
/*  padding: 20px;*/
/*  border: 2px solid #8A8A8A;*/
/*  color: black;*/
/*  background-color: transparent;*/
/*  cursor: pointer;*/
/*  border-radius: 10px;*/
/*}*/
/*.pwdchange{*/
/*  display: none;*/
/*  padding: 20px;*/
/*}*/
/*.pwdchange input{*/
/*  padding: 20px;*/
/*  border-radius: 10px;*/
/*  border: 2px solid #8A8A8A;*/
/*}*/
/*.change{*/
/*  padding: 20px;*/
/*  margin: 20px;*/
/*  color: white;*/
/*  background-color: #729343;*/
/*  cursor: pointer;*/
/*  border-radius: 10px;*/
/*}*/
</style>
