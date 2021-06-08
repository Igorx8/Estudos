<template>
<div id="app">

</div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'App',
    components: {

    },

    async created(){
        const { data } = await axios.get("https://covidtracking.com/api/us/daily");
        console.log(data);
    }
}
</script>


<style>
</style>
