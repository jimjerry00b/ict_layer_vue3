<template>
    <main class="form-signin">
    <form>
    <h1 class="h3 mb-3 fw-normal">Please Fill out</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Name">
      <label for="floatingInput">Name</label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="Email">
      <label for="floatingInput">Email</label>
    </div>
    
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Save</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2025</p>
  </form>
</main>
</template>


<script>
import axios from 'axios';


  export default {
    name : 'userCreate',
    data(){
        return {
            errors: null,
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                }
        }
    },
    

    methods: {
        saveUser() {

            const activeElements = document.querySelectorAll('form .border-danger');

            activeElements.forEach((element) => {
                element.classList.remove('border-danger');
            });

            const elements = document.getElementsByClassName('invalid-feedback');
            for (let i = 0; i < elements.length; i++) {
                elements[i].textContent = '';
            }


            this.error = {};
            const token = localStorage.getItem('token');

            if (!token) {
                console.error("No token found");
                return;
            }
            
            const url = this.$api_base_url+"user/store";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            axios.post(url, this.user, { headers }).then((res)=>{
                this.$router.push('/users');
            }).catch((e)=>{
                
                
               this.errors =  e.response.data.errors;

               for(let i in e.response.data.errors){
                document.querySelector('.group-'+i+' .invalid-feedback').innerText = e.response.data.errors[i];
                const searchInput = document.querySelector('.group-'+i+' input');
                searchInput.classList.add('border-danger');
               }
                        
            });
        },
        
    },
  }

</script>