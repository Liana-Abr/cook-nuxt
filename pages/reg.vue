<template>
  <div class="reg-form-container">
    <div class="reg-form">
      <div class="content">
        <div class="left">
          <h1>Регистрация</h1>
          <form @submit.prevent="regUser">
            <div class="input-field">
              <label>Имя</label>
              <input type="text" name="name" v-model="regName">
            </div>
            <div class="input-field">
              <label>Почта</label>
              <input type="email" name="email" v-model="regEmail">
            </div>

            <div class="input-field-pwd">
              <label>Пароль</label>
              <div class="input-group">
                <input type="password" name="password" v-show="!showPwd" v-model="regPwd" >
                <!--                  <input type="text" name="password" v-show="showPwd" v-model="regPwd">-->

                <!--                  <button class="hpwdBtn" @click="showPwd = !showPwd">-->
                <!--                    <span v-show="!showPwd"><i class="bi bi-eye"></i></span>-->
                <!--                    <span v-show="showPwd"><i class="bi bi-eye-slash"></i></span>-->
                <!--                  </button>-->
              </div>

            </div>
            <div class="action">
              <button type="submit" class="regBtn">Зарегистрироваться</button>
              <p>Уже есть профиль? <router-link to="/login" class="signBtn">Войти</router-link></p>
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
import bcrypt from 'bcryptjs';

export default {
  name:"reg-page",
  data(){
    return{
      showPwd: false,
      regName: "",
      regPwd: "",
      regEmail: "",
    }
  },
  methods:{
    encryptPassword(){
      // const salt = bcrypt.genSaltSync(10)
      // return bcrypt.hashSync(this.regPwd, salt)
    },
    regUser(){
      // let body = {
      //   name: this.regName,
      //   email: this.regEmail,
      //   password: this.regPwd
      // }
      // localStorage.setItem("userName", body.name);
      // localStorage.setItem("userEmail", body.email);
      // localStorage.setItem("userPwd", this.encryptPassword(body.password))
      // this.$router.replace("/profile")
      // console.log("Вы успешно зарегестрированы")
    },
  }
}
</script>

<style scoped>
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
  background-image: url("https://media.istockphoto.com/id/1162184637/photo/making-healthy-meal.jpg?s=612x612&w=0&k=20&c=KhcEZILYoO3TzLBCSB_W5RmVhFLTGQ9l9HEGwvZ7Law=");
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
