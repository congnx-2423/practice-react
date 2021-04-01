(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{76:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(20),c=a.n(i),r=a(13),o=a(14),l=a(16),u=a(15),j=(a(76),a(31)),h=a(12),b=a(37),d=a(3);var m=function(e){var t,a;return Object(d.jsxs)("ul",{className:"tab-group",children:[Object(d.jsx)("li",(t={className:"tab"},Object(b.a)(t,"className","signup"===e.currentTab?"active":""),Object(b.a)(t,"onClick",(function(){e.changeTab("signup")})),Object(b.a)(t,"children",Object(d.jsx)("a",{href:"#signup",children:"Sign Up"})),t)),Object(d.jsx)("li",(a={className:"tab"},Object(b.a)(a,"className","login"===e.currentTab?"active":""),Object(b.a)(a,"onClick",(function(){e.changeTab("login")})),Object(b.a)(a,"children",Object(d.jsx)("a",{href:"#login",children:"Log In"})),a))]})};var O=function(e){return Object(d.jsxs)("div",{className:"field-wrap",children:[Object(d.jsxs)("label",{children:[e.title,Object(d.jsx)("span",{className:e.className,children:"*"})]}),Object(d.jsx)("input",{type:e.type,name:e.name,required:!0,autoComplete:"off",value:e.value,onChange:e.onChange})]})};var p=function(e){return Object(d.jsx)("button",{type:e.type,className:e.className,onClick:e.onClick,children:e.title})},f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n}return Object(o.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"submitForm",value:function(){if(""!=this.state.email&&""!=this.state.password){var e={email:this.state.email,password:this.state.password};this.props.logIn(e)}else alert("Enter email and password")}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{id:"login",children:[Object(d.jsx)("h1",{children:"Welcome Back!"}),Object(d.jsxs)("form",{children:[Object(d.jsx)(O,{type:"email",title:"Email Address",name:"email",value:this.state.email,className:"req",onChange:function(t){return e.onChangeEmail(t)}}),Object(d.jsx)(O,{type:"password",title:"Password",name:"password",className:"req",onChange:function(t){return e.onChangePassword(t)}}),Object(d.jsx)(p,{title:"Login",className:"button button-block",type:"button",onClick:function(){return e.submitForm()}})]})]})}}]),a}(s.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",password:"",email:""},n}return Object(o.a)(a,[{key:"onChangeFirstName",value:function(e){this.setState({firstName:e.target.value})}},{key:"onChangeLastName",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSignup",value:function(){var e={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password};this.props.signUp(e)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{id:"signup",children:[Object(d.jsx)("h1",{children:"Sign Up for Free"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"top-row",children:[Object(d.jsx)(O,{title:"First Name",value:this.state.firstName,type:"text",className:"req",onChange:function(t){return e.onChangeFirstName(t)}}),Object(d.jsx)(O,{title:"Last Name",value:this.state.lastName,type:"text",className:"req",onChange:function(t){return e.onChangeLastName(t)}})]}),Object(d.jsx)(O,{title:"Email Address",value:this.state.email,type:"email",className:"req",onChange:function(t){return e.onChangeEmail(t)}}),Object(d.jsx)(O,{title:"Set A Password",value:this.state.password,type:"password",className:"req",onChange:function(t){return e.onChangePassword(t)}}),Object(d.jsx)(p,{type:"button",className:"button button-block",title:"Get Started",onClick:function(){return e.onSignup()}})]})]})}}]),a}(s.a.Component);var v=function(e){var t=Object(h.f)();return function(){if(!0!==e.logged)return;t.push("home")}(),"signup"===e.currentTab?Object(d.jsx)(g,{signUp:e.signUp}):Object(d.jsx)(f,{logIn:e.logIn})},x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={tab:"login",users:[{id:1,firstName:"Cong",lastName:"Nguyen",email:"cong@gmail.com",password:"1234"}],logged:!1},n}return Object(o.a)(a,[{key:"changeTab",value:function(e){this.setState({tab:e})}},{key:"signUp",value:function(e){console.log(e)}},{key:"logIn",value:function(e){"cong@gmail.com"===e.email&&"123"===e.password&&this.setState({logged:!0})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)(m,{changeTab:function(t){return e.changeTab(t)},currentTab:this.state.tab}),Object(d.jsx)(v,{currentTab:this.state.tab,signUp:function(t){return e.signUp(t)},logIn:function(t){return e.logIn(t)},logged:this.state.logged})]})}}]),a}(s.a.Component),y=(a(82),a(86)),C=a(87);var N=function(e){var t=Object(h.f)();return Object(d.jsx)(C.a,{theme:"dark",mode:e.mode,selectedKeys:[e.selectedKey],children:e.sidebar.map((function(a){return Object(d.jsx)(C.a.Item,{onClick:function(){return n=a.id,s=a.slug,t.push(s),void e.selectItem(n);var n,s},title:a.name,children:a.name},a.id)}))})},k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"To do"})}}]),a}(s.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Home"})}}]),a}(s.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Profile"})}}]),a}(s.a.Component),I=(s.a.Component,y.a.Header),T=y.a.Sider,E=y.a.Content,K=[{path:"/home",exact:!0,main:function(){return Object(d.jsx)(w,{})}},{path:"/todo-list",main:function(){return Object(d.jsx)(k,{})}},{path:"/profile",main:function(){return Object(d.jsx)(S,{})}}],P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={collapsed:!1,sidebar:[{id:1,name:"Home",slug:"/home"},{id:2,name:"Todo list",slug:"/todo-list"},{id:3,name:"Profile",slug:"/profile"}],selectedKey:"1"},n}return Object(o.a)(a,[{key:"onCollapse",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"selectItem",value:function(e){this.setState({selectedKey:e.toString()})}},{key:"render",value:function(){var e=this;return Object(d.jsx)(j.a,{children:Object(d.jsxs)(y.a,{style:{minHeight:"100vh"},children:[Object(d.jsx)(T,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:function(){return e.onCollapse()},children:Object(d.jsx)(N,{mode:"inline",selectedKey:this.state.selectedKey,selectItem:function(t){return e.selectItem(t)},sidebar:this.state.sidebar})}),Object(d.jsxs)(y.a,{className:"site-layout",children:[Object(d.jsxs)(I,{className:"header",children:[Object(d.jsx)("div",{className:"logo"}),Object(d.jsx)(N,{mode:"horizontal",selectedKey:this.state.selectedKey,selectItem:function(t){return e.selectItem(t)},sidebar:this.state.sidebar})]}),Object(d.jsx)(E,{style:{margin:"0 16px"},children:Object(d.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(d.jsx)(h.c,{children:K.map((function(e,t){return Object(d.jsx)(h.a,{path:e.path,exact:e.exact,children:Object(d.jsx)(e.main,{})},t)}))})})})]})]})})}}]),a}(s.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{path:"/",exact:!0,component:x}),Object(d.jsx)(h.a,{path:"/home",exact:!0,component:P}),Object(d.jsx)(h.a,{})]})})}}]),a}(s.a.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(U,{})}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.3b9a287a.chunk.js.map