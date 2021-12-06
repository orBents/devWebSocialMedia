<template>
  <div class="bottom-header">
    <b-navbar class="navbar">
      <b-navbar-nav class="navbar-nav">
        <b-nav-item to="/timeline" class="item"
          ><b-icon icon="house-door-fill"></b-icon
        ></b-nav-item>
        <b-nav-item to="/grupos" class="item"
          ><b-icon icon="people-fill"></b-icon
        ></b-nav-item>
        <b-nav-item to="/perfil" class="item"
          ><b-icon icon="person-circle"></b-icon
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {
  methods:{
    createPost(){
      
    }
  }
  
};
</script>

<style>
.bottom-header {
  position: fixed;
  bottom: 0;
  width: 100%;
  border: 1px solid grey;
  background: white;
  z-index: 99;
}
.navbar {
  width: 100%;
}
.navbar-nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
