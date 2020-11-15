<template>
    <div class="bloc-modale" v-if="revele">
        <div v-on:click="toggleModale" class="overlay"></div>
        <div class="modale">
            <div v-on:click="toggleModale" class="btn-modale">X</div>
            <h5>devinette n°1 : {{devi1}}</h5>
            <h5>devinette n°2 : {{devi2}}</h5>
        </div>
    </div>
    <p class="danger"><i><b>Attention</b></i> : la réponse affichera les résultats des deux devinettes !</p>
</template>

<script>
export default {
  name: 'Modale',
  props: ['revele', 'toggleModale'],
  data () {
    return {
      devi1: 'Nikola Tesla',
      devi2: 'Carl Friedrich Gauss'

    }
  }
}
</script>

<style scoped>
.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.modale {
    background: #F1F1F1;
    color:rgb(0, 0, 0);
    padding: 50px;
    position: fixed;
    bottom: 10%;
}
.btn-modale {
    user-select: none;
    position: absolute;
    padding: 5px;
    top: 10px;
    right: 10px;
    color:white;
    background-color: tomato;
}
.btn-modale:hover {
    background-color: red;
}
.danger {
    align-items: center;
    color: red;
    size: 20px;
}
</style>
