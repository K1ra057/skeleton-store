<template>
  <div class="first-page-container relative z-10 text-white">
    <!-- Подключение Header компонента -->
    <Header />

    <!-- Основной контент страницы -->
    <div class="main-content flex items-center justify-between px-10 py-16 h-screen">
      <div class="text-content max-w-lg">
        <h1 class="text-4xl font-bold mb-4">Discover and Find Your Own Fashion!</h1>
        <p class="mb-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur. Egestas in semper mi porttitor vestibulum nec aliquam. 
          Tempor nisi sagittis arcu tellus orci.
        </p>
        <button class="bg-white text-purple-800 font-semibold px-6 py-2 rounded hover:bg-purple-100">
          Explore Now
        </button>
      </div>
      
      <div class="character-image bg-purple-600 rounded-lg p-4">
        <img src="@/assets/skelet.png" alt="Character" class="w-48 h-48 object-cover rounded" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "FirstPage",
  components: {
    Header,
  },
};
</script>

<style scoped>
.main-content {
  padding-top: 80px; /* Чтобы основной контент не накладывался на header */
}
</style>
