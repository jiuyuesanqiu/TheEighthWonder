Component({
  properties: {
    url:String,
    icon: String,
    title:String,
    border:{
      type:Boolean,
      value:true
    }
  },
  methods:{
    onClick(){
      wx.navigateTo({
        url:this.data.url
      })
    }
  }
})
