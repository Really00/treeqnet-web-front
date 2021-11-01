

<template>

<div >
  
  <div class="tutorial-content">
    <ul class="tutorial-nav-ul" id="nav">
     
      <li class="tutorial-nav-li"><a href="#welcome" class=" ">Welcome</a></li>
      <li class="tutorial-nav-li"><a href="#howtouse" class=" ">How to use</a></li>
      <li class="tutorial-nav-li"><a href="#quicktostart" class=" ">Quick to start</a></li>
      <li class="tutorial-nav-li"><a href="#ioformat" class=" ">Input and output format</a></li>
    
    
      <li class="tutorial-nav-li"><a href="#log" class=" ">Log</a></li>
      <li class="tutorial-nav-li"><a href="#result" class=" ">Result</a></li>
      
    </ul>
    
    <div class="tutorial-doc-content">
      <h2 id="welcome"> Welcome to TreeQNet</h2>
      <p> </p>
      
      <p>The project innovatively uses the proteomic and phosphorylated proteomic information of patients with 
        colorectal cancer to construct the side expression value, and then uses the method of elastic network selection to extract the kinase-substrate 
        with the best classification ability as the side marker and construct the patient Prediction model of susceptibility to Afatinib, Regorafenib and Gefitinib.
        Based on this webserver, You can:</p>
      <ul class='tutorial-ul'>
        <li>upload proteome and phosphoproteome data, Predict the sensitivity of patients to Afatinib, Regorafenib and Gefitinib.</li>
      </ul>
      
      <h3 id="howtouse"> How to use</h3>
      <p> To use TreeQNet webserver visit <a href="" >202.38.31.87:8280 </a></p>
      
      <h3 id="quicktostart"> Quick to start</h3>
      <img src="../img/quick.jpg" class="img-rounded" width='1000' height='600'>
      <p>Run your task in the "Add Task" tab. In the upper left corner, 
        you can click "Run Tour" to guide the task to complete the creation and execution of your task. In the lower left corner, 
        you can click "Run Example" 
        to run our example directly.</p>
      <h3 id="ioformat">Input and output format</h3>

      <p>1. Select model and the drug category you want to predict. Currently, only the prediction of Afatinib, Gefitinib, and Regorafenib are supported.</p>
      <img src="../img/model.jpg" class="img-rounded" width='1000' height='500'>
      <p> Fill in the drug category you want to predict in drug_name, 1 represents Afatinib, 2 represents Gefitinib, 3 represents Regorafenib and the default is 1.</p>

      <p>2. Enter your task name.</p>

      <p>3. Enter your task description information.</p>

      <p> Upload protein and phosphorylation site files (must strictly follow the specified format of the instruction document)</p>
      <img src="../img/upload.jpg" class="img-rounded" width='1000' height='500'>
      <ul class='tutorial-ul'>
        <li>pro.csv</li>
        <li>pho.csv</li>
      </ul>
      <p>pro.csv:The protein expression value data of the patient's tumor tissue (any tumor is acceptable) to be predicted</p>
      <img src="../img/pro.jpg" class="img-rounded" width='1000' height='300'>
      <p>The first column is the protein gene name of the patient to be predicted (no duplicate values), the second column is the protein 
        expression value of the patient to be predicted (after normalization, no missing values), the column names 
        are [ID] and [patient ID ( You can use numbers or letters to number freely, and it must be consistent with the number in pho.csv)], the uploaded file must be in csv format.</p>
      
      <p>pho.csv:The expression data of phosphorylation site in tumor tissue (any tumor is acceptable) to be predicted</p>
      <img src="../img/pho.jpg" class="img-rounded" width='1000' height='300'>
      <p>The first column is the phosphorylation site ID of the patient to be predicted (no repeated values), the format is [gene name]_[phosphorylation site category][phosphorylation site position], 
        the second column is the phosphorylation site of the patient to be predicted The expression value of the chemical site (after standardization, no missing values), 
        the column names are [ID] and [patient ID (free numbers or letters can be used, must be consistent with the number in pro.csv)], the uploaded file must be csv format.</p>

      <p>output data:</p>
      <ul class='tutorial-ul'>
        <li>drug_response.pdf: predicted values of sample response to Afatinib, gefitinib or regorafenib</li>
        <li>pheatmap.pdf: pheatmap</li>
      </ul>

      <img src="../img/run_task.jpg" class="img-rounded" width='1000' height='550'>      
      <p> 5. Upload the input data.</p>
      <p style="font-weight: bold"> 6. Click "Run Task" to execute the task. Depending 
        on the amount of data, the whole process takes about 20 minutes or more</p>
 

      <h3 id="log"> Log</h3>
      <img src="../img/log.jpg" class="img-rounded" width='1000' height='250'>
      <p>After clicking the above "Run Task" button, it will automatically jump to the "Log" tab, where you can see the task id and runtime information. Depending 
        on the amount of data, 
        the whole process takes about 20 minutes or more. You can save the task id, and after the task is completed, you can view and download the result on the "Result" interface.</p>

       <h3 id="result"> Result</h3>
       <img src="../img/result1.jpg" class="img-rounded" width='700' height='300'>
       <p> 1. The id of the currently displayed task</p>
       <p> 2. Click "run tour" to guide the "Result" interface</p>
       <p> 3. Enter the id of the task to search for the task</p>
       <p> 4. Show basic information about the task</p>

       <img src="../img/result2.jpg" class="img-rounded" width='1000' height='500'>
       <p> 5. Display the runtime status of the task</p>
       
       <img src="../img/result3.jpg" class="img-rounded" width='800' height='400'>
       <p> 6. Download results</p>

       
    </div>
  </div>


</div>
</template>


<style scoped>
@import "../../../assets/styles/bootstrap.min.css";
@import "../css/style.css";

</style>
