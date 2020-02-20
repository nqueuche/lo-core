<template>
<div> 

    {{ contractBeneficiary }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['beneficiary'],
  methodArgs: ''
}

console.log(args);
export default {
  name: 'Beneficiary',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractBeneficiary() {
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
