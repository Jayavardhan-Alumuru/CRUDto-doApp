<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
                <h5 class="text-custom font-weight-normal mb-3">About the project</h5>
                <h4 class="title mb-4">
                    This To-do project <br />
                    performs CRUD operations.
                </h4>
                <p class="text-muted mb-0">We can add, update and delete tasks</p>

                <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-home h4 mb-0 text-custom"></i>
                            <h6 @click="this.$router.push({name:'TodoApp'})" class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">return to Home page</a></h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!--end col-->
    </div>
    <!--enr row-->
</div>
</template>

<script>


export default {
  name: 'About',
}
</script>


<style scoped>
body{
margin-top:20px;
background:#F0F8FF;
}
.text-custom{
color: #0062ff !important;
}
</style>