<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">Edit Event</h3>
          </div>
        </div>
        <div class="kt-portlet__body">
          <update-hero
            :id="event.id"
            :hero="event.hero"
            @hero-updated="updateHero"
            class="kt-portlet__content"
          ></update-hero>
        </div>
        <div class="kt-portlet__body">
          <div class="kt-portlet__content">
            <div class="form-group">
              <label>Title</label
              ><input
                v-model="event.title"
                type="text"
                placeholder="Title"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Author</label
              ><input
                v-model="event.author"
                type="text"
                placeholder="Author"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Heading</label
              ><input
                v-model="event.heading"
                type="text"
                placeholder="Heading"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>CreatedAt</label
              ><input
                v-model="event.createdAt"
                type="date"
                placeholder="CreatedAt"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Description</label
              ><textarea
                v-model="event.description"
                placeholder="Description"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Body</label>
              <froala-editor v-model="event.body" noimg></froala-editor>
            </div>
            <div class="form-group">
              <button
                :class="
                  loading
                    ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                    : ''
                "
                :disabled="loading"
                @click="updateEvent"
                class="btn btn-label-primary btn-wide"
              >
                SIMPAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FroalaEditor from '~/components/elements/FroalaEditor'
import UpdateHero from '~/components/collections/event/AppUpdateHero'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    UpdateHero,
    FroalaEditor
  },
  data() {
    return {
      loading: false,
      error: ''
    }
  },
  async asyncData({ params, error, $axios, store }) {
    try {
      const authToken =
        'Bearer ' + (await store.getters['auth/currentUser'].getIdToken(true))
      $axios.setToken(authToken)
      const event = (await $axios.$get('/admin/event/' + params.id)).event
      return { event }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  methods: {
    updateHero(hero) {
      this.$set(this.event, 'hero', hero)
    },
    async updateEvent() {
      this.loading = true
      this.error = ''
      try {
        await this.$store.dispatch('event/UPDATE_EVENT', this.event)
        this.$swal({
          text: 'Event telah di update.',
          icon: 'success'
        })
      } catch (e) {
        this.error = e.message
        this.$swal({
          text: e.message,
          icon: 'error'
        })
      }
      this.loading = false
    }
  }
}
</script>
