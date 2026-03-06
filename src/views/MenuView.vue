<template>
  <div class="pt-16">
    <div class="bg-primary-600 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4 text-4xl font-bold">Nuestro Menú</h1>
        <p class="text-xl">Descubre todas nuestras delicias</p>
      </div>
    </div>

    <div class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Categorías de menú -->
        <div class="mb-12">
          <div class="flex justify-center space-x-4">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'rounded-full px-6 py-2 transition',
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Grid de productos -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <img :src="item.image" :alt="item.name" class="h-48 w-full object-cover" />
            <div class="p-6">
              <div class="mb-2 flex items-start justify-between">
                <h3 class="text-xl font-semibold">{{ item.name }}</h3>
                <span class="text-primary-600 font-bold">${{ item.price }}</span>
              </div>
              <p class="mb-4 text-gray-600">{{ item.description }}</p>
              <button
                class="bg-primary-600 hover:bg-primary-700 w-full rounded-lg py-2 text-white transition"
              >
                Agregar al pedido
              </button>
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
      selectedCategory: "Todos",
      categories: ["Todos", "Cafés", "Tés", "Postres", "Desayunos"],
      menuItems: [
        {
          id: 1,
          category: "Cafés",
          name: "Espresso",
          description: "Café puro y concentrado",
          price: "3.50",
          image:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          category: "Cafés",
          name: "Cappuccino",
          description: "Espresso con leche y espuma",
          price: "4.50",
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          category: "Cafés",
          name: "Latte Violeta",
          description: "Nuestra especialidad con lavanda",
          price: "5.50",
          image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          category: "Postres",
          name: "Cheesecake",
          description: "Pastel de queso con frutos rojos",
          price: "6.50",
          image:
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 5,
          category: "Postres",
          name: "Brownie",
          description: "Brownie de chocolate con nueces",
          price: "4.50",
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 6,
          category: "Tés",
          name: "Té Verde",
          description: "Té verde japonés de alta calidad",
          price: "3.50",
          image:
            "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === "Todos") {
        return this.menuItems;
      }
      return this.menuItems.filter((item) => item.category === this.selectedCategory);
    },
  },
};
</script>
