<template>
  <div>
    <button
      class="btn btn-primary btn-wide"
      @click="$bvModal.show('create-blog-modal')"
    >
      Buat blog baru
    </button>
    <b-modal
      id="create-blog-modal"
      hide-footer
      hide-header
      no-close-on-backdrop
      body-class="p-0 bg-light"
    >
      <div class="px-3 py-5 bg-white">
        <h3 class="text-center m-0">Buat Blog baru</h3>
      </div>
      <div class="alert alert-solid-danger alert-bold rounded-0 p-3">
        <div class="alert-text text-center m-0">
          A simple danger alert—check it out!
        </div>
      </div>
      <div class="p-3">
        <div class="py-3">
          <label for="title">Blog Title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            placeholder="Title"
          />
        </div>
        <div class="py-3">
          <label for="category">Blog Category</label>
          <select id="category" class="form-control">
            <option disabled selected>Category</option>
            <option value="1">Pemrograman</option>
            <option value="1">Jaringan</option>
            <option value="1">Multimedia</option>
          </select>
        </div>
        <hr />
        <div class="py-3">
          <button class="btn btn-label-primary btn-wide mr-1">Simpan</button>
          <button
            class="btn btn-label-danger btn-wide"
            @click="$bvModal.hide('create-blog-modal')"
          >
            Batal
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
