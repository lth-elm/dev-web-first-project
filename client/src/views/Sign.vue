<template>
    <main>
      <article>
          <h1>Sign In</h1>
          <p class="sign"><i class="fas fa-user-plus"></i> &nbsp; <router-link :to="{ name: 'SignUp' }">Sign Up</router-link></p>
      <form  v-on:submit.prevent="envoiForm">
          <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" v-on:input="refaire" type="username" id="username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
              <label for="cle">Mot de passe</label>
              <input v-model="password" type="password" v-on:input="refaire" id="cle" class="form-control" placeholder="Mot de Passe">
          </div>
      <button v-if="CheckButtom" type="submit" class="btn">Envoyer</button>
      </form>
      <div v-if="!isLoggedIn && infoSubmit" class="non-connecte">
          <p><i class="fas fa-times-circle"></i> Identifiant ou mot de passe invalide, veuillez réessayer.</p>
      </div>
      <div v-if="isLoggedIn && infoSubmit" class="connecte">
          <p><i class="fas fa-check-circle"></i> Connecté en tant que {{ username }}.</p>
      </div>
      </article>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sign',

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  data () {
    return {
      username: undefined,
      password: undefined,
      infoSubmit: false,
      CheckButtom: true
    }
  },

  methods: {
    envoiForm () {
      this.infoSubmit = true
      this.CheckButtom = false

      const username = this.username
      const password = this.password
      const payload = { username, password }

      this.$store.dispatch('login', payload)
    },

    refaire: function () {
      this.infoSubmit = false
      this.CheckButtom = true
    }
  }
}
</script>

<style scoped>
h1 {
    margin-top: 70px;
}
.sign {
    color: #265ac9;
}
.sign a {
    color: #265ac9;
}
.form-group {
    display:inline-block;
    width: 60%;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
.form-group >label{
    margin-bottom: .5rem;
    font-size: larger;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
.connecte {
    color: #265ac9;
}
.non-connecte {
    color: red;
}
form {
  display: flex;
  flex-direction: column;
}
button {
  width: 100px;
  text-align: center;
  vertical-align: middle;
  padding: .375rem .75rem;
  line-height: 1.5;
  border-radius: .25rem;
  user-select: none;
  background-color: #265ac9;
  color: #fff;
}
button:hover {
  background-color: #083699;
}
</style>
