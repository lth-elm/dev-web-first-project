<template>
  <div class="home">
    <main>
      <h1 id="theme">Home</h1>
      <div class="main">
          <article>
              <h1>Bienvenue sur QuickScience !</h1>
              <p>Le site est composé de 5 modules :</p>
              <h2>Home</h2>
              <p>Page d'accueil où sont listées des informations concernant le site ainsi que toutes les ressources utilisés.</p>
              <h2>Informatique</h2>
              <p><router-link :to="{ name: 'BrainstormInfo' }">Brainstorming</router-link> est une page où l'utilisateur peut écrire et ainsi lister tous les langages informatique qu'il connait. 4 langages sont déja pré-remplis puis 3 autres sont récupérés depuis le serveur. Il est également possible de supprimer un langage de la liste si une erreur a eu lieu ou autres raison.</p>
              <p>La page <router-link :to="{ name: 'Csharp' }">C#</router-link> est quant à elle une page éducative afin d'en apprendre plus sur ce langage. Une navigation sur le côté permet de se rendre directement au sujet qui nous intéresse.</p>
              <h2>Finance</h2>
              <p>Sur la page <router-link :to="{ name: 'MarcheFinancier' }">marché financier</router-link> sont répertoriés les cours actuels du NYSE (bourse New-Yorkaise) accompagné d'un descriptif obtenu avec l'API de <i>Marketstack</i></p>
              <p>De même, la page <router-link :to="{ name: 'Crypto' }">cryptomonnaie</router-link> liste le top 10 des cryptomonnaies actuels selon <i>CoinMarketCap</i> ainsi que leurs prix. <strong>Attention, cette page n'est accessible qu'une fois connecté</strong>. Pour cela vous pouvez renseigner <strong>"crypto-master"</strong> comme identifiant et <strong>"53CR37!"</strong> comme mot de passe. Une fois connecté vous pourrez accéder à ces données et ajouter les cryptos que vous souhaitez en favoris.</p>
              <h2>Physique</h2>
              <p><router-link :to="{ name: 'PhysiqueMemo' }">Mémo</router-link> contient 2 petites devinettes sous la forme d'un "qui est-ce ?" dont la réponse est accessible.</p>
              <p><router-link :to="{ name: 'SecretPhysique' }">Secret Physique</router-link> est une page qui ne contient rien à première vue. Toutefois, un secret physique sera révélé si l'utilisateur effectue une manipulation précise...</p>
              <h2>Sign in/out</h2>
              <p>Pour <router-link :to="{ name: 'Sign' }">se connecter</router-link>, entrer l'identifiant et le mot de passe par défaut à savoir : <strong>"crypto-master"</strong> et <strong>"53CR37!"</strong> afin d'avoir notamment accès à la page "Cryptomonnaie". La page <router-link :to="{ name: 'SignUp' }">d'enregistrement</router-link> ne permet malhereusement pas encore d'enregistrer ses identifiants.</p>
              <p><i>* Veuillez rafraichir la page une fois vous être connecté ou déconnecté.</i></p>
          </article>
          <aside>
              <h1>Ressources utilisés</h1>
              <a href="https://coinmarketcap.com/fr/" target="_blank"><img src="https://seeklogo.com/images/C/coinmarketcap-logo-4378FC5465-seeklogo.com.png" width="50" height="50" alt="Logo CoinMarketCap" /><p>Coin Market Cap</p></a>
              <a href="https://marketstack.com/" target="_blank"><img src="https://cms-assets.tutsplus.com/uploads/users/769/posts/35539/preview_image/marketstack.jpg" width="60" height="50" alt="Logo Marketstack" /><p>Marketstack</p></a>
              <a href="https://esilv.stormier.ninja/" target="_blank"><img src="https://esilv.stormier.ninja/assets/img/ninja@mini.png" width="50" height="50" alt="Logo de Stormier Ninja" /><p>Developpement Web</p></a>
              <a href="https://openclassrooms.com/fr/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png" width="50" height="50" alt="Logo OpenClassrooms" /><p>OpenClassroom</p></a>
          </aside>
      </div>
    </main>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
export default {
  name: 'Home',
  components: {
    foot: Foot
  }
}
</script>
