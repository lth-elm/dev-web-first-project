<template>
  <div class="physiquememo">
    <main>
      <h1 id="theme">Physique</h1>
      <div class="main">
        <article>
          <h1>Memo</h1>
          <h3>{{message}}</h3>
          <div class="btnDevinette" v-on:click="t1">Devinette 1</div>
          <div class="btnDevinette" v-on:click="t2">Devinette 2</div>

          <div class="onglets" v-if="toggle1">
            <texte1></texte1>
          </div>
          <div class="onglets" v-if="toggle2">
            <texte2></texte2>
          </div>
          <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
          <div v-on:click="toggleModale" class="btn">Réponse</div>
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
.btnDevinette {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  user-select: none;
  background-color: #265ac9;
  color: #fff;
  margin-right: 15px;
}

.btnDevinette:hover {
  background-color: #4779e7;
}

.onglets {
  margin-top: 30px;
  padding: 5px 30px 5px 30px;
  background-color: seashell;
  width: 60%;
}

.btn{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  user-select: none;
  background-color: rgb(78, 228, 78);
  color: #fff;
}
.btn:hover{
  background-color: darkgreen;
}
</style>
