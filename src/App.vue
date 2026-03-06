<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isOpen = ref(false);
const year = new Date().getFullYear();
</script>

<template>
  <div id="app" class="flex min-h-screen flex-col">
    <nav class="fixed z-10 w-full bg-white shadow-lg">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <svg class="text-primary-600 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8zm0-4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4z"
                />
              </svg>
              <span class="text-primary-600 text-xl font-bold">Café Violeta</span>
            </router-link>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden items-center space-x-8 md:flex">
            <router-link to="/" class="hover:text-primary-600 text-gray-700 transition"
              >Inicio</router-link
            >
            <router-link to="/menu" class="hover:text-primary-600 text-gray-700 transition"
              >Menú</router-link
            >
            <router-link to="/contact" class="hover:text-primary-600 text-gray-700 transition"
              >Contacto</router-link
            >
            <button
              class="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 text-white transition"
            >
              Reservar
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button @click="isOpen = !isOpen" class="text-gray-700">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!isOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <router-link to="/" class="hover:text-primary-600 block px-3 py-2 text-gray-700"
            >Inicio</router-link
          >
          <router-link to="/menu" class="hover:text-primary-600 block px-3 py-2 text-gray-700"
            >Menú</router-link
          >
          <router-link to="/contact" class="hover:text-primary-600 block px-3 py-2 text-gray-700"
            >Contacto</router-link
          >
          <button
            class="bg-primary-600 hover:bg-primary-700 w-full rounded-lg px-3 py-2 text-left text-white"
          >
            Reservar
          </button>
        </div>
      </div>
    </nav>
    <main class="grow">
      <RouterView />
    </main>
    <footer class="bg-gray-900 py-12 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-4">
          <div>
            <h3 class="mb-4 flex items-center text-xl font-bold">
              <svg class="text-primary-500 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8zm0-4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4z"
                />
              </svg>
              Café Violeta
            </h3>
            <p class="text-gray-400">
              Tu lugar favorito para disfrutar del mejor café en un ambiente único.
            </p>
          </div>

          <div>
            <h4 class="mb-4 font-semibold">Horario</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 8am - 8pm</li>
              <li>Sábados: 9am - 6pm</li>
              <li>Domingos: 10am - 4pm</li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 font-semibold">Contacto</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Calle Principal #123</li>
              <li>Ciudad, CP 12345</li>
              <li>Tel: (123) 456-7890</li>
              <li>Email: info@cafevioleta.com</li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 font-semibold">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-primary-500 text-gray-400 transition">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
              <a href="#" class="hover:text-primary-500 text-gray-400 transition">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {{ year }} Café Violeta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
}
</style>
