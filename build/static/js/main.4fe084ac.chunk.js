(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{50:function(A,e,a){A.exports=a(80)},55:function(A,e,a){},56:function(A,e,a){},57:function(A,e,a){},73:function(A,e,a){},74:function(A,e,a){},75:function(A,e,a){},76:function(A,e,a){},78:function(A,e,a){},79:function(A,e,a){},80:function(A,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),c=a(29),l=a.n(c),r=(a(55),a(9)),i=(a(56),a(57),a(14)),o=a(43),s=a.n(o),u=a(47),m=a.n(u),d=Object(t.createContext)(),p=function(A){var e=A.reducer,a=A.initialState,c=A.children;return n.a.createElement(d.Provider,{value:Object(t.useReducer)(e,a)},c)},V=function(){return Object(t.useContext)(d)},f=a(35),E=a.n(f),v=(E.a.initializeApp({apiKey:"AIzaSyCzmdh2dd9vGv9qHpnnR1KTVJMu9Xx5Fk0",authDomain:"clone-6bc94.firebaseapp.com",databaseURL:"https://clone-6bc94.firebaseio.com",projectId:"clone-6bc94",storageBucket:"clone-6bc94.appspot.com",messagingSenderId:"109543304502",appId:"1:109543304502:web:e52cf30d5243199b5c5797",measurementId:"G-QC6P0LHK8V"}),E.a.auth());var U=function(){var A=V(),e=Object(r.a)(A,1)[0],a=e.basket,t=e.user;return n.a.createElement("nav",{className:"header"},n.a.createElement(i.b,{to:"/"},n.a.createElement("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"logo"})),n.a.createElement("div",{className:"header_search"},n.a.createElement("input",{type:"text",className:"header_searchInput"}),n.a.createElement(s.a,{className:"header_searchIcon"})),n.a.createElement("div",{className:"header_nav"},n.a.createElement(i.b,{to:!t&&"/login",className:"header_link"},n.a.createElement("div",{onClick:function(){t&&v.signOut()},className:"header_option"},n.a.createElement("span",{className:"header_optionLineOne"},"Hello ",null===t||void 0===t?void 0:t.email),n.a.createElement("span",{className:"header_optionLineTwo"},t?"Sign out":"Sign In"))),n.a.createElement(i.b,{to:"/",className:"header_link"},n.a.createElement("div",{className:"header_option"},n.a.createElement("span",{className:"header_optionLineOne"},"Returns"),n.a.createElement("span",{className:"header_optionLineTwo"},"& Orders"))),n.a.createElement(i.b,{to:"/",className:"header_link"},n.a.createElement("div",{className:"header_option"},n.a.createElement("span",{className:"header_optionLineOne"},"Your"),n.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),n.a.createElement(i.b,{to:"/checkout",className:"header_link"},n.a.createElement("div",{className:"header_optionBasket"},n.a.createElement(m.a,null),n.a.createElement("span",{className:"header_optionLineTwo header_count"},null===a||void 0===a?void 0:a.length)))))},S=a(4),X=(a(73),a(74),a(33)),g=a.n(X);var x=function(A){var e=A.id,a=A.price,t=A.rating,c=A.title,l=A.image,i=V(),o=Object(r.a)(i,2),s=(o[0].basket,o[1]);return n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"product_info"},n.a.createElement("p",null,c),n.a.createElement("p",{className:"product_price"},n.a.createElement("small",null,"$"),n.a.createElement("strong",null,a)),n.a.createElement("div",{className:"product_rating"},Array(t).fill().map((function(A){return n.a.createElement("p",null,n.a.createElement(g.a,null))})))),n.a.createElement("img",{src:l,alt:""}),n.a.createElement("button",{onClick:function(){alert("product added to cart"),s({type:"ADD_TO_BASKET",item:{id:e,price:a,rating:t,title:c,image:l}})}},"Add to Basket"))};var b=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}),n.a.createElement("div",{className:"home_row"},n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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",alt:""}),n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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"})),n.a.createElement("div",{className:"home_row"},n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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"}),n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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"}),n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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"})),n.a.createElement("div",{className:"home_row"},n.a.createElement(x,{id:1234,title:"SG Cricket Bat",price:250,rating:5,image:"data:image/jpeg;base64,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"})))};a(75),a(76);var W=function(A){var e=A.image,a=A.title,t=A.id,c=A.rating,l=A.price,i=V(),o=Object(r.a)(i,2),s=(o[0].basket,o[1]);return n.a.createElement("div",{className:"checkoutProduct"},n.a.createElement("img",{className:"checkoutProduct_image",src:e,alt:""}),n.a.createElement("div",{className:"checkoutProduct_info"},n.a.createElement("p",{className:"checkoutProduct_title"},a),n.a.createElement("p",{className:"checkoutProduct_price"},n.a.createElement("small",null,"$"),n.a.createElement("strong",null,l)),n.a.createElement("div",{className:"checkoutProduct_rating"},Array(c).fill().map((function(A,e){return n.a.createElement("p",null,n.a.createElement(g.a,null))}))),n.a.createElement("button",{onClick:function(){alert("removed from basket"),s({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))},D=a(48),N=a.n(D),T=(a(78),a(39)),q=a(20),O=function(A){return null===A||void 0===A?void 0:A.reduce((function(A,e){return e.price+A}),0)},J=function(A,e){switch(console.log(e),e.type){case"SET_USER":return Object(q.a)(Object(q.a)({},A),{},{user:e.user});case"ADD_TO_BASKET":return Object(q.a)(Object(q.a)({},A),{},{basket:[].concat(Object(T.a)(A.basket),[e.item])});case"REMOVE_FROM_BASKET":var a=Object(T.a)(A.basket),t=A.basket.findIndex((function(A){return A.id===e.id}));return t>=0&&a.splice(t,1),Object(q.a)(Object(q.a)({},A),{},{basket:a});default:return A}};var Q=function(){var A=V(),e=Object(r.a)(A,1)[0].basket;return n.a.createElement("div",{className:"subtotal"},n.a.createElement(N.a,{renderText:function(A){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Subtotal (",e.length," items): ",n.a.createElement("strong",null)),n.a.createElement("small",{className:"subtotal_gift"},n.a.createElement("input",{className:"subtotal_input",type:"checkbox"}),"This Order contains gift"))},decimalScale:2,value:O(e),displayType:"text",thousandSeperator:!0,prefix:"$"}),n.a.createElement(i.b,{to:"/thankyou"},n.a.createElement("div",null,n.a.createElement("button",{className:"subtotal_button"},"Proceed To Checkout"))))};var h=function(){var A=V(),e=Object(r.a)(A,1)[0].basket;return n.a.createElement("div",{className:"checkout"},n.a.createElement("div",{className:"checkout_left"},n.a.createElement("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"ad"}),0===(null===e||void 0===e?void 0:e.length)?n.a.createElement("div",null,n.a.createElement("h2",null,"Your Shopping Basket is Empty")):n.a.createElement("div",null,n.a.createElement("h2",{className:"checkout_title"},"Your Shopping Basket"),e.map((function(A){return n.a.createElement(W,{price:A.price,id:A.id,rating:A.rating,title:A.title,image:A.image})}))),";"),e.length>0&&n.a.createElement("div",null,n.a.createElement(Q,null)))},L=a(95);a(79);var B=function(){var A=Object(S.f)(),e=Object(t.useState)(""),a=Object(r.a)(e,2),c=a[0],l=a[1],i=Object(t.useState)(""),o=Object(r.a)(i,2),s=o[0],u=o[1];return n.a.createElement("div",{className:"login"},n.a.createElement(L.a,{to:"/"},n.a.createElement("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),n.a.createElement("div",{className:"login_container"},n.a.createElement("h1",null,"Sign In"),n.a.createElement("form",null,n.a.createElement("h5",null,"E-mail"),n.a.createElement("input",{value:c,onChange:function(A){return l(A.target.value)},type:"email"}),n.a.createElement("h5",null,"Password"),n.a.createElement("input",{value:s,onChange:function(A){return u(A.target.value)},type:"password"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),v.signInWithEmailAndPassword(c,s).then((function(e){A.push("/")})).catch((function(A){return alert(A.message)}))},type:"submit",className:"login_signInButton"},"Sign In")),n.a.createElement("button",{onClick:function(e){e.preventDefault(),v.createUserWithEmailAndPassword(c,s).then((function(e){A.push("/")})).catch((function(A){return alert(A.message)}))},className:"login_createAccountButton"},"Create your Amazon Account")))};var y=function(){var A=V(),e=Object(r.a)(A,2),a=e[0].user,c=e[1];return Object(t.useEffect)((function(){var A=v.onAuthStateChanged((function(A){c(A?{type:"SET_USER",user:A}:{type:"SET_USER",user:null})}));return function(){A()}}),[]),console.log(a),n.a.createElement(i.a,null,n.a.createElement(S.c,null,n.a.createElement(S.a,{path:"/thankyou"},n.a.createElement(U,null),n.a.createElement("h1",null,"Thank You")),n.a.createElement(S.a,{path:"/checkout"},n.a.createElement(U,null),n.a.createElement(h,null)),n.a.createElement(S.a,{path:"/login"},n.a.createElement(B,null)),n.a.createElement(S.a,{path:"/"},n.a.createElement(U,null),n.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,{initialState:{basket:[],user:null},reducer:J},n.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.4fe084ac.chunk.js.map