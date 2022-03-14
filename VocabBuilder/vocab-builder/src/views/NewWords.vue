<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model= "searchText" />
      </form>
    </div>
  </div>
  <!--<ProductList :products="products" />-->
  <p>To be completed With Mongo DB</p>
  <div class = "vocabCard">
    <h1>Hello(Mock Data)</h1><br>
    <h2>Definition: used as a greeting or to begin a phone conversation.</h2><br>
    <h3>Phonetics: həˈləʊ</h3>
    <audio controls autoplay>
      <source src="#" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio><br><br>
    <button>Add to Vocab</button>
  </div>
</div>
</template>

<script>
/*export default {
  name: "VocabWord",
  props: {
    words: Array,
  },
  methods: {
        async vocab() {
        try {
          
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchText;
       
        const response = await axios.get(url);
        this.current = response.data;
        console.log(response.data);
      
      } catch (error) {
        console.log(error);
      }
    },
    addToVocab(word) {
      console.log("add to vocab", word);
      this.$root.$data.cart.push(word);
    },
  },
};*/
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
form {
  display: table;
  width: 100%;
}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
.vocabCard {
  display: block;
  background-color: #ccc;
  padding: 2rem;
}
</style>