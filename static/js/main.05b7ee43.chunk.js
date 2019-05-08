(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(15),a(1)),i=a(2),l=a(4),u=a(3),h=a(5),m=a(8),d=a.n(m),p=(a(16),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setPlay=function(){a.setState({playing:!0})},a.setNoPlay=function(){a.setState({playing:!1})},a.checkRecord=function(e){e>a.state.record&&(a.setState({record:e}),document.cookie="record="+e)};var n=function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}("record");return null==n&&(n=0),a.state={playing:!1,record:n},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.state.playing?r.a.createElement(f,{checkRecord:this.checkRecord,setNoPlay:this.setNoPlay}):r.a.createElement(v,{record:this.state.record,setPlay:this.setPlay}),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pokemon Cries Challenge"),r.a.createElement("div",{id:"View"},e))}}]),t}(r.a.Component)),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"menu"},r.a.createElement("p",null,"Guess the Pokemon by its cry!"),r.a.createElement("p",null,"Your record is ",this.props.record,"."),r.a.createElement("button",{onClick:this.props.setPlay},"Start!"))}}]),t}(r.a.Component),f=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).generateChoices=function(){for(var e=[];e.length<3;){var t=Math.floor(151*Math.random())+1;e.includes(t)||e.push(t)}return e},a.setChoices=function(){var e=a.generateChoices();a.setState({choices:e,answer:e[Math.floor(3*Math.random())]})},a.checkAnswer=function(e){parseInt(e.target.id)===a.state.answer?(a.setChoices(),a.setState({score:a.state.score+1})):a.setState({gameOver:!0})},a.createImages=function(){return a.state.choices.map(function(e,t){var n="".concat("/pokemon-cries","/sprites/").concat(e,".png");return r.a.createElement("img",{id:e,className:"choices",key:t,src:n,alt:"random pokemon",onClick:a.checkAnswer})})},a.playAudio=function(){a.refs.cry.play()},a.restart=function(){a.setChoices(),a.setState({gameOver:!1,score:0})};var n=a.generateChoices();return a.state={score:0,choices:n,answer:n[Math.floor(3*Math.random())],gameOver:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="".concat("/pokemon-cries","/cries/").concat(this.state.answer,".wav");return this.state.gameOver?r.a.createElement(k,{score:this.state.score,checkRecord:this.props.checkRecord,restart:this.restart}):r.a.createElement("div",{className:"play"},r.a.createElement("audio",{id:"cry",ref:"cry",src:e}),r.a.createElement("div",{id:"speaker"},r.a.createElement("img",{src:d.a,alt:"answer",onClick:this.playAudio})),r.a.createElement("div",{id:"choices"},this.createImages()),r.a.createElement("div",null,r.a.createElement("p",{id:"score"},this.state.score)),r.a.createElement("button",{onClick:this.props.setNoPlay},"Quit"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.checkRecord(this.props.score)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Game Over!"),r.a.createElement("p",null,"You got ",this.props.score," points.")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.restart},"Restart")))}}]),t}(r.a.Component);var y=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/speaker.c74a590b.svg"},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.05b7ee43.chunk.js.map