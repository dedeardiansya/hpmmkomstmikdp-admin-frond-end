<template>
  <div class="anggota-avatar">
    <img :src="avatar || '/avatar.jpg'" />
    <div class="avatar-action">
      <button class="btn btn-label-primary btn-sm">
        {{ uploadMessage }}
        <input @change="onChange($event.target.files[0])" type="file" />
      </button>
    </div>
  </div>
</template>

<script>
import FormData from 'form-data'
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: null,
      uploadPercentage: 0
    }
  },
  computed: {
    uploadMessage() {
      if (this.uploadPercentage === 0) return 'Ubah avatar'
      if (this.uploadPercentage < 100)
        return 'Uploading ' + this.uploadPercentage + '%'
      else return 'Processing...'
    }
  },
  methods: {
    async onChange(image) {
      this.uploadPercentage = 0
      this.form = new FormData()
      this.form.append('image', image)
      try {
        await this.$store.dispatch('anggota/UPDATE_AVATAR', {
          id: this.id,
          form: this.form,
          onUploadProgress: x => {
            this.uploadPercentage = parseInt(
              Math.round((x.loaded * 100) / x.total)
            )
          }
        })
      } catch (e) {
        let mess
        if (e.response) mess = e.response.data.message
        else mess = e.message
        this.$swal({ type: 'error', text: mess })
      }
      this.uploadPercentage = 0
    }
  }
}
</script>
