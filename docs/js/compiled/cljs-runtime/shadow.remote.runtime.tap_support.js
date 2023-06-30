goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__70873,p__70874){
var map__70876 = p__70873;
var map__70876__$1 = cljs.core.__destructure_map(map__70876);
var svc = map__70876__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70876__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70876__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70876__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70877 = p__70874;
var map__70877__$1 = cljs.core.__destructure_map(map__70877);
var msg = map__70877__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70877__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70877__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70877__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70877__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__70878,p__70879){
var map__70880 = p__70878;
var map__70880__$1 = cljs.core.__destructure_map(map__70880);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70880__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__70881 = p__70879;
var map__70881__$1 = cljs.core.__destructure_map(map__70881);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70881__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__70882,p__70883){
var map__70884 = p__70882;
var map__70884__$1 = cljs.core.__destructure_map(map__70884);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70884__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70884__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70885 = p__70883;
var map__70885__$1 = cljs.core.__destructure_map(map__70885);
var msg = map__70885__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70885__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__70890,tid){
var map__70891 = p__70890;
var map__70891__$1 = cljs.core.__destructure_map(map__70891);
var svc = map__70891__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70891__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__70901 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__70902 = null;
var count__70903 = (0);
var i__70904 = (0);
while(true){
if((i__70904 < count__70903)){
var vec__70913 = chunk__70902.cljs$core$IIndexed$_nth$arity$2(null,i__70904);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70913,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70913,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70943 = seq__70901;
var G__70944 = chunk__70902;
var G__70945 = count__70903;
var G__70946 = (i__70904 + (1));
seq__70901 = G__70943;
chunk__70902 = G__70944;
count__70903 = G__70945;
i__70904 = G__70946;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70901);
if(temp__5804__auto__){
var seq__70901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70901__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__70901__$1);
var G__70947 = cljs.core.chunk_rest(seq__70901__$1);
var G__70948 = c__5568__auto__;
var G__70949 = cljs.core.count(c__5568__auto__);
var G__70950 = (0);
seq__70901 = G__70947;
chunk__70902 = G__70948;
count__70903 = G__70949;
i__70904 = G__70950;
continue;
} else {
var vec__70925 = cljs.core.first(seq__70901__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70925,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70925,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70951 = cljs.core.next(seq__70901__$1);
var G__70952 = null;
var G__70953 = (0);
var G__70954 = (0);
seq__70901 = G__70951;
chunk__70902 = G__70952;
count__70903 = G__70953;
i__70904 = G__70954;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__70894_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__70894_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__70895_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__70895_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__70896_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__70896_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__70897_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__70897_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__70936){
var map__70937 = p__70936;
var map__70937__$1 = cljs.core.__destructure_map(map__70937);
var svc = map__70937__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70937__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70937__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
