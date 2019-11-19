<template>
  <div ref="editor"></div>
</template>
<script>
/* eslint-disable import/first */
import('froala-editor/js/froala_editor.pkgd.min')
import('froala-editor/js/plugins.pkgd.min')
import Froala from 'froala-editor'
/* eslint-enable import/first */
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
    const token = await this.$store.getters['auth/currentUser'].getIdToken(true)
    const self = this
    const serverUrl =
      process.env.baseApiURL + '/admin/blog/' + this.$route.params.id + '/image'
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
          contentChanged() {
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
