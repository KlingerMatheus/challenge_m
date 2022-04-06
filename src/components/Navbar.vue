<template>
  <nav id="navbar">
    <img
      id="logo"
      src="../assets/logo-dark.png"
      alt="Logo Klinger Matheus - Dev Full Stack"
      height="60px"
    />
    <div class="links">
      <router-link
        v-for="(link, index) in links"
        :to="link.path"
        :key="index"
        >{{ link.title }}</router-link
      >
    </div>

    <div class="links-responsive">
      <button
        @click="toggleResponsiveNavbar"
        id="close-navbar-responsive"
        class="icon-button"
      >
        <i class="fa fa-times-circle"></i>
      </button>
      <router-link
        v-for="(link, index) in links"
        :to="link.path"
        :key="index"
        >{{ link.title }}</router-link
      >
    </div>
    <div id="toggle-button">
      <button @click="toggleResponsiveNavbar" class="icon-button">
        <i class="fa fa-bars"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      links: [
        { path: "/", title: "Register User" },
        { path: "/users", title: "View Users" },
      ],
    };
  },
  methods: {
    toggleResponsiveNavbar() {
      let responsiveNavbar = document.querySelector(".links-responsive").style;

      return responsiveNavbar.display === "flex"
        ? (responsiveNavbar.display = "none")
        : (responsiveNavbar.display = "flex");
    },
  },
};
</script>

<style scoped>
* {
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
}

#navbar {
  display: flex;
  flex-direction: row;
  background-color: rgb(27, 27, 27);
  padding-block: 12px;
  align-items: center;
  justify-content: space-around;
}

#navbar a {
  font-weight: 600;
  text-decoration: none;
  margin-inline: 12px;
  color: #fff;
  font-size: 24px;
  padding: 12px 24px;
  transition: all 250ms;
}

#navbar a.router-link-exact-active {
  color: rgb(0, 160, 255);
  background-color: rgba(0, 160, 255, 0.1);
  border-radius: 100px;
}

.icon-button {
  border-radius: 100%;
  width: 60px;
  height: 60px;
  font-size: 32px;
  background-color: transparent;
  color: rgb(0, 160, 255);
  cursor: pointer;
}

.icon-button:hover {
  transform: scale(1.15);
}
.icon-button:active {
  background-color: rgba(0, 160, 255, 0.1);
}

.links-responsive {
  display: none;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9999;
}

.links-responsive a {
  margin-block: 18px;
}

.links-responsive #close-navbar-responsive {
  position: fixed;
  font-size: 48px;
  bottom: 20px;
}
/* RESPONSIVE */

@media screen and (max-width: 900px) {
  .links {
    display: none;
  }

  #toggle-button {
    display: flex;
  }

  #logo {
    max-height: 36px;
  }
}

@media screen and (min-width: 901px) {
  .links {
    display: flex;
  }

  #toggle-button {
    display: none;
  }
}
</style>
