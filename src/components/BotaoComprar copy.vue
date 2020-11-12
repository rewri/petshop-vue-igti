<template>
  <div>
    <v-btn block color="light-blue darken-4 white--text" @click="adicionarAoCarrinho(produto)">COMPRAR</v-btn>
  </div>
</template>

<script>
export default {
  props: ["produto"],
  data() {
    return {};
  },
  methods: {
    adicionarAoCarrinho(produto) {
        this.$emit('adicionarAoCarrinho', produto);
    }
  },
};
</script>

<style>
</style>