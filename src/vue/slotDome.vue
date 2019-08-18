<template>
    <div class="slotDome">
        <div class="head">head
            <slot name="head"></slot>
        </div>
        <slot></slot>
        <div class="foot">foot
            <slot name="foot"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'slotDome',
        components: {

        },
        data(){
            return{

            }
        }
    }
</script>
