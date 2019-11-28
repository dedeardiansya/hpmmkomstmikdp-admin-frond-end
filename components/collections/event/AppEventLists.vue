<template>
  <div class="kt-portlet__body">
    <event-list v-for="event in events" :key="event.id" :event="event" />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
    ></infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
import EventList from './AppEventList'
export default {
  components: {
    InfiniteLoading,
    EventList
  },
  data() {
    return {
      infiniteId: +new Date()
    }
  },
  computed: {
    events() {
      return this.$store.getters['event/events']
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$store
        .dispatch('event/FETCH_EVENTS', {
          offset: this.events.length
        })
        .then(complete => {
          if (complete) {
            $state.complete()
          } else {
            $state.loaded()
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
