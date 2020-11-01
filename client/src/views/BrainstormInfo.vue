<template>
  <div class="container mt-5">
    <main>
      <h1 id="theme">Informatique</h1>
      <div class="main">
        <article>
          <h1>BrainStorming</h1>
          <h2>Bienvenue dans cette session plus fun de brainstorming des languages Informatiques !!!</h2>
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
        </article>
      </div>
    </main>
  <foot></foot>
  </div>
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
      if (!this.formData.tache) {
        return
      }
      this.tableauTaches.push(this.formData.tache)
      this.formData.tache = ''
    },

    suppression: function (e) {
      // console.log(e.target.parentNode.id)
      this.tableauTaches.splice(e.target.parentNode.id, 1)
    },

    getLangages () {
      fetch('/api/v1/langagesinfo')
        .then(res => res.json())
        .then(data => { this.tableauTaches = data })
    }
  },
  components: {
    item: Item,
    foot: Foot
  }
}
</script>
