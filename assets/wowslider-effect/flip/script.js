// flip
// options.rows - row count <height, >0, height/30 by default
// options.cols - cols count <width, >0, width/90 by default
// options.type - effect type (0- parallel lines, 1- snake from center, random by default)
// cloned from http://www.idangero.us/cs/	"2d multi" 0,1,13,14	
function ws_flip(d,b,h){function k(l,c,e){l[e]||(l[e]=[]);l[e][l[e].length]=c}function x(){for(var l=q.width(),b=q.height(),e=0;e<c*n;e++){var d=e%c,a=Math.floor(e/c),h=Math.round(l*d/c),g=Math.round(b*a/n),d=Math.round(l*(d+1)/c)-h,a=Math.round(b*(a+1)/n)-g;f(y[e]).css({width:d+"px",height:a+"px",left:h+"px",top:g+"px"}).data({width:d,height:a})}}function D(b,c,e){d.support.transform?b.animate({scaleX:.8,scaleY:-1},{easing:"easeInOutCubic",duration:c,complete:e}):b.each(function(b,a){a=f(a);a.animate({width:.8*
a.data("width")+"px",height:0},{easing:"easeInOutCubic",duration:c,complete:e})})}function E(b,c,e){d.support.transform?b.animate({scaleX:1,scaleY:1},{easing:"easeInOutCubic",duration:c,complete:function(){b.css({"-o-transform":"none"});e&&e()}}):b.each(function(b,a){a=f(a);a.animate({width:a.data("width")+"px",height:a.data("height")+"px"},{easing:"easeInOutCubic",duration:c,complete:e})})}for(var f=jQuery,F=f(this),c=d.cols||Math.round(d.width/90),n=d.rows||Math.round(d.height/30),q=f("<div>").addClass("ws_effect ws_flip").css({position:"absolute",
left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(h),y=[],G=[.7*c,2.5*c],t=[[],[]],g=0;g<c*n;g++){var z=g%c,A=Math.floor(g/c),p=y[g]=document.createElement("div");f(p).css({position:"absolute",overflow:"hidden"}).append(f("<img>").css({position:"absolute",top:0,left:0})).appendTo(q);k(t[0],p,2*A+z);k(t[1],p,Math.abs(g-(c*n>>1)))}var u;this.go=function(g,k){function e(){r<m.length&&D(f(m[r]),v);var a=r-w;if(0<=a&&a<m.length){var c=f(m[a]),d;a>=m.length-1&&(d=function(){u&&
(B.find("img").css({visibility:"visible"}),F.trigger("effectEnd"),q.hide(),u=0)});E(c,v,d);c.find("img").attr("src",b.get(g).src)}r++;r-w<m.length&&setTimeout(e,C)}if(u)return-1;u=1;x();var p="type"in d?d.type:Math.round(Math.random()*(t.length-1)),a=f(b.get(k)),a={width:a.width(),height:a.height(),marginTop:parseFloat(a.css("marginTop")),marginLeft:parseFloat(a.css("marginLeft"))},z=h.width()/c,A=h.height()/n;f(y).stop(1,1).css({opacity:1,"z-index":3}).find("img").attr("src",b.get(k).src).css(a).each(function(a){var b=
a%c;a=Math.floor(a/c);f(this).css({left:-z*b,top:-A*a})});q.show();var B=f(".ws_list",h);B.find("img").css({visibility:"hidden"});var m=t[p],w=Math.round(G[p]),C=.9*d.duration/(m.length+2*w),v=C*w;d.support.transform&&(v/=2);var r=0;e()}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(d,b,h,k,x){return 1>(b/=x/2)?k/2*b*b*b+h:k/2*((b-=2)*b*b+2)+h}});
