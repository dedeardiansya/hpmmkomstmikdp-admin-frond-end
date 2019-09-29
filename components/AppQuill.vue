<template>
  <client-only>
    <quill
      v-model="listen"
      class="editor"
      output="html"
      :config="{ modules: { toolbar: editorToolbar }, theme: 'snow' }"
    />
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code'],
        [{ list: ['ordered', 'bullet'] }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ color: ['#666ee8', '#28d094', '#1e9ff2', '#ffc06a', '#ff4961'] }],
        ['clean']
      ]
    }
  },
  computed: {
    listen: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
