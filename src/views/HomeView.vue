<template>
  <div class="from-primary-900 to-primary-700 relative bg-linear-to-r text-white">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="animate-fade-in mb-4 text-4xl font-bold md:text-6xl">
          Bienvenido a Café Violeta
        </h1>
        <p class="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
          Descubre el arte del café en un ambiente único y acogedor
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <router-link
            to="/menu"
            class="text-primary-700 rounded-lg bg-white px-8 py-3 font-semibold transition hover:bg-gray-100"
          >
            Ver Menú
          </router-link>
          <button
            class="hover:text-primary-700 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white"
          >
            Conócenos
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">Nuestra Historia</h2>
        <div class="bg-primary-600 mx-auto h-1 w-24"></div>
      </div>
    </div>
  </div>
  <div class="grid items-center gap-12 md:grid-cols-2">
    <div>
      <img
        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Cafetería"
        class="rounded-lg shadow-xl"
      />
    </div>
    <div>
      <h3 class="text-primary-600 mb-4 text-2xl font-semibold">Más que café, una experiencia</h3>
      <p class="mb-4 text-gray-600">
        Desde 2010, en Café Violeta nos dedicamos a ofrecer la mejor experiencia de café en un
        ambiente acogedor y único. Seleccionamos los mejores granos de café de origen sostenible
        para crear bebidas excepcionales.
      </p>
      <p class="mb-6 text-gray-600">
        Nuestro equipo de baristas profesionales está comprometido con la calidad y la innovación,
        creando nuevas formas de disfrutar el café todos los días.
      </p>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <div class="text-primary-600 text-3xl font-bold">10+</div>
          <div class="text-gray-600">Años de experiencia</div>
        </div>
        <div>
          <div class="text-primary-600 text-3xl font-bold">15+</div>
          <div class="text-gray-600">Variedades de café</div>
        </div>
        <div>
          <div class="text-primary-600 text-3xl font-bold">5k+</div>
          <div class="text-gray-600">Clientes felices</div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">Nuestro Menú</h2>
        <div class="bg-primary-600 mx-auto mb-4 h-1 w-24"></div>
        <p class="text-gray-600">Descubre nuestras especialidades</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
        >
          <img :src="item.image" :alt="item.name" class="h-48 w-full object-cover" />
          <div class="p-4">
            <h3 class="mb-1 text-lg font-semibold">{{ item.name }}</h3>
            <p class="mb-2 text-sm text-gray-600">{{ item.description }}</p>
            <p class="text-primary-600 font-bold">${{ item.price }}</p>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <router-link
          to="/menu"
          class="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-8 py-3 text-white transition"
        >
          Ver Menú Completo
        </router-link>
      </div>
    </div>
  </div>
  <div class="bg-primary-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">Lo que dicen nuestros clientes</h2>
        <div class="bg-primary-600 mx-auto h-1 w-24"></div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="rounded-lg bg-white p-6 shadow-lg"
        >
          <div class="mb-4 flex items-center">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="mr-4 h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <div class="flex text-yellow-400">
                <span v-for="n in 5" :key="n">★</span>
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">Galería</h2>
        <div class="bg-primary-600 mx-auto h-1 w-24"></div>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="group relative cursor-pointer overflow-hidden rounded-lg"
          @click="openModal(index)"
        >
          <img
            :src="image"
            :alt="`Gallery ${index + 1}`"
            class="h-64 w-full transform object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            class="bg-primary-600 absolute inset-0 opacity-0 transition group-hover:opacity-20"
          ></div>
        </div>
      </div>

      <!-- Modal -->
      <div
        v-if="modalOpen"
        class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
        @click="modalOpen = false"
      >
        <button class="absolute top-4 right-4 text-4xl text-white">&times;</button>
        <img
          :src="galleryImages[selectedImage]"
          alt="Gallery"
          class="max-h-screen max-w-full p-4"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Espresso",
          description: "Café puro y concentrado",
          price: "3.50",
          image:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          name: "Cappuccino",
          description: "Espresso con leche y espuma",
          price: "4.50",
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          name: "Latte Violeta",
          description: "Nuestra especialidad con lavanda",
          price: "5.50",
          image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          name: "Mocha",
          description: "Café con chocolate y crema",
          price: "5.00",
          image:
            "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
      modalOpen: false,
      selectedImage: 0,
      galleryImages: [
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      ],
      testimonials: [
        {
          id: 1,
          name: "María García",
          text: "El mejor café de la ciudad. El ambiente es acogedor y el personal es muy amable. Definitivamente mi lugar favorito.",
          avatar:
            "https://images.unsplash.com/photo-1494790108777-466d3eb05f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        },
        {
          id: 2,
          name: "Carlos Rodríguez",
          text: "Increíble variedad de cafés de especialidad. El Latte Violeta es único y delicioso. Muy recomendado.",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        },
        {
          id: 3,
          name: "Ana Martínez",
          text: "Un lugar perfecto para trabajar o relajarse. El wifi es rápido y el café excelente. Volveré seguro.",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        },
      ],
    };
  },
  methods: {
    openModal(index: number) {
      this.selectedImage = index;
      this.modalOpen = true;
    },
  },
};
</script>
<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
