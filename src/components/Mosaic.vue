<template>
  <div class="main">
    <div class="head">
      <h1>Käpalised</h1>
      <h2>Mosaiik</h2>
    </div>
    <div class="masonry">
      <router-link v-for="item in items" v-bind:key="item.id" :to="'/item/' + item.name"><img :src="item.name + '/thumb@2x.jpg'" class="thumb" /></router-link>
    </div>
  </div>
</template>

<script>
import json from '../json/items.json'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
export default {
  name: 'orchid-collection',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      msg: 'Käpaliste kollektsioon',
      items: json
    }
  },
  computed: {
    catshashes () {
      let array = []
      json.forEach(element => {
        let cats = element.cats.split(' ')
        cats.forEach(cat => {
          array.push(cat)
        })
      })
      return array.filter((item, index) => array.indexOf(item) === index)
    }
  },
  methods: {
    extension (url) {
      // Remove everything to the last slash in URL
      url = url.substr(1 + url.lastIndexOf('/'))
      // Break URL at ? and take first part (file name, extension)
      url = url.split('?')[0]
      // Sometimes URL doesn't have ? but #, so we should aslo do the same for #
      url = url.split('#')[0]
      // Now we have only extension
      url = url.substr(0, url.lastIndexOf('.'))

      return url
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-size: 150%;
  }
  .main {
    max-width: 1280px;
    text-align: center;
    margin: 0 auto;
  }
  .img {
      text-align: center;
  }
  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
  .item {
    padding-bottom: 100px;
  }
  .grid {
    display: grid;
  }
  .right {
    text-align: right;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .margin2 {
    margin: 2%;
    vertical-align: top;
  }
  .icon {
    vertical-align: middle;
    margin: 0.4%;
  }
  .thumb {
    background-color: #EBEBEB;
    width: 280px;
    margin: 0.66%;
    padding: 0.66%;
  }
  .masonry {
    display: block;
    text-align: center;
  }
</style>
