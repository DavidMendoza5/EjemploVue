<template>
  <div id="app">
    <nav class="site-header">
      <div class="container d-flex flex-cloumn flex-md-row justify-content-between">
        <a href="#" class="py-2" aria-label="product">
          <img src="./assets/logo.png" width="34" height="34" fill="none">
        </a>
      <router-link tag="a" to="/Home" class="py-2 d-done d-md-inline-block">Home</router-link>
      <router-link tag="a" to="/about" class="py-2 d-done d-md-inline-block">About</router-link>
      <router-link tag="a" to="/logIn" class="py-2 d-done d-md-inline-block">Login</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  body {
    border: aqua;
    margin: 0;
    padding: 0;
    font-family: Arial;
    height: 100%;
    background:red;
    background: linear-gradient(
      to right,
      rgba(117, 186, 255, 100),
      rgba(99, 177, 255, 100),
      rgba(195, 217, 240, 94)
    );
  }

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(120%) blur(20px);
  backdrop-filter: saturate(120%) blur(20px);
}

.site-header a{
  color: #FAD780;
  transition: ease-in-out color .15s;
}

.site-header a:hover{
  color: #2E66FF;
  text-decoration: none;
}
</style>