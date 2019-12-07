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
      </div>
    </div>
  </div>
</template>
<script>
import CreateAnggotaModal from '~/components/collections/anggota/AppCreateAnggotaModal'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    CreateAnggotaModal
  }
}
</script>
