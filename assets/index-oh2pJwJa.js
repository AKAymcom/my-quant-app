var Qe=Object.defineProperty;var et=(X,L,l)=>L in X?Qe(X,L,{enumerable:!0,configurable:!0,writable:!0,value:l}):X[L]=l;var V=(X,L,l)=>et(X,typeof L!="symbol"?L+"":L,l);import{d as je,o as Ke,a as qe,w as se,b as m,c as b,e as s,n as Y,f as W,t as S,g as he,v as Oe,h as We,i as ne,F as Je,r as Ye,j as f,k as Ue,l as tt,m as Ne,p as Ee,q as ot,s as st}from"./vendor-vue-DxO1aeAH.js";import{a as nt,G as at,L as lt,Q as rt,C as ze,K as it,$ as ct}from"./vendor-charts-Cduodv0X.js";(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))y(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const O of p.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&y(O)}).observe(document,{childList:!0,subtree:!0});function l(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function y(i){if(i.ep)return;i.ep=!0;const p=l(i);fetch(i.href,p)}})();const ut={class:"kline-chart-wrapper"},dt={class:"trendline-toolbar"},pt=["disabled"],ht=["disabled"],ft={key:0,class:"tl-hint"},vt={key:1,class:"tl-hint tl-hint--active"},gt={key:2,class:"tl-count"},mt=["width","height"],bt=["x1","y1","x2","y2","stroke","stroke-dasharray"],kt=["cx","cy","fill"],yt=["cx","cy","fill"],_t={key:0},St=["x1","y1","x2","y2","stroke"],xt=["cx","cy","fill"],wt=["cx","cy","fill"],Ct=["cx","cy","fill"],Fe=20,Tt=2,Bt=je({__name:"KLineChart",props:{kData:{},markers:{default:()=>[]},theme:{default:"dark"},upColor:{default:"#26a69a"},downColor:{default:"#ef5350"},showMA:{default:()=>({ma5:!0,ma10:!0,ma20:!0})},showVolume:{type:Boolean,default:!0},showOBV:{type:Boolean,default:!1},showVolCircle:{type:Boolean,default:!0},showMarketBubble:{type:Boolean,default:!0},showSession:{type:Boolean,default:!0}},setup(X,{expose:L}){const l=X,y=f(null);let i=null,p=null,O=null,te=null,N=null,x=null,u=null,T=null,v=null,k=null,w=null,E=null;const $=f(!1),g=f(null),I=f(null),K=f([]),ae=f({width:0,height:0}),Z=f("#FFD700"),ce=f("dashed");function _(t){return t<10?8:t<50?14:22}function F(t){return t<10?9:t<50?11:13}class H{constructor(e,a,o,r){V(this,"_points");V(this,"_series");V(this,"_chart");V(this,"_visible");this._points=e,this._series=a,this._chart=o,this._visible=r}draw(e){!this._visible||!this._series||!this._chart||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio;for(const d of this._points){const A=this._chart.timeScale().timeToCoordinate(d.time);if(A===null)continue;const R=A*r,U=this._series.priceToCoordinate(d.price);if(U===null)continue;const ie=U*a.verticalPixelRatio,J=_(d.amount)*r,me=F(d.amount)*r,Se=d.side==="buy",j=d.side==="cover";let B,M;d.isMarket?d.side==="buy"?(B="rgba(41,182,246,0.20)",M="#29b6f6"):(B="rgba(255,112,67,0.20)",M="#ff7043"):d.side==="buy"?(B="rgba(0,230,118,0.18)",M="#00e676"):d.side==="sell"?(B="rgba(255,82,82,0.18)",M="#ff5252"):d.side==="short"?(B="rgba(255,152,0,0.18)",M="#ff9800"):(B="rgba(0,229,255,0.18)",M="#00e5ff");const $e=Se||j?J+4*r:-(J+4*r),be=ie+$e;o.save(),o.beginPath(),o.arc(R,be,J,0,Math.PI*2),o.fillStyle=B,o.fill(),o.lineWidth=1.5*r,o.strokeStyle=M,o.stroke(),o.shadowColor=M,o.shadowBlur=6*r,o.beginPath(),o.arc(R,be,J,0,Math.PI*2),o.strokeStyle=M,o.lineWidth=.8*r,o.stroke(),o.shadowBlur=0;const Le=d.label.length>8?d.label.slice(0,8):d.label;if(o.font=`bold ${me}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillStyle=M,o.fillText(Le,R,be),d.subLabel){const xe=Math.max(8,me*.85);o.font=`${xe}px sans-serif`,o.fillStyle=M,o.globalAlpha=.85;const Ge=Se||j?J+xe+2*r:-(J+xe+2*r);o.fillText(d.subLabel,R,ie+Ge),o.globalAlpha=1}o.restore()}})}}class ue{constructor(e){V(this,"_renderer");this._renderer=e}zOrder(){return"top"}renderer(){return this._renderer}}class le{constructor(){V(this,"_points",[]);V(this,"_visible",!0);V(this,"_attachedSeries",null);V(this,"_attachedChart",null);V(this,"_paneView",null)}attached(e){this._attachedChart=e.chart,this._attachedSeries=e.series,this._rebuildView()}detached(){this._attachedChart=null,this._attachedSeries=null,this._paneView=null}updateAllViews(){this._rebuildView()}paneViews(){return this._paneView?[this._paneView]:[]}setPoints(e){this._points=e,this._rebuildView()}setVisible(e){this._visible=e,this._rebuildView()}_rebuildView(){const e=new H(this._points,this._attachedSeries,this._attachedChart,this._visible);this._paneView=new ue(e)}}const de=[{startHour:8,endHour:17,fillColor:"rgba(255,220,80,0.045)",strokeColor:"rgba(255,200,50,0.5)",label:"亚盘"},{startHour:15,endHour:24,fillColor:"rgba(80,160,255,0.045)",strokeColor:"rgba(80,150,255,0.5)",label:"欧盘"},{startHour:21.5,endHour:28,fillColor:"rgba(180,80,255,0.05)",strokeColor:"rgba(160,80,255,0.55)",label:"美盘"}];function Ce(t,e){const a=t+(e.startHour-8)*3600,o=t+(e.endHour-8)*3600;return[a,o]}class ke{constructor(e,a,o){V(this,"_chart");V(this,"_visible");V(this,"_bars");this._chart=e,this._visible=a,this._bars=o}draw(e){!this._visible||!this._chart||this._bars.length===0||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio,d=a.verticalPixelRatio,A=o.canvas.height,R=this._chart.timeScale(),U=R.getVisibleRange();if(!U)return;const ie=U.from,J=U.to,me=Math.floor(ie/86400)*86400,Se=Math.floor(J/86400)*86400;for(let j=me;j<=Se+86400;j+=86400)for(const B of de){const[M,$e]=Ce(j,B),be=Math.max(M,ie),Le=Math.min($e,J);if(be>=Le)continue;const xe=R.timeToCoordinate(be),Ge=R.timeToCoordinate(Le);if(xe===null||Ge===null)continue;const we=xe*r,Ie=Ge*r;Ie-we<1||(o.save(),o.fillStyle=B.fillColor,o.fillRect(we,0,Ie-we,A),o.strokeStyle=B.strokeColor,o.lineWidth=1*r,o.setLineDash([4*r,3*r]),o.beginPath(),o.moveTo(we,0),o.lineTo(we,A),o.stroke(),Math.abs(be-M)<60&&(o.setLineDash([]),o.font=`bold ${11*d}px sans-serif`,o.fillStyle=B.strokeColor,o.globalAlpha=.9,o.textAlign="left",o.textBaseline="top",o.fillText(B.label+" 开",we+3*r,4*d),o.globalAlpha=1),Math.abs(Le-$e)<60&&(o.strokeStyle=B.strokeColor,o.lineWidth=1*r,o.setLineDash([2*r,3*r]),o.globalAlpha=.6,o.beginPath(),o.moveTo(Ie,0),o.lineTo(Ie,A),o.stroke(),o.globalAlpha=1),o.restore())}})}}class Te{constructor(e){V(this,"_renderer");this._renderer=e}zOrder(){return"bottom"}renderer(){return this._renderer}}class He{constructor(){V(this,"_visible",!0);V(this,"_bars",[]);V(this,"_chart",null);V(this,"_paneView",null)}attached(e){this._chart=e.chart,this._rebuild()}detached(){this._chart=null,this._paneView=null}updateAllViews(){this._rebuild()}paneViews(){return this._paneView?[this._paneView]:[]}setBars(e){this._bars=e,this._rebuild()}setVisible(e){this._visible=e,this._rebuild()}_rebuild(){const e=new ke(this._chart,this._visible,this._bars);this._paneView=new Te(e)}}function re(t){if(typeof t=="number"||/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?t:Math.floor(a/1e3)}function De(t){if(typeof t=="number")return t;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return Math.floor(Date.parse(t+"T00:00:00Z")/1e3);const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?0:Math.floor(a/1e3)}function Be(t){return t.startsWith("多买")?"buy":t.startsWith("多平")?"sell":t.startsWith("空开")?"short":"cover"}function fe(t){return t.filter(e=>e.time!==void 0&&e.time!==null&&e.time!=="").map(e=>{const a=Be(e.text),o=e.amount>=1?e.amount.toFixed(2):e.amount.toFixed(4);let r;return a==="buy"?r=`LONG ${o}`:a==="short"?r=`SHORT ${o}`:r=`CLOSE ${o}`,{time:De(e.time),price:e.price,amount:e.amount,side:a,label:r}})}function Ae(t){if(t.length<Fe+1)return[];const e=[];for(let a=Fe;a<t.length;a++){const o=t[a];if(!o.volume||o.volume<=0)continue;let r=0;for(let M=a-Fe;M<a;M++)r+=(t[M].volume??t[M].revenue)||0;const d=r/Fe;if(d<=0)continue;const A=o.volume/d;if(A<Tt)continue;let R;A>=5?R=80:A>=3?R=25:R=5;const U=o.close>=o.open,ie=U?"buy":"sell",J=U?o.high:o.low,me=A>=10?`×${Math.round(A)}`:`×${A.toFixed(1)}`,Se=U?`买${me}`:`卖${me}`,j=o.volume;let B;j>=1e4?B=`${(j/1e4).toFixed(1)}万枚`:j>=1e3?B=`${(j/1e3).toFixed(2)}K枚`:j>=1?B=`${j.toFixed(1)}枚`:B=`${j.toFixed(3)}枚`,e.push({time:De(o.time),price:J,amount:R,side:ie,label:Se,subLabel:B,isMarket:!0})}return e}function Me(t,e,a){const o=a==="dark";return{width:t,height:e,layout:{background:{type:ct.Solid,color:o?"#1a1a2e":"#ffffff"},textColor:o?"#d1d4dc":"#333333"},grid:{vertLines:{color:o?"#2a2a4a":"#e0e0e0"},horzLines:{color:o?"#2a2a4a":"#e0e0e0"}},crosshair:{mode:it.Normal,vertLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"},horzLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"}},rightPriceScale:{borderColor:o?"#485c7b":"#cccccc"},timeScale:{borderColor:o?"#485c7b":"#cccccc",timeVisible:!0,secondsVisible:!1,rightOffset:5,barSpacing:8,minBarSpacing:2},localization:{timeFormatter:r=>{const d=new Date((r+28800)*1e3),A=d.getUTCFullYear(),R=String(d.getUTCMonth()+1).padStart(2,"0"),U=String(d.getUTCDate()).padStart(2,"0"),ie=String(d.getUTCHours()).padStart(2,"0"),J=String(d.getUTCMinutes()).padStart(2,"0");return`${A}-${R}-${U} ${ie}:${J}`}},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0}}}function Re(t,e){return{upColor:t,downColor:e,borderUpColor:t,borderDownColor:e,wickUpColor:t,wickDownColor:e}}const ve=[{period:5,color:"#f6c90e",key:"ma5"},{period:10,color:"#2196f3",key:"ma10"},{period:20,color:"#e040fb",key:"ma20"}];function Pe(t,e){const a=[];for(let o=e-1;o<t.length;o++){let r=0;for(let d=o-e+1;d<=o;d++)r+=t[d].close;a.push({time:re(t[o].time),value:r/e})}return a}function ye(t,e){return i.addSeries(ze,{color:t,lineWidth:1,priceLineVisible:!1,lastValueVisible:!0,crosshairMarkerVisible:!0,visible:e})}function C(t){if(!i)return;const e=ve.map(a=>({series:a.key==="ma5"?te:a.key==="ma10"?N:x,data:Pe(t,a.period)}));for(const{series:a,data:o}of e)a&&a.setData(o)}function n(t,e){const a=t.trim();if(a.startsWith("#")){let o,r,d;if(a.length===7)o=parseInt(a.slice(1,3),16),r=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16);else if(a.length===4)o=parseInt(a[1]+a[1],16),r=parseInt(a[2]+a[2],16),d=parseInt(a[3]+a[3],16);else return a;return`rgba(${o},${r},${d},${e})`}return a}function c(t,e,a){return t.map(o=>({time:re(o.time),value:o.revenue,color:o.close>=o.open?n(e,.7):n(a,.7)}))}function G(t){const e=[];let a=0;for(let o=0;o<t.length;o++)o===0?a=t[o].revenue:a+=t[o].close>=t[o-1].close?t[o].revenue:-t[o].revenue,e.push({time:re(t[o].time),value:a});return e}function Q(t){return t.map(e=>typeof e.time!="string"&&typeof e.time!="number"||typeof e.open!="number"||typeof e.high!="number"||typeof e.low!="number"||typeof e.close!="number"?null:{time:re(e.time),open:e.open,high:e.high,low:e.low,close:e.close}).filter(e=>e!==null)}function h(t){return t.map(e=>e.time===void 0||e.time===null||e.time===""?null:{time:re(e.time),position:e.position,color:e.color,shape:e.shape,text:e.text}).filter(e=>e!==null).sort((e,a)=>e.time-a.time)}function z(){const t=y.value;if(!t)return;const e=t.clientWidth||800,a=t.clientHeight||500;i=nt(t,Me(e,a,l.theme)),p=i.addSeries(at,Re(l.upColor,l.downColor)),O=lt(p,[]),v=new le,p.attachPrimitive(v),v.setVisible(l.showVolCircle),k=new le,p.attachPrimitive(k),k.setVisible(l.showMarketBubble),w=new He,p.attachPrimitive(w),w.setVisible(l.showSession),te=ye(ve[0].color,l.showMA.ma5),N=ye(ve[1].color,l.showMA.ma10),x=ye(ve[2].color,l.showMA.ma20),u=i.addSeries(rt,{priceFormat:{type:"volume"},priceScaleId:"vol",lastValueVisible:!1,priceLineVisible:!1,visible:l.showVolume},1),i.priceScale("vol",1).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),T=i.addSeries(ze,{color:"#ff9800",lineWidth:1,priceScaleId:"obv",lastValueVisible:!1,priceLineVisible:!1,crosshairMarkerVisible:!0,visible:l.showOBV},2),i.priceScale("obv",2).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),l.kData&&l.kData.length>0&&(p.setData(Q(l.kData)),C(l.kData),u.setData(c(l.kData,l.upColor,l.downColor)),T.setData(G(l.kData)),k.setPoints(Ae(l.kData)),w.setBars(l.kData),ge=l.kData.length,Ve=!0,i.timeScale().fitContent()),l.markers&&l.markers.length>0&&(O.setMarkers(h(l.markers)),v.setPoints(fe(l.markers)))}function pe(){$.value=!$.value,g.value=null,I.value=null,y.value&&(y.value.style.cursor=$.value?"crosshair":"default")}function oe(t){const e=y.value;if(!e)return null;const a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}function P(t){if(!$.value)return;const e=oe(t);e&&(g.value?(K.value.push({x1:g.value.x,y1:g.value.y,x2:e.x,y2:e.y,color:Z.value,style:ce.value}),g.value=null,I.value=null):(g.value=e,I.value=e))}function _e(t){if(!$.value||!g.value)return;const e=oe(t);e&&(I.value=e)}function ee(){K.value.pop()}function q(){K.value=[],g.value=null,I.value=null}function D(){const t=y.value;t&&(ae.value={width:t.clientWidth,height:t.clientHeight})}function Xe(){const t=y.value;!t||!i||(E=new ResizeObserver(e=>{for(const a of e){const{width:o,height:r}=a.contentRect;i&&o>0&&r>0&&(i.applyOptions({width:o,height:r}),ae.value={width:o,height:r})}}),E.observe(t))}Ke(()=>{z(),Xe(),D()}),qe(()=>{if(E&&(E.disconnect(),E=null),p&&v)try{p.detachPrimitive(v)}catch{}if(p&&k)try{p.detachPrimitive(k)}catch{}if(p&&w)try{p.detachPrimitive(w)}catch{}i&&(i.remove(),i=null,p=null,O=null,v=null,k=null,w=null,Ve=!1,ge=0,te=null,N=null,x=null,u=null,T=null)});let ge=0,Ve=!1;se(()=>l.kData,t=>{if(!p||!i)return;if(!t||t.length===0){p.setData([]),u==null||u.setData([]),T==null||T.setData([]),k==null||k.setPoints([]),ge=0,Ve=!1;return}const e=t.length!==ge,a=!Ve;if(a||e)p.setData(Q(t)),C(t),u==null||u.setData(c(t,l.upColor,l.downColor)),T==null||T.setData(G(t)),k==null||k.setPoints(Ae(t)),w==null||w.setBars(t),ge=t.length,a&&(Ve=!0,i.timeScale().fitContent());else{const o=t[t.length-1],r=Q([o])[0];r&&p.update(r),C(t);const d=c([o],l.upColor,l.downColor)[0];d&&(u==null||u.update(d)),T==null||T.setData(G(t))}O&&(l.markers&&l.markers.length>0?(O.setMarkers(h(l.markers)),v==null||v.setPoints(fe(l.markers))):(O.setMarkers([]),v==null||v.setPoints([])))},{deep:!0}),se(()=>l.markers,t=>{if(p){if(!t||t.length===0){O==null||O.setMarkers([]),v==null||v.setPoints([]);return}O==null||O.setMarkers(h(t)),v==null||v.setPoints(fe(t))}},{deep:!0}),se(()=>l.theme,t=>{if(!i||!y.value)return;const e=y.value;i.applyOptions(Me(e.clientWidth,e.clientHeight,t))}),se(()=>[l.upColor,l.downColor],([t,e])=>{p&&(p.applyOptions(Re(t,e)),l.kData&&l.kData.length>0&&(u==null||u.setData(c(l.kData,t,e))))}),se(()=>l.showMA,t=>{te==null||te.applyOptions({visible:t.ma5}),N==null||N.applyOptions({visible:t.ma10}),x==null||x.applyOptions({visible:t.ma20})},{deep:!0}),se(()=>l.showVolume,t=>{u==null||u.applyOptions({visible:t})}),se(()=>l.showOBV,t=>{T==null||T.applyOptions({visible:t})}),se(()=>l.showVolCircle,t=>{v==null||v.setVisible(t),i&&i.applyOptions({})}),se(()=>l.showMarketBubble,t=>{k==null||k.setVisible(t),i&&i.applyOptions({})}),se(()=>l.showSession,t=>{w==null||w.setVisible(t),i&&i.applyOptions({})});function Ze(t){if(!p||!i)return;const e=l.kData;if(!e||e.length===0)return;const a=e.length>ge,o=re(t.time);if(p.update({time:o,open:t.open,high:t.high,low:t.low,close:t.close}),u){const r=t.close>=t.open;u.update({time:o,value:t.revenue,color:n(r?l.upColor:l.downColor,.7)})}for(const r of ve){const d=r.key==="ma5"?te:r.key==="ma10"?N:x;if(!d)continue;const A=r.period;if(e.length<A)continue;let R=0;for(let U=e.length-A;U<e.length;U++)R+=e[U].close;d.update({time:o,value:R/A})}if(T&&e.length>=2){const r=G(e),d=r[r.length-1];d&&T.update(d)}a&&(k==null||k.setPoints(Ae(e)),w==null||w.setBars(e),ge=e.length)}return L({pushTick:Ze}),(t,e)=>(m(),b("div",ut,[s("div",dt,[s("button",{class:Y(["tl-btn",{"tl-btn--active":$.value}]),title:"画趋势线（点击两个点确定一条线）",onClick:pe},[e[2]||(e[2]=s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[s("line",{x1:"2",y1:"13",x2:"14",y2:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),s("circle",{cx:"2",cy:"13",r:"2",fill:"currentColor"}),s("circle",{cx:"14",cy:"3",r:"2",fill:"currentColor"})],-1)),W(" "+S($.value?"取消画线":"画趋势线"),1)],2),he(s("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>Z.value=a),class:"tl-color-select",title:"线条颜色"},[...e[3]||(e[3]=[We('<option value="#FFD700" data-v-1858c3a0>金色</option><option value="#ff5252" data-v-1858c3a0>红色</option><option value="#00e676" data-v-1858c3a0>绿色</option><option value="#29b6f6" data-v-1858c3a0>蓝色</option><option value="#e040fb" data-v-1858c3a0>紫色</option><option value="#ffffff" data-v-1858c3a0>白色</option>',6)])],512),[[Oe,Z.value]]),he(s("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>ce.value=a),class:"tl-style-select",title:"线条样式"},[...e[4]||(e[4]=[s("option",{value:"solid"},"实线",-1),s("option",{value:"dashed"},"虚线",-1),s("option",{value:"dotted"},"点线",-1)])],512),[[Oe,ce.value]]),s("button",{class:"tl-btn tl-btn--danger",disabled:K.value.length===0,title:"删除最后一条趋势线",onClick:ee},"撤销",8,pt),s("button",{class:"tl-btn tl-btn--danger",disabled:K.value.length===0,title:"清空所有趋势线",onClick:q},"清空",8,ht),$.value&&!g.value?(m(),b("span",ft,"点击图表选择第一个点")):ne("",!0),$.value&&g.value?(m(),b("span",vt,"再点击选择第二个点")):ne("",!0),K.value.length>0&&!$.value?(m(),b("span",gt,S(K.value.length)+" 条线",1)):ne("",!0)]),s("div",{ref_key:"chartContainerRef",ref:y,class:"kline-chart-container",onClick:P,onMousemove:_e},[(m(),b("svg",{class:"trendline-svg",width:ae.value.width,height:ae.value.height,style:{"pointer-events":"none"}},[(m(!0),b(Je,null,Ye(K.value,(a,o)=>(m(),b("g",{key:o},[s("line",{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,stroke:a.color,"stroke-width":2,"stroke-dasharray":a.style==="dashed"?"8,4":a.style==="dotted"?"2,4":"none","stroke-linecap":"round",opacity:"0.9"},null,8,bt),s("circle",{cx:a.x1,cy:a.y1,r:"4",fill:a.color,opacity:"0.8"},null,8,kt),s("circle",{cx:a.x2,cy:a.y2,r:"4",fill:a.color,opacity:"0.8"},null,8,yt)]))),128)),$.value&&g.value&&I.value?(m(),b("g",_t,[s("line",{x1:g.value.x,y1:g.value.y,x2:I.value.x,y2:I.value.y,stroke:Z.value,"stroke-width":"1.5","stroke-dasharray":"6,3","stroke-linecap":"round",opacity:"0.6"},null,8,St),s("circle",{cx:g.value.x,cy:g.value.y,r:"5",fill:Z.value,opacity:"0.9"},null,8,xt),s("circle",{cx:I.value.x,cy:I.value.y,r:"3",fill:Z.value,opacity:"0.5"},null,8,wt)])):ne("",!0),$.value&&g.value&&!I.value?(m(),b("circle",{key:1,cx:g.value.x,cy:g.value.y,r:"5",fill:Z.value,opacity:"0.9"},null,8,Ct)):ne("",!0)],8,mt))],544)]))}}),At=(X,L)=>{const l=X.__vccOpts||X;for(const[y,i]of L)l[y]=i;return l},Mt=At(Bt,[["__scopeId","data-v-1858c3a0"]]),Vt={class:"quant-app"},Lt={class:"topbar"},Ot={class:"topbar-brand"},Dt={key:0,class:"topbar-live-price"},Rt={class:"topbar-live-price-value"},$t={class:"topbar-center"},Gt={key:0,class:"data-loading-badge"},It={key:1,class:"data-error-badge"},Ft={key:2,class:"data-success-badge"},Ht={key:0,class:"ws-live-dot",title:"WebSocket 实时行情已连接"},Pt={key:3,class:"data-idle-badge"},Ut={class:"topbar-status"},Wt={class:"status-text"},Nt={class:"main-layout"},Et={class:"sidebar sidebar--left"},zt={class:"card"},jt={class:"card-body"},Kt={class:"form-group"},qt=["disabled"],Jt={class:"form-group"},Yt=["disabled"],Xt=["disabled"],Zt={key:0,class:"btn-spinner"},Qt={key:1},eo={class:"card"},to={class:"card-body"},oo={class:"form-group"},so=["disabled"],no={class:"form-group"},ao=["disabled"],lo={class:"form-group"},ro=["disabled"],io=["disabled"],co={key:0,class:"btn-spinner"},uo={key:1},po=["disabled"],ho={class:"card card--grow"},fo={class:"card-body card-body--stretch"},vo=["disabled"],go={class:"chart-area"},mo={class:"chart-area-header"},bo={class:"chart-symbol"},ko={class:"chart-period"},yo={class:"chart-bars-count"},_o={key:0,class:"chart-data-badge chart-data-badge--live"},So={key:1,class:"chart-data-badge chart-data-badge--live"},xo={key:2,class:"chart-data-badge chart-data-badge--loading"},wo={key:3,class:"chart-data-badge chart-data-badge--mock"},Co={class:"ma-toggle-group"},To={class:"ma-toggle-group"},Bo={class:"chart-wrapper"},Ao={class:"sidebar sidebar--right"},Mo={class:"card"},Vo={class:"card-body"},Lo={class:"stat-grid"},Oo={class:"stat-item"},Do={class:"stat-value"},Ro={class:"stat-item"},$o={class:"stat-item"},Go={class:"stat-item"},Io={class:"stat-value stat-value--warning"},Fo={class:"stat-item"},Ho={class:"stat-value"},Po={class:"stat-item"},Uo={class:"stat-value"},Wo={class:"card card--grow"},No={class:"card-header"},Eo={class:"card-header-badge"},zo={class:"card-body card-body--stretch card-body--no-padding"},jo={key:0,class:"log-error-banner"},Ko={key:1,class:"log-empty"},qo={class:"log-index"},Jo={class:"log-text"},Yo=je({__name:"App",setup(X){const L=f(null),l=f("ETH-USDT-SWAP"),y=f("1h"),i=f(1e4),p=f(1),O=f(1),te=f("momentum"),N=f(""),x=f("idle"),u=f("idle"),T=f(""),v=f(""),k=f([]),w=f([]),E=f([]),$=f(null),g=Ne({ma5:!0,ma10:!0,ma20:!0}),I=f(!0),K=f(!1),ae=f(!0),Z=f(!0),ce=f(!0),_=Ne({initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null});let F=null,H=null;const ue=f(!1),le=f(null);let de=0;function Ce(C,n){ke();const c=re(n),G="wss://ws.okx.com:8443/ws/v5/public",Q=de,h=new WebSocket(G);H=h,h.onopen=()=>{H===h&&(ue.value=!0,console.log("[WS] connected:",G),h.send(JSON.stringify({op:"subscribe",args:[{channel:`candle${c}`,instId:C}]})))},h.onmessage=z=>{var pe;if(!(H!==h||Q!==de))try{const oe=JSON.parse(z.data);if(!oe.data||!Array.isArray(oe.data))return;const P=oe.data[0];if(!P)return;const _e=Math.floor(Number(P[0])/1e3),ee=k.value;if(ee.length===0)return;const q={time:_e,open:parseFloat(P[1]),high:parseFloat(P[2]),low:parseFloat(P[3]),close:parseFloat(P[4]),volume:parseFloat(P[5]),revenue:parseFloat(P[7]??"0")};le.value=q.close;const D=ee[ee.length-1];if(D.time===_e)D.open=q.open,D.high=q.high,D.low=q.low,D.close=q.close,D.volume=q.volume,D.revenue=q.revenue;else if(_e>D.time)ee.push(q);else return;(pe=L.value)==null||pe.pushTick(q)}catch{}},h.onclose=z=>{H===h&&(ue.value=!1,console.log("[WS] closed",z.code,z.reason))},h.onerror=()=>{H===h&&(ue.value=!1)}}function ke(){H&&(H.onopen=null,H.onmessage=null,H.onclose=null,H.onerror=null,(H.readyState===WebSocket.CONNECTING||H.readyState===WebSocket.OPEN)&&H.close(1e3,"replaced"),H=null),ue.value=!1,le.value=null}const Te=Ee(()=>({"1m":"1分钟","5m":"5分钟","15m":"15分钟","1h":"1小时","2h":"2小时","4h":"4小时","1d":"日线"})[y.value]??y.value),He=Ee(()=>{switch(u.value){case"running":return"回测运行中...";case"success":return"回测完成";case"error":return"回测出错";default:return"就绪"}});function re(C){return{"1m":"1m","5m":"5m","15m":"15m","1h":"1H","2h":"2H","4h":"4H","1d":"1D"}[C]??C}async function De(C,n,c,G){const Q=re(n),h=300;let z=[],pe;for(;z.length<c;){let oe=`https://www.okx.com/api/v5/market/history-candles?instId=${C}&bar=${Q}&limit=${h}`;pe&&(oe+=`&after=${pe}`);const P=await fetch(oe);if(!P.ok)throw new Error(`HTTP ${P.status}`);const ee=(await P.json()).data??[];if(ee.length===0)break;const q=ee.map(D=>({time:Math.floor(Number(D[0])/1e3),open:parseFloat(D[1]),high:parseFloat(D[2]),low:parseFloat(D[3]),close:parseFloat(D[4]),volume:parseFloat(D[5]),revenue:parseFloat(D[7])}));if(z=z.concat(q),pe=ee[ee.length-1][0],ee.length<h)break}return z.sort((oe,P)=>oe.time-P.time),z.slice(-c)}async function Be(C,n){fe=`${C}_${n}`,de++;const c=de;ke(),x.value="loading",T.value="",k.value=[],w.value=[];try{const G=await De(C,n,1500);if(c!==de)return;const Q=new Map;for(const h of G)Q.set(h.time,h);k.value=Array.from(Q.values()).sort((h,z)=>h.time-z.time),x.value="success",Ce(C,n)}catch(G){if(c!==de)return;console.error("[loadKline]",G),x.value="error"}}let fe="";function Ae(){`${l.value}_${y.value}`!==fe&&Be(l.value,y.value)}function Me(){`${l.value}_${y.value}`!==fe&&Be(l.value,y.value)}function Re(){const C=te.value;N.value=ye[C]??""}function ve(){w.value=[],E.value=[],u.value="idle",v.value="",Object.assign(_,{initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null})}function Pe(){if(!N.value.trim()){v.value="请先输入策略代码",u.value="error";return}if(!k.value.length){v.value="请先加载K线数据",u.value="error";return}ke(),u.value="running",w.value=[],E.value=[],v.value="",F&&F.terminate(),F=new Worker(new URL("/my-quant-app/assets/backtest.worker-DMR74fp0.js",import.meta.url),{type:"module"});const C=Date.now();F.onmessage=n=>{const c=n.data,G=Date.now()-C;if(c.success){u.value="success",w.value=c.tradeHistory??[];const Q=(c.logs??[]).map(h=>h.includes("🟢")||h.includes("开多")?{type:"buy",text:h}:h.includes("🔴")||h.includes("平多")||h.includes("🟠")||h.includes("开空")||h.includes("🔵")||h.includes("平空")?{type:"sell",text:h}:{type:"info",text:h});E.value=Q,Object.assign(_,{initialBalance:c.initialBalance,finalAsset:parseFloat((c.finalAsset??0).toFixed(2)),returnRate:c.returnRate,maxDrawdown:c.maxDrawdown,totalTrades:c.totalTrades,elapsed:G}),ot(()=>{$.value&&($.value.scrollTop=$.value.scrollHeight)})}else u.value="error",v.value=c.error??"未知错误";Ce(l.value,y.value),F==null||F.terminate(),F=null},F.onerror=n=>{u.value="error",v.value=n.message??"Worker 崩溃",Ce(l.value,y.value),F=null},F.postMessage({code:N.value,kData:JSON.parse(JSON.stringify(k.value)),initialBalance:i.value,lookbackDays:O.value,orderAmount:p.value})}const ye={momentum:`// 动量突破策略
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
}`};return Ke(()=>{N.value=ye.momentum,Be(l.value,y.value)}),qe(()=>{ke(),F==null||F.terminate()}),(C,n)=>(m(),b("div",Vt,[s("header",Lt,[s("div",Ot,[n[16]||(n[16]=s("span",{class:"topbar-logo"},"▲",-1)),n[17]||(n[17]=s("span",{class:"topbar-title"},"量化回测平台",-1)),n[18]||(n[18]=s("span",{class:"topbar-version"},"v4.0",-1)),le.value!==null?(m(),b("span",Dt,[W(S(l.value.replace("-USDT-SWAP",""))+" ",1),s("span",Rt,S(le.value.toFixed(le.value>=1e3?2:le.value>=10?3:4)),1),n[15]||(n[15]=s("span",{class:"topbar-live-dot"},"⬤ LIVE",-1))])):ne("",!0)]),s("div",$t,[x.value==="loading"?(m(),b("div",Gt,[n[19]||(n[19]=s("span",{class:"btn-spinner btn-spinner--accent"},null,-1)),W(" "+S(T.value||`正在拉取 ${l.value} ${Te.value} 历史数据...`),1)])):x.value==="error"?(m(),b("div",It," ⚠ 数据加载失败（已回退至内置模拟数据） ")):x.value==="success"?(m(),b("div",Ft,[W(" ✓ "+S(k.value.length)+" 根真实K线 · "+S(l.value)+" 永续 · "+S(Te.value)+"（OKX） ",1),ue.value?(m(),b("span",Ht,"⬤ LIVE")):ne("",!0)])):(m(),b("div",Pt,"就绪，请选择品种和周期后加载数据"))]),s("div",Ut,[s("span",{class:Y(["status-dot",{"status-dot--idle":u.value==="idle","status-dot--running":u.value==="running","status-dot--success":u.value==="success","status-dot--error":u.value==="error"}])},null,2),s("span",Wt,S(He.value),1)])]),s("main",Nt,[s("aside",Et,[s("section",zt,[n[24]||(n[24]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"🌐"),W(" 数据源配置 ")],-1)),s("div",jt,[s("div",Kt,[n[21]||(n[21]=s("label",{class:"form-label"},"交易品种",-1)),he(s("select",{"onUpdate:modelValue":n[0]||(n[0]=c=>l.value=c),class:"form-select",disabled:u.value==="running"||x.value==="loading",onChange:Ae},[...n[20]||(n[20]=[s("option",{value:"BTC-USDT-SWAP"},"BTC/USDT 永续合约",-1),s("option",{value:"ETH-USDT-SWAP"},"ETH/USDT 永续合约",-1),s("option",{value:"SOL-USDT-SWAP"},"SOL/USDT 永续合约",-1),s("option",{value:"BNB-USDT-SWAP"},"BNB/USDT 永续合约",-1)])],40,qt),[[Oe,l.value]])]),s("div",Jt,[n[23]||(n[23]=s("label",{class:"form-label"},"K 线周期",-1)),he(s("select",{"onUpdate:modelValue":n[1]||(n[1]=c=>y.value=c),class:"form-select",disabled:u.value==="running"||x.value==="loading",onChange:Me},[...n[22]||(n[22]=[We('<optgroup label="── 日内高频 ──"><option value="1m">1 分钟线</option><option value="5m">5 分钟线</option><option value="15m">15 分钟线</option></optgroup><optgroup label="── 中短周期 ──"><option value="1h">1 小时线</option><option value="2h">2 小时线</option><option value="4h">4 小时线</option></optgroup><optgroup label="── 长周期 ──"><option value="1d">日线</option></optgroup>',3)])],40,Yt),[[Oe,y.value]])]),s("button",{class:"btn btn--ghost btn--full",disabled:u.value==="running"||x.value==="loading",onClick:Me},[x.value==="loading"?(m(),b("span",Zt)):(m(),b("span",Qt,"↻")),W(" "+S(x.value==="loading"?"加载中...":"刷新数据"),1)],8,Xt)])]),s("section",eo,[n[29]||(n[29]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"⚙"),W(" 回测参数 ")],-1)),s("div",to,[s("div",oo,[n[25]||(n[25]=s("label",{class:"form-label"},"初始资金（USDT）",-1)),he(s("input",{"onUpdate:modelValue":n[2]||(n[2]=c=>i.value=c),type:"number",min:"100",step:"100",class:"form-input",disabled:u.value==="running"},null,8,so),[[Ue,i.value,void 0,{number:!0}]])]),s("div",no,[n[26]||(n[26]=s("label",{class:"form-label"},"开仓数量",-1)),he(s("input",{"onUpdate:modelValue":n[3]||(n[3]=c=>p.value=c),type:"number",min:"0.0001",step:"0.1",class:"form-input",disabled:u.value==="running",placeholder:"输入 1 = 1 BTC / 1 ETH"},null,8,ao),[[Ue,p.value,void 0,{number:!0}]])]),s("div",lo,[n[28]||(n[28]=s("label",{class:"form-label"},"策略模板库",-1)),he(s("select",{"onUpdate:modelValue":n[4]||(n[4]=c=>te.value=c),class:"form-select",disabled:u.value==="running",onChange:Re},[...n[27]||(n[27]=[We('<optgroup label="── 经典技术指标 ──"><option value="momentum">📈 动量突破策略</option><option value="ma_cross">〰️ 双均线金叉死叉（MA5/MA10）</option><option value="ma5_ma20_death">〰️ 双均线金叉死叉（MA5/MA20）</option><option value="rsi">📊 RSI 超买超卖反转</option></optgroup><optgroup label="── Rumers Magic Lines ──"><option value="rumers">🔮 Rumers Magic Lines（爆仓线反转）</option></optgroup><optgroup label="── 聪明钱 SMC ──"><option value="smc_ob">🏦 订单块回踩做多（Order Block）</option><option value="smc_ls">🎯 流动性猎取反转（Liquidity Sweep）</option><option value="smc_bos">🔺 市场结构突破做多（BOS）</option></optgroup><optgroup label="── 价格行为 PA ──"><option value="pa_engulf">🕯️ 看涨吞没形态（Engulfing）</option><option value="pa_pinbar">📍 锤子线 / 针形态（Pin Bar）</option><option value="pa_sr">🧲 支撑阻力反弹（S/R Bounce）</option></optgroup><optgroup label="── 自定义 ──"><option value="custom">✏️ 自定义策略</option></optgroup>',5)])],40,ro),[[Oe,te.value]])]),s("button",{class:"btn btn--primary btn--full",disabled:u.value==="running"||x.value==="loading",onClick:Pe},[u.value==="running"?(m(),b("span",co)):(m(),b("span",uo,"▶")),W(" "+S(u.value==="running"?"回测运行中...":"开始回测"),1)],8,io),s("button",{class:"btn btn--ghost btn--full mt-8",disabled:u.value==="running",onClick:ve}," ↺ 重置 ",8,po)])]),s("section",ho,[n[30]||(n[30]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"✎"),W(" 策略编辑器 "),s("span",{class:"card-header-badge"},"JavaScript")],-1)),s("div",fo,[he(s("textarea",{"onUpdate:modelValue":n[5]||(n[5]=c=>N.value=c),class:"code-editor",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",disabled:u.value==="running",placeholder:`// 在此输入你的策略代码
// 必须声明 onTick() 函数
function onTick() { ... }`},null,8,vo),[[Ue,N.value]])])])]),s("section",go,[s("div",mo,[s("span",bo,S(l.value)+" · 永续合约",1),s("span",ko,S(Te.value),1),s("span",yo,S(k.value.length)+" 根 K 线",1),ue.value?(m(),b("span",_o," ⬤ LIVE ")):x.value==="success"?(m(),b("span",So," LIVE DATA ")):x.value==="loading"?(m(),b("span",xo," LOADING... ")):(m(),b("span",wo," MOCK DATA ")),s("div",Co,[s("button",{class:Y(["ma-toggle-btn",{active:g.ma5}]),style:{"--ma-color":"#f6c90e"},onClick:n[6]||(n[6]=c=>g.ma5=!g.ma5)},"MA5",2),s("button",{class:Y(["ma-toggle-btn",{active:g.ma10}]),style:{"--ma-color":"#2196f3"},onClick:n[7]||(n[7]=c=>g.ma10=!g.ma10)},"MA10",2),s("button",{class:Y(["ma-toggle-btn",{active:g.ma20}]),style:{"--ma-color":"#e040fb"},onClick:n[8]||(n[8]=c=>g.ma20=!g.ma20)},"MA20",2)]),s("div",To,[s("button",{class:Y(["ma-toggle-btn",{active:ae.value}]),style:{"--ma-color":"#26a69a"},onClick:n[9]||(n[9]=c=>ae.value=!ae.value),title:"在K线上显示策略买卖圆圈标记"},"策略圆圈",2),s("button",{class:Y(["ma-toggle-btn",{active:Z.value}]),style:{"--ma-color":"#29b6f6"},onClick:n[10]||(n[10]=c=>Z.value=!Z.value),title:"显示市场大单气泡（大户/散户真实成交量异动）"},"市场大单",2),s("button",{class:Y(["ma-toggle-btn",{active:ce.value}]),style:{"--ma-color":"#b39ddb"},onClick:n[11]||(n[11]=c=>ce.value=!ce.value),title:"显示亚盘/欧盘/美盘时段背景色带"},"时段",2),s("button",{class:Y(["ma-toggle-btn",{active:I.value}]),style:{"--ma-color":"#64b5f6"},onClick:n[12]||(n[12]=c=>I.value=!I.value),title:"显示底部成交量柱状图"},"成交量",2),s("button",{class:Y(["ma-toggle-btn",{active:K.value}]),style:{"--ma-color":"#ff9800"},onClick:n[13]||(n[13]=c=>K.value=!K.value),title:"显示底部 OBV 指标"},"OBV",2)])]),s("div",Bo,[tt(Mt,{ref_key:"klineChartRef",ref:L,kData:k.value,markers:w.value,showMA:g,showVolume:I.value,showOBV:K.value,showVolCircle:ae.value,showMarketBubble:Z.value,showSession:ce.value,theme:"dark",upColor:"#26a69a",downColor:"#ef5350"},null,8,["kData","markers","showMA","showVolume","showOBV","showVolCircle","showMarketBubble","showSession"])])]),s("aside",Ao,[s("section",Mo,[n[40]||(n[40]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"📊"),W(" 回测统计 ")],-1)),s("div",Vo,[s("div",Lo,[s("div",Oo,[n[32]||(n[32]=s("div",{class:"stat-label"},"初始资金",-1)),s("div",Do,[W(S(_.initialBalance>0?_.initialBalance.toLocaleString():"--")+" ",1),n[31]||(n[31]=s("span",{class:"stat-unit"},"USDT",-1))])]),s("div",Ro,[n[34]||(n[34]=s("div",{class:"stat-label"},"最终资产",-1)),s("div",{class:Y(["stat-value",{"stat-value--profit":_.finalAsset>_.initialBalance,"stat-value--loss":_.finalAsset<_.initialBalance&&_.initialBalance>0}])},[W(S(_.finalAsset>0?_.finalAsset.toLocaleString():"--")+" ",1),n[33]||(n[33]=s("span",{class:"stat-unit"},"USDT",-1))],2)]),s("div",$o,[n[35]||(n[35]=s("div",{class:"stat-label"},"收益率",-1)),s("div",{class:Y(["stat-value stat-value--large",{"stat-value--profit":(_.returnRate??0)>0,"stat-value--loss":(_.returnRate??0)<0}])},S(_.returnRate!==null?(_.returnRate>0?"+":"")+_.returnRate+"%":"--"),3)]),s("div",Go,[n[36]||(n[36]=s("div",{class:"stat-label"},"最大回撤",-1)),s("div",Io,S(_.maxDrawdown!==null?_.maxDrawdown+"%":"--"),1)]),s("div",Fo,[n[38]||(n[38]=s("div",{class:"stat-label"},"总交易次数",-1)),s("div",Ho,[W(S(_.totalTrades!==null?_.totalTrades:"--")+" ",1),n[37]||(n[37]=s("span",{class:"stat-unit"},"次",-1))])]),s("div",Po,[n[39]||(n[39]=s("div",{class:"stat-label"},"回测耗时",-1)),s("div",Uo,S(_.elapsed!==null?_.elapsed+" ms":"--"),1)])])])]),s("section",Wo,[s("div",No,[n[41]||(n[41]=s("span",{class:"card-header-icon"},"📋",-1)),n[42]||(n[42]=W(" 运行日志 ",-1)),s("span",Eo,S(E.value.length)+" 条",1),E.value.length>0?(m(),b("button",{key:0,class:"btn-icon ml-auto",title:"清空日志",onClick:n[14]||(n[14]=c=>E.value=[])},"✕")):ne("",!0)]),s("div",zo,[s("div",{ref_key:"logPanelRef",ref:$,class:"log-panel"},[u.value==="error"?(m(),b("div",jo,[n[43]||(n[43]=s("span",{class:"log-error-icon"},"⚠",-1)),W(" "+S(v.value),1)])):ne("",!0),E.value.length===0&&u.value!=="error"?(m(),b("div",Ko,[...n[44]||(n[44]=[s("span",null,"尚无日志。点击「开始回测」后，策略运行日志将在此显示。",-1)])])):ne("",!0),(m(!0),b(Je,null,Ye(E.value,(c,G)=>(m(),b("div",{key:G,class:Y(["log-entry",{"log-entry--buy":c.type==="buy","log-entry--sell":c.type==="sell","log-entry--info":c.type==="info"}])},[s("span",qo,S(String(G+1).padStart(3,"0")),1),s("span",Jo,S(c.text),1)],2))),128))],512)])])])])]))}});st(Yo).mount("#app");
