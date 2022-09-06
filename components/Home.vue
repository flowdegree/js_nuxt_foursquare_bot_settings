<!-- Please remove this file from your project -->
<template>
  <div class="bg-warning">
    <h1>Hi</h1>
    <div if="logged_in"></div>
    <div else>You're not logged in, please <a data-toggle="modal" href="#exampleModal">login</a></div>
    <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'


export default {
  name: "NuxtTutorial",

  mounted(){
    //this.modal = new bModal(document.getElementById('exampleModal'));

  },
  methods: {
    toggle () {
       //this.modal.toggle();
    }
  }
};




</script>
