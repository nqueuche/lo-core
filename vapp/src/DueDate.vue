<template>
<div> 

    {{ contractDueDate }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['dueDate'],
  methodArgs: ''
}

export default {
  name: 'DueDate',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractDueDate() {
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
