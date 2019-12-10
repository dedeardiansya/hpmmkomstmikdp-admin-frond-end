<template>
  <div>
    <div class="wrapper shadow-sm">
      <app-avatar :id="anggota.id" :avatar="anggota.avatar"></app-avatar>
      <div class="container-fluid py-2">
        <div class="py-1">
          <label for="name">Nama</label>
          <input
            id="name"
            v-model="anggota.name"
            type="text"
            class="form-control form-control-sm"
            placeholder="Nama"
          />
        </div>
        <div class="py-1">
          <label for="placeOfBirth">Tempat lahir</label>
          <input
            id="placeOfBirth"
            v-model="anggota.placeOfBirth"
            type="text"
            class="form-control form-control-sm"
            placeholder="Tempat lahir"
          />
        </div>
        <div class="py-1">
          <label for="dateOfBirth">Tanggal lahir</label>
          <input
            id="dateOfBirth"
            v-model="anggota.dateOfBirth"
            type="date"
            class="form-control form-control-sm"
            placeholder="Tanggal lahir"
          />
        </div>
        <div class="py-1">
          <label for="cadreYear">Angkatan</label>
          <input
            id="cadreYear"
            v-model="anggota.cadreYear"
            type="text"
            class="form-control form-control-sm"
            placeholder="Angkatan"
            @keypress="isNumber($event)"
          />
        </div>
        <div class="py-1">
          <button
            class="btn btn-primary btn-sm"
            :class="
              loading
                ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                : ''
            "
            :disabled="loading"
            @click="edit(anggota)"
          >
            EDIT
          </button>
          <button
            class="btn btn-sm btn-label-danger"
            :class="
              deleteLoading
                ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                : ''
            "
            :disabled="deleteLoading"
            @click="deleteAnggota(anggota)"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAvatar from './AppAvatar'
export default {
  components: {
    AppAvatar
  },
  props: {
    anggota: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      deleteLoading: false,
      loading: false,
      error: ''
    }
  },
  methods: {
    isNumber(e) {
      e = e || window.event
      const charCode = e.which ? e.which : e.keyCode
      if (charCode > 57 || charCode < 48) e.preventDefault()
    },
    async edit(data) {
      this.loading = true
      this.error = ''
      data.cadreYear = `${data.cadreYear}`
      try {
        await this.$store.dispatch('anggota/UPDATE_ANGGOTA', data)
        this.$swal({
          text: 'Anggota telah di update.',
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
    },
    deleteAnggota(data) {
      this.$swal({
        text: 'Anda yakin ingin menghapus anggota ini?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batalkan',
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.deleteLoading = true
          this.$store
            .dispatch('anggota/DELETE_ANGGOTA', data)
            .then(() => {
              this.deleteLoading = false
            })
            .catch(e => {
              this.deleteLoading = false
              this.$swal({ type: 'error', text: e.message })
            })
        }
      })
    }
  }
}
</script>
