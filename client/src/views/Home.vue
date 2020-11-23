<template>
  <div class="home">
    <main>
      <h1 id="theme">Home</h1>
      <div class="main">
          <article>
              <h1>Présentation projet</h1>
              <p style="color: red;"><em>>>> Faire une présentation du site et des différentes fonctionnalitées ajoutées.</em></p>
              <p>Vivamus sed libero nec mauris pulvinar facilisis ut non sem. Quisque mollis ullamcorper diam vel faucibus. Vestibulum sollicitudin facilisis feugiat. Nulla euismod sodales hendrerit. Donec quis orci arcu. Vivamus fermentum magna a erat ullamcorper dignissim pretium nunc aliquam. Aenean pulvinar condimentum enim a dignissim. Vivamus sit amet lectus at ante adipiscing adipiscing eget vitae felis. In at fringilla est. Cras id velit ut magna rutrum commodo. Etiam ut scelerisque purus. Duis risus elit, venenatis vel rutrum in, imperdiet in quam. Sed vestibulum, libero ut bibendum consectetur, eros ipsum ultrices nisl, in rutrum diam augue non tortor. Fusce nec massa et risus dapibus aliquam vitae nec diam.</p>
              <p>Phasellus ligula massa, congue ac vulputate non, dignissim at augue. Sed auctor fringilla quam quis porttitor. Praesent vitae dignissim magna. Pellentesque quis sem purus, vel elementum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas consectetur euismod urna. In hac habitasse platea dictumst. Quisque tincidunt porttitor vestibulum. Ut iaculis, lacus at molestie lacinia, ipsum mi adipiscing ligula, vel mollis sem risus eu lectus. Nunc elit quam, rutrum ut dignissim sit amet, egestas at sem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sagittis massa. Nulla facilisi. Cras id arcu lorem, et semper purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel enim mi, in lobortis sem. Vestibulum luctus elit eu libero ultrices id fermentum sem sagittis. Nulla imperdiet mauris sed sapien dignissim id aliquam est aliquam. Maecenas non odio ipsum, a elementum nisi. Mauris non erat eu erat placerat convallis. Mauris in pretium urna. Cras laoreet molestie odio, consequat consequat velit commodo eu. Integer vitae lectus ac nunc posuere pellentesque non at eros. Suspendisse non lectus lorem.</p>
          </article>
          <aside>
              <h1>Ressources utilisés</h1>
              <a href="https://coinmarketcap.com/fr/" target="_blank"><img src="https://seeklogo.com/images/C/coinmarketcap-logo-4378FC5465-seeklogo.com.png" width="50" height="50" alt="Logo CoinMarketCap" /><p>Coin Market Cap</p></a>
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
