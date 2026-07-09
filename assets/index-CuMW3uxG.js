var Xe=Object.defineProperty;var et=(J,B,l)=>B in J?Xe(J,B,{enumerable:!0,configurable:!0,writable:!0,value:l}):J[B]=l;var A=(J,B,l)=>et(J,typeof B!="symbol"?B+"":B,l);import{d as Ue,o as Ie,a as Pe,w as ee,b,c as k,e as s,n as q,f as W,t as S,g as ie,v as Ce,h as Re,i as ne,F as Ne,r as We,j as v,k as De,l as tt,m as Ge,p as Fe,q as ot,s as st}from"./vendor-vue-DxO1aeAH.js";import{a as nt,G as at,L as lt,Q as rt,C as He,K as it,$ as ct}from"./vendor-charts-Cduodv0X.js";(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const L of p.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&_(L)}).observe(document,{childList:!0,subtree:!0});function l(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function _(i){if(i.ep)return;i.ep=!0;const p=l(i);fetch(i.href,p)}})();const ut={class:"kline-chart-wrapper"},dt={class:"trendline-toolbar"},pt=["disabled"],ht=["disabled"],ft={key:0,class:"tl-hint"},vt={key:1,class:"tl-hint tl-hint--active"},gt={key:2,class:"tl-count"},mt=["width","height"],bt=["x1","y1","x2","y2","stroke","stroke-dasharray"],kt=["cx","cy","fill"],yt=["cx","cy","fill"],_t={key:0},xt=["x1","y1","x2","y2","stroke"],wt=["cx","cy","fill"],St=["cx","cy","fill"],Ct=["cx","cy","fill"],Ve=20,Tt=2,Bt=Ue({__name:"KLineChart",props:{kData:{},markers:{default:()=>[]},theme:{default:"dark"},upColor:{default:"#26a69a"},downColor:{default:"#ef5350"},showMA:{default:()=>({ma5:!0,ma10:!0,ma20:!0})},showVolume:{type:Boolean,default:!0},showOBV:{type:Boolean,default:!1},showVolCircle:{type:Boolean,default:!0},showMarketBubble:{type:Boolean,default:!0},showSession:{type:Boolean,default:!0}},setup(J,{expose:B}){const l=J,_=v(null);let i=null,p=null,L=null,Q=null,H=null,x=null,c=null,C=null,f=null,m=null,w=null,U=null;const D=v(!1),g=v(null),$=v(null),E=v([]),te=v({width:0,height:0}),K=v("#FFD700"),ae=v("dashed");function y(t){return t<10?8:t<50?14:22}function G(t){return t<10?9:t<50?11:13}class X{constructor(e,a,o,r){A(this,"_points");A(this,"_series");A(this,"_chart");A(this,"_visible");this._points=e,this._series=a,this._chart=o,this._visible=r}draw(e){!this._visible||!this._series||!this._chart||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio;for(const d of this._points){const M=this._chart.timeScale().timeToCoordinate(d.time);if(M===null)continue;const O=M*r,F=this._series.priceToCoordinate(d.price);if(F===null)continue;const se=F*a.verticalPixelRatio,j=y(d.amount)*r,ue=G(d.amount)*r,fe=d.side==="buy",N=d.side==="cover";let T,V;d.isMarket?d.side==="buy"?(T="rgba(41,182,246,0.20)",V="#29b6f6"):(T="rgba(255,112,67,0.20)",V="#ff7043"):d.side==="buy"?(T="rgba(0,230,118,0.18)",V="#00e676"):d.side==="sell"?(T="rgba(255,82,82,0.18)",V="#ff5252"):d.side==="short"?(T="rgba(255,152,0,0.18)",V="#ff9800"):(T="rgba(0,229,255,0.18)",V="#00e5ff");const Te=fe||N?j+4*r:-(j+4*r),de=se+Te;o.save(),o.beginPath(),o.arc(O,de,j,0,Math.PI*2),o.fillStyle=T,o.fill(),o.lineWidth=1.5*r,o.strokeStyle=V,o.stroke(),o.shadowColor=V,o.shadowBlur=6*r,o.beginPath(),o.arc(O,de,j,0,Math.PI*2),o.strokeStyle=V,o.lineWidth=.8*r,o.stroke(),o.shadowBlur=0;const Se=d.label.length>8?d.label.slice(0,8):d.label;if(o.font=`bold ${ue}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillStyle=V,o.fillText(Se,O,de),d.subLabel){const ve=Math.max(8,ue*.85);o.font=`${ve}px sans-serif`,o.fillStyle=V,o.globalAlpha=.85;const Be=fe||N?j+ve+2*r:-(j+ve+2*r);o.fillText(d.subLabel,O,se+Be),o.globalAlpha=1}o.restore()}})}}class le{constructor(e){A(this,"_renderer");this._renderer=e}zOrder(){return"top"}renderer(){return this._renderer}}class pe{constructor(){A(this,"_points",[]);A(this,"_visible",!0);A(this,"_attachedSeries",null);A(this,"_attachedChart",null);A(this,"_paneView",null)}attached(e){this._attachedChart=e.chart,this._attachedSeries=e.series,this._rebuildView()}detached(){this._attachedChart=null,this._attachedSeries=null,this._paneView=null}updateAllViews(){this._rebuildView()}paneViews(){return this._paneView?[this._paneView]:[]}setPoints(e){this._points=e,this._rebuildView()}setVisible(e){this._visible=e,this._rebuildView()}_rebuildView(){const e=new X(this._points,this._attachedSeries,this._attachedChart,this._visible);this._paneView=new le(e)}}const he=[{startHour:8,endHour:17,fillColor:"rgba(255,220,80,0.045)",strokeColor:"rgba(255,200,50,0.5)",label:"亚盘"},{startHour:15,endHour:24,fillColor:"rgba(80,160,255,0.045)",strokeColor:"rgba(80,150,255,0.5)",label:"欧盘"},{startHour:21.5,endHour:28,fillColor:"rgba(180,80,255,0.05)",strokeColor:"rgba(160,80,255,0.55)",label:"美盘"}];function me(t,e){const a=t+(e.startHour-8)*3600,o=t+(e.endHour-8)*3600;return[a,o]}class Ae{constructor(e,a,o){A(this,"_chart");A(this,"_visible");A(this,"_bars");this._chart=e,this._visible=a,this._bars=o}draw(e){!this._visible||!this._chart||this._bars.length===0||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio,d=a.verticalPixelRatio,M=o.canvas.height,O=this._chart.timeScale(),F=O.getVisibleRange();if(!F)return;const se=F.from,j=F.to,ue=Math.floor(se/86400)*86400,fe=Math.floor(j/86400)*86400;for(let N=ue;N<=fe+86400;N+=86400)for(const T of he){const[V,Te]=me(N,T),de=Math.max(V,se),Se=Math.min(Te,j);if(de>=Se)continue;const ve=O.timeToCoordinate(de),Be=O.timeToCoordinate(Se);if(ve===null||Be===null)continue;const ge=ve*r,Me=Be*r;Me-ge<1||(o.save(),o.fillStyle=T.fillColor,o.fillRect(ge,0,Me-ge,M),o.strokeStyle=T.strokeColor,o.lineWidth=1*r,o.setLineDash([4*r,3*r]),o.beginPath(),o.moveTo(ge,0),o.lineTo(ge,M),o.stroke(),Math.abs(de-V)<60&&(o.setLineDash([]),o.font=`bold ${11*d}px sans-serif`,o.fillStyle=T.strokeColor,o.globalAlpha=.9,o.textAlign="left",o.textBaseline="top",o.fillText(T.label+" 开",ge+3*r,4*d),o.globalAlpha=1),Math.abs(Se-Te)<60&&(o.strokeStyle=T.strokeColor,o.lineWidth=1*r,o.setLineDash([2*r,3*r]),o.globalAlpha=.6,o.beginPath(),o.moveTo(Me,0),o.lineTo(Me,M),o.stroke(),o.globalAlpha=1),o.restore())}})}}class Le{constructor(e){A(this,"_renderer");this._renderer=e}zOrder(){return"bottom"}renderer(){return this._renderer}}class be{constructor(){A(this,"_visible",!0);A(this,"_bars",[]);A(this,"_chart",null);A(this,"_paneView",null)}attached(e){this._chart=e.chart,this._rebuild()}detached(){this._chart=null,this._paneView=null}updateAllViews(){this._rebuild()}paneViews(){return this._paneView?[this._paneView]:[]}setBars(e){this._bars=e,this._rebuild()}setVisible(e){this._visible=e,this._rebuild()}_rebuild(){const e=new Ae(this._chart,this._visible,this._bars);this._paneView=new Le(e)}}function re(t){if(typeof t=="number"||/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?t:Math.floor(a/1e3)}function ke(t){if(typeof t=="number")return t;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return Math.floor(Date.parse(t+"T00:00:00Z")/1e3);const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?0:Math.floor(a/1e3)}function Oe(t){return t.startsWith("多买")?"buy":t.startsWith("多平")?"sell":t.startsWith("空开")?"short":"cover"}function ye(t){return t.filter(e=>e.time!==void 0&&e.time!==null&&e.time!=="").map(e=>{const a=Oe(e.text),o=e.amount>=1?e.amount.toFixed(2):e.amount.toFixed(4);let r;return a==="buy"?r=`LONG ${o}`:a==="short"?r=`SHORT ${o}`:r=`CLOSE ${o}`,{time:ke(e.time),price:e.price,amount:e.amount,side:a,label:r}})}function _e(t){if(t.length<Ve+1)return[];const e=[];for(let a=Ve;a<t.length;a++){const o=t[a];if(!o.volume||o.volume<=0)continue;let r=0;for(let V=a-Ve;V<a;V++)r+=(t[V].volume??t[V].revenue)||0;const d=r/Ve;if(d<=0)continue;const M=o.volume/d;if(M<Tt)continue;let O;M>=5?O=80:M>=3?O=25:O=5;const F=o.close>=o.open,se=F?"buy":"sell",j=F?o.high:o.low,ue=M>=10?`×${Math.round(M)}`:`×${M.toFixed(1)}`,fe=F?`买${ue}`:`卖${ue}`,N=o.volume;let T;N>=1e4?T=`${(N/1e4).toFixed(1)}万枚`:N>=1e3?T=`${(N/1e3).toFixed(2)}K枚`:N>=1?T=`${N.toFixed(1)}枚`:T=`${N.toFixed(3)}枚`,e.push({time:ke(o.time),price:j,amount:O,side:se,label:fe,subLabel:T,isMarket:!0})}return e}function xe(t,e,a){const o=a==="dark";return{width:t,height:e,layout:{background:{type:ct.Solid,color:o?"#1a1a2e":"#ffffff"},textColor:o?"#d1d4dc":"#333333"},grid:{vertLines:{color:o?"#2a2a4a":"#e0e0e0"},horzLines:{color:o?"#2a2a4a":"#e0e0e0"}},crosshair:{mode:it.Normal,vertLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"},horzLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"}},rightPriceScale:{borderColor:o?"#485c7b":"#cccccc"},timeScale:{borderColor:o?"#485c7b":"#cccccc",timeVisible:!0,secondsVisible:!1,rightOffset:5,barSpacing:8,minBarSpacing:2},localization:{timeFormatter:r=>{const d=new Date((r+28800)*1e3),M=d.getUTCFullYear(),O=String(d.getUTCMonth()+1).padStart(2,"0"),F=String(d.getUTCDate()).padStart(2,"0"),se=String(d.getUTCHours()).padStart(2,"0"),j=String(d.getUTCMinutes()).padStart(2,"0");return`${M}-${O}-${F} ${se}:${j}`}},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0}}}function I(t,e){return{upColor:t,downColor:e,borderUpColor:t,borderDownColor:e,wickUpColor:t,wickDownColor:e}}const n=[{period:5,color:"#f6c90e",key:"ma5"},{period:10,color:"#2196f3",key:"ma10"},{period:20,color:"#e040fb",key:"ma20"}];function u(t,e){const a=[];for(let o=e-1;o<t.length;o++){let r=0;for(let d=o-e+1;d<=o;d++)r+=t[d].close;a.push({time:re(t[o].time),value:r/e})}return a}function P(t,e){return i.addSeries(He,{color:t,lineWidth:1,priceLineVisible:!1,lastValueVisible:!0,crosshairMarkerVisible:!0,visible:e})}function z(t){if(!i)return;const e=n.map(a=>({series:a.key==="ma5"?Q:a.key==="ma10"?H:x,data:u(t,a.period)}));for(const{series:a,data:o}of e)a&&a.setData(o)}function h(t,e){const a=t.trim();if(a.startsWith("#")){let o,r,d;if(a.length===7)o=parseInt(a.slice(1,3),16),r=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16);else if(a.length===4)o=parseInt(a[1]+a[1],16),r=parseInt(a[2]+a[2],16),d=parseInt(a[3]+a[3],16);else return a;return`rgba(${o},${r},${d},${e})`}return a}function oe(t,e,a){return t.map(o=>({time:re(o.time),value:o.revenue,color:o.close>=o.open?h(e,.7):h(a,.7)}))}function R(t){const e=[];let a=0;for(let o=0;o<t.length;o++)o===0?a=t[o].revenue:a+=t[o].close>=t[o-1].close?t[o].revenue:-t[o].revenue,e.push({time:re(t[o].time),value:a});return e}function Y(t){return t.map(e=>typeof e.time!="string"&&typeof e.time!="number"||typeof e.open!="number"||typeof e.high!="number"||typeof e.low!="number"||typeof e.close!="number"?null:{time:re(e.time),open:e.open,high:e.high,low:e.low,close:e.close}).filter(e=>e!==null)}function Z(t){return t.map(e=>e.time===void 0||e.time===null||e.time===""?null:{time:re(e.time),position:e.position,color:e.color,shape:e.shape,text:e.text}).filter(e=>e!==null).sort((e,a)=>e.time-a.time)}function Ee(){const t=_.value;if(!t)return;const e=t.clientWidth||800,a=t.clientHeight||500;i=nt(t,xe(e,a,l.theme)),p=i.addSeries(at,I(l.upColor,l.downColor)),L=lt(p,[]),f=new pe,p.attachPrimitive(f),f.setVisible(l.showVolCircle),m=new pe,p.attachPrimitive(m),m.setVisible(l.showMarketBubble),w=new be,p.attachPrimitive(w),w.setVisible(l.showSession),Q=P(n[0].color,l.showMA.ma5),H=P(n[1].color,l.showMA.ma10),x=P(n[2].color,l.showMA.ma20),c=i.addSeries(rt,{priceFormat:{type:"volume"},priceScaleId:"vol",lastValueVisible:!1,priceLineVisible:!1,visible:l.showVolume},1),i.priceScale("vol",1).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),C=i.addSeries(He,{color:"#ff9800",lineWidth:1,priceScaleId:"obv",lastValueVisible:!1,priceLineVisible:!1,crosshairMarkerVisible:!0,visible:l.showOBV},2),i.priceScale("obv",2).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),l.kData&&l.kData.length>0&&(p.setData(Y(l.kData)),z(l.kData),c.setData(oe(l.kData,l.upColor,l.downColor)),C.setData(R(l.kData)),m.setPoints(_e(l.kData)),w.setBars(l.kData),ce=l.kData.length,we=!0,i.timeScale().fitContent()),l.markers&&l.markers.length>0&&(L.setMarkers(Z(l.markers)),f.setPoints(ye(l.markers)))}function ze(){D.value=!D.value,g.value=null,$.value=null,_.value&&(_.value.style.cursor=D.value?"crosshair":"default")}function $e(t){const e=_.value;if(!e)return null;const a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}function je(t){if(!D.value)return;const e=$e(t);e&&(g.value?(E.value.push({x1:g.value.x,y1:g.value.y,x2:e.x,y2:e.y,color:K.value,style:ae.value}),g.value=null,$.value=null):(g.value=e,$.value=e))}function qe(t){if(!D.value||!g.value)return;const e=$e(t);e&&($.value=e)}function Je(){E.value.pop()}function Ke(){E.value=[],g.value=null,$.value=null}function Ye(){const t=_.value;t&&(te.value={width:t.clientWidth,height:t.clientHeight})}function Ze(){const t=_.value;!t||!i||(U=new ResizeObserver(e=>{for(const a of e){const{width:o,height:r}=a.contentRect;i&&o>0&&r>0&&(i.applyOptions({width:o,height:r}),te.value={width:o,height:r})}}),U.observe(t))}Ie(()=>{Ee(),Ze(),Ye()}),Pe(()=>{if(U&&(U.disconnect(),U=null),p&&f)try{p.detachPrimitive(f)}catch{}if(p&&m)try{p.detachPrimitive(m)}catch{}if(p&&w)try{p.detachPrimitive(w)}catch{}i&&(i.remove(),i=null,p=null,L=null,f=null,m=null,w=null,we=!1,ce=0,Q=null,H=null,x=null,c=null,C=null)});let ce=0,we=!1;ee(()=>l.kData,t=>{if(!p||!i)return;if(!t||t.length===0){p.setData([]),c==null||c.setData([]),C==null||C.setData([]),m==null||m.setPoints([]),ce=0,we=!1;return}const e=t.length!==ce,a=!we;if(a||e)p.setData(Y(t)),z(t),c==null||c.setData(oe(t,l.upColor,l.downColor)),C==null||C.setData(R(t)),m==null||m.setPoints(_e(t)),w==null||w.setBars(t),ce=t.length,a&&(we=!0,i.timeScale().fitContent());else{const o=t[t.length-1],r=Y([o])[0];r&&p.update(r),z(t);const d=oe([o],l.upColor,l.downColor)[0];d&&(c==null||c.update(d)),C==null||C.setData(R(t))}L&&(l.markers&&l.markers.length>0?(L.setMarkers(Z(l.markers)),f==null||f.setPoints(ye(l.markers))):(L.setMarkers([]),f==null||f.setPoints([])))},{deep:!0}),ee(()=>l.markers,t=>{if(p){if(!t||t.length===0){L==null||L.setMarkers([]),f==null||f.setPoints([]);return}L==null||L.setMarkers(Z(t)),f==null||f.setPoints(ye(t))}},{deep:!0}),ee(()=>l.theme,t=>{if(!i||!_.value)return;const e=_.value;i.applyOptions(xe(e.clientWidth,e.clientHeight,t))}),ee(()=>[l.upColor,l.downColor],([t,e])=>{p&&(p.applyOptions(I(t,e)),l.kData&&l.kData.length>0&&(c==null||c.setData(oe(l.kData,t,e))))}),ee(()=>l.showMA,t=>{Q==null||Q.applyOptions({visible:t.ma5}),H==null||H.applyOptions({visible:t.ma10}),x==null||x.applyOptions({visible:t.ma20})},{deep:!0}),ee(()=>l.showVolume,t=>{c==null||c.applyOptions({visible:t})}),ee(()=>l.showOBV,t=>{C==null||C.applyOptions({visible:t})}),ee(()=>l.showVolCircle,t=>{f==null||f.setVisible(t),i&&i.applyOptions({})}),ee(()=>l.showMarketBubble,t=>{m==null||m.setVisible(t),i&&i.applyOptions({})}),ee(()=>l.showSession,t=>{w==null||w.setVisible(t),i&&i.applyOptions({})});function Qe(t){if(console.log("[pushTick] called, chart=",!!i,"candlestick=",!!p,"bar.close=",t.close),!p||!i){console.warn("[pushTick] chart or candlestickSeries is null, skipping");return}const e=l.kData;if(!e||e.length===0)return;const a=e.length>ce,o=re(t.time);if(p.update({time:o,open:t.open,high:t.high,low:t.low,close:t.close}),c){const r=t.close>=t.open;c.update({time:o,value:t.revenue,color:h(r?l.upColor:l.downColor,.7)})}for(const r of n){const d=r.key==="ma5"?Q:r.key==="ma10"?H:x;if(!d)continue;const M=r.period;if(e.length<M)continue;let O=0;for(let F=e.length-M;F<e.length;F++)O+=e[F].close;d.update({time:o,value:O/M})}if(C&&e.length>=2){const r=R(e),d=r[r.length-1];d&&C.update(d)}a&&(m==null||m.setPoints(_e(e)),w==null||w.setBars(e),ce=e.length)}return B({pushTick:Qe}),(t,e)=>(b(),k("div",ut,[s("div",dt,[s("button",{class:q(["tl-btn",{"tl-btn--active":D.value}]),title:"画趋势线（点击两个点确定一条线）",onClick:ze},[e[2]||(e[2]=s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[s("line",{x1:"2",y1:"13",x2:"14",y2:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),s("circle",{cx:"2",cy:"13",r:"2",fill:"currentColor"}),s("circle",{cx:"14",cy:"3",r:"2",fill:"currentColor"})],-1)),W(" "+S(D.value?"取消画线":"画趋势线"),1)],2),ie(s("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>K.value=a),class:"tl-color-select",title:"线条颜色"},[...e[3]||(e[3]=[Re('<option value="#FFD700" data-v-27ef3141>金色</option><option value="#ff5252" data-v-27ef3141>红色</option><option value="#00e676" data-v-27ef3141>绿色</option><option value="#29b6f6" data-v-27ef3141>蓝色</option><option value="#e040fb" data-v-27ef3141>紫色</option><option value="#ffffff" data-v-27ef3141>白色</option>',6)])],512),[[Ce,K.value]]),ie(s("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>ae.value=a),class:"tl-style-select",title:"线条样式"},[...e[4]||(e[4]=[s("option",{value:"solid"},"实线",-1),s("option",{value:"dashed"},"虚线",-1),s("option",{value:"dotted"},"点线",-1)])],512),[[Ce,ae.value]]),s("button",{class:"tl-btn tl-btn--danger",disabled:E.value.length===0,title:"删除最后一条趋势线",onClick:Je},"撤销",8,pt),s("button",{class:"tl-btn tl-btn--danger",disabled:E.value.length===0,title:"清空所有趋势线",onClick:Ke},"清空",8,ht),D.value&&!g.value?(b(),k("span",ft,"点击图表选择第一个点")):ne("",!0),D.value&&g.value?(b(),k("span",vt,"再点击选择第二个点")):ne("",!0),E.value.length>0&&!D.value?(b(),k("span",gt,S(E.value.length)+" 条线",1)):ne("",!0)]),s("div",{ref_key:"chartContainerRef",ref:_,class:"kline-chart-container",onClick:je,onMousemove:qe},[(b(),k("svg",{class:"trendline-svg",width:te.value.width,height:te.value.height,style:{"pointer-events":"none"}},[(b(!0),k(Ne,null,We(E.value,(a,o)=>(b(),k("g",{key:o},[s("line",{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,stroke:a.color,"stroke-width":2,"stroke-dasharray":a.style==="dashed"?"8,4":a.style==="dotted"?"2,4":"none","stroke-linecap":"round",opacity:"0.9"},null,8,bt),s("circle",{cx:a.x1,cy:a.y1,r:"4",fill:a.color,opacity:"0.8"},null,8,kt),s("circle",{cx:a.x2,cy:a.y2,r:"4",fill:a.color,opacity:"0.8"},null,8,yt)]))),128)),D.value&&g.value&&$.value?(b(),k("g",_t,[s("line",{x1:g.value.x,y1:g.value.y,x2:$.value.x,y2:$.value.y,stroke:K.value,"stroke-width":"1.5","stroke-dasharray":"6,3","stroke-linecap":"round",opacity:"0.6"},null,8,xt),s("circle",{cx:g.value.x,cy:g.value.y,r:"5",fill:K.value,opacity:"0.9"},null,8,wt),s("circle",{cx:$.value.x,cy:$.value.y,r:"3",fill:K.value,opacity:"0.5"},null,8,St)])):ne("",!0),D.value&&g.value&&!$.value?(b(),k("circle",{key:1,cx:g.value.x,cy:g.value.y,r:"5",fill:K.value,opacity:"0.9"},null,8,Ct)):ne("",!0)],8,mt))],544)]))}}),Mt=(J,B)=>{const l=J.__vccOpts||J;for(const[_,i]of B)l[_]=i;return l},Vt=Mt(Bt,[["__scopeId","data-v-27ef3141"]]),At={class:"quant-app"},Lt={class:"topbar"},Ot={class:"topbar-center"},Dt={key:0,class:"data-loading-badge"},Rt={key:1,class:"data-error-badge"},$t={key:2,class:"data-success-badge"},Gt={key:0,class:"ws-live-dot",title:"WebSocket 实时行情已连接"},Ft={key:3,class:"data-idle-badge"},Ht={class:"topbar-status"},Ut={class:"status-text"},It={class:"main-layout"},Pt={class:"sidebar sidebar--left"},Nt={class:"card"},Wt={class:"card-body"},Et={class:"form-group"},zt=["disabled"],jt={class:"form-group"},qt=["disabled"],Jt=["disabled"],Kt={key:0,class:"btn-spinner"},Yt={key:1},Zt={class:"card"},Qt={class:"card-body"},Xt={class:"form-group"},eo=["disabled"],to={class:"form-group"},oo=["disabled"],so={class:"form-group"},no=["disabled"],ao=["disabled"],lo={key:0,class:"btn-spinner"},ro={key:1},io=["disabled"],co={class:"card card--grow"},uo={class:"card-body card-body--stretch"},po=["disabled"],ho={class:"chart-area"},fo={class:"chart-area-header"},vo={class:"chart-symbol"},go={class:"chart-period"},mo={class:"chart-bars-count"},bo={key:0,class:"chart-data-badge chart-data-badge--live"},ko={key:1,class:"chart-data-badge chart-data-badge--live"},yo={key:2,class:"chart-data-badge chart-data-badge--loading"},_o={key:3,class:"chart-data-badge chart-data-badge--mock"},xo={class:"ma-toggle-group"},wo={class:"ma-toggle-group"},So={class:"chart-wrapper"},Co={class:"sidebar sidebar--right"},To={class:"card"},Bo={class:"card-body"},Mo={class:"stat-grid"},Vo={class:"stat-item"},Ao={class:"stat-value"},Lo={class:"stat-item"},Oo={class:"stat-item"},Do={class:"stat-item"},Ro={class:"stat-value stat-value--warning"},$o={class:"stat-item"},Go={class:"stat-value"},Fo={class:"stat-item"},Ho={class:"stat-value"},Uo={class:"card card--grow"},Io={class:"card-header"},Po={class:"card-header-badge"},No={class:"card-body card-body--stretch card-body--no-padding"},Wo={key:0,class:"log-error-banner"},Eo={key:1,class:"log-empty"},zo={class:"log-index"},jo={class:"log-text"},qo=Ue({__name:"App",setup(J){const B=v(null),l=v("ETHUSDT"),_=v("1h"),i=v(1e4),p=v(1),L=v(1),Q=v("momentum"),H=v(""),x=v("idle"),c=v("idle"),C=v(""),f=v(""),m=v([]),w=v([]),U=v([]),D=v(null),g=Ge({ma5:!0,ma10:!0,ma20:!0}),$=v(!0),E=v(!1),te=v(!0),K=v(!0),ae=v(!0),y=Ge({initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null});let G=null,X=null;const le=v(!1);function pe(){he();const I=l.value.toLowerCase(),n=_.value,u=`wss://fstream.binance.com/ws/${I}@kline_${n}`;X=new WebSocket(u),X.onopen=()=>{le.value=!0},X.onmessage=P=>{try{const h=JSON.parse(P.data).k;if(!h)return;const oe=Math.floor(h.t/1e3),R=m.value;if(R.length===0)return;const Y={time:oe,open:parseFloat(h.o),high:parseFloat(h.h),low:parseFloat(h.l),close:parseFloat(h.c),volume:parseFloat(h.v),revenue:parseFloat(h.q)},Z=R[R.length-1];if(Z.time===oe)Z.open=Y.open,Z.high=Y.high,Z.low=Y.low,Z.close=Y.close,Z.volume=Y.volume,Z.revenue=Y.revenue;else if(oe>Z.time)R.push(Y);else return;B.value?B.value.pushTick(Y):console.warn("[WS] klineChartRef.value is null, pushTick skipped")}catch{}},X.onclose=()=>{le.value=!1},X.onerror=()=>{le.value=!1}}function he(){X&&(X.onclose=null,X.close(),X=null),le.value=!1}const me=Fe(()=>({"1m":"1分钟","5m":"5分钟","15m":"15分钟","1h":"1小时","2h":"2小时","4h":"4小时","1d":"日线"})[_.value]??_.value),Ae=Fe(()=>{switch(c.value){case"running":return"回测运行中...";case"success":return"回测完成";case"error":return"回测出错";default:return"就绪"}});async function Le(I,n,u,P){let z=`https://fapi.binance.com/fapi/v1/klines?symbol=${I}&interval=${n}&limit=${u}`;const h=await fetch(z);if(!h.ok)throw new Error(`HTTP ${h.status}`);return(await h.json()).map(R=>({time:Math.floor(R[0]/1e3),open:parseFloat(R[1]),high:parseFloat(R[2]),low:parseFloat(R[3]),close:parseFloat(R[4]),volume:parseFloat(R[5]),revenue:parseFloat(R[7])}))}async function be(I,n){he(),x.value="loading",C.value="",m.value=[],w.value=[];try{let u=[];u=await Le(I,n,1500);const P=new Map;for(const z of u)P.set(z.time,z);m.value=Array.from(P.values()).sort((z,h)=>z.time-h.time),x.value="success",pe()}catch(u){console.error("[loadKline]",u),x.value="error"}}function re(){be(l.value,_.value)}function ke(){be(l.value,_.value)}function Oe(){const I=Q.value;H.value=xe[I]??""}function ye(){w.value=[],U.value=[],c.value="idle",f.value="",Object.assign(y,{initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null})}function _e(){if(!H.value.trim()){f.value="请先输入策略代码",c.value="error";return}if(!m.value.length){f.value="请先加载K线数据",c.value="error";return}he(),c.value="running",w.value=[],U.value=[],f.value="",G&&G.terminate(),G=new Worker(new URL("/my-quant-app/assets/backtest.worker-DMR74fp0.js",import.meta.url),{type:"module"});const I=Date.now();G.onmessage=n=>{const u=n.data,P=Date.now()-I;if(u.success){c.value="success",w.value=u.tradeHistory??[];const z=(u.logs??[]).map(h=>h.includes("🟢")||h.includes("开多")?{type:"buy",text:h}:h.includes("🔴")||h.includes("平多")||h.includes("🟠")||h.includes("开空")||h.includes("🔵")||h.includes("平空")?{type:"sell",text:h}:{type:"info",text:h});U.value=z,Object.assign(y,{initialBalance:u.initialBalance,finalAsset:parseFloat((u.finalAsset??0).toFixed(2)),returnRate:u.returnRate,maxDrawdown:u.maxDrawdown,totalTrades:u.totalTrades,elapsed:P}),ot(()=>{D.value&&(D.value.scrollTop=D.value.scrollHeight)})}else c.value="error",f.value=u.error??"未知错误";pe(),G==null||G.terminate(),G=null},G.onerror=n=>{c.value="error",f.value=n.message??"Worker 崩溃",pe(),G=null},G.postMessage({code:H.value,kData:JSON.parse(JSON.stringify(m.value)),initialBalance:i.value,lookbackDays:L.value,orderAmount:p.value})}const xe={momentum:`// 动量突破策略
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
}`};return Ie(()=>{H.value=xe.momentum,be(l.value,_.value)}),Pe(()=>{he(),G==null||G.terminate()}),(I,n)=>(b(),k("div",At,[s("header",Lt,[n[16]||(n[16]=s("div",{class:"topbar-brand"},[s("span",{class:"topbar-logo"},"▲"),s("span",{class:"topbar-title"},"量化回测平台"),s("span",{class:"topbar-version"},"v4.0")],-1)),s("div",Ot,[x.value==="loading"?(b(),k("div",Dt,[n[15]||(n[15]=s("span",{class:"btn-spinner btn-spinner--accent"},null,-1)),W(" "+S(C.value||`正在拉取 ${l.value} ${me.value} 历史数据...`),1)])):x.value==="error"?(b(),k("div",Rt," ⚠ 数据加载失败（已回退至内置模拟数据） ")):x.value==="success"?(b(),k("div",$t,[W(" ✓ "+S(m.value.length)+" 根真实K线 · "+S(l.value)+" 永续 · "+S(me.value)+"（Binance Futures） ",1),le.value?(b(),k("span",Gt,"⬤ LIVE")):ne("",!0)])):(b(),k("div",Ft,"就绪，请选择品种和周期后加载数据"))]),s("div",Ht,[s("span",{class:q(["status-dot",{"status-dot--idle":c.value==="idle","status-dot--running":c.value==="running","status-dot--success":c.value==="success","status-dot--error":c.value==="error"}])},null,2),s("span",Ut,S(Ae.value),1)])]),s("main",It,[s("aside",Pt,[s("section",Nt,[n[21]||(n[21]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"🌐"),W(" 数据源配置 ")],-1)),s("div",Wt,[s("div",Et,[n[18]||(n[18]=s("label",{class:"form-label"},"交易品种",-1)),ie(s("select",{"onUpdate:modelValue":n[0]||(n[0]=u=>l.value=u),class:"form-select",disabled:c.value==="running"||x.value==="loading",onChange:re},[...n[17]||(n[17]=[s("option",{value:"BTCUSDT"},"BTC/USDT 永续合约",-1),s("option",{value:"ETHUSDT"},"ETH/USDT 永续合约",-1),s("option",{value:"SOLUSDT"},"SOL/USDT 永续合约",-1),s("option",{value:"BNBUSDT"},"BNB/USDT 永续合约",-1)])],40,zt),[[Ce,l.value]])]),s("div",jt,[n[20]||(n[20]=s("label",{class:"form-label"},"K 线周期",-1)),ie(s("select",{"onUpdate:modelValue":n[1]||(n[1]=u=>_.value=u),class:"form-select",disabled:c.value==="running"||x.value==="loading",onChange:ke},[...n[19]||(n[19]=[Re('<optgroup label="── 日内高频 ──"><option value="1m">1 分钟线</option><option value="5m">5 分钟线</option><option value="15m">15 分钟线</option></optgroup><optgroup label="── 中短周期 ──"><option value="1h">1 小时线</option><option value="2h">2 小时线</option><option value="4h">4 小时线</option></optgroup><optgroup label="── 长周期 ──"><option value="1d">日线</option></optgroup>',3)])],40,qt),[[Ce,_.value]])]),s("button",{class:"btn btn--ghost btn--full",disabled:c.value==="running"||x.value==="loading",onClick:ke},[x.value==="loading"?(b(),k("span",Kt)):(b(),k("span",Yt,"↻")),W(" "+S(x.value==="loading"?"加载中...":"刷新数据"),1)],8,Jt)])]),s("section",Zt,[n[26]||(n[26]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"⚙"),W(" 回测参数 ")],-1)),s("div",Qt,[s("div",Xt,[n[22]||(n[22]=s("label",{class:"form-label"},"初始资金（USDT）",-1)),ie(s("input",{"onUpdate:modelValue":n[2]||(n[2]=u=>i.value=u),type:"number",min:"100",step:"100",class:"form-input",disabled:c.value==="running"},null,8,eo),[[De,i.value,void 0,{number:!0}]])]),s("div",to,[n[23]||(n[23]=s("label",{class:"form-label"},"开仓数量",-1)),ie(s("input",{"onUpdate:modelValue":n[3]||(n[3]=u=>p.value=u),type:"number",min:"0.0001",step:"0.1",class:"form-input",disabled:c.value==="running",placeholder:"输入 1 = 1 BTC / 1 ETH"},null,8,oo),[[De,p.value,void 0,{number:!0}]])]),s("div",so,[n[25]||(n[25]=s("label",{class:"form-label"},"策略模板库",-1)),ie(s("select",{"onUpdate:modelValue":n[4]||(n[4]=u=>Q.value=u),class:"form-select",disabled:c.value==="running",onChange:Oe},[...n[24]||(n[24]=[Re('<optgroup label="── 经典技术指标 ──"><option value="momentum">📈 动量突破策略</option><option value="ma_cross">〰️ 双均线金叉死叉（MA5/MA10）</option><option value="ma5_ma20_death">〰️ 双均线金叉死叉（MA5/MA20）</option><option value="rsi">📊 RSI 超买超卖反转</option></optgroup><optgroup label="── Rumers Magic Lines ──"><option value="rumers">🔮 Rumers Magic Lines（爆仓线反转）</option></optgroup><optgroup label="── 聪明钱 SMC ──"><option value="smc_ob">🏦 订单块回踩做多（Order Block）</option><option value="smc_ls">🎯 流动性猎取反转（Liquidity Sweep）</option><option value="smc_bos">🔺 市场结构突破做多（BOS）</option></optgroup><optgroup label="── 价格行为 PA ──"><option value="pa_engulf">🕯️ 看涨吞没形态（Engulfing）</option><option value="pa_pinbar">📍 锤子线 / 针形态（Pin Bar）</option><option value="pa_sr">🧲 支撑阻力反弹（S/R Bounce）</option></optgroup><optgroup label="── 自定义 ──"><option value="custom">✏️ 自定义策略</option></optgroup>',5)])],40,no),[[Ce,Q.value]])]),s("button",{class:"btn btn--primary btn--full",disabled:c.value==="running"||x.value==="loading",onClick:_e},[c.value==="running"?(b(),k("span",lo)):(b(),k("span",ro,"▶")),W(" "+S(c.value==="running"?"回测运行中...":"开始回测"),1)],8,ao),s("button",{class:"btn btn--ghost btn--full mt-8",disabled:c.value==="running",onClick:ye}," ↺ 重置 ",8,io)])]),s("section",co,[n[27]||(n[27]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"✎"),W(" 策略编辑器 "),s("span",{class:"card-header-badge"},"JavaScript")],-1)),s("div",uo,[ie(s("textarea",{"onUpdate:modelValue":n[5]||(n[5]=u=>H.value=u),class:"code-editor",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",disabled:c.value==="running",placeholder:`// 在此输入你的策略代码
// 必须声明 onTick() 函数
function onTick() { ... }`},null,8,po),[[De,H.value]])])])]),s("section",ho,[s("div",fo,[s("span",vo,S(l.value)+" · 永续合约",1),s("span",go,S(me.value),1),s("span",mo,S(m.value.length)+" 根 K 线",1),le.value?(b(),k("span",bo," ⬤ LIVE ")):x.value==="success"?(b(),k("span",ko," LIVE DATA ")):x.value==="loading"?(b(),k("span",yo," LOADING... ")):(b(),k("span",_o," MOCK DATA ")),s("div",xo,[s("button",{class:q(["ma-toggle-btn",{active:g.ma5}]),style:{"--ma-color":"#f6c90e"},onClick:n[6]||(n[6]=u=>g.ma5=!g.ma5)},"MA5",2),s("button",{class:q(["ma-toggle-btn",{active:g.ma10}]),style:{"--ma-color":"#2196f3"},onClick:n[7]||(n[7]=u=>g.ma10=!g.ma10)},"MA10",2),s("button",{class:q(["ma-toggle-btn",{active:g.ma20}]),style:{"--ma-color":"#e040fb"},onClick:n[8]||(n[8]=u=>g.ma20=!g.ma20)},"MA20",2)]),s("div",wo,[s("button",{class:q(["ma-toggle-btn",{active:te.value}]),style:{"--ma-color":"#26a69a"},onClick:n[9]||(n[9]=u=>te.value=!te.value),title:"在K线上显示策略买卖圆圈标记"},"策略圆圈",2),s("button",{class:q(["ma-toggle-btn",{active:K.value}]),style:{"--ma-color":"#29b6f6"},onClick:n[10]||(n[10]=u=>K.value=!K.value),title:"显示市场大单气泡（大户/散户真实成交量异动）"},"市场大单",2),s("button",{class:q(["ma-toggle-btn",{active:ae.value}]),style:{"--ma-color":"#b39ddb"},onClick:n[11]||(n[11]=u=>ae.value=!ae.value),title:"显示亚盘/欧盘/美盘时段背景色带"},"时段",2),s("button",{class:q(["ma-toggle-btn",{active:$.value}]),style:{"--ma-color":"#64b5f6"},onClick:n[12]||(n[12]=u=>$.value=!$.value),title:"显示底部成交量柱状图"},"成交量",2),s("button",{class:q(["ma-toggle-btn",{active:E.value}]),style:{"--ma-color":"#ff9800"},onClick:n[13]||(n[13]=u=>E.value=!E.value),title:"显示底部 OBV 指标"},"OBV",2)])]),s("div",So,[tt(Vt,{ref_key:"klineChartRef",ref:B,kData:m.value,markers:w.value,showMA:g,showVolume:$.value,showOBV:E.value,showVolCircle:te.value,showMarketBubble:K.value,showSession:ae.value,theme:"dark",upColor:"#26a69a",downColor:"#ef5350"},null,8,["kData","markers","showMA","showVolume","showOBV","showVolCircle","showMarketBubble","showSession"])])]),s("aside",Co,[s("section",To,[n[37]||(n[37]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"📊"),W(" 回测统计 ")],-1)),s("div",Bo,[s("div",Mo,[s("div",Vo,[n[29]||(n[29]=s("div",{class:"stat-label"},"初始资金",-1)),s("div",Ao,[W(S(y.initialBalance>0?y.initialBalance.toLocaleString():"--")+" ",1),n[28]||(n[28]=s("span",{class:"stat-unit"},"USDT",-1))])]),s("div",Lo,[n[31]||(n[31]=s("div",{class:"stat-label"},"最终资产",-1)),s("div",{class:q(["stat-value",{"stat-value--profit":y.finalAsset>y.initialBalance,"stat-value--loss":y.finalAsset<y.initialBalance&&y.initialBalance>0}])},[W(S(y.finalAsset>0?y.finalAsset.toLocaleString():"--")+" ",1),n[30]||(n[30]=s("span",{class:"stat-unit"},"USDT",-1))],2)]),s("div",Oo,[n[32]||(n[32]=s("div",{class:"stat-label"},"收益率",-1)),s("div",{class:q(["stat-value stat-value--large",{"stat-value--profit":(y.returnRate??0)>0,"stat-value--loss":(y.returnRate??0)<0}])},S(y.returnRate!==null?(y.returnRate>0?"+":"")+y.returnRate+"%":"--"),3)]),s("div",Do,[n[33]||(n[33]=s("div",{class:"stat-label"},"最大回撤",-1)),s("div",Ro,S(y.maxDrawdown!==null?y.maxDrawdown+"%":"--"),1)]),s("div",$o,[n[35]||(n[35]=s("div",{class:"stat-label"},"总交易次数",-1)),s("div",Go,[W(S(y.totalTrades!==null?y.totalTrades:"--")+" ",1),n[34]||(n[34]=s("span",{class:"stat-unit"},"次",-1))])]),s("div",Fo,[n[36]||(n[36]=s("div",{class:"stat-label"},"回测耗时",-1)),s("div",Ho,S(y.elapsed!==null?y.elapsed+" ms":"--"),1)])])])]),s("section",Uo,[s("div",Io,[n[38]||(n[38]=s("span",{class:"card-header-icon"},"📋",-1)),n[39]||(n[39]=W(" 运行日志 ",-1)),s("span",Po,S(U.value.length)+" 条",1),U.value.length>0?(b(),k("button",{key:0,class:"btn-icon ml-auto",title:"清空日志",onClick:n[14]||(n[14]=u=>U.value=[])},"✕")):ne("",!0)]),s("div",No,[s("div",{ref_key:"logPanelRef",ref:D,class:"log-panel"},[c.value==="error"?(b(),k("div",Wo,[n[40]||(n[40]=s("span",{class:"log-error-icon"},"⚠",-1)),W(" "+S(f.value),1)])):ne("",!0),U.value.length===0&&c.value!=="error"?(b(),k("div",Eo,[...n[41]||(n[41]=[s("span",null,"尚无日志。点击「开始回测」后，策略运行日志将在此显示。",-1)])])):ne("",!0),(b(!0),k(Ne,null,We(U.value,(u,P)=>(b(),k("div",{key:P,class:q(["log-entry",{"log-entry--buy":u.type==="buy","log-entry--sell":u.type==="sell","log-entry--info":u.type==="info"}])},[s("span",zo,S(String(P+1).padStart(3,"0")),1),s("span",jo,S(u.text),1)],2))),128))],512)])])])])]))}});st(qo).mount("#app");
