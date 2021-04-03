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
                <br>
                <p>Nom du contrat : {{ contractName }} ({{ symbol }})</p>
                <p>Supply totale : {{ totalSupply }}</p>
                <button v-on:click="claimToken();">Réclamer un token</button>
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
      lastBlock: undefined,
      contract: undefined,
      contractName: undefined,
      symbol: undefined,
      totalSupply: undefined
    }
  },

  methods: {
    load: async function () {
      await this.loadWeb3()
      window.contract = await this.loadSongForCity()
      this.contract = window.contract

      this.contract.methods.name().call().then(e => {
        console.log(e)
        this.contractName = e
      })

      this.contract.methods.symbol().call().then(e => {
        console.log(e)
        this.symbol = e
      })

      this.contract.methods.totalSupply().call().then(e => {
        console.log(e)
        this.totalSupply = e
      })
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

    claimToken: function () {
      this.contract.methods.claimAToken().call()
    },

    loadSongForCity: async function () {
      return await new this.web3.eth.Contract([
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'approved',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              indexed: false,
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'ApprovalForAll',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'baseURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'setApprovalForAll',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'tokenCounter',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256'
            }
          ],
          name: 'tokenOfOwnerByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'claimAToken',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ], '0x004a84209a0021b8ff182ffd8bb874c53f65e90e')
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
