<template>
    <nav class="navbar navbar-expand-lg navcolor">
        <div class="container justify-content-evenly">
            <router-link to="/" class="nav-link" :class="{ active: activePath.home }" aria-current="page">
                <span class="material-icons-round">home
                </span>
            </router-link>
            <router-link to="/about" class="nav-link" :class="{ active: activePath.about }">
                <span class="material-icons-round">info
                </span>
            </router-link>
            <router-link to="/posts" class="nav-link" :class="{ active: activePath.posts }">
                <span class="material-icons-round">fact_check
                </span>
            </router-link>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import {useRoute} from 'vue-router'
const route=useRoute();


const activePath = computed(() => {
    if(route.path ==='/'){
        return {
            home: true,
            about: false,
            posts: true,
        }    
    }else if(route.path==='/about'){
        return {
            home: false,
            about: true,
            posts: false,
        }  
    }else if(route.path==='/posts'){
        return {
            home: false,
            about: false,
            posts: true,
        }  
    }else{
        return{
            home:false,
            about:false,
            posts:false
        }
    }
})

</script>

<style scoped>
.material-icons-round {
    color: rgb(255, 255, 255);
    font-size: 1.4em;
    background-color: rgba(218, 218, 218, 0.158);
    padding: 0.3em;
    border-radius: 50%;
    margin: 0.1em;
}

.active .material-icons-round {
    color: white;
    background-color: rgba(133, 128, 128, 0.158);
    border: 1px solid rgba(248, 244, 244, 0.342);
}

.navcolor {
    background-color: var(--bg-color);
}
</style>