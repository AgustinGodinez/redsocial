<template>
  <div class="card">
    <CardHeader v-if="header" :header="header"/>
    <div class="card-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="parrafo" class="card-text">{{ parrafo }}</p>
      <img v-if="picture" :src="picture" alt="post img">
      <ListGroup v-if="likes"/>
      <slot name="default">

      </slot>
      <div class="d-grid gap-3">
        <button v-for="btn in btns" :key="btn.txt" class="btn" :class="btn.class">{{ btn.txt }}</button>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardHeader from './CardHeader.vue';
import ListGroup from './ListGroup.vue';

const props = defineProps(['title', 'parrafo', 'btns', 'picture', 'header','likes'])


</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

.card-header{
  background-color: transparent;
  padding: 0.5rem 1rem;
  padding-bottom: none;
}

.boton {
  background-color: var(--bg-color);
  color: #ffff;
}

.card img {
  max-width: 100%;
}

.more-btn {
  border-radius: 50%;
  padding: 0.5em;
  margin: 0.3e, m;
}

.avatar-img{
  min-width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.card-header-title{
  line-height: 0.7;
}

.card-header-subTitle{
  font-size: 0.8;
}

@media(min-width: 576px){
  .card-header .col-8{
    margin-left: 16px;
  }
}
</style>