<template>
  <div class="container">
    <div>
      <div class="search-wrapper">
        <feather class="search-icon mr-1" type="search" />
        <input
          class="search"
          placeholder="Search song, artist or album"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.search-wrapper {
  @apply flex flex-row items-center ml-2;
}

.search-icon {
  @apply text-gray-500 w-4;
}

.search {
  @apply p-1 text-sm outline-none text-gray-700;
  width: 400px;
  font-family: 'Ubuntu', sans-serif;
}
</style>
