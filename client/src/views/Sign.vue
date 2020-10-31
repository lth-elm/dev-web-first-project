<template>
    <div class="container mt-5">
        <main>
            <div class="main">
                <article>
                    <h1>Sign In/UP</h1>
                <form>
                    <div class="form-group">
                        <label for="prenom">Prenom</label>
                        <input v-model="prenom" type="text" id="prenom" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input v-model="nom" type="text" id="nom" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="mail">Email</label>
                        <input v-model="mail" type="email" id="mail" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="cle">mot de passe</label>
                        <input type="password" id="cle" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txt">description rapide</label>
                        <textarea v-model="txt" class="form-control" id="txt"></textarea>
                    </div>
                </form>
                <h2>Résultat</h2>
                <div class="card p-3">
                    <p>Prénom : {{prenom}}</p>
                    <p>Nom : {{nom}}</p>
                    <p>Email : {{mail}}</p>
                    <p>description : {{txt}}</p>
                </div>
                </article>
            </div>
        </main>
    <foot></foot>
    </div>
</template>
<script>
export default {
  name: 'Sign',
  data () {
    return {
      prenom: '',
      nom: '',
      mail: '',
      txt: ''
    }
  }
}
</script>
