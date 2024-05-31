<template>
    <ul class="list-group">
        <li class="list-group-item text-muted">A 10 personas le gusta esto</li>
        <li class="list-group-item">
            <div class="row">
                <div class="col d-grid">
                    <button class="btn d-flex justify-content-center align-items-center gap-2 px-0"><span class="material-icons-round">
                            thumb_up
                        </span>Me gusta
                    </button>
                </div>
                <div class="col d-grid"> 
                    <button class="btn d-flex justify-content-center align-items-center gap-2 px-0"><span class="material-icons-round">
                            question_answer
                        </span>Comentario
                    </button>
                </div>
            </div>
        </li>
    </ul>

</template>

<script setup>

</script>

<style>
.btn:hover{
    color: #5044c9;
}
</style>