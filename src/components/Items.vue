<template>
  <div class="main">
    <div class="head">
      <h1>Käpalised</h1>
      <h2>Nimekiri</h2>
    </div>
    <div class="item" v-for="item in items" v-bind:key="item.id">
        <h3>{{ item.name }}</h3>
        <h4>{{ item.name_en }}</h4>
        <h4>{{ item.name_et }}</h4>
        <h4>{{ item.name_ru }}</h4>
        <div class="img">
          <a v-for="jpg in item.jpgs" v-bind:key="jpg.id" target='_blank' :href="item.name + '/' + jpg.href"><img class="margin2" width='45%' :src="item.name + '/' + jpg.href"></a>
        </div>
        <template v-for="text in item.texts">
          <h5 v-bind:key="text.header">{{ text.header }}</h5>
          <p v-for="content in text.content" v-bind:key="content.id" v-html="content.p"></p>
        </template>
        <div class="grid right">
          <a v-for="svg in item.svgs" v-bind:key="svg.id" target='_blank' :href="item.name + '/SVG/' + svg.href"><img class="icon" width="32" src="../assets/svg.png"/>{{ svg.name }}</a>
          <a v-for="pdf in item.pdfs" v-bind:key="pdf.id" target='_blank' :href="item.name + '/PDF/' + pdf.href"><img class="icon" width="32" src="../assets/pdf.png"/>{{ pdf.name }}</a>
        </div>
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
    text-align: justify;
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
    margin: 1.18%;
    vertical-align: top;
    padding: 1.18%;
    background-color: #EBEBEB;
  }
  h5 {
    background-color: #F4F4F4;
    padding: 0.66%;
    margin: auto;
  }
  p {
    background-color: #FAFAFA;
    padding: 0.66%;
    font-style: italic;
    font-family: serif;
  }
  .icon {
    vertical-align: middle;
    margin: 0.4%;
  }
</style>
