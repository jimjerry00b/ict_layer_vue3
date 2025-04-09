<template>
    <div class="product">
        <div class="img-section">
            <img :src="image" />
        </div>

        <div>
            <p>{{ title }}</p>
            <b>${{ price }}</b>
        </div>

        <slot></slot>
        <button class="addToCart" @click="handleAddToCart(id)">Add to cart</button>

    </div>
</template>


<script>

export default {
    props:{
        title: {
            type: String,
            default: "Title not found",
        },
        image: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        id: Number,
    },

    methods: {
        handleAddToCart(){
            this.$emit("cartclicked", this.id);
        },
    },
};

</script>

<style scoped>
.product {
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
</style>