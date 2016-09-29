var flag = true;
Page({
  data:{
    // text:"这是一个页面"
    color: "window"  
  },
  click:function(){
    console.log("点击了文字");
      if(flag){
        color = "window-red";
        flag = false;
      }else{
        color = "window";
        flag = true;
      }

     console.log(color);
      this.setData({
        color
      });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("Page OnLoad");
  },
  onReady:function(){
    // 页面渲染完成
    console.log("Page onReady");
  },
  onShow:function(){
    // 页面显示
    console.log("Page onShow");
  },
  onHide:function(){
    // 页面隐藏
    console.log("Page onHide");
  },
  onUnload:function(){
    // 页面关闭
    console.log("Page onUnload");
  }
})