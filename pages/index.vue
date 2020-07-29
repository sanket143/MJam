<template>
  <div class="container">
    <div>
      <div class="search-wrapper">
        <feather class="search icon" type="search" />
        <input class="search">
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

.search {
  @apply p-1;
}
</style>
