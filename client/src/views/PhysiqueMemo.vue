<template>
  <div class="physiquememo">
    <main>
      <h1 id="theme">Physique</h1>
      <div class="main">
        <article>
          <h1>Memo</h1>
          <h3>{{message}}</h3>
          <button v-on:click="t1">Devinette 1</button>
          <button v-on:click="t2">Devinette 2</button>

          <div class="onglets" v-if="toggle1">
            <texte1></texte1>
          </div>
          <div class="onglets" v-if="toggle2">
            <texte2></texte2>
          </div>
          <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
          <button v-on:click="toggleModale" class="answer">Réponse</button>
        </article>
      </div>
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
      message: 'Quelques repères en physique',
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

<style scoped>
button {
  margin-right: 15px;
}

.onglets {
  margin-top: 30px;
  padding: 5px 30px 5px 30px;
  background-color: seashell;
  width: 60%;
}

.answer {
  background-color: rgb(78, 228, 78);
  color: #fff;
}
.answer:hover {
  background-color: darkgreen;
}
</style>
