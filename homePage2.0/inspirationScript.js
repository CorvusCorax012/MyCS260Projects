
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var button = $('.quoteButton')
    button.click(function () {
      getQuote(data);      
    });
    getQuote(data);
  });

  
  function getQuote(data) {
    let quoteArray = data.map((n) => n.text);
    let authorArray = data.map((n) => n.author);
    let randNum = Math.floor(Math.random() * quoteArray.length)
    const quote = quoteArray[randNum];
    const author = authorArray[randNum];
    if(author === null) {
      author = "Unknown";
    }
    document.getElementById("quote").innerHTML = "\"" + quote + "\"";
    document.getElementById("author").innerHTML = "-" + author;
  }