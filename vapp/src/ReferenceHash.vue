<template>
<div> 

    {{ contractReferenceHash }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['referenceHash'],
  methodArgs: ''
}

export default {
  name: 'ReferenceHash',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractReferenceHash() {
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
