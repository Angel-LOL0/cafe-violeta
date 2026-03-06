<template>
  <div class="pt-16">
    <div class="bg-primary-600 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4 text-4xl font-bold">Contacto</h1>
        <p class="text-xl">Estamos aquí para atenderte</p>
      </div>
    </div>

    <div class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 md:grid-cols-2">
          <!-- Formulario de contacto -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">Envíanos un mensaje</h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="mb-2 block text-gray-700">Nombre</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  class="focus:ring-primary-600 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                />
              </div>
              <div>
                <label class="mb-2 block text-gray-700">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="focus:ring-primary-600 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                />
              </div>
              <div>
                <label class="mb-2 block text-gray-700">Mensaje</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  class="focus:ring-primary-600 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-primary-600 hover:bg-primary-700 rounded-lg px-8 py-3 text-white transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <!-- Información de contacto -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">Información de contacto</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <svg
                  class="text-primary-600 mt-1 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 class="font-semibold">Dirección</h3>
                  <p class="text-gray-600">Calle Principal #123, Ciudad</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <svg
                  class="text-primary-600 mt-1 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 class="font-semibold">Teléfono</h3>
                  <p class="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <svg
                  class="text-primary-600 mt-1 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-600">info@cafevioleta.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <svg
                  class="text-primary-600 mt-1 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="font-semibold">Horario</h3>
                  <p class="text-gray-600">Lun-Vie: 8am - 8pm</p>
                  <p class="text-gray-600">Sáb: 9am - 6pm</p>
                  <p class="text-gray-600">Dom: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <!-- Mapa -->
            <div class="mt-8">
              <div class="flex h-64 items-center justify-center rounded-lg bg-gray-200">
                <p class="text-gray-500">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Aquí iría la lógica para enviar el formulario
      alert("Mensaje enviado correctamente");
      this.form = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>
