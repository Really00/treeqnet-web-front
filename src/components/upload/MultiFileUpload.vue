<template>
  <div>
    <uploader
      ref="uploader"
      browse_button="browse_button"
      :url="'/object/file/upload'"
      :filters="{prevent_duplicates:true}"
      @inputUploader="inputUploader"
    />
    
    
    <div class="bigfont"></div>
     <br>
    <el-button size="small" type="primary" id="browse_button">Select Files</el-button>
   
    <el-table
      :data="tableData"
      empty-text = "--"
      style="width: 100%; margin: 10px 10px;">
      <el-table-column
        label="file name">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="file size">
        <template slot-scope="scope">
          <span>{{scope.row.size}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="status">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">Ready</span>
          <span v-if="scope.row.status === 4" style="color: brown">Fail</span>
          <span v-if="scope.row.status === 5" style="color: chartreuse">Uploaded</span>
          <el-progress v-if="scope.row.status === 2" :text-inside="true" :stroke-width="20" :percentage="scope.row.percent"></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        label="operate">
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteFile(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br/>
    <el-button type="danger" size="small"  @click="up.start()">Upload</el-button>
  </div>
</template>

<script>
  import Uploader from './Uploader'
  export default {
    name: "MultiFileUpload",
    data() {
      return {
        files: [],
        up: {},
        server_config: "'/object/file/upload'",
        tableData: [],
        filepath: []
      }
    },
    watch: {
      files: {
        handler() {
          this.tableData = [];
          this.files.forEach((e) => {
            this.tableData.push({
              name: e.name,
              size: e.size,
              status: e.status,
              id: e.id,
              percent: e.percent,              
            });
            if(e.status == 5){
              this.filepath.push(
                  e.relativePath          
              );
            }
           
            if(e.relativePath){
              this.$emit('transferFilePath', this.filepath)
            }
          });
  
        },
        deep: true
      }
    },
    methods: {
      inputUploader(up) {
        this.up = up;
        this.files = up.files;
      },
      deleteFile(id) {
        let file = this.up.getFile(id);
        this.up.removeFile(file);
      }
    },
    components: {
      'uploader': Uploader
    }
  }
</script>

<style scoped>
.bigfont{
  font-family:"Helvetica Neue";
  font-weight:bold;
  font-size:10px;
}

</style>
