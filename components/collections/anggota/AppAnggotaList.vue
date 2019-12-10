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
            class="btn btn-primary btn-sm btn-block"
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
    }
  }
}
</script>
