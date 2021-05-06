<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <div class="title">TreeQNet Sign Up</div>
      </div>
    
    <div class="login-form">

       <el-form
          ref="loginForm"
          :model="form"
          :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="Enter your username">
              <i slot="prefix" class="el-input__icon el-icon-adm-user" style="font-size: 18px;"></i>
            </el-input>
          </el-form-item>
          
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="Enter your email">
              <i slot="prefix" class="el-input__icon el-icon-adm-user" style="font-size: 18px;"></i>
            </el-input>
          </el-form-item>


          <el-form-item prop="password">
            <el-input :type="passwordType" v-model="form.password" placeholder="Enter your password">
              <i slot="prefix" class="el-input__icon el-icon-adm-password" style="font-size: 18px;"></i>
              <i slot="suffix" class="el-input__icon el-icon-view" style="cursor: pointer;"
                 @click="_togglePasswordType"></i>
            </el-input>
          </el-form-item>
          
          <el-form-item prop="yanzhengma">
            <div class="check-code-wrapper">
              <div class="yanzhengma-wrapper">
                <el-input v-model="form.yanzhengma" @keyup.enter.native="register('loginForm')" placeholder="Enter verification code">
                  <i slot="prefix" class="el-input__icon el-icon-adm-vertification" style="font-size: 18px;"></i>
                </el-input>
              </div>
              
              <div class="validate-code-wrapper">
                  <el-button
                  type="primary"
                  class="send-btn"
                  style="width: 100%;"
                  :disabled= "!emailcore"
                  @click="mailSenderHandle()">
                {{codeText}}
                </el-button>
              </div>
            </div>
          </el-form-item>


          <el-form-item style="margin-bottom: 0;">          
              <el-row>
                <el-button
                  type="primary"
                  class="login-btn"
                  style="width: 100%;"
                  
                  @click="registerHandle('loginForm')">
                  Sign Up
                </el-button>
              </el-row>
             
          </el-form-item>
        </el-form>

    </div>
    </div>
  </div>
</template>
<script>
  import validateCode from '../../components/ValidateCode/index';

  export default {
    created () {
    },
    data () {
      return {
        codeText : "Verification Code",
        emailcore : true,
        passwordType: 'password',
        checkCode: '',
        form: {
          username: '',
          email:'',
          password: '',
          yanzhengma: ''
        },
        rules: {
          username: [
            { required: true, message: 'The user name cannot be empty', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'The mailbox cannot be empty', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'The password cannot be empty', trigger: 'blur' }
          ],
          yanzhengma: [
            { required: true, message: 'Verification code cannot be empty', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {

      _togglePasswordType () {
        if (this.passwordType === 'password') {
          this.passwordType = 'text';
        } else {
          this.passwordType = 'password';
        }
      },
      registerHandle (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.register();
          }
        });
      },
      register () {
        /*
         *  在这边可以进行登陆请求
         *  将请求返回的Token对象存到store中
         *  @Token  token对象
        */

        const data = {
          loginName: this.form.username,
          email: this.form.email,
          password: this.form.password,
          code: this.form.yanzhengma
        }
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        var vm = this;
        console.log(data);
        this.instance.userRegister(data, headers).then(res => {
          console.log(res.data);
          this.$router.replace('/login');
        }).catch(function (error) {
            vm.$notify.error({
            title: error.response.data.error.id,
            message: error.response.data.error.message
        });
        });
      },

      mailSenderHandle(){
        var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
        if(!myReg.test(this.form.email)||!(this.form.username)){
          console.log(this.form.email);
          console.log(this.form.username);
          alert('The mailbox format is incorrect or the user name is empty！');
        }else{


        var time = 60;//定义60秒的倒计时
        const data = {
          loginName : this.form.username,
          email : this.form.email
        }
        console.log(data)
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
    
        var vm = this;

        //x将邮箱发到后台
        this.instance.userEmail(data, headers).then(res => {
           console.log(res.data)

        }).catch(function (error) {
            vm.$notify.error({
            title: error.response.data.error.id,
            message: error.response.data.error.message
        });
        });      
            //设置一个定时，一秒执行一次
        var mytime = setInterval(function () {
            subs(vm);
        },1000)
          
       
        function subs(vm){
          time--;
          vm.codeText = "请"+time+"秒后再试";
          if(time===0){
            clearInterval(mytime);
            vm.codeText = "获取验证码";
            vm.emailcore = true;
                   
          } else{
               vm.emailcore = false;
          }
        }
        
        } 
   
      }


    },
    components: {
      validateCode
    }
  };

</script>
<style lang="scss" scoped>
  .login {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(66, 79, 99);

    .middle-wrapper {
      position: fixed;
      width: 100%;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-60%);

      .title-wrapper {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #ffffffc4;
      }
      .login-form {
        position: relative;
        margin: 0 auto;
        width: 520px;
        padding: 30px 50px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #ffffffc4;

        .send-btn{
          background-color: #5EA3EA;
        }

        .el-row {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .login-btn {
            width: 100%;
            background-color: #5EA3EA;
          }
        }

        .check-code-wrapper {
          display: flex;
          justify-content: space-between;
          height: 40px;

          .yanzhengma-wrapper {
            flex: 0 1 auto;
          }

          .validate-code-wrapper {
            flex: 0 0 160px;
          }
        }
      }
    }
  }
</style>
