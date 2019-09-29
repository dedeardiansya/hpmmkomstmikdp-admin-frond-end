import Vue from 'vue'
import iziToast from 'izitoast'

Vue.mixin({
  computed: {
    $toast() {
      const theme = () => 'light'

      const colors = {
        primary: '#666ee8',
        success: '#28d094',
        danger: '#ff4961',
        warning: '#ffc06a',
        grays: {
          _1: '#f8f9fa',
          _2: '#e3e4e5',
          _3: '#b8b9bb',
          _4: '#a2a4a6',
          _5: '#8c8f92',
          _6: '#777a7d',
          _7: '#616568',
          _8: '#363a3e',
          _9: '#212529'
        }
      }

      const options = {
        progressBarColor: colors.primary,
        theme: theme() ? 'dark' : 'light',
        color: theme() ? colors.grays._9 : '#FFFFFF',
        titleColor: theme() ? colors.grays._2 : colors.grays._7,
        titleSize: '16px',
        messageColor: theme() ? colors.grays._4 : colors.grays._5,
        messageSize: '14px',
        icon: 'ion-md-notifications',
        message: 'Hello World!',
        iconColor: colors.primary,
        position: 'bottomCenter',
        transitionIn: 'fadeInUp',
        transitionInMobile: 'fadeInUp',
        transitionOut: 'fadeOutDown',
        transitionOutMobile: 'fadeOutDown',
        zindex: 9999
      }

      const stateOption = {
        success: () => ({
          iconColor: colors.success,
          progressBarColor: colors.success,
          icon: 'ion-md-checkmark-circle-outline',
          title: 'Success'
        }),
        warning: () => ({
          iconColor: colors.warning,
          progressBarColor: colors.warning,
          icon: 'ion-md-warning',
          title: 'Warning'
        }),
        danger: () => ({
          iconColor: colors.danger,
          progressBarColor: colors.danger,
          icon: 'ion-md-close-circle-outline',
          title: 'Error'
        }),
        confirm: (resolve, reject) => ({
          icon: 'ion-md-help-circle-outline',
          close: false,
          overlay: true,
          progressBar: false,
          timeout: false,
          drag: false,
          displayMode: 'once',
          title: 'Hey',
          message: 'Are you sure about that?',
          position: 'center',
          buttons: [
            [
              '<button><b>YES</b></button>',
              function(instance, toast) {
                if (resolve) resolve(instance, toast)
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              },
              true
            ],
            [
              '<button>NO</button>',
              function(instance, toast) {
                if (reject) reject(instance, toast)
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              }
            ]
          ]
        })
      }

      return {
        show(msg = 'Welcome!', customOptions = {}) {
          iziToast.show({
            ...options,
            message: msg,
            ...customOptions
          })
        },
        success(msg = 'Success', customOptions = {}) {
          iziToast.success({
            ...options,
            ...stateOption.success(),
            message: msg,
            ...customOptions
          })
        },
        warning(msg = 'Warning', customOptions = {}) {
          iziToast.warning({
            ...options,
            ...stateOption.warning(),
            message: msg,
            ...customOptions
          })
        },
        danger(msg = 'Someting wrong', customOptions = {}) {
          iziToast.error({
            ...options,
            ...stateOption.danger(),
            message: msg,
            ...customOptions
          })
        },
        confirm: {
          show(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.confirm(resolve, reject),
              ...customOptions
            })
          },
          success(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.success(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions
            })
          },
          warning(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.warning(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions
            })
          },
          danger(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.danger(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions
            })
          }
        }
      }
    }
  }
})
