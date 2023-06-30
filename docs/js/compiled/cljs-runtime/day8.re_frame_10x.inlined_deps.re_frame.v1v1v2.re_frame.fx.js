goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28087 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28088 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28088);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___28223 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___28223)){
var new_db_28224 = temp__5804__auto___28223;
var fexpr__28093_28225 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28093_28225.cljs$core$IFn$_invoke$arity$1 ? fexpr__28093_28225.cljs$core$IFn$_invoke$arity$1(new_db_28224) : fexpr__28093_28225.call(null,new_db_28224));
} else {
}

var seq__28094 = cljs.core.seq(effects_without_db);
var chunk__28095 = null;
var count__28096 = (0);
var i__28097 = (0);
while(true){
if((i__28097 < count__28096)){
var vec__28110 = chunk__28095.cljs$core$IIndexed$_nth$arity$2(null,i__28097);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(1),null);
var temp__5802__auto___28226 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28226)){
var effect_fn_28227 = temp__5802__auto___28226;
(effect_fn_28227.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28227.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28227.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28228 = seq__28094;
var G__28229 = chunk__28095;
var G__28230 = count__28096;
var G__28231 = (i__28097 + (1));
seq__28094 = G__28228;
chunk__28095 = G__28229;
count__28096 = G__28230;
i__28097 = G__28231;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28094);
if(temp__5804__auto__){
var seq__28094__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28094__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28094__$1);
var G__28236 = cljs.core.chunk_rest(seq__28094__$1);
var G__28237 = c__5568__auto__;
var G__28238 = cljs.core.count(c__5568__auto__);
var G__28239 = (0);
seq__28094 = G__28236;
chunk__28095 = G__28237;
count__28096 = G__28238;
i__28097 = G__28239;
continue;
} else {
var vec__28121 = cljs.core.first(seq__28094__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(1),null);
var temp__5802__auto___28240 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28240)){
var effect_fn_28241 = temp__5802__auto___28240;
(effect_fn_28241.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28241.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28241.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28242 = cljs.core.next(seq__28094__$1);
var G__28243 = null;
var G__28244 = (0);
var G__28245 = (0);
seq__28094 = G__28242;
chunk__28095 = G__28243;
count__28096 = G__28244;
i__28097 = G__28245;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27528__auto___28246 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__27529__auto___28247 = (end__27528__auto___28246 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27529__auto___28247,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__27528__auto___28246);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28087);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___28248 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___28248)){
var new_db_28249 = temp__5804__auto___28248;
var fexpr__28124_28250 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28124_28250.cljs$core$IFn$_invoke$arity$1 ? fexpr__28124_28250.cljs$core$IFn$_invoke$arity$1(new_db_28249) : fexpr__28124_28250.call(null,new_db_28249));
} else {
}

var seq__28125 = cljs.core.seq(effects_without_db);
var chunk__28126 = null;
var count__28127 = (0);
var i__28128 = (0);
while(true){
if((i__28128 < count__28127)){
var vec__28144 = chunk__28126.cljs$core$IIndexed$_nth$arity$2(null,i__28128);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(1),null);
var temp__5802__auto___28251 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28251)){
var effect_fn_28252 = temp__5802__auto___28251;
(effect_fn_28252.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28252.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28252.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28253 = seq__28125;
var G__28254 = chunk__28126;
var G__28255 = count__28127;
var G__28256 = (i__28128 + (1));
seq__28125 = G__28253;
chunk__28126 = G__28254;
count__28127 = G__28255;
i__28128 = G__28256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28125);
if(temp__5804__auto__){
var seq__28125__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28125__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28125__$1);
var G__28257 = cljs.core.chunk_rest(seq__28125__$1);
var G__28258 = c__5568__auto__;
var G__28259 = cljs.core.count(c__5568__auto__);
var G__28260 = (0);
seq__28125 = G__28257;
chunk__28126 = G__28258;
count__28127 = G__28259;
i__28128 = G__28260;
continue;
} else {
var vec__28149 = cljs.core.first(seq__28125__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149,(1),null);
var temp__5802__auto___28262 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28262)){
var effect_fn_28263 = temp__5802__auto___28262;
(effect_fn_28263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28263.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28265 = cljs.core.next(seq__28125__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__28125 = G__28265;
chunk__28126 = G__28266;
count__28127 = G__28267;
i__28128 = G__28268;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__28154){
var map__28155 = p__28154;
var map__28155__$1 = cljs.core.__destructure_map(map__28155);
var effect = map__28155__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28155__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28155__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__28157 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28158 = null;
var count__28159 = (0);
var i__28160 = (0);
while(true){
if((i__28160 < count__28159)){
var effect = chunk__28158.cljs$core$IIndexed$_nth$arity$2(null,i__28160);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28269 = seq__28157;
var G__28270 = chunk__28158;
var G__28271 = count__28159;
var G__28272 = (i__28160 + (1));
seq__28157 = G__28269;
chunk__28158 = G__28270;
count__28159 = G__28271;
i__28160 = G__28272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28157);
if(temp__5804__auto__){
var seq__28157__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28157__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28157__$1);
var G__28273 = cljs.core.chunk_rest(seq__28157__$1);
var G__28274 = c__5568__auto__;
var G__28275 = cljs.core.count(c__5568__auto__);
var G__28276 = (0);
seq__28157 = G__28273;
chunk__28158 = G__28274;
count__28159 = G__28275;
i__28160 = G__28276;
continue;
} else {
var effect = cljs.core.first(seq__28157__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28278 = cljs.core.next(seq__28157__$1);
var G__28279 = null;
var G__28280 = (0);
var G__28281 = (0);
seq__28157 = G__28278;
chunk__28158 = G__28279;
count__28159 = G__28280;
i__28160 = G__28281;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28176 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28177 = null;
var count__28178 = (0);
var i__28179 = (0);
while(true){
if((i__28179 < count__28178)){
var vec__28188 = chunk__28177.cljs$core$IIndexed$_nth$arity$2(null,i__28179);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___28283 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28283)){
var effect_fn_28284 = temp__5802__auto___28283;
(effect_fn_28284.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28284.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28284.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28285 = seq__28176;
var G__28286 = chunk__28177;
var G__28287 = count__28178;
var G__28288 = (i__28179 + (1));
seq__28176 = G__28285;
chunk__28177 = G__28286;
count__28178 = G__28287;
i__28179 = G__28288;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28176);
if(temp__5804__auto__){
var seq__28176__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28176__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28176__$1);
var G__28289 = cljs.core.chunk_rest(seq__28176__$1);
var G__28290 = c__5568__auto__;
var G__28291 = cljs.core.count(c__5568__auto__);
var G__28292 = (0);
seq__28176 = G__28289;
chunk__28177 = G__28290;
count__28178 = G__28291;
i__28179 = G__28292;
continue;
} else {
var vec__28191 = cljs.core.first(seq__28176__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___28294 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___28294)){
var effect_fn_28295 = temp__5802__auto___28294;
(effect_fn_28295.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28295.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28295.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28297 = cljs.core.next(seq__28176__$1);
var G__28298 = null;
var G__28299 = (0);
var G__28300 = (0);
seq__28176 = G__28297;
chunk__28177 = G__28298;
count__28178 = G__28299;
i__28179 = G__28300;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28194 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28195 = null;
var count__28196 = (0);
var i__28197 = (0);
while(true){
if((i__28197 < count__28196)){
var event = chunk__28195.cljs$core$IIndexed$_nth$arity$2(null,i__28197);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28302 = seq__28194;
var G__28303 = chunk__28195;
var G__28304 = count__28196;
var G__28305 = (i__28197 + (1));
seq__28194 = G__28302;
chunk__28195 = G__28303;
count__28196 = G__28304;
i__28197 = G__28305;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28194);
if(temp__5804__auto__){
var seq__28194__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28194__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28194__$1);
var G__28306 = cljs.core.chunk_rest(seq__28194__$1);
var G__28307 = c__5568__auto__;
var G__28308 = cljs.core.count(c__5568__auto__);
var G__28309 = (0);
seq__28194 = G__28306;
chunk__28195 = G__28307;
count__28196 = G__28308;
i__28197 = G__28309;
continue;
} else {
var event = cljs.core.first(seq__28194__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28314 = cljs.core.next(seq__28194__$1);
var G__28315 = null;
var G__28316 = (0);
var G__28317 = (0);
seq__28194 = G__28314;
chunk__28195 = G__28315;
count__28196 = G__28316;
i__28197 = G__28317;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28203 = cljs.core.seq(value);
var chunk__28204 = null;
var count__28205 = (0);
var i__28206 = (0);
while(true){
if((i__28206 < count__28205)){
var event = chunk__28204.cljs$core$IIndexed$_nth$arity$2(null,i__28206);
clear_event(event);


var G__28319 = seq__28203;
var G__28320 = chunk__28204;
var G__28321 = count__28205;
var G__28322 = (i__28206 + (1));
seq__28203 = G__28319;
chunk__28204 = G__28320;
count__28205 = G__28321;
i__28206 = G__28322;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28203);
if(temp__5804__auto__){
var seq__28203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28203__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28203__$1);
var G__28325 = cljs.core.chunk_rest(seq__28203__$1);
var G__28326 = c__5568__auto__;
var G__28327 = cljs.core.count(c__5568__auto__);
var G__28328 = (0);
seq__28203 = G__28325;
chunk__28204 = G__28326;
count__28205 = G__28327;
i__28206 = G__28328;
continue;
} else {
var event = cljs.core.first(seq__28203__$1);
clear_event(event);


var G__28329 = cljs.core.next(seq__28203__$1);
var G__28330 = null;
var G__28331 = (0);
var G__28332 = (0);
seq__28203 = G__28329;
chunk__28204 = G__28330;
count__28205 = G__28331;
i__28206 = G__28332;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
