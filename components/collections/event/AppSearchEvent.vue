<template>
  <div class="kt-portlet__body pb-0">
    <div class="kt-portlet m-0 bg-light">
      <div class="kt-portlet__body p-0">
        <div class="kt-portlet__content">
          <div class="kt-input-icon kt-input-icon--right">
            <input
              v-model="search"
              type="text"
              class="form-control form-control-lg bg-transparent border-0"
              placeholder="Search..."
            />
            <span class="kt-input-icon__icon kt-input-icon__icon--right">
              <span><i class="simple-icon-magnifier"></i></span>
            </span>
          </div>
          <div v-if="results.length && open" class="search-results bg-white">
            <div class="search-result-title py-2 px-3">
              <span class="heading-color">Result for :</span> {{ search }}
            </div>
            <nuxt-link
              v-for="(result, i) in results"
              :key="i"
              :to="'event/' + result.id"
              class="search-result"
            >
              <h4 class="title heading-color">
                {{ result.title }}
              </h4>
              <h6 class="heading heading-color">{{ result.heading }}</h6>
              <p class="description">{{ result.description }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      open: false,
      results: []
    }
  },
  watch: {
    search() {
      this.handleSearch()
    }
  },
  methods: {
    handleClickOutside() {
      this.open = false
    },
    handleSearch() {
      if (!this.search) {
        this.results = []
        return
      }
      try {
        this.results = []
        this.open = true
      } catch (e) {}
      if (!this.search) {
        this.results = []
      }
    }
  }
}
</script>
