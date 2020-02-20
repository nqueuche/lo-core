<template>
<div> <!-- <div v-if="isDrizzleInitialized"> -->
    <!-- <drizzle-contract-form
      contractName="SmartInvoice"
      method="amount"
      label="Value"
      :placeholder="['accounts']"
    /> -->
   <Amount/>
   <DueDate/>
   <AssetToken/>
   <Beneficiary />
   <Payer/>
   <ReferenceHash />
    
  <!-- </div> -->

  <!-- <div v-else>Loading...</div> --></div>
 
</template>

<script>
import { mapGetters } from 'vuex'
import Amount from './Amount'
import DueDate from './DueDate'
import AssetToken from './AssetToken'
import Beneficiary from './Beneficiary'
import Payer from './Payer'
import ReferenceHash from './ReferenceHash'

export default {
  name: 'SmartInvoice',  
  components: {
    Amount,
    DueDate,
    AssetToken,
    Beneficiary,
    Payer,
    ReferenceHash

    }
}
</script>

<style></style>
