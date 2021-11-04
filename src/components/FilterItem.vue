<template>
    <div class = "item_container col-sm" v-bind:class="{ active: isActive }" @click="onClick">
        <img v-bind:src = "img_src" v-bind:alt = "img_alt"/>
        <p>{{tag}}</p>
    </div>
</template>

<script>
export default {
    name: 'FilterItem',

    props: {
        img_src: {
            type: String,
            default: "",
        },
        img_alt: {
            type: String,
            default: "",
        },
        tag: {
            type: String,
            default: "",
        },
        callback: {
            type: Function,
        },
        isActive: {
            type: Boolean,
            default: false
        },
        changeColor: {
            type: Function
        },
        id: {
            type: Number
        }
    },
    methods: {
        onClick: function() {
            this.changeColor(this.id)
            this.callback(this.tag);
        },
    }

}
</script>



<style scoped>
.item_container {
    max-width: 160px;
    min-width: 100px;
    max-height: 100px;
	padding: 20px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600;
    box-shadow: inset 0 0 0 1pt #808080;
    transition: ease-out 0.4s;
    word-break: break-all;
    border-radius: 10px;
    border-collapse: separate; 
}

.item_container:hover {
    box-shadow: inset 140px 0 0 0 #FFFF00;
    background-color: #FFFF00;
}

.item_container_red:hover {
    box-shadow: inset 140px 0 0 0 #FFC2CD;
    background-color: #FFC2CD;
}

.active {
    background-color: #91f086;
}

img {
    width: 100%;
    height: 60%; 
    object-fit: contain;
    margin-bottom: 5px;
}
@media screen and (min-width: 1551px) {
    p {
        font-size: 18px;
    }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 1550px) {
    p {
        font-size: 10px;
    }
}
</style>