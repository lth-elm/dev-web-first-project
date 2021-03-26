<template>
  <div class="Crypto">
    <main>
      <h1 id="theme">Finance</h1>
      <div class="main">
        <article>
          <h1>Mes cryptomonnaies</h1>
          <br>
          <div class="web3demo">
            <h2>Web 3 Demo</h2>
            <br>
            <div>
              <button v-on:click="loadWeb3();">Connect to your Metamask if not already done</button>
            </div>
            <br>
            <br>
            <p>Status : <span id="status">Waiting for a Metamask connection...</span></p>
          </div>
        </article>
      </div>
    </main>
  <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
import Web3 from '../../node_modules/web3/dist/web3.min.js'
// const Web3 = require('web3')
export default {
  name: 'MyCrypto',

  methods: {
    loadWeb3: async function () {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        window.ethereum.enable()
      }
    },

    load: async function () {
      await this.loadWeb3()
      // window.address = await loadAddress()
      console.log('Loaded')
      this.updateStatus('Ready !')
    },

    updateStatus: function (status) {
      const connectionStatus = document.getElementById('status')
      console.log(connectionStatus.innerHTML)
      connectionStatus.innerHTML = status
      console.log(status)
    }
  },

  mounted () {
    this.load()
  },

  components: {
    foot: Foot
  }
}
</script>

<style scoped>
.web3demo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
