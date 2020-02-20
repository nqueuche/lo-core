<template>
    <form> 
        <input
        v-model="amount"
        type="text"
        placeHolder="Amount" />
          <input
        v-model="dueDate"
        type="text"
        placeHolder="Due Date" />
           <input
        v-model="assetToken"
        type="text"
        placeHolder="Asset Token" />
           <input
        v-model="beneficiary"
        type="text"
        placeHolder="Beneficiary" />
           <input
        v-model="payer"
        type="text"
        placeHolder="Payer" />
           <input
        v-model="referenceHash"
        type="text"
        placeHolder="Reference Hash" />

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
            .cacheSend(
                this.amount, 
                this.dueDate, 
                this.assetToken,
                this.beneficiary,
                this.payer,
                this.referenceHash)
        }
    },
    data: () => ({
        amount:'',
        dueDate: '',
        assetToken: '',
        beneficiary: '',
        payer: '',
        referenceHash: ''

    })

}
</script>