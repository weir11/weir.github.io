import ShowBlog from './components/ShowBlog.vue'
import Addblog from './components/Addblog.vue'
import Singlebolg from './components/Singlebolg.vue'
import EditBlog from './components/EditBlog.vue'
export default [
    {path:"/",component:ShowBlog},
    {path:"/Add",component:Addblog},
    {path:"/blog/:id",component:Singlebolg},
    {path:"/edit/:id",component:EditBlog}
]