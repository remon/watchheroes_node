(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(52)},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(7),i=t(8),s=t(10),m=t(9),d=t(11),u=t(6),h=t(12),E=t.n(h),g=t(53),f=function(e){var a=e.hero,t="/"+a.id;return r.a.createElement("div",{className:"hero-card-item col-md-3 col-sm-4 col-xs-6"},r.a.createElement(g.a,{to:"".concat(t)},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("img",{src:a.image,className:"hero-pt",alt:a.name}),r.a.createElement("div",{className:"hero-name"}," ",a.name))))},b=function(){return r.a.createElement("div",{className:"progress",key:0,style:{width:"100%"}},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}))},p=function(e){return r.a.createElement("div",{className:"container  prog_container"},r.a.createElement("img",{src:"/build/loading_ball.gif"}),r.a.createElement("div",null,r.a.createElement("h3",null,e.text)))},v=function(e){return r.a.createElement("div",{className:" alert  scroll-alert ".concat(e.className),onClick:function(){e.onClick&&e.onClick()}},e.text)},N=function(e){return r.a.createElement("div",{className:"container search-form"},r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search for Hero",onChange:e.onChange})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"submit",className:" btn-search btn btn-primary",value:"Search"}))))},y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).loadMoreData=function(){var e=t.state,a=e.heroes,n=e.currentPage,r=e.query,o=t.state.noSearchQuery;t.setState({isLoading:!0,formFinishLoading:!0},function(){var e;e=r?"/api/v1/heroes?page="+n+"&q="+r:"/api/v1/heroes?page="+n,E.a.get(e).then(function(e){var n=e.data,c=a.concat(n.heroes);o=r&&n.heroes.length<1,t.setState({isLoading:!1,searchedQuery:r,noSearchQuery:o,heroes:c,hasMoreHeroes:n.totalPages>n.currentPage,currentPage:n.currentPage+1})}).catch(function(e){t.setState({errorLoading:e.message,isLoading:!1})})})},t.componentWillMount=function(){t.loadMoreData()},t.handleSubmit=function(e){e.preventDefault(),t.setState({heroes:[],currentPage:1,isLoading:!1,errorLoading:!1,hasMoreHeroes:!0},function(){t.loadMoreData()})},t.handleChange=function(e){t.setState({query:e.target.value})},t.state={heroes:[],currentPage:1,isLoading:!1,errorLoading:!1,hasMoreHeroes:!0,noSearchQuery:!1,formFinishLoading:!1,query:null,searchedQuery:null},t.loadMoreData=t.loadMoreData.bind(Object(u.a)(Object(u.a)(t))),t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(Object(u.a)(t))),window.onscroll=function(){var e=t.state,a=e.errorLoading,n=e.isLoading;!e.hasMoreHeroes||a||n||window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t.loadMoreData()},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.hasMoreHeroes,t=e.errorLoading,n=e.isLoading,o=e.noSearchQuery,c=e.searchedQuery,l=e.formFinishLoading,i=this.state.heroes.map(function(e,a){return r.a.createElement(f,{hero:e,key:a})}),s=i.length<1,m=n&&!s&&!o,d=s&&!t&&!o,u=a&&!n&&!t&&!o,h=!a&&!o;return r.a.createElement("div",{className:"heros-container row"},l&&r.a.createElement(N,{onChange:this.handleChange,onSubmit:this.handleSubmit}),i,m&&r.a.createElement(b,null),d&&r.a.createElement(p,{text:"Loading Heroes List"}),u&&r.a.createElement(v,{className:"alert-success",text:"Scroll down to load more heroes"}),h&&r.a.createElement(v,{className:"alert-info",text:"No More Heroes"}),t&&!o&&r.a.createElement(v,{className:"alert-danger",onClick:this.loadMoreData,text:" Error Loading Heroes List , click here to try again"}),o&&r.a.createElement(v,{className:"alert-danger",text:"No search Results for ".concat(c)}))}}]),a}(r.a.Component),O=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container heroes-container"},r.a.createElement(y,null))}}]),a}(r.a.Component),L=function(e){return r.a.createElement("div",{className:" hero_box col-md-6 "},r.a.createElement("div",{className:"inside_hero_box"},r.a.createElement("div",{className:"inside_hero_title"},e.title),r.a.createElement("div",{className:"inside_hero_body"},e.body)))},j=function(e){var a=e.details,t=a.story.biography;return r.a.createElement("div",{className:"hero_details row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"hero_desc"},r.a.createElement("p",{className:"hero_desc_p"},a.description))),r.a.createElement("div",{className:"col-md-6 hero_bio"},r.a.createElement("h2",null,"Biography"),r.a.createElement("ul",null,r.a.createElement("li",null," Real Name : ",t.realName),r.a.createElement("li",null," Affiliation : ",t.affiliation),r.a.createElement("li",null," Age : ",t.age," Years old. "),r.a.createElement("li",null," Occupation : ",t.occupation," "))))},S=function(e){var a=e.hero,t=a.details,n=t.story;return console.log(t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row hero-main"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:a.image,alt:a.name})),r.a.createElement("div",{className:"col-md-6 hero_box_container"},r.a.createElement(L,{body:a.name,title:"name"}),r.a.createElement(L,{body:a.role,title:"role"}),r.a.createElement(L,{body:t.difficulty,title:"difficulty"}),r.a.createElement(L,{body:n.catchPhrase,title:"catch Phrase"}))),r.a.createElement(j,{details:t}))},w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={hero:null},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/api/v1/heroes/"+a).then(function(a){e.setState({hero:a.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.hero;return e?r.a.createElement("div",{className:"hero-profile"},r.a.createElement(S,{hero:e})):r.a.createElement(p,{text:"Loading Profile Information"})}}]),a}(r.a.Component),x=t(54),M=t(55),_=function(){return r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(g.a,{to:"/"},"Home")),r.a.createElement(M.a,{path:"/:id",component:w}),r.a.createElement(M.a,{path:"/",exact:!0,component:O})))};document.addEventListener("DOMContentLoaded",function(){c.a.render(r.a.createElement(_,null),document.getElementById("root"))})}},[[24,2,1]]]);
//# sourceMappingURL=main.1b33f2a8.chunk.js.map