<template>
    <div class="services">
        <h1>{{ head }}</h1>
        <h2>{{ subhead }}</h2>
        <p>{{p1}}</p>
        <ul>
            <li>CVVH (Continuous Veno-Venous Hemofiltration)</li>
            <li>CVVHD (Continuous Veno-Venous Hemodialysis)</li>
            <li>CVVHDF (Continuous Veno-Venous Hemodiafiltration)</li>
            <li>CVVHFD (Continuous Veno-Venous High-flux Dialysis)</li>
        </ul>
        <p>These therapies are also grouped under the general term CRRT. (Continuous Renal Replacement Therapies)</p>
        <p>Intermittent techniques may also be employed. Used as part of chronic dialysis too, such techniques are applied over a defined time period.</p>
        <p>When is acute dialysis applied?</p>
        <p>Acute dialysis is used when renal functions have been severely impaired as a consequence of a serious illness such as circulatory collapse or sepsis. This applies mainly to intensive care patients. Such patients suffer from excess body water and an accumulation of uremic toxins. If acute kidney failure can no longer be treated with medication, extracorporeal treatment is needed. Acute kidney failure is usually reversible, thus necessitating acute dialysis only over a defined time period.</p>
        <p>Who is affected by acute kidney failure?</p>
        <p>About 250 cases of acute kidney failure occur per million individuals annually. Up to 25% of the patients at intensive care units and up to 4% of hospital patients are affected. In most cases, acute kidney failure is the consequence of a serious underlying illness. In recent years, the incidence of acute kidney failures has been observed to rise by more than 10% annually, especially among people aged over 60. The reason for this is the increasingly complex surgeries performed on elderly patients who usually suffer from cardiological secondary disorders. Conventional medication often proves inadequate for treating such patients' acute kidney failure. These patients are then being dependent on extracorporeal blood treatments like hemodialysis, hemofiltration, or hemodiafiltration.</p>
    </div>
</template>

<script>
    export default {
        beforeCreate: function() {
            document.body.className = 'services';
        },
        name: 'Services',
        data() {
            return{
                head: "Our Service",
                subhead: "Acute Dialysis",
                p1: "Acute dialysis encompasses all extracorporeal techniques used to treat acute kidney failure. Employed most frequently are continuous techniques, preferably lasting 24 hours in order to ensure a gentle removal of excess body water and uremic toxins. The following techniques are available:",
            }
        }
    };
</script>

<style lang="scss" scoped>
        .content{
            display: flex;
            flex-direction: column;
        }
   
</style>