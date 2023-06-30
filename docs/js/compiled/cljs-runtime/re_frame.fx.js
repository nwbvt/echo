goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42774 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42775 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42775);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___42976 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___42976)){
var new_db_42977 = temp__5804__auto___42976;
var fexpr__42782_42978 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42782_42978.cljs$core$IFn$_invoke$arity$1 ? fexpr__42782_42978.cljs$core$IFn$_invoke$arity$1(new_db_42977) : fexpr__42782_42978.call(null,new_db_42977));
} else {
}

var seq__42784 = cljs.core.seq(effects_without_db);
var chunk__42785 = null;
var count__42786 = (0);
var i__42787 = (0);
while(true){
if((i__42787 < count__42786)){
var vec__42806 = chunk__42785.cljs$core$IIndexed$_nth$arity$2(null,i__42787);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42806,(1),null);
var temp__5802__auto___42979 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___42979)){
var effect_fn_42980 = temp__5802__auto___42979;
(effect_fn_42980.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42980.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42980.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42981 = seq__42784;
var G__42982 = chunk__42785;
var G__42983 = count__42786;
var G__42984 = (i__42787 + (1));
seq__42784 = G__42981;
chunk__42785 = G__42982;
count__42786 = G__42983;
i__42787 = G__42984;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42784);
if(temp__5804__auto__){
var seq__42784__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42784__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42784__$1);
var G__42992 = cljs.core.chunk_rest(seq__42784__$1);
var G__42993 = c__5568__auto__;
var G__42994 = cljs.core.count(c__5568__auto__);
var G__42995 = (0);
seq__42784 = G__42992;
chunk__42785 = G__42993;
count__42786 = G__42994;
i__42787 = G__42995;
continue;
} else {
var vec__42811 = cljs.core.first(seq__42784__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42811,(1),null);
var temp__5802__auto___43001 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___43001)){
var effect_fn_43003 = temp__5802__auto___43001;
(effect_fn_43003.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43003.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43003.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43011 = cljs.core.next(seq__42784__$1);
var G__43012 = null;
var G__43013 = (0);
var G__43014 = (0);
seq__42784 = G__43011;
chunk__42785 = G__43012;
count__42786 = G__43013;
i__42787 = G__43014;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23691__auto___43018 = re_frame.interop.now();
var duration__23692__auto___43019 = (end__23691__auto___43018 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23692__auto___43019,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23691__auto___43018);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42774);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___43024 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___43024)){
var new_db_43025 = temp__5804__auto___43024;
var fexpr__42817_43026 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42817_43026.cljs$core$IFn$_invoke$arity$1 ? fexpr__42817_43026.cljs$core$IFn$_invoke$arity$1(new_db_43025) : fexpr__42817_43026.call(null,new_db_43025));
} else {
}

var seq__42819 = cljs.core.seq(effects_without_db);
var chunk__42820 = null;
var count__42821 = (0);
var i__42822 = (0);
while(true){
if((i__42822 < count__42821)){
var vec__42838 = chunk__42820.cljs$core$IIndexed$_nth$arity$2(null,i__42822);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(1),null);
var temp__5802__auto___43027 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___43027)){
var effect_fn_43028 = temp__5802__auto___43027;
(effect_fn_43028.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43028.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43028.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43029 = seq__42819;
var G__43030 = chunk__42820;
var G__43031 = count__42821;
var G__43032 = (i__42822 + (1));
seq__42819 = G__43029;
chunk__42820 = G__43030;
count__42821 = G__43031;
i__42822 = G__43032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42819);
if(temp__5804__auto__){
var seq__42819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42819__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42819__$1);
var G__43033 = cljs.core.chunk_rest(seq__42819__$1);
var G__43034 = c__5568__auto__;
var G__43035 = cljs.core.count(c__5568__auto__);
var G__43036 = (0);
seq__42819 = G__43033;
chunk__42820 = G__43034;
count__42821 = G__43035;
i__42822 = G__43036;
continue;
} else {
var vec__42843 = cljs.core.first(seq__42819__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(1),null);
var temp__5802__auto___43037 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___43037)){
var effect_fn_43038 = temp__5802__auto___43037;
(effect_fn_43038.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43038.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43038.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43039 = cljs.core.next(seq__42819__$1);
var G__43040 = null;
var G__43041 = (0);
var G__43042 = (0);
seq__42819 = G__43039;
chunk__42820 = G__43040;
count__42821 = G__43041;
i__42822 = G__43042;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__42846){
var map__42847 = p__42846;
var map__42847__$1 = cljs.core.__destructure_map(map__42847);
var effect = map__42847__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42847__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42847__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__42849 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42850 = null;
var count__42851 = (0);
var i__42852 = (0);
while(true){
if((i__42852 < count__42851)){
var effect = chunk__42850.cljs$core$IIndexed$_nth$arity$2(null,i__42852);
re_frame.fx.dispatch_later(effect);


var G__43048 = seq__42849;
var G__43049 = chunk__42850;
var G__43050 = count__42851;
var G__43051 = (i__42852 + (1));
seq__42849 = G__43048;
chunk__42850 = G__43049;
count__42851 = G__43050;
i__42852 = G__43051;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42849);
if(temp__5804__auto__){
var seq__42849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42849__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42849__$1);
var G__43052 = cljs.core.chunk_rest(seq__42849__$1);
var G__43053 = c__5568__auto__;
var G__43054 = cljs.core.count(c__5568__auto__);
var G__43055 = (0);
seq__42849 = G__43052;
chunk__42850 = G__43053;
count__42851 = G__43054;
i__42852 = G__43055;
continue;
} else {
var effect = cljs.core.first(seq__42849__$1);
re_frame.fx.dispatch_later(effect);


var G__43056 = cljs.core.next(seq__42849__$1);
var G__43057 = null;
var G__43058 = (0);
var G__43059 = (0);
seq__42849 = G__43056;
chunk__42850 = G__43057;
count__42851 = G__43058;
i__42852 = G__43059;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__42884 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__42885 = null;
var count__42886 = (0);
var i__42887 = (0);
while(true){
if((i__42887 < count__42886)){
var vec__42907 = chunk__42885.cljs$core$IIndexed$_nth$arity$2(null,i__42887);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42907,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42907,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___43060 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___43060)){
var effect_fn_43061 = temp__5802__auto___43060;
(effect_fn_43061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43061.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43062 = seq__42884;
var G__43063 = chunk__42885;
var G__43064 = count__42886;
var G__43065 = (i__42887 + (1));
seq__42884 = G__43062;
chunk__42885 = G__43063;
count__42886 = G__43064;
i__42887 = G__43065;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42884);
if(temp__5804__auto__){
var seq__42884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42884__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42884__$1);
var G__43067 = cljs.core.chunk_rest(seq__42884__$1);
var G__43068 = c__5568__auto__;
var G__43069 = cljs.core.count(c__5568__auto__);
var G__43070 = (0);
seq__42884 = G__43067;
chunk__42885 = G__43068;
count__42886 = G__43069;
i__42887 = G__43070;
continue;
} else {
var vec__42921 = cljs.core.first(seq__42884__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42921,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42921,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___43074 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___43074)){
var effect_fn_43075 = temp__5802__auto___43074;
(effect_fn_43075.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43075.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43075.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43076 = cljs.core.next(seq__42884__$1);
var G__43077 = null;
var G__43078 = (0);
var G__43079 = (0);
seq__42884 = G__43076;
chunk__42885 = G__43077;
count__42886 = G__43078;
i__42887 = G__43079;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__42933 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42934 = null;
var count__42935 = (0);
var i__42936 = (0);
while(true){
if((i__42936 < count__42935)){
var event = chunk__42934.cljs$core$IIndexed$_nth$arity$2(null,i__42936);
re_frame.router.dispatch(event);


var G__43082 = seq__42933;
var G__43083 = chunk__42934;
var G__43084 = count__42935;
var G__43085 = (i__42936 + (1));
seq__42933 = G__43082;
chunk__42934 = G__43083;
count__42935 = G__43084;
i__42936 = G__43085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42933);
if(temp__5804__auto__){
var seq__42933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42933__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42933__$1);
var G__43086 = cljs.core.chunk_rest(seq__42933__$1);
var G__43087 = c__5568__auto__;
var G__43088 = cljs.core.count(c__5568__auto__);
var G__43089 = (0);
seq__42933 = G__43086;
chunk__42934 = G__43087;
count__42935 = G__43088;
i__42936 = G__43089;
continue;
} else {
var event = cljs.core.first(seq__42933__$1);
re_frame.router.dispatch(event);


var G__43090 = cljs.core.next(seq__42933__$1);
var G__43091 = null;
var G__43092 = (0);
var G__43093 = (0);
seq__42933 = G__43090;
chunk__42934 = G__43091;
count__42935 = G__43092;
i__42936 = G__43093;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__42960 = cljs.core.seq(value);
var chunk__42961 = null;
var count__42962 = (0);
var i__42963 = (0);
while(true){
if((i__42963 < count__42962)){
var event = chunk__42961.cljs$core$IIndexed$_nth$arity$2(null,i__42963);
clear_event(event);


var G__43096 = seq__42960;
var G__43097 = chunk__42961;
var G__43098 = count__42962;
var G__43099 = (i__42963 + (1));
seq__42960 = G__43096;
chunk__42961 = G__43097;
count__42962 = G__43098;
i__42963 = G__43099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42960);
if(temp__5804__auto__){
var seq__42960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42960__$1);
var G__43100 = cljs.core.chunk_rest(seq__42960__$1);
var G__43101 = c__5568__auto__;
var G__43102 = cljs.core.count(c__5568__auto__);
var G__43103 = (0);
seq__42960 = G__43100;
chunk__42961 = G__43101;
count__42962 = G__43102;
i__42963 = G__43103;
continue;
} else {
var event = cljs.core.first(seq__42960__$1);
clear_event(event);


var G__43104 = cljs.core.next(seq__42960__$1);
var G__43105 = null;
var G__43106 = (0);
var G__43107 = (0);
seq__42960 = G__43104;
chunk__42961 = G__43105;
count__42962 = G__43106;
i__42963 = G__43107;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
