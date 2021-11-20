<template>
    <div v-if="show_modal">
        <transition name="modal">

            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <h5 aria-hidden="true" @click="confirmLeave(false)">&times;</h5>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h5>Are you sure you want to leave this page?</h5>
                                <h6>If you leave now, your order will be cancelled.</h6>
                            </div>

                            <div class="modal-footer">
                                <button 
                                    type="button" 
                                    class="btn btn-primary"
                                    @click="confirmLeave(true)"
                                >
                                <h6 class="m-auto">Leave</h6>
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-secondary"
                                    @click="confirmLeave(false)"
                                >
                                <h6 class="m-auto">Cancel</h6>
                                </button>
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
    name: 'LeaveConfirmModal',
    data () {
        return {
            show_modal: false,
        }
    },
    methods: {
        showLeaveConfirmHandler: function(){
            this.show_modal = true
        },
        confirmLeave: function(option) {
            this.show_modal = false
            this.emitter.emit("confirmLeave", option)
        }
    },
    created () {
        this.emitter.on("showLeaveConfirm", this.showLeaveConfirmHandler)
    },
    unmounted () {
        this.emitter.off("showLeaveConfirm", this.showLeaveConfirmHandler)
    }
}
</script>


<style scoped>
.rounded {
    border-radius: .60em!important;
}

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

.modal-content {
    padding: 2% 3% 2% 3%;
}

.modal-header {
    border: none;
}

.modal-header .close {
    margin-left: auto;
    padding: 0;
    background: none;
    border: none;
    font-weight: bold;
}

.modal-body {
    margin-bottom: 5%;
}

.modal-body h5, .modal-body h6 {
    color: #2c3a57;
}

.modal-body h5 {
    font-weight: bold;
}

@media only screen and (max-width: 420px){
    h5 {
       font-size: 18px;
    }
    h6 {
       font-size: 12px;
    }
}
@media only screen and (min-width: 421px) and (max-width: 575px){
    h5 {
       font-size: 20px;
    }
    h6 {
       font-size: 14px;
    }
}
@media only screen and (min-width: 576px) and (max-width: 767px){
    h5 {
       font-size: 22px;
    }
    h6 {
       font-size: 16px;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px){
    h5 {
       font-size: 22px;
    }
    h6 {
       font-size: 16px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    h5 {
       font-size: 24px;
    }
    h6 {
       font-size: 18px;
    }
}
@media only screen and (min-width: 1200px){
     h5 {
       font-size: 26px;
    }
    h6 {
       font-size: 20px;
    }
}
</style>