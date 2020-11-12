<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6">
        <router-link :to="{ name: 'lista-de-produtos' }">Voltar para a loja</router-link>
      </v-col>
      <v-col class="text-right" cols="12" xs="12" sm="12" md="6">
        <Carrinho :produtosNoCarrinho="produtosNoCarrinho" :valorTotal="valorTotal" v-on:removerDoCarrinho="removidoDoCarrinho"></Carrinho>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-card class="mx-auto mb-5" outlined>
            <v-img
              :src="produto.foto"
              max-height="250px"
              class="white--text align-end"
              :alt="produto.nome"
            ></v-img>
          <div class="pa-2">
            <v-card-title>{{ produto.nome }}</v-card-title>
            <v-card-text class="text--primary text-right">
              <span :class="produto.desconto ? 'desconto' : ''">
                {{ produto.preco | moeda }}
              </span>              
              <span class="ml-5" :v-if="produto.desconto">
                {{ produto.desconto | moeda }}
              </span>
            </v-card-text>
            <v-card-text class="text--primary" justify>
              {{ produto.descricao }}
            </v-card-text>
            <BotaoComprar :produto="produto" v-on:adicionarAoCarrinho="adicionadoAoCarrinho"></BotaoComprar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import BotaoComprar from '@/components/BotaoComprar'
import Carrinho from '@/components/Carrinho'

export default {
  data() {
    return {
      produto: "",
      produtosNoCarrinho: [],
      valorTotal: 0
    };
  },
  async created() {
    this.produto = await this.buscarProdutos(this.$route.params.id);
    document.title = `Petshop | ${this.produto.nome}`;
  },
  methods: {
    async buscarProdutos(id) {
      const { data } = await axios.get(`http://localhost:3000/produtos/${id}`);
      return data;
    },
    adicionadoAoCarrinho(produto) {
      this.produtosNoCarrinho.push(produto);
      this.valorTotal = this.produtosNoCarrinho.reduce((acc, produto) =>  acc + (produto.desconto || produto.preco), 0);
    },
    removidoDoCarrinho(id) {
      this.produtosNoCarrinho.splice(id, 1);
      this.valorTotal = this.produtosNoCarrinho.reduce((acc, produto) =>  acc + (produto.desconto || produto.preco), 0);
    }
  },
  components: {
    BotaoComprar,
    Carrinho
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}
</style>