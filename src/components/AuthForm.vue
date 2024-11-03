<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2 class="text-2xl font-semibold text-center mb-4">{{ isLogin ? 'Вхід' : 'Реєстрація' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div v-if="!isLogin" class="mb-4">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Підтвердження пароля</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
        >
          {{ isLogin ? 'Увійти' : 'Зареєструватися' }}
        </button>
      </form>
      <p class="mt-4 text-center text-sm">
        <span @click="toggleForm" class="text-blue-500 cursor-pointer">
          {{ isLogin ? 'Немає облікового запису? Зареєструватися' : 'Вже є обліковий запис? Увійти' }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      isLogin: true, // початковий стан: форма логіна
    };
  },
  methods: {
    handleSubmit() {
      if (this.isLogin) {
        // Логіка для входу
        console.log("Логін:", this.email, this.password);
      } else {
        // Логіка для реєстрації
        if (this.password === this.confirmPassword) {
          console.log("Реєстрація:", this.email, this.password);
        } else {
          alert("Паролі не збігаються!");
        }
      }
    },
    toggleForm() {
      this.isLogin = !this.isLogin; // Переключаємо між формами логіна та реєстрації
      this.email = "";
      this.password = "";
      this.confirmPassword = ""; // Очищаємо поля
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Це дозволить зайняти всю висоту екрану */
  position: relative; /* Задайте позицію */
  z-index: 10; /* Дайте вищий z-index для контейнера форми */
}

.auth-form {
  background: white; /* Додайте фон для форми */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Залиште вищий z-index */
}
</style>
