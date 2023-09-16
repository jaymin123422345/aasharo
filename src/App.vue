<template>
  
  <div class="scroll-up-btn">
      <i class="fas fa-angle-up"></i>
    </div>
  <nav class="navbar1">
      <div class="max-width">
        <div class="logo"><a href="#">Aasharo Sevakiy<span> Sansthan.</span></a></div>
        <ul class="menu">
          <li><a href="#" class="menu-btn">Home</a></li>
          <li><a href="/gallary" class="menu-btn">Gallary</a></li>
          <li><a href="#Parceiros" class="menu-btn">Members</a></li>
          <li><a href="#Adocao" class="menu-btn">Join Us</a></li>
          <li><a href="#Depoimentos" class="menu-btn">Services</a></li>
          <li><a href="#Contato" class="menu-btn">Contact US</a></li>
        </ul>
        <div class="menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  <div >
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app{
  width:100%;
}
body{
  width: 100%;
}
html{
  width: 100%;
}
a {
  text-decoration: none !important;
}
</style>