<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-toolbar mr-3">
            <h3 class="m-auto font-weight-bold">ANGGOTA</h3>
          </div>
          <create-anggota-modal></create-anggota-modal>
        </div>
        <anggota-lists></anggota-lists>
      </div>
    </div>
  </div>
</template>
<script>
import CreateAnggotaModal from '~/components/collections/anggota/AppCreateAnggotaModal'
import AnggotaLists from '~/components/collections/anggota/AppAnggotaLists'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    CreateAnggotaModal,
    AnggotaLists
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('anggota/FETCH_ANGGOTA')
    } catch (e) {
      error({ statusCode: 500 })
    }
  }
}
</script>
