goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28548 = arguments.length;
var i__5770__auto___28554 = (0);
while(true){
if((i__5770__auto___28554 < len__5769__auto___28548)){
args__5775__auto__.push((arguments[i__5770__auto___28554]));

var G__28555 = (i__5770__auto___28554 + (1));
i__5770__auto___28554 = G__28555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$applyTo = (function (seq28431){
var G__28432 = cljs.core.first(seq28431);
var seq28431__$1 = cljs.core.next(seq28431);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28432,seq28431__$1);
}));


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString = function(){};

var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_28570 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_28570(this$);
}
});

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["_"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["null"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$as_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28609 = arguments.length;
var i__5770__auto___28610 = (0);
while(true){
if((i__5770__auto___28610 < len__5769__auto___28609)){
args__5775__auto__.push((arguments[i__5770__auto___28610]));

var G__28611 = (i__5770__auto___28610 + (1));
i__5770__auto___28610 = G__28611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,args));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$applyTo = (function (seq28443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28443));
}));

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$string__GT_int(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28612 = arguments.length;
var i__5770__auto___28613 = (0);
while(true){
if((i__5770__auto___28613 < len__5769__auto___28612)){
args__5775__auto__.push((arguments[i__5770__auto___28613]));

var G__28614 = (i__5770__auto___28613 + (1));
i__5770__auto___28613 = G__28614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__28453){
var vec__28454 = p__28453;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(0),null);
var radix__$1 = (function (){var or__5045__auto__ = radix;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq28447){
var G__28448 = cljs.core.first(seq28447);
var seq28447__$1 = cljs.core.next(seq28447);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28448,seq28447__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$int__GT_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28615 = arguments.length;
var i__5770__auto___28616 = (0);
while(true){
if((i__5770__auto___28616 < len__5769__auto___28615)){
args__5775__auto__.push((arguments[i__5770__auto___28616]));

var G__28617 = (i__5770__auto___28616 + (1));
i__5770__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__28464){
var vec__28465 = p__28464;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28465,(0),null);
var radix__$1 = (function (){var or__5045__auto__ = radix;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq28462){
var G__28463 = cljs.core.first(seq28462);
var seq28462__$1 = cljs.core.next(seq28462);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28463,seq28462__$1);
}));

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join(xs){
var ys = (function (){var iter__5523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__28472(s__28473){
return (new cljs.core.LazySeq(null,(function (){
var s__28473__$1 = s__28473;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28473__$1);
if(temp__5804__auto__){
var s__28473__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28473__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28473__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28475 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28474 = (0);
while(true){
if((i__28474 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__28474);
cljs.core.chunk_append(b__28475,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)));

var G__28625 = (i__28474 + (1));
i__28474 = G__28625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28475),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__28472(cljs.core.chunk_rest(s__28473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28475),null);
}
} else {
var x = cljs.core.first(s__28473__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__28472(cljs.core.rest(s__28473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_supports_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5133__auto__ = a;
var y__5134__auto__ = b;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var top = (function (){var x__5130__auto__ = a;
var y__5131__auto__ = b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$clip(a,b,n){
var vec__28490 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490,(1),null);
var x__5130__auto__ = a__$1;
var y__5131__auto__ = (function (){var x__5133__auto__ = b__$1;
var y__5134__auto__ = n;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$average(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28641 = arguments.length;
var i__5770__auto___28642 = (0);
while(true){
if((i__5770__auto___28642 < len__5769__auto___28641)){
args__5775__auto__.push((arguments[i__5770__auto___28642]));

var G__28643 = (i__5770__auto___28642 + (1));
i__5770__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$applyTo = (function (seq28499){
var G__28500 = cljs.core.first(seq28499);
var seq28499__$1 = cljs.core.next(seq28499);
var G__28501 = cljs.core.first(seq28499__$1);
var seq28499__$2 = cljs.core.next(seq28499__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28500,G__28501,seq28499__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$cartesian_product(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28645 = arguments.length;
var i__5770__auto___28646 = (0);
while(true){
if((i__5770__auto___28646 < len__5769__auto___28645)){
args__5775__auto__.push((arguments[i__5770__auto___28646]));

var G__28648 = (i__5770__auto___28646 + (1));
i__5770__auto___28646 = G__28648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__28662 = (i - (1));
var G__28663 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__28662;
v_seqs__$2 = G__28663;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq28528){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28528));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.js.map