<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <RouterLink class="navbar-brand" to="/">Logo</RouterLink>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item">
          <RouterLink class="nav-link px-2 link-secondary" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-2 link-dark" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-2 link-dark" to="/users">Users</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-2 link-dark" to="/products">Products</RouterLink>
        </li>
      </ul>

      <div class="col-md-3 text-end d-flex justify-content-end">
        <RouterLink class="btn btn-outline-primary me-2 d-flex align-items-center" to="/login">Login</RouterLink>
        <button type="button" class="btn btn-primary me-2">Sign-up</button> 

        <div class="position-relative">
          <span class="text-primary bg-primary text-white px-2 py-1 rounded-pill position-absolute z-1 end-0">0</span>
          <ion-icon class="btn" name="bag-handle-outline" style="font-size: 32px;"></ion-icon>
        </div>
        
      </div>
    </header>
  </div>
</template>

<script>
import router from '@/router';


export default {
  setup() {
    const token = localStorage.getItem('token');
    const logout = () => {
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    };

    return {
      token,
      logout,
    };
  },
};
</script>

<style scoped>

li .router-link-exact-active {
    font-weight: 700;
}

</style>