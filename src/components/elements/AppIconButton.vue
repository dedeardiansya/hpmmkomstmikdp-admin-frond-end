<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="icon-button"
    :class="{ lg, sm, primary, danger, loading }"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <slot><i class="ion" :class="icon"/></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String,
      default: 'ion-md-person'
    },
    lg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@mixin icon-button-color($color-1, $color-2) {
  color: $color-2;
  border-color: $color-2;

  &.loading::before {
    border-color: rgba($color-2, 0.5);
  }

  &.loading::after {
    border-color: $color-2 transparent transparent;
  }

  &:not(:disabled):not(.disabled) {
    &:hover {
      color: $color-1;
      border-color: lighten($color-2, 5%);
      background-color: lighten($color-2, 5%);
    }

    &:active,
    &.active {
      color: $color-1;
      border-color: lighten($color-2, 5%);
      background-color: lighten($color-2, 5%);
      &:focus {
        color: $color-1;
        border-color: darken($color-2, 5%);
        background-color: darken($color-2, 5%);
      }
    }
  }
}

@keyframes icon-button-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon-button {
  position: relative;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  font-family: $font-family-base;
  letter-spacing: 1px;
  outline: none;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  transition: background-color 200ms ease, border-color 200ms ease;
  border-radius: 50%;
  background-color: transparent;
  padding: 0;
  border: 2px solid transparent;

  &:hover {
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
  }

  line-height: 26px;
  width: 30px;
  font-size: 16px;

  &.lg {
    line-height: 32px;
    width: 36px;
    font-size: 18px;
  }

  &.sm {
    line-height: 20px;
    width: 24px;
    font-size: 14px;
  }

  &.disabled,
  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  &.loading {
    color: transparent !important;
    &::before,
    &::after {
      position: absolute;
      z-index: 6;
      content: '';
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border-radius: 50%;
      border: 3px solid transparent;
      transition: border-color 200ms ease;
    }

    &::after {
      animation: icon-button-spin 600ms linear;
      animation-iteration-count: infinite;
    }
  }

  @include icon-button-color($gray-100, $gray-600);

  &.primary {
    @include icon-button-color($gray-100, $primary);
  }
  &.danger {
    @include icon-button-color($gray-100, $danger);
  }
}

.dark-theme .icon-button {
  @include icon-button-color($gray-900, $gray-300);

  &.primary {
    @include icon-button-color($gray-100, $primary);
  }
  &.danger {
    @include icon-button-color($gray-100, $danger);
  }
}
</style>
