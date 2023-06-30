goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__52612 = arguments.length;
switch (G__52612) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__52614 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52615 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52615);

try{var G__52619 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__52619);

return G__52619;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52614);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__52620 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52621 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52621);

try{var G__52622 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__52622);

return G__52622;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52620);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__52624 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52625 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52625);

try{var G__52627 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__52627);

return G__52627;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52624);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__52820 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52821 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52821);

try{var G__52822 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__52822);

return G__52822;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52820);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__52839 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52840 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52840);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52839);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53346 = arguments.length;
var i__5770__auto___53347 = (0);
while(true){
if((i__5770__auto___53347 < len__5769__auto___53346)){
args__5775__auto__.push((arguments[i__5770__auto___53347]));

var G__53351 = (i__5770__auto___53347 + (1));
i__5770__auto___53347 = G__53351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52865 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52866 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52867 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52868 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52869 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52870 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52871 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52872 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52873 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52874 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52875 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52876 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52877 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52878 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52872);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52873);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52874);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52875);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52876);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52877);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52878);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52871);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52870);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52869);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52868);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52867);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52866);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52865);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq52849){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52849));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__52926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52927 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52927);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52926);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53367 = arguments.length;
var i__5770__auto___53368 = (0);
while(true){
if((i__5770__auto___53368 < len__5769__auto___53367)){
args__5775__auto__.push((arguments[i__5770__auto___53368]));

var G__53372 = (i__5770__auto___53368 + (1));
i__5770__auto___53368 = G__53372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52960 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52961 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52962 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52963 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52964 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52965 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52966 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52967 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52968 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52969 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52970 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52971 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52966);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52967);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52968);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52969);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52970);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52971);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52965);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52964);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52963);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52962);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52961);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52960);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq52941){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52941));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53388 = arguments.length;
var i__5770__auto___53392 = (0);
while(true){
if((i__5770__auto___53392 < len__5769__auto___53388)){
args__5775__auto__.push((arguments[i__5770__auto___53392]));

var G__53393 = (i__5770__auto___53392 + (1));
i__5770__auto___53392 = G__53393;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53009 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53010 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53011 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53012 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53013 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__53015 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53016 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53017 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53018 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53019 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53020 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53021 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53015);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53016);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53017);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53018);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53019);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53020);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53021);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53014);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53013);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53012);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53011);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53010);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53008);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq52993){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52993));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53411 = arguments.length;
var i__5770__auto___53412 = (0);
while(true){
if((i__5770__auto___53412 < len__5769__auto___53411)){
args__5775__auto__.push((arguments[i__5770__auto___53412]));

var G__53413 = (i__5770__auto___53412 + (1));
i__5770__auto___53412 = G__53413;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53072 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53073 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53074 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53075 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53076 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__53078 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53079 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53080 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53081 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53082 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53083 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53078);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53079);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53080);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53081);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53082);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53083);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53077);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53076);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53075);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53074);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53073);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53072);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53042){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53042));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53423 = arguments.length;
var i__5770__auto___53424 = (0);
while(true){
if((i__5770__auto___53424 < len__5769__auto___53423)){
args__5775__auto__.push((arguments[i__5770__auto___53424]));

var G__53425 = (i__5770__auto___53424 + (1));
i__5770__auto___53424 = G__53425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53123 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53124 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53125 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53126 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53127 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__53129 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53130 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53131 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53132 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53133 = null;
var _STAR_print_newline_STAR__temp_val__53134 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53129);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53130);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53131);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53132);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53133);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53134);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53128);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53127);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53126);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53125);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53124);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53123);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53102){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53102));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53441 = arguments.length;
var i__5770__auto___53444 = (0);
while(true){
if((i__5770__auto___53444 < len__5769__auto___53441)){
args__5775__auto__.push((arguments[i__5770__auto___53444]));

var G__53446 = (i__5770__auto___53444 + (1));
i__5770__auto___53444 = G__53446;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53166 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53167 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53168 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53169 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53170 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__53172 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53173 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53174 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53175 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53176 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53177 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53172);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53173);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53174);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53175);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53177);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53171);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53170);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53169);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53168);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53167);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53166);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq53150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53150));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53465 = arguments.length;
var i__5770__auto___53466 = (0);
while(true){
if((i__5770__auto___53466 < len__5769__auto___53465)){
args__5775__auto__.push((arguments[i__5770__auto___53466]));

var G__53467 = (i__5770__auto___53466 + (1));
i__5770__auto___53466 = G__53467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53204 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53205 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53206 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53207 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53208 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__53210 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53211 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53212 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53213 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53214 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53215 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53216 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53210);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53211);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53212);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53213);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53214);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53215);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53216);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53209);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53208);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53207);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53206);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53205);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53203);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq53190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53190));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53489 = arguments.length;
var i__5770__auto___53490 = (0);
while(true){
if((i__5770__auto___53490 < len__5769__auto___53489)){
args__5775__auto__.push((arguments[i__5770__auto___53490]));

var G__53491 = (i__5770__auto___53490 + (1));
i__5770__auto___53490 = G__53491;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53232__auto__","s__53232__auto__",-1022099294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53236__auto__","x__53236__auto__",-849272276,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53232__auto__","s__53232__auto__",-1022099294,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53236__auto__","x__53236__auto__",-849272276,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53232__auto__","s__53232__auto__",-1022099294,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq53237){
var G__53238 = cljs.core.first(seq53237);
var seq53237__$1 = cljs.core.next(seq53237);
var G__53239 = cljs.core.first(seq53237__$1);
var seq53237__$2 = cljs.core.next(seq53237__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53238,G__53239,seq53237__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
