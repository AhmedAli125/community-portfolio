(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2mvg":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),m=t("17x9"),s=t.n(m),d=t("vUet"),u=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],f=(s.a.string,s.a.bool,s.a.bool,s.a.bool,s.a.bool,o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.fluid,m=e.rounded,s=e.roundedCircle,f=e.thumbnail,h=Object(r.a)(e,u);t=Object(d.a)(t,"img");var p=c()(i&&t+"-fluid",m&&"rounded",s&&"rounded-circle",f&&t+"-thumbnail");return o.a.createElement("img",Object(n.a)({ref:a},h,{className:c()(l,p)}))})));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=f},"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return r.b})),t.d(a,"c",(function(){return l}));var n=t("ElpU"),r=t("BYIe"),l={getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var c=[];c.push(r.node.childImageSharp.fluid),e[l]=c}else e[l]=r.node.childImageSharp.fluid;return e}),{})}}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("BYIe"),c=t("Kvkj"),i=t("7Qib"),o=t("7vrA"),m=t("2mvg"),s=t("IP2g");a.default=function(e){var a=e.data.site.siteMetadata,t=a.unemployed,d=a.firstName,u=a.lastName,f=(a.occupation,Object(n.useContext)(l.b).dark);return r.a.createElement(c.b,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement(o.a,{className:"text-center pt-5 mt-5",fluid:!0},r.a.createElement(m.a,{width:"150",height:"150",fluid:!0,src:"images/cwa.png",alt:f?"Darth Vader":"R2-D2"}),t&&r.a.createElement("p",{className:"mt-2"},r.a.createElement("b",null," ","Learning amazing things, meeting amazing people, everyday! :)")),r.a.createElement(o.a,{className:"py-0 my-0"},r.a.createElement("h1",{style:{fontSize:"5rem",color:"black"}},r.a.createElement("span",{className:"first-name"},d)," ",r.a.createElement("span",{className:"last-name"},u)),r.a.createElement("p",null,r.a.createElement("i",null,"The one stop shop to have fun with amazing people, and to code of course."))),r.a.createElement("hr",{className:"my-3 w-25"}),r.a.createElement("div",{className:"d-md-inline-flex icons-container"},r.a.createElement("a",{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","github"],className:"icons github",title:"Github"})),r.a.createElement("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","linkedin"],className:"icons linkedin",title:"LinkedIn"})),r.a.createElement("a",{href:"https://www.freecodecamp.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","free-code-camp"],className:"icons fcc",title:"FreeCodeCamp"})),r.a.createElement("a",{href:"https://www.hackerrank.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","hackerrank"],className:"icons hr",title:"Hackerrank"})),r.a.createElement("a",{href:"mailto:johndoe@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fas","envelope"],className:"icons mail",title:"e-mail"})),r.a.createElement("a",{href:"../../resume.pdf",target:"_blank",download:!0},r.a.createElement(s.a,{icon:["fas","file-alt"],className:"icons file",title:"Resume"})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-27457aafe5ca572b425b.js.map