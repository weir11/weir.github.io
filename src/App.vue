<template>
  <div id="app">
  <!-- <addblog></addblog>-->
 <!--<show-blog></show-blog>-->
 <blog-header></blog-header>
 <router-view></router-view>
  </div>
</template>

<script>
import Addblog from './components/Addblog.vue'
import ShowBlog from './components/ShowBlog.vue'
import BlogHeader from './components/BlogHeader.vue'

export default {
  name: 'App',
  components: {
    Addblog,ShowBlog,BlogHeader
  }
}
</script>

<style>

</style>
