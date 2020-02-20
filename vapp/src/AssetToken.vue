<template>
<div> 

    {{ contractAssetToken }}

 </div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: ['assetToken'],
  methodArgs: ''
}

console.log(args);
export default {
  name: 'AssetToken',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
  
  contractAssetToken() {
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
