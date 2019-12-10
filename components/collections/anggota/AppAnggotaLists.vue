<template>
  <div class="kt-portlet__body">
    <div class="container-fluid">
      <paginate tag="div" class="row" name="anggota" :list="anggota" :per="12">
        <app-anggota-list
          v-for="data in paginated('anggota')"
          :key="data.id"
          :anggota="data"
          class="col-3 anggota-list mb-3"
        />
      </paginate>
      <div class="kt-pagination kt-pagination--brand mt-4">
        <paginate-links
          for="anggota"
          show-step-links
          :limit="6"
          :classes="{
            ul: ['kt-pagination__links', 'mx-auto'],
            'li.active': 'kt-pagination__link--active'
          }"
        ></paginate-links>
      </div>
    </div>
  </div>
</template>
<script>
import AppAnggotaList from './AppAnggotaList'
export default {
  components: {
    AppAnggotaList
  },
  data() {
    return {
      paginate: ['anggota']
    }
  },
  computed: {
    anggota() {
      return this.$store.getters['anggota/anggota'].sortBy(o => o.cadreYear)
    }
  }
}
</script>
