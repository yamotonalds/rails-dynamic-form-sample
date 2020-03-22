import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#dynamic-item',
    data: function () {
      return {
        items: []
      }
    },
    mounted: function () {
      console.log(this.$el.dataset.items)
      this.items = JSON.parse(this.$el.dataset.items)
      this.addItem()
    },
    methods: {
      addItem: function () {
        this.items.push({ id: '', name: '', amount: '', _destroy: false })
      },
      deleteItem: function (index) {
        this.items[index]._destroy = true
      },
      display: function (index) {
        return this.items[index]._destroy ? 'none' : 'block'
      }
    }
  })
})
