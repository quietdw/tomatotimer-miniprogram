Component({
  properties:{
    visible:{
      type:Boolean,
      value:false
    },
    placeholder: {
      type: String,
      value: ''
    },
    _value:{
      type:String,
      value:''
    }
  },
  data:{
    message:''
  }
  ,
  methods:{
    onConfirm(){
      this.triggerEvent('confirm', this.data.message)
      this.data.message = ''
    },
    onCancle(){
      this.triggerEvent('cancle')
    },
    onInput(e){
      this.data.message = e.detail.value
    }
  }
})