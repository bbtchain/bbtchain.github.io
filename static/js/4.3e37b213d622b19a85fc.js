webpackJsonp([4],{"2NXm":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"",components:{},props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{getWalletAddress:function(){imToken.callAPI("user.getCurrentAccount",function(t,e){t?imToken.callAPI("native.toastInfo","授权获取地址失败，请重新获取"):(alert("获取成功"),sessionStorage.setItem("address",e),this.$router.push({path:"/home"}),alert("获取结束"))})}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("button",{attrs:{type:"button"},on:{click:this.getWalletAddress}},[this._v("获取当前钱包地址")])])},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("YBL+")},"data-v-7d7c4ba4",null);e.default=r.exports},"YBL+":function(t,e){}});