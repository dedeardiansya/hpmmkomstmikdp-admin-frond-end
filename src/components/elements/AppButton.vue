<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="button"
    :class="{ lg, sm, block, primary, danger, loading }"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    text: {
      type: String,
      default: 'Button'
    },
    lg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    block: {
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
@mixin button-color($color-1, $color-2) {
  color: $color-1;
  background-color: $color-2;

  &.loading::before {
    border-color: rgba($color-1, 0.5);
  }

  &.loading::after {
    border-color: $color-1 transparent transparent;
  }

  &:not(:disabled):not(.disabled) {
    &:hover {
      color: $color-1;
      background-color: lighten($color-2, 5%);
    }

    &:active,
    &.active {
      color: $color-1;
      background-color: lighten($color-2, 5%);
      &:focus {
        color: $color-1;
        background-color: darken($color-2, 5%);
      }
    }
  }
}

@keyframes button-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.button {
  position: relative;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  font-family: $font-family-base;
  letter-spacing: 1px;
  border: 0;
  outline: none;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  transition: background-color 200ms ease;

  &:hover {
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
  }

  padding: 0 13px;
  line-height: 30px;
  font-size: 13px;

  &.lg {
    padding: 0 14px;
    line-height: 36px;
    font-size: 14px;
  }

  &.sm {
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
  }

  &.block {
    display: block;
    width: 100%;
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
      animation: button-spin 600ms linear;
      animation-iteration-count: infinite;
    }
  }

  @include button-color($gray-100, $gray-600);

  &.primary {
    @include button-color($gray-100, $primary);
  }
  &.danger {
    @include button-color($gray-100, $danger);
  }
}

.dark-theme .button {
  @include button-color($gray-900, $gray-300);

  &.primary {
    @include button-color($gray-100, $primary);
  }
  &.danger {
    @include button-color($gray-100, $danger);
  }
}
</style>
