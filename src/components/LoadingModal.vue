<template>
    <div v-if="show_modal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded">
                            <div class="modal-body">
                               <img v-bind:src="require('@/assets/loading.gif')">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    name: 'LoadingModal',
    data() {
        return {
            show_modal: false
        }
    },
    methods: {
        startLoadingHandler: function() {
            this.show_modal = true
        },
        endLoadingHandler: function() {
            this.show_modal = false
        }
    },
    created () {
        this.emitter.on("startLoading", this.startLoadingHandler)
        this.emitter.on("endLoading", this.endLoadingHandler)
    },
    unmounted () {
        this.emitter.off("startLoading", this.startLoadingHandler)
        this.emitter.off("endLoading", this.endLoadingHandler)
    }
}
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-content, .modal-body  {
    background: none;
    border: none
}

.modal-body img {
    width: 100%;
}
</style>