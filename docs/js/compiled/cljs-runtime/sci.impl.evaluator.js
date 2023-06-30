goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__53608 = xs;
args__$2 = G__53608;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__53609 = xs;
args__$2 = G__53609;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__52528 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__53610 = ctx__$1;
var G__53611 = bindings__$2;
var G__53612 = rest_let_bindings;
ctx__$1 = G__53610;
bindings__$1 = G__53611;
let_bindings__$1 = G__53612;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__53613 = nexprs;
exprs__$1 = G__53613;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__52543 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__52544 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52543,G__52544) : sci.impl.utils.kw_identical_QMARK_.call(null,G__52543,G__52544));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52539_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52539_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52539_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52540_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52540_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52540_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__52548 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52548,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__52548;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__52555 = arguments.length;
switch (G__52555) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52558 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52561 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52561,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52561,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__52577 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__52578 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__52578);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__52577);
}}catch (e52565){if((e52565 instanceof Error)){
var e = e52565;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__52568 = ctx;
var G__52569 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__52570 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52568,G__52569,G__52570) : sci.impl.evaluator.eval.call(null,G__52568,G__52569,G__52570));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__52572 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e52565;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52580_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52580_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52580_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52590_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52590_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52590_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__52600 = arguments.length;
switch (G__52600) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__52601 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__52601.cljs$core$IFn$_invoke$arity$3 ? fexpr__52601.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__52601.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53643 = arguments.length;
var i__5770__auto___53644 = (0);
while(true){
if((i__5770__auto___53644 < len__5769__auto___53643)){
args__5775__auto__.push((arguments[i__5770__auto___53644]));

var G__53646 = (i__5770__auto___53644 + (1));
i__5770__auto___53644 = G__53646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52602_SHARP_){
if(((cljs.core.seq_QMARK_(p1__52602_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__52602_SHARP_))))){
return cljs.core.second(p1__52602_SHARP_);
} else {
return p1__52602_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__52606 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52606,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52606,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq52603){
var G__52604 = cljs.core.first(seq52603);
var seq52603__$1 = cljs.core.next(seq52603);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52604,seq52603__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__52616 = ctx;
var G__52617 = bindings;
var G__52618 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52616,G__52617,G__52618) : sci.impl.evaluator.eval.call(null,G__52616,G__52617,G__52618));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__53657 = exprs__$3;
exprs__$2 = G__53657;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__52823 = cljs.core.count(args);
switch (G__52823) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg52630 = (function (){var G__52824 = ctx;
var G__52825 = bindings;
var G__52826 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52824,G__52825,G__52826) : sci.impl.evaluator.eval.call(null,G__52824,G__52825,G__52826));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg52630) : f.call(null,arg52630));

break;
case (2):
var arg52631 = (function (){var G__52827 = ctx;
var G__52828 = bindings;
var G__52829 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52827,G__52828,G__52829) : sci.impl.evaluator.eval.call(null,G__52827,G__52828,G__52829));
})();
var args__$1 = cljs.core.rest(args);
var arg52632 = (function (){var G__52830 = ctx;
var G__52831 = bindings;
var G__52832 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52830,G__52831,G__52832) : sci.impl.evaluator.eval.call(null,G__52830,G__52831,G__52832));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg52631,arg52632) : f.call(null,arg52631,arg52632));

break;
case (3):
var arg52633 = (function (){var G__52833 = ctx;
var G__52834 = bindings;
var G__52835 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52833,G__52834,G__52835) : sci.impl.evaluator.eval.call(null,G__52833,G__52834,G__52835));
})();
var args__$1 = cljs.core.rest(args);
var arg52634 = (function (){var G__52836 = ctx;
var G__52837 = bindings;
var G__52838 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52836,G__52837,G__52838) : sci.impl.evaluator.eval.call(null,G__52836,G__52837,G__52838));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52635 = (function (){var G__52841 = ctx;
var G__52842 = bindings;
var G__52843 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52841,G__52842,G__52843) : sci.impl.evaluator.eval.call(null,G__52841,G__52842,G__52843));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg52633,arg52634,arg52635) : f.call(null,arg52633,arg52634,arg52635));

break;
case (4):
var arg52636 = (function (){var G__52846 = ctx;
var G__52847 = bindings;
var G__52848 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52846,G__52847,G__52848) : sci.impl.evaluator.eval.call(null,G__52846,G__52847,G__52848));
})();
var args__$1 = cljs.core.rest(args);
var arg52637 = (function (){var G__52850 = ctx;
var G__52851 = bindings;
var G__52852 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52850,G__52851,G__52852) : sci.impl.evaluator.eval.call(null,G__52850,G__52851,G__52852));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52638 = (function (){var G__52853 = ctx;
var G__52854 = bindings;
var G__52855 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52853,G__52854,G__52855) : sci.impl.evaluator.eval.call(null,G__52853,G__52854,G__52855));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52639 = (function (){var G__52856 = ctx;
var G__52857 = bindings;
var G__52858 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52856,G__52857,G__52858) : sci.impl.evaluator.eval.call(null,G__52856,G__52857,G__52858));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg52636,arg52637,arg52638,arg52639) : f.call(null,arg52636,arg52637,arg52638,arg52639));

break;
case (5):
var arg52640 = (function (){var G__52862 = ctx;
var G__52863 = bindings;
var G__52864 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52862,G__52863,G__52864) : sci.impl.evaluator.eval.call(null,G__52862,G__52863,G__52864));
})();
var args__$1 = cljs.core.rest(args);
var arg52641 = (function (){var G__52879 = ctx;
var G__52880 = bindings;
var G__52881 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52879,G__52880,G__52881) : sci.impl.evaluator.eval.call(null,G__52879,G__52880,G__52881));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52642 = (function (){var G__52882 = ctx;
var G__52883 = bindings;
var G__52884 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52882,G__52883,G__52884) : sci.impl.evaluator.eval.call(null,G__52882,G__52883,G__52884));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52643 = (function (){var G__52886 = ctx;
var G__52887 = bindings;
var G__52888 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52886,G__52887,G__52888) : sci.impl.evaluator.eval.call(null,G__52886,G__52887,G__52888));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52644 = (function (){var G__52892 = ctx;
var G__52893 = bindings;
var G__52894 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52892,G__52893,G__52894) : sci.impl.evaluator.eval.call(null,G__52892,G__52893,G__52894));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg52640,arg52641,arg52642,arg52643,arg52644) : f.call(null,arg52640,arg52641,arg52642,arg52643,arg52644));

break;
case (6):
var arg52645 = (function (){var G__52895 = ctx;
var G__52896 = bindings;
var G__52897 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52895,G__52896,G__52897) : sci.impl.evaluator.eval.call(null,G__52895,G__52896,G__52897));
})();
var args__$1 = cljs.core.rest(args);
var arg52646 = (function (){var G__52898 = ctx;
var G__52899 = bindings;
var G__52900 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52898,G__52899,G__52900) : sci.impl.evaluator.eval.call(null,G__52898,G__52899,G__52900));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52647 = (function (){var G__52901 = ctx;
var G__52902 = bindings;
var G__52903 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52901,G__52902,G__52903) : sci.impl.evaluator.eval.call(null,G__52901,G__52902,G__52903));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52648 = (function (){var G__52904 = ctx;
var G__52905 = bindings;
var G__52906 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52904,G__52905,G__52906) : sci.impl.evaluator.eval.call(null,G__52904,G__52905,G__52906));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52649 = (function (){var G__52908 = ctx;
var G__52909 = bindings;
var G__52910 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52908,G__52909,G__52910) : sci.impl.evaluator.eval.call(null,G__52908,G__52909,G__52910));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52650 = (function (){var G__52911 = ctx;
var G__52912 = bindings;
var G__52913 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52911,G__52912,G__52913) : sci.impl.evaluator.eval.call(null,G__52911,G__52912,G__52913));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg52645,arg52646,arg52647,arg52648,arg52649,arg52650) : f.call(null,arg52645,arg52646,arg52647,arg52648,arg52649,arg52650));

break;
case (7):
var arg52651 = (function (){var G__52928 = ctx;
var G__52929 = bindings;
var G__52930 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52928,G__52929,G__52930) : sci.impl.evaluator.eval.call(null,G__52928,G__52929,G__52930));
})();
var args__$1 = cljs.core.rest(args);
var arg52652 = (function (){var G__52931 = ctx;
var G__52932 = bindings;
var G__52933 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52931,G__52932,G__52933) : sci.impl.evaluator.eval.call(null,G__52931,G__52932,G__52933));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52653 = (function (){var G__52934 = ctx;
var G__52935 = bindings;
var G__52936 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52934,G__52935,G__52936) : sci.impl.evaluator.eval.call(null,G__52934,G__52935,G__52936));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52654 = (function (){var G__52938 = ctx;
var G__52939 = bindings;
var G__52940 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52938,G__52939,G__52940) : sci.impl.evaluator.eval.call(null,G__52938,G__52939,G__52940));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52655 = (function (){var G__52948 = ctx;
var G__52949 = bindings;
var G__52950 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52948,G__52949,G__52950) : sci.impl.evaluator.eval.call(null,G__52948,G__52949,G__52950));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52656 = (function (){var G__52951 = ctx;
var G__52952 = bindings;
var G__52953 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52951,G__52952,G__52953) : sci.impl.evaluator.eval.call(null,G__52951,G__52952,G__52953));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52657 = (function (){var G__52954 = ctx;
var G__52955 = bindings;
var G__52956 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52954,G__52955,G__52956) : sci.impl.evaluator.eval.call(null,G__52954,G__52955,G__52956));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg52651,arg52652,arg52653,arg52654,arg52655,arg52656,arg52657) : f.call(null,arg52651,arg52652,arg52653,arg52654,arg52655,arg52656,arg52657));

break;
case (8):
var arg52658 = (function (){var G__52957 = ctx;
var G__52958 = bindings;
var G__52959 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52957,G__52958,G__52959) : sci.impl.evaluator.eval.call(null,G__52957,G__52958,G__52959));
})();
var args__$1 = cljs.core.rest(args);
var arg52659 = (function (){var G__52972 = ctx;
var G__52973 = bindings;
var G__52974 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52972,G__52973,G__52974) : sci.impl.evaluator.eval.call(null,G__52972,G__52973,G__52974));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52660 = (function (){var G__52975 = ctx;
var G__52976 = bindings;
var G__52977 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52975,G__52976,G__52977) : sci.impl.evaluator.eval.call(null,G__52975,G__52976,G__52977));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52661 = (function (){var G__52978 = ctx;
var G__52979 = bindings;
var G__52980 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52978,G__52979,G__52980) : sci.impl.evaluator.eval.call(null,G__52978,G__52979,G__52980));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52662 = (function (){var G__52981 = ctx;
var G__52982 = bindings;
var G__52983 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52981,G__52982,G__52983) : sci.impl.evaluator.eval.call(null,G__52981,G__52982,G__52983));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52663 = (function (){var G__52984 = ctx;
var G__52985 = bindings;
var G__52986 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52984,G__52985,G__52986) : sci.impl.evaluator.eval.call(null,G__52984,G__52985,G__52986));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52664 = (function (){var G__52987 = ctx;
var G__52988 = bindings;
var G__52989 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52987,G__52988,G__52989) : sci.impl.evaluator.eval.call(null,G__52987,G__52988,G__52989));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52665 = (function (){var G__52990 = ctx;
var G__52991 = bindings;
var G__52992 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52990,G__52991,G__52992) : sci.impl.evaluator.eval.call(null,G__52990,G__52991,G__52992));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg52658,arg52659,arg52660,arg52661,arg52662,arg52663,arg52664,arg52665) : f.call(null,arg52658,arg52659,arg52660,arg52661,arg52662,arg52663,arg52664,arg52665));

break;
case (9):
var arg52666 = (function (){var G__52994 = ctx;
var G__52995 = bindings;
var G__52996 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52994,G__52995,G__52996) : sci.impl.evaluator.eval.call(null,G__52994,G__52995,G__52996));
})();
var args__$1 = cljs.core.rest(args);
var arg52667 = (function (){var G__52999 = ctx;
var G__53000 = bindings;
var G__53001 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__52999,G__53000,G__53001) : sci.impl.evaluator.eval.call(null,G__52999,G__53000,G__53001));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52668 = (function (){var G__53002 = ctx;
var G__53003 = bindings;
var G__53004 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53002,G__53003,G__53004) : sci.impl.evaluator.eval.call(null,G__53002,G__53003,G__53004));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52669 = (function (){var G__53005 = ctx;
var G__53006 = bindings;
var G__53007 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53005,G__53006,G__53007) : sci.impl.evaluator.eval.call(null,G__53005,G__53006,G__53007));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52670 = (function (){var G__53022 = ctx;
var G__53023 = bindings;
var G__53024 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53022,G__53023,G__53024) : sci.impl.evaluator.eval.call(null,G__53022,G__53023,G__53024));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52671 = (function (){var G__53025 = ctx;
var G__53026 = bindings;
var G__53027 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53025,G__53026,G__53027) : sci.impl.evaluator.eval.call(null,G__53025,G__53026,G__53027));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52672 = (function (){var G__53029 = ctx;
var G__53030 = bindings;
var G__53031 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53029,G__53030,G__53031) : sci.impl.evaluator.eval.call(null,G__53029,G__53030,G__53031));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52673 = (function (){var G__53032 = ctx;
var G__53033 = bindings;
var G__53034 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53032,G__53033,G__53034) : sci.impl.evaluator.eval.call(null,G__53032,G__53033,G__53034));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52674 = (function (){var G__53036 = ctx;
var G__53037 = bindings;
var G__53038 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53036,G__53037,G__53038) : sci.impl.evaluator.eval.call(null,G__53036,G__53037,G__53038));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg52666,arg52667,arg52668,arg52669,arg52670,arg52671,arg52672,arg52673,arg52674) : f.call(null,arg52666,arg52667,arg52668,arg52669,arg52670,arg52671,arg52672,arg52673,arg52674));

break;
case (10):
var arg52675 = (function (){var G__53039 = ctx;
var G__53040 = bindings;
var G__53041 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53039,G__53040,G__53041) : sci.impl.evaluator.eval.call(null,G__53039,G__53040,G__53041));
})();
var args__$1 = cljs.core.rest(args);
var arg52676 = (function (){var G__53044 = ctx;
var G__53045 = bindings;
var G__53046 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53044,G__53045,G__53046) : sci.impl.evaluator.eval.call(null,G__53044,G__53045,G__53046));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52677 = (function (){var G__53047 = ctx;
var G__53048 = bindings;
var G__53049 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53047,G__53048,G__53049) : sci.impl.evaluator.eval.call(null,G__53047,G__53048,G__53049));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52678 = (function (){var G__53050 = ctx;
var G__53051 = bindings;
var G__53052 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53050,G__53051,G__53052) : sci.impl.evaluator.eval.call(null,G__53050,G__53051,G__53052));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52679 = (function (){var G__53054 = ctx;
var G__53055 = bindings;
var G__53056 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53054,G__53055,G__53056) : sci.impl.evaluator.eval.call(null,G__53054,G__53055,G__53056));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52680 = (function (){var G__53057 = ctx;
var G__53058 = bindings;
var G__53059 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53057,G__53058,G__53059) : sci.impl.evaluator.eval.call(null,G__53057,G__53058,G__53059));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52681 = (function (){var G__53066 = ctx;
var G__53067 = bindings;
var G__53068 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53066,G__53067,G__53068) : sci.impl.evaluator.eval.call(null,G__53066,G__53067,G__53068));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52682 = (function (){var G__53069 = ctx;
var G__53070 = bindings;
var G__53071 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53069,G__53070,G__53071) : sci.impl.evaluator.eval.call(null,G__53069,G__53070,G__53071));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52683 = (function (){var G__53084 = ctx;
var G__53085 = bindings;
var G__53086 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53084,G__53085,G__53086) : sci.impl.evaluator.eval.call(null,G__53084,G__53085,G__53086));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52684 = (function (){var G__53087 = ctx;
var G__53088 = bindings;
var G__53089 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53087,G__53088,G__53089) : sci.impl.evaluator.eval.call(null,G__53087,G__53088,G__53089));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg52675,arg52676,arg52677,arg52678,arg52679,arg52680,arg52681,arg52682,arg52683,arg52684) : f.call(null,arg52675,arg52676,arg52677,arg52678,arg52679,arg52680,arg52681,arg52682,arg52683,arg52684));

break;
case (11):
var arg52685 = (function (){var G__53090 = ctx;
var G__53091 = bindings;
var G__53092 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53090,G__53091,G__53092) : sci.impl.evaluator.eval.call(null,G__53090,G__53091,G__53092));
})();
var args__$1 = cljs.core.rest(args);
var arg52686 = (function (){var G__53093 = ctx;
var G__53094 = bindings;
var G__53095 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53093,G__53094,G__53095) : sci.impl.evaluator.eval.call(null,G__53093,G__53094,G__53095));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52687 = (function (){var G__53096 = ctx;
var G__53097 = bindings;
var G__53098 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53096,G__53097,G__53098) : sci.impl.evaluator.eval.call(null,G__53096,G__53097,G__53098));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52688 = (function (){var G__53099 = ctx;
var G__53100 = bindings;
var G__53101 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53099,G__53100,G__53101) : sci.impl.evaluator.eval.call(null,G__53099,G__53100,G__53101));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52689 = (function (){var G__53103 = ctx;
var G__53104 = bindings;
var G__53105 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53103,G__53104,G__53105) : sci.impl.evaluator.eval.call(null,G__53103,G__53104,G__53105));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52690 = (function (){var G__53106 = ctx;
var G__53107 = bindings;
var G__53108 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53106,G__53107,G__53108) : sci.impl.evaluator.eval.call(null,G__53106,G__53107,G__53108));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52691 = (function (){var G__53110 = ctx;
var G__53111 = bindings;
var G__53112 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53110,G__53111,G__53112) : sci.impl.evaluator.eval.call(null,G__53110,G__53111,G__53112));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52692 = (function (){var G__53113 = ctx;
var G__53114 = bindings;
var G__53115 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53113,G__53114,G__53115) : sci.impl.evaluator.eval.call(null,G__53113,G__53114,G__53115));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52693 = (function (){var G__53120 = ctx;
var G__53121 = bindings;
var G__53122 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53120,G__53121,G__53122) : sci.impl.evaluator.eval.call(null,G__53120,G__53121,G__53122));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52694 = (function (){var G__53135 = ctx;
var G__53136 = bindings;
var G__53137 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53135,G__53136,G__53137) : sci.impl.evaluator.eval.call(null,G__53135,G__53136,G__53137));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52695 = (function (){var G__53138 = ctx;
var G__53139 = bindings;
var G__53140 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53138,G__53139,G__53140) : sci.impl.evaluator.eval.call(null,G__53138,G__53139,G__53140));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg52685,arg52686,arg52687,arg52688,arg52689,arg52690,arg52691,arg52692,arg52693,arg52694,arg52695) : f.call(null,arg52685,arg52686,arg52687,arg52688,arg52689,arg52690,arg52691,arg52692,arg52693,arg52694,arg52695));

break;
case (12):
var arg52696 = (function (){var G__53141 = ctx;
var G__53142 = bindings;
var G__53143 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53141,G__53142,G__53143) : sci.impl.evaluator.eval.call(null,G__53141,G__53142,G__53143));
})();
var args__$1 = cljs.core.rest(args);
var arg52697 = (function (){var G__53144 = ctx;
var G__53145 = bindings;
var G__53146 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53144,G__53145,G__53146) : sci.impl.evaluator.eval.call(null,G__53144,G__53145,G__53146));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52698 = (function (){var G__53147 = ctx;
var G__53148 = bindings;
var G__53149 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53147,G__53148,G__53149) : sci.impl.evaluator.eval.call(null,G__53147,G__53148,G__53149));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52699 = (function (){var G__53151 = ctx;
var G__53152 = bindings;
var G__53153 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53151,G__53152,G__53153) : sci.impl.evaluator.eval.call(null,G__53151,G__53152,G__53153));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52700 = (function (){var G__53154 = ctx;
var G__53155 = bindings;
var G__53156 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53154,G__53155,G__53156) : sci.impl.evaluator.eval.call(null,G__53154,G__53155,G__53156));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52701 = (function (){var G__53157 = ctx;
var G__53158 = bindings;
var G__53159 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53157,G__53158,G__53159) : sci.impl.evaluator.eval.call(null,G__53157,G__53158,G__53159));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52702 = (function (){var G__53160 = ctx;
var G__53161 = bindings;
var G__53162 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53160,G__53161,G__53162) : sci.impl.evaluator.eval.call(null,G__53160,G__53161,G__53162));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52703 = (function (){var G__53163 = ctx;
var G__53164 = bindings;
var G__53165 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53163,G__53164,G__53165) : sci.impl.evaluator.eval.call(null,G__53163,G__53164,G__53165));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52704 = (function (){var G__53178 = ctx;
var G__53179 = bindings;
var G__53180 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53178,G__53179,G__53180) : sci.impl.evaluator.eval.call(null,G__53178,G__53179,G__53180));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52705 = (function (){var G__53181 = ctx;
var G__53182 = bindings;
var G__53183 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53181,G__53182,G__53183) : sci.impl.evaluator.eval.call(null,G__53181,G__53182,G__53183));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52706 = (function (){var G__53184 = ctx;
var G__53185 = bindings;
var G__53186 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53184,G__53185,G__53186) : sci.impl.evaluator.eval.call(null,G__53184,G__53185,G__53186));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52707 = (function (){var G__53187 = ctx;
var G__53188 = bindings;
var G__53189 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53187,G__53188,G__53189) : sci.impl.evaluator.eval.call(null,G__53187,G__53188,G__53189));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg52696,arg52697,arg52698,arg52699,arg52700,arg52701,arg52702,arg52703,arg52704,arg52705,arg52706,arg52707) : f.call(null,arg52696,arg52697,arg52698,arg52699,arg52700,arg52701,arg52702,arg52703,arg52704,arg52705,arg52706,arg52707));

break;
case (13):
var arg52708 = (function (){var G__53191 = ctx;
var G__53192 = bindings;
var G__53193 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53191,G__53192,G__53193) : sci.impl.evaluator.eval.call(null,G__53191,G__53192,G__53193));
})();
var args__$1 = cljs.core.rest(args);
var arg52709 = (function (){var G__53195 = ctx;
var G__53196 = bindings;
var G__53197 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53195,G__53196,G__53197) : sci.impl.evaluator.eval.call(null,G__53195,G__53196,G__53197));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52710 = (function (){var G__53198 = ctx;
var G__53199 = bindings;
var G__53200 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53198,G__53199,G__53200) : sci.impl.evaluator.eval.call(null,G__53198,G__53199,G__53200));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52711 = (function (){var G__53217 = ctx;
var G__53218 = bindings;
var G__53219 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53217,G__53218,G__53219) : sci.impl.evaluator.eval.call(null,G__53217,G__53218,G__53219));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52712 = (function (){var G__53220 = ctx;
var G__53221 = bindings;
var G__53222 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53220,G__53221,G__53222) : sci.impl.evaluator.eval.call(null,G__53220,G__53221,G__53222));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52713 = (function (){var G__53223 = ctx;
var G__53224 = bindings;
var G__53225 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53223,G__53224,G__53225) : sci.impl.evaluator.eval.call(null,G__53223,G__53224,G__53225));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52714 = (function (){var G__53226 = ctx;
var G__53227 = bindings;
var G__53228 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53226,G__53227,G__53228) : sci.impl.evaluator.eval.call(null,G__53226,G__53227,G__53228));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52715 = (function (){var G__53229 = ctx;
var G__53230 = bindings;
var G__53231 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53229,G__53230,G__53231) : sci.impl.evaluator.eval.call(null,G__53229,G__53230,G__53231));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52716 = (function (){var G__53233 = ctx;
var G__53234 = bindings;
var G__53235 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53233,G__53234,G__53235) : sci.impl.evaluator.eval.call(null,G__53233,G__53234,G__53235));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52717 = (function (){var G__53240 = ctx;
var G__53241 = bindings;
var G__53242 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53240,G__53241,G__53242) : sci.impl.evaluator.eval.call(null,G__53240,G__53241,G__53242));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52718 = (function (){var G__53243 = ctx;
var G__53244 = bindings;
var G__53245 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53243,G__53244,G__53245) : sci.impl.evaluator.eval.call(null,G__53243,G__53244,G__53245));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52719 = (function (){var G__53246 = ctx;
var G__53247 = bindings;
var G__53248 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53246,G__53247,G__53248) : sci.impl.evaluator.eval.call(null,G__53246,G__53247,G__53248));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52720 = (function (){var G__53249 = ctx;
var G__53250 = bindings;
var G__53251 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53249,G__53250,G__53251) : sci.impl.evaluator.eval.call(null,G__53249,G__53250,G__53251));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg52708,arg52709,arg52710,arg52711,arg52712,arg52713,arg52714,arg52715,arg52716,arg52717,arg52718,arg52719,arg52720) : f.call(null,arg52708,arg52709,arg52710,arg52711,arg52712,arg52713,arg52714,arg52715,arg52716,arg52717,arg52718,arg52719,arg52720));

break;
case (14):
var arg52721 = (function (){var G__53254 = ctx;
var G__53255 = bindings;
var G__53256 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53254,G__53255,G__53256) : sci.impl.evaluator.eval.call(null,G__53254,G__53255,G__53256));
})();
var args__$1 = cljs.core.rest(args);
var arg52722 = (function (){var G__53261 = ctx;
var G__53262 = bindings;
var G__53263 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53261,G__53262,G__53263) : sci.impl.evaluator.eval.call(null,G__53261,G__53262,G__53263));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52723 = (function (){var G__53264 = ctx;
var G__53265 = bindings;
var G__53266 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53264,G__53265,G__53266) : sci.impl.evaluator.eval.call(null,G__53264,G__53265,G__53266));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52724 = (function (){var G__53272 = ctx;
var G__53273 = bindings;
var G__53274 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53272,G__53273,G__53274) : sci.impl.evaluator.eval.call(null,G__53272,G__53273,G__53274));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52725 = (function (){var G__53275 = ctx;
var G__53276 = bindings;
var G__53277 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53275,G__53276,G__53277) : sci.impl.evaluator.eval.call(null,G__53275,G__53276,G__53277));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52726 = (function (){var G__53280 = ctx;
var G__53281 = bindings;
var G__53282 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53280,G__53281,G__53282) : sci.impl.evaluator.eval.call(null,G__53280,G__53281,G__53282));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52727 = (function (){var G__53284 = ctx;
var G__53285 = bindings;
var G__53286 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53284,G__53285,G__53286) : sci.impl.evaluator.eval.call(null,G__53284,G__53285,G__53286));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52728 = (function (){var G__53287 = ctx;
var G__53288 = bindings;
var G__53289 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53287,G__53288,G__53289) : sci.impl.evaluator.eval.call(null,G__53287,G__53288,G__53289));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52729 = (function (){var G__53290 = ctx;
var G__53291 = bindings;
var G__53292 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53290,G__53291,G__53292) : sci.impl.evaluator.eval.call(null,G__53290,G__53291,G__53292));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52730 = (function (){var G__53293 = ctx;
var G__53294 = bindings;
var G__53295 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53293,G__53294,G__53295) : sci.impl.evaluator.eval.call(null,G__53293,G__53294,G__53295));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52731 = (function (){var G__53296 = ctx;
var G__53297 = bindings;
var G__53298 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53296,G__53297,G__53298) : sci.impl.evaluator.eval.call(null,G__53296,G__53297,G__53298));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52732 = (function (){var G__53299 = ctx;
var G__53300 = bindings;
var G__53301 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53299,G__53300,G__53301) : sci.impl.evaluator.eval.call(null,G__53299,G__53300,G__53301));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52733 = (function (){var G__53302 = ctx;
var G__53303 = bindings;
var G__53304 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53302,G__53303,G__53304) : sci.impl.evaluator.eval.call(null,G__53302,G__53303,G__53304));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52734 = (function (){var G__53305 = ctx;
var G__53306 = bindings;
var G__53307 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53305,G__53306,G__53307) : sci.impl.evaluator.eval.call(null,G__53305,G__53306,G__53307));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg52721,arg52722,arg52723,arg52724,arg52725,arg52726,arg52727,arg52728,arg52729,arg52730,arg52731,arg52732,arg52733,arg52734) : f.call(null,arg52721,arg52722,arg52723,arg52724,arg52725,arg52726,arg52727,arg52728,arg52729,arg52730,arg52731,arg52732,arg52733,arg52734));

break;
case (15):
var arg52735 = (function (){var G__53309 = ctx;
var G__53310 = bindings;
var G__53311 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53309,G__53310,G__53311) : sci.impl.evaluator.eval.call(null,G__53309,G__53310,G__53311));
})();
var args__$1 = cljs.core.rest(args);
var arg52736 = (function (){var G__53312 = ctx;
var G__53313 = bindings;
var G__53314 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53312,G__53313,G__53314) : sci.impl.evaluator.eval.call(null,G__53312,G__53313,G__53314));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52737 = (function (){var G__53315 = ctx;
var G__53316 = bindings;
var G__53317 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53315,G__53316,G__53317) : sci.impl.evaluator.eval.call(null,G__53315,G__53316,G__53317));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52738 = (function (){var G__53321 = ctx;
var G__53322 = bindings;
var G__53323 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53321,G__53322,G__53323) : sci.impl.evaluator.eval.call(null,G__53321,G__53322,G__53323));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52739 = (function (){var G__53325 = ctx;
var G__53326 = bindings;
var G__53327 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53325,G__53326,G__53327) : sci.impl.evaluator.eval.call(null,G__53325,G__53326,G__53327));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52740 = (function (){var G__53328 = ctx;
var G__53329 = bindings;
var G__53330 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53328,G__53329,G__53330) : sci.impl.evaluator.eval.call(null,G__53328,G__53329,G__53330));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52741 = (function (){var G__53331 = ctx;
var G__53332 = bindings;
var G__53333 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53331,G__53332,G__53333) : sci.impl.evaluator.eval.call(null,G__53331,G__53332,G__53333));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52742 = (function (){var G__53334 = ctx;
var G__53335 = bindings;
var G__53336 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53334,G__53335,G__53336) : sci.impl.evaluator.eval.call(null,G__53334,G__53335,G__53336));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52743 = (function (){var G__53337 = ctx;
var G__53338 = bindings;
var G__53339 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53337,G__53338,G__53339) : sci.impl.evaluator.eval.call(null,G__53337,G__53338,G__53339));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52744 = (function (){var G__53340 = ctx;
var G__53341 = bindings;
var G__53342 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53340,G__53341,G__53342) : sci.impl.evaluator.eval.call(null,G__53340,G__53341,G__53342));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52745 = (function (){var G__53343 = ctx;
var G__53344 = bindings;
var G__53345 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53343,G__53344,G__53345) : sci.impl.evaluator.eval.call(null,G__53343,G__53344,G__53345));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52746 = (function (){var G__53348 = ctx;
var G__53349 = bindings;
var G__53350 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53348,G__53349,G__53350) : sci.impl.evaluator.eval.call(null,G__53348,G__53349,G__53350));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52747 = (function (){var G__53352 = ctx;
var G__53353 = bindings;
var G__53354 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53352,G__53353,G__53354) : sci.impl.evaluator.eval.call(null,G__53352,G__53353,G__53354));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52748 = (function (){var G__53355 = ctx;
var G__53356 = bindings;
var G__53357 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53355,G__53356,G__53357) : sci.impl.evaluator.eval.call(null,G__53355,G__53356,G__53357));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52749 = (function (){var G__53358 = ctx;
var G__53359 = bindings;
var G__53360 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53358,G__53359,G__53360) : sci.impl.evaluator.eval.call(null,G__53358,G__53359,G__53360));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg52735,arg52736,arg52737,arg52738,arg52739,arg52740,arg52741,arg52742,arg52743,arg52744,arg52745,arg52746,arg52747,arg52748,arg52749) : f.call(null,arg52735,arg52736,arg52737,arg52738,arg52739,arg52740,arg52741,arg52742,arg52743,arg52744,arg52745,arg52746,arg52747,arg52748,arg52749));

break;
case (16):
var arg52750 = (function (){var G__53361 = ctx;
var G__53362 = bindings;
var G__53363 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53361,G__53362,G__53363) : sci.impl.evaluator.eval.call(null,G__53361,G__53362,G__53363));
})();
var args__$1 = cljs.core.rest(args);
var arg52751 = (function (){var G__53364 = ctx;
var G__53365 = bindings;
var G__53366 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53364,G__53365,G__53366) : sci.impl.evaluator.eval.call(null,G__53364,G__53365,G__53366));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52752 = (function (){var G__53369 = ctx;
var G__53370 = bindings;
var G__53371 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53369,G__53370,G__53371) : sci.impl.evaluator.eval.call(null,G__53369,G__53370,G__53371));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52753 = (function (){var G__53373 = ctx;
var G__53374 = bindings;
var G__53375 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53373,G__53374,G__53375) : sci.impl.evaluator.eval.call(null,G__53373,G__53374,G__53375));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52754 = (function (){var G__53376 = ctx;
var G__53377 = bindings;
var G__53378 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53376,G__53377,G__53378) : sci.impl.evaluator.eval.call(null,G__53376,G__53377,G__53378));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52755 = (function (){var G__53379 = ctx;
var G__53380 = bindings;
var G__53381 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53379,G__53380,G__53381) : sci.impl.evaluator.eval.call(null,G__53379,G__53380,G__53381));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52756 = (function (){var G__53382 = ctx;
var G__53383 = bindings;
var G__53384 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53382,G__53383,G__53384) : sci.impl.evaluator.eval.call(null,G__53382,G__53383,G__53384));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52757 = (function (){var G__53385 = ctx;
var G__53386 = bindings;
var G__53387 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53385,G__53386,G__53387) : sci.impl.evaluator.eval.call(null,G__53385,G__53386,G__53387));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52758 = (function (){var G__53389 = ctx;
var G__53390 = bindings;
var G__53391 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53389,G__53390,G__53391) : sci.impl.evaluator.eval.call(null,G__53389,G__53390,G__53391));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52759 = (function (){var G__53394 = ctx;
var G__53395 = bindings;
var G__53396 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53394,G__53395,G__53396) : sci.impl.evaluator.eval.call(null,G__53394,G__53395,G__53396));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52760 = (function (){var G__53397 = ctx;
var G__53398 = bindings;
var G__53399 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53397,G__53398,G__53399) : sci.impl.evaluator.eval.call(null,G__53397,G__53398,G__53399));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52761 = (function (){var G__53405 = ctx;
var G__53406 = bindings;
var G__53407 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53405,G__53406,G__53407) : sci.impl.evaluator.eval.call(null,G__53405,G__53406,G__53407));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52762 = (function (){var G__53408 = ctx;
var G__53409 = bindings;
var G__53410 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53408,G__53409,G__53410) : sci.impl.evaluator.eval.call(null,G__53408,G__53409,G__53410));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52763 = (function (){var G__53414 = ctx;
var G__53415 = bindings;
var G__53416 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53414,G__53415,G__53416) : sci.impl.evaluator.eval.call(null,G__53414,G__53415,G__53416));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52764 = (function (){var G__53417 = ctx;
var G__53418 = bindings;
var G__53419 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53417,G__53418,G__53419) : sci.impl.evaluator.eval.call(null,G__53417,G__53418,G__53419));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52765 = (function (){var G__53420 = ctx;
var G__53421 = bindings;
var G__53422 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53420,G__53421,G__53422) : sci.impl.evaluator.eval.call(null,G__53420,G__53421,G__53422));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg52750,arg52751,arg52752,arg52753,arg52754,arg52755,arg52756,arg52757,arg52758,arg52759,arg52760,arg52761,arg52762,arg52763,arg52764,arg52765) : f.call(null,arg52750,arg52751,arg52752,arg52753,arg52754,arg52755,arg52756,arg52757,arg52758,arg52759,arg52760,arg52761,arg52762,arg52763,arg52764,arg52765));

break;
case (17):
var arg52766 = (function (){var G__53426 = ctx;
var G__53427 = bindings;
var G__53428 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53426,G__53427,G__53428) : sci.impl.evaluator.eval.call(null,G__53426,G__53427,G__53428));
})();
var args__$1 = cljs.core.rest(args);
var arg52767 = (function (){var G__53429 = ctx;
var G__53430 = bindings;
var G__53431 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53429,G__53430,G__53431) : sci.impl.evaluator.eval.call(null,G__53429,G__53430,G__53431));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52768 = (function (){var G__53432 = ctx;
var G__53433 = bindings;
var G__53434 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53432,G__53433,G__53434) : sci.impl.evaluator.eval.call(null,G__53432,G__53433,G__53434));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52769 = (function (){var G__53435 = ctx;
var G__53436 = bindings;
var G__53437 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53435,G__53436,G__53437) : sci.impl.evaluator.eval.call(null,G__53435,G__53436,G__53437));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52770 = (function (){var G__53438 = ctx;
var G__53439 = bindings;
var G__53440 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53438,G__53439,G__53440) : sci.impl.evaluator.eval.call(null,G__53438,G__53439,G__53440));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52771 = (function (){var G__53447 = ctx;
var G__53448 = bindings;
var G__53449 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53447,G__53448,G__53449) : sci.impl.evaluator.eval.call(null,G__53447,G__53448,G__53449));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52772 = (function (){var G__53450 = ctx;
var G__53451 = bindings;
var G__53452 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53450,G__53451,G__53452) : sci.impl.evaluator.eval.call(null,G__53450,G__53451,G__53452));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52773 = (function (){var G__53453 = ctx;
var G__53454 = bindings;
var G__53455 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53453,G__53454,G__53455) : sci.impl.evaluator.eval.call(null,G__53453,G__53454,G__53455));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52774 = (function (){var G__53456 = ctx;
var G__53457 = bindings;
var G__53458 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53456,G__53457,G__53458) : sci.impl.evaluator.eval.call(null,G__53456,G__53457,G__53458));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52775 = (function (){var G__53462 = ctx;
var G__53463 = bindings;
var G__53464 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53462,G__53463,G__53464) : sci.impl.evaluator.eval.call(null,G__53462,G__53463,G__53464));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52776 = (function (){var G__53468 = ctx;
var G__53469 = bindings;
var G__53470 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53468,G__53469,G__53470) : sci.impl.evaluator.eval.call(null,G__53468,G__53469,G__53470));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52777 = (function (){var G__53471 = ctx;
var G__53472 = bindings;
var G__53473 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53471,G__53472,G__53473) : sci.impl.evaluator.eval.call(null,G__53471,G__53472,G__53473));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52778 = (function (){var G__53474 = ctx;
var G__53475 = bindings;
var G__53476 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53474,G__53475,G__53476) : sci.impl.evaluator.eval.call(null,G__53474,G__53475,G__53476));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52779 = (function (){var G__53477 = ctx;
var G__53478 = bindings;
var G__53479 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53477,G__53478,G__53479) : sci.impl.evaluator.eval.call(null,G__53477,G__53478,G__53479));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52780 = (function (){var G__53480 = ctx;
var G__53481 = bindings;
var G__53482 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53480,G__53481,G__53482) : sci.impl.evaluator.eval.call(null,G__53480,G__53481,G__53482));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52781 = (function (){var G__53483 = ctx;
var G__53484 = bindings;
var G__53485 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53483,G__53484,G__53485) : sci.impl.evaluator.eval.call(null,G__53483,G__53484,G__53485));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52782 = (function (){var G__53486 = ctx;
var G__53487 = bindings;
var G__53488 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53486,G__53487,G__53488) : sci.impl.evaluator.eval.call(null,G__53486,G__53487,G__53488));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg52766,arg52767,arg52768,arg52769,arg52770,arg52771,arg52772,arg52773,arg52774,arg52775,arg52776,arg52777,arg52778,arg52779,arg52780,arg52781,arg52782) : f.call(null,arg52766,arg52767,arg52768,arg52769,arg52770,arg52771,arg52772,arg52773,arg52774,arg52775,arg52776,arg52777,arg52778,arg52779,arg52780,arg52781,arg52782));

break;
case (18):
var arg52783 = (function (){var G__53492 = ctx;
var G__53493 = bindings;
var G__53494 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53492,G__53493,G__53494) : sci.impl.evaluator.eval.call(null,G__53492,G__53493,G__53494));
})();
var args__$1 = cljs.core.rest(args);
var arg52784 = (function (){var G__53495 = ctx;
var G__53496 = bindings;
var G__53497 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53495,G__53496,G__53497) : sci.impl.evaluator.eval.call(null,G__53495,G__53496,G__53497));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52785 = (function (){var G__53498 = ctx;
var G__53499 = bindings;
var G__53500 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53498,G__53499,G__53500) : sci.impl.evaluator.eval.call(null,G__53498,G__53499,G__53500));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52786 = (function (){var G__53501 = ctx;
var G__53502 = bindings;
var G__53503 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53501,G__53502,G__53503) : sci.impl.evaluator.eval.call(null,G__53501,G__53502,G__53503));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52787 = (function (){var G__53504 = ctx;
var G__53505 = bindings;
var G__53506 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53504,G__53505,G__53506) : sci.impl.evaluator.eval.call(null,G__53504,G__53505,G__53506));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52788 = (function (){var G__53507 = ctx;
var G__53508 = bindings;
var G__53509 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53507,G__53508,G__53509) : sci.impl.evaluator.eval.call(null,G__53507,G__53508,G__53509));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52789 = (function (){var G__53510 = ctx;
var G__53511 = bindings;
var G__53512 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53510,G__53511,G__53512) : sci.impl.evaluator.eval.call(null,G__53510,G__53511,G__53512));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52790 = (function (){var G__53513 = ctx;
var G__53514 = bindings;
var G__53515 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53513,G__53514,G__53515) : sci.impl.evaluator.eval.call(null,G__53513,G__53514,G__53515));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52791 = (function (){var G__53516 = ctx;
var G__53517 = bindings;
var G__53518 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53516,G__53517,G__53518) : sci.impl.evaluator.eval.call(null,G__53516,G__53517,G__53518));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52792 = (function (){var G__53520 = ctx;
var G__53521 = bindings;
var G__53522 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53520,G__53521,G__53522) : sci.impl.evaluator.eval.call(null,G__53520,G__53521,G__53522));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52793 = (function (){var G__53525 = ctx;
var G__53526 = bindings;
var G__53527 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53525,G__53526,G__53527) : sci.impl.evaluator.eval.call(null,G__53525,G__53526,G__53527));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52794 = (function (){var G__53528 = ctx;
var G__53529 = bindings;
var G__53530 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53528,G__53529,G__53530) : sci.impl.evaluator.eval.call(null,G__53528,G__53529,G__53530));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52795 = (function (){var G__53531 = ctx;
var G__53532 = bindings;
var G__53533 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53531,G__53532,G__53533) : sci.impl.evaluator.eval.call(null,G__53531,G__53532,G__53533));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52796 = (function (){var G__53534 = ctx;
var G__53535 = bindings;
var G__53536 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53534,G__53535,G__53536) : sci.impl.evaluator.eval.call(null,G__53534,G__53535,G__53536));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52797 = (function (){var G__53537 = ctx;
var G__53538 = bindings;
var G__53539 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53537,G__53538,G__53539) : sci.impl.evaluator.eval.call(null,G__53537,G__53538,G__53539));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52798 = (function (){var G__53540 = ctx;
var G__53541 = bindings;
var G__53542 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53540,G__53541,G__53542) : sci.impl.evaluator.eval.call(null,G__53540,G__53541,G__53542));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52799 = (function (){var G__53543 = ctx;
var G__53544 = bindings;
var G__53545 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53543,G__53544,G__53545) : sci.impl.evaluator.eval.call(null,G__53543,G__53544,G__53545));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg52800 = (function (){var G__53546 = ctx;
var G__53547 = bindings;
var G__53548 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53546,G__53547,G__53548) : sci.impl.evaluator.eval.call(null,G__53546,G__53547,G__53548));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg52783,arg52784,arg52785,arg52786,arg52787,arg52788,arg52789,arg52790,arg52791,arg52792,arg52793,arg52794,arg52795,arg52796,arg52797,arg52798,arg52799,arg52800) : f.call(null,arg52783,arg52784,arg52785,arg52786,arg52787,arg52788,arg52789,arg52790,arg52791,arg52792,arg52793,arg52794,arg52795,arg52796,arg52797,arg52798,arg52799,arg52800));

break;
case (19):
var arg52801 = (function (){var G__53549 = ctx;
var G__53550 = bindings;
var G__53551 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53549,G__53550,G__53551) : sci.impl.evaluator.eval.call(null,G__53549,G__53550,G__53551));
})();
var args__$1 = cljs.core.rest(args);
var arg52802 = (function (){var G__53552 = ctx;
var G__53553 = bindings;
var G__53554 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53552,G__53553,G__53554) : sci.impl.evaluator.eval.call(null,G__53552,G__53553,G__53554));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg52803 = (function (){var G__53555 = ctx;
var G__53556 = bindings;
var G__53557 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53555,G__53556,G__53557) : sci.impl.evaluator.eval.call(null,G__53555,G__53556,G__53557));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg52804 = (function (){var G__53558 = ctx;
var G__53559 = bindings;
var G__53560 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53558,G__53559,G__53560) : sci.impl.evaluator.eval.call(null,G__53558,G__53559,G__53560));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg52805 = (function (){var G__53561 = ctx;
var G__53562 = bindings;
var G__53563 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53561,G__53562,G__53563) : sci.impl.evaluator.eval.call(null,G__53561,G__53562,G__53563));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg52806 = (function (){var G__53564 = ctx;
var G__53565 = bindings;
var G__53566 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53564,G__53565,G__53566) : sci.impl.evaluator.eval.call(null,G__53564,G__53565,G__53566));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg52807 = (function (){var G__53567 = ctx;
var G__53568 = bindings;
var G__53569 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53567,G__53568,G__53569) : sci.impl.evaluator.eval.call(null,G__53567,G__53568,G__53569));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg52808 = (function (){var G__53570 = ctx;
var G__53571 = bindings;
var G__53572 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53570,G__53571,G__53572) : sci.impl.evaluator.eval.call(null,G__53570,G__53571,G__53572));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg52809 = (function (){var G__53573 = ctx;
var G__53574 = bindings;
var G__53575 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53573,G__53574,G__53575) : sci.impl.evaluator.eval.call(null,G__53573,G__53574,G__53575));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg52810 = (function (){var G__53576 = ctx;
var G__53577 = bindings;
var G__53578 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53576,G__53577,G__53578) : sci.impl.evaluator.eval.call(null,G__53576,G__53577,G__53578));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg52811 = (function (){var G__53579 = ctx;
var G__53580 = bindings;
var G__53581 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53579,G__53580,G__53581) : sci.impl.evaluator.eval.call(null,G__53579,G__53580,G__53581));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg52812 = (function (){var G__53582 = ctx;
var G__53583 = bindings;
var G__53584 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53582,G__53583,G__53584) : sci.impl.evaluator.eval.call(null,G__53582,G__53583,G__53584));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg52813 = (function (){var G__53585 = ctx;
var G__53586 = bindings;
var G__53587 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53585,G__53586,G__53587) : sci.impl.evaluator.eval.call(null,G__53585,G__53586,G__53587));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg52814 = (function (){var G__53588 = ctx;
var G__53589 = bindings;
var G__53590 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53588,G__53589,G__53590) : sci.impl.evaluator.eval.call(null,G__53588,G__53589,G__53590));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg52815 = (function (){var G__53591 = ctx;
var G__53592 = bindings;
var G__53593 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53591,G__53592,G__53593) : sci.impl.evaluator.eval.call(null,G__53591,G__53592,G__53593));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg52816 = (function (){var G__53594 = ctx;
var G__53595 = bindings;
var G__53596 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53594,G__53595,G__53596) : sci.impl.evaluator.eval.call(null,G__53594,G__53595,G__53596));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg52817 = (function (){var G__53597 = ctx;
var G__53598 = bindings;
var G__53599 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53597,G__53598,G__53599) : sci.impl.evaluator.eval.call(null,G__53597,G__53598,G__53599));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg52818 = (function (){var G__53600 = ctx;
var G__53601 = bindings;
var G__53602 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53600,G__53601,G__53602) : sci.impl.evaluator.eval.call(null,G__53600,G__53601,G__53602));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg52819 = (function (){var G__53603 = ctx;
var G__53604 = bindings;
var G__53605 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__53603,G__53604,G__53605) : sci.impl.evaluator.eval.call(null,G__53603,G__53604,G__53605));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg52801,arg52802,arg52803,arg52804,arg52805,arg52806,arg52807,arg52808,arg52809,arg52810,arg52811,arg52812,arg52813,arg52814,arg52815,arg52816,arg52817,arg52818,arg52819) : f.call(null,arg52801,arg52802,arg52803,arg52804,arg52805,arg52806,arg52807,arg52808,arg52809,arg52810,arg52811,arg52812,arg52813,arg52814,arg52815,arg52816,arg52817,arg52818,arg52819));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52303_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__52303_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__52303_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e53606){if((e53606 instanceof Error)){
var e = e53606;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e53606;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
