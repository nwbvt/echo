goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__71493 = libspec;
var seq__71494 = cljs.core.seq(vec__71493);
var first__71495 = cljs.core.first(seq__71494);
var seq__71494__$1 = cljs.core.next(seq__71494);
var lib = first__71495;
var spec = seq__71494__$1;
var libspec__$1 = vec__71493;
var vec__71496 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71496,(0),null);
var vec__71499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71496,(1),null);
var seq__71500 = cljs.core.seq(vec__71499);
var first__71501 = cljs.core.first(seq__71500);
var seq__71500__$1 = cljs.core.next(seq__71500);
var _ = first__71501;
var first__71501__$1 = cljs.core.first(seq__71500__$1);
var seq__71500__$2 = cljs.core.next(seq__71500__$1);
var alias = first__71501__$1;
var post_spec = seq__71500__$2;
var post = vec__71499;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__71502 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71502,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__71502;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__71503 = cljs.core.seq(new_as_aliases);
var chunk__71504 = null;
var count__71505 = (0);
var i__71506 = (0);
while(true){
if((i__71506 < count__71505)){
var vec__71515 = chunk__71504.cljs$core$IIndexed$_nth$arity$2(null,i__71506);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71515,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71515,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__71579 = seq__71503;
var G__71580 = chunk__71504;
var G__71581 = count__71505;
var G__71582 = (i__71506 + (1));
seq__71503 = G__71579;
chunk__71504 = G__71580;
count__71505 = G__71581;
i__71506 = G__71582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71503);
if(temp__5804__auto__){
var seq__71503__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71503__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71503__$1);
var G__71585 = cljs.core.chunk_rest(seq__71503__$1);
var G__71586 = c__5568__auto__;
var G__71587 = cljs.core.count(c__5568__auto__);
var G__71588 = (0);
seq__71503 = G__71585;
chunk__71504 = G__71586;
count__71505 = G__71587;
i__71506 = G__71588;
continue;
} else {
var vec__71540 = cljs.core.first(seq__71503__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71540,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71540,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__71601 = cljs.core.next(seq__71503__$1);
var G__71602 = null;
var G__71603 = (0);
var G__71604 = (0);
seq__71503 = G__71601;
chunk__71504 = G__71602;
count__71505 = G__71603;
i__71506 = G__71604;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__71547 = arguments.length;
switch (G__71547) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__71552 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__71552__$1 = cljs.core.__destructure_map(map__71552);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71552__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71552__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__71554 = ret__$1;
var G__71554__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71554,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__71554);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71554__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__71554__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__71559,p__71560){
var map__71561 = p__71559;
var map__71561__$1 = cljs.core.__destructure_map(map__71561);
var ret__$1 = map__71561__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71561__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__71562 = p__71560;
var seq__71563 = cljs.core.seq(vec__71562);
var first__71564 = cljs.core.first(seq__71563);
var seq__71563__$1 = cljs.core.next(seq__71563);
var spec_key = first__71564;
var libspecs = seq__71563__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__71568 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__71568__$1 = cljs.core.__destructure_map(map__71568);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71568__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71568__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__71570 = ret__$1;
var G__71570__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71570,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__71570);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71570__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__71570__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
