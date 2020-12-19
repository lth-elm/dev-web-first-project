<template>
    <main>
      <article>
          <h1>Sign Up</h1>
          <p class="sign"><i class="fas fa-sign-in-alt"></i> &nbsp; <router-link :to="{ name: 'Sign' }">Sign In</router-link></p>
      <form  v-on:submit.prevent="envoiForm">
          <div class="form-group">
              <label for="prenom">Prénom</label>
              <input v-model="prenom" v-on:input="refaire" type="text" id="prenom" class="form-control" placeholder="Prénom">
          </div>

          <div class="form-group">
              <label for="nom">Nom</label>
              <input v-model="nom" v-on:input="refaire" type="text" id="nom" class="form-control" placeholder="Nom">
          </div>

          <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" v-on:input="refaire" type="username" id="username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
              <label for="cle">Mot de passe</label>
              <input v-model="password" type="password" v-on:input="refaire" id="cle" class="form-control" placeholder="Mot de Passe">
          </div>
      <button v-if="CheckButtom" type="submit" class="btn">Créer</button>
      </form>
      <div v-if="infoSubmit" class="resultat">
          <h2>Résultat</h2>
          <div class="Tab">
              <p>Prénom : {{ prenom }}</p>
              <p>Nom : {{ nom }}</p>
              <p>Username : {{ username }}</p>
          </div>
      </div>
      </article>
    </main>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      prenom: '',
      nom: '',
      username: '',
      password: '',
      infoSubmit: false,
      CheckButtom: true
    }
  },
  methods: {
    envoiForm: function () {
      this.infoSubmit = true
      this.CheckButtom = false

      const username = this.username
      const password = this.password

      fetch('/api/v1/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(res => res.json())
        .then(({ success, token, message }) => {
          localStorage.setItem('token', token)
        })
        .catch(error => { this.error = error })
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
.resultat {
    padding: 20px;
    margin: 1em 0 0 0;
    display: inline-block;
    width: 60%;
    height: 200px;
    font-size: larger;
    border: solid #12df4f;
    border-radius: 5px;
}
.Tab {
    padding: 0 0 0 1em;
    color:#666666;
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
