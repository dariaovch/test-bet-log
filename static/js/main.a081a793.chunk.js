(this["webpackJsonpbet-log"]=this["webpackJsonpbet-log"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),s=c.n(n),A=c(10),o=c.n(A),a=(c(18),c(19),c(3)),m=c(8),d=(c(20),c(12)),r=(c(21),c(7));var l=function(e){var t=e.item,c=s.a.useState(!1),n=Object(d.a)(c,2),A=n[0],o=n[1],a=Object(r.b)({from:{opacity:.1,scale:.8},to:{opacity:A?1:.1,scale:A?1:.8},config:{duration:250},onRest:function(){A||o(!1)}});return Object(i.jsxs)("li",{className:"bet-log__bet",children:[Object(i.jsxs)("div",{onClick:function(){o(!A)},className:t.isWinner?"bet-log__bet-item bet-log__bet-item_win":"bet-log__bet-item",children:[Object(i.jsxs)("div",{className:"bet-log__name-container",children:[Object(i.jsxs)("p",{className:"bet-log__id",children:["ID ",t.id]}),Object(i.jsxs)("div",{className:"bet-log__bet-container",children:[Object(i.jsx)("p",{className:"bet-log__name",children:t.name}),Object(i.jsx)("img",{className:"bet-log__status-icon",src:t.statusIcon})]})]}),Object(i.jsxs)("div",{className:t.isWinner?"bet-log__info-container bet-log__info-container_win":"bet-log__info-container",children:[Object(i.jsx)("p",{className:"bet-log__time",children:t.time}),Object(i.jsxs)("div",{className:"bet-log__amount-container",children:[Object(i.jsxs)("div",{className:"bet-log__sum-container",children:[Object(i.jsxs)("p",{className:"bet-log__sum-bet",children:["Bet: ",t.sum]}),Object(i.jsxs)("p",{className:"bet-log__sum-paid",children:["Paid: ",t.paid]})]}),Object(i.jsx)("p",{className:"bet-log__coef",children:t.coef})]})]})]}),A&&Object(i.jsx)(r.a.ul,{className:"bet-log__dropdown",style:a,children:t.events.map((function(e,t){return Object(i.jsxs)("li",{className:"bet-log__dropdown-item",children:[Object(i.jsx)("p",{className:"bet-log__time bet-log__time_drop",children:e.time}),Object(i.jsx)("p",{className:"bet-log__name bet-log__name_drop",children:e.event}),Object(i.jsx)("p",{className:"bet-log__sum-paid bet-log__sum-paid_drop",children:e.sum}),Object(i.jsx)("p",{className:"bet-log__coef bet-log__coef_drop",children:e.coef}),Object(i.jsx)("img",{className:"bet-log__status-icon bet-log__status-icon_drop",src:e.icon})]},t)}))})]})},u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAChSURBVHgBlVGBDYNACHw6gSP8CD+Cm9ROUjdoOoHdoCN0hW6gG+gGeEQ0iK/GSwgBjuc5KDgwcwGXNOyIqAs5gBhhP95CctGTE6znfUgt2ZdbPodwiht6SlgM+3jA3sqppOF+RMbSH/he4zKYRWu3S6VffloBJPHVoDEC5MhLQ20SjVHOk6epsjmvJZWJL86rFK/f4eqlyeuoxZnwh6yDrY9EY2RxXHGAsAAAAABJRU5ErkJggg==",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEQSURBVHgBjVIxTgMxENzdC8hKwz3h0iAhUeSaSHS5BglR5QXAD3gCP+AJiBdQgmiSDgkJcVRIae5+gKsI4bMXb3RGvlMiMo29M7O7ttcIPTy+fGYwgGwdNFCfnRzVsY5h8/y6HDuCWwCedkvggo29CokYzEw8Z4C0JbWscdw4U5xPjkuUI+AezT2fhZrWmZxsoj1fRUfRq2Q1ItiHaWwWqMHwC3qQbqpR14ScXMDOwDFtk76VknvUHTvSgU9g3Tc3bC9n+UizcYUPy1gjZvfRT/DczdPb8q6dR/rHO3uPD+9VOrQ/FUfCFtTSkaQ1OizC22+CaORwJsNbX/p0clg643KZ6gb7QgqKp03u4r+/9Avwo222bqm75AAAAABJRU5ErkJggg==",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgBhVJBagJBEKxuJ2FvyRPWS0DIQSEIOWW9BCSX+AKTH+QJ+UHyg+ArDLm4t0CIoCfB0z5hTyLs7rTTqwsqw26dprurumumh3CG6e8qhEFYBjmS4X0nOa5Tdfj5W3ct4wOQ6LQFxZIVr5WQKrKwzAS4hgeOlOY2Gzz1bxekFuiCZy4fogYq2rQ2bcYloiayQqcHefBmSFrjMgQSETvxdice75tS1xzNjId3nXefYPrvbINDJ7xyAkkPM6Pv+foLXj/yUB2Ns7F0yudypMgL6u5hiwlvTfCpL4BmJCgQ86jXTsnSoE6kNbY00uWxJh77Nwub2Z5u1UOPtaFyDuJTNP2lHe4kYLzbV6qpAAAAAElFTkSuQmCC",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE/SURBVHgBfVIxUsJQEN3dH0bKeIN0jh2FjZXYaQWeQLmBnMDxBMIJ1BNEK7CDykIcfsdIlSOEVsw+N0EzgRmyTWbf7r59+/KZdiKez8OmNrusHIIQ5hhYPK/VX54eJ1xtHs+Wj1a+oT3BzAPZhnRFNaFZdsi74Oh9EaEhLYa2ClbiFILUmn3gDjrFwOhj0WZxHQIiawk3+8lDs1f6oYQbEhuSEyT89rl8AHBL+4U/gbJpcTwkDay5S3UBtJ26oQpiOzgUQHtKGFrJm750o6b4eqvdi/LVerNpYlaf83j2BUtfjGlqvvuClCVnioilY1n74uSoNCcAa48hd8bQZeK/ewvGfDQxon5VYcDkzkxS32xM/0EHl2achSQUWf3aoEE5QNCVEMe2vmRRhm2x3MSatc9bplHNz6JvmuTvpzrwC+wak1u+0QjrAAAAAElFTkSuQmCC",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAYAAABv7tTEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgBnZEhDsJAEEVnJhiC6RGKapAkNbjWAQY4GdxkcYCqRAAprgTVI+Cb7rBsUrJpZyv6xeTn/fkZMQiCLo/3npm3yziaSnzkQpXnwbieKBMkffxfOl2LEGvKADh0CxJHG9yKhJAUAwRugVmnEreXEClj6MrH6Tc0wM6c/LRDH7eldRwddaXnxpZu6OPUmNViVnKlU2Of7oLEEQSd76+DiTbtPzUchugLzYZVKqiV/MoAAAAASUVORK5CYII=",j=[{id:"00000",time:"18:53:36",name:"Offside or Free Kick or Goal",sum:"100$",paid:"2.200$",statusIcon:u,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00001",time:"18:53:36",name:"Goal or Goal Kick",sum:"100$",paid:"2.200$",statusIcon:b,icon:"fas fa-clock",coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00002",time:"18:53:36",name:"Goal",sum:"100$",paid:"2.200$",statusIcon:g,coef:2.7,isWinner:!0,events:[{event:"Bet Win",time:"18:36",sum:"+2 500$",icon:g,coef:25.5},{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:3.54},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:3.54}]},{id:"00003",time:"18:53:36",name:"Offside",sum:"100$",paid:"2.200$",statusIcon:v,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00004",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00005",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00006",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00007",time:"18:53:36",name:"Goal",sum:"100$",paid:"2.200$",statusIcon:g,coef:2.7,isWinner:!0,events:[{event:"Bet Win",time:"18:36",sum:"+2 500$",icon:g,coef:25.5},{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:3.54},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:3.54}]},{id:"00008",time:"18:53:36",name:"Offside",sum:"100$",paid:"2.200$",statusIcon:v,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00009",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00010",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00011",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00012",time:"18:53:36",name:"Goal",sum:"100$",paid:"2.200$",statusIcon:g,coef:2.7,events:[{event:"Bet Win",time:"18:36",sum:"+2 500$",icon:g,coef:25.5},{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:3.54},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:3.54}]},{id:"00013",time:"18:53:36",name:"Offside",sum:"100$",paid:"2.200$",statusIcon:v,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00014",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]},{id:"00015",time:"18:53:36",name:"Free Kick or Corner Kick",sum:"100$",paid:"2.200$",statusIcon:f,coef:2.7,events:[{event:"Bet Accepted",time:"18:36",sum:"0",icon:u,coef:2.7},{event:"Bet Received",time:"18:36",sum:"-100$",icon:b,coef:2.7}]}],p=c(11);var B=function(){var e=function(e){var t=e.style,c=Object(m.a)(e,["style"]);return Object(i.jsx)("div",Object(a.a)({className:"bet-log__scroll-box",style:Object(a.a)(Object(a.a)({},t),{},{overflowX:"hidden"})},c))},t=function(e){var t=e.style,c=Object(m.a)(e,["style"]);return Object(i.jsx)("div",Object(a.a)({className:"bet-log__scroll-thumb",style:Object(a.a)({},t)},c))},c=function(c){return Object(i.jsx)(p.Scrollbars,Object(a.a)({renderThumbVertical:t,renderView:e},c))};return Object(i.jsx)("div",{className:"bet-log",children:Object(i.jsxs)(c,{children:[Object(i.jsx)("h2",{className:"bet-log__heading",children:"Bets"}),Object(i.jsx)("ul",{className:"bet-log__list",children:j.map((function(e){return Object(i.jsx)(l,{item:e},e.id)}))})]})})};var C=function(){return Object(i.jsx)("div",{className:"page",children:Object(i.jsx)("div",{className:"page__container",children:Object(i.jsx)(B,{})})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,A=t.getTTFB;c(e),i(e),n(e),s(e),A(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),O()}},[[42,1,2]]]);
//# sourceMappingURL=main.a081a793.chunk.js.map