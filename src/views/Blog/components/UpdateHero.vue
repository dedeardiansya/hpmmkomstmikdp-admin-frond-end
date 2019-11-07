<template>
  <div>
    <div
      class="hero-wrapper"
      :style="'background-image: url(' + hero || Placeholder + ')'"
    >
      <div class="form-hero card">
        <input
          ref="hero"
          type="file"
          name="hero"
          accept="image/png,image/jpeg"
          @change="onChange($event.target.files[0])"
        />
        <div class="message">
          {{ uploadMessage }}
        </div>
        <i class="progress" :style="'width:' + uploadPercentage + '%'" />
      </div>
    </div>
  </div>
</template>
<script>
import FormData from 'form-data'
import blogService from '@/services/blog'
import Placeholder from '@/assets/img/placeholder.svg'
import { UPDATE_BLOG_HERO } from '@/store/mutations.type'
export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true
    },
    hero: {
      type: String,
      default: Placeholder
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
    }
  },
  methods: {
    async onChange(image) {
      this.uploadPercentage = 0
      this.form = new FormData()
      this.form.append('image', image)
      try {
        const blog = await blogService.uploadHero(this.id, this.form, x => {
          this.uploadPercentage = parseInt(
            Math.round((x.loaded * 100) / x.total)
          )
        })
        this.$store.commit(UPDATE_BLOG_HERO, { id: this.id, hero: blog.hero })
        this.$emit('hero-updated', blog.hero)
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
