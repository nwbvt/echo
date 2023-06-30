goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_72854 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_72854(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_72856 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_72856(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71947 = coll;
var G__71948 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71947,G__71948) : shadow.dom.lazy_native_coll_seq.call(null,G__71947,G__71948));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__71965 = arguments.length;
switch (G__71965) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__71971 = arguments.length;
switch (G__71971) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__71981 = arguments.length;
switch (G__71981) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__71995 = arguments.length;
switch (G__71995) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__72013 = arguments.length;
switch (G__72013) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__72027 = arguments.length;
switch (G__72027) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e72039){if((e72039 instanceof Object)){
var e = e72039;
return console.log("didnt support attachEvent",el,e);
} else {
throw e72039;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__72058 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__72059 = null;
var count__72060 = (0);
var i__72061 = (0);
while(true){
if((i__72061 < count__72060)){
var el = chunk__72059.cljs$core$IIndexed$_nth$arity$2(null,i__72061);
var handler_72885__$1 = ((function (seq__72058,chunk__72059,count__72060,i__72061,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72058,chunk__72059,count__72060,i__72061,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72885__$1);


var G__72886 = seq__72058;
var G__72887 = chunk__72059;
var G__72888 = count__72060;
var G__72889 = (i__72061 + (1));
seq__72058 = G__72886;
chunk__72059 = G__72887;
count__72060 = G__72888;
i__72061 = G__72889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72058);
if(temp__5804__auto__){
var seq__72058__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72058__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72058__$1);
var G__72890 = cljs.core.chunk_rest(seq__72058__$1);
var G__72891 = c__5568__auto__;
var G__72892 = cljs.core.count(c__5568__auto__);
var G__72893 = (0);
seq__72058 = G__72890;
chunk__72059 = G__72891;
count__72060 = G__72892;
i__72061 = G__72893;
continue;
} else {
var el = cljs.core.first(seq__72058__$1);
var handler_72894__$1 = ((function (seq__72058,chunk__72059,count__72060,i__72061,el,seq__72058__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72058,chunk__72059,count__72060,i__72061,el,seq__72058__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72894__$1);


var G__72895 = cljs.core.next(seq__72058__$1);
var G__72896 = null;
var G__72897 = (0);
var G__72898 = (0);
seq__72058 = G__72895;
chunk__72059 = G__72896;
count__72060 = G__72897;
i__72061 = G__72898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__72083 = arguments.length;
switch (G__72083) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__72099 = cljs.core.seq(events);
var chunk__72100 = null;
var count__72101 = (0);
var i__72102 = (0);
while(true){
if((i__72102 < count__72101)){
var vec__72113 = chunk__72100.cljs$core$IIndexed$_nth$arity$2(null,i__72102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72113,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72904 = seq__72099;
var G__72905 = chunk__72100;
var G__72906 = count__72101;
var G__72907 = (i__72102 + (1));
seq__72099 = G__72904;
chunk__72100 = G__72905;
count__72101 = G__72906;
i__72102 = G__72907;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72099);
if(temp__5804__auto__){
var seq__72099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72099__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72099__$1);
var G__72908 = cljs.core.chunk_rest(seq__72099__$1);
var G__72909 = c__5568__auto__;
var G__72910 = cljs.core.count(c__5568__auto__);
var G__72911 = (0);
seq__72099 = G__72908;
chunk__72100 = G__72909;
count__72101 = G__72910;
i__72102 = G__72911;
continue;
} else {
var vec__72123 = cljs.core.first(seq__72099__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72123,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72915 = cljs.core.next(seq__72099__$1);
var G__72916 = null;
var G__72918 = (0);
var G__72919 = (0);
seq__72099 = G__72915;
chunk__72100 = G__72916;
count__72101 = G__72918;
i__72102 = G__72919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__72132 = cljs.core.seq(styles);
var chunk__72133 = null;
var count__72134 = (0);
var i__72135 = (0);
while(true){
if((i__72135 < count__72134)){
var vec__72156 = chunk__72133.cljs$core$IIndexed$_nth$arity$2(null,i__72135);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72156,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72920 = seq__72132;
var G__72921 = chunk__72133;
var G__72922 = count__72134;
var G__72923 = (i__72135 + (1));
seq__72132 = G__72920;
chunk__72133 = G__72921;
count__72134 = G__72922;
i__72135 = G__72923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72132);
if(temp__5804__auto__){
var seq__72132__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72132__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72132__$1);
var G__72924 = cljs.core.chunk_rest(seq__72132__$1);
var G__72925 = c__5568__auto__;
var G__72926 = cljs.core.count(c__5568__auto__);
var G__72927 = (0);
seq__72132 = G__72924;
chunk__72133 = G__72925;
count__72134 = G__72926;
i__72135 = G__72927;
continue;
} else {
var vec__72163 = cljs.core.first(seq__72132__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72163,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72928 = cljs.core.next(seq__72132__$1);
var G__72930 = null;
var G__72931 = (0);
var G__72932 = (0);
seq__72132 = G__72928;
chunk__72133 = G__72930;
count__72134 = G__72931;
i__72135 = G__72932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__72176_72934 = key;
var G__72176_72935__$1 = (((G__72176_72934 instanceof cljs.core.Keyword))?G__72176_72934.fqn:null);
switch (G__72176_72935__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_72942 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_72942,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_72942,"aria-");
}
})())){
el.setAttribute(ks_72942,value);
} else {
(el[ks_72942] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__72214){
var map__72215 = p__72214;
var map__72215__$1 = cljs.core.__destructure_map(map__72215);
var props = map__72215__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72215__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__72216 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72216,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72216,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72216,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__72219 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__72219,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__72219;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__72224 = arguments.length;
switch (G__72224) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__72231){
var vec__72233 = p__72231;
var seq__72234 = cljs.core.seq(vec__72233);
var first__72235 = cljs.core.first(seq__72234);
var seq__72234__$1 = cljs.core.next(seq__72234);
var nn = first__72235;
var first__72235__$1 = cljs.core.first(seq__72234__$1);
var seq__72234__$2 = cljs.core.next(seq__72234__$1);
var np = first__72235__$1;
var nc = seq__72234__$2;
var node = vec__72233;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72239 = nn;
var G__72240 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72239,G__72240) : create_fn.call(null,G__72239,G__72240));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72242 = nn;
var G__72243 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72242,G__72243) : create_fn.call(null,G__72242,G__72243));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__72246 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72246,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72246,(1),null);
var seq__72249_72958 = cljs.core.seq(node_children);
var chunk__72250_72959 = null;
var count__72251_72960 = (0);
var i__72252_72961 = (0);
while(true){
if((i__72252_72961 < count__72251_72960)){
var child_struct_72962 = chunk__72250_72959.cljs$core$IIndexed$_nth$arity$2(null,i__72252_72961);
var children_72963 = shadow.dom.dom_node(child_struct_72962);
if(cljs.core.seq_QMARK_(children_72963)){
var seq__72290_72964 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72963));
var chunk__72292_72965 = null;
var count__72293_72966 = (0);
var i__72294_72967 = (0);
while(true){
if((i__72294_72967 < count__72293_72966)){
var child_72968 = chunk__72292_72965.cljs$core$IIndexed$_nth$arity$2(null,i__72294_72967);
if(cljs.core.truth_(child_72968)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72968);


var G__72969 = seq__72290_72964;
var G__72970 = chunk__72292_72965;
var G__72971 = count__72293_72966;
var G__72972 = (i__72294_72967 + (1));
seq__72290_72964 = G__72969;
chunk__72292_72965 = G__72970;
count__72293_72966 = G__72971;
i__72294_72967 = G__72972;
continue;
} else {
var G__72973 = seq__72290_72964;
var G__72974 = chunk__72292_72965;
var G__72975 = count__72293_72966;
var G__72976 = (i__72294_72967 + (1));
seq__72290_72964 = G__72973;
chunk__72292_72965 = G__72974;
count__72293_72966 = G__72975;
i__72294_72967 = G__72976;
continue;
}
} else {
var temp__5804__auto___72977 = cljs.core.seq(seq__72290_72964);
if(temp__5804__auto___72977){
var seq__72290_72978__$1 = temp__5804__auto___72977;
if(cljs.core.chunked_seq_QMARK_(seq__72290_72978__$1)){
var c__5568__auto___72979 = cljs.core.chunk_first(seq__72290_72978__$1);
var G__72980 = cljs.core.chunk_rest(seq__72290_72978__$1);
var G__72981 = c__5568__auto___72979;
var G__72982 = cljs.core.count(c__5568__auto___72979);
var G__72983 = (0);
seq__72290_72964 = G__72980;
chunk__72292_72965 = G__72981;
count__72293_72966 = G__72982;
i__72294_72967 = G__72983;
continue;
} else {
var child_72984 = cljs.core.first(seq__72290_72978__$1);
if(cljs.core.truth_(child_72984)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72984);


var G__72987 = cljs.core.next(seq__72290_72978__$1);
var G__72988 = null;
var G__72989 = (0);
var G__72990 = (0);
seq__72290_72964 = G__72987;
chunk__72292_72965 = G__72988;
count__72293_72966 = G__72989;
i__72294_72967 = G__72990;
continue;
} else {
var G__72991 = cljs.core.next(seq__72290_72978__$1);
var G__72992 = null;
var G__72993 = (0);
var G__72994 = (0);
seq__72290_72964 = G__72991;
chunk__72292_72965 = G__72992;
count__72293_72966 = G__72993;
i__72294_72967 = G__72994;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72963);
}


var G__72996 = seq__72249_72958;
var G__72997 = chunk__72250_72959;
var G__72998 = count__72251_72960;
var G__72999 = (i__72252_72961 + (1));
seq__72249_72958 = G__72996;
chunk__72250_72959 = G__72997;
count__72251_72960 = G__72998;
i__72252_72961 = G__72999;
continue;
} else {
var temp__5804__auto___73000 = cljs.core.seq(seq__72249_72958);
if(temp__5804__auto___73000){
var seq__72249_73002__$1 = temp__5804__auto___73000;
if(cljs.core.chunked_seq_QMARK_(seq__72249_73002__$1)){
var c__5568__auto___73003 = cljs.core.chunk_first(seq__72249_73002__$1);
var G__73004 = cljs.core.chunk_rest(seq__72249_73002__$1);
var G__73005 = c__5568__auto___73003;
var G__73006 = cljs.core.count(c__5568__auto___73003);
var G__73007 = (0);
seq__72249_72958 = G__73004;
chunk__72250_72959 = G__73005;
count__72251_72960 = G__73006;
i__72252_72961 = G__73007;
continue;
} else {
var child_struct_73008 = cljs.core.first(seq__72249_73002__$1);
var children_73009 = shadow.dom.dom_node(child_struct_73008);
if(cljs.core.seq_QMARK_(children_73009)){
var seq__72305_73010 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73009));
var chunk__72307_73011 = null;
var count__72308_73012 = (0);
var i__72309_73013 = (0);
while(true){
if((i__72309_73013 < count__72308_73012)){
var child_73014 = chunk__72307_73011.cljs$core$IIndexed$_nth$arity$2(null,i__72309_73013);
if(cljs.core.truth_(child_73014)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73014);


var G__73016 = seq__72305_73010;
var G__73017 = chunk__72307_73011;
var G__73018 = count__72308_73012;
var G__73019 = (i__72309_73013 + (1));
seq__72305_73010 = G__73016;
chunk__72307_73011 = G__73017;
count__72308_73012 = G__73018;
i__72309_73013 = G__73019;
continue;
} else {
var G__73021 = seq__72305_73010;
var G__73022 = chunk__72307_73011;
var G__73023 = count__72308_73012;
var G__73024 = (i__72309_73013 + (1));
seq__72305_73010 = G__73021;
chunk__72307_73011 = G__73022;
count__72308_73012 = G__73023;
i__72309_73013 = G__73024;
continue;
}
} else {
var temp__5804__auto___73026__$1 = cljs.core.seq(seq__72305_73010);
if(temp__5804__auto___73026__$1){
var seq__72305_73028__$1 = temp__5804__auto___73026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72305_73028__$1)){
var c__5568__auto___73029 = cljs.core.chunk_first(seq__72305_73028__$1);
var G__73030 = cljs.core.chunk_rest(seq__72305_73028__$1);
var G__73031 = c__5568__auto___73029;
var G__73032 = cljs.core.count(c__5568__auto___73029);
var G__73033 = (0);
seq__72305_73010 = G__73030;
chunk__72307_73011 = G__73031;
count__72308_73012 = G__73032;
i__72309_73013 = G__73033;
continue;
} else {
var child_73034 = cljs.core.first(seq__72305_73028__$1);
if(cljs.core.truth_(child_73034)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73034);


var G__73036 = cljs.core.next(seq__72305_73028__$1);
var G__73037 = null;
var G__73038 = (0);
var G__73039 = (0);
seq__72305_73010 = G__73036;
chunk__72307_73011 = G__73037;
count__72308_73012 = G__73038;
i__72309_73013 = G__73039;
continue;
} else {
var G__73040 = cljs.core.next(seq__72305_73028__$1);
var G__73041 = null;
var G__73042 = (0);
var G__73043 = (0);
seq__72305_73010 = G__73040;
chunk__72307_73011 = G__73041;
count__72308_73012 = G__73042;
i__72309_73013 = G__73043;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73009);
}


var G__73044 = cljs.core.next(seq__72249_73002__$1);
var G__73045 = null;
var G__73046 = (0);
var G__73047 = (0);
seq__72249_72958 = G__73044;
chunk__72250_72959 = G__73045;
count__72251_72960 = G__73046;
i__72252_72961 = G__73047;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__72344 = cljs.core.seq(node);
var chunk__72345 = null;
var count__72346 = (0);
var i__72347 = (0);
while(true){
if((i__72347 < count__72346)){
var n = chunk__72345.cljs$core$IIndexed$_nth$arity$2(null,i__72347);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73050 = seq__72344;
var G__73051 = chunk__72345;
var G__73052 = count__72346;
var G__73053 = (i__72347 + (1));
seq__72344 = G__73050;
chunk__72345 = G__73051;
count__72346 = G__73052;
i__72347 = G__73053;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72344);
if(temp__5804__auto__){
var seq__72344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72344__$1);
var G__73054 = cljs.core.chunk_rest(seq__72344__$1);
var G__73055 = c__5568__auto__;
var G__73056 = cljs.core.count(c__5568__auto__);
var G__73057 = (0);
seq__72344 = G__73054;
chunk__72345 = G__73055;
count__72346 = G__73056;
i__72347 = G__73057;
continue;
} else {
var n = cljs.core.first(seq__72344__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73058 = cljs.core.next(seq__72344__$1);
var G__73059 = null;
var G__73060 = (0);
var G__73061 = (0);
seq__72344 = G__73058;
chunk__72345 = G__73059;
count__72346 = G__73060;
i__72347 = G__73061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__72360 = arguments.length;
switch (G__72360) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__72362 = arguments.length;
switch (G__72362) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__72379 = arguments.length;
switch (G__72379) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___73069 = arguments.length;
var i__5770__auto___73070 = (0);
while(true){
if((i__5770__auto___73070 < len__5769__auto___73069)){
args__5775__auto__.push((arguments[i__5770__auto___73070]));

var G__73071 = (i__5770__auto___73070 + (1));
i__5770__auto___73070 = G__73071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__72406_73072 = cljs.core.seq(nodes);
var chunk__72407_73073 = null;
var count__72408_73074 = (0);
var i__72409_73075 = (0);
while(true){
if((i__72409_73075 < count__72408_73074)){
var node_73076 = chunk__72407_73073.cljs$core$IIndexed$_nth$arity$2(null,i__72409_73075);
fragment.appendChild(shadow.dom._to_dom(node_73076));


var G__73077 = seq__72406_73072;
var G__73078 = chunk__72407_73073;
var G__73079 = count__72408_73074;
var G__73080 = (i__72409_73075 + (1));
seq__72406_73072 = G__73077;
chunk__72407_73073 = G__73078;
count__72408_73074 = G__73079;
i__72409_73075 = G__73080;
continue;
} else {
var temp__5804__auto___73081 = cljs.core.seq(seq__72406_73072);
if(temp__5804__auto___73081){
var seq__72406_73082__$1 = temp__5804__auto___73081;
if(cljs.core.chunked_seq_QMARK_(seq__72406_73082__$1)){
var c__5568__auto___73083 = cljs.core.chunk_first(seq__72406_73082__$1);
var G__73084 = cljs.core.chunk_rest(seq__72406_73082__$1);
var G__73085 = c__5568__auto___73083;
var G__73086 = cljs.core.count(c__5568__auto___73083);
var G__73087 = (0);
seq__72406_73072 = G__73084;
chunk__72407_73073 = G__73085;
count__72408_73074 = G__73086;
i__72409_73075 = G__73087;
continue;
} else {
var node_73088 = cljs.core.first(seq__72406_73082__$1);
fragment.appendChild(shadow.dom._to_dom(node_73088));


var G__73089 = cljs.core.next(seq__72406_73082__$1);
var G__73090 = null;
var G__73091 = (0);
var G__73092 = (0);
seq__72406_73072 = G__73089;
chunk__72407_73073 = G__73090;
count__72408_73074 = G__73091;
i__72409_73075 = G__73092;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq72400){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72400));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__72415_73094 = cljs.core.seq(scripts);
var chunk__72416_73095 = null;
var count__72417_73096 = (0);
var i__72418_73097 = (0);
while(true){
if((i__72418_73097 < count__72417_73096)){
var vec__72434_73098 = chunk__72416_73095.cljs$core$IIndexed$_nth$arity$2(null,i__72418_73097);
var script_tag_73099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434_73098,(0),null);
var script_body_73100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434_73098,(1),null);
eval(script_body_73100);


var G__73101 = seq__72415_73094;
var G__73102 = chunk__72416_73095;
var G__73103 = count__72417_73096;
var G__73104 = (i__72418_73097 + (1));
seq__72415_73094 = G__73101;
chunk__72416_73095 = G__73102;
count__72417_73096 = G__73103;
i__72418_73097 = G__73104;
continue;
} else {
var temp__5804__auto___73105 = cljs.core.seq(seq__72415_73094);
if(temp__5804__auto___73105){
var seq__72415_73106__$1 = temp__5804__auto___73105;
if(cljs.core.chunked_seq_QMARK_(seq__72415_73106__$1)){
var c__5568__auto___73107 = cljs.core.chunk_first(seq__72415_73106__$1);
var G__73108 = cljs.core.chunk_rest(seq__72415_73106__$1);
var G__73109 = c__5568__auto___73107;
var G__73110 = cljs.core.count(c__5568__auto___73107);
var G__73111 = (0);
seq__72415_73094 = G__73108;
chunk__72416_73095 = G__73109;
count__72417_73096 = G__73110;
i__72418_73097 = G__73111;
continue;
} else {
var vec__72443_73112 = cljs.core.first(seq__72415_73106__$1);
var script_tag_73113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72443_73112,(0),null);
var script_body_73114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72443_73112,(1),null);
eval(script_body_73114);


var G__73115 = cljs.core.next(seq__72415_73106__$1);
var G__73116 = null;
var G__73117 = (0);
var G__73118 = (0);
seq__72415_73094 = G__73115;
chunk__72416_73095 = G__73116;
count__72417_73096 = G__73117;
i__72418_73097 = G__73118;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__72452){
var vec__72453 = p__72452;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72453,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72453,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__72468 = arguments.length;
switch (G__72468) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__72492 = cljs.core.seq(style_keys);
var chunk__72493 = null;
var count__72494 = (0);
var i__72495 = (0);
while(true){
if((i__72495 < count__72494)){
var it = chunk__72493.cljs$core$IIndexed$_nth$arity$2(null,i__72495);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73125 = seq__72492;
var G__73126 = chunk__72493;
var G__73127 = count__72494;
var G__73128 = (i__72495 + (1));
seq__72492 = G__73125;
chunk__72493 = G__73126;
count__72494 = G__73127;
i__72495 = G__73128;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72492);
if(temp__5804__auto__){
var seq__72492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__72492__$1);
var G__73129 = cljs.core.chunk_rest(seq__72492__$1);
var G__73130 = c__5568__auto__;
var G__73131 = cljs.core.count(c__5568__auto__);
var G__73132 = (0);
seq__72492 = G__73129;
chunk__72493 = G__73130;
count__72494 = G__73131;
i__72495 = G__73132;
continue;
} else {
var it = cljs.core.first(seq__72492__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73133 = cljs.core.next(seq__72492__$1);
var G__73134 = null;
var G__73135 = (0);
var G__73136 = (0);
seq__72492 = G__73133;
chunk__72493 = G__73134;
count__72494 = G__73135;
i__72495 = G__73136;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k72505,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__72518 = k72505;
var G__72518__$1 = (((G__72518 instanceof cljs.core.Keyword))?G__72518.fqn:null);
switch (G__72518__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72505,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__72523){
var vec__72524 = p__72523;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72524,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72524,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72504){
var self__ = this;
var G__72504__$1 = this;
return (new cljs.core.RecordIter((0),G__72504__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72506,other72507){
var self__ = this;
var this72506__$1 = this;
return (((!((other72507 == null)))) && ((((this72506__$1.constructor === other72507.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72506__$1.x,other72507.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72506__$1.y,other72507.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72506__$1.__extmap,other72507.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k72505){
var self__ = this;
var this__5350__auto____$1 = this;
var G__72554 = k72505;
var G__72554__$1 = (((G__72554 instanceof cljs.core.Keyword))?G__72554.fqn:null);
switch (G__72554__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72505);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__72504){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__72557 = cljs.core.keyword_identical_QMARK_;
var expr__72558 = k__5352__auto__;
if(cljs.core.truth_((pred__72557.cljs$core$IFn$_invoke$arity$2 ? pred__72557.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72558) : pred__72557.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72558)))){
return (new shadow.dom.Coordinate(G__72504,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72557.cljs$core$IFn$_invoke$arity$2 ? pred__72557.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72558) : pred__72557.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72558)))){
return (new shadow.dom.Coordinate(self__.x,G__72504,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__72504),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__72504){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__72504,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__72511){
var extmap__5385__auto__ = (function (){var G__72560 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72511,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__72511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72560);
} else {
return G__72560;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72511),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72511),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k72563,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__72577 = k72563;
var G__72577__$1 = (((G__72577 instanceof cljs.core.Keyword))?G__72577.fqn:null);
switch (G__72577__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72563,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__72582){
var vec__72584 = p__72582;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72584,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72584,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72562){
var self__ = this;
var G__72562__$1 = this;
return (new cljs.core.RecordIter((0),G__72562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72564,other72565){
var self__ = this;
var this72564__$1 = this;
return (((!((other72565 == null)))) && ((((this72564__$1.constructor === other72565.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72564__$1.w,other72565.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72564__$1.h,other72565.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72564__$1.__extmap,other72565.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k72563){
var self__ = this;
var this__5350__auto____$1 = this;
var G__72612 = k72563;
var G__72612__$1 = (((G__72612 instanceof cljs.core.Keyword))?G__72612.fqn:null);
switch (G__72612__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72563);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__72562){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__72614 = cljs.core.keyword_identical_QMARK_;
var expr__72615 = k__5352__auto__;
if(cljs.core.truth_((pred__72614.cljs$core$IFn$_invoke$arity$2 ? pred__72614.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72615) : pred__72614.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72615)))){
return (new shadow.dom.Size(G__72562,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72614.cljs$core$IFn$_invoke$arity$2 ? pred__72614.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72615) : pred__72614.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72615)))){
return (new shadow.dom.Size(self__.w,G__72562,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__72562),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__72562){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72562,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72568){
var extmap__5385__auto__ = (function (){var G__72633 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72568,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72633);
} else {
return G__72633;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72568),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72568),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__73164 = (i + (1));
var G__73165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__73164;
ret = G__73165;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72670){
var vec__72672 = p__72670;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__72683 = arguments.length;
switch (G__72683) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__73172 = ps;
var G__73173 = (i + (1));
el__$1 = G__73172;
i = G__73173;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__72704 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72704,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72704,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72704,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__72707_73179 = cljs.core.seq(props);
var chunk__72708_73180 = null;
var count__72709_73181 = (0);
var i__72710_73182 = (0);
while(true){
if((i__72710_73182 < count__72709_73181)){
var vec__72719_73183 = chunk__72708_73180.cljs$core$IIndexed$_nth$arity$2(null,i__72710_73182);
var k_73184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72719_73183,(0),null);
var v_73185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72719_73183,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_73184);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73184),v_73185);


var G__73186 = seq__72707_73179;
var G__73187 = chunk__72708_73180;
var G__73188 = count__72709_73181;
var G__73189 = (i__72710_73182 + (1));
seq__72707_73179 = G__73186;
chunk__72708_73180 = G__73187;
count__72709_73181 = G__73188;
i__72710_73182 = G__73189;
continue;
} else {
var temp__5804__auto___73190 = cljs.core.seq(seq__72707_73179);
if(temp__5804__auto___73190){
var seq__72707_73191__$1 = temp__5804__auto___73190;
if(cljs.core.chunked_seq_QMARK_(seq__72707_73191__$1)){
var c__5568__auto___73192 = cljs.core.chunk_first(seq__72707_73191__$1);
var G__73193 = cljs.core.chunk_rest(seq__72707_73191__$1);
var G__73194 = c__5568__auto___73192;
var G__73195 = cljs.core.count(c__5568__auto___73192);
var G__73196 = (0);
seq__72707_73179 = G__73193;
chunk__72708_73180 = G__73194;
count__72709_73181 = G__73195;
i__72710_73182 = G__73196;
continue;
} else {
var vec__72722_73197 = cljs.core.first(seq__72707_73191__$1);
var k_73198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72722_73197,(0),null);
var v_73199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72722_73197,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_73198);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73198),v_73199);


var G__73200 = cljs.core.next(seq__72707_73191__$1);
var G__73201 = null;
var G__73202 = (0);
var G__73203 = (0);
seq__72707_73179 = G__73200;
chunk__72708_73180 = G__73201;
count__72709_73181 = G__73202;
i__72710_73182 = G__73203;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__72733 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72733,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72733,(1),null);
var seq__72736_73212 = cljs.core.seq(node_children);
var chunk__72738_73213 = null;
var count__72739_73214 = (0);
var i__72740_73215 = (0);
while(true){
if((i__72740_73215 < count__72739_73214)){
var child_struct_73216 = chunk__72738_73213.cljs$core$IIndexed$_nth$arity$2(null,i__72740_73215);
if((!((child_struct_73216 == null)))){
if(typeof child_struct_73216 === 'string'){
var text_73217 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73217),child_struct_73216].join(''));
} else {
var children_73218 = shadow.dom.svg_node(child_struct_73216);
if(cljs.core.seq_QMARK_(children_73218)){
var seq__72772_73219 = cljs.core.seq(children_73218);
var chunk__72774_73220 = null;
var count__72775_73221 = (0);
var i__72776_73222 = (0);
while(true){
if((i__72776_73222 < count__72775_73221)){
var child_73223 = chunk__72774_73220.cljs$core$IIndexed$_nth$arity$2(null,i__72776_73222);
if(cljs.core.truth_(child_73223)){
node.appendChild(child_73223);


var G__73224 = seq__72772_73219;
var G__73225 = chunk__72774_73220;
var G__73226 = count__72775_73221;
var G__73227 = (i__72776_73222 + (1));
seq__72772_73219 = G__73224;
chunk__72774_73220 = G__73225;
count__72775_73221 = G__73226;
i__72776_73222 = G__73227;
continue;
} else {
var G__73228 = seq__72772_73219;
var G__73229 = chunk__72774_73220;
var G__73230 = count__72775_73221;
var G__73231 = (i__72776_73222 + (1));
seq__72772_73219 = G__73228;
chunk__72774_73220 = G__73229;
count__72775_73221 = G__73230;
i__72776_73222 = G__73231;
continue;
}
} else {
var temp__5804__auto___73232 = cljs.core.seq(seq__72772_73219);
if(temp__5804__auto___73232){
var seq__72772_73233__$1 = temp__5804__auto___73232;
if(cljs.core.chunked_seq_QMARK_(seq__72772_73233__$1)){
var c__5568__auto___73237 = cljs.core.chunk_first(seq__72772_73233__$1);
var G__73238 = cljs.core.chunk_rest(seq__72772_73233__$1);
var G__73239 = c__5568__auto___73237;
var G__73240 = cljs.core.count(c__5568__auto___73237);
var G__73241 = (0);
seq__72772_73219 = G__73238;
chunk__72774_73220 = G__73239;
count__72775_73221 = G__73240;
i__72776_73222 = G__73241;
continue;
} else {
var child_73242 = cljs.core.first(seq__72772_73233__$1);
if(cljs.core.truth_(child_73242)){
node.appendChild(child_73242);


var G__73243 = cljs.core.next(seq__72772_73233__$1);
var G__73244 = null;
var G__73245 = (0);
var G__73246 = (0);
seq__72772_73219 = G__73243;
chunk__72774_73220 = G__73244;
count__72775_73221 = G__73245;
i__72776_73222 = G__73246;
continue;
} else {
var G__73247 = cljs.core.next(seq__72772_73233__$1);
var G__73248 = null;
var G__73249 = (0);
var G__73250 = (0);
seq__72772_73219 = G__73247;
chunk__72774_73220 = G__73248;
count__72775_73221 = G__73249;
i__72776_73222 = G__73250;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73218);
}
}


var G__73251 = seq__72736_73212;
var G__73252 = chunk__72738_73213;
var G__73253 = count__72739_73214;
var G__73254 = (i__72740_73215 + (1));
seq__72736_73212 = G__73251;
chunk__72738_73213 = G__73252;
count__72739_73214 = G__73253;
i__72740_73215 = G__73254;
continue;
} else {
var G__73255 = seq__72736_73212;
var G__73256 = chunk__72738_73213;
var G__73257 = count__72739_73214;
var G__73258 = (i__72740_73215 + (1));
seq__72736_73212 = G__73255;
chunk__72738_73213 = G__73256;
count__72739_73214 = G__73257;
i__72740_73215 = G__73258;
continue;
}
} else {
var temp__5804__auto___73259 = cljs.core.seq(seq__72736_73212);
if(temp__5804__auto___73259){
var seq__72736_73260__$1 = temp__5804__auto___73259;
if(cljs.core.chunked_seq_QMARK_(seq__72736_73260__$1)){
var c__5568__auto___73261 = cljs.core.chunk_first(seq__72736_73260__$1);
var G__73262 = cljs.core.chunk_rest(seq__72736_73260__$1);
var G__73263 = c__5568__auto___73261;
var G__73264 = cljs.core.count(c__5568__auto___73261);
var G__73265 = (0);
seq__72736_73212 = G__73262;
chunk__72738_73213 = G__73263;
count__72739_73214 = G__73264;
i__72740_73215 = G__73265;
continue;
} else {
var child_struct_73266 = cljs.core.first(seq__72736_73260__$1);
if((!((child_struct_73266 == null)))){
if(typeof child_struct_73266 === 'string'){
var text_73267 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73267),child_struct_73266].join(''));
} else {
var children_73268 = shadow.dom.svg_node(child_struct_73266);
if(cljs.core.seq_QMARK_(children_73268)){
var seq__72785_73271 = cljs.core.seq(children_73268);
var chunk__72787_73272 = null;
var count__72788_73273 = (0);
var i__72789_73274 = (0);
while(true){
if((i__72789_73274 < count__72788_73273)){
var child_73275 = chunk__72787_73272.cljs$core$IIndexed$_nth$arity$2(null,i__72789_73274);
if(cljs.core.truth_(child_73275)){
node.appendChild(child_73275);


var G__73276 = seq__72785_73271;
var G__73277 = chunk__72787_73272;
var G__73278 = count__72788_73273;
var G__73279 = (i__72789_73274 + (1));
seq__72785_73271 = G__73276;
chunk__72787_73272 = G__73277;
count__72788_73273 = G__73278;
i__72789_73274 = G__73279;
continue;
} else {
var G__73280 = seq__72785_73271;
var G__73281 = chunk__72787_73272;
var G__73282 = count__72788_73273;
var G__73283 = (i__72789_73274 + (1));
seq__72785_73271 = G__73280;
chunk__72787_73272 = G__73281;
count__72788_73273 = G__73282;
i__72789_73274 = G__73283;
continue;
}
} else {
var temp__5804__auto___73284__$1 = cljs.core.seq(seq__72785_73271);
if(temp__5804__auto___73284__$1){
var seq__72785_73285__$1 = temp__5804__auto___73284__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72785_73285__$1)){
var c__5568__auto___73286 = cljs.core.chunk_first(seq__72785_73285__$1);
var G__73287 = cljs.core.chunk_rest(seq__72785_73285__$1);
var G__73288 = c__5568__auto___73286;
var G__73289 = cljs.core.count(c__5568__auto___73286);
var G__73290 = (0);
seq__72785_73271 = G__73287;
chunk__72787_73272 = G__73288;
count__72788_73273 = G__73289;
i__72789_73274 = G__73290;
continue;
} else {
var child_73291 = cljs.core.first(seq__72785_73285__$1);
if(cljs.core.truth_(child_73291)){
node.appendChild(child_73291);


var G__73292 = cljs.core.next(seq__72785_73285__$1);
var G__73293 = null;
var G__73294 = (0);
var G__73295 = (0);
seq__72785_73271 = G__73292;
chunk__72787_73272 = G__73293;
count__72788_73273 = G__73294;
i__72789_73274 = G__73295;
continue;
} else {
var G__73296 = cljs.core.next(seq__72785_73285__$1);
var G__73297 = null;
var G__73298 = (0);
var G__73299 = (0);
seq__72785_73271 = G__73296;
chunk__72787_73272 = G__73297;
count__72788_73273 = G__73298;
i__72789_73274 = G__73299;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73268);
}
}


var G__73300 = cljs.core.next(seq__72736_73260__$1);
var G__73301 = null;
var G__73302 = (0);
var G__73303 = (0);
seq__72736_73212 = G__73300;
chunk__72738_73213 = G__73301;
count__72739_73214 = G__73302;
i__72740_73215 = G__73303;
continue;
} else {
var G__73304 = cljs.core.next(seq__72736_73260__$1);
var G__73305 = null;
var G__73306 = (0);
var G__73307 = (0);
seq__72736_73212 = G__73304;
chunk__72738_73213 = G__73305;
count__72739_73214 = G__73306;
i__72740_73215 = G__73307;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___73311 = arguments.length;
var i__5770__auto___73312 = (0);
while(true){
if((i__5770__auto___73312 < len__5769__auto___73311)){
args__5775__auto__.push((arguments[i__5770__auto___73312]));

var G__73313 = (i__5770__auto___73312 + (1));
i__5770__auto___73312 = G__73313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq72799){
var G__72800 = cljs.core.first(seq72799);
var seq72799__$1 = cljs.core.next(seq72799);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72800,seq72799__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__72809 = arguments.length;
switch (G__72809) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__31601__auto___73315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_72823){
var state_val_72824 = (state_72823[(1)]);
if((state_val_72824 === (1))){
var state_72823__$1 = state_72823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72823__$1,(2),once_or_cleanup);
} else {
if((state_val_72824 === (2))){
var inst_72819 = (state_72823[(2)]);
var inst_72820 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_72823__$1 = (function (){var statearr_72828 = state_72823;
(statearr_72828[(7)] = inst_72819);

return statearr_72828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72823__$1,inst_72820);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31524__auto__ = null;
var shadow$dom$state_machine__31524__auto____0 = (function (){
var statearr_72829 = [null,null,null,null,null,null,null,null];
(statearr_72829[(0)] = shadow$dom$state_machine__31524__auto__);

(statearr_72829[(1)] = (1));

return statearr_72829;
});
var shadow$dom$state_machine__31524__auto____1 = (function (state_72823){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_72823);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e72830){var ex__31527__auto__ = e72830;
var statearr_72831_73318 = state_72823;
(statearr_72831_73318[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_72823[(4)]))){
var statearr_72832_73319 = state_72823;
(statearr_72832_73319[(1)] = cljs.core.first((state_72823[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73320 = state_72823;
state_72823 = G__73320;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
shadow$dom$state_machine__31524__auto__ = function(state_72823){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31524__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31524__auto____1.call(this,state_72823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31524__auto____0;
shadow$dom$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31524__auto____1;
return shadow$dom$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_72836 = f__31602__auto__();
(statearr_72836[(6)] = c__31601__auto___73315);

return statearr_72836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
