<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center space-x-4 mb-4 md:mb-0">
          <div class="text-2xl font-bold tracking-tight">
            <span class="text-blue-500">POWER</span><span class="text-white">HOUSE</span>
          </div>
          <div class="hidden md:block text-sm text-gray-300">
            Industrial LED Lighting & Solutions
          </div>
        </div>
        
        <nav class="w-full md:w-auto">
          <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <NuxtLink to="/" class="hover:text-blue-400 transition-colors font-medium">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products" class="hover:text-blue-400 transition-colors font-medium">
                Products
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oem" class="hover:text-blue-400 transition-colors font-medium">
                OEM & Custom
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-blue-400 transition-colors font-medium">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:text-blue-400 transition-colors font-medium">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-blue-400 transition-colors font-medium">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
        
        <div class="mt-4 md:mt-0">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.router-link-active {
  color: #60a5fa;
  font-weight: 600;
}
</style>