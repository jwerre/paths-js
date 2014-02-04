(function(){var e=function(){var e,t,n,r,i,s,o,u,a,f;return a=function(e){return e.reduce(function(e,t){return e+t},0)},n=function(e){return e.reduce(function(e,t){return Math.min(e,t)})},t=function(e){return e.reduce(function(e,t){return Math.max(e,t)})},s=function(e,t){var n,r,i,s;return n=e[0],r=e[1],i=t[0],s=t[1],[n+i,r+s]},r=function(e,t){var n,r,i,s;return n=e[0],r=e[1],i=t[0],s=t[1],[n-i,r-s]},f=function(e,t){var n,r;return n=t[0],r=t[1],[e*n,e*r]},e=function(e){return f(1/e.length,e.reduce(s))},i=function(e,t){return f(e,[Math.sin(t),-Math.cos(t)])},u=function(e){return Math.floor(Math.random()*e)},o=function(){return"rgb("+u(256)+", "+u(256)+", "+u(256)+")"},{sum:a,min:n,max:t,plus:s,minus:r,times:f,average:e,on_circle:i,random_int:u,random_colors:o}}(),t=function(){return function(e,t){var n,r,i,s;return n=e[0],r=e[1],i=t[0],s=t[1],function(e){return i+(s-i)*(e-n)/(r-n)}}}(),n=function(){var e;return e=function(t){var n,r,i,s,o,u;return n=t||[],o=function(e,t){var n;return n=e.slice(0,e.length),n.push(t),n},s=function(e){var t,n;return t=e.command,n=e.params,""+t+" "+n.join(" ")},i=function(e,t){var n,r,i,s;n=e.command,r=e.params,i=t[0],s=t[1];switch(n){case"M":return[r[0],r[1]];case"L":return[r[0],r[1]];case"H":return[r[0],s];case"V":return[i,r[0]];case"Z":return null;case"C":return[r[4],r[5]];case"S":return[r[2],r[3]];case"Q":return[r[2],r[3]];case"T":return[r[0],r[1]];case"A":return[r[5],r[6]]}},u=function(e,t){return function(n){var r;return r=typeof n=="object"?e.map(function(e){return n[e]}):arguments,t.apply(null,r)}},r=function(t){return e(o(n,t))},{moveto:u(["x","y"],function(e,t){return r({command:"M",params:[e,t]})}),lineto:u(["x","y"],function(e,t){return r({command:"L",params:[e,t]})}),hlineto:u(["x"],function(e){return r({command:"H",params:[e]})}),vlineto:u(["y"],function(e){return r({command:"V",params:[e]})}),closepath:function(){return r({command:"Z",params:[]})},curveto:u(["x1","y1","x2","y2","x","y"],function(e,t,n,i,s,o){return r({command:"C",params:[e,t,n,i,s,o]})}),smoothcurveto:u(["x2","y2","x","y"],function(e,t,n,i){return r({command:"S",params:[e,t,n,i]})}),qcurveto:u(["x1","y1","x","y"],function(e,t,n,i){return r({command:"Q",params:[e,t,n,i]})}),smoothqcurveto:u(["x","y"],function(e,t){return r({command:"T",params:[e,t]})}),arc:u(["rx","ry","xrot","large_arc_flag","sweep_flag","x","y"],function(e,t,n,i,s,o,u){return r({command:"A",params:[e,t,n,i,s,o,u]})}),print:function(){return n.map(s).join(" ")},points:function(){var e,t,r,s,o,u;r=[],t=[0,0],s=function(){var n;n=i(e,t),t=n;if(n)return r.push(n)};for(o=0,u=n.length;o<u;o++)e=n[o],s();return r}}},function(){return e()}}(),r=function(e,t){return function(n){var r,i,s,o,u,a,f;return u=n.points,r=n.closed,s=u.length,i=u[0],a=u.slice(1,+s+1||9e9),o=a.reduce(function(e,t){return e.lineto.apply(e,t)},(f=e()).moveto.apply(f,i)),{path:r?o.closepath():o,centroid:t.average(u)}}}(n,e),i=function(e){return function(t){var n,r,i,s;return r=t.left,i=t.right,s=t.top,n=t.bottom,e({points:[[i,s],[i,n],[r,n],[r,s]],closed:!0})}}(r),s=function(e,t,n){return function(r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,M,_,D,P,H,B,j,F,I;l=r.data,i=r.accessor,M=r.width,m=r.height,v=r.gutter,o=r.colors,i==null&&(i=function(e){return e}),v==null&&(v=0),o==null&&(o=e.random_colors),d=[],S=0,E=0,u=[];for(g=_=0,B=l.length;_<B;g=++_){f=l[g],u[g]==null&&(u[g]=o(g));for(y=D=0,j=f.length;D<j;y=++D)c=f[y],L=-i(c),-L<S&&(S=-L),-L>E&&(E=-L),d[y]==null&&(d[y]=[]),d[y][g]=L}x=d.length,p=(M-v*(x-1))/x,a=[],N=t([-S,-E],[m,0]);for(g=P=0,F=d.length;P<F;g=++P){h=d[g],A=p/h.length,C=(p+v)*g;for(y=H=0,I=h.length;H<I;y=++H)c=h[y],b=C+A*y,T=b+A,s=N(0),k=N(c),w=n({left:b,right:T,bottom:s,top:k}),a.push({line:w,color:u[y]})}return{curves:a,scale:N}}}(e,t,i),o=function(e,t){var n;return n=function(e,n){return t.minus(t.times(2,e),n)},function(r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;p=r.points,d=r.tension,d==null&&(d=.3),u=[],f=p.length;for(a=v=1,y=f-1;1<=y?v<=y:v>=y;a=1<=y?++v:--v)u.push(t.times(d,t.minus(p[a],p[a-1])));o=[t.plus(p[0],n(u[0],u[1]))];for(a=m=1,b=f-2;1<=b?m<=b:m>=b;a=1<=b?++m:--m)o.push(t.minus(p[a],t.average([u[a],u[a-1]])));return o.push(t.minus(p[f-1],n(u[f-2],u[f-3]))),i=o[0],s=o[1],l=p[0],c=p[1],h=(w=e()).moveto.apply(w,l).curveto(i[0],i[1],s[0],s[1],c[0],c[1]),{path:function(){S=[];for(var e=2,t=f-1;2<=t?e<=t:e>=t;2<=t?e++:e--)S.push(e);return S}.apply(this).reduce(function(e,t){var n,r;return n=o[t],r=p[t],e.smoothcurveto(n[0],n[1],r[0],r[1])},h),centroid:t.average(p)}}}(n,e),u=[].slice,a=function(e,t){return function(n){var r,i,s,o,a,f,l,c,h,p,d,v,m,g,y,b,w;return a=n.center,v=n.r,r=n.R,m=n.start,c=n.end,i=t.plus(a,t.on_circle(r,m)),s=t.plus(a,t.on_circle(r,c)),o=t.plus(a,t.on_circle(v,c)),l=t.plus(a,t.on_circle(v,m)),d=(g=(y=(b=(w=e()).moveto.apply(w,i)).arc.apply(b,[r,r,0,0,1].concat(u.call(s)))).lineto.apply(y,o)).arc.apply(g,[v,v,0,0,0].concat(u.call(l))).closepath(),h=(m+c)/2,p=(v+r)/2,f=t.plus(a,t.on_circle(p,h)),{path:d,centroid:f}}}(n,e),f=function(e,t,n){return function(r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;f=r.data,s=r.accessor,o=r.center,h=r.r,i=r.R,u=r.colors,u==null&&(u=t.random_colors),g=function(){var e,t,n;n=[];for(e=0,t=f.length;e<t;e++)c=f[e],n.push(s(c));return n}(),p=t.sum(g),d=e([0,p],[0,2*Math.PI]),a=[],v=0;for(l=y=0,b=f.length;y<b;l=++y)c=f[l],m=g[l],a.push({item:c,color:u(l),sector:n({center:o,r:h,R:i,start:d(v),end:d(v+m)})}),v+=m;return{curves:a}}}(t,e,a),l=function(e,t){return function(n){var r,i,s,o;return i=n.center,o=n.radii,r=2*Math.PI/o.length,s=o.map(function(e,n){return t.plus(i,t.on_circle(e,n*r))}),e({points:s,closed:!0})}}(r,e),c=function(e,t){var n,r,i;return n=function(e){var t,n,r,i,s,o,u,a,f,l;n=[],r=function(){var t,n,r;r=[];for(t=0,n=e.length;t<n;t++)i=e[t],r.push(Object.keys(i));return r}();for(o=0,a=e.length;o<a;o++){s=e[o],l=Object.keys(s);for(u=0,f=l.length;u<f;u++)t=l[u],n.indexOf(t)===-1&&n.push(t)}return n},i=function(e){var t,n,r,i,s;t={},r=function(e){return t[e]=function(t){return t[e]}};for(i=0,s=e.length;i<s;i++)n=e[i],r(n);return t},r=function(e,n){var r,i;return r=Object.keys(n),i=e.map(function(e){var i;return i=r.map(function(t){return n[t](e)}),t.max(i)}),t.max(i)},function(s){var o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;return l=s.data,o=s.accessor,a=s.center,v=s.r,p=s.max,g=s.rings,f=s.colors,g==null&&(g=3),f==null&&(f=t.random_colors),o==null&&(o=i(n(l))),h=Object.keys(o),y=h.length,u=2*Math.PI/y,c=-1,p==null&&(p=r(l,o)),m=function(){w=[];for(var e=1;1<=g?e<=g:e>=g;1<=g?e++:e--)w.push(e);return w}.apply(this).map(function(t){var n,r,i,s;return n=v*t/g,e({center:a,radii:function(){s=[];for(var e=0,t=y-1;0<=t?e<=t:e>=t;0<=t?e++:e--)s.push(e);return s}.apply(this).map(function(e){return n})})}),d=l.map(function(t){return c+=1,{polygon:e({center:a,radii:h.map(function(e){return v*o[e](t)/p})}),item:t,color:f(c)}}),{curves:d,rings:m}}}(l,e),h=function(e,t){var n;return n=function(e,n){var r,i,s,o,u;return s=function(){var t,i,s;s=[];for(t=0,i=e.length;t<i;t++)r=e[t],s.push(n(r));return s}(),o=s.sort(function(e,t){var n,r,i,s;return n=e[0],r=e[1],i=t[0],s=t[1],n-i}),u=o.map(function(e){return e[1]}),i=o.length,{points:o,xmin:o[0][0],xmax:o[i-1][0],ymin:t.min(u),ymax:t.max(u)}},function(r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E;return a=r.data,d=r.xaccessor,y=r.yaccessor,p=r.width,c=r.height,u=r.colors,o=r.closed,d==null&&(d=function(e){var t,n;return t=e[0],n=e[1],t}),y==null&&(y=function(e){var t,n;return t=e[0],n=e[1],n}),u==null&&(u=t.random_colors),l=function(e){return[d(e),y(e)]},i=function(){var e,t,r;r=[];for(e=0,t=a.length;e<t;e++)f=a[e],r.push(n(f,l));return r}(),m=t.min(i.map(function(e){return e.xmin})),v=t.max(i.map(function(e){return e.xmax})),w=t.min(i.map(function(e){return e.ymin})),b=t.max(i.map(function(e){return e.ymax})),o&&(w=Math.min(w,0),b=Math.max(b,0)),s=o?0:w,g=e([m,v],[0,p]),E=e([w,b],[c,0]),h=function(e){var t,n;return t=e[0],n=e[1],[g(t),E(n)]},{arranged:i,scale:h,xscale:g,yscale:E,base:s,colors:u}}}(t,e),p=function(e,t,n){return function(r){var i,s,o,u,a,f,l,c,h;return h=n(r),i=h.arranged,f=h.scale,l=h.xscale,c=h.yscale,o=h.colors,s=h.base,u=-1,a=i.map(function(n){var i,a,l,c,h,p,d,v;return l=n.points,p=n.xmin,h=n.xmax,c=l.map(f),u+=1,a=e({points:c}),i={path:(d=(v=a.path).lineto.apply(v,f([h,s]))).lineto.apply(d,f([p,s])).closepath(),centroid:t.average([a.centroid,f([p,s]),f([h,s])])},{item:r.data[u],line:a,area:i,color:o(u)}}),{curves:a,xscale:l,yscale:c}}}(o,e,h),d=function(e,t){return function(n){var r,i,s,o,u,a,f,l,c;return c=t(n),r=c.arranged,a=c.scale,f=c.xscale,l=c.yscale,s=c.colors,i=c.base,o=-1,u=r.map(function(t){var r,u,f,l,c;return r=t.points,c=t.xmin,l=t.xmax,u=r.map(a),r.push([l,i]),r.push([c,i]),f=r.map(a),o+=1,{item:n.data[o],line:e({points:u,closed:!1}),area:e({points:f,closed:!0}),color:s(o)}}),{curves:u,xscale:f,yscale:l}}}(r,h),v=function(e,t,n,r,i,s,o,u,a,f,l,c,h){return window.paths={Bar:e,Bezier:t,Linear:n,Ops:r,Path:i,Pie:s,Polygon:o,Radar:u,Rectangle:a,Sector:f,SemiRegularPolygon:l,SmoothLine:c,Stock:h}}(s,o,t,e,n,f,r,c,i,a,l,p,d)})();