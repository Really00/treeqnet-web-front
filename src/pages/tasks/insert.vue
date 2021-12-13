<template>
<div class='main'>
  <el-form :model="form"  :rules="rules"  ref="form">
   
      <el-card shadow="hover">
        <div slot="header"  >
          <span>Add Task</span>
        </div>
        <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;" id='demo1'>Task Description</span>        
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="define the name and description of your task which you want to compute by our model">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover>

         <el-button size="small"  @click.prevent.stop="start()">Run Tour</el-button>

         <el-button  size="small" @click="download2()" >Download Example Data</el-button>
        

        <el-divider></el-divider>
        
        <el-row >
        <el-col :span="8" style="margin-bottom: 12px;" id='demo2'>
        
          <el-form-item label=" " prop="taskname">
            <div class="bigfont">Enter the name of your task</div>
            <el-input v-model="form.taskname" placeholder="please enter your task name" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label=" " prop="description">
            <div class="bigfont">Enter the description of your task</div>
            <el-input v-model="form.description" placeholder="please enter your task description" style="width:300px"></el-input>
          </el-form-item>
        </el-col>
         
      
    
       
        
        <el-col :span="16" style="margin-bottom: 12px;" id='demo3'>
          
          <el-form-item label=" " prop="modelname">
            <div class="bigfont">Select the model you want to use</div>
            
            <el-select v-model="form.modelname" @change="selectFn($event)" placeholder="select your model">
              <el-option
                v-for="(modelname, index) in modelnames"
                :key="modelname.name"
                :label="modelname.name"
                :value="index">{{modelname.name}}
              </el-option>
            </el-select>
                 
          </el-form-item>
          <div v-show="isShow">
          <el-form-item label="*" prop="inputparams">
            <div class="bigfont">Enter parameters you need to use in your task</div>
            <el-table :data="form.inputparams" style="width: 100%" empty-text = "--">
              <el-table-column prop="type" label="param type" width="180">
                <template slot-scope="scope">
                  <el-input v-if="0" v-model="scope.row.type"></el-input>
                  <span v-else>{{scope.row.type}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="default" label="param value" width="180">
                <template slot-scope="scope">
            <el-input v-if="1" v-model="scope.row.default"></el-input>
            <span v-else>{{scope.row.default}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="param name" >
                <template slot-scope="scope">
            <el-input v-if="0" v-model="scope.row.name"></el-input>
            <span v-else>{{scope.row.name}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>

          <el-form-item label="*" prop="outparams">
            <div class="bigfont">Enter type of results you want</div>
            <el-table :data="form.outparams" style="width: 100%" empty-text = "--">
              <el-table-column prop="type" label="param type" width="180">
                <template slot-scope="scope">
                  <el-input v-if="0" v-model="scope.row.type"></el-input>
                  <span v-else>{{scope.row.type}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="default" label="param value" width="180">
                <template slot-scope="scope">
            <el-input v-if="1" v-model="scope.row.default"></el-input>
            <span v-else>{{scope.row.default}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="param name" >
                <template slot-scope="scope">
            <el-input v-if="0" v-model="scope.row.name"></el-input>
            <span v-else>{{scope.row.name}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          </div>
        </el-col>
        </el-row>
  
        <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;" id='demo4'>Upload Data</span>
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="Upload the data you need to process, currently the model only supports CSV type data">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover>

        <el-divider></el-divider>
        
        <div style="margin-bottom: 24px;" id ='demo5'>
          <MultiFileUpload></MultiFileUpload>
        </div>
        
        <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;" >Run Task</span>
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="you can define the name and description of your task, which you want to compute by our model">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover>
        <el-divider></el-divider>
    
        <el-form-item>
          <el-button size="small" type="primary" @click="updateHandle('form')" id='demo6'>Run Task</el-button>
          <el-button size="small" @click="gotolog()" id='demo7'>Run Example</el-button>
        </el-form-item>
      </el-card>
    
   
  </el-form>
</div>
</template>

<script>
import axios from 'axios'
import MultiFileUpload from '../../components/upload/MultiFileUpload'
import {steps} from './insertguide.js'

export default {
   components: {
      MultiFileUpload
  },
  data() {
    return {
      types: [
        '.csv', '.tsv', '.xlsx'
      ],
      isShow: false,
      modelnames: [],
      limitNum: 100,
      formLabelWidth: '80px',
      fileList: [],
      id: '',
      name:'',
      driver: null,
      form: {
          file: '',
          taskname: '',
          description: '',
          modelname:'',
          type: '.csv',
          inputparams:[],
          outparams:[],
        },
        rules: {
          description: [
            { required: true, message: 'description不能为空', trigger: 'blur' }
          ],
          taskname: [
            { required: true, message: 'taskname不能为空', trigger: 'blur' }
          ],
        
          type: [
            { required: true, message: 'type不能为空', trigger: 'blur' }
          ],
          modelname: [
            { required: true, message: 'model不能为空', trigger: 'blur' }
          ],
        }
    }
  },
  created() {
            //请求第一页数据
            this.formData = new FormData()
            this.getList()
            
        } ,
  
  methods: {
    start() {
        this.$nextTick(() => {
        this.$driver.defineSteps(steps);
        this.$driver.start();
      });
    },
  

  



    
    getList () {            
                this.instance.getModels().then((res)=>{ 
          //成功
                this.modelnames = res.data.result;
                   
				})
      },
    mounted() {
            //请求第一页数据
            this.getList()

        },

    selected: function(type) {
      this.type = type
    },
    
    selectFn(e) {
      
      console.log(e)
      
      this.form.inputparams = this.modelnames[Number(e)].inputparams;
      this.form.outparams = this.modelnames[Number(e)].outparams;
      this.form.modelname = this.modelnames[Number(e)].name;

     
      this.isShow = true;
     
                    
    },
    updateHandle (formName) {
    //  if(!sessionStorage.getItem('token')){
     //       this.$router.push('/login');
      //    }else{

            this.$refs[formName].validate(valid => {
              if (valid) {
                this.updatedatabase();
              }
            });

        //  }
    },
    
  async  updatedatabase() {
      let path = ''
        if(this.filepath){
           path = this.filepath          
        }
        const data = {
          modelname: this.form.modelname,
          rawtype: this.form.type,
          taskname: this.form.taskname,
          rawurl: path,
          description: this.form.description,
          inputparams: JSON.stringify(this.form.inputparams),
          outparams: JSON.stringify(this.form.outparams)
        };
      
        console.log(data);
        await  this.instance.insertTasks(data,  {'Content-Type': 'application/x-www-form-urlencoded'}).then(res => {
          this.$notify.success({
            title: '成功',
            message: `添加成功`
          });
          console.log(res);
          this.id = res.data.id
          this.name = res.data.name
          
          
        }).catch((error)=> {
          this.$notify.error({
            title: error.response.data.error.id,
            message: error.response.data.error.message
        });
        });
        
        

        let params = {
                        
                            id: this.id,
                            status: 'executing'
                        
                    };
        console.log(params)
       await this.instance.updateStatus(params,  {'Content-Type': 'application/x-www-form-urlencoded'}).then((res)=>{ 
              //成功
                        console.log(res);
                    
            }).catch((error)=> {
          this.$notify.error({
            title: error.response.data.error.id,
            message: error.response.data.error.message
        });
        });

        this.$router.push(
                    {
                        path: 'log',
                        query: {
                            name: this.name
                        }
                    }
         )


    },
    

    gotolog(){

      this.$router.push(
                    {
                        path: 'log',
                        query: {
                           name: this.name
                        }
                    }
        )

    },

    download2 () {
                
          //console.log(path)
          let params = {
                  params: {
                      path: "/home/lzl/tumor/individual-center-web/upload/example.zip"
                  }
              };
            path = "/home/lzl/tumor/individual-center-web/upload/example.zip"
             console.log(params)
              this.instance.download(params).then((res)=>{ 
                this.downloadfile(res.data,path.split("/").pop());
              });         
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
      }



  }
}
</script>

<style lang="scss" scoped>
.main { /* it is for tree that be in center*/
		margin-left: 3%; margin-bottom: 5%; margin-top: 3%; margin-right: 20%;
	}
.el-card /deep/ .el-card__header {
    background-color: rgba(31, 147, 255, 0.3);
    font-family:"Times New Roman", Times, serif;
}
.bigfont{
  font-family:"Helvetica Neue";
  font-weight:bold;
  font-size:10px;
}
</style>