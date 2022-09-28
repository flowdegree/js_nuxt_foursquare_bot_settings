<!-- Please remove this file from your project -->
<template>
  <section class="p-5 bg-alert">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="">
            <h1>Hi</h1>
            <div if="logged_in">
              You Are Logged in
            </div>
            <div else>
              You're not logged in, please <a role="button" data-bs-toggle="modal" href="#exampleModal">login</a>
            </div>


            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Hello world
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
};
</script>
