<template lang="html">
  <div>


  <div class='main'>


    <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:20px;" id = "demo1">Display results for job : <i style="font-size:25px;color:rgba(83, 164, 241, 0.5)">{{id}}</i></span> 
     <el-button size="small"  @click.prevent.stop="start()">Run Tour</el-button>
    <el-divider></el-divider>
   
    <div style="margin-top: 15px; width: 40%">
      <el-input placeholder="please input task name you execute" v-model="id" class="input-with-select" id = "demo2">
        <el-button slot="append" icon="el-icon-search" @click="getList(id)"></el-button>
      </el-input>
    </div>
    
    <div class="right-tabbox-newnotice"> 
      <el-tabs v-model="activeName" >
        <el-tab-pane label="Task Information" name="first" id="demo3">
          <div class="patientinfo-panel">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">Task Name：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['name']}}</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">Task ID：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['id']}}</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">Status：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['status']}}</span></el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">Created Time：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['createdAt']}}</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">Finished Time：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['finishedAt']}}</span></el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="3"><span class="label">Task Description：</span></el-col>
                  <el-col :span="16"><span class="value">{{items['description']}}</span></el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Execute Logs" name="second" >
          <span  id="lis"></span>
        </el-tab-pane>
        <el-tab-pane label="preview Results" name="third" >
         <preview :info="items"></preview>
        </el-tab-pane>
        <el-tab-pane label="Download" name="fourth">
          <el-button  @click="download1(items['outparams'])" type="primary" icon="el-icon-download">Download Results</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>


    
    </div>
  </div>
</template>

<script>
import preview from '../../components/Result/preview'
import {steps} from './resultguide.js'
export default {
    components : {
            preview
        },
  inject: ['reload'],
  data () {
         return {
            id:'5fa3af3398cd290f8efbd7a5',
            name: 'pcatest_1',
            driver: null,
            items: [],
            activeName: 'first',
            log: ''
          
    
      }
  },
   created() {
            //请求第一页数据
            this.getList(this.id)
           

        } ,
  methods: {
    start() {
        this.$nextTick(() => {
        this.$driver.defineSteps(steps);
        this.$driver.start();
      });
    },

                 
      download1 (paths) {
         
          
          for(const path of JSON.parse( paths)){
           
          //console.log(path)
          let params = {
                  params: {
                      path: path.value
                  }
              };
             console.log(params)
              this.instance.download(params).then((res)=>{ 
                this.downloadfile(res.data,path.value.split("/").pop());
              });
          }
          
      },
      
      downloadfile (data,fileName) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data]));
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',fileName);
        document.body.appendChild(link);
        link.click();
      },
      
      getList (id) {
              let params = {
                    params: {
                        id: id
                        
                    }
                };
              
              console.log(params)
              this.instance.getTask(params).then((res)=>{
                console.log(res.data.result) 
        //成功                      
                  this.items = res.data.result;
                  this.log = res.data.log;
                  this.id = this.items.id;
   
                  document.getElementById("lis").innerHTML = this.log;                
      })
          },
    
   


     mounted() {
            //请求第一页数据
            this.getList(this.id)
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
