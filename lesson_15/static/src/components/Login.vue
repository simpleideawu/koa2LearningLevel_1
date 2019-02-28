<template>
  <div>
    <div>Name:<el-input v-model="form.userName"></el-input></div>
    <div>Pass:<el-input v-model="form.password"></el-input></div>
    <div>Email:<el-input v-model="form.email"></el-input></div>
    <el-button @click="loginHandle">Login</el-button>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data:function () {
          return {
            form:{
              userName:'',
              password:'',
              email:''
            }
          }
        },
        methods:{
          loginHandle(){
            axios.post('http://localhost:9000/api/user/signIn.json',this.form)
              .then(res=>{
                debugger
              })
              .catch(err=>{
                debugger
              })

          }
        }
    }
</script>

<style scoped>

</style>
