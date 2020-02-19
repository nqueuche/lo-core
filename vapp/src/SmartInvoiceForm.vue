<template>
    <form> 
        <input
        v-model="value"
        type="text"
        placeHolder="Value" />
        <button @click.prevent="onSubmit">Submit</button>
    </form>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SmartInvoiceForm',
    computed: {
        ...mapGetters('drizzle', ['drizzleInstance'])
    },
    methods: {
        onSubmit() {
            this.drizzleInstance
            .contracts['SmartInvoice']
            .methods['set']
            .cacheSend(this.value)
        }
    },
    data: () => ({
        value:''

    })

}
</script>