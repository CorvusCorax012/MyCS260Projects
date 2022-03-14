<template>
<div class="wrapper">
  <div class="words">
    <div class="word">
      <div class="info">
        <h1>{{word.word}}</h1>
        
      </div>
      <div class="price">
        <button class="auto" v-on:click="addToVocab(word)">
            Add to Vocab
        </button>
      </div>
    </div>
  </div>
</div>
</template>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>