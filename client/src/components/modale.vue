<template>
    <div class="bloc-modale" v-if="revele">
        <div v-on:click="toggleModale" class="overlay"></div>
        <div class="modale">
            <div v-on:click="toggleModale" class="btn-modale">X</div>
            <h5>devinette n°1 : {{devi1}}</h5>
            <h5>devinette n°2 : {{devi2}}</h5>
        </div>
    </div>
    <p class="danger">IL Faut d'abord faire tous les devinettes avant d'appuyer sur la réponse !!!!!</p>
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
    background: rgba(0,0,0,5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.modale {
    background: #F1F1F1;
    color:black;
    padding: 50px;
    position: fixed;
    bottom: 10%;
}
.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
    color:white;
    background-color: tomato;
}
.danger {
    align-items: center;
    color: red;
    size: 20px;
}
</style>
