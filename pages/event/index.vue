<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-toolbar mr-3">
            <h3 class="m-auto font-weight-bold">EVENT</h3>
          </div>
          <create-event-modal class="kt-portlet__head-toolbar" />
        </div>
        <search-event></search-event>
        <event-lists></event-lists>
      </div>
    </div>
  </div>
</template>
<script>
import CreateEventModal from '~/components/collections/event/AppCreateEventModal'
import SearchEvent from '~/components/collections/event/AppSearchEvent'
import EventLists from '~/components/collections/event/AppEventLists'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    CreateEventModal,
    SearchEvent,
    EventLists
  }
}
</script>
