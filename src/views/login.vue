<template>
  <div
    class="auth-layout py-3 d-flex"
    :style="'background-image: url(' + Background + ');'"
  >
    <div class="container my-auto">
      <div class="row">
        <div class="col-md-5 m-auto">
          <div class="d-flex p-3">
            <div class="bg-white p-5 m-auto">
              <h1 class="my-5 p-0 text-center font-weight-light">Sign In</h1>
              <div class="mb-3 text-center bg-light p-3">
                <button class="btn btn-google">
                  <i class="socicon-google"></i> Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from '@/assets/img/background-1.jpg'
export default {
  data() {
    return {
      Background
    }
  }
}
</script>

<style>
.auth-layout {
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
