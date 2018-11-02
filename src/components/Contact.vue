<template>
    <div class="contact">   
        <div class="left">
            <h1>{{ msg }}</h1>
            <p>
                Phone: 239-348-8804<br>
                Fax: 239-348-8836
            </p>

        </div>
        <div class="left">
            <h2>Address</h2>
            <address>
                <p>
                    6101 Pine Ridge Road<br>

                    Desk 32<br>
                    Naples, Florida, 34119<br>

                </p>
            </address>    
        </div>
        <div class="right" id="ContactRight">
            <h2>Email</h2>
            <p><a href="mailto:office@loutron.org">office@loutron.org</a></p>
            
        </div>
    </div>
</template>

<script>
    export default {
        beforeCreate: function() {
            document.body.className = 'contact';
        },
        name: 'Contact',
        data() {
            return{
                msg: "Contact"
            }
        }
    };
</script>

<style lang="scss" scoped>

    .contact{
            display: flex;
            //grid-template-columns: 1fr 1fr 1fr;

            @media (max-width:992px){
                flex-direction: column;
            }
    }

    .left, .right {
        margin:0;
        padding:30px;
        height:250px;
        flex: 1 1 auto;

        @media (max-width:992px){
            height: auto;
        }
    }

    .left p,
    .right p{
        padding-top:60px;

        @media (max-width:992px){
            padding-top: 0;
        }
    }

    .left{
    border-right:#FFFFFF solid 1px;

    @media (max-width:992px){
        border-right: none;
        border-bottom:#FFFFFF solid 1px;
    }
}


</style>