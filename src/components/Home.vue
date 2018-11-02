<template>
    <div class="home">
        <h1>{{ head }}</h1>
        <p>Loutron LLC has been providing Southwest Florida with premier acute kidney dialysis services since 2008. </p>
        <p>Locally owned and operated, we are the human side of medicine. Naples area hospitals turn to us to be their expert acute dialysis service provider. </p>
        <p>Since 2006, our founding nephrologist, Dr. James Reid Sterrett, has been recognized in GulfShore Life Magazine as one of the top nephrologists in Southwest Florida.</p>
        
    </div>
</template>

<script>
    export default {
        beforeCreate: function() {
            document.body.className = 'home';
        },
        name: 'Home',
        data() {
            return{
                head: "\"Restoring life through cleansing with water.\"",
                }
        }
    };
</script>

<style lang="scss" scoped>
    h1{
        font-style: italic;
    }

</style>
