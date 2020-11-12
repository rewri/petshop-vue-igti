<template>
  <div>
    <v-btn block color="light-blue darken-4 white--text" @click="comprar(produto)">COMPRAR</v-btn>
  </div>
</template>

<script>
export default {
  props: ["produto"],
  data() {
    return {};
  },
  methods: {
    comprar(produto) {
        this.$emit('comprar', produto);
    }
  },
};
</script>

<style>
</style>