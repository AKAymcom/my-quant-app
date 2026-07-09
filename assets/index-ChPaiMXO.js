var Xe=Object.defineProperty;var et=(Y,B,l)=>B in Y?Xe(Y,B,{enumerable:!0,configurable:!0,writable:!0,value:l}):Y[B]=l;var A=(Y,B,l)=>et(Y,typeof B!="symbol"?B+"":B,l);import{d as Ee,o as ze,a as je,w as se,b as m,c as b,e as s,n as K,f as j,t as w,g as ue,v as Me,h as He,i as re,F as qe,r as Je,j as f,k as Ie,l as tt,m as Ne,p as Pe,q as ot,s as st}from"./vendor-vue-DxO1aeAH.js";import{a as nt,G as at,L as lt,Q as rt,C as We,K as it,$ as ct}from"./vendor-charts-Cduodv0X.js";(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))y(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const L of p.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&y(L)}).observe(document,{childList:!0,subtree:!0});function l(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function y(i){if(i.ep)return;i.ep=!0;const p=l(i);fetch(i.href,p)}})();const ut={class:"kline-chart-wrapper"},dt={class:"trendline-toolbar"},pt=["disabled"],ht=["disabled"],ft={key:0,class:"tl-hint"},vt={key:1,class:"tl-hint tl-hint--active"},gt={key:2,class:"tl-count"},mt=["width","height"],bt=["x1","y1","x2","y2","stroke","stroke-dasharray"],kt=["cx","cy","fill"],yt=["cx","cy","fill"],_t={key:0},xt=["x1","y1","x2","y2","stroke"],St=["cx","cy","fill"],wt=["cx","cy","fill"],Ct=["cx","cy","fill"],$e=20,Tt=2,Bt=Ee({__name:"KLineChart",props:{kData:{},markers:{default:()=>[]},theme:{default:"dark"},upColor:{default:"#26a69a"},downColor:{default:"#ef5350"},showMA:{default:()=>({ma5:!0,ma10:!0,ma20:!0})},showVolume:{type:Boolean,default:!0},showOBV:{type:Boolean,default:!1},showVolCircle:{type:Boolean,default:!0},showMarketBubble:{type:Boolean,default:!0},showSession:{type:Boolean,default:!0}},setup(Y,{expose:B}){const l=Y,y=f(null);let i=null,p=null,L=null,Q=null,N=null,x=null,c=null,C=null,h=null,g=null,S=null,P=null;const R=f(!1),v=f(null),G=f(null),q=f([]),ne=f({width:0,height:0}),Z=f("#FFD700"),ie=f("dashed");function _(t){return t<10?8:t<50?14:22}function F(t){return t<10?9:t<50?11:13}class I{constructor(e,a,o,r){A(this,"_points");A(this,"_series");A(this,"_chart");A(this,"_visible");this._points=e,this._series=a,this._chart=o,this._visible=r}draw(e){!this._visible||!this._series||!this._chart||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio;for(const u of this._points){const M=this._chart.timeScale().timeToCoordinate(u.time);if(M===null)continue;const D=M*r,U=this._series.priceToCoordinate(u.price);if(U===null)continue;const le=U*a.verticalPixelRatio,J=_(u.amount)*r,he=F(u.amount)*r,be=u.side==="buy",z=u.side==="cover";let T,V;u.isMarket?u.side==="buy"?(T="rgba(41,182,246,0.20)",V="#29b6f6"):(T="rgba(255,112,67,0.20)",V="#ff7043"):u.side==="buy"?(T="rgba(0,230,118,0.18)",V="#00e676"):u.side==="sell"?(T="rgba(255,82,82,0.18)",V="#ff5252"):u.side==="short"?(T="rgba(255,152,0,0.18)",V="#ff9800"):(T="rgba(0,229,255,0.18)",V="#00e5ff");const Oe=be||z?J+4*r:-(J+4*r),fe=le+Oe;o.save(),o.beginPath(),o.arc(D,fe,J,0,Math.PI*2),o.fillStyle=T,o.fill(),o.lineWidth=1.5*r,o.strokeStyle=V,o.stroke(),o.shadowColor=V,o.shadowBlur=6*r,o.beginPath(),o.arc(D,fe,J,0,Math.PI*2),o.strokeStyle=V,o.lineWidth=.8*r,o.stroke(),o.shadowBlur=0;const Be=u.label.length>8?u.label.slice(0,8):u.label;if(o.font=`bold ${he}px sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillStyle=V,o.fillText(Be,D,fe),u.subLabel){const ke=Math.max(8,he*.85);o.font=`${ke}px sans-serif`,o.fillStyle=V,o.globalAlpha=.85;const De=be||z?J+ke+2*r:-(J+ke+2*r);o.fillText(u.subLabel,D,le+De),o.globalAlpha=1}o.restore()}})}}class ce{constructor(e){A(this,"_renderer");this._renderer=e}zOrder(){return"top"}renderer(){return this._renderer}}class ae{constructor(){A(this,"_points",[]);A(this,"_visible",!0);A(this,"_attachedSeries",null);A(this,"_attachedChart",null);A(this,"_paneView",null)}attached(e){this._attachedChart=e.chart,this._attachedSeries=e.series,this._rebuildView()}detached(){this._attachedChart=null,this._attachedSeries=null,this._paneView=null}updateAllViews(){this._rebuildView()}paneViews(){return this._paneView?[this._paneView]:[]}setPoints(e){this._points=e,this._rebuildView()}setVisible(e){this._visible=e,this._rebuildView()}_rebuildView(){const e=new I(this._points,this._attachedSeries,this._attachedChart,this._visible);this._paneView=new ce(e)}}const _e=[{startHour:8,endHour:17,fillColor:"rgba(255,220,80,0.045)",strokeColor:"rgba(255,200,50,0.5)",label:"亚盘"},{startHour:15,endHour:24,fillColor:"rgba(80,160,255,0.045)",strokeColor:"rgba(80,150,255,0.5)",label:"欧盘"},{startHour:21.5,endHour:28,fillColor:"rgba(180,80,255,0.05)",strokeColor:"rgba(160,80,255,0.55)",label:"美盘"}];function ve(t,e){const a=t+(e.startHour-8)*3600,o=t+(e.endHour-8)*3600;return[a,o]}class xe{constructor(e,a,o){A(this,"_chart");A(this,"_visible");A(this,"_bars");this._chart=e,this._visible=a,this._bars=o}draw(e){!this._visible||!this._chart||this._bars.length===0||e.useBitmapCoordinateSpace(a=>{const o=a.context,r=a.horizontalPixelRatio,u=a.verticalPixelRatio,M=o.canvas.height,D=this._chart.timeScale(),U=D.getVisibleRange();if(!U)return;const le=U.from,J=U.to,he=Math.floor(le/86400)*86400,be=Math.floor(J/86400)*86400;for(let z=he;z<=be+86400;z+=86400)for(const T of _e){const[V,Oe]=ve(z,T),fe=Math.max(V,le),Be=Math.min(Oe,J);if(fe>=Be)continue;const ke=D.timeToCoordinate(fe),De=D.timeToCoordinate(Be);if(ke===null||De===null)continue;const ye=ke*r,Re=De*r;Re-ye<1||(o.save(),o.fillStyle=T.fillColor,o.fillRect(ye,0,Re-ye,M),o.strokeStyle=T.strokeColor,o.lineWidth=1*r,o.setLineDash([4*r,3*r]),o.beginPath(),o.moveTo(ye,0),o.lineTo(ye,M),o.stroke(),Math.abs(fe-V)<60&&(o.setLineDash([]),o.font=`bold ${11*u}px sans-serif`,o.fillStyle=T.strokeColor,o.globalAlpha=.9,o.textAlign="left",o.textBaseline="top",o.fillText(T.label+" 开",ye+3*r,4*u),o.globalAlpha=1),Math.abs(Be-Oe)<60&&(o.strokeStyle=T.strokeColor,o.lineWidth=1*r,o.setLineDash([2*r,3*r]),o.globalAlpha=.6,o.beginPath(),o.moveTo(Re,0),o.lineTo(Re,M),o.stroke(),o.globalAlpha=1),o.restore())}})}}class Ge{constructor(e){A(this,"_renderer");this._renderer=e}zOrder(){return"bottom"}renderer(){return this._renderer}}class Fe{constructor(){A(this,"_visible",!0);A(this,"_bars",[]);A(this,"_chart",null);A(this,"_paneView",null)}attached(e){this._chart=e.chart,this._rebuild()}detached(){this._chart=null,this._paneView=null}updateAllViews(){this._rebuild()}paneViews(){return this._paneView?[this._paneView]:[]}setBars(e){this._bars=e,this._rebuild()}setVisible(e){this._visible=e,this._rebuild()}_rebuild(){const e=new xe(this._chart,this._visible,this._bars);this._paneView=new Ge(e)}}function te(t){if(typeof t=="number"||/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?t:Math.floor(a/1e3)}function Ve(t){if(typeof t=="number")return t;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return Math.floor(Date.parse(t+"T00:00:00Z")/1e3);const e=t.replace(" ","T")+"Z",a=Date.parse(e);return isNaN(a)?0:Math.floor(a/1e3)}function Ae(t){return t.startsWith("多买")?"buy":t.startsWith("多平")?"sell":t.startsWith("空开")?"short":"cover"}function Se(t){return t.filter(e=>e.time!==void 0&&e.time!==null&&e.time!=="").map(e=>{const a=Ae(e.text),o=e.amount>=1?e.amount.toFixed(2):e.amount.toFixed(4);let r;return a==="buy"?r=`LONG ${o}`:a==="short"?r=`SHORT ${o}`:r=`CLOSE ${o}`,{time:Ve(e.time),price:e.price,amount:e.amount,side:a,label:r}})}function we(t){if(t.length<$e+1)return[];const e=[];for(let a=$e;a<t.length;a++){const o=t[a];if(!o.volume||o.volume<=0)continue;let r=0;for(let V=a-$e;V<a;V++)r+=(t[V].volume??t[V].revenue)||0;const u=r/$e;if(u<=0)continue;const M=o.volume/u;if(M<Tt)continue;let D;M>=5?D=80:M>=3?D=25:D=5;const U=o.close>=o.open,le=U?"buy":"sell",J=U?o.high:o.low,he=M>=10?`×${Math.round(M)}`:`×${M.toFixed(1)}`,be=U?`买${he}`:`卖${he}`,z=o.volume;let T;z>=1e4?T=`${(z/1e4).toFixed(1)}万枚`:z>=1e3?T=`${(z/1e3).toFixed(2)}K枚`:z>=1?T=`${z.toFixed(1)}枚`:T=`${z.toFixed(3)}枚`,e.push({time:Ve(o.time),price:J,amount:D,side:le,label:be,subLabel:T,isMarket:!0})}return e}function Le(t,e,a){const o=a==="dark";return{width:t,height:e,layout:{background:{type:ct.Solid,color:o?"#1a1a2e":"#ffffff"},textColor:o?"#d1d4dc":"#333333"},grid:{vertLines:{color:o?"#2a2a4a":"#e0e0e0"},horzLines:{color:o?"#2a2a4a":"#e0e0e0"}},crosshair:{mode:it.Normal,vertLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"},horzLine:{color:o?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:o?"#4c525e":"#e0e3eb"}},rightPriceScale:{borderColor:o?"#485c7b":"#cccccc"},timeScale:{borderColor:o?"#485c7b":"#cccccc",timeVisible:!0,secondsVisible:!1,rightOffset:5,barSpacing:8,minBarSpacing:2},localization:{timeFormatter:r=>{const u=new Date((r+28800)*1e3),M=u.getUTCFullYear(),D=String(u.getUTCMonth()+1).padStart(2,"0"),U=String(u.getUTCDate()).padStart(2,"0"),le=String(u.getUTCHours()).padStart(2,"0"),J=String(u.getUTCMinutes()).padStart(2,"0");return`${M}-${D}-${U} ${le}:${J}`}},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0}}}function Ce(t,e){return{upColor:t,downColor:e,borderUpColor:t,borderDownColor:e,wickUpColor:t,wickDownColor:e}}const O=[{period:5,color:"#f6c90e",key:"ma5"},{period:10,color:"#2196f3",key:"ma10"},{period:20,color:"#e040fb",key:"ma20"}];function n(t,e){const a=[];for(let o=e-1;o<t.length;o++){let r=0;for(let u=o-e+1;u<=o;u++)r+=t[u].close;a.push({time:te(t[o].time),value:r/e})}return a}function d(t,e){return i.addSeries(We,{color:t,lineWidth:1,priceLineVisible:!1,lastValueVisible:!0,crosshairMarkerVisible:!0,visible:e})}function W(t){if(!i)return;const e=O.map(a=>({series:a.key==="ma5"?Q:a.key==="ma10"?N:x,data:n(t,a.period)}));for(const{series:a,data:o}of e)a&&a.setData(o)}function E(t,e){const a=t.trim();if(a.startsWith("#")){let o,r,u;if(a.length===7)o=parseInt(a.slice(1,3),16),r=parseInt(a.slice(3,5),16),u=parseInt(a.slice(5,7),16);else if(a.length===4)o=parseInt(a[1]+a[1],16),r=parseInt(a[2]+a[2],16),u=parseInt(a[3]+a[3],16);else return a;return`rgba(${o},${r},${u},${e})`}return a}function k(t,e,a){return t.map(o=>({time:te(o.time),value:o.revenue,color:o.close>=o.open?E(e,.7):E(a,.7)}))}function $(t){const e=[];let a=0;for(let o=0;o<t.length;o++)o===0?a=t[o].revenue:a+=t[o].close>=t[o-1].close?t[o].revenue:-t[o].revenue,e.push({time:te(t[o].time),value:a});return e}function H(t){return t.map(e=>typeof e.time!="string"&&typeof e.time!="number"||typeof e.open!="number"||typeof e.high!="number"||typeof e.low!="number"||typeof e.close!="number"?null:{time:te(e.time),open:e.open,high:e.high,low:e.low,close:e.close}).filter(e=>e!==null)}function ge(t){return t.map(e=>e.time===void 0||e.time===null||e.time===""?null:{time:te(e.time),position:e.position,color:e.color,shape:e.shape,text:e.text}).filter(e=>e!==null).sort((e,a)=>e.time-a.time)}function Ue(){const t=y.value;if(!t)return;const e=t.clientWidth||800,a=t.clientHeight||500;i=nt(t,Le(e,a,l.theme)),p=i.addSeries(at,Ce(l.upColor,l.downColor)),L=lt(p,[]),h=new ae,p.attachPrimitive(h),h.setVisible(l.showVolCircle),g=new ae,p.attachPrimitive(g),g.setVisible(l.showMarketBubble),S=new Fe,p.attachPrimitive(S),S.setVisible(l.showSession),Q=d(O[0].color,l.showMA.ma5),N=d(O[1].color,l.showMA.ma10),x=d(O[2].color,l.showMA.ma20),c=i.addSeries(rt,{priceFormat:{type:"volume"},priceScaleId:"vol",lastValueVisible:!1,priceLineVisible:!1,visible:l.showVolume},1),i.priceScale("vol",1).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),C=i.addSeries(We,{color:"#ff9800",lineWidth:1,priceScaleId:"obv",lastValueVisible:!1,priceLineVisible:!1,crosshairMarkerVisible:!0,visible:l.showOBV},2),i.priceScale("obv",2).applyOptions({scaleMargins:{top:.1,bottom:0},borderVisible:!1}),l.kData&&l.kData.length>0&&(p.setData(H(l.kData)),W(l.kData),c.setData(k(l.kData,l.upColor,l.downColor)),C.setData($(l.kData)),g.setPoints(we(l.kData)),S.setBars(l.kData),pe=l.kData.length,Te=!0,i.timeScale().fitContent()),l.markers&&l.markers.length>0&&(L.setMarkers(ge(l.markers)),h.setPoints(Se(l.markers)))}function oe(){R.value=!R.value,v.value=null,G.value=null,y.value&&(y.value.style.cursor=R.value?"crosshair":"default")}function de(t){const e=y.value;if(!e)return null;const a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}function me(t){if(!R.value)return;const e=de(t);e&&(v.value?(q.value.push({x1:v.value.x,y1:v.value.y,x2:e.x,y2:e.y,color:Z.value,style:ie.value}),v.value=null,G.value=null):(v.value=e,G.value=e))}function X(t){if(!R.value||!v.value)return;const e=de(t);e&&(G.value=e)}function ee(){q.value.pop()}function Ke(){q.value=[],v.value=null,G.value=null}function Ye(){const t=y.value;t&&(ne.value={width:t.clientWidth,height:t.clientHeight})}function Ze(){const t=y.value;!t||!i||(P=new ResizeObserver(e=>{for(const a of e){const{width:o,height:r}=a.contentRect;i&&o>0&&r>0&&(i.applyOptions({width:o,height:r}),ne.value={width:o,height:r})}}),P.observe(t))}ze(()=>{Ue(),Ze(),Ye()}),je(()=>{if(P&&(P.disconnect(),P=null),p&&h)try{p.detachPrimitive(h)}catch{}if(p&&g)try{p.detachPrimitive(g)}catch{}if(p&&S)try{p.detachPrimitive(S)}catch{}i&&(i.remove(),i=null,p=null,L=null,h=null,g=null,S=null,Te=!1,pe=0,Q=null,N=null,x=null,c=null,C=null)});let pe=0,Te=!1;se(()=>l.kData,t=>{if(!p||!i)return;if(!t||t.length===0){p.setData([]),c==null||c.setData([]),C==null||C.setData([]),g==null||g.setPoints([]),pe=0,Te=!1;return}const e=t.length!==pe,a=!Te;if(a||e)p.setData(H(t)),W(t),c==null||c.setData(k(t,l.upColor,l.downColor)),C==null||C.setData($(t)),g==null||g.setPoints(we(t)),S==null||S.setBars(t),pe=t.length,a&&(Te=!0,i.timeScale().fitContent());else{const o=t[t.length-1],r=H([o])[0];r&&p.update(r),W(t);const u=k([o],l.upColor,l.downColor)[0];u&&(c==null||c.update(u)),C==null||C.setData($(t))}L&&(l.markers&&l.markers.length>0?(L.setMarkers(ge(l.markers)),h==null||h.setPoints(Se(l.markers))):(L.setMarkers([]),h==null||h.setPoints([])))},{deep:!0}),se(()=>l.markers,t=>{if(p){if(!t||t.length===0){L==null||L.setMarkers([]),h==null||h.setPoints([]);return}L==null||L.setMarkers(ge(t)),h==null||h.setPoints(Se(t))}},{deep:!0}),se(()=>l.theme,t=>{if(!i||!y.value)return;const e=y.value;i.applyOptions(Le(e.clientWidth,e.clientHeight,t))}),se(()=>[l.upColor,l.downColor],([t,e])=>{p&&(p.applyOptions(Ce(t,e)),l.kData&&l.kData.length>0&&(c==null||c.setData(k(l.kData,t,e))))}),se(()=>l.showMA,t=>{Q==null||Q.applyOptions({visible:t.ma5}),N==null||N.applyOptions({visible:t.ma10}),x==null||x.applyOptions({visible:t.ma20})},{deep:!0}),se(()=>l.showVolume,t=>{c==null||c.applyOptions({visible:t})}),se(()=>l.showOBV,t=>{C==null||C.applyOptions({visible:t})}),se(()=>l.showVolCircle,t=>{h==null||h.setVisible(t),i&&i.applyOptions({})}),se(()=>l.showMarketBubble,t=>{g==null||g.setVisible(t),i&&i.applyOptions({})}),se(()=>l.showSession,t=>{S==null||S.setVisible(t),i&&i.applyOptions({})});function Qe(t){if(!p||!i)return;const e=l.kData;if(!e||e.length===0)return;const a=e.length>pe,o=te(t.time);if(p.update({time:o,open:t.open,high:t.high,low:t.low,close:t.close}),c){const r=t.close>=t.open;c.update({time:o,value:t.revenue,color:E(r?l.upColor:l.downColor,.7)})}for(const r of O){const u=r.key==="ma5"?Q:r.key==="ma10"?N:x;if(!u)continue;const M=r.period;if(e.length<M)continue;let D=0;for(let U=e.length-M;U<e.length;U++)D+=e[U].close;u.update({time:o,value:D/M})}if(C&&e.length>=2){const r=$(e),u=r[r.length-1];u&&C.update(u)}a&&(g==null||g.setPoints(we(e)),S==null||S.setBars(e),pe=e.length)}return B({pushTick:Qe}),(t,e)=>(m(),b("div",ut,[s("div",dt,[s("button",{class:K(["tl-btn",{"tl-btn--active":R.value}]),title:"画趋势线（点击两个点确定一条线）",onClick:oe},[e[2]||(e[2]=s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[s("line",{x1:"2",y1:"13",x2:"14",y2:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),s("circle",{cx:"2",cy:"13",r:"2",fill:"currentColor"}),s("circle",{cx:"14",cy:"3",r:"2",fill:"currentColor"})],-1)),j(" "+w(R.value?"取消画线":"画趋势线"),1)],2),ue(s("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>Z.value=a),class:"tl-color-select",title:"线条颜色"},[...e[3]||(e[3]=[He('<option value="#FFD700" data-v-1858c3a0>金色</option><option value="#ff5252" data-v-1858c3a0>红色</option><option value="#00e676" data-v-1858c3a0>绿色</option><option value="#29b6f6" data-v-1858c3a0>蓝色</option><option value="#e040fb" data-v-1858c3a0>紫色</option><option value="#ffffff" data-v-1858c3a0>白色</option>',6)])],512),[[Me,Z.value]]),ue(s("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>ie.value=a),class:"tl-style-select",title:"线条样式"},[...e[4]||(e[4]=[s("option",{value:"solid"},"实线",-1),s("option",{value:"dashed"},"虚线",-1),s("option",{value:"dotted"},"点线",-1)])],512),[[Me,ie.value]]),s("button",{class:"tl-btn tl-btn--danger",disabled:q.value.length===0,title:"删除最后一条趋势线",onClick:ee},"撤销",8,pt),s("button",{class:"tl-btn tl-btn--danger",disabled:q.value.length===0,title:"清空所有趋势线",onClick:Ke},"清空",8,ht),R.value&&!v.value?(m(),b("span",ft,"点击图表选择第一个点")):re("",!0),R.value&&v.value?(m(),b("span",vt,"再点击选择第二个点")):re("",!0),q.value.length>0&&!R.value?(m(),b("span",gt,w(q.value.length)+" 条线",1)):re("",!0)]),s("div",{ref_key:"chartContainerRef",ref:y,class:"kline-chart-container",onClick:me,onMousemove:X},[(m(),b("svg",{class:"trendline-svg",width:ne.value.width,height:ne.value.height,style:{"pointer-events":"none"}},[(m(!0),b(qe,null,Je(q.value,(a,o)=>(m(),b("g",{key:o},[s("line",{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,stroke:a.color,"stroke-width":2,"stroke-dasharray":a.style==="dashed"?"8,4":a.style==="dotted"?"2,4":"none","stroke-linecap":"round",opacity:"0.9"},null,8,bt),s("circle",{cx:a.x1,cy:a.y1,r:"4",fill:a.color,opacity:"0.8"},null,8,kt),s("circle",{cx:a.x2,cy:a.y2,r:"4",fill:a.color,opacity:"0.8"},null,8,yt)]))),128)),R.value&&v.value&&G.value?(m(),b("g",_t,[s("line",{x1:v.value.x,y1:v.value.y,x2:G.value.x,y2:G.value.y,stroke:Z.value,"stroke-width":"1.5","stroke-dasharray":"6,3","stroke-linecap":"round",opacity:"0.6"},null,8,xt),s("circle",{cx:v.value.x,cy:v.value.y,r:"5",fill:Z.value,opacity:"0.9"},null,8,St),s("circle",{cx:G.value.x,cy:G.value.y,r:"3",fill:Z.value,opacity:"0.5"},null,8,wt)])):re("",!0),R.value&&v.value&&!G.value?(m(),b("circle",{key:1,cx:v.value.x,cy:v.value.y,r:"5",fill:Z.value,opacity:"0.9"},null,8,Ct)):re("",!0)],8,mt))],544)]))}}),Mt=(Y,B)=>{const l=Y.__vccOpts||Y;for(const[y,i]of B)l[y]=i;return l},Vt=Mt(Bt,[["__scopeId","data-v-1858c3a0"]]),At={class:"quant-app"},Lt={class:"topbar"},Ot={class:"topbar-center"},Dt={key:0,class:"data-loading-badge"},Rt={key:1,class:"data-error-badge"},$t={key:2,class:"data-success-badge"},Gt={key:0,class:"ws-live-dot",title:"WebSocket 实时行情已连接"},Ft={key:3,class:"data-idle-badge"},It={class:"topbar-status"},Ht={class:"status-text"},Ut={class:"main-layout"},Nt={class:"sidebar sidebar--left"},Pt={class:"card"},Wt={class:"card-body"},Et={class:"form-group"},zt=["disabled"],jt={class:"form-group"},qt=["disabled"],Jt=["disabled"],Kt={key:0,class:"btn-spinner"},Yt={key:1},Zt={class:"card"},Qt={class:"card-body"},Xt={class:"form-group"},eo=["disabled"],to={class:"form-group"},oo=["disabled"],so={class:"form-group"},no=["disabled"],ao=["disabled"],lo={key:0,class:"btn-spinner"},ro={key:1},io=["disabled"],co={class:"card card--grow"},uo={class:"card-body card-body--stretch"},po=["disabled"],ho={class:"chart-area"},fo={class:"chart-area-header"},vo={class:"chart-symbol"},go={class:"chart-period"},mo={class:"chart-bars-count"},bo={key:0,class:"chart-data-badge chart-data-badge--live"},ko={key:1,class:"chart-data-badge chart-data-badge--live"},yo={key:2,class:"chart-data-badge chart-data-badge--loading"},_o={key:3,class:"chart-data-badge chart-data-badge--mock"},xo={class:"ma-toggle-group"},So={class:"ma-toggle-group"},wo={class:"chart-wrapper"},Co={class:"sidebar sidebar--right"},To={class:"card"},Bo={class:"card-body"},Mo={class:"stat-grid"},Vo={class:"stat-item"},Ao={class:"stat-value"},Lo={class:"stat-item"},Oo={class:"stat-item"},Do={class:"stat-item"},Ro={class:"stat-value stat-value--warning"},$o={class:"stat-item"},Go={class:"stat-value"},Fo={class:"stat-item"},Io={class:"stat-value"},Ho={class:"card card--grow"},Uo={class:"card-header"},No={class:"card-header-badge"},Po={class:"card-body card-body--stretch card-body--no-padding"},Wo={key:0,class:"log-error-banner"},Eo={key:1,class:"log-empty"},zo={class:"log-index"},jo={class:"log-text"},qo=Ee({__name:"App",setup(Y){const B=f(null),l=f("ETHUSDT"),y=f("1h"),i=f(1e4),p=f(1),L=f(1),Q=f("momentum"),N=f(""),x=f("idle"),c=f("idle"),C=f(""),h=f(""),g=f([]),S=f([]),P=f([]),R=f(null),v=Ne({ma5:!0,ma10:!0,ma20:!0}),G=f(!0),q=f(!1),ne=f(!0),Z=f(!0),ie=f(!0),_=Ne({initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null});let F=null,I=null;const ce=f(!1);let ae=0;function _e(O,n){ve();const E=`wss://fstream.binance.com/ws/${O.toLowerCase()}@kline_${n}`,k=ae,$=new WebSocket(E);I=$,$.onopen=()=>{I===$&&(ce.value=!0,console.log("[WS] connected:",E))},$.onmessage=H=>{var ge;if(!(I!==$||k!==ae))try{const oe=JSON.parse(H.data).k;if(!oe)return;const de=Math.floor(oe.t/1e3),me=g.value;if(me.length===0)return;const X={time:de,open:parseFloat(oe.o),high:parseFloat(oe.h),low:parseFloat(oe.l),close:parseFloat(oe.c),volume:parseFloat(oe.v),revenue:parseFloat(oe.q)},ee=me[me.length-1];if(console.log("[WS tick]","barTime=",de,"lastTime=",ee.time,"ref=",!!B.value,"close=",X.close),ee.time===de)ee.open=X.open,ee.high=X.high,ee.low=X.low,ee.close=X.close,ee.volume=X.volume,ee.revenue=X.revenue;else if(de>ee.time)me.push(X);else return;(ge=B.value)==null||ge.pushTick(X)}catch{}},$.onclose=H=>{I===$&&(ce.value=!1,console.log("[WS] closed",H.code,H.reason))},$.onerror=()=>{I===$&&(ce.value=!1)}}function ve(){I&&(I.onopen=null,I.onmessage=null,I.onclose=null,I.onerror=null,(I.readyState===WebSocket.CONNECTING||I.readyState===WebSocket.OPEN)&&I.close(1e3,"replaced"),I=null),ce.value=!1}const xe=Pe(()=>({"1m":"1分钟","5m":"5分钟","15m":"15分钟","1h":"1小时","2h":"2小时","4h":"4小时","1d":"日线"})[y.value]??y.value),Ge=Pe(()=>{switch(c.value){case"running":return"回测运行中...";case"success":return"回测完成";case"error":return"回测出错";default:return"就绪"}});async function Fe(O,n,d,W){let E=`https://fapi.binance.com/fapi/v1/klines?symbol=${O}&interval=${n}&limit=${d}`;const k=await fetch(E);if(!k.ok)throw new Error(`HTTP ${k.status}`);return(await k.json()).map(H=>({time:Math.floor(H[0]/1e3),open:parseFloat(H[1]),high:parseFloat(H[2]),low:parseFloat(H[3]),close:parseFloat(H[4]),volume:parseFloat(H[5]),revenue:parseFloat(H[7])}))}async function te(O,n){ae++;const d=ae;ve(),x.value="loading",C.value="",g.value=[],S.value=[];try{const W=await Fe(O,n,1500);if(d!==ae)return;const E=new Map;for(const k of W)E.set(k.time,k);g.value=Array.from(E.values()).sort((k,$)=>k.time-$.time),x.value="success",_e(O,n)}catch(W){if(d!==ae)return;console.error("[loadKline]",W),x.value="error"}}function Ve(){te(l.value,y.value)}function Ae(){te(l.value,y.value)}function Se(){const O=Q.value;N.value=Ce[O]??""}function we(){S.value=[],P.value=[],c.value="idle",h.value="",Object.assign(_,{initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null})}function Le(){if(!N.value.trim()){h.value="请先输入策略代码",c.value="error";return}if(!g.value.length){h.value="请先加载K线数据",c.value="error";return}ve(),c.value="running",S.value=[],P.value=[],h.value="",F&&F.terminate(),F=new Worker(new URL("/my-quant-app/assets/backtest.worker-DMR74fp0.js",import.meta.url),{type:"module"});const O=Date.now();F.onmessage=n=>{const d=n.data,W=Date.now()-O;if(d.success){c.value="success",S.value=d.tradeHistory??[];const E=(d.logs??[]).map(k=>k.includes("🟢")||k.includes("开多")?{type:"buy",text:k}:k.includes("🔴")||k.includes("平多")||k.includes("🟠")||k.includes("开空")||k.includes("🔵")||k.includes("平空")?{type:"sell",text:k}:{type:"info",text:k});P.value=E,Object.assign(_,{initialBalance:d.initialBalance,finalAsset:parseFloat((d.finalAsset??0).toFixed(2)),returnRate:d.returnRate,maxDrawdown:d.maxDrawdown,totalTrades:d.totalTrades,elapsed:W}),ot(()=>{R.value&&(R.value.scrollTop=R.value.scrollHeight)})}else c.value="error",h.value=d.error??"未知错误";_e(l.value,y.value),F==null||F.terminate(),F=null},F.onerror=n=>{c.value="error",h.value=n.message??"Worker 崩溃",_e(l.value,y.value),F=null},F.postMessage({code:N.value,kData:JSON.parse(JSON.stringify(g.value)),initialBalance:i.value,lookbackDays:L.value,orderAmount:p.value})}const Ce={momentum:`// 动量突破策略
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
}`};return ze(()=>{N.value=Ce.momentum,te(l.value,y.value)}),je(()=>{ve(),F==null||F.terminate()}),(O,n)=>(m(),b("div",At,[s("header",Lt,[n[16]||(n[16]=s("div",{class:"topbar-brand"},[s("span",{class:"topbar-logo"},"▲"),s("span",{class:"topbar-title"},"量化回测平台"),s("span",{class:"topbar-version"},"v4.0")],-1)),s("div",Ot,[x.value==="loading"?(m(),b("div",Dt,[n[15]||(n[15]=s("span",{class:"btn-spinner btn-spinner--accent"},null,-1)),j(" "+w(C.value||`正在拉取 ${l.value} ${xe.value} 历史数据...`),1)])):x.value==="error"?(m(),b("div",Rt," ⚠ 数据加载失败（已回退至内置模拟数据） ")):x.value==="success"?(m(),b("div",$t,[j(" ✓ "+w(g.value.length)+" 根真实K线 · "+w(l.value)+" 永续 · "+w(xe.value)+"（Binance Futures） ",1),ce.value?(m(),b("span",Gt,"⬤ LIVE")):re("",!0)])):(m(),b("div",Ft,"就绪，请选择品种和周期后加载数据"))]),s("div",It,[s("span",{class:K(["status-dot",{"status-dot--idle":c.value==="idle","status-dot--running":c.value==="running","status-dot--success":c.value==="success","status-dot--error":c.value==="error"}])},null,2),s("span",Ht,w(Ge.value),1)])]),s("main",Ut,[s("aside",Nt,[s("section",Pt,[n[21]||(n[21]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"🌐"),j(" 数据源配置 ")],-1)),s("div",Wt,[s("div",Et,[n[18]||(n[18]=s("label",{class:"form-label"},"交易品种",-1)),ue(s("select",{"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),class:"form-select",disabled:c.value==="running"||x.value==="loading",onChange:Ve},[...n[17]||(n[17]=[s("option",{value:"BTCUSDT"},"BTC/USDT 永续合约",-1),s("option",{value:"ETHUSDT"},"ETH/USDT 永续合约",-1),s("option",{value:"SOLUSDT"},"SOL/USDT 永续合约",-1),s("option",{value:"BNBUSDT"},"BNB/USDT 永续合约",-1)])],40,zt),[[Me,l.value]])]),s("div",jt,[n[20]||(n[20]=s("label",{class:"form-label"},"K 线周期",-1)),ue(s("select",{"onUpdate:modelValue":n[1]||(n[1]=d=>y.value=d),class:"form-select",disabled:c.value==="running"||x.value==="loading",onChange:Ae},[...n[19]||(n[19]=[He('<optgroup label="── 日内高频 ──"><option value="1m">1 分钟线</option><option value="5m">5 分钟线</option><option value="15m">15 分钟线</option></optgroup><optgroup label="── 中短周期 ──"><option value="1h">1 小时线</option><option value="2h">2 小时线</option><option value="4h">4 小时线</option></optgroup><optgroup label="── 长周期 ──"><option value="1d">日线</option></optgroup>',3)])],40,qt),[[Me,y.value]])]),s("button",{class:"btn btn--ghost btn--full",disabled:c.value==="running"||x.value==="loading",onClick:Ae},[x.value==="loading"?(m(),b("span",Kt)):(m(),b("span",Yt,"↻")),j(" "+w(x.value==="loading"?"加载中...":"刷新数据"),1)],8,Jt)])]),s("section",Zt,[n[26]||(n[26]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"⚙"),j(" 回测参数 ")],-1)),s("div",Qt,[s("div",Xt,[n[22]||(n[22]=s("label",{class:"form-label"},"初始资金（USDT）",-1)),ue(s("input",{"onUpdate:modelValue":n[2]||(n[2]=d=>i.value=d),type:"number",min:"100",step:"100",class:"form-input",disabled:c.value==="running"},null,8,eo),[[Ie,i.value,void 0,{number:!0}]])]),s("div",to,[n[23]||(n[23]=s("label",{class:"form-label"},"开仓数量",-1)),ue(s("input",{"onUpdate:modelValue":n[3]||(n[3]=d=>p.value=d),type:"number",min:"0.0001",step:"0.1",class:"form-input",disabled:c.value==="running",placeholder:"输入 1 = 1 BTC / 1 ETH"},null,8,oo),[[Ie,p.value,void 0,{number:!0}]])]),s("div",so,[n[25]||(n[25]=s("label",{class:"form-label"},"策略模板库",-1)),ue(s("select",{"onUpdate:modelValue":n[4]||(n[4]=d=>Q.value=d),class:"form-select",disabled:c.value==="running",onChange:Se},[...n[24]||(n[24]=[He('<optgroup label="── 经典技术指标 ──"><option value="momentum">📈 动量突破策略</option><option value="ma_cross">〰️ 双均线金叉死叉（MA5/MA10）</option><option value="ma5_ma20_death">〰️ 双均线金叉死叉（MA5/MA20）</option><option value="rsi">📊 RSI 超买超卖反转</option></optgroup><optgroup label="── Rumers Magic Lines ──"><option value="rumers">🔮 Rumers Magic Lines（爆仓线反转）</option></optgroup><optgroup label="── 聪明钱 SMC ──"><option value="smc_ob">🏦 订单块回踩做多（Order Block）</option><option value="smc_ls">🎯 流动性猎取反转（Liquidity Sweep）</option><option value="smc_bos">🔺 市场结构突破做多（BOS）</option></optgroup><optgroup label="── 价格行为 PA ──"><option value="pa_engulf">🕯️ 看涨吞没形态（Engulfing）</option><option value="pa_pinbar">📍 锤子线 / 针形态（Pin Bar）</option><option value="pa_sr">🧲 支撑阻力反弹（S/R Bounce）</option></optgroup><optgroup label="── 自定义 ──"><option value="custom">✏️ 自定义策略</option></optgroup>',5)])],40,no),[[Me,Q.value]])]),s("button",{class:"btn btn--primary btn--full",disabled:c.value==="running"||x.value==="loading",onClick:Le},[c.value==="running"?(m(),b("span",lo)):(m(),b("span",ro,"▶")),j(" "+w(c.value==="running"?"回测运行中...":"开始回测"),1)],8,ao),s("button",{class:"btn btn--ghost btn--full mt-8",disabled:c.value==="running",onClick:we}," ↺ 重置 ",8,io)])]),s("section",co,[n[27]||(n[27]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"✎"),j(" 策略编辑器 "),s("span",{class:"card-header-badge"},"JavaScript")],-1)),s("div",uo,[ue(s("textarea",{"onUpdate:modelValue":n[5]||(n[5]=d=>N.value=d),class:"code-editor",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",disabled:c.value==="running",placeholder:`// 在此输入你的策略代码
// 必须声明 onTick() 函数
function onTick() { ... }`},null,8,po),[[Ie,N.value]])])])]),s("section",ho,[s("div",fo,[s("span",vo,w(l.value)+" · 永续合约",1),s("span",go,w(xe.value),1),s("span",mo,w(g.value.length)+" 根 K 线",1),ce.value?(m(),b("span",bo," ⬤ LIVE ")):x.value==="success"?(m(),b("span",ko," LIVE DATA ")):x.value==="loading"?(m(),b("span",yo," LOADING... ")):(m(),b("span",_o," MOCK DATA ")),s("div",xo,[s("button",{class:K(["ma-toggle-btn",{active:v.ma5}]),style:{"--ma-color":"#f6c90e"},onClick:n[6]||(n[6]=d=>v.ma5=!v.ma5)},"MA5",2),s("button",{class:K(["ma-toggle-btn",{active:v.ma10}]),style:{"--ma-color":"#2196f3"},onClick:n[7]||(n[7]=d=>v.ma10=!v.ma10)},"MA10",2),s("button",{class:K(["ma-toggle-btn",{active:v.ma20}]),style:{"--ma-color":"#e040fb"},onClick:n[8]||(n[8]=d=>v.ma20=!v.ma20)},"MA20",2)]),s("div",So,[s("button",{class:K(["ma-toggle-btn",{active:ne.value}]),style:{"--ma-color":"#26a69a"},onClick:n[9]||(n[9]=d=>ne.value=!ne.value),title:"在K线上显示策略买卖圆圈标记"},"策略圆圈",2),s("button",{class:K(["ma-toggle-btn",{active:Z.value}]),style:{"--ma-color":"#29b6f6"},onClick:n[10]||(n[10]=d=>Z.value=!Z.value),title:"显示市场大单气泡（大户/散户真实成交量异动）"},"市场大单",2),s("button",{class:K(["ma-toggle-btn",{active:ie.value}]),style:{"--ma-color":"#b39ddb"},onClick:n[11]||(n[11]=d=>ie.value=!ie.value),title:"显示亚盘/欧盘/美盘时段背景色带"},"时段",2),s("button",{class:K(["ma-toggle-btn",{active:G.value}]),style:{"--ma-color":"#64b5f6"},onClick:n[12]||(n[12]=d=>G.value=!G.value),title:"显示底部成交量柱状图"},"成交量",2),s("button",{class:K(["ma-toggle-btn",{active:q.value}]),style:{"--ma-color":"#ff9800"},onClick:n[13]||(n[13]=d=>q.value=!q.value),title:"显示底部 OBV 指标"},"OBV",2)])]),s("div",wo,[tt(Vt,{ref_key:"klineChartRef",ref:B,kData:g.value,markers:S.value,showMA:v,showVolume:G.value,showOBV:q.value,showVolCircle:ne.value,showMarketBubble:Z.value,showSession:ie.value,theme:"dark",upColor:"#26a69a",downColor:"#ef5350"},null,8,["kData","markers","showMA","showVolume","showOBV","showVolCircle","showMarketBubble","showSession"])])]),s("aside",Co,[s("section",To,[n[37]||(n[37]=s("div",{class:"card-header"},[s("span",{class:"card-header-icon"},"📊"),j(" 回测统计 ")],-1)),s("div",Bo,[s("div",Mo,[s("div",Vo,[n[29]||(n[29]=s("div",{class:"stat-label"},"初始资金",-1)),s("div",Ao,[j(w(_.initialBalance>0?_.initialBalance.toLocaleString():"--")+" ",1),n[28]||(n[28]=s("span",{class:"stat-unit"},"USDT",-1))])]),s("div",Lo,[n[31]||(n[31]=s("div",{class:"stat-label"},"最终资产",-1)),s("div",{class:K(["stat-value",{"stat-value--profit":_.finalAsset>_.initialBalance,"stat-value--loss":_.finalAsset<_.initialBalance&&_.initialBalance>0}])},[j(w(_.finalAsset>0?_.finalAsset.toLocaleString():"--")+" ",1),n[30]||(n[30]=s("span",{class:"stat-unit"},"USDT",-1))],2)]),s("div",Oo,[n[32]||(n[32]=s("div",{class:"stat-label"},"收益率",-1)),s("div",{class:K(["stat-value stat-value--large",{"stat-value--profit":(_.returnRate??0)>0,"stat-value--loss":(_.returnRate??0)<0}])},w(_.returnRate!==null?(_.returnRate>0?"+":"")+_.returnRate+"%":"--"),3)]),s("div",Do,[n[33]||(n[33]=s("div",{class:"stat-label"},"最大回撤",-1)),s("div",Ro,w(_.maxDrawdown!==null?_.maxDrawdown+"%":"--"),1)]),s("div",$o,[n[35]||(n[35]=s("div",{class:"stat-label"},"总交易次数",-1)),s("div",Go,[j(w(_.totalTrades!==null?_.totalTrades:"--")+" ",1),n[34]||(n[34]=s("span",{class:"stat-unit"},"次",-1))])]),s("div",Fo,[n[36]||(n[36]=s("div",{class:"stat-label"},"回测耗时",-1)),s("div",Io,w(_.elapsed!==null?_.elapsed+" ms":"--"),1)])])])]),s("section",Ho,[s("div",Uo,[n[38]||(n[38]=s("span",{class:"card-header-icon"},"📋",-1)),n[39]||(n[39]=j(" 运行日志 ",-1)),s("span",No,w(P.value.length)+" 条",1),P.value.length>0?(m(),b("button",{key:0,class:"btn-icon ml-auto",title:"清空日志",onClick:n[14]||(n[14]=d=>P.value=[])},"✕")):re("",!0)]),s("div",Po,[s("div",{ref_key:"logPanelRef",ref:R,class:"log-panel"},[c.value==="error"?(m(),b("div",Wo,[n[40]||(n[40]=s("span",{class:"log-error-icon"},"⚠",-1)),j(" "+w(h.value),1)])):re("",!0),P.value.length===0&&c.value!=="error"?(m(),b("div",Eo,[...n[41]||(n[41]=[s("span",null,"尚无日志。点击「开始回测」后，策略运行日志将在此显示。",-1)])])):re("",!0),(m(!0),b(qe,null,Je(P.value,(d,W)=>(m(),b("div",{key:W,class:K(["log-entry",{"log-entry--buy":d.type==="buy","log-entry--sell":d.type==="sell","log-entry--info":d.type==="info"}])},[s("span",zo,w(String(W+1).padStart(3,"0")),1),s("span",jo,w(d.text),1)],2))),128))],512)])])])])]))}});st(qo).mount("#app");
