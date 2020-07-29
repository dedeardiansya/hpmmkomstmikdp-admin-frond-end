<template>
  <div></div>
</template>

<script>
import { db } from '../firebase'
export default {
  data() {
    return {
      dede: []
    }
  },

  mounted() {
    db.collection('dede').add({ name: 'dede ardiansyta' })
  },

  firestore: {
    dede: db.collection('dede')
  }
}
</script>
