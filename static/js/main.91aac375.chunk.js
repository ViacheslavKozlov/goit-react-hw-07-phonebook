(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={listWrapper:"PhonebookList_listWrapper__37B2H",listItem:"PhonebookList_listItem__25aoD",listItemdData:"PhonebookList_listItemdData__1J2fK",listItemBtn:"PhonebookList_listItemBtn__1KPyJ"}},16:function(t,e,n){t.exports={phonebookListHeadline:"PhonebookListHeadline_phonebookListHeadline__1tNls"}},17:function(t,e,n){t.exports={searchLabel:"PhonebookSearch_searchLabel__1hBcI",formWarpper:"PhonebookSearch_formWarpper__2PpnA",inputField:"PhonebookSearch_inputField__2uFOK"}},30:function(t,e,n){t.exports={phonebookHeadline:"PhonebookHeadline_phonebookHeadline__39_Sj"}},6:function(t,e,n){t.exports={formWarpper:"PhonebookForm_formWarpper__oRuB6",formInputWarpper:"PhonebookForm_formInputWarpper__2nj9T",lableName:"PhonebookForm_lableName__1O-rh",inputField:"PhonebookForm_inputField__1eQgy",formBtn:"PhonebookForm_formBtn__3YbuP"}},61:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(13),s=n.n(r),i=n(4),l=n(2),b=n(7),u=n(31),j=n(5),d=Object(l.b)("contacts/getContactsRequest"),m=Object(l.b)("contacts/getContactsSuccess"),p=Object(l.b)("contacts/getContactsError"),h=Object(l.b)("contacts/addContactRequest"),f=Object(l.b)("contacts/addContactSuccess"),O=Object(l.b)("contacts/addContactError"),_=Object(l.b)("contacts/delContactRequest"),x=Object(l.b)("contacts/delContactSuccess"),v=Object(l.b)("contacts/delContactError"),k=Object(l.b)("contacts/filter"),N=Object(l.c)([],(a={},Object(b.a)(a,m,(function(t,e){return e.payload})),Object(b.a)(a,f,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(b.a)(a,O,(function(t,e){var n=e.payload;alert(n)})),Object(b.a)(a,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),C=Object(l.c)("",Object(b.a)({},k,(function(t,e){return e.payload})));var g=Object(j.b)({contacts:N,filter:C}),F={store:Object(l.a)({reducer:{contacts:g},devTools:!1})},P=n(9),y=n.n(P);y.a.defaults.baseURL="http://localhost:3030";var I=n(14),L=function(t){return t.contacts.contacts},W=Object(I.a)([L,function(t){return t.contacts.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),A=n(20),B=n(6),S=n.n(B),H=n(1);function z(){var t=Object(c.useState)(""),e=Object(A.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(A.a)(o,2),s=r[0],l=r[1],b=Object(i.b)(),u=function(t){return b(function(t){var e=t.name,n=t.number;return function(t,a){var c={name:e,number:n};console.log(F);var o=a().contacts.contacts;if(null===o||void 0===o?void 0:o.some((function(t){return t.name===e})))return t(O("".concat(e," is exist")));t(h()),y.a.post("/contacts",c).then((function(e){var n=e.data;return t(f(n))})).catch((function(e){return t(O(e))}))}}(t))},j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}};return Object(H.jsxs)("form",{className:S.a.formWarpper,onSubmit:function(t){t.preventDefault(),u({name:n,number:s}),a(""),l("")},children:[Object(H.jsx)("div",{className:S.a.formInputWarpper,children:Object(H.jsxs)("label",{className:S.a.lableName,htmlFor:"name",children:["Name",Object(H.jsx)("input",{className:S.a.inputField,type:"text",name:"name",value:n,autoComplete:"off",onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(H.jsx)("div",{className:S.a.formInputWarpper,children:Object(H.jsxs)("label",{className:S.a.lableName,htmlFor:"number",children:["Number",Object(H.jsx)("input",{className:S.a.inputField,type:"tel",name:"number",value:s,autoComplete:"off",onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(H.jsx)("button",{className:S.a.formBtn,type:"submit",children:"Add contact to phonebook"})]})}var w=n(30),q=n.n(w),J=function(t){var e=t.title;return Object(H.jsx)("h3",{className:q.a.phonebookHeadline,children:e})},Z=n(10),D=n.n(Z);function E(){var t=Object(i.b)(),e=Object(i.c)(W),n=function(e){return t((n=e.id,function(t){t(_()),y.a.delete("/contacts/".concat(n)).then((function(){return t(x(n))})).catch((function(e){return t(v(e))}))}));var n};return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("ul",{className:D.a.listWrapper,children:e.map((function(t){return Object(H.jsxs)("li",{className:D.a.listItem,children:[Object(H.jsxs)("span",{className:D.a.listItemdData,children:[t.name,": ",Object(H.jsx)("a",{href:"tel:+{contact.number}",children:t.number})]}),Object(H.jsx)("button",{className:D.a.listItemBtn,type:"button",onClick:function(){return n(t)},children:"delete"})]},t.id)}))})})}var R=n(16),K=n.n(R),M=function(t){var e=t.title;return Object(H.jsxs)("h3",{className:K.a.phonebookListHeadline,children:[" ",e," "]})},T=function(t){var e=t.title;return Object(H.jsx)("h3",{className:K.a.phonebookListHeadline,children:e})},U=n(17),$=n.n(U),Q=function(){var t=Object(i.c)((function(t){return t.contacts.filter})),e=Object(i.b)();return Object(H.jsx)("div",{className:$.a.formWarpper,children:Object(H.jsxs)("label",{className:$.a.searchLabel,children:["Find contact by name",Object(H.jsx)("input",{className:$.a.inputField,type:"text",name:"filter",value:t,onChange:function(t){e(k(t.currentTarget.value))},autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})};function Y(){var t=Object(i.c)(L),e=Object(i.b)();return Object(c.useEffect)((function(){e((function(t){t(d()),y.a.get("/contacts").then((function(e){var n=e.data;return t(m(n))})).catch((function(e){return t(p(e))}))}))}),[e]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(J,{title:"Phonebook"}),Object(H.jsx)(z,{contacts:t}),t.length>0?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(T,{title:"Contacts"}),Object(H.jsx)(Q,{}),Object(H.jsx)(E,{contacts:t})]}):Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(M,{title:"Ur phonebook is empty"})})]})}s.a.render(Object(H.jsx)(o.a.StrictMode,{children:Object(H.jsx)(i.a,{store:F.store,children:Object(H.jsx)(Y,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.91aac375.chunk.js.map