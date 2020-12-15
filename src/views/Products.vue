<template>
  <div class="products">
    <ul>
      <li>
        <router-link :to="{ name: 'ProductDetail', params: { id: 1 } }"
          >product1</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ProductDetail', params: { id: 2 } }"
          >product2</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ProductDetail', params: { id: 3 } }"
          >product3</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style lang="scss" scoped></style>
