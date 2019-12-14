<template>
  <div>
    <div :style="'background-image: url(' + heroImg + ')'" class="hero-wrapper">
      <div class="form-hero card">
        <input
          ref="hero"
          @change="onChange($event.target.files[0])"
          type="file"
          name="hero"
          accept="image/png,image/jpeg"
        />
        <div class="message">
          {{ uploadMessage }}
        </div>
        <i :style="'width:' + uploadPercentage + '%'" class="progress" />
      </div>
    </div>
  </div>
</template>
<script>
import FormData from 'form-data'
import Placeholder from '~/assets/img/placeholder.svg'
export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true
    },
    hero: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: null,
      uploadPercentage: 0,
      Placeholder
    }
  },
  computed: {
    uploadMessage() {
      if (this.uploadPercentage === 0) return 'Drag or click to change'
      if (this.uploadPercentage < 100)
        return 'Uploading ' + this.uploadPercentage + '%'
      else return 'Processing...'
    },
    config() {
      return this.$store.getters.config
    },
    heroImg() {
      return this.hero.length ? this.hero : Placeholder
    }
  },
  methods: {
    onUploadProgress(x) {},
    async onChange(image) {
      this.uploadPercentage = 0
      this.form = new FormData()
      this.form.append('image', image)
      try {
        const event = await this.$store.dispatch('event/UPDATE_EVENT_HERO', {
          id: this.id,
          form: this.form,
          onUploadProgress: x => {
            this.uploadPercentage = parseInt(
              Math.round((x.loaded * 100) / x.total)
            )
          }
        })
        this.$emit('hero-updated', event.hero)
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
