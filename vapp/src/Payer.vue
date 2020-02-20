<template>
<div> 

    {{ contractPayer }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['payer'],
  methodArgs: ''
}

console.log(args);
export default {
  name: 'Payer',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractPayer() {
    return this.getContractData({
      contract: args.contractName,
      method: args.method,
    })

  },


  },
  created() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', args);
  }
  
}
</script>

<style></style>
