<template>
  <div class="container mt-5">
    <main>
      <h1 id="theme">Finance</h1>
      <div class="main">
        <article>
          <h1>cryptomonnaies</h1>
          <h2>Top 3 des cryptomonnaies dominantes</h2>
          <ul>
          <li
            v-for="crypto in cryptomonnaies"
            :key="crypto"
          >
          {{crypto}}
          </li>
          </ul>
        </article>
      </div>
    </main>
  <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
export default {
  name: 'Crypto',
  data () {
    return {
      cryptomonnaies: []
    }
  },
  methods: {
    getCrytpo () {
      fetch('/api/v1/langagesinfo')
        .then(res => res.json())
        .then(data => { this.cryptomonnaies = data })
    }
  },

  created () {
    this.getCrypto()
  },

  components: {
    foot: Foot
  }
}
</script>
