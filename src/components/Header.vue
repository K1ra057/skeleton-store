<template>
  <header class="overlay-header">
    <div class="logo">
      <img src="@/assets/logo.gif" alt="Logo" />
    </div>
    <div class="nav-container">
      <nav class="nav-menu">
        <button type="button" title="Home">
          <span>Home</span>
          <span class="material-symbols-outlined" aria-hidden="true">home</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath">Home</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath" startOffset="50%">QWE</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button type="button" title="Shop">
          <span>Shop</span>
          <span class="material-symbols-outlined" aria-hidden="true">store</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath">Shop</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath" startOffset="50%">Shop</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button type="button" title="Features">
          <span>Features</span>
          <span class="material-symbols-outlined" aria-hidden="true">Features</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath">Features</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath" startOffset="50%">Features</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button type="button" title="Cart">
          <span>Cart</span>
          <span class="material-symbols-outlined" aria-hidden="true">Cart</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath">Cart</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlink:href="#circlePath" startOffset="50%">Cart</textPath>
              </text>
            </g>
          </svg>
        </button>
      </nav>
    </div>
    <button @click="navigateToLogin" class="login-button border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-purple-800">
      Login
    </button>

    <!-- SVG path definition for circular text animation -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0">
      <defs>
        <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
      </defs>
    </svg>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
.overlay-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.logo img {
  width: 50px;
  height: auto;
}

.nav-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nav-menu {
  display: flex;
  gap: 1rem;
}

.nav-menu button {
  position: relative;
  display: grid;
  place-content: center;
  grid-template-areas: 'stack';
  padding: 0 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.nav-menu button span:first-of-type {
  grid-area: stack;
  transition: transform 300ms ease-in-out;
}

.nav-menu button span:last-of-type {
  grid-area: stack;
  transform: scale(0);
  transition: transform 300ms ease-in-out;
}

.nav-menu button svg {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
}

.nav-menu button:hover span:first-of-type {
  transform: scale(0);
}

.nav-menu button:hover span:last-of-type,
.nav-menu button:hover svg {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.nav-menu button svg g {
  transform-origin: center;
  animation: rotate 6s linear infinite;
}

.login-button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
