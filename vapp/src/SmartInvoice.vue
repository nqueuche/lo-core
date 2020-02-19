<template>
<div> <!-- <div v-if="isDrizzleInitialized"> -->
    <drizzle-contract-form
      contractName="SmartInvoice"
      method="amount"
      label="Value"
      :placeholder="['accounts']"
    />
    <drizzle-contract contractName="SmartInvoice" method="dueDate" label="Value" />
    <drizzle-contract contractName="SmartInvoice" method="assetToken" label="Value" />
    <drizzle-contract contractName="SmartInvoice" method="beneficiary" label="Value" />
    <drizzle-contract contractName="SmartInvoice" method="payer" label="Value" />
    <drizzle-contract contractName="SmartInvoice" method="referenceHash" label="Value" />
    {{ contractData }}
  <!-- </div> -->

  <!-- <div v-else>Loading...</div> --></div>
 
</template>

<script>
import { mapGetters } from 'vuex'

const args = {
  contractName: "SmartInvoice",
  method: 'amount',
  methodArgs: ''
}

export default {
  name: 'SmartInvoice',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
    // ...mapGetters('drizzle', ['isDrizzleInitialized']),
  contractData() {
    return this.getContractData({
      contract: args.contractName,
      method: args.method
    })
  }

  },
  created() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', args);
  }
}
</script>

<style></style>
