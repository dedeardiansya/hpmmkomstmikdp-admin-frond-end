<template>
  <div class="app-content">
    <div class="container">
      <div class="app-content__head">
        <h2 class="app-content__title"><slot name="title">PAGE TITLE</slot></h2>
        <div class="app-contant__actions">
          <slot name="actions"
            ><button class="btn btn-primary">Button</button></slot
          >
        </div>
      </div>
      <div class="app-content__body">
        <div class="panel-head">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-content {
  padding: 3rem 0;
  @include media-breakpoint-down(md) {
    padding-top: 1rem;
  }

  &__head {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .app-content__title {
    letter-spacing: 2px;
    margin: auto auto auto 0;
  }
  .app-content__actions {
    padding-right: 20px;
    margin: auto auto auto 0;
  }

  &__body {
    display: block;
    width: 100%;
  }
}
</style>
