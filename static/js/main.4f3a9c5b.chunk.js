(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5437:function(e,t,n){e.exports=n(5670)},5442:function(e,t,n){},5443:function(e,t,n){},5669:function(e,t){},5670:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(18),l=n.n(o),c=(n(5442),n(5443),n(17)),i=n(14),u=n(36),s=n.n(u),m=n(78),d=n(225),f=n(34),p=function(){var e=Object(m.a)(s.a.mark(function e(t){var n,a,r,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,E(t);case 3:o=e.sent,l=v(o),a=l.columns,r=l.data,n=t.name;case 8:return e.abrupt("return",{title:n,columns:a,data:r});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t={};if(e){var n=e.split("\n").map(function(e){return e.split("\t")}).filter(function(e){return e&&e.length>1});t={columns:n.shift(),data:n}}return t},w=function(e){var t="";return e&&(t=e.map(function(e){return e.join("\t")}).join("\n")),t},E=function(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(e){var n=e.target.result;t(n)},a.readAsText(e)})},b=n(79),g=n(55),h=n(26),x=n(226),C=n.n(x),j=r.a.createContext();function y(e){var t=e.children,n=Object(a.useState)({}),o=Object(h.a)(n,2),l=o[0],c=o[1];var i=function(e){var t=e.length;return t>9&&(t=9),Math.random().toString(36).substr(2,t)},u={file:l,setFile:c,addRow:function(e){var t=e.rowIndex,n=e.newRow,a=l.data.slice(0),r=Object(g.a)(a);r.splice(t+1,0,n);var o=Object(b.a)({},l,{data:r});c(o)},deleteRow:function(e){var t=e.rowIndex,n=l.data.slice(0);n.splice(t,1);var a=Object(b.a)({},l,{data:n});c(a)},editCell:function(e){var t=e.rowIndex,n=e.columnIndex,a=e.value,r=l.data.slice(0);r[t][n-1]=a;var o=Object(b.a)({},l,{data:r});c(o)},downloadFile:function(){if(l.columns&&l.data){var e=Object(g.a)(l.data);e.unshift(l.columns);var t=w(e);C()(t,l.title)}},generateNewRow:function(e){var t=e.row,n={},a={};l.data.forEach(function(e){e.forEach(function(e,t){var r=l.columns[t];n[r]||(n[r]={}),n[r][e]||(n[r][e]=0),n[r][e]++;var o=e.length;a[r]||(a[r]={}),a[r][o]||(a[r][o]=0),a[r][o]++})});var r=l.data.length;return t.map(function(e,t){var o=l.columns[t],c=Object.keys(n[o]).length/r,u=c<.5,s=Object.keys(a[o]).length,m="";if(u)m=e;else if(c>.99&&s<=2){var d=e.length;m=i({length:d})}return m})}};return r.a.createElement(j.Provider,{value:u},t)}var O=Object(c.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(function(e){e.classes;var t=Object(a.useContext)(j).setFile;return r.a.createElement(d.FilePicker,{extensions:["tsv"],onChange:function(){var e=Object(m.a)(s.a.mark(function e(n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n);case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onError:function(e){alert(e)}},r.a.createElement(f.c,null))}),I=Object(c.withStyles)({root:{flexGrow:1},menuButton:{marginLeft:-18,marginRight:10}})(function(e){var t=e.classes,n=Object(a.useContext)(j).file;return r.a.createElement("div",{className:t.root},r.a.createElement(i.AppBar,{position:"static"},r.a.createElement(i.Toolbar,{variant:"dense"},r.a.createElement(i.IconButton,{className:t.menuButton,color:"inherit","aria-label":"Open"},r.a.createElement(O,null)),r.a.createElement(i.Typography,{variant:"h6",color:"inherit"},n.title))))}),k=n(228),T=n.n(k),D=n(229),B=n.n(D),R=new(n(230).a);R.addRule("linebreaks",{filter:["br"],replacement:function(){return"<br>"}});var S=function(e){var t=e.replace(/<br>/gi,"\n");return B()(t,{sanitize:!0})},M=Object(c.withStyles)(function(e){return{}})(function(e){e.classes;var t=e.value,n=(e.tableMeta,e.tableMeta),o=n.columnIndex,l=n.rowIndex,c=Object(a.useContext)(j).editCell;return r.a.createElement("div",{dir:"auto",contentEditable:!0,onBlur:function(e){var t=function(e){return R.turndown(e).replace(/\n/g,"<br>")}(e.target.innerHTML);c({rowIndex:l,columnIndex:o,value:t})},dangerouslySetInnerHTML:{__html:S(t)}})});var A=function(e){var t=e.row,n=e.rowIndex,o=e.menuClose,l=e.clickableComponent,c=Object(a.useContext)(j),u=c.file,s=c.addRow,m=c.generateNewRow,d=r.a.useState(!1),f=Object(h.a)(d,2),p=f[0],v=f[1],w=r.a.useState(),E=Object(h.a)(w,2),b=E[0],g=E[1];function x(){o(),v(!1)}return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){v(!0)}},l),r.a.createElement(i.Dialog,{open:p,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(i.DialogTitle,{id:"alert-dialog-title"},"Add row below previous?"),r.a.createElement(i.DialogContent,null,r.a.createElement(i.DialogContentText,{id:"alert-dialog-description"},"Columns with 50%+ unique values will not be duplicated."),r.a.createElement(i.Divider,null),r.a.createElement("br",null),u.columns.map(function(e,n){var a="";if(!b){var o=m({row:t});return g(o),a}return a=r.a.createElement(i.DialogContentText,{key:e+n},r.a.createElement("strong",null,e,":")," "+b[n])})),r.a.createElement(i.DialogActions,null,r.a.createElement(i.Button,{onClick:x,color:"primary",autoFocus:!0},"Cancel"),r.a.createElement(i.Button,{onClick:function(){s({rowIndex:n,newRow:b}),x()},color:"secondary"},"Add"))))};var P=function(e){var t=e.row,n=e.rowIndex,o=e.menuClose,l=e.clickableComponent,c=r.a.useState(!1),u=Object(h.a)(c,2),s=u[0],m=u[1],d=Object(a.useContext)(j),f=d.file,p=d.deleteRow;function v(){o(),m(!1)}return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){m(!0)}},l),r.a.createElement(i.Dialog,{open:s,onClose:v,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(i.DialogTitle,{id:"alert-dialog-title"},"Delete this row?"),r.a.createElement(i.DialogContent,null,r.a.createElement(i.DialogContentText,{id:"alert-dialog-description"},"There is no undo feature, this is permanent."),r.a.createElement(i.Divider,null),r.a.createElement("br",null),f.columns.map(function(e,n){return r.a.createElement(i.DialogContentText,{key:e+n},r.a.createElement("strong",null,e,":"),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:S(t[n])}}))})),r.a.createElement(i.DialogActions,null,r.a.createElement(i.Button,{onClick:v,color:"primary",autoFocus:!0},"Cancel"),r.a.createElement(i.Button,{onClick:function(){p({rowIndex:n}),v()},color:"secondary"},"Delete"))))};var F=function(e){var t=e.rowIndex,n=e.row,a=r.a.useState(null),o=Object(h.a)(a,2),l=o[0],c=o[1],u=Boolean(l);function s(){c(null)}return r.a.createElement("div",null,r.a.createElement(i.IconButton,{style:{padding:0},"aria-label":"Actions","aria-owns":u?"row-menu":void 0,"aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},r.a.createElement(f.d,null)),r.a.createElement(i.Menu,{id:"row-menu",anchorEl:l,open:u,onClose:s},r.a.createElement(A,{row:n,rowIndex:t,menuClose:s,clickableComponent:r.a.createElement(i.MenuItem,null,r.a.createElement(i.ListItemIcon,null,r.a.createElement(f.a,null)),r.a.createElement(i.Typography,null,"Add Row"))}),r.a.createElement(P,{row:n,rowIndex:t,menuClose:s,clickableComponent:r.a.createElement(i.MenuItem,null,r.a.createElement(i.ListItemIcon,null,r.a.createElement(f.e,null)),r.a.createElement(i.Typography,null,"Delete Row"))})))},N=function(){return Object(c.createMuiTheme)({typography:{useNextVariants:!0},overrides:{MuiTableCell:{root:{padding:"0 8px 0 8px",textAlign:"unset",maxWidth:"30em"}},MuiTableRow:{root:{height:"unset"}},MUIDataTable:{responsiveScroll:{maxHeight:"unset"}}}})},L=Object(c.withStyles)(function(e){return{root:{padding:"1em"}}})(function(e){var t,n,a=e.classes,o=(e.file,e.file),l=o.title,i=o.columns,u=o.data,s=e.options;i&&u&&((t=i.map(function(e){return{name:e,options:{customBodyRender:function(e,t,n){return r.a.createElement(M,{value:e,tableMeta:t})}}}})).unshift({name:"Actions",options:{sort:!1,filter:!1}}),n=u.map(function(e,t){return[r.a.createElement(F,{rowIndex:t,row:e})].concat(Object(g.a)(e))}));return r.a.createElement("div",{className:a.root},r.a.createElement(c.MuiThemeProvider,{theme:N()},r.a.createElement(T.a,{title:l,data:n,columns:t,options:s})))});var H=Object(c.withStyles)({iconButton:{}},{name:"CustomToolbar"})(function(e){var t=e.classes,n=Object(a.useContext)(j).downloadFile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Tooltip,{title:"Download TSV"},r.a.createElement(i.IconButton,{className:t.iconButton,onClick:n},r.a.createElement(f.b,null))))}),_=function(){var e=Object(a.useState)(25),t=Object(h.a)(e,2),n=t[0],o=t[1],l=Object(a.useContext)(j).file,c={responsive:"scroll",print:!1,selectableRows:!1,rowsPerPage:n,rowsPerPageOptions:[25,50,100],onChangeRowsPerPage:function(e){o(e)},download:!1,customToolbar:function(){return r.a.createElement(H,null)}};return r.a.createElement(L,{file:l,options:c})},W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement(I,null),r.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5437,1,2]]]);
//# sourceMappingURL=main.4f3a9c5b.chunk.js.map