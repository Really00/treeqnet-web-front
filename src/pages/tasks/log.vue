<template>
<div class='main'>
  <el-form :model="form"  :rules="rules"  ref="form">
   
      <el-card shadow="hover">
        <div slot="header" >
          <span>Display logs for job : <i style="font-size:25px;color:rgba(83, 164, 241, 0.5)">{{id}}</i></span>
          <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="you can search and get your results by this id on Result page">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover>
        </div>
        
       <span  id="lis"></span>
        

        
      </el-card>
    
   
  </el-form>
</div>
</template>

<script>

export default {
    
  
  data () {
         return {
            id:'',
            name: '',
            items: [],
            activeName: 'first',
            log: ''             
      }
  },
   created() {
            //请求第一页数据
            this.getParams()
            this.getList(this.name)
           

        } ,
  methods: {
      
       getParams(){
           // 取到路由带过来的参数
           const routerParams = this.$route.query.name
           // 将数据放在当前组件的数据内
           this.name = routerParams;
           console.log(this.name)
        },
                 
      
      
      getList (name) {
              let params = {
                    params: {
                        name: name
                        
                    }
                };
              
              console.log(params)
              this.instance.getTask(params).then((res)=>{
               
                           
                  this.items = res.data.result;
                  this.log = res.data.log;
                  this.id = this.items.id;
   
                  document.getElementById("lis").innerHTML = this.log;                
      })
          },
    
   


     mounted() {
            //请求第一页数据
            this.getList(this.name)
        } 
  }
}
</script>



<style scoped>
@import "../../assets/styles/bootstrap.min.css";
  .main { /* it is for tree that be in center*/
		margin-left: 3%; margin-bottom: 5%; margin-top: 3%;    
     
	}
    .el-row{
       margin-top: 10px;
    }

  .right-tabbox-newnotice {
     margin-top: 30px;
  }
  .right-tabbox-newnotice /deep/.el-tabs__nav-wrap::after {
      position: static !important;
  }
  
</style>
