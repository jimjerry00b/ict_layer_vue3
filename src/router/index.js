import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Users from '@/views/Users.vue'
import CreateUser from '@/views/Create-user.vue'
import Products from '@/views/Products.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'

 const routes = [

    {
        path:'/',
        name: 'Public',
        component: DefaultLayout,
        redirect: '/',
        children:[
            {        
                path: '/',
                name: 'Home',
                component : Home
            },
            {        
                path: '/about',
                name: 'About',
                component : About
            },  
            {        
                path: '/users',
                name: 'Users',
                component : Users
            },  
            {        
                path: '/user/create',
                name: 'Add User',
                component : CreateUser
            },  
            {        
                path: '/products',
                name: 'Products',
                component : Products
            },  
        ]
    },
    {        
        path: '/login',
        name: 'Login',
        component : Login
    },
            
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router