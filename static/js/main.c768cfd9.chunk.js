(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5437:function(e,t,n){e.exports=n(5670)},5442:function(e,t,n){},5443:function(e,t,n){},5669:function(e,t){},5670:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(18),o=n.n(l),i=(n(5442),n(5443),n(17)),c=n(14),u=n(36),s=n.n(u),m=n(78),d=n(225),f=n(34),v=function(){var e=Object(m.a)(s.a.mark(function e(t){var n,a,r,l,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,E(t);case 3:l=e.sent,o=p(l),a=o.columns,r=o.data,n=t.name;case 8:return e.abrupt("return",{title:n,columns:a,data:r});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t={};if(e){var n=e.split("\n").map(function(e){return e.split("\t")}).filter(function(e){return e&&e.length>1});t={columns:n.shift(),data:n}}return t},w=function(e){var t="";return e&&(t=e.map(function(e){return e.join("\t")}).join("\n")),t},E=function(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(e){var n=e.target.result;t(n)},a.readAsText(e)})},g=Object(i.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(function(e){e.classes;var t=e.setFile;return r.a.createElement(d.FilePicker,{extensions:["tsv"],onChange:function(){var e=Object(m.a)(s.a.mark(function e(n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onError:function(e){alert(e)}},r.a.createElement(f.c,null))}),b=n(79),h=n(55),x=n(26),C=n(227),y=n.n(C),I=r.a.createContext();function j(e){var t=e.children,n=Object(a.useState)({}),l=Object(x.a)(n,2),o=l[0],i=l[1];var c=function(e){var t=e.length;return t>9&&(t=9),Math.random().toString(36).substr(2,t)},u={file:o,setFile:i,addRow:function(e){var t=e.rowIndex,n=e.newRow,a=o.data.slice(0),r=Object(h.a)(a);r.splice(t+1,0,n);var l=Object(b.a)({},o,{data:r});i(l)},deleteRow:function(e){var t=e.rowIndex,n=o.data.slice(0);n.splice(t,1);var a=Object(b.a)({},o,{data:n});i(a)},editCell:function(e){var t=e.rowIndex,n=e.columnIndex,a=e.value,r=o.data.slice(0);r[t][n-1]=a;var l=Object(b.a)({},o,{data:r});i(l)},downloadFile:function(){if(o.columns&&o.data){var e=Object(h.a)(o.data);e.unshift(o.columns);var t=w(e);y()(t,o.title)}},generateNewRow:function(e){var t=e.row,n={},a={};o.data.forEach(function(e){e.forEach(function(e,t){var r=o.columns[t];n[r]||(n[r]={}),n[r][e]||(n[r][e]=0),n[r][e]++;var l=e.length;a[r]||(a[r]={}),a[r][l]||(a[r][l]=0),a[r][l]++})});var r=o.data.length;return t.map(function(e,t){var l=o.columns[t],i=Object.keys(n[l]).length/r,u=i<.5,s=Object.keys(a[l]).length,m="";if(u)m=e;else if(i>.99&&s<=2){var d=e.length;m=c({length:d})}return m})}};return r.a.createElement(I.Provider,{value:u},t)}var O=I.Consumer,k=Object(i.withStyles)({root:{flexGrow:1},menuButton:{marginLeft:-18,marginRight:10}})(function(e){var t=e.classes;return r.a.createElement(O,null,function(e){var n=e.file,a=e.setFile;return r.a.createElement("div",{className:t.root},r.a.createElement(c.AppBar,{position:"static"},r.a.createElement(c.Toolbar,{variant:"dense"},r.a.createElement(c.IconButton,{className:t.menuButton,color:"inherit","aria-label":"Open"},r.a.createElement(g,{setFile:a})),r.a.createElement(c.Typography,{variant:"h6",color:"inherit"},n.title))))})}),T=n(228),D=n.n(T),B=n(229),R=n.n(B),S=new(n(230).a);S.addRule("linebreaks",{filter:["br"],replacement:function(){return"<br>"}});var M=function(e){return R()(e,{sanitize:!0})},A=Object(i.withStyles)(function(e){return{}})(function(e){e.classes;var t=e.value,n=(e.tableMeta,e.tableMeta),a=n.columnIndex,l=n.rowIndex,o=t.replace(/<br>/gi,"\n");return r.a.createElement(O,null,function(e){var t=e.editCell;return r.a.createElement("div",{dir:"auto",contentEditable:!0,onBlur:function(e){var n=function(e){return S.turndown(e).replace(/\n/g,"<br>")}(e.target.innerHTML);t({rowIndex:l,columnIndex:a,value:n})},dangerouslySetInnerHTML:{__html:M(o)}})})});var F=function(e){var t=e.row,n=e.rowIndex,a=e.menuClose,l=e.clickableComponent,o=r.a.useState(!1),i=Object(x.a)(o,2),u=i[0],s=i[1],m=r.a.useState(),d=Object(x.a)(m,2),f=d[0],v=d[1];function p(){s(!0)}function w(){a(),s(!1)}return r.a.createElement(O,null,function(e){var a=e.file,o=e.addRow,i=e.generateNewRow;return r.a.createElement("div",null,r.a.createElement("div",{onClick:p},l),r.a.createElement(c.Dialog,{open:u,onClose:w,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(c.DialogTitle,{id:"alert-dialog-title"},"Add row below previous?"),r.a.createElement(c.DialogContent,null,r.a.createElement(c.DialogContentText,{id:"alert-dialog-description"},"Columns with 50%+ unique values will not be duplicated."),r.a.createElement(c.Divider,null),r.a.createElement("br",null),a.columns.map(function(e,n){var a="";if(!f){var l=i({row:t});return v(l),a}return a=r.a.createElement(c.DialogContentText,{key:e+n},r.a.createElement("strong",null,e,":")," "+f[n])})),r.a.createElement(c.DialogActions,null,r.a.createElement(c.Button,{onClick:w,color:"primary",autoFocus:!0},"Cancel"),r.a.createElement(c.Button,{onClick:function(){o({rowIndex:n,newRow:f}),w()},color:"secondary"},"Add"))))})};var P=function(e){var t=e.row,n=e.rowIndex,a=e.menuClose,l=e.clickableComponent,o=r.a.useState(!1),i=Object(x.a)(o,2),u=i[0],s=i[1];function m(){s(!0)}function d(){a(),s(!1)}return r.a.createElement(O,null,function(e){var a=e.file,o=e.deleteRow;return r.a.createElement("div",null,r.a.createElement("div",{onClick:m},l),r.a.createElement(c.Dialog,{open:u,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(c.DialogTitle,{id:"alert-dialog-title"},"Delete this row?"),r.a.createElement(c.DialogContent,null,r.a.createElement(c.DialogContentText,{id:"alert-dialog-description"},"Deleting this row is permanent. You will have to access the file that was imported to recover this data."),a.columns.map(function(e,n){return r.a.createElement(c.DialogContentText,{key:e+n},r.a.createElement("strong",null,e,":")," "+t[n])})),r.a.createElement(c.DialogActions,null,r.a.createElement(c.Button,{onClick:d,color:"primary",autoFocus:!0},"Cancel"),r.a.createElement(c.Button,{onClick:function(){o({rowIndex:n}),d()},color:"secondary"},"Delete"))))})};var N=function(e){var t=e.rowIndex,n=e.row,a=r.a.useState(null),l=Object(x.a)(a,2),o=l[0],i=l[1],u=Boolean(o);function s(){i(null)}return r.a.createElement("div",null,r.a.createElement(c.IconButton,{style:{padding:0},"aria-label":"Actions","aria-owns":u?"row-menu":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},r.a.createElement(f.d,null)),r.a.createElement(c.Menu,{id:"row-menu",anchorEl:o,open:u,onClose:s},r.a.createElement(F,{row:n,rowIndex:t,menuClose:s,clickableComponent:r.a.createElement(c.MenuItem,null,r.a.createElement(c.ListItemIcon,null,r.a.createElement(f.a,null)),r.a.createElement(c.Typography,null,"Add Row"))}),r.a.createElement(P,{row:n,rowIndex:t,menuClose:s,clickableComponent:r.a.createElement(c.MenuItem,null,r.a.createElement(c.ListItemIcon,null,r.a.createElement(f.e,null)),r.a.createElement(c.Typography,null,"Delete Row"))})))},L=function(){return Object(i.createMuiTheme)({typography:{useNextVariants:!0},overrides:{MuiTableCell:{root:{padding:"0 8px 0 8px",textAlign:"unset",maxWidth:"30em"}},MuiTableRow:{root:{height:"unset"}},MUIDataTable:{responsiveScroll:{maxHeight:"unset"}}}})},H=Object(i.withStyles)(function(e){return{root:{padding:"1em"}}})(function(e){var t,n,a=e.classes,l=(e.file,e.file),o=l.title,c=l.columns,u=l.data,s=e.options;c&&u&&((t=c.map(function(e){return{name:e,options:{customBodyRender:function(e,t,n){return r.a.createElement(A,{value:e,tableMeta:t})}}}})).unshift({name:"Actions",options:{sort:!1,filter:!1}}),n=u.map(function(e,t){return[r.a.createElement(N,{rowIndex:t,row:e})].concat(Object(h.a)(e))}));return r.a.createElement("div",{className:a.root},r.a.createElement(i.MuiThemeProvider,{theme:L()},r.a.createElement(D.a,{title:o,data:n,columns:t,options:s})))});var W=Object(i.withStyles)({iconButton:{}},{name:"CustomToolbar"})(function(e){var t=e.classes;return r.a.createElement(O,null,function(e){var n=e.downloadFile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Tooltip,{title:"Download TSV"},r.a.createElement(c.IconButton,{className:t.iconButton,onClick:n},r.a.createElement(f.b,null))))})}),J=function(){var e=Object(a.useState)(25),t=Object(x.a)(e,2),n=t[0],l=t[1],o={responsive:"scroll",print:!1,selectableRows:!1,rowsPerPage:n,rowsPerPageOptions:[25,50,100],onChangeRowsPerPage:function(e){l(e)},download:!1,customToolbar:function(){return r.a.createElement(W,null)}};return r.a.createElement(O,null,function(e){var t=e.file;return r.a.createElement(H,{file:t,options:o})})},V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null,r.a.createElement(k,null),r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5437,1,2]]]);
//# sourceMappingURL=main.c768cfd9.chunk.js.map