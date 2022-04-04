<template>
<div class="home">
  <section class="image-gallery">
    <div class="word" v-for="word in words" :key="word.id">
      <div class = "vocabCard">
      <h1>{{word.word}}</h1>
      <div class="outline">
        <div class="info">
          <p>{{word.partofSpeech}}</p>
          <h2>{{word.definition}}</h2><br>
          <h3>{{word.phonetic}}</h3><br>
        </div>
      </div>
      <button @click="deleteWord(word)">Delete</button>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Vocab',
  data() {
    return {
     words: [],
    }
  },
  created() {
    this.getWords();
  },
  methods: {
    async getWords() {
      try {
        let response = await axios.get("/api/words");
        this.words = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteWord(word) {
      try {
        console.log("before delete call");
        await axios.delete("/api/words/" + word._id);
        console.log("after delete call");
        this.getWords();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    
  }
}
</script>

<style scoped>
.vocabCard {
 
  display: block;
  margin: 2rem;
  border: 1px solid;
  padding: 2rem;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 25px;
  justify-content: center;
  font-display: bold;
  background-color: #e0e0e0;
}
.outline{
  background-color: #a7a7a7;
}
.info {
  opacity: 0.0;
  outline-color: #888888;
}
.info:hover {
  opacity: 1.0;
}

</style>