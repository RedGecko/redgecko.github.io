(this["webpackJsonpsitrep-ui-test"]=this["webpackJsonpsitrep-ui-test"]||[]).push([[0],{273:function(e,s,a){"use strict";a.r(s);var c=a(3),i=a.n(c),t=a(71),l=a.n(t),n=a(13),r=a(11),d=(a(81),a(35)),j=a(24),b=a(23),h=a(30),m=a.n(h),o=a.p+"static/media/logo.55ebcc53.svg",x=i.a.createContext("6796c0d0-ddfa-4d81-870b-121200723e0c"),O=i.a.createContext("f4cce005-6c24-4923-8549-f1fba6bd806a"),N=a(0),v=function(){var e=Object(c.useContext)(x),s=Object(c.useContext)(O);return Object(N.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/{incident}",activeClassName:"is-active",children:"Test-Ereignis"}),Object(N.jsxs)("div",{className:"navbar-dropdown",children:[Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/"+e+"/dashboard",activeClassName:"is-active",children:"Dashboard"}),Object(N.jsx)(n.c,{className:"navbar-item",exact:!0,to:"/incident/"+e+"/journal/"+s,activeClassName:"is-active",children:"Journal"}),Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/"+e+"/journal/"+s+"/edit",activeClassName:"is-active",children:"Journal bearbeiten"}),Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/"+e+"/resources",activeClassName:"is-active",children:"Mittel"}),Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/"+e+"/tasks",activeClassName:"is-active",children:"Pendenzen / Antr\xe4ge / Bed\xfcrfnisse"}),Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/"+e+"/hotline",activeClassName:"is-active",children:"Hotline"})]})]})},u=function(e){var s=e.isActive,a=void 0!==s&&s,i=Object(c.useState)(a),t=Object(d.a)(i,2),l=t[0],r=t[1],h=m()({"navbar-menu":!0,"is-active":l});return Object(N.jsxs)("nav",{className:"navbar is-fixed-top",children:[Object(N.jsxs)("div",{className:"navbar-brand",children:[Object(N.jsx)(n.c,{to:"/",className:"navbar-item",children:Object(N.jsx)("figure",{className:"image is-16x16",children:Object(N.jsx)("img",{src:o,alt:"Logo",className:"is-rounded"})})}),Object(N.jsxs)("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasic",onClick:function(e){e.preventDefault(),r(!l)},children:[Object(N.jsx)("span",{"aria-hidden":"true"}),Object(N.jsx)("span",{"aria-hidden":"true"}),Object(N.jsx)("span",{"aria-hidden":"true"})]})]}),Object(N.jsxs)("div",{className:h,children:[Object(N.jsxs)("div",{className:"navbar-start",children:[Object(N.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/list",activeClassName:"is-active",children:"Ereignis"}),Object(N.jsxs)("div",{className:"navbar-dropdown",children:[Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/list",activeClassName:"is-active",children:"\xdcbersicht"}),Object(N.jsx)(n.c,{className:"navbar-item",to:"/incident/new",activeClassName:"is-active",children:"Neues Ereignis erstellen"})]})]}),Object(N.jsx)(v,{})]}),Object(N.jsx)("div",{className:"navbar-end",children:Object(N.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable is-left",children:[Object(N.jsx)("a",{className:"navbar-link",children:Object(N.jsx)(b.a,{icon:j.b})}),Object(N.jsx)("div",{className:"navbar-dropdown",children:Object(N.jsx)("a",{className:"navbar-item",href:"https://bulma.io/documentation/overview/start/",children:"Profil"})})]})})]})]})};var p=function(){return Object(N.jsx)("footer",{className:"footer has-background-white-bis",children:Object(N.jsx)("div",{className:"content has-text-centered",children:Object(N.jsxs)("p",{children:["Made with ",Object(N.jsx)(b.a,{icon:j.c,color:"red"})," in Switzerland by ",Object(N.jsx)("strong",{children:"ZSO Uri"})]})})})};var f,g=a(31),w=a.n(g),z=a(73),y=a.n(z),C=a(74),I=a.n(C);!function(e){e.New="neu",e.Triaged="triagiert",e.Important="wichtig"}(f||(f={})),w.a.locale(y.a),w.a.extend(I.a);var S,k=function(e){var s=e.sender,a=e.receiver,c=e.message,i=e.timeDate,t=e.status,l=e.assignments,n=m()({message:!0,"mb-2":!0,"is-info":t===f.Important,"is-warning":t===f.New,"is-danger":t===f.Important,"is-dark":t===f.Triaged}),r=m()({column:!0,"is-1":!0,"is-hidden":!l||0==l.length});return Object(N.jsx)("div",{className:n,children:Object(N.jsx)("div",{className:"message-body",children:Object(N.jsxs)("div",{className:"columns",children:[Object(N.jsx)("div",{className:"column is-2",children:Object(N.jsxs)("nav",{className:"level is-block",children:[Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("p",{className:"heading is-size-7",children:"Sender"}),Object(N.jsx)("p",{className:"subtitle is-size-7",children:s})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("p",{className:"heading is-size-7",children:"Emf\xe4nger"}),Object(N.jsx)("p",{className:"subtitle is-size-7",children:a})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("p",{className:"heading is-size-7",children:"Zeit"}),Object(N.jsx)("p",{className:"subtitle is-size-7",children:w()(i).fromNow()})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"",children:[Object(N.jsx)("p",{className:"heading is-size-7",children:"Status"}),Object(N.jsx)("p",{className:"subtitle is-size-7",children:t.toString()})]})})]})}),Object(N.jsx)("div",{className:"column",children:Object(N.jsx)("div",{className:"content has-text-weight-light has-text-dark has-text-left",children:c})}),Object(N.jsx)("div",{className:r,children:Object(N.jsx)("div",{className:"field is-grouped is-grouped-multiline",children:Object(N.jsx)("div",{className:"tags",children:l&&l.map((function(e){return Object(N.jsx)("span",{className:"tag is-grey is-light is-small",children:e})}))})})})]})})})},E=a(5),F=a.n(E),P=a(36),T=a.n(P),D=["Pol","Lage","San","FW","Tech"];function L(){var e=Object(c.useContext)(x),s=Object(c.useContext)(O),a=Object(c.useState)(S.Radio),i=Object(d.a)(a,2),t=i[0],l=i[1];return Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)(n.b,{className:"delete is-pulled-right is-small mb-2",to:"/incident/"+e+"/journal/"+s}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Medium"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field is-narrow",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("div",{className:"select is-fullwidth",children:Object(N.jsx)("select",{value:t,onChange:function(e){e.preventDefault();var s=e.currentTarget.value;s!==S.Radio&&s!==S.Email&&s!==S.Phone||l(s)},children:Object.values(S).map((function(e){return Object(N.jsx)("option",{children:e},e)}))})})})})})]}),t==S.Radio?Object(N.jsx)(B,{}):t==S.Phone?Object(N.jsx)(M,{}):t==S.Email?Object(N.jsx)(Z,{}):void 0]})}function M(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("p",{children:"Phone Form"})})}function Z(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("p",{children:"Email Input"})})}function B(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Empf\xe4nger"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"text",placeholder:"Name"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.e})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Sender"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"text",placeholder:"Name"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.e})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Zeit"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"text",placeholder:"Zeit"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.a})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Nachricht"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("textarea",{className:"textarea",placeholder:"Was wurde \xfcbermittelt?",rows:10})})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Priorit\xe4t"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field is-narrow",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("div",{className:"select is-fullwidth",children:Object(N.jsxs)("select",{children:[Object(N.jsx)("option",{children:"normal"}),Object(N.jsx)("option",{children:"wichtig"}),Object(N.jsx)("option",{children:"kritisch"})]})})})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Fachbereiche"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field is-narrow",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("div",{className:"select is-multiple",children:Object(N.jsx)("select",{multiple:!0,size:3,children:D.map((function(e){return Object(N.jsx)("option",{children:e})}))})})})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label"}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{className:"button is-primary",children:"Send message"})})})})]})]})}!function(e){e.Radio="Funk",e.Phone="Telefon",e.Email="E-Mail"}(S||(S={}));var J=function(){var e=f.New,s=new Date;return w()(s).subtract(4,"minutes"),m()({message:!0,"is-warning":e==f.New}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"columns",children:[Object(N.jsxs)("div",{className:"column is-half",children:[Object(N.jsx)("h3",{className:"title is-3",children:"Editor"}),Object(N.jsx)(L,{})]}),Object(N.jsxs)("div",{className:"column",children:[Object(N.jsx)("h3",{className:"title is-3",children:"Journal"}),T.a.times(F.a.random.number(20),(function(){return Object(N.jsx)(k,{assignments:D.slice(0,F.a.random.number(D.length)),status:T.a.sample(Object.values(f)),sender:F.a.name.findName(),receiver:F.a.name.findName(),message:F.a.lorem.paragraphs(2),timeDate:F.a.date.recent(1)})}))]})]})})};var _=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h3",{className:"title is-size-3",children:"Hotline"}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Name Anrufer"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"text",placeholder:"Name"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.e})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Telefonnummer"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"tel",placeholder:"Telefonnummer"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.d})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Zeit"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsxs)("p",{className:"control is-expanded has-icons-left",children:[Object(N.jsx)("input",{className:"input",type:"text",placeholder:"Zeit"}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)(b.a,{icon:j.a})})]})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label is-normal",children:Object(N.jsx)("label",{className:"label",children:"Nachricht"})}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("textarea",{className:"textarea",placeholder:"Was wurde \xfcbermittelt?",rows:10})})})})]}),Object(N.jsxs)("div",{className:"field is-horizontal",children:[Object(N.jsx)("div",{className:"field-label"}),Object(N.jsx)("div",{className:"field-body",children:Object(N.jsx)("div",{className:"field",children:Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{className:"button is-primary",children:"Send message"})})})})]})]})},A=["Pol","Lage","San","FW","Tech"];var R=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"title is-3",children:"Journal"}),T.a.times(F.a.random.number(20),(function(){return Object(N.jsx)(k,{assignments:A.slice(0,F.a.random.number(A.length)),status:T.a.sample(Object.values(f)),sender:F.a.name.findName(),receiver:F.a.name.findName(),message:F.a.lorem.paragraphs(2),timeDate:F.a.date.recent(1)},F.a.random.uuid())}))]})};var H=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"title is-size-3",children:"Ereignis"}),Object(N.jsx)("a",{className:"button is-primary",href:"https://s.geo.admin.ch/8eed1e8870",target:"_blank",children:"Lage Karte bearbeiten"})]})},K=function(){return F.a.lorem.paragraphs(1)};function W(){var e=Object(c.useState)(0),s=Object(d.a)(e,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){var e=setInterval((function(){i((function(e){return e+60}))}),6e4);return function(){return clearInterval(e)}}),[]),Object(N.jsx)("iframe",{height:"400vh",src:"https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2Fx20-T-HaRN2B1HBQK8UKBg&layers_opacity=1,1,1,0.8,1&layers_visibility=false,false,false,false,true&layers_timestamp=18641231,,,,&E=2605883.78&N=1216144.64&zoom=10"},a)}var U=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"container is-fluid has-text-centered mb-4",children:Object(N.jsx)("h1",{className:"title is-1 ",children:"Test Ereignis"})}),Object(N.jsxs)("div",{className:"tile is-ancestor",children:[Object(N.jsxs)("div",{className:"tile is-3 is-vertical is-parent",children:[Object(N.jsxs)("div",{className:"tile is-child box has-background-danger has-text-white-bis has-text-centered",children:[Object(N.jsx)("h2",{className:"title has-text-white-bis",children:"Personen"}),Object(N.jsxs)("nav",{className:"level is-block",children:[Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Tote"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Verletzte"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Eingeschlossene"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Obdachlose"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})})]})]}),Object(N.jsxs)("div",{className:"tile is-child box has-background-info has-text-white-bis has-text-centered",children:[Object(N.jsx)("h2",{className:"title has-text-white-bis",children:"Mittel"}),Object(N.jsxs)("nav",{className:"level is-block",children:[Object(N.jsx)("div",{className:"level-item has-text-centered has-text-white-bis",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Feuerwehr"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered has-text-white-bis",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Polizei"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Technische Dienste"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})}),Object(N.jsx)("div",{className:"level-item has-text-centered",children:Object(N.jsxs)("div",{className:"",children:[Object(N.jsx)("p",{className:"heading is-size-6",children:"Zivilschutz"}),Object(N.jsx)("p",{className:"subtitle is-size-3 has-text-white-bis",children:F.a.random.number(30)})]})})]})]})]}),Object(N.jsxs)("div",{className:"tile is-vertical is-parent",children:[Object(N.jsx)("div",{className:"tile is-child hero",children:Object(N.jsx)(W,{})}),Object(N.jsx)("div",{className:"tile is-child box",children:Object(N.jsxs)("div",{className:"container is-fluid",children:[Object(N.jsx)("h2",{className:"title is-4",children:"Schl\xfcsselnachrichten"}),Object(N.jsx)(k,{assignments:["Lage","Pol"],status:f.Important,sender:F.a.name.findName(),receiver:F.a.name.findName(),message:K(),timeDate:F.a.date.recent(1)}),Object(N.jsx)(k,{assignments:["ZS","San"],status:f.Important,sender:F.a.name.findName(),receiver:F.a.name.findName(),message:K(),timeDate:F.a.date.recent(1)}),Object(N.jsx)(k,{assignments:["Pol","ZS","San"],status:f.Important,sender:F.a.name.findName(),receiver:F.a.name.findName(),message:K(),timeDate:F.a.date.recent(1)})]})})]})]})]})};var Q=function(){return Object(N.jsx)("h3",{className:"title is-size-3",children:"Mittel"})};var V=function(){return Object(N.jsx)("h3",{className:"title is-size-3",children:"Pendenzen"})};var q=function(){var e=Object(r.g)();return Object(N.jsxs)(r.d,{children:[Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/dashboard"),component:U}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/journal/:journalId/edit"),component:J}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/journal/:journalId"),component:R}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/resources"),component:Q}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/tasks"),component:V}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/:incidentId/hotline"),component:_}),Object(N.jsx)(r.b,{path:"".concat(e.path,"/list"),component:H}),Object(N.jsx)(r.b,{path:e.path,component:H})]})},G=a(39),X=new G.ApolloClient({uri:"/api/graph",cache:new G.InMemoryCache});var Y=function(){return Object(N.jsx)(G.ApolloProvider,{client:X,children:Object(N.jsxs)(n.a,{children:[Object(N.jsx)(u,{}),Object(N.jsx)("section",{className:"section",children:Object(N.jsxs)(r.d,{children:[Object(N.jsx)(r.b,{path:"/incident",children:Object(N.jsx)(q,{})}),Object(N.jsx)(r.b,{path:"/",children:Object(N.jsx)(r.a,{to:"/incident/6796c0d0-ddfa-4d81-870b-121200723e0c/dashboard"})})]})}),Object(N.jsx)(p,{})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,274)).then((function(s){var a=s.getCLS,c=s.getFID,i=s.getFCP,t=s.getLCP,l=s.getTTFB;a(e),c(e),i(e),t(e),l(e)}))};l.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(Y,{})}),document.getElementById("root")),$()},81:function(e,s,a){}},[[273,1,2]]]);
//# sourceMappingURL=main.af477a38.chunk.js.map