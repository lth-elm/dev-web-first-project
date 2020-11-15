<template>
    <div class="box">
    <p class="Texte">{{ tache }}</p>
    <div v-on:click="suppression" class="suppr"></div>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['tache', 'suppression']
}
</script>

<style scoped>
.box {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
}

.Texte{
  display: flex;
  justify-content: center;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  background-color: white;
  font-size: 200%;
  text-align: center;
  width: 60%;
}

.suppr{
  display: flex;
  background-color: rgb(51, 216, 51);
  width: 54px;
  margin: 32px;
  border-radius: 1em;
}

.suppr:hover{
  background-color: red;
}
</style>
