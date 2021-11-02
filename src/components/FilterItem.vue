<template>
    <div class = "item_container" v-bind:class="{ active: isActive }" @click="isActive = !isActive">
            <img v-bind:src = "img_src" v-bind:alt = "img_alt"/>
            <p>{{p}}</p>
            <button @click = "onClick"> {{p}}</button>
    </div>
</template>

<script>
export default {
    name: 'FilterItem',
    data() {
        return {
            isActive: false,
        }
    },

    props: {
        img_src: {
            type: String,
            default: "",
        },
        img_alt: {
            type: String,
            default: "",
        },
        p: {
            type: String,
            default: "",
        },
        callback: {
            type: Function,
        }

    },
    methods: {
        onClick: function() {
            // this.item_list = this.item_list.filter((value) => {
            //     return value === this.tag;
            // });
            // console.log(this.item_list)
            this.callback(this.p);
        },
    }

}
</script>



<style scoped>
.item_container {
    min-width: 100px;
    max-width: 100px;
	height: 100px;
	padding: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 25px;
    font-weight: 600;
    outline: 1px solid #808080;
    box-shadow: inset 0 0 0 0 #B1DD9E;
    transition: ease-out 0.4s;

}

.item_container:hover {
    box-shadow: inset 140px 0 0 0 #B1DD9E;
    background-color: #B1DD9E;
}

.active {
    background-color: #91f086;
}

img {
    width: 100%;
    height: 60%; 
    object-fit: contain;
}
</style>