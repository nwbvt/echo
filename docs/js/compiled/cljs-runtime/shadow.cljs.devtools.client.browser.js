goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___74968 = arguments.length;
var i__5770__auto___74969 = (0);
while(true){
if((i__5770__auto___74969 < len__5769__auto___74968)){
args__5775__auto__.push((arguments[i__5770__auto___74969]));

var G__74970 = (i__5770__auto___74969 + (1));
i__5770__auto___74969 = G__74970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq74369){
var G__74370 = cljs.core.first(seq74369);
var seq74369__$1 = cljs.core.next(seq74369);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74370,seq74369__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__74375 = cljs.core.seq(sources);
var chunk__74376 = null;
var count__74377 = (0);
var i__74378 = (0);
while(true){
if((i__74378 < count__74377)){
var map__74389 = chunk__74376.cljs$core$IIndexed$_nth$arity$2(null,i__74378);
var map__74389__$1 = cljs.core.__destructure_map(map__74389);
var src = map__74389__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74389__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74389__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74389__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74389__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74390){var e_74978 = e74390;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74978);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74978.message)].join('')));
}

var G__74979 = seq__74375;
var G__74980 = chunk__74376;
var G__74981 = count__74377;
var G__74982 = (i__74378 + (1));
seq__74375 = G__74979;
chunk__74376 = G__74980;
count__74377 = G__74981;
i__74378 = G__74982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74375);
if(temp__5804__auto__){
var seq__74375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74375__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74375__$1);
var G__74983 = cljs.core.chunk_rest(seq__74375__$1);
var G__74984 = c__5568__auto__;
var G__74985 = cljs.core.count(c__5568__auto__);
var G__74986 = (0);
seq__74375 = G__74983;
chunk__74376 = G__74984;
count__74377 = G__74985;
i__74378 = G__74986;
continue;
} else {
var map__74392 = cljs.core.first(seq__74375__$1);
var map__74392__$1 = cljs.core.__destructure_map(map__74392);
var src = map__74392__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74393){var e_74987 = e74393;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74987);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74987.message)].join('')));
}

var G__74988 = cljs.core.next(seq__74375__$1);
var G__74989 = null;
var G__74990 = (0);
var G__74991 = (0);
seq__74375 = G__74988;
chunk__74376 = G__74989;
count__74377 = G__74990;
i__74378 = G__74991;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__74399 = cljs.core.seq(js_requires);
var chunk__74400 = null;
var count__74401 = (0);
var i__74402 = (0);
while(true){
if((i__74402 < count__74401)){
var js_ns = chunk__74400.cljs$core$IIndexed$_nth$arity$2(null,i__74402);
var require_str_74996 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_74996);


var G__74997 = seq__74399;
var G__74998 = chunk__74400;
var G__74999 = count__74401;
var G__75000 = (i__74402 + (1));
seq__74399 = G__74997;
chunk__74400 = G__74998;
count__74401 = G__74999;
i__74402 = G__75000;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74399);
if(temp__5804__auto__){
var seq__74399__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74399__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74399__$1);
var G__75001 = cljs.core.chunk_rest(seq__74399__$1);
var G__75002 = c__5568__auto__;
var G__75003 = cljs.core.count(c__5568__auto__);
var G__75004 = (0);
seq__74399 = G__75001;
chunk__74400 = G__75002;
count__74401 = G__75003;
i__74402 = G__75004;
continue;
} else {
var js_ns = cljs.core.first(seq__74399__$1);
var require_str_75005 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_75005);


var G__75006 = cljs.core.next(seq__74399__$1);
var G__75007 = null;
var G__75008 = (0);
var G__75009 = (0);
seq__74399 = G__75006;
chunk__74400 = G__75007;
count__74401 = G__75008;
i__74402 = G__75009;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__74420){
var map__74422 = p__74420;
var map__74422__$1 = cljs.core.__destructure_map(map__74422);
var msg = map__74422__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74422__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74422__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74425(s__74426){
return (new cljs.core.LazySeq(null,(function (){
var s__74426__$1 = s__74426;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74426__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__74435 = cljs.core.first(xs__6360__auto__);
var map__74435__$1 = cljs.core.__destructure_map(map__74435);
var src = map__74435__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74435__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__74426__$1,map__74435,map__74435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74422,map__74422__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74425_$_iter__74427(s__74428){
return (new cljs.core.LazySeq(null,((function (s__74426__$1,map__74435,map__74435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74422,map__74422__$1,msg,info,reload_info){
return (function (){
var s__74428__$1 = s__74428;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74428__$1);
if(temp__5804__auto____$1){
var s__74428__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74428__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__74428__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__74430 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__74429 = (0);
while(true){
if((i__74429 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__74429);
cljs.core.chunk_append(b__74430,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__75010 = (i__74429 + (1));
i__74429 = G__75010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74430),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74425_$_iter__74427(cljs.core.chunk_rest(s__74428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74430),null);
}
} else {
var warning = cljs.core.first(s__74428__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74425_$_iter__74427(cljs.core.rest(s__74428__$2)));
}
} else {
return null;
}
break;
}
});})(s__74426__$1,map__74435,map__74435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74422,map__74422__$1,msg,info,reload_info))
,null,null));
});})(s__74426__$1,map__74435,map__74435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74422,map__74422__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74425(cljs.core.rest(s__74426__$1)));
} else {
var G__75011 = cljs.core.rest(s__74426__$1);
s__74426__$1 = G__75011;
continue;
}
} else {
var G__75012 = cljs.core.rest(s__74426__$1);
s__74426__$1 = G__75012;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__74446_75013 = cljs.core.seq(warnings);
var chunk__74447_75014 = null;
var count__74448_75015 = (0);
var i__74449_75016 = (0);
while(true){
if((i__74449_75016 < count__74448_75015)){
var map__74452_75017 = chunk__74447_75014.cljs$core$IIndexed$_nth$arity$2(null,i__74449_75016);
var map__74452_75018__$1 = cljs.core.__destructure_map(map__74452_75017);
var w_75019 = map__74452_75018__$1;
var msg_75020__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452_75018__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452_75018__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452_75018__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74452_75018__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75023)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75021),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75022),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75020__$1)].join(''));


var G__75024 = seq__74446_75013;
var G__75025 = chunk__74447_75014;
var G__75026 = count__74448_75015;
var G__75027 = (i__74449_75016 + (1));
seq__74446_75013 = G__75024;
chunk__74447_75014 = G__75025;
count__74448_75015 = G__75026;
i__74449_75016 = G__75027;
continue;
} else {
var temp__5804__auto___75028 = cljs.core.seq(seq__74446_75013);
if(temp__5804__auto___75028){
var seq__74446_75029__$1 = temp__5804__auto___75028;
if(cljs.core.chunked_seq_QMARK_(seq__74446_75029__$1)){
var c__5568__auto___75030 = cljs.core.chunk_first(seq__74446_75029__$1);
var G__75031 = cljs.core.chunk_rest(seq__74446_75029__$1);
var G__75032 = c__5568__auto___75030;
var G__75033 = cljs.core.count(c__5568__auto___75030);
var G__75034 = (0);
seq__74446_75013 = G__75031;
chunk__74447_75014 = G__75032;
count__74448_75015 = G__75033;
i__74449_75016 = G__75034;
continue;
} else {
var map__74456_75035 = cljs.core.first(seq__74446_75029__$1);
var map__74456_75036__$1 = cljs.core.__destructure_map(map__74456_75035);
var w_75037 = map__74456_75036__$1;
var msg_75038__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74456_75036__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74456_75036__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74456_75036__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74456_75036__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75041)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75039),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75040),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75038__$1)].join(''));


var G__75042 = cljs.core.next(seq__74446_75029__$1);
var G__75043 = null;
var G__75044 = (0);
var G__75045 = (0);
seq__74446_75013 = G__75042;
chunk__74447_75014 = G__75043;
count__74448_75015 = G__75044;
i__74449_75016 = G__75045;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__74418_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__74418_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__74465){
var map__74466 = p__74465;
var map__74466__$1 = cljs.core.__destructure_map(map__74466);
var msg = map__74466__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74466__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74466__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__74467 = cljs.core.seq(updates);
var chunk__74469 = null;
var count__74470 = (0);
var i__74471 = (0);
while(true){
if((i__74471 < count__74470)){
var path = chunk__74469.cljs$core$IIndexed$_nth$arity$2(null,i__74471);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74682_75046 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74686_75047 = null;
var count__74687_75048 = (0);
var i__74688_75049 = (0);
while(true){
if((i__74688_75049 < count__74687_75048)){
var node_75050 = chunk__74686_75047.cljs$core$IIndexed$_nth$arity$2(null,i__74688_75049);
if(cljs.core.not(node_75050.shadow$old)){
var path_match_75051 = shadow.cljs.devtools.client.browser.match_paths(node_75050.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75051)){
var new_link_75052 = (function (){var G__74741 = node_75050.cloneNode(true);
G__74741.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75051),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74741;
})();
(node_75050.shadow$old = true);

(new_link_75052.onload = ((function (seq__74682_75046,chunk__74686_75047,count__74687_75048,i__74688_75049,seq__74467,chunk__74469,count__74470,i__74471,new_link_75052,path_match_75051,node_75050,path,map__74466,map__74466__$1,msg,updates,reload_info){
return (function (e){
var seq__74742_75053 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74744_75054 = null;
var count__74745_75055 = (0);
var i__74746_75056 = (0);
while(true){
if((i__74746_75056 < count__74745_75055)){
var map__74755_75057 = chunk__74744_75054.cljs$core$IIndexed$_nth$arity$2(null,i__74746_75056);
var map__74755_75058__$1 = cljs.core.__destructure_map(map__74755_75057);
var task_75059 = map__74755_75058__$1;
var fn_str_75060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74755_75058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74755_75058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75062 = goog.getObjectByName(fn_str_75060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75061)].join(''));

(fn_obj_75062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75062.cljs$core$IFn$_invoke$arity$2(path,new_link_75052) : fn_obj_75062.call(null,path,new_link_75052));


var G__75063 = seq__74742_75053;
var G__75064 = chunk__74744_75054;
var G__75065 = count__74745_75055;
var G__75066 = (i__74746_75056 + (1));
seq__74742_75053 = G__75063;
chunk__74744_75054 = G__75064;
count__74745_75055 = G__75065;
i__74746_75056 = G__75066;
continue;
} else {
var temp__5804__auto___75067 = cljs.core.seq(seq__74742_75053);
if(temp__5804__auto___75067){
var seq__74742_75068__$1 = temp__5804__auto___75067;
if(cljs.core.chunked_seq_QMARK_(seq__74742_75068__$1)){
var c__5568__auto___75069 = cljs.core.chunk_first(seq__74742_75068__$1);
var G__75070 = cljs.core.chunk_rest(seq__74742_75068__$1);
var G__75071 = c__5568__auto___75069;
var G__75072 = cljs.core.count(c__5568__auto___75069);
var G__75073 = (0);
seq__74742_75053 = G__75070;
chunk__74744_75054 = G__75071;
count__74745_75055 = G__75072;
i__74746_75056 = G__75073;
continue;
} else {
var map__74756_75074 = cljs.core.first(seq__74742_75068__$1);
var map__74756_75075__$1 = cljs.core.__destructure_map(map__74756_75074);
var task_75076 = map__74756_75075__$1;
var fn_str_75077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74756_75075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74756_75075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75079 = goog.getObjectByName(fn_str_75077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75078)].join(''));

(fn_obj_75079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75079.cljs$core$IFn$_invoke$arity$2(path,new_link_75052) : fn_obj_75079.call(null,path,new_link_75052));


var G__75080 = cljs.core.next(seq__74742_75068__$1);
var G__75081 = null;
var G__75082 = (0);
var G__75083 = (0);
seq__74742_75053 = G__75080;
chunk__74744_75054 = G__75081;
count__74745_75055 = G__75082;
i__74746_75056 = G__75083;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75050);
});})(seq__74682_75046,chunk__74686_75047,count__74687_75048,i__74688_75049,seq__74467,chunk__74469,count__74470,i__74471,new_link_75052,path_match_75051,node_75050,path,map__74466,map__74466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75051], 0));

goog.dom.insertSiblingAfter(new_link_75052,node_75050);


var G__75084 = seq__74682_75046;
var G__75085 = chunk__74686_75047;
var G__75086 = count__74687_75048;
var G__75087 = (i__74688_75049 + (1));
seq__74682_75046 = G__75084;
chunk__74686_75047 = G__75085;
count__74687_75048 = G__75086;
i__74688_75049 = G__75087;
continue;
} else {
var G__75088 = seq__74682_75046;
var G__75089 = chunk__74686_75047;
var G__75090 = count__74687_75048;
var G__75091 = (i__74688_75049 + (1));
seq__74682_75046 = G__75088;
chunk__74686_75047 = G__75089;
count__74687_75048 = G__75090;
i__74688_75049 = G__75091;
continue;
}
} else {
var G__75092 = seq__74682_75046;
var G__75093 = chunk__74686_75047;
var G__75094 = count__74687_75048;
var G__75095 = (i__74688_75049 + (1));
seq__74682_75046 = G__75092;
chunk__74686_75047 = G__75093;
count__74687_75048 = G__75094;
i__74688_75049 = G__75095;
continue;
}
} else {
var temp__5804__auto___75096 = cljs.core.seq(seq__74682_75046);
if(temp__5804__auto___75096){
var seq__74682_75097__$1 = temp__5804__auto___75096;
if(cljs.core.chunked_seq_QMARK_(seq__74682_75097__$1)){
var c__5568__auto___75098 = cljs.core.chunk_first(seq__74682_75097__$1);
var G__75099 = cljs.core.chunk_rest(seq__74682_75097__$1);
var G__75100 = c__5568__auto___75098;
var G__75101 = cljs.core.count(c__5568__auto___75098);
var G__75102 = (0);
seq__74682_75046 = G__75099;
chunk__74686_75047 = G__75100;
count__74687_75048 = G__75101;
i__74688_75049 = G__75102;
continue;
} else {
var node_75103 = cljs.core.first(seq__74682_75097__$1);
if(cljs.core.not(node_75103.shadow$old)){
var path_match_75104 = shadow.cljs.devtools.client.browser.match_paths(node_75103.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75104)){
var new_link_75105 = (function (){var G__74758 = node_75103.cloneNode(true);
G__74758.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75104),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74758;
})();
(node_75103.shadow$old = true);

(new_link_75105.onload = ((function (seq__74682_75046,chunk__74686_75047,count__74687_75048,i__74688_75049,seq__74467,chunk__74469,count__74470,i__74471,new_link_75105,path_match_75104,node_75103,seq__74682_75097__$1,temp__5804__auto___75096,path,map__74466,map__74466__$1,msg,updates,reload_info){
return (function (e){
var seq__74767_75106 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74769_75107 = null;
var count__74770_75108 = (0);
var i__74771_75109 = (0);
while(true){
if((i__74771_75109 < count__74770_75108)){
var map__74782_75110 = chunk__74769_75107.cljs$core$IIndexed$_nth$arity$2(null,i__74771_75109);
var map__74782_75111__$1 = cljs.core.__destructure_map(map__74782_75110);
var task_75112 = map__74782_75111__$1;
var fn_str_75113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74782_75111__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74782_75111__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75115 = goog.getObjectByName(fn_str_75113,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75114)].join(''));

(fn_obj_75115.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75115.cljs$core$IFn$_invoke$arity$2(path,new_link_75105) : fn_obj_75115.call(null,path,new_link_75105));


var G__75116 = seq__74767_75106;
var G__75117 = chunk__74769_75107;
var G__75118 = count__74770_75108;
var G__75119 = (i__74771_75109 + (1));
seq__74767_75106 = G__75116;
chunk__74769_75107 = G__75117;
count__74770_75108 = G__75118;
i__74771_75109 = G__75119;
continue;
} else {
var temp__5804__auto___75120__$1 = cljs.core.seq(seq__74767_75106);
if(temp__5804__auto___75120__$1){
var seq__74767_75121__$1 = temp__5804__auto___75120__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74767_75121__$1)){
var c__5568__auto___75122 = cljs.core.chunk_first(seq__74767_75121__$1);
var G__75123 = cljs.core.chunk_rest(seq__74767_75121__$1);
var G__75124 = c__5568__auto___75122;
var G__75125 = cljs.core.count(c__5568__auto___75122);
var G__75126 = (0);
seq__74767_75106 = G__75123;
chunk__74769_75107 = G__75124;
count__74770_75108 = G__75125;
i__74771_75109 = G__75126;
continue;
} else {
var map__74783_75127 = cljs.core.first(seq__74767_75121__$1);
var map__74783_75128__$1 = cljs.core.__destructure_map(map__74783_75127);
var task_75129 = map__74783_75128__$1;
var fn_str_75130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74783_75128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74783_75128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75132 = goog.getObjectByName(fn_str_75130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75131)].join(''));

(fn_obj_75132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75132.cljs$core$IFn$_invoke$arity$2(path,new_link_75105) : fn_obj_75132.call(null,path,new_link_75105));


var G__75133 = cljs.core.next(seq__74767_75121__$1);
var G__75134 = null;
var G__75135 = (0);
var G__75136 = (0);
seq__74767_75106 = G__75133;
chunk__74769_75107 = G__75134;
count__74770_75108 = G__75135;
i__74771_75109 = G__75136;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75103);
});})(seq__74682_75046,chunk__74686_75047,count__74687_75048,i__74688_75049,seq__74467,chunk__74469,count__74470,i__74471,new_link_75105,path_match_75104,node_75103,seq__74682_75097__$1,temp__5804__auto___75096,path,map__74466,map__74466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75104], 0));

goog.dom.insertSiblingAfter(new_link_75105,node_75103);


var G__75137 = cljs.core.next(seq__74682_75097__$1);
var G__75138 = null;
var G__75139 = (0);
var G__75140 = (0);
seq__74682_75046 = G__75137;
chunk__74686_75047 = G__75138;
count__74687_75048 = G__75139;
i__74688_75049 = G__75140;
continue;
} else {
var G__75141 = cljs.core.next(seq__74682_75097__$1);
var G__75142 = null;
var G__75143 = (0);
var G__75144 = (0);
seq__74682_75046 = G__75141;
chunk__74686_75047 = G__75142;
count__74687_75048 = G__75143;
i__74688_75049 = G__75144;
continue;
}
} else {
var G__75145 = cljs.core.next(seq__74682_75097__$1);
var G__75146 = null;
var G__75147 = (0);
var G__75148 = (0);
seq__74682_75046 = G__75145;
chunk__74686_75047 = G__75146;
count__74687_75048 = G__75147;
i__74688_75049 = G__75148;
continue;
}
}
} else {
}
}
break;
}


var G__75149 = seq__74467;
var G__75150 = chunk__74469;
var G__75151 = count__74470;
var G__75152 = (i__74471 + (1));
seq__74467 = G__75149;
chunk__74469 = G__75150;
count__74470 = G__75151;
i__74471 = G__75152;
continue;
} else {
var G__75153 = seq__74467;
var G__75154 = chunk__74469;
var G__75155 = count__74470;
var G__75156 = (i__74471 + (1));
seq__74467 = G__75153;
chunk__74469 = G__75154;
count__74470 = G__75155;
i__74471 = G__75156;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74467);
if(temp__5804__auto__){
var seq__74467__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74467__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74467__$1);
var G__75157 = cljs.core.chunk_rest(seq__74467__$1);
var G__75158 = c__5568__auto__;
var G__75159 = cljs.core.count(c__5568__auto__);
var G__75160 = (0);
seq__74467 = G__75157;
chunk__74469 = G__75158;
count__74470 = G__75159;
i__74471 = G__75160;
continue;
} else {
var path = cljs.core.first(seq__74467__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74784_75161 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74788_75162 = null;
var count__74789_75163 = (0);
var i__74790_75164 = (0);
while(true){
if((i__74790_75164 < count__74789_75163)){
var node_75165 = chunk__74788_75162.cljs$core$IIndexed$_nth$arity$2(null,i__74790_75164);
if(cljs.core.not(node_75165.shadow$old)){
var path_match_75166 = shadow.cljs.devtools.client.browser.match_paths(node_75165.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75166)){
var new_link_75167 = (function (){var G__74841 = node_75165.cloneNode(true);
G__74841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75166),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74841;
})();
(node_75165.shadow$old = true);

(new_link_75167.onload = ((function (seq__74784_75161,chunk__74788_75162,count__74789_75163,i__74790_75164,seq__74467,chunk__74469,count__74470,i__74471,new_link_75167,path_match_75166,node_75165,path,seq__74467__$1,temp__5804__auto__,map__74466,map__74466__$1,msg,updates,reload_info){
return (function (e){
var seq__74843_75168 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74845_75169 = null;
var count__74846_75170 = (0);
var i__74847_75171 = (0);
while(true){
if((i__74847_75171 < count__74846_75170)){
var map__74853_75172 = chunk__74845_75169.cljs$core$IIndexed$_nth$arity$2(null,i__74847_75171);
var map__74853_75173__$1 = cljs.core.__destructure_map(map__74853_75172);
var task_75174 = map__74853_75173__$1;
var fn_str_75175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74853_75173__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74853_75173__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75177 = goog.getObjectByName(fn_str_75175,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75176)].join(''));

(fn_obj_75177.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75177.cljs$core$IFn$_invoke$arity$2(path,new_link_75167) : fn_obj_75177.call(null,path,new_link_75167));


var G__75178 = seq__74843_75168;
var G__75179 = chunk__74845_75169;
var G__75180 = count__74846_75170;
var G__75181 = (i__74847_75171 + (1));
seq__74843_75168 = G__75178;
chunk__74845_75169 = G__75179;
count__74846_75170 = G__75180;
i__74847_75171 = G__75181;
continue;
} else {
var temp__5804__auto___75182__$1 = cljs.core.seq(seq__74843_75168);
if(temp__5804__auto___75182__$1){
var seq__74843_75183__$1 = temp__5804__auto___75182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74843_75183__$1)){
var c__5568__auto___75184 = cljs.core.chunk_first(seq__74843_75183__$1);
var G__75185 = cljs.core.chunk_rest(seq__74843_75183__$1);
var G__75186 = c__5568__auto___75184;
var G__75187 = cljs.core.count(c__5568__auto___75184);
var G__75188 = (0);
seq__74843_75168 = G__75185;
chunk__74845_75169 = G__75186;
count__74846_75170 = G__75187;
i__74847_75171 = G__75188;
continue;
} else {
var map__74856_75189 = cljs.core.first(seq__74843_75183__$1);
var map__74856_75190__$1 = cljs.core.__destructure_map(map__74856_75189);
var task_75191 = map__74856_75190__$1;
var fn_str_75192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74856_75190__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74856_75190__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75194 = goog.getObjectByName(fn_str_75192,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75193)].join(''));

(fn_obj_75194.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75194.cljs$core$IFn$_invoke$arity$2(path,new_link_75167) : fn_obj_75194.call(null,path,new_link_75167));


var G__75195 = cljs.core.next(seq__74843_75183__$1);
var G__75196 = null;
var G__75197 = (0);
var G__75198 = (0);
seq__74843_75168 = G__75195;
chunk__74845_75169 = G__75196;
count__74846_75170 = G__75197;
i__74847_75171 = G__75198;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75165);
});})(seq__74784_75161,chunk__74788_75162,count__74789_75163,i__74790_75164,seq__74467,chunk__74469,count__74470,i__74471,new_link_75167,path_match_75166,node_75165,path,seq__74467__$1,temp__5804__auto__,map__74466,map__74466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75166], 0));

goog.dom.insertSiblingAfter(new_link_75167,node_75165);


var G__75199 = seq__74784_75161;
var G__75200 = chunk__74788_75162;
var G__75201 = count__74789_75163;
var G__75202 = (i__74790_75164 + (1));
seq__74784_75161 = G__75199;
chunk__74788_75162 = G__75200;
count__74789_75163 = G__75201;
i__74790_75164 = G__75202;
continue;
} else {
var G__75203 = seq__74784_75161;
var G__75204 = chunk__74788_75162;
var G__75205 = count__74789_75163;
var G__75206 = (i__74790_75164 + (1));
seq__74784_75161 = G__75203;
chunk__74788_75162 = G__75204;
count__74789_75163 = G__75205;
i__74790_75164 = G__75206;
continue;
}
} else {
var G__75207 = seq__74784_75161;
var G__75208 = chunk__74788_75162;
var G__75209 = count__74789_75163;
var G__75210 = (i__74790_75164 + (1));
seq__74784_75161 = G__75207;
chunk__74788_75162 = G__75208;
count__74789_75163 = G__75209;
i__74790_75164 = G__75210;
continue;
}
} else {
var temp__5804__auto___75211__$1 = cljs.core.seq(seq__74784_75161);
if(temp__5804__auto___75211__$1){
var seq__74784_75212__$1 = temp__5804__auto___75211__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74784_75212__$1)){
var c__5568__auto___75213 = cljs.core.chunk_first(seq__74784_75212__$1);
var G__75214 = cljs.core.chunk_rest(seq__74784_75212__$1);
var G__75215 = c__5568__auto___75213;
var G__75216 = cljs.core.count(c__5568__auto___75213);
var G__75217 = (0);
seq__74784_75161 = G__75214;
chunk__74788_75162 = G__75215;
count__74789_75163 = G__75216;
i__74790_75164 = G__75217;
continue;
} else {
var node_75218 = cljs.core.first(seq__74784_75212__$1);
if(cljs.core.not(node_75218.shadow$old)){
var path_match_75219 = shadow.cljs.devtools.client.browser.match_paths(node_75218.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75219)){
var new_link_75220 = (function (){var G__74861 = node_75218.cloneNode(true);
G__74861.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75219),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74861;
})();
(node_75218.shadow$old = true);

(new_link_75220.onload = ((function (seq__74784_75161,chunk__74788_75162,count__74789_75163,i__74790_75164,seq__74467,chunk__74469,count__74470,i__74471,new_link_75220,path_match_75219,node_75218,seq__74784_75212__$1,temp__5804__auto___75211__$1,path,seq__74467__$1,temp__5804__auto__,map__74466,map__74466__$1,msg,updates,reload_info){
return (function (e){
var seq__74863_75221 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74865_75222 = null;
var count__74866_75223 = (0);
var i__74867_75224 = (0);
while(true){
if((i__74867_75224 < count__74866_75223)){
var map__74874_75225 = chunk__74865_75222.cljs$core$IIndexed$_nth$arity$2(null,i__74867_75224);
var map__74874_75226__$1 = cljs.core.__destructure_map(map__74874_75225);
var task_75227 = map__74874_75226__$1;
var fn_str_75228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74874_75226__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74874_75226__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75230 = goog.getObjectByName(fn_str_75228,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75229)].join(''));

(fn_obj_75230.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75230.cljs$core$IFn$_invoke$arity$2(path,new_link_75220) : fn_obj_75230.call(null,path,new_link_75220));


var G__75231 = seq__74863_75221;
var G__75232 = chunk__74865_75222;
var G__75233 = count__74866_75223;
var G__75234 = (i__74867_75224 + (1));
seq__74863_75221 = G__75231;
chunk__74865_75222 = G__75232;
count__74866_75223 = G__75233;
i__74867_75224 = G__75234;
continue;
} else {
var temp__5804__auto___75235__$2 = cljs.core.seq(seq__74863_75221);
if(temp__5804__auto___75235__$2){
var seq__74863_75236__$1 = temp__5804__auto___75235__$2;
if(cljs.core.chunked_seq_QMARK_(seq__74863_75236__$1)){
var c__5568__auto___75237 = cljs.core.chunk_first(seq__74863_75236__$1);
var G__75238 = cljs.core.chunk_rest(seq__74863_75236__$1);
var G__75239 = c__5568__auto___75237;
var G__75240 = cljs.core.count(c__5568__auto___75237);
var G__75241 = (0);
seq__74863_75221 = G__75238;
chunk__74865_75222 = G__75239;
count__74866_75223 = G__75240;
i__74867_75224 = G__75241;
continue;
} else {
var map__74877_75242 = cljs.core.first(seq__74863_75236__$1);
var map__74877_75243__$1 = cljs.core.__destructure_map(map__74877_75242);
var task_75244 = map__74877_75243__$1;
var fn_str_75245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74877_75243__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74877_75243__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75247 = goog.getObjectByName(fn_str_75245,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75246)].join(''));

(fn_obj_75247.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75247.cljs$core$IFn$_invoke$arity$2(path,new_link_75220) : fn_obj_75247.call(null,path,new_link_75220));


var G__75248 = cljs.core.next(seq__74863_75236__$1);
var G__75249 = null;
var G__75250 = (0);
var G__75251 = (0);
seq__74863_75221 = G__75248;
chunk__74865_75222 = G__75249;
count__74866_75223 = G__75250;
i__74867_75224 = G__75251;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75218);
});})(seq__74784_75161,chunk__74788_75162,count__74789_75163,i__74790_75164,seq__74467,chunk__74469,count__74470,i__74471,new_link_75220,path_match_75219,node_75218,seq__74784_75212__$1,temp__5804__auto___75211__$1,path,seq__74467__$1,temp__5804__auto__,map__74466,map__74466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75219], 0));

goog.dom.insertSiblingAfter(new_link_75220,node_75218);


var G__75252 = cljs.core.next(seq__74784_75212__$1);
var G__75253 = null;
var G__75254 = (0);
var G__75255 = (0);
seq__74784_75161 = G__75252;
chunk__74788_75162 = G__75253;
count__74789_75163 = G__75254;
i__74790_75164 = G__75255;
continue;
} else {
var G__75256 = cljs.core.next(seq__74784_75212__$1);
var G__75257 = null;
var G__75258 = (0);
var G__75259 = (0);
seq__74784_75161 = G__75256;
chunk__74788_75162 = G__75257;
count__74789_75163 = G__75258;
i__74790_75164 = G__75259;
continue;
}
} else {
var G__75260 = cljs.core.next(seq__74784_75212__$1);
var G__75261 = null;
var G__75262 = (0);
var G__75263 = (0);
seq__74784_75161 = G__75260;
chunk__74788_75162 = G__75261;
count__74789_75163 = G__75262;
i__74790_75164 = G__75263;
continue;
}
}
} else {
}
}
break;
}


var G__75264 = cljs.core.next(seq__74467__$1);
var G__75265 = null;
var G__75266 = (0);
var G__75267 = (0);
seq__74467 = G__75264;
chunk__74469 = G__75265;
count__74470 = G__75266;
i__74471 = G__75267;
continue;
} else {
var G__75268 = cljs.core.next(seq__74467__$1);
var G__75269 = null;
var G__75270 = (0);
var G__75271 = (0);
seq__74467 = G__75268;
chunk__74469 = G__75269;
count__74470 = G__75270;
i__74471 = G__75271;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__74881){
var map__74882 = p__74881;
var map__74882__$1 = cljs.core.__destructure_map(map__74882);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74882__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__74889){
var map__74890 = p__74889;
var map__74890__$1 = cljs.core.__destructure_map(map__74890);
var _ = map__74890__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74890__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__74891,done,error){
var map__74892 = p__74891;
var map__74892__$1 = cljs.core.__destructure_map(map__74892);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74892__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__74893,done,error){
var map__74894 = p__74893;
var map__74894__$1 = cljs.core.__destructure_map(map__74894);
var msg = map__74894__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74894__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74894__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74894__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74896){
var map__74901 = p__74896;
var map__74901__$1 = cljs.core.__destructure_map(map__74901);
var src = map__74901__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74901__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__74905 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__74905) : done.call(null,G__74905));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__74906){
var map__74907 = p__74906;
var map__74907__$1 = cljs.core.__destructure_map(map__74907);
var msg__$1 = map__74907__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74907__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e74908){var ex = e74908;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__74912){
var map__74914 = p__74912;
var map__74914__$1 = cljs.core.__destructure_map(map__74914);
var env = map__74914__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__74936){
var map__74937 = p__74936;
var map__74937__$1 = cljs.core.__destructure_map(map__74937);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74937__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74937__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__74944){
var map__74947 = p__74944;
var map__74947__$1 = cljs.core.__destructure_map(map__74947);
var svc = map__74947__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
