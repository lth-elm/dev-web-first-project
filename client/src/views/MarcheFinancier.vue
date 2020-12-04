<template>
  <div class="marche-financier">
    <main>
      <h1 id="theme">Marché Financier</h1>
      <!-- <h3>{{info}}</h3> -->
      <div class="main">
        <article>
          <h2>Ici vous allez voir que quelques actions New yorkaises (NYSE,NASDAQ)</h2>
          <div class="structure">
              <div v-bind:key="index" v-for="(currencies,index) in info">
                <div class="description">
                  <p>{{tabtext[index]}}</p>
                </div>
                <div class="currency">
                  <p>Entreprise : {{tableau[index]}}</p>
                  <p>Symbol : {{currencies.symbol}}</p>
                  <p>Fermeture : {{currencies.close}}</p>
                  <p>Plus Haut : {{currencies.high}}</p>
                  <p>Plus bas : {{currencies.low}}</p>
                  <p>Volume : {{currencies.volume}}</p>
                  <br>
                  <p>{{currencies.date}}</p>
                </div>
              </div>
          </div>
          <br>
          <br>
          <div class="details">
            <p>"L'API vient de MarketStack : "</p>
            <p>"Your subscription: Free Plan"</p>
            <p>"Il se peut que l'API affiche une erreur 403"</p>
            <p>Access Restricted- Your current Subscription Plan does not support HTTPS Encryption !!!!</p>
            <p>Donc il faut patienter environs 30sec et réactualiser</p>
          </div>
        </article>
      </div>
    </main>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
import axios from 'axios'
export default {
  name: 'MarcheFinancier',
  data () {
    return {
      tableau: ['APPLE', 'TESLA', 'Microsoft', 'American Airline Gp', 'Axon Inc', 'Mattel Inc', 'Opthea Ltd', 'Oxford Immunotec', 'Papa John s Intl'],
      info: null,
      tabtext: ['Apple [ˈæpəl] est une entreprise multinationale américaine qui crée et commercialise des produits électroniques grand public, des ordinateurs personnels et des logiciels.',
        'Tesla, Inc., initialement appelé Tesla Motors jusqu au 1ᵉʳ février 2017, est un constructeur automobile de voitures électriques dont le siège social se situe à Palo Alto, en Californie, dans la Silicon Valley, aux États-Unis.',
        'Microsoft Corporation [ˈmaɪkɹəˌsɔft ˌkɔɹpəˈɹeɪʃən] est une multinationale informatique et micro-informatique américaine, fondée en 1975 par Bill Gates et Paul Allen.',
        'American Airlines est une compagnie aérienne américaine. Elle exploite des vols intérieurs et internationaux depuis ses nombreux hubs basés aux États-Unis. En 2018, c est la plus grande compagnie aérienne au monde.',
        'Axon Enterprise, Inc. est une société spécialisée dans les appareils de sécurité individuels non létaux. Elle est particulièrement connue car son précédent nom, Taser International, est confondu avec les pistolets à impulsion électrique, dont elle est un fabricant reconnu.',
        'Mattel Inc. est une société américaine spécialisée dans les jouets et jeux, fondée en 1945 par Matt Matson et Elliot Handler. Elle est le second fabricant mondial derrière Lego.',
        'Opthea Limited is a public biotechnology company listed on the ASX and based in Melbourne, Australia. Opthea is developing OPT-302, a novel biologic inhibitor of VEGF-C and VEGF-D, for use in combination with VEGF-A inhibitors for the treatment of wet age-related macular degeneration and diabetic macular edema.',
        'Oxford Immunotec Global PLC is a global, high-growth diagnostics company. We bring energy and invention to a world in need of diagnostic truth. We are uniquely placed as the only company in the world offering regulated ELISPOT assays for T cell measurement, with approval around the globe.',
        'Papa John s Pizza est le troisième plus gros restaurateur de pizzas des États-Unis après Pizza Hut et Domino s Pizza. Le siège de la compagnie est basé à Louisville. Le slogan de la société signifie De meilleurs ingrédients, de meilleures pizza.']
    }
  },
  mounted () {
    axios.get('http://api.marketstack.com/v1/eod/latest?access_key=490d5c6512308165c3ff386acb13ac1b&symbols=AAPL,TSLA,MSFT,AAL,AAXN,MAT,OPT,OXFD,PZZA')
      .then(response => (this.info = response.data.data))
  },
  components: {
    foot: Foot
  }
}
</script>

<style>
.structure {
  width: 80%;
  margin-left: 10%;
}
.currency {
  display: inline-block;
  text-align: center;
  width: 45%;
  margin: 1em;
  padding: 1em;
  border: solid black
}
.currency >p {
  padding: 0rem;
  margin: 0rem;
}
.description {
  text-align: left;
  margin-top: 5%;
  width: 35%;
  float:left;
  font-size: 80%;
}
.details {
  border: solid rgb(128, 49, 49);
  width: 50%;
}
.details >p{
  margin: 2px;
  padding: 0;
}
</style>
