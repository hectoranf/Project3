(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){e.exports=a(251)},131:function(e,t,a){},132:function(e,t,a){},138:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),s=a.n(l),i=a(11),c=a(13),o=a(15),u=a(14),m=a(20),h=(a(130),a(131),a(22)),d=a(76),g=a(75),p=(a(132),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){return n.setState({searchValue:e.target.value})},n.handleSubmit=function(e){return e.preventDefault()},n.state={searchValue:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"top-bar shadow-down",fixed:"top",expand:"md"},r.a.createElement(d.a.Brand,{as:"div",className:"logo"},r.a.createElement(h.b,{to:"/"},"the",r.a.createElement("span",{className:"bold-weight"},"Watch"),"men")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),this.props.user?r.a.createElement("nav",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",value:this.state.searchValue,onChange:this.handleSearch,placeHolder:"\xbfQu\xe9 te apetece ver?"}),r.a.createElement(h.b,{className:"search-button",to:this.state.searchValue.length>0?"/meeting/find?title=".concat(this.state.searchValue):"/"},"Search")),r.a.createElement(h.c,{className:"form-button",to:"/meeting/create"},"Crea una quedada")):r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Link,{as:"div",className:"ml-auto"},r.a.createElement(h.b,{to:"/login"},"Iniciar Sesion")),r.a.createElement(g.a.Link,{as:"div",className:"ml-auto"},r.a.createElement(h.b,{to:"/signup"},"Registro"))))}}]),a}(n.Component)),E=a(44),f=function(){return r.a.createElement(E.a,{as:"section",className:"landing-carousel"},r.a.createElement(E.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"./img/landing/landing1.jpg",alt:"Landing Carrousel img"}),r.a.createElement(E.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(E.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"./img/landing/landing2.jpeg",alt:"Landing Carrousel img"}),r.a.createElement(E.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(E.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"./img/landing/landing3.jpeg",alt:"Landing Carrousel img"}),r.a.createElement(E.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))))},b=a(24),v=a(23),j=a(12),O=a(21),y=function(){return r.a.createElement(b.a,{as:"section"},r.a.createElement(v.a,null,r.a.createElement(j.a,{xl:3,lg:6},r.a.createElement(O.a,{as:"article"},r.a.createElement(O.a.Img,{variant:"top",src:"https://static.javatpoint.com/images/core/java-features.png"}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Prueba"),r.a.createElement(O.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),r.a.createElement(j.a,{xl:3,lg:6},r.a.createElement(O.a,{as:"article"},r.a.createElement(O.a.Img,{variant:"top",src:"https://static.javatpoint.com/images/core/java-features.png"}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Prueba"),r.a.createElement(O.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),r.a.createElement(j.a,{xl:3,lg:6},r.a.createElement(O.a,{as:"article"},r.a.createElement(O.a.Img,{variant:"top",src:"https://static.javatpoint.com/images/core/java-features.png"}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Prueba"),r.a.createElement(O.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),r.a.createElement(j.a,{xl:3,lg:6},r.a.createElement(O.a,{as:"article"},r.a.createElement(O.a.Img,{variant:"top",src:"https://static.javatpoint.com/images/core/java-features.png"}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Prueba"),r.a.createElement(O.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))))))},S=(a(138),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(y,null))}}]),a}(n.Component)),w=a(50),I=a(10),C=a(9),N=a(42),M=a.n(N),k=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.email,l=e.profilePic;return t.service.post("/signup",{username:a,password:n,email:r,profilePic:l})},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=M.a.create({baseURL:"".concat("https://thewatchmen.herokuapp.com/api","/auth"),withCredentials:!0})},U=function e(){var t=this;Object(i.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e)},this.service=M.a.create({baseURL:"".concat("https://thewatchmen.herokuapp.com/api","/files"),withCredentials:!0})},L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(I.a)({},n.state.userInfo),a=e.target,r=a.name,l=a.value;t=Object(I.a)(Object(I.a)({},t),{},Object(w.a)({},r,l)),n.setState({userInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.signup(n.state.userInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.handleFileUpload=function(e){var t=new FormData;t.append("profilePic",e.target.files[0]),n.filesService.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url);var t=Object(I.a)({},n.state.userInfo);t=Object(I.a)(Object(I.a)({},t),{},{profilePic:e.data.secure_url}),n.setState({userInfo:t})})).catch((function(e){return console.log(e)}))},n.state={userInfo:{username:"",password:"",email:"",profilePic:""},errorMessage:""},n.authService=new k,n.filesService=new U,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(C.a,{className:"form-style",onSubmit:this.handleSubmit},r.a.createElement(v.a,null,r.a.createElement(j.a,{md:{span:6,offset:3}},r.a.createElement("h3",{className:"form-title"},"Registro de usuario"),r.a.createElement("hr",null),r.a.createElement(C.a.Group,{controlId:"name"},r.a.createElement(C.a.Label,null,"Usuario"),r.a.createElement(C.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(C.a.Group,{controlId:"mail"},r.a.createElement(C.a.Label,null,"Email"),r.a.createElement(C.a.Control,{name:"email",type:"email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(C.a.Group,{controlId:"pwd"},r.a.createElement(C.a.Label,null,"Contrase\xf1a"),r.a.createElement(C.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(C.a.Group,{controlId:"img"},r.a.createElement(C.a.Label,null,"Imagen de perfil"),r.a.createElement(C.a.Control,{name:"profilePic",type:"file",onChange:this.handleFileUpload})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement("hr",null),r.a.createElement("button",{className:"form-button",type:"submit"},"Registrarme"),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfYa tienes cuenta? ",r.a.createElement(h.b,{to:"/login",className:"link-form"},"Inicia sesi\xf3n")))))))}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(I.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(I.a)(Object(I.a)({},t),{},Object(w.a)({},r,l)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new k,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,{md:{span:6,offset:3}},r.a.createElement("h3",{className:"form-title"},"Inicio de sesi\xf3n"),r.a.createElement("hr",null),r.a.createElement(C.a,{className:"form-style",onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,{controlId:"name"},r.a.createElement(C.a.Label,null,"Usuario"),r.a.createElement(C.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(C.a.Group,{controlId:"pwd"},r.a.createElement(C.a.Label,null,"Contrase\xf1a"),r.a.createElement(C.a.Control,{className:"form-input ",name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement("hr",null),r.a.createElement("button",{className:"form-button",type:"submit"},"Iniciar sesi\xf3n")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfNo tienes cuenta? ",r.a.createElement(h.b,{to:"/signup",className:"link-form"},"Reg\xedstrate"))))))}}]),a}(n.Component),x=function e(){var t=this;Object(i.a)(this,e),this.getAllMeetings=function(){return t.service.get("/getAll")},this.getByTitle=function(e){return t.service.get("/media?title=".concat(e))},this.getById=function(e){return t.service.get("/".concat(e))},this.createMeeting=function(e){return t.service.post("/create",{meeting:e})},this.joinMeeting=function(e){return t.service.post("/".concat(e,"/join"))},this.service=M.a.create({baseURL:"".concat("https://thewatchmen.herokuapp.com/api","/meeting"),withCredentials:!0})},P=(a(156),function(e){return r.a.createElement(j.a,{md:{span:10,offset:1},as:"article"},r.a.createElement(h.b,{to:"/meeting/details/".concat(e._id),className:"search-card"},r.a.createElement("figure",null,r.a.createElement("img",{src:e.media.posterPic?"http://image.tmdb.org/t/p/w154".concat(e.media.posterPic):"./img/poster/defaultPoster.jpg",alt:e.media.title}),r.a.createElement("h2",null,e.media.title)),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,e.meetingName),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Fecha"),": ","".concat(e.date.getDate()," - ").concat(e.date.getMonth()+1," - ").concat(e.date.getFullYear())),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Hora"),": ",e.date.getHours(),":",e.date.getMinutes()<10?"0".concat(e.date.getMinutes()):e.date.getMinutes()),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Lugares disponibles"),": ",e.freeSeats))),r.a.createElement("figure",null,r.a.createElement("img",{className:"avatar",src:e.creator.profilePic,alt:e.creator.username}),r.a.createElement("h2",null,e.creator.username))))}),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getByTitle=function(t){e.meetingService.getByTitle(t).then((function(t){return e.setState({favouriteMeetings:t.data})})).catch((function(e){return console.log(e)}))},e.getMeetings=function(){e.meetingService.getAllMeetings().then((function(t){var a;t.data.map((function(e){return a=new Date(Date.parse(e.date)),e.date=a})),t.data.sort((function(e,t){return e.date-t.date})),e.setState({nearMeetings:t.data})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getMeetings()},e.state={myMeetings:[],favouriteMeetings:[],nearMeetings:[]},e.meetingService=new x,e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{fluid:!0},r.a.createElement(v.a,{as:"section"},this.state.nearMeetings.map((function(e){return r.a.createElement(P,Object.assign({key:e._id},e))}))))}}]),a}(n.Component),_=(a(157),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).logout=function(){e.props.setTheUser(!1),e.authService.logout()},e.state={},e.authService=new k,e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:"side-bar shadow-right"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:this.props.user.profilePic,alt:this.props.user.username})," ",this.props.user.username),r.a.createElement("hr",null),r.a.createElement("li",null,r.a.createElement(h.c,{className:"side-link",to:"/"},"Quedadas")),r.a.createElement("li",null,r.a.createElement(h.c,{className:"side-link",to:"/following"},"Siguiendo")),r.a.createElement("hr",null),r.a.createElement("li",null,r.a.createElement(h.c,{className:"side-link",to:"/",onClick:this.logout},"Cerrar sesi\xf3n"))))}}]),a}(n.Component)),F=a(121),B=a.n(F);var q=function(){return r.a.createElement("div",{className:"marker"})},R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lat:40.4167754,lng:-3.7037901999999576},n.state={},n}return Object(c.a)(a,[{key:"handleDrag",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:this.props.height,width:this.props.width,zIndex:0,boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.2)"}},r.a.createElement(B.a,{bootstrapURLKeys:{key:"AIzaSyAgMxlbpkXQlAsUQWBUbN-toHutzEMyYCs"},defaultCenter:this.props.pos&&this.props.pos,defaultZoom:this.props.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){e.map,e.maps}},this.props.meetings.map((function(e,t){return r.a.createElement(q,{key:t,lat:e.location.coordinates[0],lng:e.location.coordinates[1]})}))))}}]),a}(n.Component);R.defaultProps={center:{lat:40.4167754,lng:-3.7037901999999576},zoom:16};a(177);var G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getMeeting=function(e){n.meetingService.getById(e).then((function(e){var t=new Date(e.data.date);e.data.date=t,n.setState({meeting:e.data})})).catch((function(e){return console.log(e)}))},n.joinMeeting=function(){n.meetingService.joinMeeting(n.state.meeting._id).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getMeeting(n.props.match.params.id)},n.state={meeting:null},n.meetingService=new x,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{fluid:!0,className:"meeting-details"},this.state.meeting&&r.a.createElement(v.a,{as:"section"},r.a.createElement(j.a,{lg:{span:2,offset:0}},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:this.state.meeting.media.posterPic?"http://image.tmdb.org/t/p/w154".concat(this.state.meeting.media.posterPic):"https://res.cloudinary.com/dba5fn3ws/image/upload/v1589985020/PosterDefault/defaultPoster_esgqhh.jpg",alt:this.state.meeting.media.title}))),r.a.createElement(j.a,{lg:{span:10,offset:0}},r.a.createElement("h2",null,this.state.meeting.media.title),r.a.createElement("h1",null,this.state.meeting.meetingName),!this.props.user.joinedMeetings.includes(this.state.meeting._id)&&this.state.meeting.freeSeats>0&&r.a.createElement("button",{onClick:this.joinMeeting,className:"form-button"},"Ap\xfantate a esta quedada")),r.a.createElement(j.a,{lg:2},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:this.state.meeting.creator.profilePic,alt:this.state.meeting.creator.username}),r.a.createElement("h3",{className:"username"},this.state.meeting.creator.username))),r.a.createElement(j.a,{lg:4},r.a.createElement(v.a,null,r.a.createElement(j.a,{as:"article",lg:12},r.a.createElement("header",null,r.a.createElement("h3",null,"Descripci\xf3n")),r.a.createElement("p",null,this.state.meeting.description),r.a.createElement("hr",null)),r.a.createElement(j.a,{as:"article",lg:12},r.a.createElement("header",null,r.a.createElement("h3",null,"Invitados")),r.a.createElement("div",{className:"participants"},this.state.meeting.participants.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("img",{src:e.profilePic,alt:e.username})," ",r.a.createElement("h4",null,e.username))}))),r.a.createElement("hr",null)),r.a.createElement(j.a,{as:"article",lg:12},r.a.createElement("header",null,r.a.createElement("h3",null,"Lista de la compra"))))),r.a.createElement(j.a,{lg:1,className:"separation"},r.a.createElement("div",null)),r.a.createElement(j.a,{lg:5},r.a.createElement(v.a,null,r.a.createElement(j.a,{lg:12,as:"article"},r.a.createElement("header",null,r.a.createElement("h3",null,"Datos")),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Fecha"),": ","".concat(this.state.meeting.date.getDate()," - ").concat(this.state.meeting.date.getMonth()+1," - ").concat(this.state.meeting.date.getFullYear())),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Hora"),": ",this.state.meeting.date.getHours()," : ",this.state.meeting.date.getMinutes()<10?"0".concat(this.state.meeting.date.getMinutes()):this.state.meeting.date.getMinutes()),r.a.createElement("p",null,r.a.createElement("span",{className:"regular-weight"},"Sitios libres"),": ",this.state.meeting.freeSeats),r.a.createElement("hr",null)),r.a.createElement(j.a,{as:"article",lg:12},r.a.createElement("header",null,r.a.createElement("h3",null,"Localizaci\xf3n")),r.a.createElement(R,{pos:this.state.meeting.location.coordinates,zoom:16,meetings:[this.state.meeting],width:"100%",height:"250px",marker:!0}),r.a.createElement("br",null),r.a.createElement("hr",null)),r.a.createElement(j.a,{as:"article",lg:12})))),r.a.createElement("hr",null))}}]),a}(n.Component),V=a(89),A=a.n(V),z=(a(178),function(e){return r.a.createElement("article",{className:"card"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.posterPic),alt:e.title}),r.a.createElement("p",null,e.title))}),H=function e(){var t=this;Object(i.a)(this,e),this.getAll=function(e){return t.service.get("/getAll?title=".concat(e))},this.service=M.a.create({baseURL:"".concat("https://thewatchmen.herokuapp.com/api","/media"),withCredentials:!0})},Q=a(93),Y=(a(179),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleModal=function(e){n.setState({modalShow:e})},n.initFollowingLists=function(){var e=[],t=[];n.props.user&&n.props.user.followingList.forEach((function(a){return"tv"===a.type?e.push(a):t.push(a)})),n.setState({tv:e,movie:t})},n.componentDidMount=function(){n.initFollowingLists()},n.state={tv:[],movie:[],modalShow:!1},n.MediaService=new H,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"following"},r.a.createElement("h1",null,"Listas de tus favoritos"),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Series que sigues"),r.a.createElement("button",{onClick:function(){return e.handleModal(!0)},className:"following-button"},"+")),this.state.tv.length>0&&r.a.createElement("hr",{className:"shadow-down"}),this.state.tv.length>0?r.a.createElement(A.a,{slidesPerPage:5,slidesPerScroll:2,arrows:!0},this.state.tv.map((function(e){return r.a.createElement(z,Object.assign({key:e._id},e))}))):r.a.createElement("article",{className:"msg"},r.a.createElement("p",null,"No est\xe1s siguiendo ninguna serie")),this.state.tv.length>0&&r.a.createElement("hr",{className:"shadow-up"})),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Pel\xedculas que sigues"),r.a.createElement("button",{onClick:function(){return e.handleModal(!0)},className:"following-button"},"+")),this.state.movie.length>0&&r.a.createElement("hr",null),this.state.movie.length>0?r.a.createElement(A.a,{slidesPerPage:5,slidesPerScroll:2,arrows:!0},this.state.movie.map((function(e){return r.a.createElement(z,Object.assign({key:e._id},e))}))):r.a.createElement("article",{className:"msg"},r.a.createElement("p",null,"No est\xe1s siguiendo ninguna pel\xedcula")),this.state.movie.length>0&&r.a.createElement("hr",null)),r.a.createElement(Q.a,{show:this.state.modalShow,onHide:function(){return e.handleModal(!1)},centered:!0},r.a.createElement(Q.a.Body,null,r.a.createElement("h1",null,"Formulario para seguir"))))}}]),a}(n.Component)),W=(a(180),a(122)),J=a.n(W),K=(a(181),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).createMeeting=function(){n.meetingService.createMeeting(n.state.meeting).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){var t=Object(I.a)({},n.state.meeting);t[e.target.name]=e.target.value,n.setState({meeting:t})},n.handleResultsVisibility=function(e){return n.setState(Object(I.a)(Object(I.a)({},n.state),{},{resultVisibility:e}))},n.handleMouseOver=function(e){return n.setState(Object(I.a)(Object(I.a)({},n.state),{},{mouseIsOver:e}))},n.setMedia=function(e){var t={title:"",type:e.media_type,idTMDB:e.id,posterPic:e.poster_path};"tv"===t.type?t.title=e.name:t.title=e.title;var a=Object(I.a)(Object(I.a)({},n.state.meeting),{},{media:t});document.getElementById("media-title").value=t.title,n.setState({meeting:a,resultVisibility:"none"})},n.handleSearch=function(e){var t=e.target.value;t.length>0?(n.handleResultsVisibility("block"),n.mediaService.getAll(t).then((function(e){n.setState(Object(I.a)(Object(I.a)({},n.state),{},{searchInput:t,results:e.data.results.filter((function(e){return"tv"===e.media_type||"movie"===e.media_type}))}))})).catch((function(e){return console.log(e)}))):(n.handleResultsVisibility("none"),n.setState(Object(I.a)(Object(I.a)({},n.state),{},{searchInput:t,results:[]})))},n.handleDate=function(e){var t=Object(I.a)({},n.state.meeting);t.date=e,n.setState({meeting:t})},n.handleLocation=function(e){var t=n.props.user.places[e.target.value].location,a=Object(I.a)(Object(I.a)({},n.state.meeting),{},{location:t});n.setState({meeting:a})},n.handleSubmit=function(e){e.preventDefault();var t=Object(I.a)(Object(I.a)({},n.state.meeting),{},{creator:n.props.user._id,seats:n.state.meeting.freeSeats});2!==t.location.coordinates.length&&(t.location.coordinates=n.props.user.places[0].location.coordinates),t.media.title||(t.media.title=n.state.searchInput),n.setState({meeting:t},(function(){return n.createMeeting()}))},n.state={meeting:{meetingName:"",media:{title:"",type:"tv",idTMDB:1,posterPic:""},date:new Date,description:"",seats:"",freeSeats:1,creator:"",location:{type:"Point",coordinates:[]},snackList:[]},results:[],resultVisibility:"none",mouseIsOver:"false",searchInput:""},n.mediaService=new H,n.meetingService=new x,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("gggggggggg",this.props),r.a.createElement(b.a,{className:"creating-meeting"},r.a.createElement(v.a,null,r.a.createElement(j.a,{md:{span:8,offset:2}},r.a.createElement("h1",null,"Datos de la quedada"),r.a.createElement("hr",null),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,{controlId:"media-title",onBlur:function(){return!e.state.mouseIsOver&&e.handleResultsVisibility("none")},onFocus:function(){return e.handleResultsVisibility("block")}},r.a.createElement(C.a.Label,null,"\xbfQu\xe9 vais a ver?"),r.a.createElement(C.a.Control,{name:"media-title",type:"text",placeholder:"Titulo...",onChange:this.handleSearch,autoComplete:"off",required:!0}),r.a.createElement("ul",{onMouseOver:function(){return e.handleMouseOver(!0)},onMouseOut:function(){return e.handleMouseOver(!1)},className:"search-results",style:{display:this.state.resultVisibility}},this.state.results.map((function(t,a){return r.a.createElement("li",{key:a,onClick:function(){return e.setMedia(t)}},t.poster_path&&r.a.createElement("img",{className:"miniature",src:"http://image.tmdb.org/t/p/w92".concat(t.poster_path),alt:"poster"}),r.a.createElement("p",null,"tv"===t.media_type?t.name:t.title))})))),r.a.createElement(C.a.Group,{controlId:"meetingName"},r.a.createElement(C.a.Label,null,"Pon nombre a tu quedada"),r.a.createElement(C.a.Control,{placeholder:"Ej: marat\xf3n de F\xb7R\xb7I\xb7E\xb7N\xb7D\xb7S",name:"meetingName",type:"textField",onChange:this.handleInputChange,value:this.state.meeting.meetingName,autoComplete:"off"})),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:j.a,controlId:"freeSeats",md:"6"},r.a.createElement(C.a.Label,null,"\xbfCuantos invitados quieres que asistan?"),r.a.createElement(C.a.Control,{name:"freeSeats",type:"number",onChange:this.handleInputChange,value:this.state.meeting.freeSeats,autoComplete:"off"})),r.a.createElement(C.a.Group,{as:j.a,controlId:"date",md:"6"},r.a.createElement(C.a.Label,null,"\xbfCu\xe1ndo va a ser?"),r.a.createElement("br",null),r.a.createElement(J.a,{className:"form-date",showTimeSelect:!0,selected:this.state.meeting.date,onChange:function(t){return e.handleDate(t)},timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"yyyy/MM/dd hh:mm aa"}))),r.a.createElement(C.a.Group,{controlId:"desc"},r.a.createElement(C.a.Label,null,"Descripci\xf3n"),r.a.createElement(C.a.Control,{as:"textarea",placeholder:"Da a tus invitados una idea de c\xf3mo va a ser la quedada",name:"description",type:"text",onChange:this.handleInputChange,value:this.state.meeting.description,autoComplete:"off"})),r.a.createElement(C.a.Group,{controlId:"location"},r.a.createElement(C.a.Label,null,"\xbfD\xf3nde va a ser la quedada?"),r.a.createElement(C.a.Control,{as:"select",onChange:this.handleLocation,custom:!0},r.a.createElement("option",{value:"0"},"..."),this.props.user&&this.props.user.places.map((function(e,t){return r.a.createElement("option",{key:e._id,value:t},e.name)})))),r.a.createElement("hr",null),r.a.createElement("button",{className:"form-button",type:"submit"},"Crea tu quedada")))))}}]),a}(n.Component)),X=a(92),Z=a.n(X),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getMeetings=function(e){console.log(e),n.meetingService.getByTitle(e).then((function(e){var t;e.data.map((function(e){return t=new Date(Date.parse(e.date)),e.date=t})),e.data.sort((function(e,t){return e.date-t.date})),n.setState({foundMeetings:e.data})})).catch((function(e){return console.log(e)}))},n.state={title:"",foundMeetings:[]},n.meetingService=new x,n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=Z.a.parse(this.props.location.search);t.title!==this.state.title&&this.setState(Object(I.a)(Object(I.a)({},this.state),{},{title:t.title}),(function(){return e.getMeetings(e.state.title)}))}},{key:"componentDidMount",value:function(){var e=this,t=Z.a.parse(this.props.location.search);this.setState(Object(I.a)(Object(I.a)({},this.state),{},{title:t.title}),(function(){return e.getMeetings(e.state.title)}))}},{key:"render",value:function(){return r.a.createElement(b.a,{fluid:!0},r.a.createElement(v.a,{as:"section"},r.a.createElement(R,{pos:this.props.user.places[0].location.coordinates,zoom:15,meetings:this.state.foundMeetings,width:"100%",height:"50vh",marker:!0})),r.a.createElement(v.a,{as:"section"},this.state.foundMeetings.map((function(e){return r.a.createElement(P,Object.assign({key:e._id},e))}))))}}]),a}(n.Component),ee=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado:",e.state)}))},e.fetchUser=function(){null===e.state.loggedInUser&&e.authService.isLoggedIn().then((function(t){return e.setTheUser(t.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new k,e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{user:this.state.loggedInUser}),this.state.loggedInUser&&r.a.createElement(_,{user:this.state.loggedInUser,setTheUser:this.setTheUser}),r.a.createElement("main",{style:{marginLeft:this.state.loggedInUser&&"250px"}},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return e.state.loggedInUser?r.a.createElement(D,{user:e.state.loggedInUser}):r.a.createElement(S,null)}}),r.a.createElement(m.b,{path:"/signup",render:function(t){return r.a.createElement(L,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.b,{path:"/login",render:function(t){return r.a.createElement(T,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.b,{path:"/meeting/details/:id",render:function(t){return e.state.loggedInUser?r.a.createElement(G,Object.assign({},t,{user:e.state.loggedInUser,setTheUser:e.setTheUser})):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{path:"/following",render:function(t){return e.state.loggedInUser?r.a.createElement(Y,Object.assign({},t,{user:e.state.loggedInUser,setTheUser:e.setTheUser})):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{path:"/meeting/create",render:function(t){return e.state.loggedInUser?r.a.createElement(K,Object.assign({},t,{user:e.state.loggedInUser,setTheUser:e.setTheUser})):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{path:"/meeting/find",render:function(t){return e.state.loggedInUser?r.a.createElement($,Object.assign({},t,{user:e.state.loggedInUser})):r.a.createElement(m.a,{to:"/"})}}))))}}]),a}(n.Component);s.a.render(r.a.createElement(h.a,null,r.a.createElement(ee,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.d8424773.chunk.js.map