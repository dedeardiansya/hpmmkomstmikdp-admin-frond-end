<template>
  <div class="block-ui-wrap">
    <div v-if="loading" class="block-ui">
      <div class="block-ui-spinner">
        <slot name="spinner">
          <b-spinner variant="primary"></b-spinner>
        </slot>
      </div>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
