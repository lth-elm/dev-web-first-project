<template>
    <div class="card my-2 item-todo">
    <p>{{ tache }}</p>
    <div v-on:click="suppression" class="btn-supr btn btn-danger">X</div>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['tache', 'suppression']
}
</script>

<style scoped>
.item-todo {
    position: relative;
    padding: 20px 60px 20px 30px;
    font-size: 20px;
    height: 80px;
}
.btn-supr {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
