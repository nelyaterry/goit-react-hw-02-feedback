(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,o,r,i,d=n(1),b=n.n(d),s=n(5),l=n.n(s),u=(n(17),n(6)),j=n(7),x=n(8),p=n(11),h=n(10),g=n(2),O=n(3),k=O.a.div(a||(a=Object(g.a)(["\n    width: 600px;\n    background-color: aquamarine;\n    text-align: left;\n    padding: 12px;\n"]))),f=O.a.h2(c||(c=Object(g.a)(["\n    color: black;\n"]))),v=O.a.button(o||(o=Object(g.a)(["\n    font-size: 18px;\n    min-height: 20px;\n    margin-right: 10px;\n    padding: 4px 12px;\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;\n    background-color: rgba(228, 228, 228, 0.5);\n"]))),m=O.a.ul(r||(r=Object(g.a)(["\ndisplay: inline-block;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  /* width: 50%; */\n"]))),F=O.a.li(i||(i=Object(g.a)(["\n  /* display: flex; */\n  align-items: center;\n  min-height: 20px;\n  margin-bottom: 10px;\n  padding: 12px 24px;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n"]))),w=n(0),y=function(e){var t=e.title,n=e.children;return Object(w.jsxs)(w.Fragment,{children:[t&&Object(w.jsx)(f,{children:t}),n]})},P=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positiveFeedback;return Object(w.jsxs)(m,{children:[Object(w.jsxs)(F,{children:["Good: ",t]}),Object(w.jsxs)(F,{children:["Neutral: ",n]}),Object(w.jsxs)(F,{children:["Bad: ",a]}),Object(w.jsxs)(F,{children:["Total: ",c]}),Object(w.jsxs)(F,{children:["Positive feedback: ",o,"%"]})]})},T=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(w.jsx)(v,{onClick:function(){return n(e)},children:e},e)}))},L=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(w.jsxs)(k,{children:[Object(w.jsx)(y,{title:"Please leave feedback"}),Object(w.jsx)(T,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback}),Object(w.jsx)(y,{}),this.countTotalFeedback()>0?Object(w.jsx)(y,{title:"Statistics",children:Object(w.jsx)(P,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()})}):Object(w.jsx)(y,{title:"No feedback given"})]})}}]),n}(d.Component),S=L;function B(){return Object(w.jsx)(S,{})}l.a.render(Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6d0320b9.chunk.js.map