<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
        <input v-model="searchText" placeholder=" search for a word"/>
        </form>
      </div>
      <button v-on:click="getWord"><i class="fas fa-search"></i></button>
    </div><br>

    <div><p>Please search a word and the vocab card below will be filled automatically for you!</p><br>
    <h2>{{this.errorMessage}}</h2></div>

    <div class = "vocabCard">
      <h1>{{this.word}}</h1>
      <p>{{this.partofSpeech}}</p>
      <h2>{{this.definition}}</h2><br>
      <h3>{{this.phonetic}}</h3><br>
      
      
      <button v-on:click="upload">Learn Word</button>
    </div>

  </div>

</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      searchText: '',
      word: '',
      definition: '',
      partofSpeech: '',
      phonetic: '',
      errorMessage: '',
    }
  },

  methods: {
    add: function(event) {
      alert(event);
    },
    displayWord: function(json){
      console.log("display function");
        for (let i = 0; i < json.data.length; i++) {
          console.log(json.data[i].word);
          this.word = this.capitalizeFirstLetter(json.data[i].word);
          for (let j = 0; j < json.data[i].meanings.length; j++) {
            console.log(json.data[i].meanings[j].definitions[0]);
            this.definition = json.data[0].meanings[0].definitions[0].definition;
            this.partofSpeech = json.data[0].meanings[0].partOfSpeech;
            this.phonetic = json.data[0].phonetic;
            
          }
          
        }
    },
    getWord() {
        try {

        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ this.searchText;
        
        axios
          .get(url)
          .then ((response) => {
            console.log(response);
            this.displayWord(response);
            //this.errorMessage = response.message;
          })
          .catch(function(error) {
            
            console.log(error);
          });
      } catch (error) {
        console.log(error);
        
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async upload() {
      try {
        //const formData = new FormData();
        let r1 = await axios.post('/api/words', {
          word: this.word,
          definition: this.definition,
          partofSpeech: this.partofSpeech,
          phonetic: this.phonetic,
        });
        this.addWord = r1.data;
      } catch (error) {
        console.log(error);
      }
    },


    
  }
}

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
  padding: 10px;
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
  margin: 3rem;
  border: 1px solid;
  padding: 3rem;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 25px;
  justify-content: center;
  font-display: bold;
  background-color: #e0e0e0;
}



</style>