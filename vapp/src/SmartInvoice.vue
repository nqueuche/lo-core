<template>
  <div v-if="isDrizzleInitialized">
 <drizzle-contract-form
        contractName="SmartInvoice"
        method="set"
        :placeholders="['Value']"
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
_amount:
1
_dueDate:
1902020
_assetToken:
0x96d0004913d4672F705DA4546ae7094d67071c1F
_beneficiary:
0x58ca41f19ea0326b085178c275a1c7B1e57D9f1c
_payer:
0x96d0004913d4672F705DA4546ae7094d67071c1F
_referenceHash: