<template>
  <div class="cons">
  <div class="bs-docs-featurette">
    <div class="container">
      <h2 class="bs-docs-featurette-title">Treatment Evaluation with Quantified Network TreeQNet</h2>
      <p class="lead">TreeQNet Innovatively use the proteome and phosphorylated proteomics information of patients with colorectal cancer to predict the sensitivity to 
        Afatinib, Regorafenib, and Gefitinib. It is hoped that it can 
        help patients in their medication at the clinical level, and will develop more based High-throughput omics and network models to predict more clinical conditions. </p>

      <hr class="half-rule">

      <div class="row">
        <div class="col-md-12">
          <img src="./assets/img/flow.png"  class="img-responsive" width="100%">
          <h3>TreeQNet Flow Chart</h3>
          <p>TreeQNet First, use the proteomic and phosphorylated proteomic information of patients with colorectal cancer to construct the edge expression value, 
            and then use the method of elastic network selection to extract the kinase-substrate with the best classification ability as the edge marker and construct the 
            patient's Afatinib, Regorafenib, Gefitinib three drug susceptibility prediction models. For an unknown sample, even a single sample, we only need to use edge transformation to 
            convert the point data of the sample into edge data, and then use our existing prediction model to predict the drug sensitivity of the patient.</p>
        </div>
        
      </div>

      <hr class="half-rule">

      <p class="lead">TreeQnet is full open sourced</p>
      <!--<a href="https://www.sciencedirect.com/science/article/pii/S153561082030413X" class="btn btn-outline btn-lg">Access Our Paper</a>-->
    </div>
  </div>
  </div>
</template>


<style scoped>
@import "./assets/css/docs.min.css";
@import "./assets/css/patch.css";
@import "../../assets/styles/bootstrap.min.css";
</style>