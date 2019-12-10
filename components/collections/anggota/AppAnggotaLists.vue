<template>
  <div class="kt-portlet__body">
    <div class="container-fluid">
      <div class="kt-input-icon kt-input-icon--right bg-light mb-4">
        <input
          type="text"
          placeholder="Search..."
          v-model="search"
          class="form-control form-control-lg bg-transparent border-0"
        />
        <span class="kt-input-icon__icon kt-input-icon__icon--right"
          ><span><i class="simple-icon-magnifier"></i></span
        ></span>
      </div>
      <paginate tag="div" class="row" name="anggota" :list="results" :per="12">
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
import Fuse from 'fuse.js'
import AppAnggotaList from './AppAnggotaList'
export default {
  components: {
    AppAnggotaList
  },
  data() {
    return {
      paginate: ['anggota'],
      search: '',
      results: []
    }
  },
  watch: {
    search() {
      this.handleSearch()
    }
  },
  computed: {
    anggota() {
      return this.$store.getters['anggota/anggota'].sortBy(o => o.cadreYear)
    }
  },
  created() {
    this.results = this.$store.getters['anggota/anggota'].sortBy(
      o => o.cadreYear
    )
  },
  methods: {
    searchAnggota(val) {
      const fuse = new Fuse(this.anggota, {
        shouldSort: true,
        threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['name', 'placeOfBirth', 'cadreYear']
      })
      return fuse.search(val)
    },
    handleSearch() {
      if (!this.search) {
        this.results = this.anggota
        return
      }
      this.results = this.searchAnggota(this.search)
      if (!this.search) {
        this.results = this.anggota
      }
    }
  }
}
</script>
