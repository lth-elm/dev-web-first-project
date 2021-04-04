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
            <button v-if="!address" v-on:click="load();">Connection à Metamask</button>
            <p><b><i>Statut</i></b> &nbsp; : <span id="status">Connection requise...</span></p>
            <br>
            <div v-if="address">
                <p>Adresse : {{ address }}</p>
                <p>Chain Id : {{ chainId }}</p>
                <p>Dernier bloc : {{ lastBlock }}</p>
                <br>
                <div class="toutDoucement">
                  <h3>Acheter un token de : "Tout Doucement"</h3>
                  <input v-model="amount" type="text" placeholder="> 0.1 Ether">
                  <button v-on:click="buyToutDoucement();" class="acheter">Acheter</button>
                </div>
                <br>
                <br>
                <h3>Contrat : &nbsp; {{ SFACcontractName }} ({{ SFACsymbol }})</h3>
                <p>Supply totale : {{ SFACtotalSupply }} </p>
                <div class="token">
                  <button v-on:click="claimToken();" class="tokenButton">Réclamer un token</button>
                  <input v-model="SFACtokenID" type="text" placeholder="token Id">
                  <button v-on:click="getSFACMetadatas();" class="metaButton">Obtenir les metadatas</button>
                </div>
            </div>
            <div v-if="SFACname" class="songForACityMetadatas">
              <img :src="SFACimage" alt="Song For A City token image" class="tokenImage"/>
              <div class="tokenDescription">
                <p><b><i>{{ SFACname }}</i></b></p>
                <p>{{ SFACdescription }}</p>
              </div>
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
import { abiSFAC } from '../abi/AbiSFAC'
import { abiTOUDOU } from '../abi/AbiTOUDOU'
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
      lastBlock: undefined,
      SFACcontract: undefined,
      SFACcontractName: undefined,
      SFACsymbol: undefined,
      SFACtotalSupply: undefined,
      SFACtokenID: undefined,
      SFACtokenURI: undefined,
      SFACdescription: undefined,
      SFACimage: undefined,
      SFACname: undefined,
      TOUDOUcontract: undefined,
      amount: undefined
    }
  },

  methods: {
    load: async function () {
      await this.loadWeb3()
      window.contract = await this.loadSongForACity()
      this.SFACcontract = window.contract
      this.getSFACDatas()
      window.contract = await this.loadToutDoucement()
      this.TOUDOUcontract = window.contract
    },

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
    },

    loadSongForACity: async function () {
      return await new this.web3.eth.Contract(abiSFAC, '0x004a84209a0021b8ff182ffd8bb874c53f65e90e')
    },

    loadToutDoucement: async function () {
      return await new this.web3.eth.Contract(abiTOUDOU, '0x89150a0325ecc830a2304a44de98551051b4f466')
    },

    getSFACDatas: function () {
      this.SFACcontract.methods.name().call().then(e => {
        console.log(e)
        this.SFACcontractName = e
      })

      this.SFACcontract.methods.symbol().call().then(e => {
        console.log(e)
        this.SFACsymbol = e
      })

      this.SFACcontract.methods.totalSupply().call().then(e => {
        console.log(e)
        this.SFACtotalSupply = e
      })
    },

    getSFACMetadatas: async function () {
      await this.SFACcontract.methods.tokenURI(this.SFACtokenID).call().then(e => {
        console.log(e)
        this.SFACtokenURI = e
      })

      fetch('/api/v1/tokenuri', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uri: this.SFACtokenURI
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log('SFAC Metadatas', res)
          this.SFACdescription = res.metadatas.properties.description.description
          this.SFACimage = res.metadatas.properties.image.description
          this.SFACname = res.metadatas.properties.name.description
        })
        .catch(err => { throw err })
    },

    claimToken: function () {
      this.SFACcontract.methods.claimAToken().send({ from: this.address })
    },

    buyToutDoucement: function () {
      const wei = this.amount * 1000000000000000000 // conversion ether -> wei
      console.log(this.amount, ' ether -> ', wei, ' wei')
      this.TOUDOUcontract.methods.buyAToken().send({ from: this.address, value: wei })
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

input {
  width: 25%;
  text-align: center;
  height: 30px;
  border-radius: 15px;
}

.toutDoucement {
  text-align: center;
}

.acheter {
  background-color: rgb(194, 6, 0);
  color: #fff;
  margin-left: 15px;
}
.acheter:hover {
  background-color: rgb(129, 6, 0);
}

h3 {
  text-align: center;
}

.tokenButton {
  margin-right: 25px;
}

.metaButton {
  margin-left: 25px;
}

.token {
  display: inline-block;
  text-align: center;
}

.songForACityMetadatas {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  text-align: center;
  margin-top: 35px;
  /* padding: 30px; */
  background-color: rgb(255, 224, 183);
  border: solid 0.5px #888888;
  /* border-radius: 10px; */
  /* box-shadow: 5px 5px #9b9b9b; */
}

.tokenImage {
  width: 30%;
  height: 30%;
}

.tokenDescription {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
