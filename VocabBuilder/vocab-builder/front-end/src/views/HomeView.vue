<template>
<body>
  <div class="wrapper">
    
      <div class = "content">
        <div id="intro">
          <h2>Build Your Vocabulary</h2>
          <p><strong>This site was made so that you can keep track of new words that you encounter. You can search for a new word <a href="../NewWords">here</a> to get info regarding that word and then you can decide if you would like to add it to your vocabulary cards to <a href="../Vocab">learn them</a> and start using in your day-to-day life or writing.<br>
          If you need inspiration for words to start out with check out the lists <a href="../Lists">here</a>
          </strong></p>
        </div>
        <div id = "quote">
          <p><em>“A man with a <strong>scant vocabulary</strong> will almost certainly be a <strong>weak thinker</strong>. The richer and more copious one's vocabulary and the greater one's awareness of fine distinctions and subtle nuances of meaning, the more fertile and precise is likely to be one's thinking. Knowledge of things and knowledge of the words for them grow together. If you do not know the words, you can hardly know the thing.”<br><br>
        ― Henry Hazlitt, Thinking as a Science</em></p>
        </div>
        
      </div>
  </div>
  
</body>
</template>



<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  padding: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
#intro {
  display: block;
  margin-bottom: 5rem;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 25px;
  justify-content: center;
  font-display: bold;
  background-color: #e0e0e0;
}
#intro a{
  text-decoration: none;
  color:#17a2b8;
}
#quote {
  display: block;
  margin-bottom: 5rem;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 25px;
  justify-content: center;
  font-display: bold;
  background-color: #e0e0e0;
}
p{
  font-size: x-large;
}
p2{
  font-size: large;
}

</style>
