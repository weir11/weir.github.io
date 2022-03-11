<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="categery in blog.categories" :key="categery">
        {{categery}}
      </li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/'+id">改写内容</router-link>
  </div>
</template>

<script>
export default {
name:"single-blog",
data () {
    return {
        id:this.$route.params.id,
        blog:{}
    }
},
created () {
    this.$http.get('https://blogs-8342-default-rtdb.europe-west1.firebasedatabase.app/posts/'+this.id+".json")
    .then(function(data){
      console.log(data)
       // this.blog=data.body
        return data.json()
    })
    .then(function(data){
      this.blog=data
    })
},
methods: {
    deleteSingleBlog(){
      this.$http.delete('https://blogs-8342-default-rtdb.europe-west1.firebasedatabase.app/posts/'+this.id+".json")
      .then(response=>{
        this.$router.push({path:'/'})
      })
    }
}
}
</script>

<style>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>