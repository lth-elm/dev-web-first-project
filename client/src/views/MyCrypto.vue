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
            <button v-if="!address" v-on:click="loadWeb3();">Connect to Metamask</button>
            <p><b><i>Statut</i></b> &nbsp; : <span id="status">Connection requise...</span></p>
            <br>
            <div v-if="address" class="connecte">
                <p>Adresse : {{ address }}</p>
                <p>Chain Id : {{ chainId }}</p>
                <p>Dernier bloc : {{ lastBlock }}</p>
            </div>
            <div v-if="noweb3">
                <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank"><img src="https://www.french-ico.com/wp-content/uploads/2020/11/metamask-2-1.png" alt="Logo Metamask" /></a>
            </div>
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

  data () {
    return {
      noweb3: false,
      web3: undefined,
      address: undefined,
      chainId: undefined,
      lastBlock: undefined
    }
  },

  methods: {
    loadWeb3: async function () {
      if (window.ethereum) {
        this.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()

        this.web3.eth.getAccounts()
          .then(e => {
            console.log(e[0])
            this.address = e[0]
          })

        this.web3.eth.getChainId()
          .then(e => {
            console.log(e)
            this.chainId = e
          })

        this.web3.eth.getBlockNumber()
          .then(e => {
            console.log(e)
            this.lastBlock = e
          })

        this.updateStatus('&nbsp; Connecté &nbsp; <i class="fas fa-check-circle"></i>', true)
      } else {
        this.updateStatus('&nbsp; Metamask non detecté &nbsp; <i class="fas fa-times-circle"></i>', false)
        this.noweb3 = true
      }
    },

    // load: async function () {
    //   this.loadWeb3()
    // },

    updateStatus: function (status, connected) {
      const connectionStatus = document.getElementById('status')
      console.log(connectionStatus.innerHTML)
      connectionStatus.innerHTML = status
      if (connected) {
        connectionStatus.style.color = 'green'
      } else {
        connectionStatus.style.color = 'red'
      }
      console.log(status)
    }
  },

  mounted () {
    this.loadWeb3()
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
