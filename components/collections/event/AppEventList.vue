<template>
  <div class="kt-portlet">
    <div class="kt-portlet__body kt-ribbon">
      <div
        class="kt-ribbon__target p-2 shadow-sm bg-white text-primary rounded font-weight-bold"
        style="top: 10px; left: 10px;"
      >
        {{ event.public ? 'PUBLIC' : 'PRIVATE' }}
      </div>
      <div class="kt-portlet__content">
        <div class="row">
          <div class="col-md-3 mb-3">
            <img
              :src="event.hero || Placeholder"
              alt=""
              class="d-block"
              width="100%"
            />
          </div>
          <div class="col-md-9 mb-3">
            <h3>{{ event.title }}</h3>
            <p class="font-weight-bold">
              by
              <span class="text-primary">{{ event.author }}</span
              >, {{ createdAt }}
            </p>
            <p>
              {{ event.description }}
            </p>
            <button
              :class="
                updatePublicLoading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="updatePublicLoading"
              @click="updateEventPublic({ id: event.id, value: !event.public })"
              class="btn btn-sm btn-label-primary"
            >
              MAKE {{ !event.public ? 'PUBLIC' : 'PRIVATE' }}
            </button>
            &nbsp;
            <router-link
              :to="'/event/' + event.id"
              class="btn btn-sm btn-label-info"
              >EDIT</router-link
            >
            &nbsp;
            <button
              :class="
                deleteLoading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="deleteLoading"
              @click="deleteEvent(event.id)"
              class="btn btn-sm btn-label-danger"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Placeholder from '@/assets/img/placeholder.svg'
export default {
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      Placeholder,
      updatePublicLoading: false,
      deleteLoading: false
    }
  },
  computed: {
    createdAt() {
      return new Date(this.event.createdAt).toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  methods: {
    updateEventPublic(data) {
      this.updatePublicLoading = true
      this.$store
        .dispatch('event/UPDATE_EVENT_PUBLIC', data)
        .then(() => {
          this.updatePublicLoading = false
        })
        .catch(e => {
          this.updatePublicLoading = false
          this.$swal({ type: 'error', text: e.message })
        })
    },
    deleteEvent(data) {
      this.$swal({
        text: 'Anda yakin ingin menghapus event ini?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batalkan',
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.deleteLoading = true
          this.$store
            .dispatch('event/DELETE_EVENT', data)
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
