(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c23ed46"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?f(t):o(r(t))}},"0f8b":function(t,e,n){"use strict";n("fb95")},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("17c2"),i=n("9112");for(var f in o){var a=r[f],u=a&&a.prototype;if(u&&u.forEach!==c)try{i(u,"forEach",c)}catch(s){u.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),c=n("ae40"),i=o("forEach"),f=c("forEach");t.exports=i&&f?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),c=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},"7fd2":function(t,e,n){"use strict";n.r(e);var r=n("5c40"),o=n("9ff4"),c=Object(r["M"])("data-v-56a83510");Object(r["B"])("data-v-56a83510");var i={class:""};Object(r["z"])();var f=c((function(t,e){return Object(r["y"])(),Object(r["e"])("div",i,[Object(r["i"])("p",null,"age--- "+Object(o["E"])(t.age),1),Object(r["i"])("p",null,"obj--- "+Object(o["E"])(t.obj),1),Object(r["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"add"),Object(r["i"])("button",{onClick:e[2]||(e[2]=function(e){return t.changeObj(e)})},"changeObj"),Object(r["i"])("button",{onClick:e[3]||(e[3]=function(e){return t.handleStopWatch(e)})},"停止watch"),Object(r["i"])("button",{onClick:e[4]||(e[4]=function(e){return t.handleStopWatchEffect(e)})},"停止watchEffect")])})),a=(n("99af"),n("5530")),u=n("a1e9"),s={setup:function(){var t=Object(u["i"])({age:11,obj:{name:"tom",arr:[1,2,3]}}),e=Object(u["k"])(0);console.log(e),t.age=666;var n=Object(r["I"])((function(){return t.age}),(function(t,e){console.log("watch: age 当前值 ".concat(t,"; 改变前的值 ").concat(e))})),o=Object(r["J"])((function(){console.log("watchEffect ",t.age)})),c={add:function(){t.age++},changeObj:function(){t.obj.arr.push(444)},handleStopWatch:function(){n()},handleStopWatchEffect:function(){o()}};return Object(a["a"])({},Object(u["q"])(t),{},c)}};n("0f8b");s.render=f,s.__scopeId="data-v-56a83510";e["default"]=s},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),c=n("e8b5"),i=n("861d"),f=n("7b0b"),a=n("50c4"),u=n("8418"),s=n("65f0"),b=n("1dde"),l=n("b622"),d=n("2d00"),p=l("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",O=d>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=b("concat"),v=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:c(t)},j=!O||!y;r({target:"Array",proto:!0,forced:j},{concat:function(t){var e,n,r,o,c,i=f(this),b=s(i,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?i:arguments[e],v(c)){if(o=a(c.length),l+o>h)throw TypeError(g);for(n=0;n<o;n++,l++)n in c&&u(b,l,c[n])}else{if(l>=h)throw TypeError(g);u(b,l++,c)}return b.length=l,b}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),i=n("c430"),f=n("83ab"),a=n("4930"),u=n("fdbf"),s=n("d039"),b=n("5135"),l=n("e8b5"),d=n("861d"),p=n("825a"),h=n("7b0b"),g=n("fc6a"),O=n("c04e"),y=n("5c6c"),v=n("7c73"),j=n("df75"),S=n("241c"),m=n("057f"),w=n("7418"),L=n("06cf"),E=n("9bf2"),P=n("d1e7"),T=n("9112"),k=n("6eeb"),C=n("5692"),D=n("f772"),M=n("d012"),x=n("90e3"),N=n("b622"),V=n("e538"),G=n("746f"),A=n("d44e"),J=n("69f3"),W=n("b727").forEach,F=D("hidden"),H="Symbol",I="prototype",R=N("toPrimitive"),q=J.set,B=J.getterFor(H),_=Object[I],z=o.Symbol,Q=c("JSON","stringify"),K=L.f,U=E.f,X=m.f,Y=P.f,Z=C("symbols"),$=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=o.QObject,ot=!rt||!rt[I]||!rt[I].findChild,ct=f&&s((function(){return 7!=v(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(_,e);r&&delete _[e],U(t,e,n),r&&t!==_&&U(_,e,r)}:U,it=function(t,e){var n=Z[t]=v(z[I]);return q(n,{type:H,tag:t,description:e}),f||(n.description=e),n},ft=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},at=function(t,e,n){t===_&&at($,e,n),p(t);var r=O(e,!0);return p(n),b(Z,r)?(n.enumerable?(b(t,F)&&t[F][r]&&(t[F][r]=!1),n=v(n,{enumerable:y(0,!1)})):(b(t,F)||U(t,F,y(1,{})),t[F][r]=!0),ct(t,r,n)):U(t,r,n)},ut=function(t,e){p(t);var n=g(e),r=j(n).concat(pt(n));return W(r,(function(e){f&&!bt.call(n,e)||at(t,e,n[e])})),t},st=function(t,e){return void 0===e?v(t):ut(v(t),e)},bt=function(t){var e=O(t,!0),n=Y.call(this,e);return!(this===_&&b(Z,e)&&!b($,e))&&(!(n||!b(this,e)||!b(Z,e)||b(this,F)&&this[F][e])||n)},lt=function(t,e){var n=g(t),r=O(e,!0);if(n!==_||!b(Z,r)||b($,r)){var o=K(n,r);return!o||!b(Z,r)||b(n,F)&&n[F][r]||(o.enumerable=!0),o}},dt=function(t){var e=X(g(t)),n=[];return W(e,(function(t){b(Z,t)||b(M,t)||n.push(t)})),n},pt=function(t){var e=t===_,n=X(e?$:g(t)),r=[];return W(n,(function(t){!b(Z,t)||e&&!b(_,t)||r.push(Z[t])})),r};if(a||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=x(t),n=function(t){this===_&&n.call($,t),b(this,F)&&b(this[F],e)&&(this[F][e]=!1),ct(this,e,y(1,t))};return f&&ot&&ct(_,e,{configurable:!0,set:n}),it(e,t)},k(z[I],"toString",(function(){return B(this).tag})),k(z,"withoutSetter",(function(t){return it(x(t),t)})),P.f=bt,E.f=at,L.f=lt,S.f=m.f=dt,w.f=pt,V.f=function(t){return it(N(t),t)},f&&(U(z[I],"description",{configurable:!0,get:function(){return B(this).description}}),i||k(_,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:z}),W(j(nt),(function(t){G(t)})),r({target:H,stat:!0,forced:!a},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ft(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!f},{create:st,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),Q){var ht=!a||s((function(){var t=z();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(r=e,(d(e)||void 0!==t)&&!ft(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ft(e))return e}),o[1]=e,Q.apply(null,o)}})}z[I][R]||T(z[I],R,z[I].valueOf),A(z,H),M[F]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),c=n("df75"),i=n("d039"),f=i((function(){c(1)}));r({target:"Object",stat:!0,forced:f},{keys:function(t){return c(o(t))}})},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),c=n("56ef"),i=n("fc6a"),f=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),o=f.f,u=c(r),s={},b=0;while(u.length>b)n=o(r,e=u[b++]),void 0!==n&&a(s,e,n);return s}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),c=n("fc6a"),i=n("06cf").f,f=n("83ab"),a=o((function(){i(1)})),u=!f||a;r({target:"Object",stat:!0,forced:u,sham:!f},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fb95:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);