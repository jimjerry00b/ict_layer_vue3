<template>
    <main class="mt-3">
        <div class="container">

            <button type="button" class="btn btn-info">Cart {{ cart.length }}</button>


            <div class="grid-container">
                <ProductsChild v-for="product in products" :key="product.id" :title="product.title"
                    :image="product.image" :price="product.price" :id="product.id" @cartclicked="addTocart">
                </ProductsChild>
            </div>
        </div>
    </main>
</template>


<script>

import ProductsChild from '@/components/productsChild.vue';
export default {

    components: {
        ProductsChild,
    },

    data() {
        return {
            products: [],
            cart: [],
        };
    },
    
    mounted() {
        fetch('https://fakestoreapi.com/products/')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                this.products = data;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    },

    methods: {
        addTocart(id) {
            this.cart.push(id);
        }
    }
}
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.product {
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    display: grid;
    align-items: center;
    justify-content: center;
}

.product img {
    max-width: 80px;
    width: 100%;
    height: auto;
}

.addToCart {
    border: none;
    margin-top: 10px;
    padding: 10px;
    width: 100%;
}
</style>