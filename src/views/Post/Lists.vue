<template>
  <app-content>
    <template v-slot:title>POST LISTS</template>
    <template v-slot:actions>
      <button class="btn btn-primary">New post</button>
    </template>
    <div class="card card-body rounded-0 border-0 bg-white">
      <label>Search</label>
      <input
        type="text"
        placeholder="Search..."
        class="form-control form-search bg-light"
      />
    </div>
  </app-content>
</template>
