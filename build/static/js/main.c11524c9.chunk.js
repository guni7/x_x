(this.webpackJsonpx_x=this.webpackJsonpx_x||[]).push([[0],{140:function(e,t){},200:function(e,t,n){},201:function(e,t,n){},214:function(e,t){},216:function(e,t){},280:function(e,t){},282:function(e,t){},325:function(e,t){},326:function(e,t){},331:function(e,t){},333:function(e,t){},340:function(e,t){},359:function(e,t){},394:function(e,t,n){"use strict";n.r(t);var r,c=n(1),s=n.n(c),a=n(81),o=n.n(a),i=(n(200),n(201),n(0)),l=n.n(i),u=n(30),d=n(3),b=n(18),f=n(13),j=n(83),x=n(68),m=n(47),p={Tezos:new m.a("https://ithacanet.ecadinfra.com"),contract:void 0,wallet:null,userAddress:void 0,userBalance:0,storage:null,beaconConnection:!1,contractAddress:"KT19xorVBYtEy5sofm6HTJsP219MtzpybEtu",publicToken:"",tokens:void 0,tokenBalances:[],selectedToken:null,selectedTokenDistribution:null,tokenDistribution:void 0,userProfile:null},O=Object(x.b)({name:"tezos",initialState:p,reducers:{setTezos:function(e,t){e.Tezos=t.payload},setContract:function(e,t){e.contract=t.payload},setWallet:function(e,t){e.wallet=t.payload},setUserAddress:function(e,t){e.userAddress=t.payload},setUserBalance:function(e,t){e.userBalance=t.payload},setStorage:function(e,t){e.storage=t.payload},setBeaconConnection:function(e,t){e.beaconConnection=t.payload},setPublicToken:function(e,t){e.publicToken=t.payload},setTokens:function(e,t){e.tokens=t.payload},setTokenBalances:function(e,t){e.tokenBalances=t.payload},setSelectedToken:function(e,t){e.selectedToken=t.payload},setSelectedTokenDistribution:function(e,t){e.selectedTokenDistribution=t.payload},setTokenDistribution:function(e,t){e.tokenDistribution=t.payload},setUserProfile:function(e,t){e.userProfile=t.payload}}}),v=O.actions,h=v.setTezos,g=v.setContract,w=v.setWallet,y=v.setUserAddress,k=v.setUserBalance,T=v.setStorage,N=v.setBeaconConnection,A=v.setPublicToken,C=(v.setTokens,v.setTokenBalances),S=v.setSelectedToken,D=(v.setSelectedTokenDistribution,v.setTokenDistribution),U=v.setUserProfile,B=O.reducer,P=function(e){return e.tezos||p},E=Object(j.a)([P],(function(e){return e.Tezos})),I=(Object(j.a)([P],(function(e){return e.contract})),Object(j.a)([P],(function(e){return e.wallet}))),L=Object(j.a)([P],(function(e){return e.userAddress})),H=Object(j.a)([P],(function(e){return e.userBalance})),_=(Object(j.a)([P],(function(e){return e.storage})),Object(j.a)([P],(function(e){return e.beaconConnection}))),z=Object(j.a)([P],(function(e){return e.contractAddress})),M=(Object(j.a)([P],(function(e){return e.publicToken})),Object(j.a)([P],(function(e){return e.tokens})),Object(j.a)([P],(function(e){return e.tokenBalances}))),K=Object(j.a)([P],(function(e){return e.selectedToken})),R=(Object(j.a)([P],(function(e){return e.selectedTokenDistribution})),Object(j.a)([P],(function(e){return e.tokenDistribution}))),F=Object(j.a)([P],(function(e){return e.userProfile})),W=n(14),G=n(192);!function(e){e.KUSD="kUSD",e.HDAO="hDAO",e.PLENTY="PLENTY",e.xPLENTY="xPLENTY",e.WXTZ="wXTZ",e.STKR="STKR",e.TZBTC="tzBTC",e.USDTZ="USDtz",e.ETHTZ="ETHtz",e.CRUNCH="CRUNCH",e.WRAP="WRAP",e.wAAVE="wAAVE",e.wBUSD="wBUSD",e.wCEL="wCEL",e.wCOMP="wCOMP",e.wCRO="wCRO",e.WDAI="wDAI",e.wFTT="wFTT",e.wHT="wHT",e.wHUSD="wHUSD",e.wLEO="wLEO",e.wLINK="wLINK",e.wMATIC="wMATIC",e.wMKR="wMKR",e.wOKB="wOKB",e.wPAX="wPAX",e.wSUSHI="wSUSHI",e.wUNI="wUNI",e.wUSDC="wUSDC",e.wUSDT="wUSDT",e.WWBTC="wWBTC",e.wWETH="wWETH",e.CRDAO="crDAO",e.FLAME="FLAME",e.KALAM="KALAM",e.PAUL="PAUL",e.SMAK="SMAK",e.GOT="GOT",e.HERA="HERA",e.KDAO="kDAO",e.QUIPU="QUIPU",e.uUSD="uUSD",e.YOU="YOU",e.Ctez="Ctez",e.MAG="MAG",e.PXL="PXL",e.pxlDAO="pxlDAO",e.fDAO="fDAO",e.BTCtz="BTCtz",e.IDZ="IDZ",e.GIF="GIF",e.TezDAO="TezDAO",e.uBTC="uBTC",e.XTZ="XTZ",e.OTHER="OTHER"}(r||(r={}));var Y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.ithacanet.tzkt.io/v1/tokens/balances?account=".concat(t,"&balance.gt=1"));case 3:if(n=e.sent,c={3754:r.BTCtz,3755:r.FLAME,3764:r.GIF,3759:r.wWETH,3760:r.GOT},!n){e.next=14;break}return e.next=8,n.json();case 8:return s=e.sent,a=s.map((function(e){var t,n,r,s,a,o;return{id:e.id,address:e.token.contract.address,balance:e.balance,decimals:(null===(t=e.token.metadata)||void 0===t?void 0:t.decimals)?null===(n=e.token.metadata)||void 0===n?void 0:n.decimals:0,icon:(null===(r=e.token.metadata)||void 0===r?void 0:r.icon)?null===(s=e.token.metadata)||void 0===s?void 0:s.icon:"",name:(null===(a=e.token.metadata)||void 0===a?void 0:a.name)?null===(o=e.token.metadata)||void 0===o?void 0:o.name:c[e.id],symbol:c[e.id],type:e.token.standard.toUpperCase(),isApproved:!1}})),console.log(a.filter((function(e){return"FA1.2"===e.type}))),e.abrupt("return",a.filter((function(e){return"FA1.2"===e.type})));case 14:return e.abrupt("return",null);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),Z=n(4),X=function(){var e=Object(f.b)(),t=Object(f.c)(E),n=Object(f.c)(I),r=Object(c.useState)(""),s=Object(b.a)(r,2),a=s[0],o=s[1],i=function(){var n=Object(u.a)(l.a.mark((function n(r){var c,s,a,o,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(y(r)),n.next=3,t.tz.getBalance(r);case 3:return c=n.sent,e(k(c.toNumber())),n.next=7,Y(r);case 7:return s=n.sent,console.log(s),e(C(s)),n.next=12,t.wallet.at("KT19xorVBYtEy5sofm6HTJsP219MtzpybEtu");case 12:return a=n.sent,e(g(a)),n.next=16,a.storage();case 16:return o=n.sent,e(T(o)),n.next=20,o.users.get(r);case 20:i=n.sent,console.log("userP",i),e(U(i));case 23:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,null===n||void 0===n?void 0:n.requestPermissions({network:{type:W.p.CUSTOM,rpcUrl:"https://ithacanet.ecadinfra.com"}});case 3:return t.next=5,null===n||void 0===n?void 0:n.getPKH();case 5:if(!(r=t.sent)){t.next=9;break}return t.next=9,i(r);case 9:e(N(!0)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Object(u.a)(l.a.mark((function n(){var r,c,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=new G.a({name:"x_x",preferredNetwork:W.p.CUSTOM,disableDefaultEvents:!0,eventHandlers:(r={},Object(d.a)(r,W.e.PAIR_INIT,{handler:W.K.PAIR_INIT}),Object(d.a)(r,W.e.PAIR_SUCCESS,{handler:function(e){return o(e.publicKey)}}),r)}),console.log(c),t.setWalletProvider(c),e(w(c)),n.next=6,c.client.getActiveAccount();case 6:if(!n.sent){n.next=14;break}return n.next=10,c.getPKH();case 10:return s=n.sent,n.next=13,i(s);case 13:e(N(!0));case 14:case"end":return n.stop()}}),n)})))()}),[]),Object(c.useEffect)((function(){e(A(a))}),[o]),Object(Z.jsx)("button",{onClick:j,className:"px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2",children:"Connect Wallet"})};var V=function(){var e=Object(f.b)(),t=Object(f.c)(I),n=Object(f.c)(L),r=(Object(f.c)(H),function(){var n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e(y("")),e(k(0)),e(w(null)),r=new m.a("https://ithacanet.ecadinfra.com"),e(h(r)),e(N(!1)),e(A(null)),!t){n.next=14;break}return n.next=10,t.client.removeAllAccounts();case 10:return n.next=12,t.client.removeAllPeers();case 12:return n.next=14,t.client.destroy();case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{onClick:r,className:"px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:n})})},J=n(34),q=function(){var e=Object(f.b)(),t=Object(f.c)(R),n=Object(f.c)(M),r=(Object(f.c)(F),Object(f.c)(L),Object(f.c)(E)),c=Object(f.c)(z),s=function(){var s=Object(u.a)(l.a.mark((function s(){var a,o,i,u,d,b;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(null===t||void 0===t?void 0:t.map((function(e){var t=n.find((function(t){return t.symbol===e.tokenSymbol}));if(t){var r=e.distribution.map((function(e){return Object(J.e)({beneficiary_address:Object(J.a)(e.address),percentage:Object(J.d)(e.percentage)})}));return console.log(t.balance),Object(J.e)({asset_id:Object(J.f)(t.id),token_details:Object(J.e)({token_type:Object(J.f)(t.type),is_fungible:Object(J.b)(!1),address:Object(J.a)(t.address),decimals:Object(J.d)(t.decimals),amount:Object(J.d)(100),distribution_list:Object(J.c)(r)})})}})),t){s.next=3;break}return s.abrupt("return");case 3:return a=null===t||void 0===t?void 0:t.map((function(e){var t=n.find((function(t){return t.symbol===e.tokenSymbol}));if(t){var r=e.distribution.map((function(e){return{beneficiary_address:e.address,percentage:e.percentage}}));return console.log(t.balance),{asset_id:t.id,token_details:{token_type:t.type,is_fungible:!1,address:t.address,decimals:t.decimals,amount:100,distribution_list:r}}}})),s.prev=4,s.next=7,r.wallet.at(c);case 7:if(o=s.sent,a){s.next=10;break}return s.abrupt("return");case 10:return console.log(a[0]),i=o.methods.createUserParam({token_assets:[{asset_id:"1",amount:100,uncapped:!1,token_details:{address:"KT1KuoFrHs4bxRbLRm79qGs69xP93hKVnsD9",decimals:10,is_fungible:!0,token_type:"FA1.2"},distribution:[{beneficiary_address:"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",percentage:100}]}],trigger_time:new Date(Date.now()).toISOString()}),s.next=14,i.send({storageLimit:2e3,gasLimit:5e5,fee:2e5});case 14:return u=s.sent,s.next=17,u.confirmation(3);case 17:return d=s.sent,console.log(d),s.next=21,o.storage();case 21:b=s.sent,e(T(b)),s.next=28;break;case 25:s.prev=25,s.t0=s.catch(4),console.log(s.t0);case 28:case"end":return s.stop()}}),s,null,[[4,25]])})));return function(){return s.apply(this,arguments)}}();return Object(Z.jsx)("button",{onClick:s,className:"".concat(t&&(null===t||void 0===t?void 0:t.length)>0?"animate-pulse":""," px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2"),children:t&&(null===t||void 0===t?void 0:t.length)>0?"Add ".concat(t.length," assets to Will"):"Create Empty User"})},Q=function(){var e=Object(f.c)(F),t=Object(f.c)(z),n=Object(f.c)(E),r=function(){var e=Object(u.a)(l.a.mark((function e(){var r,c,s,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.wallet.at(t);case 2:return r=e.sent,(c=new Date).setUTCHours(0,0,0,0),console.log(c.getTime()),console.log(c),157788e5,864e5,s=new Date(c.getTime()+1728e5).toISOString(),a=r.methods.updateTriggerParam(s),e.next=13,a.send({storageLimit:2e3,gasLimit:5e5,fee:2e5});case 13:return o=e.sent,e.next=16,o.confirmation(3);case 16:e.sent;case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){console.log(e)}),[e]);var s=Object(f.c)(_);return Object(Z.jsx)("nav",{className:"flex items-center ".concat(s?"justify-between":"justify-end"," flex-wrap bg-yellow-100 p-6 border-gray-200"),children:s?Object(Z.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[Object(Z.jsx)(V,{}),Object(Z.jsx)("div",{className:"flex flex-row",children:Object(Z.jsxs)("button",{className:"flex w-48",onClick:r,children:[Object(Z.jsx)("img",{className:"h-8 w-auto",src:"./images/dead.png",alt:"dead emoji"}),Object(Z.jsxs)("span",{className:"mt-1 ml-1",children:["in ",Math.floor((Date.parse(String(null===e||void 0===e?void 0:e.trigger_time))-Number(Date.now()))/864e5)," days"]})]})}),Object(Z.jsx)(q,{})]}):Object(Z.jsx)(X,{})})},$=n(48),ee=n(10),te=n(194),ne=(n(393),function(e){var t=e.id,n=e.beneficiaries,r=e.setBeneficiaries,s=Object(c.useState)(n[t].percentage),a=Object(b.a)(s,2),o=a[0],i=a[1],l=Object(c.useState)(n[t].address),u=Object(b.a)(l,2),d=u[0],f=u[1];return Object(c.useEffect)((function(){i(n[t].percentage)}),[n]),Object(Z.jsxs)("div",{className:"flex flex-col ml-8 p-8 justify-items-center border-blue-400 bg-yellow-100 border-0  m-1 border-l-2",children:[Object(Z.jsx)("div",{className:"flex justify-between ",children:Object(Z.jsx)("input",{className:"w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 bg-yellow-100 rounded-full",type:"text",placeholder:"Beneficiary Address",value:d,onChange:function(e){return function(e){f(e.target.value);var c=n.map((function(n){return n.id===t?Object($.a)(Object($.a)({},n),{},{address:e.target.value}):n}));r(c)}(e)}})}),Object(Z.jsxs)("div",{className:"flex color align-center mt-2 ",children:[Object(Z.jsx)(te.a,{onChange:function(e){return function(e){i(e);var c=n.map((function(n){return n.id===t?Object($.a)(Object($.a)({},n),{},{percentage:e}):n}));r(c)}(e)},value:o,className:"self-center"}),Object(Z.jsxs)("span",{className:"w-1/4 ml-4 pl-2 pt-2 pb-2 text-sm border-2 border-gray-200 rounded-full",children:["gets ",o,"% "]})]})]})}),re=function(e){var t=e.token,n=e.beneficiaries,r=e.setBeneficiaries,s=Object(c.useState)(!1),a=Object(b.a)(s,2),o=a[0],i=a[1],d=Object(c.useState)(void 0),j=Object(b.a)(d,2),x=j[0],m=j[1],p=Object(c.useState)(!0),O=Object(b.a)(p,2),v=O[0],h=O[1],g=Object(f.b)(),w=Object(f.c)(R),y=Object(f.c)(M),k=Object(f.c)(z),T=Object(f.c)(E),N=Object(f.c)(L),A=y.find((function(e){return e.symbol===t})),C=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(k),console.log(x),e.next=5,x.methods.approve("KT19xorVBYtEy5sofm6HTJsP219MtzpybEtu",100);case 5:return t=e.sent,e.next=8,t.send({storageLimit:2e3,gasLimit:5e5,fee:2e5});case 8:return n=e.sent,e.next=11,n.confirmation(3);case 11:r=e.sent,console.log(r),i(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.wallet.at(t);case 2:return n=e.sent,m(n),e.next=6,n.storage();case 6:return r=e.sent,e.next=9,r.ledger.get(N);case 9:e.sent.allowances.get(k)?i(!0):i(!1),h(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(h(!0),A)(function(t){e.apply(this,arguments)})(null===A||void 0===A?void 0:A.address)}),[A]),Object(Z.jsx)("div",{className:"flex h-full -mt-20",children:v?Object(Z.jsxs)("div",{className:"flex justify-center items-center space-x-2 mt-60 ml-80 ",children:[Object(Z.jsx)("div",{className:"spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-600",role:"status"}),Object(Z.jsx)("div",{className:"spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-700",role:"status"}),Object(Z.jsx)("div",{className:"spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-800",role:"status"})]}):Object(Z.jsx)("div",{className:"flex flex-col w-full justify-items-center h-full",children:o?Object(Z.jsxs)("div",{className:"flex flex-col w-full h-full",children:[Object(Z.jsxs)("button",{className:" flex justify-self-center self-end m-8 items-center px-8 p-2  text-blue-600 border border-blue-400 rounded hover:bg-blue-400 hover:text-white active:bg-blue-500 focus:outline-none focus:ring",onClick:function(){if(n.every((function(e){return""!==e.address}))&&100===n.reduce((function(e,t){return e+t.percentage}),0)){var e={tokenSymbol:t,amount:(null===A||void 0===A?void 0:A.balance)?A.balance:0,distribution:n,approvedAmount:0};if(w)if(w.findIndex((function(e){return e.tokenSymbol===t}))<0)g(D([].concat(Object(ee.a)(w),[e])));else{var r=w.map((function(n){return n.tokenSymbol===t?e:n}));g(D(r))}else g(D([e]))}},children:["Add To Distribution",Object(Z.jsx)("svg",{className:"w-5 h-5 ml-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(Z.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]}),Object(Z.jsxs)("div",{className:"flex ml-28  flex-col w-3/4 ",children:[n.map((function(e){return Object(Z.jsx)("div",{children:Object(Z.jsx)(ne,{id:e.id,beneficiaries:n,setBeneficiaries:r},e.id)})})),Object(Z.jsx)("button",{className:"border-1 rounded-full w-40 m-2 p-2 self-center text-blue-600 border border-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-500 focus:outline-none focus:ring",onClick:function(){var e={id:null===n||void 0===n?void 0:n.length,address:"",percentage:Math.floor(100/(n.length+1))},t=[].concat(Object(ee.a)(n),[e]);r(t.map((function(t){return Object($.a)(Object($.a)({},t),{},{address:t.address,percentage:e.percentage})})))},children:" Add Beneficiary "}),Object(Z.jsx)("div",{})]})]}):Object(Z.jsxs)("div",{className:"flex flex-col justify-center align-middle justify-items-center",children:[Object(Z.jsx)("p",{className:"p-4 m-4",children:"To be able to pass on this asset to your beneficiaries, you must allow us to transfer it."}),Object(Z.jsx)("button",{onClick:C,className:"ml-20 w-1/4 inline-block px-8 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring",children:"Click to Allow"})]})})})},ce=function(e){var t=e.tokenBalance,n=Object(f.c)(R),r=null===n||void 0===n?void 0:n.find((function(e){return e.tokenSymbol===t.symbol})),c=Object(f.c)(K);return Object(Z.jsx)("div",{className:"flex p-3 ml-12",children:Object(Z.jsx)("div",{className:"flex group h-48 w-1/4",children:Object(Z.jsxs)("div",{className:"".concat(t.symbol===c?"animate-pulse shadow-lg  ml-4 flex items-end h-full transition-transform transform border-4 border-pink-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg":"flex items-end h-full transition-transform transform border-2 border-pink-500 shadow-md group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg"),children:[Object(Z.jsx)("span",{className:"absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs",children:t.type}),Object(Z.jsx)("span",{className:"absolute left-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs",children:"Fungible"}),Object(Z.jsx)("div",{className:" transition-opacity group-hover:opacity-0 group-hover:absolute  mb-8",children:Object(Z.jsxs)("div",{className:"flex justify-around w-80",children:[Object(Z.jsxs)("div",{className:"flex justify-center ",children:[Object(Z.jsx)("img",{className:"flex self-center w-12 h-12",src:"./images/"+t.symbol+".png",alt:"token"}),Object(Z.jsxs)("div",{className:"flex flex-col align-center ml-8",children:[Object(Z.jsx)("span",{className:"flex mt-0 text-xl font-medium",children:t.symbol}),Object(Z.jsx)("span",{className:" flex mt-0 text-md font-normal",children:t.name})]})]}),Object(Z.jsx)("div",{className:"flex flex-col align-center",children:Object(Z.jsx)("h2",{className:"flex mt-4 text-md font-normal self-center",children:t.balance/Math.pow(10,t.decimals)})})]})}),Object(Z.jsxs)("div",{className:"absolute p-6 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative",children:[r&&0!==r.distribution.length?Object(Z.jsxs)("h2",{className:"mt-2 text-2xl font-medium",children:["Asset distributed between ",r.distribution.length," beneficiaries"]}):Object(Z.jsx)("h2",{className:"mt-2 text-2xl font-medium",children:"Asset not distributed"}),r&&0!==r.distribution.length?Object(Z.jsx)("p",{className:"mt-2 font-bold",children:"Click to Edit"}):Object(Z.jsx)("p",{className:"mt-2 font-bold",children:"Click to distribute"})]})]})})})},se=function(){var e=Object(f.b)(),t=Object(f.c)(K),n=Object(f.c)(M),r=Object(f.c)(R),s=Object(c.useState)([]),a=Object(b.a)(s,2),o=a[0],i=a[1],l=Object(c.useState)(""),u=Object(b.a)(l,2),d=u[0],j=u[1];return Object(Z.jsxs)("div",{className:"w-full h-screen bg-yellow-100 ",children:[Object(Z.jsx)("div",{className:"flex flex-col h-full w-1/3 float-left border-blue-400 overflow-y-scroll",children:n.map((function(t){return Object(Z.jsx)("div",{className:"flex flex-col",onClick:function(){return function(t){if(d!==t)if(j(t),e(S(t)),r&&r.length>0){var n=r.findIndex((function(e){return e.tokenSymbol===t}));i(n<0?[]:r[n].distribution)}else i([])}(t.symbol)},children:Object(Z.jsx)("div",{children:Object(Z.jsx)(ce,{tokenBalance:t})})},t.symbol)}))}),Object(Z.jsx)("div",{className:"flex w-2/3 h-full float-right ",children:t?Object(Z.jsx)("div",{className:"p-1 m-8 overflow-scroll w-full shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl",children:Object(Z.jsx)("a",{className:"block h-full p-6 bg-yellow-100 rounded-xl ",children:Object(Z.jsx)("div",{className:"mt-16 ",children:Object(Z.jsx)(re,{token:d,beneficiaries:o,setBeneficiaries:i})})})}):Object(Z.jsx)("div",{className:"p-1 m-8 overflow-scroll w-full shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl",children:Object(Z.jsx)("div",{className:"block h-full p-6 bg-yellow-100 rounded-xl ",children:Object(Z.jsx)("div",{className:"mt-24 ",children:Object(Z.jsx)("aside",{className:"p-12",children:Object(Z.jsx)("div",{className:"max-w-xl mx-auto text-center",children:Object(Z.jsx)("p",{className:"mt-2 text-3xl font-bold sm:text-5xl",children:"Select an asset to start"})})})})})})})]})},ae=function(){return Object(Z.jsx)("div",{className:"flex flex-row w-full",children:Object(Z.jsx)(se,{})})};var oe=function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(Q,{}),Object(Z.jsx)(ae,{})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},le=n(40),ue=Object(le.b)({tezos:B}),de=Object(x.a)({reducer:ue});o.a.render(Object(Z.jsx)(s.a.StrictMode,{children:Object(Z.jsx)(f.a,{store:de,children:Object(Z.jsx)(oe,{})})}),document.getElementById("root")),ie()}},[[394,1,2]]]);
//# sourceMappingURL=main.c11524c9.chunk.js.map