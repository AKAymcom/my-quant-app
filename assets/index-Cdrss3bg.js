var Ne=Object.defineProperty;var We=(P,l,h)=>l in P?Ne(P,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):P[l]=h;var E=(P,l,h)=>We(P,typeof l!="symbol"?l+"":l,h);import{d as Me,o as Ae,a as Le,w as Z,b as g,c as m,e,n as H,f as D,t as S,g as te,v as he,h as Se,i as Q,F as Ve,r as Oe,j as v,k as we,l as Ee,m as Be,p as Ce,q as ze,s as Ke}from"./vendor-vue-DxO1aeAH.js";import{a as je,G as qe,L as Je,Q as Ze,C as Te,K as Qe,$ as Ye}from"./vendor-charts-Cduodv0X.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const y of i)if(y.type==="childList")for(const V of y.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&u(V)}).observe(document,{childList:!0,subtree:!0});function h(i){const y={};return i.integrity&&(y.integrity=i.integrity),i.referrerPolicy&&(y.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?y.credentials="include":i.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(i){if(i.ep)return;i.ep=!0;const y=h(i);fetch(i.href,y)}})();const Xe={class:"kline-chart-wrapper"},et={class:"trendline-toolbar"},tt=["disabled"],ot=["disabled"],st={key:0,class:"tl-hint"},at={key:1,class:"tl-hint tl-hint--active"},nt={key:2,class:"tl-count"},lt=["width","height"],rt=["x1","y1","x2","y2","stroke","stroke-dasharray"],ct=["cx","cy","fill"],it=["cx","cy","fill"],ut={key:0},dt=["x1","y1","x2","y2","stroke"],pt=["cx","cy","fill"],ht=["cx","cy","fill"],ft=["cx","cy","fill"],me=20,vt=2,gt=Me({__name:"KLineChart",props:{kData:{},markers:{default:()=>[]},theme:{default:"dark"},upColor:{default:"#26a69a"},downColor:{default:"#ef5350"},showMA:{default:()=>({ma5:!0,ma10:!0,ma20:!0})},showVolume:{type:Boolean,default:!0},showOBV:{type:Boolean,default:!1},showVolCircle:{type:Boolean,default:!0},showMarketBubble:{type:Boolean,default:!0}},setup(P){const l=P,h=v(null);let u=null,i=null,y=null,V=null,R=null,B=null,c=null,L=null,p=null,k=null,N=null;const C=v(!1),x=v(null),w=v(null),G=v([]),j=v({width:0,height:0}),U=v("#FFD700"),Y=v("dashed");function _(t){return t<10?8:t<50?14:22}function M(t){return t<10?9:t<50?11:13}class W{constructor(o,n,a,d){E(this,"_points");E(this,"_series");E(this,"_chart");E(this,"_visible");this._points=o,this._series=n,this._chart=a,this._visible=d}draw(o){!this._visible||!this._series||!this._chart||o.useBitmapCoordinateSpace(n=>{const a=n.context,d=n.horizontalPixelRatio;for(const b of this._points){const q=this._chart.timeScale().timeToCoordinate(b.time);if(q===null)continue;const J=q*d,re=this._series.priceToCoordinate(b.price);if(re===null)continue;const ve=re*n.verticalPixelRatio,ee=_(b.amount)*d,pe=M(b.amount)*d,ge=b.side==="buy",K=b.side==="cover";let I,A;b.isMarket?b.side==="buy"?(I="rgba(41,182,246,0.20)",A="#29b6f6"):(I="rgba(255,112,67,0.20)",A="#ff7043"):b.side==="buy"?(I="rgba(0,230,118,0.18)",A="#00e676"):b.side==="sell"?(I="rgba(255,82,82,0.18)",A="#ff5252"):b.side==="short"?(I="rgba(255,152,0,0.18)",A="#ff9800"):(I="rgba(0,229,255,0.18)",A="#00e5ff");const Pe=ge||K?ee+4*d:-(ee+4*d),_e=ve+Pe;a.save(),a.beginPath(),a.arc(J,_e,ee,0,Math.PI*2),a.fillStyle=I,a.fill(),a.lineWidth=1.5*d,a.strokeStyle=A,a.stroke(),a.shadowColor=A,a.shadowBlur=6*d,a.beginPath(),a.arc(J,_e,ee,0,Math.PI*2),a.strokeStyle=A,a.lineWidth=.8*d,a.stroke(),a.shadowBlur=0;const Ue=b.label.length>8?b.label.slice(0,8):b.label;if(a.font=`bold ${pe}px sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillStyle=A,a.fillText(Ue,J,_e),b.subLabel){const xe=Math.max(8,pe*.85);a.font=`${xe}px sans-serif`,a.fillStyle=A,a.globalAlpha=.85;const He=ge||K?ee+xe+2*d:-(ee+xe+2*d);a.fillText(b.subLabel,J,ve+He),a.globalAlpha=1}a.restore()}})}}class X{constructor(o){E(this,"_renderer");this._renderer=o}zOrder(){return"top"}renderer(){return this._renderer}}class se{constructor(){E(this,"_points",[]);E(this,"_visible",!0);E(this,"_attachedSeries",null);E(this,"_attachedChart",null);E(this,"_paneView",null)}attached(o){this._attachedChart=o.chart,this._attachedSeries=o.series,this._rebuildView()}detached(){this._attachedChart=null,this._attachedSeries=null,this._paneView=null}updateAllViews(){this._rebuildView()}paneViews(){return this._paneView?[this._paneView]:[]}setPoints(o){this._points=o,this._rebuildView()}setVisible(o){this._visible=o,this._rebuildView()}_rebuildView(){const o=new W(this._points,this._attachedSeries,this._attachedChart,this._visible);this._paneView=new X(o)}}function z(t){if(typeof t=="number"||/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const o=t.replace(" ","T")+"Z",n=Date.parse(o);return isNaN(n)?t:Math.floor(n/1e3)}function ae(t){if(typeof t=="number")return t;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return Math.floor(Date.parse(t+"T00:00:00Z")/1e3);const o=t.replace(" ","T")+"Z",n=Date.parse(o);return isNaN(n)?0:Math.floor(n/1e3)}function be(t){return t.startsWith("多买")?"buy":t.startsWith("多平")?"sell":t.startsWith("空开")?"short":"cover"}function ce(t){return t.filter(o=>o.time!==void 0&&o.time!==null&&o.time!=="").map(o=>{const n=be(o.text),a=o.amount>=1?o.amount.toFixed(2):o.amount.toFixed(4);let d;return n==="buy"?d=`LONG ${a}`:n==="short"?d=`SHORT ${a}`:d=`CLOSE ${a}`,{time:ae(o.time),price:o.price,amount:o.amount,side:n,label:d}})}function ne(t){if(t.length<me+1)return[];const o=[];for(let n=me;n<t.length;n++){const a=t[n];if(!a.volume||a.volume<=0)continue;let d=0;for(let A=n-me;A<n;A++)d+=(t[A].volume??t[A].revenue)||0;const b=d/me;if(b<=0)continue;const q=a.volume/b;if(q<vt)continue;let J;q>=5?J=80:q>=3?J=25:J=5;const re=a.close>=a.open,ve=re?"buy":"sell",ee=re?a.high:a.low,pe=q>=10?`×${Math.round(q)}`:`×${q.toFixed(1)}`,ge=re?`买${pe}`:`卖${pe}`,K=a.volume;let I;K>=1e4?I=`${(K/1e4).toFixed(1)}万枚`:K>=1e3?I=`${(K/1e3).toFixed(2)}K枚`:K>=1?I=`${K.toFixed(1)}枚`:I=`${K.toFixed(3)}枚`,o.push({time:ae(a.time),price:ee,amount:J,side:ve,label:ge,subLabel:I,isMarket:!0})}return o}function fe(t,o,n){const a=n==="dark";return{width:t,height:o,layout:{background:{type:Ye.Solid,color:a?"#1a1a2e":"#ffffff"},textColor:a?"#d1d4dc":"#333333"},grid:{vertLines:{color:a?"#2a2a4a":"#e0e0e0"},horzLines:{color:a?"#2a2a4a":"#e0e0e0"}},crosshair:{mode:Qe.Normal,vertLine:{color:a?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:a?"#4c525e":"#e0e3eb"},horzLine:{color:a?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:a?"#4c525e":"#e0e3eb"}},rightPriceScale:{borderColor:a?"#485c7b":"#cccccc"},timeScale:{borderColor:a?"#485c7b":"#cccccc",timeVisible:!0,secondsVisible:!1,rightOffset:5,barSpacing:8,minBarSpacing:2},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0}}}function ie(t,o){return{upColor:t,downColor:o,borderUpColor:t,borderDownColor:o,wickUpColor:t,wickDownColor:o}}const le=[{period:5,color:"#f6c90e",key:"ma5"},{period:10,color:"#2196f3",key:"ma10"},{period:20,color:"#e040fb",key:"ma20"}];function ye(t,o){const n=[];for(let a=o-1;a<t.length;a++){let d=0;for(let b=a-o+1;b<=a;b++)d+=t[b].close;n.push({time:z(t[a].time),value:d/o})}return n}function ue(t,o){return u.addSeries(Te,{color:t,lineWidth:1,priceLineVisible:!1,lastValueVisible:!0,crosshairMarkerVisible:!0,visible:o})}function de(t){if(!u)return;const o=le.map(n=>({series:n.key==="ma5"?V:n.key==="ma10"?R:B,data:ye(t,n.period)}));for(const{series:n,data:a}of o)n&&n.setData(a)}function O(t,o){const n=t.trim();if(n.startsWith("#")){let a,d,b;if(n.length===7)a=parseInt(n.slice(1,3),16),d=parseInt(n.slice(3,5),16),b=parseInt(n.slice(5,7),16);else if(n.length===4)a=parseInt(n[1]+n[1],16),d=parseInt(n[2]+n[2],16),b=parseInt(n[3]+n[3],16);else return n;return`rgba(${a},${d},${b},${o})`}return n}function s(t,o,n){return t.map(a=>({time:z(a.time),value:a.revenue,color:a.close>=a.open?O(o,.7):O(n,.7)}))}function r(t){const o=[];let n=0;for(let a=0;a<t.length;a++)a===0?n=t[a].revenue:n+=t[a].close>=t[a-1].close?t[a].revenue:-t[a].revenue,o.push({time:z(t[a].time),value:n});return o}function $(t){return t.map(o=>typeof o.time!="string"&&typeof o.time!="number"||typeof o.open!="number"||typeof o.high!="number"||typeof o.low!="number"||typeof o.close!="number"?null:{time:z(o.time),open:o.open,high:o.high,low:o.low,close:o.close}).filter(o=>o!==null)}function F(t){return t.map(o=>o.time===void 0||o.time===null||o.time===""?null:{time:z(o.time),position:o.position,color:o.color,shape:o.shape,text:o.text}).filter(o=>o!==null).sort((o,n)=>o.time-n.time)}function f(){const t=h.value;if(!t)return;const o=t.clientWidth||800,n=t.clientHeight||500;u=je(t,fe(o,n,l.theme)),i=u.addSeries(qe,ie(l.upColor,l.downColor)),y=Je(i,[]),p=new se,i.attachPrimitive(p),p.setVisible(l.showVolCircle),k=new se,i.attachPrimitive(k),k.setVisible(l.showMarketBubble),V=ue(le[0].color,l.showMA.ma5),R=ue(le[1].color,l.showMA.ma10),B=ue(le[2].color,l.showMA.ma20),c=u.addSeries(Ze,{priceFormat:{type:"volume"},priceScaleId:"vol",lastValueVisible:!1,priceLineVisible:!1,visible:l.showVolume},1),u.priceScale("vol",1).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),L=u.addSeries(Te,{color:"#ff9800",lineWidth:1,priceScaleId:"obv",lastValueVisible:!1,priceLineVisible:!1,crosshairMarkerVisible:!0,visible:l.showOBV},2),u.priceScale("obv",2).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),l.kData&&l.kData.length>0&&(i.setData($(l.kData)),de(l.kData),c.setData(s(l.kData,l.upColor,l.downColor)),L.setData(r(l.kData)),k.setPoints(ne(l.kData)),u.timeScale().fitContent()),l.markers&&l.markers.length>0&&(y.setMarkers(F(l.markers)),p.setPoints(ce(l.markers)))}function oe(){C.value=!C.value,x.value=null,w.value=null,h.value&&(h.value.style.cursor=C.value?"crosshair":"default")}function T(t){const o=h.value;if(!o)return null;const n=o.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}function De(t){if(!C.value)return;const o=T(t);o&&(x.value?(G.value.push({x1:x.value.x,y1:x.value.y,x2:o.x,y2:o.y,color:U.value,style:Y.value}),x.value=null,w.value=null):(x.value=o,w.value=o))}function Re(t){if(!C.value||!x.value)return;const o=T(t);o&&(w.value=o)}function Ge(){G.value.pop()}function $e(){G.value=[],x.value=null,w.value=null}function Fe(){const t=h.value;t&&(j.value={width:t.clientWidth,height:t.clientHeight})}function Ie(){const t=h.value;!t||!u||(N=new ResizeObserver(o=>{for(const n of o){const{width:a,height:d}=n.contentRect;u&&a>0&&d>0&&(u.applyOptions({width:a,height:d}),j.value={width:a,height:d})}}),N.observe(t))}Ae(()=>{f(),Ie(),Fe()}),Le(()=>{if(N&&(N.disconnect(),N=null),i&&p)try{i.detachPrimitive(p)}catch{}if(i&&k)try{i.detachPrimitive(k)}catch{}u&&(u.remove(),u=null,i=null,y=null,p=null,k=null,V=null,R=null,B=null,c=null,L=null)});let ke=0;return Z(()=>l.kData,(t,o)=>{if(!i||!u)return;if(!t||t.length===0){i.setData([]),c==null||c.setData([]),L==null||L.setData([]),k==null||k.setPoints([]),ke=0;return}i.setData($(t)),de(t),c==null||c.setData(s(t,l.upColor,l.downColor)),L==null||L.setData(r(t)),t.length!==ke&&(k==null||k.setPoints(ne(t)),ke=t.length),(!o||o.length===0)&&u.timeScale().fitContent(),y&&(l.markers&&l.markers.length>0?(y.setMarkers(F(l.markers)),p==null||p.setPoints(ce(l.markers))):(y.setMarkers([]),p==null||p.setPoints([])))},{deep:!0}),Z(()=>l.markers,t=>{if(i){if(!t||t.length===0){y==null||y.setMarkers([]),p==null||p.setPoints([]);return}y==null||y.setMarkers(F(t)),p==null||p.setPoints(ce(t))}},{deep:!0}),Z(()=>l.theme,t=>{if(!u||!h.value)return;const o=h.value;u.applyOptions(fe(o.clientWidth,o.clientHeight,t))}),Z(()=>[l.upColor,l.downColor],([t,o])=>{i&&(i.applyOptions(ie(t,o)),l.kData&&l.kData.length>0&&(c==null||c.setData(s(l.kData,t,o))))}),Z(()=>l.showMA,t=>{V==null||V.applyOptions({visible:t.ma5}),R==null||R.applyOptions({visible:t.ma10}),B==null||B.applyOptions({visible:t.ma20})},{deep:!0}),Z(()=>l.showVolume,t=>{c==null||c.applyOptions({visible:t})}),Z(()=>l.showOBV,t=>{L==null||L.applyOptions({visible:t})}),Z(()=>l.showVolCircle,t=>{p==null||p.setVisible(t),u&&u.applyOptions({})}),Z(()=>l.showMarketBubble,t=>{k==null||k.setVisible(t),u&&u.applyOptions({})}),(t,o)=>(g(),m("div",Xe,[e("div",et,[e("button",{class:H(["tl-btn",{"tl-btn--active":C.value}]),title:"画趋势线（点击两个点确定一条线）",onClick:oe},[o[2]||(o[2]=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("line",{x1:"2",y1:"13",x2:"14",y2:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),e("circle",{cx:"2",cy:"13",r:"2",fill:"currentColor"}),e("circle",{cx:"14",cy:"3",r:"2",fill:"currentColor"})],-1)),D(" "+S(C.value?"取消画线":"画趋势线"),1)],2),te(e("select",{"onUpdate:modelValue":o[0]||(o[0]=n=>U.value=n),class:"tl-color-select",title:"线条颜色"},[...o[3]||(o[3]=[Se('<option value="#FFD700" data-v-3bcf60a0>金色</option><option value="#ff5252" data-v-3bcf60a0>红色</option><option value="#00e676" data-v-3bcf60a0>绿色</option><option value="#29b6f6" data-v-3bcf60a0>蓝色</option><option value="#e040fb" data-v-3bcf60a0>紫色</option><option value="#ffffff" data-v-3bcf60a0>白色</option>',6)])],512),[[he,U.value]]),te(e("select",{"onUpdate:modelValue":o[1]||(o[1]=n=>Y.value=n),class:"tl-style-select",title:"线条样式"},[...o[4]||(o[4]=[e("option",{value:"solid"},"实线",-1),e("option",{value:"dashed"},"虚线",-1),e("option",{value:"dotted"},"点线",-1)])],512),[[he,Y.value]]),e("button",{class:"tl-btn tl-btn--danger",disabled:G.value.length===0,title:"删除最后一条趋势线",onClick:Ge},"撤销",8,tt),e("button",{class:"tl-btn tl-btn--danger",disabled:G.value.length===0,title:"清空所有趋势线",onClick:$e},"清空",8,ot),C.value&&!x.value?(g(),m("span",st,"点击图表选择第一个点")):Q("",!0),C.value&&x.value?(g(),m("span",at,"再点击选择第二个点")):Q("",!0),G.value.length>0&&!C.value?(g(),m("span",nt,S(G.value.length)+" 条线",1)):Q("",!0)]),e("div",{ref_key:"chartContainerRef",ref:h,class:"kline-chart-container",onClick:De,onMousemove:Re},[(g(),m("svg",{class:"trendline-svg",width:j.value.width,height:j.value.height,style:{"pointer-events":"none"}},[(g(!0),m(Ve,null,Oe(G.value,(n,a)=>(g(),m("g",{key:a},[e("line",{x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2,stroke:n.color,"stroke-width":2,"stroke-dasharray":n.style==="dashed"?"8,4":n.style==="dotted"?"2,4":"none","stroke-linecap":"round",opacity:"0.9"},null,8,rt),e("circle",{cx:n.x1,cy:n.y1,r:"4",fill:n.color,opacity:"0.8"},null,8,ct),e("circle",{cx:n.x2,cy:n.y2,r:"4",fill:n.color,opacity:"0.8"},null,8,it)]))),128)),C.value&&x.value&&w.value?(g(),m("g",ut,[e("line",{x1:x.value.x,y1:x.value.y,x2:w.value.x,y2:w.value.y,stroke:U.value,"stroke-width":"1.5","stroke-dasharray":"6,3","stroke-linecap":"round",opacity:"0.6"},null,8,dt),e("circle",{cx:x.value.x,cy:x.value.y,r:"5",fill:U.value,opacity:"0.9"},null,8,pt),e("circle",{cx:w.value.x,cy:w.value.y,r:"3",fill:U.value,opacity:"0.5"},null,8,ht)])):Q("",!0),C.value&&x.value&&!w.value?(g(),m("circle",{key:1,cx:x.value.x,cy:x.value.y,r:"5",fill:U.value,opacity:"0.9"},null,8,ft)):Q("",!0)],8,lt))],544)]))}}),mt=(P,l)=>{const h=P.__vccOpts||P;for(const[u,i]of l)h[u]=i;return h},bt=mt(gt,[["__scopeId","data-v-3bcf60a0"]]),yt={class:"quant-app"},kt={class:"topbar"},_t={class:"topbar-center"},xt={key:0,class:"data-loading-badge"},wt={key:1,class:"data-error-badge"},St={key:2,class:"data-success-badge"},Bt={key:0,class:"ws-live-dot",title:"WebSocket 实时行情已连接"},Ct={key:3,class:"data-idle-badge"},Tt={class:"topbar-status"},Mt={class:"status-text"},At={class:"main-layout"},Lt={class:"sidebar sidebar--left"},Vt={class:"card"},Ot={class:"card-body"},Dt={class:"form-group"},Rt=["disabled"],Gt={class:"form-group"},$t=["disabled"],Ft=["disabled"],It={key:0,class:"btn-spinner"},Pt={key:1},Ut={class:"card"},Ht={class:"card-body"},Nt={class:"form-group"},Wt=["disabled"],Et={class:"form-group"},zt=["disabled"],Kt={class:"form-group"},jt=["disabled"],qt=["disabled"],Jt={key:0,class:"btn-spinner"},Zt={key:1},Qt=["disabled"],Yt={class:"card card--grow"},Xt={class:"card-body card-body--stretch"},eo=["disabled"],to={class:"chart-area"},oo={class:"chart-area-header"},so={class:"chart-symbol"},ao={class:"chart-period"},no={class:"chart-bars-count"},lo={key:0,class:"chart-data-badge chart-data-badge--live"},ro={key:1,class:"chart-data-badge chart-data-badge--live"},co={key:2,class:"chart-data-badge chart-data-badge--loading"},io={key:3,class:"chart-data-badge chart-data-badge--mock"},uo={class:"ma-toggle-group"},po={class:"ma-toggle-group"},ho={class:"chart-wrapper"},fo={class:"sidebar sidebar--right"},vo={class:"card"},go={class:"card-body"},mo={class:"stat-grid"},bo={class:"stat-item"},yo={class:"stat-value"},ko={class:"stat-item"},_o={class:"stat-item"},xo={class:"stat-item"},wo={class:"stat-value stat-value--warning"},So={class:"stat-item"},Bo={class:"stat-value"},Co={class:"stat-item"},To={class:"stat-value"},Mo={class:"card card--grow"},Ao={class:"card-header"},Lo={class:"card-header-badge"},Vo={class:"card-body card-body--stretch card-body--no-padding"},Oo={key:0,class:"log-error-banner"},Do={key:1,class:"log-empty"},Ro={class:"log-index"},Go={class:"log-text"},$o=Me({__name:"App",setup(P){const l=v("BTCUSDT"),h=v("1h"),u=v(1e4),i=v(1),y=v(1),V=v("momentum"),R=v(""),B=v("idle"),c=v("idle"),L=v(""),p=v(""),k=v([]),N=v([]),C=v([]),x=v(null),w=Be({ma5:!0,ma10:!0,ma20:!0}),G=v(!0),j=v(!1),U=v(!0),Y=v(!0),_=Be({initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null});let M=null,W=null;const X=v(!1);function se(){z();const O=l.value.toLowerCase(),s=h.value,r=`wss://fstream.binance.com/ws/${O}@kline_${s}`;W=new WebSocket(r),W.onopen=()=>{X.value=!0},W.onmessage=$=>{try{const f=JSON.parse($.data).k;if(!f)return;const oe={time:Math.floor(f.t/1e3),open:parseFloat(f.o),high:parseFloat(f.h),low:parseFloat(f.l),close:parseFloat(f.c),volume:parseFloat(f.v),revenue:parseFloat(f.q)},T=k.value;T.length>0&&T[T.length-1].time===oe.time?T.splice(T.length-1,1,oe):T.length>0&&oe.time>T[T.length-1].time&&T.push(oe)}catch{}},W.onclose=()=>{X.value=!1},W.onerror=()=>{X.value=!1}}function z(){W&&(W.onclose=null,W.close(),W=null),X.value=!1}const ae=Ce(()=>({"1m":"1分钟","5m":"5分钟","15m":"15分钟","1h":"1小时","2h":"2小时","4h":"4小时","1d":"日线"})[h.value]??h.value),be=Ce(()=>{switch(c.value){case"running":return"回测运行中...";case"success":return"回测完成";case"error":return"回测出错";default:return"就绪"}});async function ce(O,s,r,$){let F=`https://fapi.binance.com/fapi/v1/klines?symbol=${O}&interval=${s}&limit=${r}`;const f=await fetch(F);if(!f.ok)throw new Error(`HTTP ${f.status}`);return(await f.json()).map(T=>({time:Math.floor(T[0]/1e3),open:parseFloat(T[1]),high:parseFloat(T[2]),low:parseFloat(T[3]),close:parseFloat(T[4]),volume:parseFloat(T[5]),revenue:parseFloat(T[7])}))}async function ne(O,s){z(),B.value="loading",L.value="",k.value=[],N.value=[];try{let r=[];r=await ce(O,s,1500);const $=new Map;for(const F of r)$.set(F.time,F);k.value=Array.from($.values()).sort((F,f)=>F.time-f.time),B.value="success",se()}catch(r){console.error("[loadKline]",r),B.value="error"}}function fe(){ne(l.value,h.value)}function ie(){ne(l.value,h.value)}function le(){const O=V.value;R.value=de[O]??""}function ye(){N.value=[],C.value=[],c.value="idle",p.value="",Object.assign(_,{initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null})}function ue(){if(!R.value.trim()){p.value="请先输入策略代码",c.value="error";return}if(!k.value.length){p.value="请先加载K线数据",c.value="error";return}z(),c.value="running",N.value=[],C.value=[],p.value="",M&&M.terminate(),M=new Worker(new URL("/my-quant-app/assets/backtest.worker-DMR74fp0.js",import.meta.url),{type:"module"});const O=Date.now();M.onmessage=s=>{const r=s.data,$=Date.now()-O;if(r.success){c.value="success",N.value=r.tradeHistory??[];const F=(r.logs??[]).map(f=>f.includes("🟢")||f.includes("开多")?{type:"buy",text:f}:f.includes("🔴")||f.includes("平多")||f.includes("🟠")||f.includes("开空")||f.includes("🔵")||f.includes("平空")?{type:"sell",text:f}:{type:"info",text:f});C.value=F,Object.assign(_,{initialBalance:r.initialBalance,finalAsset:parseFloat((r.finalAsset??0).toFixed(2)),returnRate:r.returnRate,maxDrawdown:r.maxDrawdown,totalTrades:r.totalTrades,elapsed:$}),ze(()=>{x.value&&(x.value.scrollTop=x.value.scrollHeight)})}else c.value="error",p.value=r.error??"未知错误";se(),M==null||M.terminate(),M=null},M.onerror=s=>{c.value="error",p.value=s.message??"Worker 崩溃",se(),M=null},M.postMessage({code:R.value,kData:JSON.parse(JSON.stringify(k.value)),initialBalance:u.value,lookbackDays:y.value,orderAmount:i.value})}const de={momentum:`// 动量突破策略
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 20) return;
  const ticker = exchange.GetTicker();
  const account = exchange.GetAccount();
  const price = ticker.Last;
  const amount = exchange.GetOrderAmount();
  const prev20High = Math.max(...records.slice(-20).map(r => r.high));
  if (account.Stocks === 0 && price > prev20High * 0.999) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  } else if (account.Stocks > 0) {
    const entryBar = records[records.length - 20];
    if (price < entryBar.close * 0.97) {
      exchange.Sell(price, account.Stocks);
    }
  }
}`,ma_cross:`// 双均线金叉死叉（MA5/MA10）
function calcMA(records, period) {
  if (records.length < period) return null;
  const slice = records.slice(-period);
  return slice.reduce((s, r) => s + r.close, 0) / period;
}
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 11) return;
  const ma5  = calcMA(records, 5);
  const ma10 = calcMA(records, 10);
  const prevSlice = records.slice(0, -1);
  const pma5  = prevSlice.length >= 5  ? prevSlice.slice(-5).reduce((s,r)=>s+r.close,0)/5  : null;
  const pma10 = prevSlice.length >= 10 ? prevSlice.slice(-10).reduce((s,r)=>s+r.close,0)/10 : null;
  if (!ma5 || !ma10 || !pma5 || !pma10) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const amount = exchange.GetOrderAmount();
  if (pma5 <= pma10 && ma5 > ma10 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (pma5 >= pma10 && ma5 < ma10 && account.Stocks > 0) {
    exchange.Sell(price, account.Stocks);
  }
}`,ma5_ma20_death:`// 双均线金叉死叉（MA5/MA20）
function calcMA(records, period) {
  if (records.length < period) return null;
  return records.slice(-period).reduce((s, r) => s + r.close, 0) / period;
}
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 21) return;
  const ma5  = calcMA(records, 5);
  const ma20 = calcMA(records, 20);
  const prev = records.slice(0, -1);
  const pma5  = prev.length >= 5  ? prev.slice(-5).reduce((s,r)=>s+r.close,0)/5  : null;
  const pma20 = prev.length >= 20 ? prev.slice(-20).reduce((s,r)=>s+r.close,0)/20 : null;
  if (!ma5 || !ma20 || !pma5 || !pma20) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const amount = exchange.GetOrderAmount();
  if (pma5 <= pma20 && ma5 > ma20 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (pma5 >= pma20 && ma5 < ma20 && account.Stocks > 0) {
    exchange.Sell(price, account.Stocks);
  }
}`,rsi:`// RSI 超买超卖反转
function calcRSI(records, period) {
  if (records.length < period + 1) return null;
  const slice = records.slice(-(period + 1));
  let gains = 0, losses = 0;
  for (let i = 1; i < slice.length; i++) {
    const diff = slice[i].close - slice[i - 1].close;
    if (diff > 0) gains += diff; else losses -= diff;
  }
  const rs = losses === 0 ? Infinity : gains / losses;
  return 100 - 100 / (1 + rs);
}
function onTick() {
  const records = exchange.GetRecords();
  const rsi = calcRSI(records, 14);
  if (rsi === null) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const amount = exchange.GetOrderAmount();
  if (rsi < 30 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (rsi > 70 && account.Stocks > 0) {
    exchange.Sell(price, account.Stocks);
  }
}`,rumers:`// Rumers Magic Lines 爆仓线反转
function onTick() {
  const lines = exchange.GetRumersLines();
  if (!lines) return;
  const { high, low } = lines;
  const ticker = exchange.GetTicker();
  const price = ticker.Last;
  const account = exchange.GetAccount();
  const amount = exchange.GetOrderAmount();
  if (price <= low * 1.002 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (price >= high * 0.998 && account.Stocks > 0) {
    exchange.Sell(price, account.Stocks);
  }
}`,smc_ob:`// SMC 订单块回踩做多
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 10) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  // 找最近一次大涨前的最后一根阴线（订单块）
  let obHigh = 0, obLow = 0;
  for (let i = records.length - 3; i >= 1; i--) {
    const cur  = records[i];
    const next = records[i + 1];
    if (cur.close < cur.open && next.close > next.open &&
        (next.close - next.open) > (cur.open - cur.close) * 1.5) {
      obHigh = cur.open;
      obLow  = cur.close;
      break;
    }
  }
  if (obHigh === 0) return;
  const amount = exchange.GetOrderAmount();
  if (price >= obLow * 0.999 && price <= obHigh * 1.001 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0 && price > obHigh * 1.03) {
    exchange.Sell(price, account.Stocks);
  }
}`,smc_ls:`// SMC 流动性猎取反转
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 20) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const recent = records.slice(-20);
  const swingLow = Math.min(...recent.slice(0, -1).map(r => r.low));
  const lastBar  = records[records.length - 1];
  const prevBar  = records[records.length - 2];
  // 扫低（突破摆动低点）后收盘反弹确认
  const amount = exchange.GetOrderAmount();
  if (prevBar.low < swingLow && lastBar.close > prevBar.close &&
      lastBar.close > swingLow && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0 && price > swingLow * 1.02) {
    exchange.Sell(price, account.Stocks);
  }
}`,smc_bos:`// SMC 市场结构突破做多（BOS）
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 15) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const lookback = records.slice(-15, -1);
  const swingHigh = Math.max(...lookback.map(r => r.high));
  const lastBar = records[records.length - 1];
  const amount = exchange.GetOrderAmount();
  if (lastBar.close > swingHigh && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0) {
    const entry = records.find(r => r.high >= swingHigh);
    if (entry && price < entry.close * 0.97) {
      exchange.Sell(price, account.Stocks);
    }
  }
}`,pa_engulf:`// 价格行为 看涨吞没形态
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 3) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const prev = records[records.length - 2];
  const cur  = records[records.length - 1];
  // 看涨吞没：前一根为阴线，当前为阳线且实体完全吞没前根
  const isBearPrev  = prev.close < prev.open;
  const isBullCur   = cur.close  > cur.open;
  const isEngulfing = cur.open < prev.close && cur.close > prev.open;
  const amount = exchange.GetOrderAmount();
  if (isBearPrev && isBullCur && isEngulfing && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0 && price > records[records.length - 1].close * 1.015) {
    exchange.Sell(price, account.Stocks);
  }
}`,pa_pinbar:`// 价格行为 锤子线/针形态（Pin Bar）
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 5) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const bar = records[records.length - 2]; // 前一根已完成K线
  const body       = Math.abs(bar.close - bar.open);
  const totalRange = bar.high - bar.low;
  const lowerWick  = Math.min(bar.open, bar.close) - bar.low;
  if (totalRange === 0) return;
  const amount = exchange.GetOrderAmount();
  // 下影线 >= 实体2倍，且实体 <= 总波动40%
  if (lowerWick >= body * 2 && body <= totalRange * 0.4 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0 && price > bar.close * 1.02) {
    exchange.Sell(price, account.Stocks);
  }
}`,pa_sr:`// 价格行为 支撑阻力反弹（S/R Bounce）
function getSwingLow(records, lookback) {
  const slice = records.slice(-lookback - 1, -1);
  return Math.min(...slice.map(r => r.low));
}
function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 30) return;
  const account = exchange.GetAccount();
  const price = exchange.GetTicker().Last;
  const srLevel = getSwingLow(records, 20);
  const amount = exchange.GetOrderAmount();
  if (price <= srLevel * 1.005 && price >= srLevel * 0.995 && account.Stocks === 0) {
    if (account.Balance >= price * amount) exchange.Buy(price, amount);
  }
  if (account.Stocks > 0 && price > srLevel * 1.02) {
    exchange.Sell(price, account.Stocks);
  }
}`,custom:`// 自定义策略
// 可用 API：
//   exchange.GetRecords()          → Bar[]（已闭合K线）
//   exchange.GetTicker()           → { Last, High, Low, Volume }
//   exchange.GetAccount()          → { Balance, Stocks, ShortStocks }
//   exchange.GetOrderAmount()      → number（面板设置的开仓数量）
//   exchange.GetRumersLines()      → { high, low } | null
//   exchange.Buy(price, amount)    → 做多买入
//   exchange.Sell(price, amount)   → 多头平仓
//   exchange.Short(price, amount)  → 开空
//   exchange.CoverShort(price, amount) → 平空
//   log(...)                       → 写入运行日志

function onTick() {
  const records = exchange.GetRecords();
  if (records.length < 2) return;
  const ticker  = exchange.GetTicker();
  const account = exchange.GetAccount();
  // 在此实现你的策略逻辑
}`};return Ae(()=>{R.value=de.momentum,ne(l.value,h.value)}),Le(()=>{z(),M==null||M.terminate()}),(O,s)=>(g(),m("div",yt,[e("header",kt,[s[15]||(s[15]=e("div",{class:"topbar-brand"},[e("span",{class:"topbar-logo"},"▲"),e("span",{class:"topbar-title"},"量化回测平台"),e("span",{class:"topbar-version"},"v4.0")],-1)),e("div",_t,[B.value==="loading"?(g(),m("div",xt,[s[14]||(s[14]=e("span",{class:"btn-spinner btn-spinner--accent"},null,-1)),D(" "+S(L.value||`正在拉取 ${l.value} ${ae.value} 历史数据...`),1)])):B.value==="error"?(g(),m("div",wt," ⚠ 数据加载失败（已回退至内置模拟数据） ")):B.value==="success"?(g(),m("div",St,[D(" ✓ "+S(k.value.length)+" 根真实K线 · "+S(l.value)+" 永续 · "+S(ae.value)+"（Binance Futures） ",1),X.value?(g(),m("span",Bt,"⬤ LIVE")):Q("",!0)])):(g(),m("div",Ct,"就绪，请选择品种和周期后加载数据"))]),e("div",Tt,[e("span",{class:H(["status-dot",{"status-dot--idle":c.value==="idle","status-dot--running":c.value==="running","status-dot--success":c.value==="success","status-dot--error":c.value==="error"}])},null,2),e("span",Mt,S(be.value),1)])]),e("main",At,[e("aside",Lt,[e("section",Vt,[s[20]||(s[20]=e("div",{class:"card-header"},[e("span",{class:"card-header-icon"},"🌐"),D(" 数据源配置 ")],-1)),e("div",Ot,[e("div",Dt,[s[17]||(s[17]=e("label",{class:"form-label"},"交易品种",-1)),te(e("select",{"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r),class:"form-select",disabled:c.value==="running"||B.value==="loading",onChange:fe},[...s[16]||(s[16]=[e("option",{value:"BTCUSDT"},"BTC/USDT 永续合约",-1),e("option",{value:"ETHUSDT"},"ETH/USDT 永续合约",-1),e("option",{value:"SOLUSDT"},"SOL/USDT 永续合约",-1),e("option",{value:"BNBUSDT"},"BNB/USDT 永续合约",-1)])],40,Rt),[[he,l.value]])]),e("div",Gt,[s[19]||(s[19]=e("label",{class:"form-label"},"K 线周期",-1)),te(e("select",{"onUpdate:modelValue":s[1]||(s[1]=r=>h.value=r),class:"form-select",disabled:c.value==="running"||B.value==="loading",onChange:ie},[...s[18]||(s[18]=[Se('<optgroup label="── 日内高频 ──"><option value="1m">1 分钟线</option><option value="5m">5 分钟线</option><option value="15m">15 分钟线</option></optgroup><optgroup label="── 中短周期 ──"><option value="1h">1 小时线</option><option value="2h">2 小时线</option><option value="4h">4 小时线</option></optgroup><optgroup label="── 长周期 ──"><option value="1d">日线</option></optgroup>',3)])],40,$t),[[he,h.value]])]),e("button",{class:"btn btn--ghost btn--full",disabled:c.value==="running"||B.value==="loading",onClick:ie},[B.value==="loading"?(g(),m("span",It)):(g(),m("span",Pt,"↻")),D(" "+S(B.value==="loading"?"加载中...":"刷新数据"),1)],8,Ft)])]),e("section",Ut,[s[25]||(s[25]=e("div",{class:"card-header"},[e("span",{class:"card-header-icon"},"⚙"),D(" 回测参数 ")],-1)),e("div",Ht,[e("div",Nt,[s[21]||(s[21]=e("label",{class:"form-label"},"初始资金（USDT）",-1)),te(e("input",{"onUpdate:modelValue":s[2]||(s[2]=r=>u.value=r),type:"number",min:"100",step:"100",class:"form-input",disabled:c.value==="running"},null,8,Wt),[[we,u.value,void 0,{number:!0}]])]),e("div",Et,[s[22]||(s[22]=e("label",{class:"form-label"},"开仓数量",-1)),te(e("input",{"onUpdate:modelValue":s[3]||(s[3]=r=>i.value=r),type:"number",min:"0.0001",step:"0.1",class:"form-input",disabled:c.value==="running",placeholder:"输入 1 = 1 BTC / 1 ETH"},null,8,zt),[[we,i.value,void 0,{number:!0}]])]),e("div",Kt,[s[24]||(s[24]=e("label",{class:"form-label"},"策略模板库",-1)),te(e("select",{"onUpdate:modelValue":s[4]||(s[4]=r=>V.value=r),class:"form-select",disabled:c.value==="running",onChange:le},[...s[23]||(s[23]=[Se('<optgroup label="── 经典技术指标 ──"><option value="momentum">📈 动量突破策略</option><option value="ma_cross">〰️ 双均线金叉死叉（MA5/MA10）</option><option value="ma5_ma20_death">〰️ 双均线金叉死叉（MA5/MA20）</option><option value="rsi">📊 RSI 超买超卖反转</option></optgroup><optgroup label="── Rumers Magic Lines ──"><option value="rumers">🔮 Rumers Magic Lines（爆仓线反转）</option></optgroup><optgroup label="── 聪明钱 SMC ──"><option value="smc_ob">🏦 订单块回踩做多（Order Block）</option><option value="smc_ls">🎯 流动性猎取反转（Liquidity Sweep）</option><option value="smc_bos">🔺 市场结构突破做多（BOS）</option></optgroup><optgroup label="── 价格行为 PA ──"><option value="pa_engulf">🕯️ 看涨吞没形态（Engulfing）</option><option value="pa_pinbar">📍 锤子线 / 针形态（Pin Bar）</option><option value="pa_sr">🧲 支撑阻力反弹（S/R Bounce）</option></optgroup><optgroup label="── 自定义 ──"><option value="custom">✏️ 自定义策略</option></optgroup>',5)])],40,jt),[[he,V.value]])]),e("button",{class:"btn btn--primary btn--full",disabled:c.value==="running"||B.value==="loading",onClick:ue},[c.value==="running"?(g(),m("span",Jt)):(g(),m("span",Zt,"▶")),D(" "+S(c.value==="running"?"回测运行中...":"开始回测"),1)],8,qt),e("button",{class:"btn btn--ghost btn--full mt-8",disabled:c.value==="running",onClick:ye}," ↺ 重置 ",8,Qt)])]),e("section",Yt,[s[26]||(s[26]=e("div",{class:"card-header"},[e("span",{class:"card-header-icon"},"✎"),D(" 策略编辑器 "),e("span",{class:"card-header-badge"},"JavaScript")],-1)),e("div",Xt,[te(e("textarea",{"onUpdate:modelValue":s[5]||(s[5]=r=>R.value=r),class:"code-editor",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",disabled:c.value==="running",placeholder:`// 在此输入你的策略代码
// 必须声明 onTick() 函数
function onTick() { ... }`},null,8,eo),[[we,R.value]])])])]),e("section",to,[e("div",oo,[e("span",so,S(l.value)+" · 永续合约",1),e("span",ao,S(ae.value),1),e("span",no,S(k.value.length)+" 根 K 线",1),X.value?(g(),m("span",lo," ⬤ LIVE ")):B.value==="success"?(g(),m("span",ro," LIVE DATA ")):B.value==="loading"?(g(),m("span",co," LOADING... ")):(g(),m("span",io," MOCK DATA ")),e("div",uo,[e("button",{class:H(["ma-toggle-btn",{active:w.ma5}]),style:{"--ma-color":"#f6c90e"},onClick:s[6]||(s[6]=r=>w.ma5=!w.ma5)},"MA5",2),e("button",{class:H(["ma-toggle-btn",{active:w.ma10}]),style:{"--ma-color":"#2196f3"},onClick:s[7]||(s[7]=r=>w.ma10=!w.ma10)},"MA10",2),e("button",{class:H(["ma-toggle-btn",{active:w.ma20}]),style:{"--ma-color":"#e040fb"},onClick:s[8]||(s[8]=r=>w.ma20=!w.ma20)},"MA20",2)]),e("div",po,[e("button",{class:H(["ma-toggle-btn",{active:U.value}]),style:{"--ma-color":"#26a69a"},onClick:s[9]||(s[9]=r=>U.value=!U.value),title:"在K线上显示策略买卖圆圈标记"},"策略圆圈",2),e("button",{class:H(["ma-toggle-btn",{active:Y.value}]),style:{"--ma-color":"#29b6f6"},onClick:s[10]||(s[10]=r=>Y.value=!Y.value),title:"显示市场大单气泡（大户/散户真实成交量异动）"},"市场大单",2),e("button",{class:H(["ma-toggle-btn",{active:G.value}]),style:{"--ma-color":"#64b5f6"},onClick:s[11]||(s[11]=r=>G.value=!G.value),title:"显示底部成交量柱状图"},"成交量",2),e("button",{class:H(["ma-toggle-btn",{active:j.value}]),style:{"--ma-color":"#ff9800"},onClick:s[12]||(s[12]=r=>j.value=!j.value),title:"显示底部 OBV 指标"},"OBV",2)])]),e("div",ho,[Ee(bt,{kData:k.value,markers:N.value,showMA:w,showVolume:G.value,showOBV:j.value,showVolCircle:U.value,showMarketBubble:Y.value,theme:"dark",upColor:"#26a69a",downColor:"#ef5350"},null,8,["kData","markers","showMA","showVolume","showOBV","showVolCircle","showMarketBubble"])])]),e("aside",fo,[e("section",vo,[s[36]||(s[36]=e("div",{class:"card-header"},[e("span",{class:"card-header-icon"},"📊"),D(" 回测统计 ")],-1)),e("div",go,[e("div",mo,[e("div",bo,[s[28]||(s[28]=e("div",{class:"stat-label"},"初始资金",-1)),e("div",yo,[D(S(_.initialBalance>0?_.initialBalance.toLocaleString():"--")+" ",1),s[27]||(s[27]=e("span",{class:"stat-unit"},"USDT",-1))])]),e("div",ko,[s[30]||(s[30]=e("div",{class:"stat-label"},"最终资产",-1)),e("div",{class:H(["stat-value",{"stat-value--profit":_.finalAsset>_.initialBalance,"stat-value--loss":_.finalAsset<_.initialBalance&&_.initialBalance>0}])},[D(S(_.finalAsset>0?_.finalAsset.toLocaleString():"--")+" ",1),s[29]||(s[29]=e("span",{class:"stat-unit"},"USDT",-1))],2)]),e("div",_o,[s[31]||(s[31]=e("div",{class:"stat-label"},"收益率",-1)),e("div",{class:H(["stat-value stat-value--large",{"stat-value--profit":(_.returnRate??0)>0,"stat-value--loss":(_.returnRate??0)<0}])},S(_.returnRate!==null?(_.returnRate>0?"+":"")+_.returnRate+"%":"--"),3)]),e("div",xo,[s[32]||(s[32]=e("div",{class:"stat-label"},"最大回撤",-1)),e("div",wo,S(_.maxDrawdown!==null?_.maxDrawdown+"%":"--"),1)]),e("div",So,[s[34]||(s[34]=e("div",{class:"stat-label"},"总交易次数",-1)),e("div",Bo,[D(S(_.totalTrades!==null?_.totalTrades:"--")+" ",1),s[33]||(s[33]=e("span",{class:"stat-unit"},"次",-1))])]),e("div",Co,[s[35]||(s[35]=e("div",{class:"stat-label"},"回测耗时",-1)),e("div",To,S(_.elapsed!==null?_.elapsed+" ms":"--"),1)])])])]),e("section",Mo,[e("div",Ao,[s[37]||(s[37]=e("span",{class:"card-header-icon"},"📋",-1)),s[38]||(s[38]=D(" 运行日志 ",-1)),e("span",Lo,S(C.value.length)+" 条",1),C.value.length>0?(g(),m("button",{key:0,class:"btn-icon ml-auto",title:"清空日志",onClick:s[13]||(s[13]=r=>C.value=[])},"✕")):Q("",!0)]),e("div",Vo,[e("div",{ref_key:"logPanelRef",ref:x,class:"log-panel"},[c.value==="error"?(g(),m("div",Oo,[s[39]||(s[39]=e("span",{class:"log-error-icon"},"⚠",-1)),D(" "+S(p.value),1)])):Q("",!0),C.value.length===0&&c.value!=="error"?(g(),m("div",Do,[...s[40]||(s[40]=[e("span",null,"尚无日志。点击「开始回测」后，策略运行日志将在此显示。",-1)])])):Q("",!0),(g(!0),m(Ve,null,Oe(C.value,(r,$)=>(g(),m("div",{key:$,class:H(["log-entry",{"log-entry--buy":r.type==="buy","log-entry--sell":r.type==="sell","log-entry--info":r.type==="info"}])},[e("span",Ro,S(String($+1).padStart(3,"0")),1),e("span",Go,S(r.text),1)],2))),128))],512)])])])])]))}});Ke($o).mount("#app");
