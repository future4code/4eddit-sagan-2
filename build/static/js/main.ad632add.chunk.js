(this["webpackJsonp4eddit-boilerplate"]=this["webpackJsonp4eddit-boilerplate"]||[]).push([[0],{100:function(t,e,n){t.exports=n(128)},128:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(10),u=n(85),l=n(163),s=n(164),p=n(95),m=Object(p.a)({palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"rgba(219, 224, 230, 1)"},primary:{light:"rgba(88, 175, 240, 1)",main:"rgba(0, 121, 210, 1)",dark:"rgba(0, 71, 125, 1)",contrastText:"#fff"},secondary:{light:"rgba(193, 198, 201, 1)",main:"rgba(134, 138, 141, 1)",dark:"rgba(102, 105, 107, 1)",contrastText:"rgba(255, 255, 255, 1)"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 121, 210, 1)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(65, 117, 5, 1)"}}}),f=n(32),d=n(59),h=n(24),v=n(11),g=n(12),b=n(13),O=n(14),j=n(18),y=n.n(j),x=n(33),E=n(34),w=n.n(E),k="https://us-central1-missao-newton.cloudfunctions.net/fourEddit",S=function(t){return{type:"SET_USER",payload:{userData:t}}},D=function(){return function(){var t=Object(x.a)(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,w.a.get("".concat(k,"/posts"),{headers:{auth:n}});case 4:r=t.sent,e(C(r.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),alert("erro ao logar. contate o suporte",t.t0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},C=function(t){return{type:"SET_POSTS",payload:{posts:t}}},I=function(t){return{type:"NEW_USER",payload:{newUserData:t}}},T=function(t){return function(){var e=Object(x.a)(y.a.mark((function e(n){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("token"),e.next=4,w.a.get("".concat(k,"/posts/").concat(t),{headers:{auth:r}});case 4:a=e.sent,console.log(a.data.post),n(V(a.data.post)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("erro ao pegar detalhes. contate o suporte",e.t0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},V=function(t){return{type:"SET_POST_DETAIL",payload:{post:t}}},_=n(19),U=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(v.a)(this,n),(r=e.call(this,t)).handleInput=function(t){r.setState(Object(h.a)({},t.target.name,t.target.value))},r.handleLogin=function(t){t.preventDefault();var e=r.state,n=e.email,a=e.password;r.props.login(n,a)},r.state={email:"",password:""},r}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(){null!==localStorage.getItem("token")&&this.props.goToFeed()}},{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return a.a.createElement("div",null,a.a.createElement("h1",null,"Fa\xe7a seu login "),a.a.createElement("form",{onSubmit:this.handleLogin},a.a.createElement("input",{name:"email",type:"email",label:"Digite seu email",required:!0,value:e,onChange:this.handleInput}),a.a.createElement("input",{name:"password",type:"password",label:"Digite sua senha",required:!0,value:n,onChange:this.handleInput}),a.a.createElement("button",{type:"submit"},"Login"),a.a.createElement("p",null," Ou "),a.a.createElement("hr",null)),a.a.createElement("button",{onClick:this.props.goToRegister},"Cadastre-se"))}}]),n}(r.Component),P=Object(i.c)((function(t){return{user:t.posts.user}}),(function(t){return{login:function(e,n){return t(function(t,e){return function(){var n=Object(x.a)(y.a.mark((function n(r){var a,o,c,i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={email:t,password:e},n.prev=1,n.next=4,w.a.post("".concat(k,"/login"),a);case 4:o=n.sent,c=o.data.token,i=JSON.stringify(o.data.user),console.log(o.data),localStorage.setItem("token",c),localStorage.setItem("user",i),r(S(o.data.user)),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),window.alert("Desculpe, o login de deu errado, tente novamente",n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))},goToRegister:function(){return t(Object(_.d)(ae.cadastro))},goToFeed:function(){return t(Object(_.d)(ae.root))}}}))(U),A=n(6),N=n(7),M=n(129),L=n(167),q=n(39),R=n.n(q);function F(){var t=Object(A.a)(["\nwidth: 100%;\n"]);return F=function(){return t},t}function W(){var t=Object(A.a)(["\nmargin-right: 5px;\nfont-size: 15px;\n"]);return W=function(){return t},t}function z(){var t=Object(A.a)(["\nwidth: 20px;\nheight: 20px;\nmargin-right: 5px;\n"]);return z=function(){return t},t}function H(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-top: 10px;\n"]);return H=function(){return t},t}function J(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-bottom: 10px;\n"]);return J=function(){return t},t}function X(){var t=Object(A.a)(["\nmargin: 10px;\npadding: 10px;\ndisplay: inline-flex;\nmin-width: 50%;\ncursor: pointer;\n"]);return X=function(){return t},t}var G=Object(N.a)(M.a)(X()),Y=N.a.div(J()),B=N.a.div(H()),Z=Object(N.a)(L.a)(z()),K=Object(N.a)(R.a)(W()),Q=N.a.div(F());function $(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\ncursor: pointer;\ntext-align: center;\nalign-content: center;\nalign-items: center;\nmargin-right: 10px;\n"]);return $=function(){return t},t}var tt=N.a.div($()),et=n(46),nt=n.n(et),rt=n(131),at=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handlewithVote=function(e){var n="";t.props.userVoteDirection===e?n=0:t.props.userVoteDirection!==e&&(n=e);var r={direction:n};t.props.topicVote(t.props.topicId,r)},t.upIcon=function(){var e="gray";return 1===t.props.userVoteDirection&&(e="green"),{transform:"rotate(270deg)",color:e}},t.downIcon=function(){var e="gray";return-1===t.props.userVoteDirection&&(e="orange"),{transform:"rotate(90deg)",color:e}},t}return Object(g.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(tt,null,a.a.createElement(nt.a,{onClick:function(){t.handlewithVote(1)},style:this.upIcon()}),a.a.createElement(rt.a,{variant:"body1"},this.props.votesCount),a.a.createElement(nt.a,{onClick:function(){t.handlewithVote(-1)},style:this.downIcon()}))}}]),n}(r.Component),ot=Object(i.c)((function(t){return{}}),(function(t){return{topicVote:function(e,n){return t(function(t,e){return function(){var n=Object(x.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=localStorage.getItem("token"),n.next=4,w.a.put("".concat(k,"/posts/").concat(t,"/vote"),e,{headers:{auth:a}});case 4:n.sent,r(D()),r(T(t)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),window.alert("n\xe3o foi possivel votar"),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))}}}))(at),ct=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).textComment=function(){var e="comentarios";return 1===t.props.commentsNumber&&(e="comentario"),e},t.gna=function(){return Math.floor(9*Math.random())},t.calcHour=function(){var e="",n=(new Date-new Date(t.props.createdAt))/1e3/60/60,r=Math.trunc(n),a=Math.floor(60*(n-r)),o=0,c=0,i=r/24;i>1&&(c=Math.trunc(i),o=Math.floor(24*(i-c))),i<1&&(o=24*i);var u=new Date(t.props.createdAt),l=u.getDate(),s=u.getMonth()+1,p=u.getFullYear();return c>0?e="".concat(c," dias, ").concat(o," horas e ").concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,")."):c<=0&&o>0?e="".concat(o," horas e ").concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,")."):c<=0&&o<=0&&(e="".concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,").")),e},t}return Object(g.a)(n,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")&&this.props.goToLogin(),this.calcHour()}},{key:"render",value:function(){var t=this,e=this.calcHour();return a.a.createElement(G,null,a.a.createElement(ot,{key:this.props.id,userVoteDirection:this.props.userVoteDirection,topicId:this.props.id,votesCount:this.props.votesCount}),a.a.createElement(Q,{onClick:function(){t.props.selectedId(t.props.id)}},a.a.createElement(Y,null,a.a.createElement(Z,{src:"https://picsum.photos/1".concat(this.gna()).concat(this.gna())}),a.a.createElement(rt.a,{variant:"caption",color:"secondary"},a.a.createElement("strong",null,"r/categoria")," Criado por: ",a.a.createElement("strong",null,"u/",this.props.username)," a ",e)),a.a.createElement("div",null,a.a.createElement(rt.a,{variant:"h6",color:"textPrimary"},this.props.title),a.a.createElement(rt.a,{variant:"subtitle1",color:"textPrimary"},this.props.text)),a.a.createElement(B,null,a.a.createElement(K,null),a.a.createElement(rt.a,{variant:"caption",color:"secondary"}," ",this.props.commentsNumber," ",this.textComment()))))}}]),n}(r.Component),it=n(20),ut=[{name:"title",label:"Titulo",type:"text",required:!0,title:"T\xedtulo do post"},{name:"text",label:"Texto da postagem",type:"text",required:!0,title:"Texto descrevendo a postagem",multiline:!0,rows:5}],lt=n(165);function st(){var t=Object(A.a)(["\ndisplay: flex;\njustify-content: center\n"]);return st=function(){return t},t}function pt(){var t=Object(A.a)(["\nbackground-color: #f6f7f9;\ndisplay: flex;  \njustify-content: center;\nalign-content: center;\nalign-items: center;\ntext-align: center;\nalign-self: center;\n"]);return pt=function(){return t},t}function mt(){var t=Object(A.a)(["\nmargin: 10px;\npadding: 10px;\ndisplay: inline-flex;\nmin-width: 50%;\n"]);return mt=function(){return t},t}var ft=Object(N.a)(M.a)(mt()),dt=Object(N.a)(lt.a)(pt()),ht=(N.a.div(st()),n(168)),vt=n(166),gt=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(v.a)(this,n),(r=e.call(this,t)).handleInputChange=function(t){var e=t.target,n=e.name,a=e.value;r.setState({form:Object(it.a)({},r.state.form,Object(h.a)({},n,a))})},r.handleSubmission=function(t){t.preventDefault(),r.props.newPost(r.state.form)},r.state={form:{}},r}return Object(g.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(ft,null,a.a.createElement(ht.a,{fullWidth:!0},a.a.createElement("form",{onSubmit:this.handleSubmission},ut.map((function(e){return a.a.createElement(dt,{variant:"outlined",key:e.name,id:e.name,label:e.label,name:e.name,type:e.type,onChange:t.handleInputChange,pattern:e.pattern,inputProps:{pattern:e.pattern,min:e.min,title:e.title},min:e.min,required:e.required,title:e.title,value:t.state.form[e.name],margin:"dense",fullWidth:!0,multiline:e.multiline,rows:e.rows})})),a.a.createElement(vt.a,{type:"submit",variant:"contained",color:"primary"},"Enviar"))))}}]),n}(r.Component),bt=Object(i.c)((function(t){return{}}),(function(t){return{newPost:function(e){return t(function(t){return function(){var e=Object(x.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("token"),e.next=4,w.a.post("".concat(k,"/posts"),t,{headers:{auth:r}});case 4:e.sent,n(D()),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),alert("erro ao enviar. contate o suporte",e.t0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(gt);function Ot(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-content: center;\nalign-items: center;\n"]);return Ot=function(){return t},t}var jt=N.a.div(Ot()),yt=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleWhitSelect=function(e){t.props.getPostDetail(e)},t}return Object(g.a)(n,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")&&this.props.goToLogin(),this.props.getPosts()}},{key:"componentDidUpdate",value:function(){null!==this.props.postComments&&this.props.goToPostDetail(),null===localStorage.getItem("token")&&this.props.goToLogin()}},{key:"render",value:function(){var t=this;return a.a.createElement(jt,null,a.a.createElement(bt,null),this.props.posts&&this.props.posts.map((function(e){return a.a.createElement(ct,{key:e.id,votesCount:e.votesCount,userVoteDirection:e.userVoteDirection,commentsNumber:e.commentsNumber,id:e.id,username:e.username,text:e.text,createdAt:e.createdAt,title:e.title,selectedId:t.handleWhitSelect})})))}}]),n}(r.Component),xt=Object(i.c)((function(t){return{posts:t.posts.posts,postComments:t.posts.postComments,user:t.posts.user}}),(function(t){return{goToLogin:function(){return t(Object(_.d)(ae.login))},goToPostDetail:function(){return t(Object(_.d)(ae.postdetails))},getPosts:function(){return t(D())},getPostDetail:function(e){return t(T(e))}}}))(yt),Et=[{name:"username",label:"Nome do novo Usu\xe1rio",type:"text",pattern:"[a-zA-Z]{3,}",title:"nome do usu\xe1rio com no m\xednimo 3 letras"},{name:"email",label:"email do novo Usu\xe1rio",type:"email",title:"email completo do usu\xe1rio"},{name:"password",label:"senha do novo Usu\xe1rio",type:"password",pattern:"{5,}",title:"nova senha com no m\xednimo 5 digitos"}],wt=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(v.a)(this,n),(r=e.call(this,t)).handleInputnewUser=function(t){var e=t.target,n=e.name,a=e.value;r.setState({form:Object(it.a)({},r.state.form,Object(h.a)({},n,a))})},r.handleOnSubmit=function(t){t.preventDefault(),r.props.newRegister(r.state.form)},r.state={form:{}},r}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(){null!==localStorage.getItem("token")&&this.props.goToFeed()}},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleOnSubmit},Et.map((function(e){return a.a.createElement("div",null,a.a.createElement("label",null,e.label),a.a.createElement("input",{name:e.name,type:e.type,value:t.state.form[e.name],required:e.required,onChange:t.handleInputnewUser,title:e.title}))})),a.a.createElement("button",{type:"submit"},"Cadastrar")))}}]),n}(r.Component),kt=Object(i.c)((function(t){return{user:t.posts.user}}),(function(t){return{goToFeed:function(){return t(Object(_.d)(ae.root))},newRegister:function(e){return t(function(t){return function(){var e=Object(x.a)(y.a.mark((function e(n){var r,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,w.a.post("".concat(k,"/signup"),t);case 4:r=e.sent,n(I(r.data)),a=r.data.token,o=JSON.stringify(r.data.user),localStorage.setItem("user",o),localStorage.setItem("token",a),n(S(r.data.user)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),window.alert("Ops, n\xe3o foi poss\xedvel cadastrar, tente novamente!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(wt);function St(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\ncursor: pointer;\njustify-content: center;\ntext-align: center;\nalign-content: center;\nalign-items: center;\n"]);return St=function(){return t},t}var Dt=N.a.div(St()),Ct=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handlewithVote=function(e){var n="";t.props.userVoteDirection===e?n=0:t.props.userVoteDirection!==e&&(n=e);var r={direction:n};t.props.commentVote(t.props.topicId,r,t.props.commentId)},t.upIcon=function(){var e="gray";return 1===t.props.userVoteDirection&&(e="green"),{transform:"rotate(270deg)",color:e}},t.downIcon=function(){var e="gray";return-1===t.props.userVoteDirection&&(e="orange"),{transform:"rotate(90deg)",color:e}},t}return Object(g.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(Dt,null,a.a.createElement(nt.a,{onClick:function(){t.handlewithVote(1)},style:this.upIcon()}),a.a.createElement(rt.a,{variant:"body1"},this.props.votesCount),a.a.createElement(nt.a,{onClick:function(){t.handlewithVote(-1)},style:this.downIcon()}))}}]),n}(r.Component),It=Object(i.c)((function(t){return{}}),(function(t){return{commentVote:function(e,n,r){return t(function(t,e,n){return function(){var r=Object(x.a)(y.a.mark((function r(a){var o;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=localStorage.getItem("token"),r.next=4,w.a.put("".concat(k,"/posts/").concat(t,"/comment/").concat(n,"/vote"),e,{headers:{auth:o}});case 4:r.sent,a(T(t)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),window.alert("n\xe3o foi possivel votar"),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}(e,n,r))}}}))(Ct);function Tt(){var t=Object(A.a)(["\nwidth: 100%;\n"]);return Tt=function(){return t},t}function Vt(){var t=Object(A.a)(["\nmargin-right: 5px;\nfont-size: 15px;\n"]);return Vt=function(){return t},t}function _t(){var t=Object(A.a)(["\nwidth: 20px;\nheight: 20px;\nmargin-right: 5px;\n"]);return _t=function(){return t},t}function Ut(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-bottom: 10px;\n"]);return Ut=function(){return t},t}function Pt(){var t=Object(A.a)(["\nmargin: 10px;\npadding: 10px;\ndisplay: inline-flex;\nmin-width: 50%;\n"]);return Pt=function(){return t},t}function At(){var t=Object(A.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 10px;\n"]);return At=function(){return t},t}N.a.div(At());var Nt=Object(N.a)(M.a)(Pt()),Mt=N.a.div(Ut()),Lt=(Object(N.a)(L.a)(_t()),Object(N.a)(R.a)(Vt()),N.a.div(Tt())),qt=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).calcHour=function(){var e="",n=(new Date-new Date(t.props.createdAt))/1e3/60/60,r=Math.trunc(n),a=Math.floor(60*(n-r)),o=0,c=0,i=r/24;i>1&&(c=Math.trunc(i),o=Math.floor(24*(i-c))),i<1&&(o=24*i);var u=new Date(t.props.createdAt),l=u.getDate(),s=u.getMonth()+1,p=u.getFullYear();return c>0?e="".concat(c," dias, ").concat(o," horas e ").concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,")."):c<=0&&o>0?e="".concat(o," horas e ").concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,")."):c<=0&&o<=0&&(e="".concat(a," minutos (").concat(l,"/").concat(s,"/").concat(p,").")),e},t}return Object(g.a)(n,[{key:"render",value:function(){var t=this.calcHour();return a.a.createElement(Nt,null,a.a.createElement(It,{commentId:this.props.id,votesCount:this.props.votesCount,userVoteDirection:this.props.userVoteDirection,topicId:this.props.topicId}),a.a.createElement(Lt,null,a.a.createElement(Mt,null,a.a.createElement(rt.a,{variant:"caption",color:"secondary"},"Comentado por ",a.a.createElement("strong",null," ",this.props.username)," a ",t," ")),a.a.createElement("div",null,a.a.createElement(rt.a,{variant:"subtitle2",color:"textPrimary"},this.props.text))))}}]),n}(r.Component);function Rt(){var t=Object(A.a)(["\ndisplay: flex;\njustify-content: center\n"]);return Rt=function(){return t},t}function Ft(){var t=Object(A.a)(["\nbackground-color: #f6f7f9;\ndisplay: flex;  \njustify-content: center;\nalign-content: center;\nalign-items: center;\ntext-align: center;\nalign-self: center;\n"]);return Ft=function(){return t},t}function Wt(){var t=Object(A.a)(["\nmargin: 10px;\npadding: 10px;\ndisplay: inline-flex;\nmin-width: 50%;\n"]);return Wt=function(){return t},t}var zt=Object(N.a)(M.a)(Wt()),Ht=Object(N.a)(lt.a)(Ft()),Jt=(N.a.div(Rt()),[{name:"text",label:"Novo coment\xe1rio",type:"text",multiline:!0,rows:3,title:"Escreva um novo coment\xe1rio"}]),Xt=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(v.a)(this,n),(r=e.call(this,t)).handleInputChange=function(t){var e=t.target,n=e.name,a=e.value;r.setState({form:Object(it.a)({},r.state.form,Object(h.a)({},n,a))})},r.handleOnSubmit=function(t){t.preventDefault(),r.props.newComment(r.props.id,r.state.form),console.log("teste ")},r.state={form:{}},r}return Object(g.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(zt,null,a.a.createElement(ht.a,{fullWidth:!0},a.a.createElement("form",{onSubmit:this.handleOnSubmit},Jt.map((function(e){return a.a.createElement(Ht,{variant:"outlined",key:t.props.id,label:e.label,name:e.name,type:e.type,value:t.state.form[e.name],required:e.required,multiline:e.multiline,rows:e.rows,fullWidth:!0,onChange:t.handleInputChange,title:e.title})})),a.a.createElement(vt.a,{type:"submit",variant:"contained",color:"primary"},"Comentar"))))}}]),n}(r.Component),Gt=Object(i.c)((function(t){return{user:t.posts.user}}),(function(t){return{goToFeed:function(){return t(Object(_.d)(ae.root))},newComment:function(e,n){return t(function(t,e){return function(){var n=Object(x.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),console.log(t),n.prev=2,a=localStorage.getItem("token"),n.next=6,w.a.post("".concat(k,"/posts/").concat(t,"/comment"),e,{headers:{auth:a}});case 6:n.sent,r(T(t)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),window.alert("Ops, n\xe3o foi poss\xedvel comentar!"),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))}}}))(Xt);function Yt(){var t=Object(A.a)(["\nwidth: 100%;\n"]);return Yt=function(){return t},t}function Bt(){var t=Object(A.a)(["\nmargin-right: 5px;\nfont-size: 15px;\n"]);return Bt=function(){return t},t}function Zt(){var t=Object(A.a)(["\nwidth: 20px;\nheight: 20px;\nmargin-right: 5px;\n"]);return Zt=function(){return t},t}function Kt(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-top: 10px;\n"]);return Kt=function(){return t},t}function Qt(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nmargin-bottom: 10px;\n"]);return Qt=function(){return t},t}function $t(){var t=Object(A.a)(["\nmargin: 10px;\npadding: 10px;\ndisplay: inline-flex;\nmin-width: 50%;\n"]);return $t=function(){return t},t}function te(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-content: center;\nalign-items: center;\n"]);return te=function(){return t},t}var ee=N.a.div(te()),ne=(Object(N.a)(M.a)($t()),N.a.div(Qt()),N.a.div(Kt()),Object(N.a)(L.a)(Zt()),Object(N.a)(R.a)(Bt()),N.a.div(Yt()),function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).textComment=function(){var e="comentarios";return 1===t.props.commentsNumber&&(e="comentario"),e},t.gna=function(){return Math.floor(9*Math.random())},t}return Object(g.a)(n,[{key:"render",value:function(){var t=Object(it.a)({},this.props.postDetail);return a.a.createElement(ee,null,a.a.createElement(ct,{key:t.id,votesCount:t.votesCount,userVoteDirection:t.userVoteDirection,commentsNumber:t.commentsNumber,id:t.id,username:t.username,text:t.text,createdAt:t.createdAt,title:t.title,selectedId:function(){console.log(t.id)}}),a.a.createElement(Gt,{id:t.id}),this.props.postDetail&&this.props.postDetail.comments.map((function(e){return a.a.createElement(qt,{key:e.id,votesCount:e.votesCount,userVoteDirection:e.userVoteDirection,id:e.id,username:e.username,text:e.text,createdAt:e.createdAt,topicId:t.id})})))}}]),n}(r.Component)),re=Object(i.c)((function(t){return{postDetail:t.posts.postDetail}}),(function(t){return{}}))(ne),ae={root:"/",login:"/login",cadastro:"/register",postdetails:"/details"};var oe=function(t){return a.a.createElement(f.a,{history:t.history},a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:ae.root,component:xt}),a.a.createElement(d.a,{exact:!0,path:ae.login,component:P}),a.a.createElement(d.a,{exact:!0,path:ae.cadastro,component:kt}),a.a.createElement(d.a,{exact:!0,path:ae.postdetails,component:re})))},ce=n(30),ie=n(36),ue={posts:[],user:[],postDetail:null,postComments:null,topicVote:null},le=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_POSTS":return Object(it.a)({},t,{posts:e.payload.posts.posts});case"SET_USER":return Object(it.a)({},t,{user:e.payload.userData});case"NEW_USER":return Object(it.a)({},t,{newUser:e.payload.newUserData});case"SET_LOGOUT":return Object(it.a)({},t,{user:[]});case"SET_POST_DETAIL":return Object(it.a)({},t,{postDetail:e.payload.post,postComments:e.payload.post.comments});default:return t}},se=n(83),pe=n(161);function me(){var t=Object(A.a)(["\nbackground-color: #f6f7f9;\nalign-self: center;\n"]);return me=function(){return t},t}function fe(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\nmargin: 5px;\n"]);return fe=function(){return t},t}function de(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ntext-align: center;\nalign-content: center;\nalign-items: center;\n"]);return de=function(){return t},t}function he(){var t=Object(A.a)(["\nbackground-color: darkorange;\npadding: 10px;\nborder-radius: 50%;\nwidth: auto;\nheight: width;\nmargin: 20px;\n"]);return he=function(){return t},t}function ve(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nbackground-color: white;\nmargin-bottom: 20px;\n\n"]);return ve=function(){return t},t}function ge(){var t=Object(A.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\ntext-align: center;\nalign-content: center;\nalign-items: center;\n"]);return ge=function(){return t},t}var be,Oe=N.a.div(ge()),je=Object(N.a)(pe.a)(ve()),ye=N.a.div(he()),xe=N.a.div(de()),Ee=N.a.div(fe()),we=Object(N.a)(lt.a)(me()),ke=n(93),Se=n.n(ke),De=n(94),Ce=n.n(De),Ie=n(162),Te=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){return Object(v.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("user"));null!==t&&this.props.setUser(t)}},{key:"render",value:function(){var t=a.a.createElement(Ee,null,a.a.createElement(Ee,null,a.a.createElement(vt.a,{variant:"outlined",size:"small",color:"primary",onClick:this.props.setLogout},"Logout")),a.a.createElement("div",null,a.a.createElement(rt.a,{variant:"subtitle2",color:"textPrimary"},"User: ",null===this.props.user?"":this.props.user.username),a.a.createElement(rt.a,{variant:"subtitle2",color:"textPrimary"},"Email: ",null===this.props.user?"":this.props.user.email))),e=a.a.createElement(Oe,null,a.a.createElement(ye,null,a.a.createElement(Se.a,{fontSize:"large"})),a.a.createElement(xe,null,a.a.createElement(rt.a,{variant:"h5",color:"textPrimary"},"4eddit"),a.a.createElement(rt.a,{variant:"subtitle2",color:"textPrimary"},"Turma 2 - Sagan"))),n=a.a.createElement(Oe,null,a.a.createElement(we,{placeholder:"Search",variant:"outlined",InputProps:{startAdornment:a.a.createElement(Ie.a,{position:"start"},a.a.createElement(Ce.a,null))}}));return a.a.createElement(je,{position:"relative",elevation:0},0===this.props.user.length?"":e,0===this.props.user.length?"":n,0===this.props.user.length?"":t," ")}}]),n}(r.Component),Ve=Object(i.c)((function(t){return{user:t.posts.user}}),(function(t){return{setLogout:function(){return t((localStorage.clear(),{type:"SET_LOGOUT",payload:{}}))},setUser:function(e){return t(S(e))}}}))(Te),_e=Object(ce.a)(),Ue=[Object(ie.a)(Object(se.a)(_e),u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}],Pe=Object(ie.e)((be=_e,Object(ie.c)({router:Object(f.b)(be),posts:le})),ie.d.apply(void 0,Ue)),Ae=function(){return a.a.createElement(i.a,{store:Pe},a.a.createElement(l.a,{theme:m},a.a.createElement(s.a,null),a.a.createElement(Ve,null),a.a.createElement(oe,{history:_e})))},Ne=document.getElementById("root");c.a.render(a.a.createElement(Ae,null),Ne)}},[[100,1,2]]]);
//# sourceMappingURL=main.ad632add.chunk.js.map