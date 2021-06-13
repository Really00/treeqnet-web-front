
<template>
  <div id=''>
    <div class="faq-content">
      <h3 id="">Q:  In addition to Afatinib, gefitinib and regorafenib drug reaction, whether it is possible to test other drug response ?</h3>
      
      
      <p> The tutorial uses Afatinib, gefitinib and regorafenib as examples, because our example is to test the drug response of patients with metastatic colorectal 
        cancer to Afatinib, gefitinib and regorafenib. 
        Users can test the effects of different cancer patients on different drugs according to their own needs. reaction. This service has strong scalability.</p>
      
      <h3 id="">Q:  Why does the service divide testing drug response into two steps instead of an end-to-end approach ?</h3>
      
      <p> In the first step of the service, the edge model constructs a kinase-substrate network, and in the second step, the features of the kinase substrate 
        network are used to predict the patient's drug response on the elastic model. The predictive model we chose is the elastic model. Users can also use our service to 
        obtain a kinase substrate network, a
        nd then use other predictive models (such as the Naive Bayes classifier) to predict the patient’s drug response (we take this into account).</p>
      
  </div>
  </div>
</template>



<style scoped>
@import "../../../assets/styles/bootstrap.min.css";
@import "../css/style.css";

</style>