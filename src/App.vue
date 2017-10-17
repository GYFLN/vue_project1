<template>
  <div id="app">
   <nav-header></nav-header>

    <router-view/>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'

export default {
  name: 'app',
  data(){
  	return {
  	}
  },
  methods:{

  },
  components:{
    NavHeader
  
  }
}
</script>

<style lang="scss">
@import './style/_rest';
#app {
 
}
</style>
