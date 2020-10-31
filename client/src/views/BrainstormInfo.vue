<template>
<div class="container mt-5">
<h1>BrainStroming des languages Informatiques</h1>
        <h3>Bienvenue dans cette session plus fun !!!!!</h3>
        <form>
            <div class="form-group">
                <label for="action">Action</label>
                <input v-model="formData.tache" type="text" id="action" class="form-control">
            </div>
            <button v-on:click.prevent="creationItem" class="btn btn-primary mb-3">Donner un language informatique</button>
        </form>
    <ul>
    <li v-bind:key="index" v-for="(tache,index) in tableauTaches">
     <item v-bind:id="index" :tache="tache" :suppression="suppression"></item>
    </li>
    </ul>
</div>
<foot></foot>
</template>

<script>
import Item from '../components/Item.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'BrainstormInfo',
  data () {
    return {
      formData: {
        tache: ''
      },
      tableauTaches: ['JavaScript', 'Vue', 'Python', 'React']
    }
  },
  methods: {
    creationItem: function () {
      this.tableauTaches.push(this.formData.tache)
      this.formData.tache = ''
    },
    suppression: function (e) {
      // console.log(e.target.parentNode.id)
      this.tableauTaches.splice(e.target.parentNode.id, 1)
    }
  },
  components: {
    item: Item,
    foot: Foot
  }
}
</script>

<style scoped>
h1 {
  margin-top: 100px!important;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
