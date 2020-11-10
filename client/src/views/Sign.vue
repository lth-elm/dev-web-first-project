<template>
    <main>
            <article>
                <h1>Sign In/UP</h1>
            <form>
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input v-model="prenom" v-on:input="refaire" type="text" id="prenom" class="form-control" placeholder="Prénom">
                </div>

                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input v-model="nom" v-on:input="refaire" type="text" id="nom" class="form-control" placeholder="Nom">
                </div>

                <div class="form-group">
                    <label for="mail">Email</label>
                    <input v-model="mail" v-on:input="refaire" type="email" id="mail" class="form-control" placeholder="Mail">
                </div>
                <div class="form-group">
                    <label for="cle">Mot de passe</label>
                    <input type="password" v-on:input="refaire" id="cle" class="form-control" placeholder="Mot de Passe">
                </div>
                <div class="form-group">
                    <label for="txt">Description rapide</label>
                    <textarea v-model="txt" v-on:input="refaire" class="form-control" id="txt" placeholder="Description" maxlength="50"></textarea>
                </div>
            </form>
            <div v-if="infoSubmit" class="resultat">
            <h2>Résultat</h2>
            <div class="Tab">
                <p>Prénom : {{prenom}}</p>
                <p>Nom : {{nom}}</p>
                <p>Email : {{mail}}</p>
                <p>Description : {{txt}}</p>
            </div>
            </div>
            </article>
            <button v-if="CheckButtom" v-on:click="envoiForm" class="btn">Envoyer</button>
    </main>
</template>
<script>
export default {
  name: 'Sign',
  data () {
    return {
      prenom: '',
      nom: '',
      mail: '',
      txt: '',
      infoSubmit: false,
      CheckButtom: true
    }
  },
  methods: {
    envoiForm: function () {
      this.infoSubmit = true
      this.CheckButtom = false
    },
    refaire: function () {
      this.infoSubmit = false
      this.CheckButtom = true
    }
  }
}
</script>

<style scoped>
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
    margin: 3em 0 0 0;
    display: inline-block;
    width: 60%;
    height: 300px;
    font-size: larger;
    border: solid grey;
}
.Tab {
    padding: 0 0 0 1em;
    color:rgb(102, 102, 102);
}
</style>
