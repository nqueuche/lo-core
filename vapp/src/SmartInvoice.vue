<template>
  <div v-if="isDrizzleInitialized">
      <drizzle-contract
        contractName="SmartInvoice"
        method="amount"
        label="Value"
      />  
       <drizzle-contract
        contractName="SmartInvoice"
        method="dueDate"
        label="Value"
      />  
       <drizzle-contract
        contractName="SmartInvoice"
        method="assetToken"
        label="Value"
      />  
       <drizzle-contract
        contractName="SmartInvoice"
        method="beneficiary"
        label="Value"
      />  
       <drizzle-contract
        contractName="SmartInvoice"
        method="payer"
        label="Value"
      />  
       <drizzle-contract
        contractName="SmartInvoice"
        method="referenceHash"
        label="Value"
      />  


  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SmartInvoice',
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['isDrizzleInitialized']),

    accounts() {
      return [this.activeAccount]
    },

    placeholders() {
      return ['To Address', 'Amount to Send']
    }
  }
}
</script>

<style></style>
