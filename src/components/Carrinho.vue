<template>
  <v-menu :offset-x="true">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" fab dark large v-bind="attrs" v-on="on">
        <v-badge :content="contador" :value="contador" color="green">
          <v-icon dark> mdi-cart </v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-show="contador < 1"> Nenhum item no carrinho </v-list-item>
      
      <v-list-item v-for="(produto, index) in produtosNoCarrinho" :key="index">
        <v-list-item-avatar>
          <v-img :src="produto.foto"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ produto.nome }}</v-list-item-title>
          <span v-if="produto.desconto">
            {{ produto.desconto | moeda }}
          </span>
          <span v-else>
            {{ produto.preco | moeda }}
          </span>  
        </v-list-item-content>
        <v-list-item-action>
          
          <v-btn color="red darken-4 white--text" @click="removerDoCarrinho(index)"><v-icon>mdi-delete</v-icon></v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider v-show="contador > 0"></v-divider>

     <v-list v-show="contador > 0">
      <v-list-item> Total: {{ valorTotal | moeda }} </v-list-item>
     </v-list>

  </v-menu>
</template>

<script>

export default {
  props: ["produtosNoCarrinho", "valorTotal"],
  data() {
    return {
        
    }
  },  
  computed: {
    contador: function () {
      return this.produtosNoCarrinho.length
    }
  },
  methods: {
    removerDoCarrinho(id) {
      this.$emit('removerDoCarrinho', id);
    }
  }
};
</script>

<style>
</style>