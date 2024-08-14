<template>
  <header>
      <div class="burger" @click="toggleMenu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
      <div class="title">
        <img src="../assets/img/sat.jpg" alt="" />
        <div class="title-text">
        <h1>Cora Platform</h1>
        <h2>Advance Production Scheduling</h2>
        </div>
      </div>
      <div class="user">
        <span>Joko Siyanto - Production</span>
        <img src="../assets/img/woman-avatar.png" alt="User Icon" />
      </div>
    <nav class="nav-menu":class="{ open: isMenuOpen }" id="nav-menu">
      <span class="sidenav-close" @click="toggleMenu">&times;</span>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </header>
</template>

<script>
export default{
  name:'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; 
    },
  },

}
</script>