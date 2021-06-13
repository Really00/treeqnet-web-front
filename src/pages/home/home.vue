<template>
  <div class="cons">
  <div class="bs-docs-featurette">
    <div class="container">
      <h2 class="bs-docs-featurette-title">Treatment Evaluation with Quantified Network TreeQNet</h2>
      <p class="lead">TreeQNet innovatively uses proteomics and phosphoproteomics data of tumor tissues of cancer patients to predict patient drug sensitivity. </p>

      <hr class="half-rule">

      <div class="row">
        <div class="col-md-12">
          <img src="./assets/img/flow.png"  class="img-responsive" width="100%">
          <h3>TreeQNet Flow Chart</h3>
          <p>TreeQNet first used the tumor tissue proteomics and phosphoproteomics data of cancer patients to construct a tissue-specific kinase-substrate network, 
             then use the elastic regression model to predict the drug response (TCGI%) to achieve the prediction of the patient's drug sensitivity</p>
        </div>
        
      </div>

      <hr class="half-rule">

      <p class="lead">TreeQnet is full open sourced</p>
      <a href="https://www.sciencedirect.com/science/article/pii/S153561082030413X" class="btn btn-outline btn-lg">Acess Our Paper</a>
    </div>
  </div>
  </div>
</template>


<style scoped>
@import "./assets/css/docs.min.css";
@import "./assets/css/patch.css";
@import "../../assets/styles/bootstrap.min.css";
</style>