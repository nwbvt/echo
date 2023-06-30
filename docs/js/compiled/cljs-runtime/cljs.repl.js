goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__69966){
var map__69969 = p__69966;
var map__69969__$1 = cljs.core.__destructure_map(map__69969);
var m = map__69969__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69969__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__69975_70357 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__69976_70358 = null;
var count__69977_70359 = (0);
var i__69978_70360 = (0);
while(true){
if((i__69978_70360 < count__69977_70359)){
var f_70361 = chunk__69976_70358.cljs$core$IIndexed$_nth$arity$2(null,i__69978_70360);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70361], 0));


var G__70363 = seq__69975_70357;
var G__70364 = chunk__69976_70358;
var G__70365 = count__69977_70359;
var G__70366 = (i__69978_70360 + (1));
seq__69975_70357 = G__70363;
chunk__69976_70358 = G__70364;
count__69977_70359 = G__70365;
i__69978_70360 = G__70366;
continue;
} else {
var temp__5804__auto___70367 = cljs.core.seq(seq__69975_70357);
if(temp__5804__auto___70367){
var seq__69975_70368__$1 = temp__5804__auto___70367;
if(cljs.core.chunked_seq_QMARK_(seq__69975_70368__$1)){
var c__5568__auto___70369 = cljs.core.chunk_first(seq__69975_70368__$1);
var G__70370 = cljs.core.chunk_rest(seq__69975_70368__$1);
var G__70371 = c__5568__auto___70369;
var G__70372 = cljs.core.count(c__5568__auto___70369);
var G__70373 = (0);
seq__69975_70357 = G__70370;
chunk__69976_70358 = G__70371;
count__69977_70359 = G__70372;
i__69978_70360 = G__70373;
continue;
} else {
var f_70374 = cljs.core.first(seq__69975_70368__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70374], 0));


var G__70375 = cljs.core.next(seq__69975_70368__$1);
var G__70376 = null;
var G__70377 = (0);
var G__70378 = (0);
seq__69975_70357 = G__70375;
chunk__69976_70358 = G__70376;
count__69977_70359 = G__70377;
i__69978_70360 = G__70378;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70379 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70379], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70379)))?cljs.core.second(arglists_70379):arglists_70379)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70025_70381 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70026_70382 = null;
var count__70027_70383 = (0);
var i__70028_70384 = (0);
while(true){
if((i__70028_70384 < count__70027_70383)){
var vec__70063_70385 = chunk__70026_70382.cljs$core$IIndexed$_nth$arity$2(null,i__70028_70384);
var name_70386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70063_70385,(0),null);
var map__70066_70387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70063_70385,(1),null);
var map__70066_70388__$1 = cljs.core.__destructure_map(map__70066_70387);
var doc_70389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066_70388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066_70388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70386], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70390], 0));

if(cljs.core.truth_(doc_70389)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70389], 0));
} else {
}


var G__70391 = seq__70025_70381;
var G__70392 = chunk__70026_70382;
var G__70393 = count__70027_70383;
var G__70394 = (i__70028_70384 + (1));
seq__70025_70381 = G__70391;
chunk__70026_70382 = G__70392;
count__70027_70383 = G__70393;
i__70028_70384 = G__70394;
continue;
} else {
var temp__5804__auto___70395 = cljs.core.seq(seq__70025_70381);
if(temp__5804__auto___70395){
var seq__70025_70396__$1 = temp__5804__auto___70395;
if(cljs.core.chunked_seq_QMARK_(seq__70025_70396__$1)){
var c__5568__auto___70397 = cljs.core.chunk_first(seq__70025_70396__$1);
var G__70398 = cljs.core.chunk_rest(seq__70025_70396__$1);
var G__70399 = c__5568__auto___70397;
var G__70400 = cljs.core.count(c__5568__auto___70397);
var G__70401 = (0);
seq__70025_70381 = G__70398;
chunk__70026_70382 = G__70399;
count__70027_70383 = G__70400;
i__70028_70384 = G__70401;
continue;
} else {
var vec__70072_70402 = cljs.core.first(seq__70025_70396__$1);
var name_70403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70072_70402,(0),null);
var map__70075_70404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70072_70402,(1),null);
var map__70075_70405__$1 = cljs.core.__destructure_map(map__70075_70404);
var doc_70406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075_70405__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075_70405__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70403], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70407], 0));

if(cljs.core.truth_(doc_70406)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70406], 0));
} else {
}


var G__70411 = cljs.core.next(seq__70025_70396__$1);
var G__70412 = null;
var G__70413 = (0);
var G__70414 = (0);
seq__70025_70381 = G__70411;
chunk__70026_70382 = G__70412;
count__70027_70383 = G__70413;
i__70028_70384 = G__70414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70083 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70084 = null;
var count__70085 = (0);
var i__70086 = (0);
while(true){
if((i__70086 < count__70085)){
var role = chunk__70084.cljs$core$IIndexed$_nth$arity$2(null,i__70086);
var temp__5804__auto___70420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___70420__$1)){
var spec_70422 = temp__5804__auto___70420__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70422)], 0));
} else {
}


var G__70425 = seq__70083;
var G__70426 = chunk__70084;
var G__70427 = count__70085;
var G__70428 = (i__70086 + (1));
seq__70083 = G__70425;
chunk__70084 = G__70426;
count__70085 = G__70427;
i__70086 = G__70428;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__70083);
if(temp__5804__auto____$1){
var seq__70083__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70083__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__70083__$1);
var G__70429 = cljs.core.chunk_rest(seq__70083__$1);
var G__70430 = c__5568__auto__;
var G__70431 = cljs.core.count(c__5568__auto__);
var G__70432 = (0);
seq__70083 = G__70429;
chunk__70084 = G__70430;
count__70085 = G__70431;
i__70086 = G__70432;
continue;
} else {
var role = cljs.core.first(seq__70083__$1);
var temp__5804__auto___70444__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___70444__$2)){
var spec_70448 = temp__5804__auto___70444__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70448)], 0));
} else {
}


var G__70451 = cljs.core.next(seq__70083__$1);
var G__70452 = null;
var G__70453 = (0);
var G__70454 = (0);
seq__70083 = G__70451;
chunk__70084 = G__70452;
count__70085 = G__70453;
i__70086 = G__70454;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70456 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70457 = cljs.core.ex_cause(t);
via = G__70456;
t = G__70457;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70187 = datafied_throwable;
var map__70187__$1 = cljs.core.__destructure_map(map__70187);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70187__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70187__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70187__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70189 = cljs.core.last(via);
var map__70189__$1 = cljs.core.__destructure_map(map__70189);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70189__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70189__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70189__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70190 = data;
var map__70190__$1 = cljs.core.__destructure_map(map__70190);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70190__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70190__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70190__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70191 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70191__$1 = cljs.core.__destructure_map(map__70191);
var top_data = map__70191__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70197 = phase;
var G__70197__$1 = (((G__70197 instanceof cljs.core.Keyword))?G__70197.fqn:null);
switch (G__70197__$1) {
case "read-source":
var map__70202 = data;
var map__70202__$1 = cljs.core.__destructure_map(map__70202);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70211 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70211__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70211,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70211);
var G__70211__$2 = (cljs.core.truth_((function (){var fexpr__70221 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70221.cljs$core$IFn$_invoke$arity$1 ? fexpr__70221.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70221.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70211__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70211__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70211__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70222 = top_data;
var G__70222__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70222,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70222);
var G__70222__$2 = (cljs.core.truth_((function (){var fexpr__70223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70223.cljs$core$IFn$_invoke$arity$1 ? fexpr__70223.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70223.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70222__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70222__$1);
var G__70222__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70222__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70222__$2);
var G__70222__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70222__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70222__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70222__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70222__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70225,(3),null);
var G__70229 = top_data;
var G__70229__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70229,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70229);
var G__70229__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70229__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70229__$1);
var G__70229__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70229__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70229__$2);
var G__70229__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70229__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70229__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70229__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70229__$4;
}

break;
case "execution":
var vec__70238 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70175_SHARP_){
var or__5045__auto__ = (p1__70175_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__70245 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70245.cljs$core$IFn$_invoke$arity$1 ? fexpr__70245.cljs$core$IFn$_invoke$arity$1(p1__70175_SHARP_) : fexpr__70245.call(null,p1__70175_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__70246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70246__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70246);
var G__70246__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70246__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70246__$1);
var G__70246__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70246__$2);
var G__70246__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70246__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70246__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70197__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70252){
var map__70253 = p__70252;
var map__70253__$1 = cljs.core.__destructure_map(map__70253);
var triage_data = map__70253__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70253__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__70281 = phase;
var G__70281__$1 = (((G__70281 instanceof cljs.core.Keyword))?G__70281.fqn:null);
switch (G__70281__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70300 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70302 = loc;
var G__70303 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70306_70495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70307_70496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70308_70497 = true;
var _STAR_print_fn_STAR__temp_val__70309_70498 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70308_70497);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70309_70498);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70250_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70250_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70307_70496);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70306_70495);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70300,G__70301,G__70302,G__70303) : format.call(null,G__70300,G__70301,G__70302,G__70303));

break;
case "macroexpansion":
var G__70313 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70314 = cause_type;
var G__70315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70316 = loc;
var G__70317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70313,G__70314,G__70315,G__70316,G__70317) : format.call(null,G__70313,G__70314,G__70315,G__70316,G__70317));

break;
case "compile-syntax-check":
var G__70320 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70321 = cause_type;
var G__70322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70323 = loc;
var G__70324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70320,G__70321,G__70322,G__70323,G__70324) : format.call(null,G__70320,G__70321,G__70322,G__70323,G__70324));

break;
case "compilation":
var G__70326 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70327 = cause_type;
var G__70328 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70329 = loc;
var G__70330 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70326,G__70327,G__70328,G__70329,G__70330) : format.call(null,G__70326,G__70327,G__70328,G__70329,G__70330));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70332 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70333 = symbol;
var G__70334 = loc;
var G__70335 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70337_70499 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70338_70500 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70339_70501 = true;
var _STAR_print_fn_STAR__temp_val__70340_70502 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70339_70501);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70340_70502);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70251_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70251_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70338_70500);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70337_70499);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70332,G__70333,G__70334,G__70335) : format.call(null,G__70332,G__70333,G__70334,G__70335));
} else {
var G__70342 = "Execution error%s at %s(%s).\n%s\n";
var G__70343 = cause_type;
var G__70344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70345 = loc;
var G__70346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70342,G__70343,G__70344,G__70345,G__70346) : format.call(null,G__70342,G__70343,G__70344,G__70345,G__70346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70281__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
