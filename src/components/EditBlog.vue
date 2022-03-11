<template>
  <div class="addblog">
      <h2>修改博客内容</h2>
      <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required/>

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkbox">
          <label>美食</label>
          <input type="checkbox" value="美食" v-model="blog.categories">
          <label>体育</label>
          <input type="checkbox" value="体育" v-model="blog.categories">
          <label>旅游</label>
          <input type="checkbox" value="旅游" v-model="blog.categories">
          <label>学习</label>
          <input type="checkbox" value="学习" v-model="blog.categories">
          <label>军事</label>
          <input type="checkbox" value="军事" v-model="blog.categories">
        </div>
        <label>作者</label>
       <select v-model="blog.author">
         <option v-for="author in authors" :key="author">
         {{author}}
         </option>
       </select>
       <button v-on:click.prevent="post">修改博客</button>
      </form>

      <div v-if="submmited">
        <h3>你的博客发布成功！！！</h3>
      </div>
      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容</p>
        <p>{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
          <li v-for="categery in blog.categories" :key="categery.id">{{categery}}</li>
        </ul>
        <p>作者:{{blog.author}}</p>
      </div>

  </div>
</template>

<script>
export default {
name:'add-blog',
data () {
    return{
        //数据id
    id:this.$route.params.id,
    blog:{
        
    },
    authors:['小马','峰哥','小曹'],
    submmited:false
    }
    
    
},
methods: {
    fetchData(){
      this.$http.get('https://blogs-8342-default-rtdb.europe-west1.firebasedatabase.app/posts/'+this.id+".json")
      .then(response=>{
          this.blog=response.body
          console.log(this.id)
      })
    },

    post:function(){
    this.$http.put('https://blogs-8342-default-rtdb.europe-west1.firebasedatabase.app/posts'+this.id+".json",this.blog)
    .then(function(data){
      console.log(data);
      //
      this.submmited=true;
    });
    }
    },
    created(){
        this.fetchData()
    }
}
</script>

<style scoped>
#add-blog *{
   box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
.label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkbox label{
  display: inline-block;
  margin-top: 0;
}
#checkbox input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: pink;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border:  1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}

</style>