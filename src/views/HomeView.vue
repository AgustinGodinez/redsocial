<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img src="img/wordmark.svg" alt="Vue logo">
          <h2 class="text-center text-lg-start">Conectate con amigos y el resto del mundo usando mazebook</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <card-comp :btns="btnArray" class="card-comp mx-auto ">
          <template #default>
            <form>
              <div class="mb-3 mt-2">
                <input type="email" class="form-control" placeholder="Ingresa tu email">
              </div>
              <div class="mb-3 mt-2">
                <input type="password" class="form-control" placeholder="contraseña">
              </div>
            </form>
          </template>
          <template #footer>
            <hr>
            <button class="btn btn-success">Crear cuenta</button>
          </template>
        </card-comp>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardComp from '@/components/CardComp.vue';
import { reactive } from 'vue'

const btnArray = reactive([
  {
    txt: 'Iniciar sesion',
    class: 'btn-primary'
  },
  {
    txt: 'Olvidaste tu contraseña?',
    class: ''
  },
])

</script>

<style scoped>

h2{
  max-width: 770px;
  margin: auto;
  font-size: 1.8;
}
.home {
  max-width: 895px;
  margin: auto;
}

.img-cont {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 315px;
  margin: 1em auto 0 auto;
}

.card-comp {
  max-width: 398px;
  margin-top: 2.6em;
}

.btn-success{
  margin: auto;
  min-width: 195px;
}

@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }

  img {
    margin: 0;
    margin-top: 5.6em;
  }

  h2 {
    margin: 0;
    margin-top: -0.8em;
    margin-left: 0.8em;
  }
}
</style>
