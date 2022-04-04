<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg p-1 mb-3 rounded" id = "nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id = "title">VocabBuilder<i class="fa-solid fa-brain"></i></a>
          <div class = "buttons">
            
            <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
            <router-link to="/NewWords"><i class="fa-solid fa-plus"></i></router-link>
            <router-link to="/Vocab"><i class="fa-solid fa-book-open"></i></router-link>
            <router-link to="/Lists"><i class="fa-solid fa-list"></i></router-link>
            <router-link to="/"><i class="fa-solid fa-user"></i></router-link>
          </div>
          
      </div>
    </nav>
    <router-view/>
     <footer class="fixed-bottom navbar-light bg-primary shadow-lg mt-3 p-3 rounded">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="https://github.com/CorvusCorax012/MyCS260Projects/tree/main"
          ><i class="fa-brands fa-github"></i></a
        >
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.buttons a:link, a:visited {
  background-color: #ffffff;
  color: #292b2c;
  
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
router-link {
  display: block;
  padding: 1rem;
}
.buttons a:hover, a:active {
  background-color: #f5d74f;
}
#title{
  font-weight: bold;
  font-size: xx-large;
  color: #ffffff;
}
#title:hover{
  color: #f5d74f;
}
#nav:hover::after{
  /*text-decoration: underline;*/
  width: 100%;
	left: 0;
  
  
}
#nav::after {
	position: absolute;
	content: "";
	width: 0%;
	height: 10px;
	background-color: #f5d74f;
	left: 50%;
	bottom: -10px;
	transition: all 0.4s ease-in-out;
}
</style>
