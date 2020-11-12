<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6">
        <h1 class="ml-3">Lista de Produtos</h1>
      </v-col>
      <v-col class="text-left" cols="12" xs="12" sm="12" md="6">
        <Carrinho :produtosNoCarrinho="produtosNoCarrinho" :valorTotal="valorTotal" v-on:removerDoCarrinho="removidoDoCarrinho"></Carrinho>
      </v-col>
      <v-col
        v-for="(produto, index) in produtos"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
      >
        <v-card class="mx-auto mb-5" outlined>
          <v-img
            :src="produto.foto"
            :title="produto.nome"
            height="250px"
            class="white--text align-end"
            :alt="produto.nome"
            @click="verDetalhe(produto)"
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
            <v-card-text class="text--primary descricao">
              {{ produto.descricao }}
            </v-card-text>
            <BotaoComprar :produto="produto" v-on:comprar="adicionarAoCarrinho"></BotaoComprar>
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
      produtos: [],
      produtosNoCarrinho: [],
      valorTotal: 0
    };
  },
  async created() {
    document.title = "Petshop";
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos() {
      const { data } = await axios.get("http://localhost:3000/produtos");
      return data;
    },
    verDetalhe(produto) {
      this.$router.push(`/loja/${produto.id}`);
    },
    adicionarAoCarrinho(produto) {
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

<style style="scss">
.descricao {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desconto {
  text-decoration: line-through;
  color: #aaaaaa !important;
}
.v-image {
  cursor: pointer;
}
.v-badge__badge {
  font-size: 16px !important;
}
</style>