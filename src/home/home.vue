<template>
    <div>
        <div class="home">
            <div class="homeCon">
                <p>{{con}}</p>
                <p>{{conH1}}</p>
                <p>{{conH2}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                con:'知识就是力量。',
                conH1: '人，最大的敌人是自己。',
                conH2:'只有坚持才能获得最后的成功。'
            }
        }
    }
</script>
<style scoped>
    .home {
        padding-top: 8%;
        width: 100%;
        height: 70%;
        display: table;

    }
    .homeCon {
        font-size: 64px;
        display: table-cell;
        vertical-align: middle;
        font-weight: 700;
        background: linear-gradient(to right, red, yellow, green);
        -webkit-background-clip: text;
        color: transparent;
    }
</style>
