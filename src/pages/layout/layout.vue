<template>
  <div class="layout">
    <div class="siderbar-wrapper" :style="{width: this.isCollapsed?'64px':'200px'}">
      <div class="logo-wrapper">
        TreeQNet
      </div>
      <el-menu
        background-color="#424f63"
        text-color="#fff"
        active-text-color="#65cea7"
        class="menu-wrapper"
        router
        unique-opened
        :collapse="isCollapsed"
        :default-active="$route.path">
        <template v-for="(item, index) in sider_menu_data">
          <el-menu-item class="menu-item" v-if="!item.children" :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item class="menu-item" v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                          :key="sub_index">
              <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="topbar-wrapper" :style="{left: this.isCollapsed?'64px':'200px'}">
      <div class="menu-collapse-wrapper float-left" @click="toggleMenu">
        <i class="el-icon-adm-menu" :style="{transform: 'rotateZ(' + (this.isCollapsed ? '90' : '0') + 'deg)'}"></i>
      </div>
      <div class="title float-left">TreeQNet Computing Platform</div>
      <!--<ul class="menu-list float-right">
        <li v-if="user" class="menu-item" style="padding: 0;">
          <el-dropdown
            :show-timeout="10"
            :hide-timeout="10"
            @command="handleCommand"
            style="padding: 0 15px;">
            <div class="dropdown-content el-dropdown-link">
              <i class="icon el-icon-adm-usersetup"></i>
              <span class="text">{{user.username}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  command="a"><i class="icon iconfont " @click="login">Login</i></el-dropdown-item>
              <el-dropdown-item command="b"><i class="icon iconfont " @click="exit">Logout</i></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>-->
    </div>
    <div class="content-wrapper" ref="content-wrapper" :style="{left: this.isCollapsed?'64px':'200px'}">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import {sessionStorage} from 'src/assets/js/storage';
  
  export default {
    created() {
      
/*          let User = {
            username: 'log in',
          };
        this.$store.commit('SET_USER', User); 
      this.checkAuth(); */
      
    },
    data() {
      return {
        sider_menu_data: [
          {
            path: '/home',
            title: 'Home',
            icon: 'el-icon-s-home'
          },
          {
            path: '/tasks/insert',
            title: 'Add task',
            icon: 'el-icon-document-add'
          },
          {
            path: '/tasks/delete',
            title: 'Run task',
            icon: 'el-icon-loading'
          },
          {
            path: '/tasks/result',
            title: 'Result',
            icon: 'el-icon-s-data'
          },
          {
            path: '/tasks/log',
            title: 'Log',
            icon: 'el-icon-s-data'
          },

          {
             path: '/models/insert',
             title: 'Add Model',
             icon: 'el-icon-document-add'
          },


          {
            path: '/tutorial/index',
            title: 'Tutorial',
            icon: 'el-icon-document'
          },
          {
            path: '/faq/index',
            title: 'FAQs',
            icon: 'el-icon-question'
          },
          {
            path: '/contact/index',
            title: 'Contact us',
            icon: 'el-icon-message'
          }
        ],
        isCollapsed: false,
        adminMenuShow: false
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
        
      }
    },
    methods: {
    /*  checkAuth() {
        let token = this.$store.state.token || sessionStorage.getItem('token');
          if (!token) {
        } else {
          this.getUser();
        }
      },
      getUser() {
        console.log(User)
        let username = sessionStorage.getItem('username') ? sessionStorage.getItem('username'):'log in';
        let User = {
          username: username,
          type: {
            code: 0,
            name: '超级管理员'
          }
        };
        
        this.$store.commit('SET_USER', User);        
      }, */
      handleCommand(command) {
        console.log(command);
      },
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      },
      /*
      login(){
        let token = this.$store.state.token || sessionStorage.getItem('token');
        if(!token){
          this.$router.replace('/login');
        }else{
          this.$notify.warning({
            title: 'already logged in'
          });
        }

      },
      exit() {
        let token = this.$store.state.token || sessionStorage.getItem('token');
        if(!token){
          this.$notify.warning({
            title: 'not logged in'
          });
        }else{

        this.$confirm('即将退出系统登陆，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          this.instance.userLogout().then(res => {
            this.$store.commit('SET_TOKEN', '');
          let User = {
             username: 'log in',
          };
           this.$store.commit('SET_USER', User); 
            this.$router.replace({path: '/home'});
          }).catch( (error)=> {
            console.log(error);
            this.$store.commit('SET_TOKEN', '');
            let User = {
             username: 'log in',
          };
           this.$store.commit('SET_USER', User); 
          });
        })

        }
      }*/
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/variable';
  
  .siderbar-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $siderbarWidth;
    z-index: 11;
    background-color: $siderbarBackgroundColor;
    transition: all 0.3s ease-in-out;
    
    .logo-wrapper {
      height: 40px;
      line-height: 40px;
      padding: 16px 0;
      text-align: center;
      font-size: 24px;
      color: #FFFFFF;
      color: #65CEA7;
    }
    
    .menu-wrapper {
      position: absolute;
      top: 72px;
      bottom: 0;
      width: 100%;
      border-right: none;
      transition: all 0.3s ease-in-out;
      
      &:not(.el-menu--collapse) {
        overflow-y: auto;
        overflow-x: hidden;
      }
      
      i {
        color: #FFFFFF;
      }
      
      .menu-item {
        
        &.is-active, &:hover {
          background-color: #353F4F !important;
          color: #65CEA7 !important;
          
          i {
            color: #65CEA7 !important;
          }
        }
        
      }
      
      .el-submenu__title:hover {
        color: #65CEA7 !important;
        
        i {
          color: #65CEA7 !important;
        }
      }
      
      .el-submenu, .el-menu-item {
        width: 100%;
      }
    }
  }
  
  .topbar-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: 0;
    heihgt: $topbarHeight;
    line-height: $topbarHeight;
    padding: 0 24px 0 0;
    background-color: $topbarBackgroundColor;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    transition: all 0.3s ease-in-out;
    z-index: 12;
    
    .menu-collapse-wrapper {
      height: 100%;
      width: 48px;
      text-align: center;
      cursor: pointer;
      
      i {
        transition: all 0.3s ease-in-out;
      }
    }
    
    .title {
      height: 100%;
      font-weight: bold;
    }
    
    .menu-list {
      .menu-item {
        position: relative;
        float: left;
        padding: 0 15px;
        min-width: 45px;
        height: 48px;
        text-align: center;
        font-size: 0px;
        
        &:hover {
          cursor: pointer;
          background-color: #F5F5F5;
        }
        
        .icon {
          vertical-align: middle;
          font-size: 24px;
        }
        
        .text {
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          font-size: 16px;
        }
      }
    }
  }
  
  .content-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: $topbarHeight;
    bottom: 0;
    padding: 16px;
    overflow: auto;
    transition: all 0.3s ease-in-out;
    background: white;
    
    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>
