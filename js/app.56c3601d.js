(function(e){function t(t){for(var o,i,a=t[0],l=t[1],u=t[2],c=0,d=[];c<a.length;c++)i=a[c],r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d80":function(e,t,n){},1:function(e,t){},5318:function(e,t,n){"use strict";var o=n("0d80"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("9f7b"),s=n.n(r),i=n("28dd"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Blutgruppenauskunft")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.liststate,expression:"liststate"}]},[n("button",{on:{click:e.erstellePerson}},[e._v("Neue Person")]),n("ListePersonen",{attrs:{personen:e.personen}}),n("hr")],1),n("EditPerson",{directives:[{name:"show",rawName:"v-show",value:e.editstate,expression:"editstate"}],attrs:{person:e.aktuellePerson},on:{neuePersonErstellt:e.addPerson,personEditiert:e.editiertPerson}})],1)},l=[],u=(n("7514"),n("20d6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listepersonen"},[n("table",{staticClass:"table table-striped"},[e._m(0),n("tbody",e._l(e.personen,function(e){return n("ListPerson",{key:e.id,attrs:{person:e}})}),1)])])}),p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v(" ID ")]),n("th",[e._v(" Nachname ")]),n("th",[e._v(" Vorname ")]),n("th",[e._v(" Geburtstag ")]),n("th",[e._v(" Blutgruppe ")]),n("th",[e._v(" Editieren ")]),n("th",[e._v(" Löschen ")])])}],c=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v(e._s(e.person.id)+" ")]),n("td",[e._v(e._s(e.person.nachname)+" ")]),n("td",[e._v(e._s(e.person.vorname))]),n("td",[e._v(e._s(e.person.geburtstag))]),n("td",[e._v(e._s(e.person.blutgruppe))]),n("td",[n("button",{on:{click:e.editierePerson}},[e._v("Editieren")])]),n("td",[n("button",{on:{click:e.loeschePerson}},[e._v("Löschen")])])])}),d=[],f={name:"ListPerson",props:{person:Object},methods:{editierePerson:function(){console.log("Person editieren"),B.editPerson(this.person.id)},loeschePerson:function(){console.log("Person löschen"),B.deletePerson(this.person.id)}}},h=f,m=n("2877"),b=Object(m["a"])(h,c,d,!1,null,"026e0498",null),g=b.exports,v={name:"ListePersonen",props:{personen:Array,index:Number},components:{ListPerson:g}},_=v,P=Object(m["a"])(_,u,p,!1,null,"6f793daf",null),y=P.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editeingabe"}},[n("p",[e._v(" Id: "+e._s(e.form.id))]),e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-form-group",{attrs:{id:"nachnameInputGroup",label:"Nachname:","label-for":"Nachnamelf"}},[n("b-form-input",{attrs:{id:"nachname",type:"text",required:"",placeholder:"Nachname eingeben"},model:{value:e.form.nachname,callback:function(t){e.$set(e.form,"nachname",t)},expression:"form.nachname"}})],1),n("b-form-group",{attrs:{id:"vornameInputGroup",label:"Vorname:","label-for":"Vornamelf"}},[n("b-form-input",{attrs:{id:"vornameInput",type:"text",required:"",placeholder:"Vorname eingeben"},model:{value:e.form.vorname,callback:function(t){e.$set(e.form,"vorname",t)},expression:"form.vorname"}})],1),n("b-form-group",{attrs:{id:"geburtstagInputGroup",label:"Geburtstag:","label-for":"Geburtstaglf"}},[n("b-form-input",{attrs:{id:"geburtstagInput",type:"text",required:"",placeholder:"Geburtstag eingeben"},model:{value:e.form.geburtstag,callback:function(t){e.$set(e.form,"geburtstag",t)},expression:"form.geburtstag"}})],1),n("b-form-group",{attrs:{id:"blutgruppeInputGroup",label:"Blutgruppe:","label-for":"Blutgruppelf"}},[n("b-form-select",{attrs:{id:"exampleInput3",options:e.blutgruppen,required:""},model:{value:e.form.blutgruppe,callback:function(t){e.$set(e.form,"blutgruppe",t)},expression:"form.blutgruppe"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},x=[],$={props:{person:Object},data:function(){return{form:{id:null,nachname:"",vorname:"",geburtstag:"",blutgruppe:""},blutgruppen:[{text:"Bitte wählen",value:null},"0","A","B","AB"],show:!0,updatestate:!1}},methods:{clearForm:function(){var e=this;this.form.id=null,this.form.nachname="",this.form.vorname="",this.form.geburtstag="",this.form.blutgruppe=null,this.show=!1,this.$nextTick(function(){e.show=!0})},onSubmit:function(e){e.preventDefault(),this.updatestate?this.$emit("personEditiert",this.form):this.$emit("neuePersonErstellt",this.form)},onReset:function(e){e.preventDefault(),this.clearForm()},onInitial:function(e){var t=this;this.form=this.person,this.show=!1,this.$nextTick(function(){t.show=!0})}},watch:{person:function(e,t){console.log("Prop changed: ",e," | was: ",t),""==this.person.id?this.updatestate=!1:this.updatestate=!0,this.onInitial()}}},k=$,E=(n("5318"),Object(m["a"])(k,w,x,!1,null,null,null)),O=E.exports,j={name:"app",components:{ListePersonen:y,EditPerson:O},data:function(){return{urlapi:"http://aboapi.abo.svc.cluster.local/persons/",personleer:{id:null,nachname:"",vorname:"",geburtstag:"",blutgruppe:""},personen:[{id:1,nachname:"",vorname:"",geburtstag:"",blutgruppe:""}],person:this.personleer,editstate:!1,liststate:!0,aktuellePerson:{id:null,nachname:"",vorname:"",geburtstag:"",blutgruppe:""}}},methods:{addPerson:function(e){var t=this;console.log("füge Person hinzu"),console.log(e),this.$http.post(this.urlapi,e).then(function(e){console.log("Antwort Post:"),console.log(e.body),t.person={id:e.body.id,nachname:e.body.nachname,vorname:e.body.vorname,geburtstag:e.body.geburtstag,blutgruppe:e.body.blutgruppe},t.personen.push(t.person)},function(e){console.log("error")}),this.editstate=!1,this.liststate=!0},erstellePerson:function(){console.log("erstelle Neue Person ..."),this.editstate=!0,this.liststate=!1,this.aktuelleperson=this.personleer},ladeDaten:function(){var e=this;console.log("Daten aus DB laden ..."),this.$http.get(this.urlapi).then(function(t){e.personen=t.body.content,console.log(t.body)},function(e){console.log("error")})},sichereDaten:function(){console.log("Daten in DB sichern ...")},editiertPerson:function(e){var t=this;console.log(e.id);var n=this.urlapi+e.id;this.$http.put(n,e).then(function(n){console.log(n.body),t.personen[t.personen.findIndex(function(t){return String(t.id)==String(e.id)})]=e},function(e){console.log("error")}),this.editstate=!1,this.liststate=!0}},created:function(){var e=this;this.ladeDaten(),B.$on("personLoeschen",function(t){console.log("event gefangen: loesche person"),console.log(t);var n=e.urlapi+t;e.$http.delete(n).then(function(n){console.log(n.body);var o=e.personen.find(function(e){return String(e.id)==String(t)});e.personen.splice(e.personen.indexOf(o),1)},function(e){console.log("error")})}),B.$on("personEditieren",function(t){var n,o;for(console.log("event gefangen: editiere person"),console.log(t),n=0;n<e.personen.length;n++)o=e.personen[n],o.id==t&&(e.aktuellePerson=o);console.log(e.aktuellePerson),e.editstate=!0,e.liststate=!1})}},I=j,S=Object(m["a"])(I,a,l,!1,null,null,null),L=S.exports;n("f9e3"),n("2dd8");n.d(t,"eventBus",function(){return B}),o["a"].use(s.a),o["a"].use(i["a"]),o["a"].config.productionTip=!1;var B=new o["a"]({methods:{deletePerson:function(e){console.log("Lösche Person mit Id: "),console.log(e),this.$emit("personLoeschen",e)},editPerson:function(e){console.log("Editiere Person mit Id: "),console.log(e),this.$emit("personEditieren",e)}}});new o["a"]({render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.56c3601d.js.map
