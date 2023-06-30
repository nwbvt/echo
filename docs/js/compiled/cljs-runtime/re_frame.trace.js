goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__41048){
var map__41050 = p__41048;
var map__41050__$1 = cljs.core.__destructure_map(map__41050);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__41057_41085 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__41058_41086 = null;
var count__41059_41087 = (0);
var i__41060_41088 = (0);
while(true){
if((i__41060_41088 < count__41059_41087)){
var vec__41071_41089 = chunk__41058_41086.cljs$core$IIndexed$_nth$arity$2(null,i__41060_41088);
var k_41090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071_41089,(0),null);
var cb_41091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071_41089,(1),null);
try{var G__41076_41092 = cljs.core.deref(re_frame.trace.traces);
(cb_41091.cljs$core$IFn$_invoke$arity$1 ? cb_41091.cljs$core$IFn$_invoke$arity$1(G__41076_41092) : cb_41091.call(null,G__41076_41092));
}catch (e41074){var e_41093 = e41074;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41090,"while storing",cljs.core.deref(re_frame.trace.traces),e_41093], 0));
}

var G__41103 = seq__41057_41085;
var G__41104 = chunk__41058_41086;
var G__41105 = count__41059_41087;
var G__41106 = (i__41060_41088 + (1));
seq__41057_41085 = G__41103;
chunk__41058_41086 = G__41104;
count__41059_41087 = G__41105;
i__41060_41088 = G__41106;
continue;
} else {
var temp__5804__auto___41107 = cljs.core.seq(seq__41057_41085);
if(temp__5804__auto___41107){
var seq__41057_41108__$1 = temp__5804__auto___41107;
if(cljs.core.chunked_seq_QMARK_(seq__41057_41108__$1)){
var c__5568__auto___41109 = cljs.core.chunk_first(seq__41057_41108__$1);
var G__41110 = cljs.core.chunk_rest(seq__41057_41108__$1);
var G__41111 = c__5568__auto___41109;
var G__41112 = cljs.core.count(c__5568__auto___41109);
var G__41113 = (0);
seq__41057_41085 = G__41110;
chunk__41058_41086 = G__41111;
count__41059_41087 = G__41112;
i__41060_41088 = G__41113;
continue;
} else {
var vec__41077_41114 = cljs.core.first(seq__41057_41108__$1);
var k_41115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077_41114,(0),null);
var cb_41116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077_41114,(1),null);
try{var G__41081_41117 = cljs.core.deref(re_frame.trace.traces);
(cb_41116.cljs$core$IFn$_invoke$arity$1 ? cb_41116.cljs$core$IFn$_invoke$arity$1(G__41081_41117) : cb_41116.call(null,G__41081_41117));
}catch (e41080){var e_41118 = e41080;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41115,"while storing",cljs.core.deref(re_frame.trace.traces),e_41118], 0));
}

var G__41119 = cljs.core.next(seq__41057_41108__$1);
var G__41120 = null;
var G__41121 = (0);
var G__41122 = (0);
seq__41057_41085 = G__41119;
chunk__41058_41086 = G__41120;
count__41059_41087 = G__41121;
i__41060_41088 = G__41122;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
