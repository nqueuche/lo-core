<template>
<div> 

    {{ contractAmount }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['amount'],
  methodArgs: ''
}

console.log(args);
export default {
  name: 'Amount',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractAmount() {
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
