<template>
    <div class="card-header">
        <div class="row">
            <div class="col-2 col-sm-1">
                <img class="avatar-img" :src="header.picture" alt="avatar de sebastian">
            </div>
            <div class="col-8 col-sm-9">
                <h4 class="card-heder-title m-0">
                    <router-link to="/profile">
                        {{ header.name }}
                    </router-link>
                </h4>
                <small class="text-muted card-header-subTitle">Hace 2 minutos</small>
            </div>
            <div class="col-1">
                <button class="btn d-flex align-items-center more-btn"><span class="material-icons-outlined">
                        more_horiz
                    </span></button>
            </div>
        </div>
    </div>

</template>

<script setup>

const props = defineProps(['header'])

</script>

<style scoped>
.card {
    border: none;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

.card-header {
    background-color: transparent;
    padding: 0.5rem 1rem;
    padding-bottom: none;
}


.card img {
    max-width: 100%;
}

.more-btn {
    border-radius: 50%;
    padding: 0.5em;
    margin: 0.3e, m;
}

.avatar-img {
    min-width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.card-header-title {
    line-height: 0.7;
}

.card-header-subTitle {
    font-size: 0.8;
}

@media(min-width: 576px) {
    .card-header .col-8 {
        margin-left: 16px;
    }
}
</style>