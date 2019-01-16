<template>
    <div>
        <h1>今日头条</h1>
        <p>步惊云</p>
        <ul>
            <li v-for="(li,index) in data" :key="index">
                <template v-if="li.image.length==1">
                    <span class="sp1">{{li.title}}</span>
                    <img :src="li.image[0]" class="im">
                </template>
                <template v-else>
                    <div>{{li.title}}</div>
                    <img :src="li.image[0]" class="im">
                    <img :src="li.image[1]" class="im">
                    <img :src="li.image[2]" class="im">
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch("getdata")
    },
    computed:{
        data(){
            return this.$store.state.list
        }
    }
}
</script>

<style>
    .sp1{
        vertical-align: top;
    }
    .sp1+img{
        vertical-align: top;
    }
    .im{
        margin: 5px;
    }
</style>
