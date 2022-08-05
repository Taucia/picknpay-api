<template>
  <nav class="navbar navbar-inverse  text-black" style="color:black; background-color:#D3D3D3;" >
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"><img src="https://i.ibb.co/NyvKmVk/Pick-n-Pay-logo.png" alt="" style="width: 160px; "></a>
          </div>
          <ul class="text text-black">
            
   <router-link  to="/">Home</router-link> |
   <router-link to="/products">Products</router-link> |
   <router-link to="/signup">Register</router-link> |
    <router-link to="/login">Login</router-link>
     
          </ul>
        </div>
      </nav>  
</template>

<script>
export default {

}
</script>

<style>
a{
    text-decoration: none;
    color:black!important;
}
</style>