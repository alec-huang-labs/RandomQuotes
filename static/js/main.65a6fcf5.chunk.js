(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(13),a(4)),s=a(5),u=a(1),l=a(7),d=a(6),h=(a(14),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={randomIndex:"",inputColors:"",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie cursus tortor, non fringilla nisi porttitor sit amet.",author:"-Richard McClintock"},n.next=n.next.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"next",value:function(){this.setState({randomIndex:Math.floor(10*Math.random())})}},{key:"componentDidMount",value:function(){var e=this;document.getElementById("new-quote").onclick=function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){var a=Math.floor(Math.random()*t.quotes.length);e.setState({message:t.quotes[a].quote,author:t.quotes[a].author})}))}}},{key:"render",value:function(){var e=["DarkAquaMarine","LightSlateGray","IndianRed","Tan","SteelBlue","CadetBlue","rosybrown","thistle","seagreen","olivedrap"][this.state.randomIndex],t={backgroundColor:e},a={color:e};return o.a.createElement("div",{id:"backdrop",style:t},o.a.createElement("div",{id:"quote-box"},o.a.createElement("p",{id:"text",style:a},this.state.message),o.a.createElement("p",{id:"author",style:a},this.state.author),o.a.createElement("div",{id:"buttons"},o.a.createElement("button",{style:t},o.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/share?ref_src=twsrc%5Etfw",target:"_blank"},o.a.createElement("i",{id:"birdie",class:"fa fa-twitter"}))),o.a.createElement("button",{onClick:this.next,style:t},o.a.createElement("a",{id:"new-quote"},"New Quote")))),o.a.createElement("a",{id:"github",href:"https://github.com/alec-huang-labs",target:"_blank"},o.a.createElement("i",{class:"fa fa-github"})))}}]),a}(o.a.Component));i.a.render(o.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.65a6fcf5.chunk.js.map