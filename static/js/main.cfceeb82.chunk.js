(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),s=n.n(r),l=n(3),c=n.n(l),i=n(6),u=n(7),m=n(8),d=n(10),h=n(9),b=n(1),g=n(11),p=n(2),f=(n(19),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(e){var t=e.goods;return Object(p.a)(t).reverse()},E=function(e){var t=e.goods;return Object(p.a)(t).sort()},y=function(e){var t=e.goods;return Object(p.a)(t).sort(function(e,t){return e.length-t.length})},C=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).loadGoods=Object(i.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isLoading:!0}),e.setState(function(e){return{loadGoods:!0,isLoading:!1}});case 2:case"end":return t.stop()}},t)})),e.handleClickReverse=function(){e.setState(function(e){return{goods:v(e)}})},e.handleClickAlphabetically=function(){e.setState(function(e){return{goods:E(e)}})},e.handleReset=function(){e.setState({goods:[].concat(f),wordLength:1})},e.handleSortByLength=function(){e.setState(function(e){return{goods:y(e)}})},e.handleChange=function(t){e.setState({wordLength:t.target.value})},e.state={goods:[].concat(f),loadGoods:!1,isLoading:!1,wordLength:1,direction:1},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.wordLength,a=t.filter(function(e){return e.length>=n}).map(function(e){return o.a.createElement("li",{key:e.toString()},e)});return this.state.loadGoods?(console.log(this.state.goods),o.a.createElement("div",{className:"goods"},o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5 mr-3",onClick:this.handleClickReverse},"Reverse"),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5 mr-3",onClick:this.handleClickAlphabetically},"Alphabetically"),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5 mr-3",onClick:this.handleReset},"Resset"),o.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5 mr-3",onClick:this.handleSortByLength},"SortByLength"),o.a.createElement("label",{className:"btn btn-warning"},"length",o.a.createElement("select",{value:this.state.wordLength,onChange:this.handleChange,name:"length",className:"form-control form-control-sm"},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"))),o.a.createElement("h1",null,"Goods 1"),o.a.createElement("ul",{className:"goods__list"},a))):o.a.createElement("button",{type:"submit",className:"btn btn-success mt-5",onClick:this.loadGoods,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"Load")}}]),t}(a.Component);s.a.render(o.a.createElement(C,{test:123}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cfceeb82.chunk.js.map