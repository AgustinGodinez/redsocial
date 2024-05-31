<template>
    <div class="posts">
        <img src="img/wordmark.svg" alt="mazebook" class="logo">
        <CardComp class="mt-2 mx-auto single-post" parrafo="Bosque" picture="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :header="{name:'sebastiana maikol', picture:'https://randomuser.me/api/portraits/women/60.jpg'}"  :likes="true"/>
        <CardComp class="mt-2 mx-auto single-post" parrafo="Elefante" picture="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1600" :header="{name:'Susana Perez', picture:'https://randomuser.me/api/portraits/women/94.jpg'}" :likes="true"/>
    </div>
</template>

<script setup>
import CardComp from '@/components/CardComp.vue';



</script>

<style scoped>
.posts {
    min-height: 65vh;
    max-width: 895px;
    margin: auto;
}
.logo{
    max-width: 115px;
    padding: 0.2rem;
}

.single-post{
    max-width: 550px;
}
</style>