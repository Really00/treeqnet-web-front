

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
      
      <p>TreeQNet innovatively uses the proteome and phosphoproteome
         data of tumor tissues and normal tissues of cancer patients to construct tissue-specific kinase-substrate 
         network , and then uses the elastic regression model to predict so as to realize the prediction of drug sensitivity
          of patients.  Based on this webserver,
        You can:</p>
      <ul class='tutorial-ul'>
        <li>construct tissue-specific kinase-substrate 
         network using proteome and phosphoproteome data. </li>
        <li>Predict drug sensitivity of patients. </li>
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

      <p> 1) Construction of kinase-substrate network</p>
      <img src="../img/input1.jpg" class="img-rounded" width='1000' height='500'>
      <p> 1. First enter the name of your task.</p>
      <p> 2. Then select the Edge model for your task. The execution of the Edge model requires three input data:</p>
      <ul class='tutorial-ul'>
        <li>ks_sample.csv: Kinase substrate information for data to be calculated</li>
        <li>KSNode.csv: Protein expression value and phosphorylation site expression value of cancer tissue </li>
        <li>Labl.csv: The division of training set and test set samples </li>
      </ul>
      <p>output data:</p>
      <ul class='tutorial-ul'>
        <li>edge_data.xls: Kinase-substrate edge features</li>
      </ul>

      <p>3. Enter your task description information.</p>

      <img src="../img/input2.jpg" class="img-rounded" width='1000' height='400'>
      <p> 4. Select the required input data.</p>
      <p> 5. Upload the input data.</p>
      <p> 6. Click "Run Task" to execute the task.</p>

      <p style="font-weight:bold"> Input Format</p>

      <p>ks_samples.csv:</p>
      <img src="../img/kssample.jpg" class="img-rounded" width='1000' height='300'>
      <ul class='tutorial-ul'>
        <li>Protein: protein name</li>
        <li>Gene: Edit protein gene</li>
        <li>Peptide: peptide</li>
        <li>Residue.Both: Phosphorylation sites of proteins</li>
        <li>P: Significant difference P-value</li>
        <li>FC: fold change</li>
      </ul>

      <p>KSNode.csv:</p>
      <img src="../img/ksnode.jpg" class="img-rounded" width='1000' height='400'>
      <ul class='tutorial-ul'>
        <li>Row name: Kinase_Substrate</li>
        <li>Column name: sample name</li>
        <li>Features value: the kinase-substrate test expression value of the sample</li>
      </ul>

      <p>labl.csv:</p>
      <img src="../img/labl.jpg" class="img-rounded" width='500' height='300'>
      <ul class='tutorial-ul'>
        <li>First column: sample name</li>
        <li>The second column: 1 represents the training set, 2 represents the testing set</li>
      </ul>

      <p style="font-weight:bold"> Onput Format</p>

      <p>edge_data.xls：</p>
      <img src="../img/edge.jpg" class="img-rounded" width='1000' height='400'>
      <ul class='tutorial-ul'>
        <li>Row name: Kinase_Substrate_Phosphorylation Site_Testing set/Training Set</li>
        <li>Column name: sample name</li>
        <li>Features value: edge features of the kinase-substrate network</li>
      </ul>

      <p> 1) Predict the patient's sensitivity to drugs</p>
      <img src="../img/input3.jpg" class="img-rounded" width='1000' height='800'>
      <p> 1. First enter the name of your task.</p>
      <p> 2. Then select the Ennet model for your task. The execution of the Ennet model requires eighy input data:</p>
      <ul class='tutorial-ul'>
        <li>dbdrug, dbdrug1, dbdrug2, dbdrug3: the observed value of the sample's response to the drug</li>
        <li>edata1, edata2, edata3, edata11: edge features of kinase substrate network </li>
      </ul>
      <p>3. Enter your task description information.</p>

      <img src="../img/input4.jpg" class="img-rounded" width='1000' height='550'>
      <p> 4. Select the required input data.</p>
      <p> 5. Upload the input data.</p>
      <p> 6. Click "Run Task" to execute the task.</p>

      <p style="font-weight:bold"> Input Format</p>

      <p>dbdrug1.csv:</p>
      <img src="../img/dbdrug1.jpg" class="img-rounded" width='500' height='250'>
      <ul class='tutorial-ul'>
        <li>Row name: sample name</li>
        <li>Column name: drug name</li>
        <li>Features value: the observed value of the sample's reaction to the drug</li>
      </ul>
      <p>dbdrug2.csv: The data format is consistent with dbdrug1.csv and is classified as a training set sample</p>
      <p>dbdrug3.csv: The data format is consistent with dbdrug1.csv, which is classified as a sample of the testing set</p>
      <p>dbdrug.csv: The data format is consistent with dbdrug1.csv</p>

      <p>edata1.csv: Transposed by edge_data.xls</p>
      <img src="../img/edata.jpg" class="img-rounded" width='1000' height='500'>
      <ul class='tutorial-ul'>
        <li>Row name: sample name</li>
        <li>Column name: Kinase_Substrate_Phosphorylation Site_Testing set/Training Set</li>
        <li>Features value: edge features of the kinase-substrate network</li>
      </ul>
      <p>edata2.csv: The data format is consistent with edata1.csv and is classified as a training set sample</p>
      <p>edata3.csv: The data format is consistent with edata1.csv, which is classified as a sample of the testing set</p>
      <p>edata11.csv: The data format is consistent with edata1.csv</p>


      <p style="font-weight:bold"> Onput Format</p>

      <p>Afatinib of C486</p>
      <img src="../img/afa.jpg" class="img-rounded" width='800' height='700'>
      <p>Comparison of observed and predicted values of sample response to Afatinib, gefitinib and regorafenib</p>

 

      <h3 id="log"> Log</h3>
      <img src="../img/log.jpg" class="img-rounded" width='1000' height='250'>
      <p>After clicking the above "Run Task" button, it will automatically jump to the "Log" tab, where you can see the task id and runtime information. Depending 
        on the amount of data, 
        the task running time will vary. You can save the task id, and after the task is completed, you can view and download the result on the "Result" interface.</p>

      
      


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
