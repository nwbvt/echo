goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__69860,res){
var map__69862 = p__69860;
var map__69862__$1 = cljs.core.__destructure_map(map__69862);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69862__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69862__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__69864 = res;
var G__69864__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69864,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__69864);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69864__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__69864__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__69872 = arguments.length;
switch (G__69872) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__69877,msg,handlers,timeout_after_ms){
var map__69879 = p__69877;
var map__69879__$1 = cljs.core.__destructure_map(map__69879);
var runtime = map__69879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___70194 = arguments.length;
var i__5770__auto___70195 = (0);
while(true){
if((i__5770__auto___70195 < len__5769__auto___70194)){
args__5775__auto__.push((arguments[i__5770__auto___70195]));

var G__70196 = (i__5770__auto___70195 + (1));
i__5770__auto___70195 = G__70196;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__69902,ev,args){
var map__69903 = p__69902;
var map__69903__$1 = cljs.core.__destructure_map(map__69903);
var runtime = map__69903__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69903__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__69905 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__69908 = null;
var count__69909 = (0);
var i__69910 = (0);
while(true){
if((i__69910 < count__69909)){
var ext = chunk__69908.cljs$core$IIndexed$_nth$arity$2(null,i__69910);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__70198 = seq__69905;
var G__70199 = chunk__69908;
var G__70200 = count__69909;
var G__70201 = (i__69910 + (1));
seq__69905 = G__70198;
chunk__69908 = G__70199;
count__69909 = G__70200;
i__69910 = G__70201;
continue;
} else {
var G__70203 = seq__69905;
var G__70204 = chunk__69908;
var G__70205 = count__69909;
var G__70206 = (i__69910 + (1));
seq__69905 = G__70203;
chunk__69908 = G__70204;
count__69909 = G__70205;
i__69910 = G__70206;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69905);
if(temp__5804__auto__){
var seq__69905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69905__$1);
var G__70207 = cljs.core.chunk_rest(seq__69905__$1);
var G__70208 = c__5568__auto__;
var G__70209 = cljs.core.count(c__5568__auto__);
var G__70210 = (0);
seq__69905 = G__70207;
chunk__69908 = G__70208;
count__69909 = G__70209;
i__69910 = G__70210;
continue;
} else {
var ext = cljs.core.first(seq__69905__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__70212 = cljs.core.next(seq__69905__$1);
var G__70213 = null;
var G__70214 = (0);
var G__70215 = (0);
seq__69905 = G__70212;
chunk__69908 = G__70213;
count__69909 = G__70214;
i__69910 = G__70215;
continue;
} else {
var G__70216 = cljs.core.next(seq__69905__$1);
var G__70217 = null;
var G__70218 = (0);
var G__70219 = (0);
seq__69905 = G__70216;
chunk__69908 = G__70217;
count__69909 = G__70218;
i__69910 = G__70219;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq69897){
var G__69898 = cljs.core.first(seq69897);
var seq69897__$1 = cljs.core.next(seq69897);
var G__69899 = cljs.core.first(seq69897__$1);
var seq69897__$2 = cljs.core.next(seq69897__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69898,G__69899,seq69897__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__69944,p__69945){
var map__69946 = p__69944;
var map__69946__$1 = cljs.core.__destructure_map(map__69946);
var runtime = map__69946__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__69947 = p__69945;
var map__69947__$1 = cljs.core.__destructure_map(map__69947);
var msg = map__69947__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69947__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__69950 = cljs.core.deref(state_ref);
var map__69950__$1 = cljs.core.__destructure_map(map__69950);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69950__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69950__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__69955){
var map__69956 = p__69955;
var map__69956__$1 = cljs.core.__destructure_map(map__69956);
var runtime = map__69956__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69956__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__69959,msg){
var map__69960 = p__69959;
var map__69960__$1 = cljs.core.__destructure_map(map__69960);
var runtime = map__69960__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__69971,key,p__69972){
var map__69973 = p__69971;
var map__69973__$1 = cljs.core.__destructure_map(map__69973);
var state = map__69973__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__69974 = p__69972;
var map__69974__$1 = cljs.core.__destructure_map(map__69974);
var spec = map__69974__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69974__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__69995,key,spec){
var map__69996 = p__69995;
var map__69996__$1 = cljs.core.__destructure_map(map__69996);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__70010_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__70010_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__70011_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__70011_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__70012_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__70012_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__70015_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__70015_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__70016_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__70016_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__70067,key){
var map__70068 = p__70067;
var map__70068__$1 = cljs.core.__destructure_map(map__70068);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70068__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__70077,msg){
var map__70079 = p__70077;
var map__70079__$1 = cljs.core.__destructure_map(map__70079);
var runtime = map__70079__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__70091,p__70092){
var map__70093 = p__70091;
var map__70093__$1 = cljs.core.__destructure_map(map__70093);
var runtime = map__70093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__70094 = p__70092;
var map__70094__$1 = cljs.core.__destructure_map(map__70094);
var msg = map__70094__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__70112 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__70114 = null;
var count__70115 = (0);
var i__70117 = (0);
while(true){
if((i__70117 < count__70115)){
var map__70144 = chunk__70114.cljs$core$IIndexed$_nth$arity$2(null,i__70117);
var map__70144__$1 = cljs.core.__destructure_map(map__70144);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70144__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__70254 = seq__70112;
var G__70255 = chunk__70114;
var G__70256 = count__70115;
var G__70257 = (i__70117 + (1));
seq__70112 = G__70254;
chunk__70114 = G__70255;
count__70115 = G__70256;
i__70117 = G__70257;
continue;
} else {
var G__70258 = seq__70112;
var G__70259 = chunk__70114;
var G__70260 = count__70115;
var G__70261 = (i__70117 + (1));
seq__70112 = G__70258;
chunk__70114 = G__70259;
count__70115 = G__70260;
i__70117 = G__70261;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70112);
if(temp__5804__auto__){
var seq__70112__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70112__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__70112__$1);
var G__70262 = cljs.core.chunk_rest(seq__70112__$1);
var G__70263 = c__5568__auto__;
var G__70264 = cljs.core.count(c__5568__auto__);
var G__70265 = (0);
seq__70112 = G__70262;
chunk__70114 = G__70263;
count__70115 = G__70264;
i__70117 = G__70265;
continue;
} else {
var map__70158 = cljs.core.first(seq__70112__$1);
var map__70158__$1 = cljs.core.__destructure_map(map__70158);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70158__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__70266 = cljs.core.next(seq__70112__$1);
var G__70267 = null;
var G__70268 = (0);
var G__70269 = (0);
seq__70112 = G__70266;
chunk__70114 = G__70267;
count__70115 = G__70268;
i__70117 = G__70269;
continue;
} else {
var G__70270 = cljs.core.next(seq__70112__$1);
var G__70271 = null;
var G__70272 = (0);
var G__70273 = (0);
seq__70112 = G__70270;
chunk__70114 = G__70271;
count__70115 = G__70272;
i__70117 = G__70273;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
