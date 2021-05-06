
<template>
    <div class="photoinfo-container">
        <div class="thumbs">
            <vue-preview :slides="list" class="imgPrev"></vue-preview>
        </div>
    </div>
</template>

<script>
    //listTmp中各字段含义:
    //src:缩略图点开后图片
    //msrc:缩略图
    //w:缩略图点开后的宽度
    //h:缩略图点开后的高度
   import { saveAs } from 'file-saver';
    export default {
        
        data(){
            return {
                list:[],//缩略图的数组
                img:''
            }
        },
        props:['info'],
        watch: {
            info: {
                handler() {
                    this.getList()  
                },
                deep: true
            }
        },
        
        methods:{
             getList(){
               // console.log(this.info);
                let outparams = JSON.parse(this.info['outparams']);
                
                
                let listTmps = [];
                for(const index in outparams){
                    let params = {
                        params: {
                            path: outparams[index]['value'].replace('.pdf','.jpg')
                        }
                    };
                    
                    this.instance.download(params).then((res)=>{ 
                        
                        this.img  = window.URL.createObjectURL(res.data);
                       // console.log(this.img)
                        let listTemp = {
                            src: this.img,
                            msrc: this.img,
                            w:800,
                            h:600
                        };
                        listTmps.push(listTemp);
                       // console.log(listTemp)       
                    });
                    
                                      
                }

              
                this.list = listTmps;
                 console.log(this.list[0])
                

            }
            

        }
    }
</script>
 
<style lang="scss">
    .photoinfo-container{
        .thumbs{
            .imgPrev{
                .my-gallery{
                    figure{
                        display: inline-block;
                        margin: 8px;
                    }
                    img{
                        width: 400px;
                        height: 400px;
                    }
                }
            }
        }
    }
</style>