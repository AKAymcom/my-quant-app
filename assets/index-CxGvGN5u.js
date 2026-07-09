import{d as se,o as ne,a as le,w as Y,b as S,c as A,r as T,e as t,f as D,t as f,g as J,n as H,h as j,v as X,i as ee,j as te,k as Ce,F as Oe,l as De,m as we,p as ae,q as re,s as xe}from"./vendor-vue-6fkMa1Hi.js";import{a as Le,G as Be,L as Pe,K as Ee,$ as Ne,C as Ue}from"./vendor-charts-C3691r1b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))v(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const R of u.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&v(R)}).observe(document,{childList:!0,subtree:!0});function I(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function v(l){if(l.ep)return;l.ep=!0;const u=I(l);fetch(l.href,u)}})();const Fe=se({__name:"KLineChart",props:{kData:{},markers:{default:()=>[]},theme:{default:"dark"},upColor:{default:"#ef5350"},downColor:{default:"#26a69a"},showMA:{default:()=>({ma5:!0,ma10:!0,ma20:!0})}},setup(V){const n=V,I=T(null);let v=null,l=null,u=null,R=null,s=null,m=null,_=null;function L(r,a,d){const c=d==="dark";return{width:r,height:a,layout:{background:{type:Ne.Solid,color:c?"#1a1a2e":"#ffffff"},textColor:c?"#d1d4dc":"#333333"},grid:{vertLines:{color:c?"#2a2a4a":"#e0e0e0"},horzLines:{color:c?"#2a2a4a":"#e0e0e0"}},crosshair:{mode:Ee.Normal,vertLine:{color:c?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:c?"#4c525e":"#e0e3eb"},horzLine:{color:c?"#758696":"#9b9ea3",width:1,style:1,labelBackgroundColor:c?"#4c525e":"#e0e3eb"}},rightPriceScale:{borderColor:c?"#485c7b":"#cccccc"},timeScale:{borderColor:c?"#485c7b":"#cccccc",timeVisible:!0,secondsVisible:!1,rightOffset:5,barSpacing:8,minBarSpacing:2},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{axisPressedMouseMove:!0,mouseWheel:!0,pinch:!0}}}function k(r,a){return{upColor:r,downColor:a,borderUpColor:r,borderDownColor:a,wickUpColor:r,wickDownColor:a}}const C=[{period:5,color:"#f6c90e",key:"ma5"},{period:10,color:"#2196f3",key:"ma10"},{period:20,color:"#e040fb",key:"ma20"}];function W(r,a){const d=[];for(let c=a-1;c<r.length;c++){let N=0;for(let K=c-a+1;K<=c;K++)N+=r[K].close;d.push({time:x(r[c].time),value:N/a})}return d}function B(r,a){return v.addSeries(Ue,{color:r,lineWidth:1,priceLineVisible:!1,lastValueVisible:!0,crosshairMarkerVisible:!0,visible:a})}function w(r){if(!v)return;const a=C.map(d=>({series:d.key==="ma5"?R:d.key==="ma10"?s:m,data:W(r,d.period)}));for(const{series:d,data:c}of a)d&&d.setData(c)}function x(r){if(typeof r=="number"||/^\d{4}-\d{2}-\d{2}$/.test(r))return r;const a=r.replace(" ","T")+"Z",d=Date.parse(a);return isNaN(d)?r:Math.floor(d/1e3)}function P(r){return r.map(a=>typeof a.time!="string"&&typeof a.time!="number"||typeof a.open!="number"||typeof a.high!="number"||typeof a.low!="number"||typeof a.close!="number"?null:{time:x(a.time),open:a.open,high:a.high,low:a.low,close:a.close}).filter(a=>a!==null)}function y(r){return r.map(a=>a.time===void 0||a.time===null||a.time===""?null:{time:x(a.time),position:a.position,color:a.color,shape:a.shape,text:a.text}).filter(a=>a!==null).sort((a,d)=>a.time-d.time)}function E(){const r=I.value;if(!r)return;const a=r.clientWidth||800,d=r.clientHeight||500;v=Le(r,L(a,d,n.theme)),l=v.addSeries(Be,k(n.upColor,n.downColor)),u=Pe(l,[]),R=B(C[0].color,n.showMA.ma5),s=B(C[1].color,n.showMA.ma10),m=B(C[2].color,n.showMA.ma20),n.kData&&n.kData.length>0&&(l.setData(P(n.kData)),w(n.kData),v.timeScale().fitContent()),n.markers&&n.markers.length>0&&u.setMarkers(y(n.markers))}function i(){const r=I.value;!r||!v||(_=new ResizeObserver(a=>{for(const d of a){const{width:c,height:N}=d.contentRect;v&&c>0&&N>0&&v.applyOptions({width:c,height:N})}}),_.observe(r))}return ne(()=>{E(),i()}),le(()=>{_&&(_.disconnect(),_=null),v&&(v.remove(),v=null,l=null,u=null,R=null,s=null,m=null)}),Y(()=>n.kData,r=>{if(!l||!v)return;if(!r||r.length===0){l.setData([]);return}const a=P(r);l.setData(a),w(r),v.timeScale().fitContent(),u&&(n.markers&&n.markers.length>0?u.setMarkers(y(n.markers)):u.setMarkers([]))},{deep:!0}),Y(()=>n.markers,r=>{if(!l)return;if(!r||r.length===0){u==null||u.setMarkers([]);return}const a=y(r);u==null||u.setMarkers(a)},{deep:!0}),Y(()=>n.theme,r=>{if(!v||!I.value)return;const a=I.value,d=a.clientWidth,c=a.clientHeight;v.applyOptions(L(d,c,r))}),Y(()=>[n.upColor,n.downColor],([r,a])=>{l&&l.applyOptions(k(r,a))}),Y(()=>n.showMA,r=>{R==null||R.applyOptions({visible:r.ma5}),s==null||s.applyOptions({visible:r.ma10}),m==null||m.applyOptions({visible:r.ma20})},{deep:!0}),(r,a)=>(S(),A("div",{ref_key:"chartContainerRef",ref:I,class:"kline-chart-container"},null,512))}}),ie=(V,n)=>{const I=V.__vccOpts||V;for(const[v,l]of n)I[v]=l;return I},$e=ie(Fe,[["__scopeId","data-v-05a0c38b"]]),Ge={class:"quant-app"},He={class:"topbar"},Ve={class:"topbar-center"},Ke={key:0,class:"data-loading-badge"},We={key:1,class:"data-error-badge"},Ye={key:2,class:"data-success-badge"},je={class:"topbar-status"},ze={class:"status-text"},qe={class:"main-layout"},Je={class:"sidebar sidebar--left"},Ze={class:"card"},Qe={class:"card-body"},Xe={class:"form-group"},et=["disabled"],tt={class:"form-group"},at=["disabled"],rt=["disabled"],ot={key:0,class:"btn-spinner"},st={key:1},nt={class:"card"},lt={class:"card-body"},it={class:"form-group"},ct=["disabled"],ut={class:"form-group"},dt=["disabled"],vt=["disabled"],mt={key:0,class:"btn-spinner"},pt={key:1},ft=["disabled"],gt={class:"card card--grow"},ht={class:"card-body card-body--stretch"},bt=["disabled"],_t={class:"chart-area"},St={class:"chart-area-header"},At={class:"chart-symbol"},yt={class:"chart-period"},Mt={class:"chart-bars-count"},Tt={key:0,class:"chart-data-badge chart-data-badge--live"},kt={key:1,class:"chart-data-badge chart-data-badge--loading"},It={key:2,class:"chart-data-badge chart-data-badge--mock"},Rt={class:"ma-toggle-group"},Ct={class:"chart-wrapper"},Ot={class:"sidebar sidebar--right"},Dt={class:"card"},wt={class:"card-body"},xt={class:"stat-grid"},Lt={class:"stat-item"},Bt={class:"stat-value"},Pt={class:"stat-item"},Et={class:"stat-item"},Nt={class:"stat-item"},Ut={class:"stat-value stat-value--warning"},Ft={class:"stat-item"},$t={class:"stat-value"},Gt={class:"stat-item"},Ht={class:"stat-value"},Vt={class:"card card--grow"},Kt={class:"card-header"},Wt={class:"card-header-badge"},Yt={class:"card-body card-body--stretch card-body--no-padding"},jt={key:0,class:"log-error-banner"},zt={key:1,class:"log-empty"},qt={class:"log-index"},Jt={class:"log-text"},oe=`// ============================================================
// 动量突破策略（Momentum Breakout Strategy）
// 逻辑：
//   当收盘价突破近 N 根 K 线最高价时买入（做多信号）
//   当收盘价跌破近 N 根 K 线最低价时卖出（平仓信号）
// ============================================================

const WINDOW = 5;           // 观察窗口（根数）
const POSITION_RATIO = 0.9; // 每次买入使用账户余额的比例

function formatTime(t) {
  var ms = (typeof t === 'number') ? t * 1000 : new Date(t).getTime();
  var d  = new Date(ms);
  var yyyy = d.getUTCFullYear();
  var mo   = String(d.getUTCMonth() + 1).padStart(2, '0');
  var dd   = String(d.getUTCDate()).padStart(2, '0');
  var hh   = String(d.getUTCHours()).padStart(2, '0');
  var mm   = String(d.getUTCMinutes()).padStart(2, '0');
  return yyyy + mo + dd + ' ' + hh + ':' + mm;
}

function onTick() {
  var records = exchange.GetRecords();
  var account = exchange.GetAccount();

  // 数据不足时跳过
  if (records.length < WINDOW + 1) {
    return;
  }

  // 取最近 WINDOW 根 K 线（不含当前柱）
  var lookback = records.slice(records.length - 1 - WINDOW, records.length - 1);
  var currentBar = records[records.length - 1];
  var currentClose = currentBar.close;

  // 计算窗口内最高价和最低价
  var highestHigh = lookback[0].high;
  var lowestLow   = lookback[0].low;
  for (var i = 1; i < lookback.length; i++) {
    if (lookback[i].high > highestHigh) highestHigh = lookback[i].high;
    if (lookback[i].low  < lowestLow)  lowestLow   = lookback[i].low;
  }

  var hasPosition = account.Stocks > 0;

  // 买入信号：突破近期最高价且无持仓
  if (currentClose > highestHigh && !hasPosition) {
    var buyAmount = (account.Balance * POSITION_RATIO) / currentClose;
    buyAmount = Math.floor(buyAmount * 10000) / 10000;
    if (buyAmount > 0) {
      var success = exchange.Buy(currentClose, buyAmount);
      if (success) {
        log('突破买入', formatTime(currentBar.time), '价格:', currentClose, '数量:', buyAmount);
      }
    }
    return;
  }

  // 卖出信号：跌破近期最低价且有持仓
  if (currentClose < lowestLow && hasPosition) {
    var sellAmount = account.Stocks;
    var ok = exchange.Sell(currentClose, sellAmount);
    if (ok) {
      log('跌破卖出', formatTime(currentBar.time), '价格:', currentClose, '数量:', sellAmount);
    }
  }
}
`,Zt=`// ============================================================
// 双均线金叉死叉策略（MA Cross Strategy）
// 作者：量化回测平台示例
// 逻辑：
//   计算 MA5（5日移动均线）与 MA10（10日移动均线）
//   当 MA5 从下方上穿 MA10（金叉）→ 买入信号
//   当 MA5 从上方下穿 MA10（死叉）→ 卖出信号
// 适用：中长期趋势跟踪，日线 / 4小时线效果较好
// ============================================================

const SHORT_PERIOD = 5;     // 短期均线周期
const LONG_PERIOD  = 10;    // 长期均线周期
const POSITION_RATIO = 0.9; // 每次买入仓位比例

function formatTime(t) {
  var ms = (typeof t === 'number') ? t * 1000 : new Date(t).getTime();
  var d  = new Date(ms);
  var yyyy = d.getUTCFullYear();
  var mo   = String(d.getUTCMonth() + 1).padStart(2, '0');
  var dd   = String(d.getUTCDate()).padStart(2, '0');
  var hh   = String(d.getUTCHours()).padStart(2, '0');
  var mm   = String(d.getUTCMinutes()).padStart(2, '0');
  return yyyy + mo + dd + ' ' + hh + ':' + mm;
}

// ── 辅助函数：计算简单移动平均线（SMA）──
function calcSMA(records, period, endIndex) {
  // endIndex：计算到第几根K线（含）
  if (endIndex < period - 1) return null;
  var sum = 0;
  for (var i = endIndex - period + 1; i <= endIndex; i++) {
    sum += records[i].close;
  }
  return sum / period;
}

function onTick() {
  var records = exchange.GetRecords();
  var account = exchange.GetAccount();

  // 至少需要 LONG_PERIOD + 1 根K线才能判断均线交叉
  if (records.length < LONG_PERIOD + 1) {
    return;
  }

  var lastIdx = records.length - 1;
  var prevIdx = records.length - 2;

  // 当前柱（最新）的 MA5 和 MA10
  var ma5_curr  = calcSMA(records, SHORT_PERIOD, lastIdx);
  var ma10_curr = calcSMA(records, LONG_PERIOD,  lastIdx);

  // 前一柱的 MA5 和 MA10（用于判断交叉方向）
  var ma5_prev  = calcSMA(records, SHORT_PERIOD, prevIdx);
  var ma10_prev = calcSMA(records, LONG_PERIOD,  prevIdx);

  if (ma5_curr === null || ma10_curr === null) return;
  if (ma5_prev === null || ma10_prev === null) return;

  var currentBar   = records[lastIdx];
  var currentClose = currentBar.close;
  var hasPosition  = account.Stocks > 0;
  var timeStr      = formatTime(currentBar.time);

  // ── 金叉：MA5 从下方穿越 MA10 ──
  // 条件：前一根 MA5 <= MA10，当前 MA5 > MA10
  if (ma5_prev <= ma10_prev && ma5_curr > ma10_curr && !hasPosition) {
    var buyAmount = (account.Balance * POSITION_RATIO) / currentClose;
    buyAmount = Math.floor(buyAmount * 10000) / 10000;
    if (buyAmount > 0) {
      var ok = exchange.Buy(currentClose, buyAmount);
      if (ok) {
        log(
          '金叉买入 | 时间:', timeStr,
          '| 价格:', currentClose.toFixed(2),
          '| MA5:', ma5_curr.toFixed(2),
          '| MA10:', ma10_curr.toFixed(2),
          '| 数量:', buyAmount
        );
      }
    }
    return;
  }

  // ── 死叉：MA5 从上方穿越 MA10 ──
  // 条件：前一根 MA5 >= MA10，当前 MA5 < MA10
  if (ma5_prev >= ma10_prev && ma5_curr < ma10_curr && hasPosition) {
    var sellAmount = account.Stocks;
    var sold = exchange.Sell(currentClose, sellAmount);
    if (sold) {
      log(
        '死叉卖出 | 时间:', timeStr,
        '| 价格:', currentClose.toFixed(2),
        '| MA5:', ma5_curr.toFixed(2),
        '| MA10:', ma10_curr.toFixed(2),
        '| 数量:', sellAmount
      );
    }
  }
}
`,Qt=`// ============================================================
// MA5 / MA20 死叉策略（Death Cross Strategy）
// 逻辑：
//   MA5（5周期均线）上穿 MA20（20周期均线）→ 金叉买入
//   MA5（5周期均线）下穿 MA20（20周期均线）→ 死叉卖出清仓
// 特点：相比 MA5/MA10，MA20 过滤噪音能力更强，信号更少但更可靠
// 适用：4小时线 / 日线，趋势跟踪
// ============================================================

const SHORT_PERIOD  = 5;    // MA5
const LONG_PERIOD   = 20;   // MA20
const POSITION_RATIO = 0.9; // 每次买入仓位比例

function calcSMA(records, period, endIndex) {
  if (endIndex < period - 1) return null;
  var sum = 0;
  for (var i = endIndex - period + 1; i <= endIndex; i++) {
    sum += records[i].close;
  }
  return sum / period;
}

// 将 time 转为 "YYYYMMDD HH:MM" 格式
// time 可能是秒级数字时间戳，也可能已经是 "YYYY-MM-DD" 字符串
function formatTime(t) {
  var ms = (typeof t === 'number') ? t * 1000 : new Date(t).getTime();
  var d  = new Date(ms);
  var yyyy = d.getUTCFullYear();
  var mo   = String(d.getUTCMonth() + 1).padStart(2, '0');
  var dd   = String(d.getUTCDate()).padStart(2, '0');
  var hh   = String(d.getUTCHours()).padStart(2, '0');
  var mm   = String(d.getUTCMinutes()).padStart(2, '0');
  return yyyy + mo + dd + ' ' + hh + ':' + mm;
}

function onTick() {
  var records = exchange.GetRecords();
  var account = exchange.GetAccount();

  // 至少需要 LONG_PERIOD + 1 根K线
  if (records.length < LONG_PERIOD + 1) return;

  var lastIdx = records.length - 1;
  var prevIdx = records.length - 2;

  var ma5_curr  = calcSMA(records, SHORT_PERIOD, lastIdx);
  var ma20_curr = calcSMA(records, LONG_PERIOD,  lastIdx);
  var ma5_prev  = calcSMA(records, SHORT_PERIOD, prevIdx);
  var ma20_prev = calcSMA(records, LONG_PERIOD,  prevIdx);

  if (ma5_curr === null || ma20_curr === null) return;
  if (ma5_prev === null || ma20_prev === null) return;

  var currentBar   = records[lastIdx];
  var currentClose = currentBar.close;
  var hasPosition  = account.Stocks > 0;
  var timeStr      = formatTime(currentBar.time);

  // ── 金叉：MA5 上穿 MA20 → 买入 ──
  if (ma5_prev <= ma20_prev && ma5_curr > ma20_curr && !hasPosition) {
    var buyAmount = (account.Balance * POSITION_RATIO) / currentClose;
    buyAmount = Math.floor(buyAmount * 10000) / 10000;
    if (buyAmount > 0) {
      var ok = exchange.Buy(currentClose, buyAmount);
      if (ok) {
        log(
          '金叉买入 | 时间:', timeStr,
          '| 价格:', currentClose.toFixed(2),
          '| MA5:', ma5_curr.toFixed(2),
          '| MA20:', ma20_curr.toFixed(2),
          '| 数量:', buyAmount
        );
      }
    }
    return;
  }

  // ── 死叉：MA5 下穿 MA20 → 清仓卖出 ──
  if (ma5_prev >= ma20_prev && ma5_curr < ma20_curr && hasPosition) {
    var sellAmount = account.Stocks;
    var sold = exchange.Sell(currentClose, sellAmount);
    if (sold) {
      log(
        '死叉卖出 | 时间:', timeStr,
        '| 价格:', currentClose.toFixed(2),
        '| MA5:', ma5_curr.toFixed(2),
        '| MA20:', ma20_curr.toFixed(2),
        '| 数量:', sellAmount
      );
    }
  }
}
`,Xt=`// ============================================================
// RSI 超买超卖反转策略（RSI Mean Reversion Strategy）
// 作者：量化回测平台示例
// 逻辑：
//   计算 14 日 RSI（相对强弱指数）
//   RSI < 30（超卖区间）→ 买入信号（抄底）
//   RSI > 70（超买区间）→ 卖出信号（逃顶）
// 适用：震荡行情，日线效果较好
// 注意：趋势行情中可能产生大量假信号，建议结合趋势过滤
// ============================================================

const RSI_PERIOD       = 14;  // RSI 计算周期（经典默认值）
const RSI_OVERSOLD     = 30;  // 超卖阈值：低于此值买入
const RSI_OVERBOUGHT   = 70;  // 超买阈值：高于此值卖出
const POSITION_RATIO   = 0.9; // 仓位比例

// ── 辅助函数：计算 RSI ──
// 采用 Wilder 平滑移动平均（SMMA）方法，与 TradingView 一致
function calcRSI(records, period) {
  // 至少需要 period + 1 根 K 线
  if (records.length < period + 1) return null;

  // 第一步：计算前 period 根收益/损失的简单平均（初始化）
  var gains = 0;
  var losses = 0;
  for (var i = 1; i <= period; i++) {
    var diff = records[i].close - records[i - 1].close;
    if (diff >= 0) {
      gains  += diff;
    } else {
      losses += Math.abs(diff);
    }
  }

  var avgGain = gains  / period;
  var avgLoss = losses / period;

  // 第二步：从 period+1 开始用 Wilder 平滑迭代到最后一根
  for (var j = period + 1; j < records.length; j++) {
    var change = records[j].close - records[j - 1].close;
    if (change >= 0) {
      avgGain = (avgGain * (period - 1) + change) / period;
      avgLoss = (avgLoss * (period - 1) + 0)      / period;
    } else {
      avgGain = (avgGain * (period - 1) + 0)               / period;
      avgLoss = (avgLoss * (period - 1) + Math.abs(change)) / period;
    }
  }

  // RSI = 100 - (100 / (1 + RS))，RS = avgGain / avgLoss
  if (avgLoss === 0) return 100; // 全部上涨，RSI = 100
  var rs  = avgGain / avgLoss;
  var rsi = 100 - (100 / (1 + rs));
  return parseFloat(rsi.toFixed(2));
}

function onTick() {
  var records = exchange.GetRecords();
  var account = exchange.GetAccount();

  // 至少需要 RSI_PERIOD + 1 根数据
  if (records.length < RSI_PERIOD + 1) {
    return;
  }

  var currentBar   = records[records.length - 1];
  var currentClose = currentBar.close;
  var hasPosition  = account.Stocks > 0;

  // 计算当前 RSI（基于全部历史数据，最终值即为最新 RSI）
  var rsi = calcRSI(records, RSI_PERIOD);
  if (rsi === null) return;

  // ── 超卖买入：RSI 低于 30 ──
  if (rsi < RSI_OVERSOLD && !hasPosition) {
    var buyAmount = (account.Balance * POSITION_RATIO) / currentClose;
    buyAmount = Math.floor(buyAmount * 10000) / 10000;
    if (buyAmount > 0) {
      var ok = exchange.Buy(currentClose, buyAmount);
      if (ok) {
        log(
          '超卖买入 | 日期:', currentBar.time,
          '| RSI:', rsi,
          '| 价格:', currentClose.toFixed(2),
          '| 数量:', buyAmount
        );
      }
    }
    return;
  }

  // ── 超买卖出：RSI 高于 70 ──
  if (rsi > RSI_OVERBOUGHT && hasPosition) {
    var sellAmount = account.Stocks;
    var sold = exchange.Sell(currentClose, sellAmount);
    if (sold) {
      log(
        '超买卖出 | 日期:', currentBar.time,
        '| RSI:', rsi,
        '| 价格:', currentClose.toFixed(2),
        '| 数量:', sellAmount
      );
    }
  }
}
`,ea=se({__name:"App",setup(V){const n={"15m":"15分钟线","1h":"1小时线","2h":"2小时线","4h":"4小时线","1d":"日线"};function I(g){return g==="1d"}function v(g,e){if(I(e)){const o=new Date(g),b=o.getUTCFullYear(),p=String(o.getUTCMonth()+1).padStart(2,"0"),M=String(o.getUTCDate()).padStart(2,"0");return`${b}-${p}-${M}`}return Math.floor(g/1e3)}async function l(g,e){const o=`https://fapi.binance.com/fapi/v1/klines?symbol=${g}&interval=${e}&limit=200`,b=new AbortController,p=setTimeout(()=>b.abort(),8e3);let M;try{const h=await fetch(o,{method:"GET",signal:b.signal,credentials:"omit",headers:{Accept:"application/json"}});if(clearTimeout(p),!h.ok)throw new Error(`HTTP ${h.status}: ${h.statusText}`);M=await h.json()}catch(h){throw clearTimeout(p),h instanceof Error&&h.name==="AbortError"?new Error("请求超时（8s），请检查网络连接或尝试使用代理/VPN 访问币安期货 API"):h}if(!Array.isArray(M)||M.length===0)throw new Error("币安永续合约 API 返回了空数据，请稍后重试");const $=M.map(h=>({time:v(h[0],e),open:parseFloat(h[1]),high:parseFloat(h[2]),low:parseFloat(h[3]),close:parseFloat(h[4]),revenue:parseFloat(h[7])}));return $.sort((h,Z)=>String(h.time).localeCompare(String(Z.time))),$}function u(g,e,o,b){const p=[];let M=o;const $=U=>{const z=Math.sin(U+1)*1e4;return z-Math.floor(z)},h=new Date(g).getTime(),Z=86400*1e3;for(let U=0;U<e;U++){const z=$(U*4+0),pe=$(U*4+1),fe=$(U*4+2),ge=$(U*4+3),G=M,he=(z-.5)*2*b*G,q=parseFloat((G+he).toFixed(2)),be=pe*b*.5*G,_e=fe*b*.5*G,Se=parseFloat((Math.max(G,q)+be).toFixed(2)),Ae=parseFloat((Math.min(G,q)-_e).toFixed(2)),ye=parseFloat((ge*1e6+5e5).toFixed(0)),Me=h+U*Z,Q=new Date(Me),Te=Q.getFullYear(),ke=String(Q.getMonth()+1).padStart(2,"0"),Ie=String(Q.getDate()).padStart(2,"0"),Re=`${Te}-${ke}-${Ie}`;p.push({time:Re,open:G,high:Se,low:Ae,close:q,revenue:ye}),M=q}return p}const R=u("2024-01-01",60,42e3,.03),s=T("idle"),m=T("idle"),_=T(""),L=T("BTCUSDT"),k=we({ma5:!0,ma10:!0,ma20:!0}),C=T("1h"),W=T("momentum"),B=T(1e5),w=T(oe),x=T([]),P=T([]),y=T([]),E=T(null),i=T({initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null});let r=null,a=0;const d=ae(()=>{switch(s.value){case"idle":return"就绪";case"running":return"回测运行中...";case"success":return`回测完成 · 收益率 ${i.value.returnRate!==null?(i.value.returnRate>0?"+":"")+i.value.returnRate+"%":""}`;case"error":return"回测出错";default:return""}}),c=ae(()=>n[C.value]??C.value);async function N(g,e){m.value="loading",O(`🌐 正在拉取币安永续合约数据：${g} ${n[e]} × 200 根...`,"info");try{const o=await l(g,e);x.value=o,m.value="success",O(`✅ 永续合约数据加载成功！共 ${o.length} 根 K 线 | 最新价：${o[o.length-1].close.toLocaleString()} USDT | 最新时间：${o[o.length-1].time}（UTC）`,"info")}catch(o){const b=o instanceof Error?o.message:String(o);x.value=R,m.value="error",O(`❌ 币安期货 API 请求失败：${b}`,"info"),O("⚠ 已自动回退至内置 60 根模拟数据，请检查网络或使用 VPN/代理","info")}}async function K(){F(),s.value="idle",_.value="",P.value=[],y.value=[],i.value={initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null},await N(L.value,C.value)}async function ce(){F(),s.value="idle",_.value="",P.value=[],y.value=[],i.value={initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null},await N(L.value,C.value)}function ue(){switch(W.value){case"momentum":w.value=oe;break;case"ma_cross":w.value=Zt;break;case"ma5_ma20_death":w.value=Qt;break;case"rsi":w.value=Xt;break}}function de(g){const e=g.toLowerCase();return e.includes("买入")||e.includes("buy")?"buy":e.includes("卖出")||e.includes("sell")?"sell":"info"}async function O(g,e){y.value.push({text:g,type:e}),await re(),E.value&&(E.value.scrollTop=E.value.scrollHeight)}function F(){r&&(r.terminate(),r=null)}function ve(){if(!w.value.trim()){_.value="策略代码不能为空",s.value="error";return}if(!B.value||B.value<=0){_.value="初始资金必须为正数",s.value="error";return}if(x.value.length===0){_.value="尚无 K 线数据，请先等待数据加载完成",s.value="error";return}F();const g=JSON.parse(JSON.stringify(x.value));P.value=[],y.value=[],_.value="",i.value={initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null},s.value="running",a=performance.now(),O("⏳ 回测启动，正在初始化沙盒...","info"),O(`📊 数据集：${g.length} 根 K 线 | 初始资金：${B.value.toLocaleString()} USDT`+(m.value==="success"?" | 来源：币安真实数据":" | 来源：内置模拟数据"),"info");const e=new Worker(new URL("/my-quant-app/assets/backtest.worker-Dz_sFWd1.js",import.meta.url),{type:"module"});r=e,e.onmessage=o=>{const b=Math.round(performance.now()-a);if(!o.data.success){const M=o.data;_.value=M.error,s.value="error",O(`❌ 策略运行出错：${M.error}`,"info"),F();return}const p=o.data;i.value={initialBalance:p.initialBalance,finalAsset:p.finalAsset,returnRate:p.returnRate,maxDrawdown:p.maxDrawdown,totalTrades:p.totalTrades,elapsed:b};for(const M of p.logs)y.value.push({text:M,type:de(M)});P.value=p.tradeHistory,re(()=>{E.value&&(E.value.scrollTop=E.value.scrollHeight)}),O("──────────────────────────────────────","info"),O(`✅ 回测完成 | 耗时 ${b}ms | 共 ${p.totalTrades} 笔交易`,"info"),O(`💰 收益率：${p.returnRate>0?"+":""}${p.returnRate}% | 最大回撤：${p.maxDrawdown}%`,"info"),O(`📈 最终资产：${p.finalAsset.toLocaleString()} USDT（初始：${p.initialBalance.toLocaleString()} USDT）`,"info"),s.value="success",F()},e.onerror=o=>{const b=Math.round(performance.now()-a);_.value=o.message||"Worker 运行时出现未知错误",s.value="error",O(`❌ Worker 异常（${b}ms）：${_.value}`,"info"),F()},e.postMessage({code:w.value,kData:g,initialBalance:B.value})}function me(){F(),s.value="idle",_.value="",P.value=[],y.value=[],i.value={initialBalance:0,finalAsset:0,returnRate:null,maxDrawdown:null,totalTrades:null,elapsed:null}}return ne(async()=>{await N(L.value,C.value)}),le(()=>{F()}),(g,e)=>(S(),A("div",Ge,[t("header",He,[e[10]||(e[10]=t("div",{class:"topbar-brand"},[t("span",{class:"topbar-logo"},"▲"),t("span",{class:"topbar-title"},"量化回测平台"),t("span",{class:"topbar-version"},"v3.0")],-1)),t("div",Ve,[m.value==="loading"?(S(),A("div",Ke,[e[9]||(e[9]=t("span",{class:"btn-spinner btn-spinner--accent"},null,-1)),D(" 正在从币安永续合约拉取 "+f(c.value)+" K 线数据... ",1)])):m.value==="error"?(S(),A("div",We," ⚠ 数据加载失败（已回退至内置模拟数据） ")):m.value==="success"?(S(),A("div",Ye," ✓ "+f(x.value.length)+" 根真实K线 · "+f(L.value)+" 永续 · "+f(c.value)+"（Binance Futures） ",1)):J("",!0)]),t("div",je,[t("span",{class:H(["status-dot",{"status-dot--idle":s.value==="idle","status-dot--running":s.value==="running","status-dot--success":s.value==="success","status-dot--error":s.value==="error"}])},null,2),t("span",ze,f(d.value),1)])]),t("main",qe,[t("aside",Je,[t("section",Ze,[e[15]||(e[15]=t("div",{class:"card-header"},[t("span",{class:"card-header-icon"},"🌐"),D(" 数据源配置 ")],-1)),t("div",Qe,[t("div",Xe,[e[12]||(e[12]=t("label",{class:"form-label"},"交易品种",-1)),j(t("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>L.value=o),class:"form-select",disabled:s.value==="running"||m.value==="loading",onChange:ce},[...e[11]||(e[11]=[t("option",{value:"BTCUSDT"},"BTC/USDT 永续合约",-1),t("option",{value:"ETHUSDT"},"ETH/USDT 永续合约",-1)])],40,et),[[X,L.value]])]),t("div",tt,[e[14]||(e[14]=t("label",{class:"form-label"},"K 线周期",-1)),j(t("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>C.value=o),class:"form-select",disabled:s.value==="running"||m.value==="loading",onChange:K},[...e[13]||(e[13]=[ee('<option value="15m" data-v-c749706d>15 分钟线</option><option value="1h" data-v-c749706d>1 小时线</option><option value="2h" data-v-c749706d>2 小时线</option><option value="4h" data-v-c749706d>4 小时线</option><option value="1d" data-v-c749706d>日线</option>',5)])],40,at),[[X,C.value]])]),t("button",{class:"btn btn--ghost btn--full",disabled:s.value==="running"||m.value==="loading",onClick:K},[m.value==="loading"?(S(),A("span",ot)):(S(),A("span",st,"↻")),D(" "+f(m.value==="loading"?"加载中...":"刷新数据"),1)],8,rt)])]),t("section",nt,[e[19]||(e[19]=t("div",{class:"card-header"},[t("span",{class:"card-header-icon"},"⚙"),D(" 回测参数 ")],-1)),t("div",lt,[t("div",it,[e[16]||(e[16]=t("label",{class:"form-label"},"初始资金（USDT）",-1)),j(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>B.value=o),type:"number",min:"100",step:"100",class:"form-input",disabled:s.value==="running"},null,8,ct),[[te,B.value,void 0,{number:!0}]])]),t("div",ut,[e[18]||(e[18]=t("label",{class:"form-label"},"策略模板库",-1)),j(t("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>W.value=o),class:"form-select",disabled:s.value==="running",onChange:ue},[...e[17]||(e[17]=[ee('<option value="momentum" data-v-c749706d>📈 动量突破策略</option><option value="ma_cross" data-v-c749706d>〰️ 双均线金叉死叉（MA5/MA10）</option><option value="ma5_ma20_death" data-v-c749706d>📉 MA5/MA20 死叉做空</option><option value="rsi" data-v-c749706d>📉 RSI 超买超卖反转</option><option value="custom" data-v-c749706d>✏️ 自定义策略</option>',5)])],40,dt),[[X,W.value]])]),t("button",{class:"btn btn--primary btn--full",disabled:s.value==="running"||m.value==="loading",onClick:ve},[s.value==="running"?(S(),A("span",mt)):(S(),A("span",pt,"▶")),D(" "+f(s.value==="running"?"回测运行中...":"开始回测"),1)],8,vt),t("button",{class:"btn btn--ghost btn--full mt-8",disabled:s.value==="running",onClick:me}," ↺ 重置 ",8,ft)])]),t("section",gt,[e[20]||(e[20]=t("div",{class:"card-header"},[t("span",{class:"card-header-icon"},"✎"),D(" 策略编辑器 "),t("span",{class:"card-header-badge"},"JavaScript")],-1)),t("div",ht,[j(t("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>w.value=o),class:"code-editor",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",disabled:s.value==="running",placeholder:`// 在此输入你的策略代码
// 必须声明 onTick() 函数
function onTick() { ... }`},null,8,bt),[[te,w.value]])])])]),t("section",_t,[t("div",St,[t("span",At,f(L.value)+" · 永续合约",1),t("span",yt,f(c.value),1),t("span",Mt,f(x.value.length)+" 根 K 线",1),m.value==="success"?(S(),A("span",Tt," LIVE DATA ")):m.value==="loading"?(S(),A("span",kt," LOADING... ")):(S(),A("span",It," MOCK DATA ")),t("div",Rt,[t("button",{class:H(["ma-toggle-btn",{active:k.ma5}]),style:{"--ma-color":"#f6c90e"},onClick:e[5]||(e[5]=o=>k.ma5=!k.ma5)},"MA5",2),t("button",{class:H(["ma-toggle-btn",{active:k.ma10}]),style:{"--ma-color":"#2196f3"},onClick:e[6]||(e[6]=o=>k.ma10=!k.ma10)},"MA10",2),t("button",{class:H(["ma-toggle-btn",{active:k.ma20}]),style:{"--ma-color":"#e040fb"},onClick:e[7]||(e[7]=o=>k.ma20=!k.ma20)},"MA20",2)])]),t("div",Ct,[Ce($e,{kData:x.value,markers:P.value,showMA:k,theme:"dark",upColor:"#26a69a",downColor:"#ef5350"},null,8,["kData","markers","showMA"])])]),t("aside",Ot,[t("section",Dt,[e[30]||(e[30]=t("div",{class:"card-header"},[t("span",{class:"card-header-icon"},"📊"),D(" 回测统计 ")],-1)),t("div",wt,[t("div",xt,[t("div",Lt,[e[22]||(e[22]=t("div",{class:"stat-label"},"初始资金",-1)),t("div",Bt,[D(f(i.value.initialBalance>0?i.value.initialBalance.toLocaleString():"--")+" ",1),e[21]||(e[21]=t("span",{class:"stat-unit"},"USDT",-1))])]),t("div",Pt,[e[24]||(e[24]=t("div",{class:"stat-label"},"最终资产",-1)),t("div",{class:H(["stat-value",{"stat-value--profit":i.value.finalAsset>i.value.initialBalance,"stat-value--loss":i.value.finalAsset<i.value.initialBalance}])},[D(f(i.value.finalAsset>0?i.value.finalAsset.toLocaleString():"--")+" ",1),e[23]||(e[23]=t("span",{class:"stat-unit"},"USDT",-1))],2)]),t("div",Et,[e[25]||(e[25]=t("div",{class:"stat-label"},"收益率",-1)),t("div",{class:H(["stat-value stat-value--large",{"stat-value--profit":(i.value.returnRate??0)>0,"stat-value--loss":(i.value.returnRate??0)<0}])},f(i.value.returnRate!==null?(i.value.returnRate>0?"+":"")+i.value.returnRate+"%":"--"),3)]),t("div",Nt,[e[26]||(e[26]=t("div",{class:"stat-label"},"最大回撤",-1)),t("div",Ut,f(i.value.maxDrawdown!==null?i.value.maxDrawdown+"%":"--"),1)]),t("div",Ft,[e[28]||(e[28]=t("div",{class:"stat-label"},"总交易次数",-1)),t("div",$t,[D(f(i.value.totalTrades!==null?i.value.totalTrades:"--")+" ",1),e[27]||(e[27]=t("span",{class:"stat-unit"},"次",-1))])]),t("div",Gt,[e[29]||(e[29]=t("div",{class:"stat-label"},"回测耗时",-1)),t("div",Ht,f(i.value.elapsed!==null?i.value.elapsed+" ms":"--"),1)])])])]),t("section",Vt,[t("div",Kt,[e[31]||(e[31]=t("span",{class:"card-header-icon"},"📋",-1)),e[32]||(e[32]=D(" 运行日志 ",-1)),t("span",Wt,f(y.value.length)+" 条",1),y.value.length>0?(S(),A("button",{key:0,class:"btn-icon ml-auto",title:"清空日志",onClick:e[8]||(e[8]=o=>y.value=[])},"✕")):J("",!0)]),t("div",Yt,[t("div",{ref_key:"logPanelRef",ref:E,class:"log-panel"},[s.value==="error"?(S(),A("div",jt,[e[33]||(e[33]=t("span",{class:"log-error-icon"},"⚠",-1)),D(" "+f(_.value),1)])):J("",!0),y.value.length===0&&s.value!=="error"?(S(),A("div",zt,[...e[34]||(e[34]=[t("span",null,"尚无日志。点击「开始回测」后，策略运行日志将在此显示。",-1)])])):J("",!0),(S(!0),A(Oe,null,De(y.value,(o,b)=>(S(),A("div",{key:b,class:H(["log-entry",{"log-entry--buy":o.type==="buy","log-entry--sell":o.type==="sell","log-entry--info":o.type==="info"}])},[t("span",qt,f(String(b+1).padStart(3,"0")),1),t("span",Jt,f(o.text),1)],2))),128))],512)])])])])]))}}),ta=ie(ea,[["__scopeId","data-v-c749706d"]]);xe(ta).mount("#app");
