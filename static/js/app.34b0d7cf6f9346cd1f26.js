webpackJsonp([5],{0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"991W":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),o=n.n(i),s=n("7+uW"),l={name:"App",data:function(){return{}},created:function(){imToken.callAPI("user.getCurrentAccount",function(t,e){t?imToken.callAPI("native.toastInfo","获取钱包信息失败，请稍后重试"):(alert(e),sessionStorage.setItem("walletAddress",e))})},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bbt-container",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("Vn1e")},null,null).exports,d=n("/ocq");s.default.use(d.a);var p=new d.a({routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"vkyI"))}},{path:"/withdraw",name:"withdraw",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"HNRI"))}},{path:"/updateWithdraw",name:"updateWithdraw",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"EuXa"))}}],scrollBehavior:function(t,e,n){return n||void 0===n?n||void 0:{x:0,y:0}}});p.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()});var m=p,h=(n("991W"),n("RFxO"),n("WHFa"),n("C4MV")),f=n.n(h);!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||f()(t,e,{configurable:!1,enumerable:!0,get:a})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e){!function(t,e){function n(){var e=i.getBoundingClientRect().width;e/l>540&&(e=540*l);var n=e/10;i.style.fontSize=n+"px",u.rem=t.rem=n}var a,r=t.document,i=r.documentElement,o=r.querySelector('meta[name="viewport"]'),s=r.querySelector('meta[name="flexible"]'),l=0,c=0,u=e.flexible||(e.flexible={});if(o){var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),l=parseInt(1/c))}else if(s){var p=s.getAttribute("content");if(p){var m=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);m&&(l=parseFloat(m[1]),c=parseFloat((1/l).toFixed(2))),h&&(l=parseFloat(h[1]),c=parseFloat((1/l).toFixed(2)))}}if(!l&&!c){var f=t.navigator.userAgent,x=(f.match(/android/gi),!!f.match(/iphone/gi)),b=x&&!!f.match(/OS 9_3/),v=t.devicePixelRatio;c=1/(l=x&&!b?v>=3&&(!l||l>=3)?3:v>=2&&(!l||l>=2)?2:1:1)}if(i.setAttribute("data-dpr",l),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(o);else{var g=r.createElement("div");g.appendChild(o),r.write(g.innerHTML)}t.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(a),a=setTimeout(n,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*l+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*l+"px"},!1),n(),u.dpr=t.dpr=l,u.refreshRem=n,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}]);n("UP2o"),n("j1ja");var x=n("v5o6"),b=n.n(x),v=n("Dd8w"),g=n.n(v),T=n("TXmL"),w=n("lbHh"),y=n.n(w),B=n("wUZ8"),A=n.n(B),M=n("Vi3T"),E=n.n(M),I={en:g()({},{home:{bannerTit1:"Explore Business Value",bannerTit2:"Remodel Digital Economy",title:"Current burning ratio",sendBtn:"Send ETH",sendBtn1:"Send BBT",exchangeBtn:"Token Exchange",settleBtn:"Settle",withdrawBtn:"withdraw",invitationBtn:"My invitiation link",tabTxt1:"Earnings",tabTxt2:"Performance",tabTxt3:"Data",earningsTxt1:"node level",earningsTxt2:"VIP Level",earningsTxt3:"Daily earnings",earningsTxt4:"Weighted bonus",earningsTxt5:"Accumulated earnings",earningsTxt6:"Dynamic earnings",earningsTxt7:"Static earnings",earningsTxt8:"Balance",resultsTxt1:"Shared IDs",resultsTxt2:"All",resultsTxt3:"Main",dataTxt:"Token burning rate",addressIpt:"Please enter the invitee's wallet address",amountIpt:"Please enter the withdrawal amount",homeTips:"Please use imToken browser to open it."},withdraw:{withdrawWallet:"Multi-coin wallets",listTxt1:"Gas price",listTxt2:"Gas limite",listTxt3:"Transaction data (optional)",internetFee:"Internet fee",statistical:"Maximum",balanceBtn:"Insufficient ETH amount",saveBtn:"Save",settingBtn:"Setting"},tips:{},mask:{title:"Token",maskBtn:"Trading"}},A.a),zh:g()({},{home:{bannerTit1:"挖掘商业价值",bannerTit2:"重塑数字经济",title:"当前燃烧比例",sendBtn:"发送 ETH",sendBtn1:"发送 BBT",exchangeBtn:"兑换令牌",settleBtn:"结算静态收益",withdrawBtn:"提币",invitationBtn:"我的邀请链接",tabTxt1:"收益",tabTxt2:"业绩",tabTxt3:"数据",earningsTxt1:"节点级别",earningsTxt2:"VIP级别",earningsTxt3:"当日收益",earningsTxt5:"累计收益",earningsTxt4:"加权分红",earningsTxt6:"动态收益",earningsTxt7:"静态收益",earningsTxt8:"可提现余额",resultsTxt1:"分享ID数",resultsTxt2:"全体",resultsTxt3:"主干",dataTxt:"令牌销毁比例",addressIpt:"请输入被邀请人钱包地址",amountIpt:"请输入提现金额",homeTips:"请使用imToken浏览器打开使用"},withdraw:{withdrawWallet:"多币种钱包",listTxt1:"Gas 价格",listTxt2:"Gas 限制",listTxt3:"交易数据（可选）",internetFee:"网费",statistical:"最大总计",balanceBtn:"ETH 余额不足",saveBtn:"保存",settingBtn:"设置"},mask:{title:"令牌",maskBtn:"买卖"}},E.a)};s.default.use(T.a);var k,S=new T.a({locale:y.a.get("LANG")||"en",messages:I}),F=n("zL8q"),N=n.n(F),P=n("mtWM"),C=n.n(P),W=n("mw3O"),H=n.n(W),_=function(t){var e=0;try{var n=(t=Number(t)).toString().toUpperCase();if(2===n.split("E").length){var a=!1;2===n.split(".").length&&(n=n.split(".")[1],0!==parseInt(n.split("E")[0])&&(a=!0));var r=n.split("E");a&&(e=r[0].length),e-=parseInt(r[1])}else 2===n.split(".").length&&0!==parseInt(n.split(".")[1])&&(e=n.split(".")[1].length)}catch(t){throw t}finally{return(isNaN(e)||e<0)&&(e=0),e}},D=function(t){t=Number(t);var e=_(t),n=t.toString().toUpperCase();return 2===n.split("E").length?Math.round(t*Math.pow(10,e)):Number(n.replace(".",""))},L=function(t,e,n,a){var r=0;switch(t){case"add":r=e+n;break;case"sub":r=e-n;break;case"div":r=e/n;break;case"mul":r=e*n}return Math.abs(a-r)>1?r:a},O={accAdd:function(t,e){var n,a,r;t=Number(t),e=Number(e);try{n=_(t)+1}catch(t){n=0}try{a=_(e)+1}catch(t){a=0}r=Math.pow(10,Math.max(n,a));var i=(this.accMul(t,r)+this.accMul(e,r))/r;return L("add",t,e,i)},accSub:function(t,e){var n,a,r;t=Number(t),e=Number(e);try{n=_(t)+1}catch(t){n=0}try{a=_(e)+1}catch(t){a=0}r=Math.pow(10,Math.max(n,a));var i=Number((this.accMul(t,r)-this.accMul(e,r))/r);return L("sub",t,e,i)},accDiv:function(t,e){t=Number(t),e=Number(e);var n,a,r=0,i=0;try{r=_(t)}catch(t){}try{i=_(e)}catch(t){}n=D(t),a=D(e);var o=this.accMul(n/a,Math.pow(10,i-r));return L("div",t,e,o)},accMul:function(t,e){t=Number(t),e=Number(e);var n=0,a=t.toString(),r=e.toString();try{n+=_(a)}catch(t){}try{n+=_(r)}catch(t){}var i=D(a)*D(r)/Math.pow(10,n);return L("mul",t,e,i)}},j=this;s.default.prototype.cal=O,s.default.prototype.$axios=C.a,s.default.prototype.qs=H.a,s.default.use(N.a,{i18n:function(t,e){return S.t(t,e)}}),b.a.attach(document.body),s.default.config.productionTip=!1,s.default.prototype.getInfo=(k=o()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:j.$axios.post(_const.url+"/aceWeb/operateBtt/operateAccount",j.qs.stringify({address:e})).then(function(t){var e=t.data.data;return console.log(e),console.log("返回信息结束"),e}).catch(function(t){imToken.callAPI("native.toastInfo","系统错误，请稍后重试..."),console.log(t)});case 1:case"end":return t.stop()}},t,j)})),function(t){return k.apply(this,arguments)}),new s.default({el:"#app",router:m,i18n:S,components:{App:u},template:"<App/>"}).$mount("#app")},RFxO:function(t,e){},UP2o:function(t,e){!function(t,e){for(var n in void 0===window[e]&&(window[e]={}),t)window[e][n]=t[n]}({url:"https://dapp.bbtchain.net/apis",urlLink:"https://aceluodan.github.io/web3jAce-front/dist/index.html",contractAddress:"0xCaFB789D00A0E5855F9521d1e589ed437554CaA1",bbtAddress:"0x9506dc8197222189C0A85442Ed93A5066209aA50",ethAddress:"0xb0d91a9e2ca9b3555769df828e46e1f6b01733ff"},"_const")},Vn1e:function(t,e){},WHFa:function(t,e){}},[0]);