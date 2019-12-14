<template>
  <div class="my-auto">
    <button @click="showModal" class="btn btn-primary btn-wide">
      Buat anggota
    </button>
    <b-modal
      id="create-blog-modal"
      hide-footer
      hide-header
      no-close-on-backdrop
      body-class="p-0 bg-light"
    >
      <div class="position-relative overflow-hidden">
        <div class="px-3 py-5 bg-white">
          <h3 class="text-center m-0">Buat anggota</h3>
        </div>
        <div
          v-if="error"
          class="alert alert-solid-danger alert-bold rounded-0 p-3"
        >
          <div class="alert-text text-center m-0">{{ error }}</div>
        </div>
        <div class="p-3">
          <div class="py-3">
            <label for="name">Nama</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-control"
              placeholder="Nama"
            />
          </div>
          <div class="py-3">
            <label for="placeOfBirth">Tempat lahir</label>
            <input
              id="placeOfBirth"
              v-model="form.placeOfBirth"
              type="text"
              class="form-control"
              placeholder="Tempat lahir"
            />
          </div>
          <div class="py-3">
            <label for="dateOfBirth">Tanggal lahir</label>
            <input
              id="dateOfBirth"
              v-model="form.dateOfBirth"
              type="date"
              class="form-control"
              placeholder="Tanggal lahir"
            />
          </div>
          <div class="py-3">
            <label for="cadreYear">Angkatan</label>
            <input
              id="cadreYear"
              v-model="form.cadreYear"
              @keypress="isNumber($event)"
              type="text"
              class="form-control"
              placeholder="Angkatan"
            />
          </div>
          <div class="py-3">
            <label for="customFile">Avatar</label>
            <div class="custom-file">
              <input
                id="customFile"
                ref="avatar"
                @change="avatar = $event.target.files[0]"
                type="file"
                class="custom-file-input"
              />
              <label class="custom-file-label" for="customFile"
                >Choose file</label
              >
            </div>
          </div>
          <hr />
          <div class="py-3">
            <button
              :class="
                loading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="loading"
              @click="createBlog(form)"
              class="btn btn-label-primary mr-1"
            >
              Tambah
            </button>
            <button
              :disabled="loading"
              @click="hideModal"
              class="btn btn-label-danger"
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
import FormData from 'form-data'
export default {
  data() {
    return {
      loading: false,
      avatar: null,
      form: {
        name: '',
        placeOfBirth: '',
        dateOfBirth: '',
        cadreYear: '4'
      },
      error: ''
    }
  },
  methods: {
    isNumber(e) {
      e = e || window.event
      const charCode = e.which ? e.which : e.keyCode
      if (charCode > 57 || charCode < 48) e.preventDefault()
    },
    hideModal() {
      this.$bvModal.hide('create-blog-modal')
    },
    showModal() {
      this.$bvModal.show('create-blog-modal')
    },
    resetModal() {
      this.$set(this.form, 'name', '')
      this.$set(this.form, 'dateOfBirth', '')
      this.$set(this.form, 'placeOfBirth', '')
      this.$set(this.form, 'cadreYear', '')
      this.hideModal()
    },
    async createBlog(data) {
      this.loading = true
      this.error = ''
      console.log(data)
      const form = new FormData()
      form.append('image', this.avatar)
      form.append('name', data.name)
      form.append('dateOfBirth', data.dateOfBirth)
      form.append('placeOfBirth', data.placeOfBirth)
      form.append('cadreYear', data.cadreYear)
      try {
        await this.$store.dispatch('anggota/CREATE_ANGGOTA', form)
        this.resetModal()
      } catch (e) {
        this.error = e.message
      }
      this.loading = false
    }
  }
}
</script>
