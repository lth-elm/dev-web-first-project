<template>
    <div class="secret-physique">
        <h1 id="theme">Secret Physique</h1><p>.</p>
        <main>
            <div class="Trooll">
                <p>Il n'y a</p>
                <p>rien</p>
                <p>sur cette page</p>
                <p>...</p>
                <p v-on:click="display" class="maybe">Ou peut être que si</p>
                <p>/!\   /!\   /!\</p>
            </div>
        <br>
        <p v-if="show" class="textecache"><i>{{Textecache}}</i></p>
        </main>
        <foot></foot>
    </div>
</template>
<script>
import Foot from '../components/foot.vue'
export default {
  name: 'SecretPhysique',
  data () {
    return {
      Textecache: 'Le « lamphone » est une ingénieuse technique d’espionnage : elle consiste à observer les infimes variations de luminosité d’une ampoule causées par les vibrations sonores, et, grâce à un traitement informatique, de reconstituer les conversations (ou les autres sons) à l’origine de ces variations.',
      show: false
    }
  },
  methods: {
    display: function () {
      this.show = true
    }
  },
  components: {
    foot: Foot
  }
}
</script>

<style scoped>
.secret-physique {
  display: inline;
  text-align: center;
}
.Trooll >p {
  margin: 20px;
  padding: 0;
  font-size: 200%;
}
.maybe {
  cursor: default;
}
.textecache {
  color :#ff1596;
  font-size: 150%;
}
</style>
