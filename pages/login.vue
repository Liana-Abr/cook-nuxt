<template>
  <div class="reg-form-container">
    <div class="reg-form">
      <div class="content">
        <div class="left">
          <h1>Вход</h1>
          <form @submit.prevent="logUser">

            <div class="input-field">
              <label>Почта</label>
              <input type="email" name="email" v-model="authEmail">
            </div>

            <div class="input-field-pwd">
              <label>Пароль</label>
              <div class="input-group">
                <input type="password" name="password" v-model="authPwd">
              </div>

            </div>
            <div class="action">
              <button type="submit" class="regBtn">Войти</button>
              <p>Нет профиля? <router-link to="/reg" class="signBtn">Зарегестрироваться</router-link></p>
            </div>
          </form>

        </div>
        <div class="right">
          <div class="img" ></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name:"login-page",
  data(){
    return{
      authEmail: "",
      authPwd: "",
    }
  },
  methods:{
    logUser(){
      // let body = {
      //   email: this.authEmail,
      //   password: this.authPwd,
      // }
      // localStorage.setItem("userEmail", body.email)
      // localStorage.setItem("userPwd", body.password)
      // console.log("Вы успешно вошли")
    }
  }
}
</script>

<style>
.reg-form-container{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.content{
  position: absolute;
  height: 800px;
  top: 250px;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  left: 25%;
}
.left{
  border: 2px solid #c4c4c4;
}
.img{
  border: 2px solid #c4c4c4;
  border-left: none;
  background-image: url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80");
  background-position: center;
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reg-form .input-field {
  padding: 12px 5px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.reg-form .input-field input {
  font-size: 25px;
  border-radius: 10px;
  width: 500px;
  padding: 15px;
  border: 1px solid #c4c4c4;
  outline: none;
  transition: all .2s;
}
.input-field-pwd{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input-group{
  font-size: 25px;
  border-radius: 10px;
  width: 500px;
  padding: 15px;
  border: 1px solid #c4c4c4;
}
.input-group input{
  width: 448px;
  border: none;
  outline: none;
  transition: all .2s;
}
.reg-form label{
  float: left;
  font-size: 25px;
}
.action{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hpwdBtn{
  width: 50px;
}
.regBtn{
  font-size: 25px;
  margin: 20px 0 5px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: #729343;
  color: white;
  cursor: pointer;
}
.regBtn:hover{
  background-color: #628037;
}
.action p{
  font-size: 20px;
}


</style>
