<template>
  <div ref="editor"></div>
</template>
<script>
import('froala-editor/js/froala_editor.pkgd.min')
import('froala-editor/js/plugins.pkgd.min')
import authServices from '@/services/auth'
import Froala from 'froala-editor'
export default {
  props: {
    value: {
      type: String,
      default: '<p>My custom paragraph.</p>'
    }
  },
  data() {
    return {
      editor: null
    }
  },
  async mounted() {
    const token = await authServices.getToken()
    const self = this
    const serverUrl =
      process.env.VUE_APP_BASE_API_URL +
      '/admin/blog/' +
      this.$route.params.id +
      '/image'
    this.editor = new Froala(
      this.$refs.editor,
      {
        requestHeaders: { authorization: 'bearer ' + token },
        imageUploadMethod: 'POST',
        imageManagerDeleteMethod: 'DELETE',
        imageManagerLoadURL: serverUrl,
        imageUploadURL: serverUrl,
        imageManagerDeleteURL: serverUrl,
        events: {
          contentChanged: function() {
            self.updateInput(this.html.get())
          }
        }
      },
      () => {
        self.editor.html.set(self.value)
      }
    )
  },
  methods: {
    updateInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
