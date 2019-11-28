<template>
  <div>
    <button class="btn btn-primary btn-wide" @click="showModal">
      Buat event baru
    </button>
    <b-modal
      id="create-event-modal"
      hide-footer
      hide-header
      no-close-on-backdrop
      body-class="p-0 bg-light"
    >
      <div class="position-relative overflow-hidden">
        <div class="px-3 py-5 bg-white">
          <h3 class="text-center m-0">Buat Event baru</h3>
        </div>
        <div
          v-if="error"
          class="alert alert-solid-danger alert-bold rounded-0 p-3"
        >
          <div class="alert-text text-center m-0">{{ error }}</div>
        </div>
        <div class="p-3">
          <div class="py-3">
            <label for="title">Event Title</label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <hr />
          <div class="py-3">
            <button
              class="btn btn-label-primary mr-1"
              :class="
                loading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="loading"
              @click="createEvent(form)"
            >
              Tambah
            </button>
            <button
              class="btn btn-label-danger"
              :disabled="loading"
              @click="hideModal"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        title: ''
      },
      error: ''
    }
  },
  methods: {
    hideModal() {
      this.$bvModal.hide('create-event-modal')
    },
    showModal() {
      this.$bvModal.show('create-event-modal')
    },
    resetModal() {
      this.$set(this.form, 'title', '')
      this.hideModal()
    },
    async createEvent(data) {
      this.loading = true
      this.error = ''
      try {
        const { event } = await this.$store.dispatch('event/CREATE_EVENT', data)
        this.resetModal()
        console.log(event)
      } catch (e) {
        this.error = e.message
      }
      this.loading = false
    }
  }
}
</script>
