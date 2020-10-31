<template>
  <div class="container mt-5">
    <main>
      <h1 id="theme">Physique</h1>
      <div class="main">
        <article>
          <h1>Memo</h1>
          <h3>{{message}}</h3>
          <div class="btn btn-outline-primary mr-2" v-on:click="t1">Devinette 1</div>
          <div class= "btn btn-outline-primary" v-on:click="t2">Devinette 2</div>

          <div class="onglets card mb-5" v-if="toggle1">
            <texte1 class="p-5"></texte1>
          </div>
          <div class="onglets card mb-5" v-if="toggle2">
            <texte2 class="p-5"></texte2>
          </div>
          <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
          <div v-on:click="toggleModale" class="btn btn-success">Réponse</div>
        </article>
      </div>
      <br><p>OBJECTIF AFFICHER L'IMAGE ICI</p>
    </main>
  <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
import Texte1 from '../components/Texte1.vue'
import Texte2 from '../components/Texte2.vue'
import Modale from '../components/modale.vue'
export default {
  name: 'PhysiqueMemo',
  data () {
    return {
      message: 'Quelque repère en physique',
      toggle1: true,
      toggle2: false,
      revele: false
    }
  },
  methods: {
    t1: function () {
      this.toggle1 = true
      this.toggle2 = false
    },
    t2: function () {
      this.toggle1 = false
      this.toggle2 = true
    },
    toggleModale: function () {
      this.revele = !this.revele
    }
  },
  components: {
    texte1: Texte1,
    texte2: Texte2,
    modale: Modale,
    foot: Foot
  }
}
</script>
