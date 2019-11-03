<template>
  <div class="kt-portlet">
    <div class="kt-portlet__body kt-ribbon">
      <div
        class="kt-ribbon__target p-2 shadow-sm bg-white text-primary rounded font-weight-bold"
        style="top: 10px; left: 10px;"
      >
        PUBLIC
      </div>
      <div class="kt-portlet__content">
        <div class="row">
          <div class="col-md-3 mb-3">
            <img src="@/assets/img/placeholder.svg" alt="" />
          </div>
          <div class="col-md-9 mb-3">
            <h3>Ini artickel pertama</h3>
            <p class="font-weight-bold">
              <span class="text-primary">Jaringan</span> - by
              <span class="text-primary">Admin</span>, 19 September 2019
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              corrupti non iure vitae aliquam, ipsam neque facere consequatur et
              repellendus deserunt ipsum eaque quis quas ad nihil aliquid
              nostrum eos!
            </p>
            <button class="btn btn-sm btn-label-primary">
              MAKE PUBLIC</button
            >&nbsp;
            <button class="btn btn-sm btn-label-info">EDIT</button>&nbsp;
            <button class="btn btn-sm btn-label-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
