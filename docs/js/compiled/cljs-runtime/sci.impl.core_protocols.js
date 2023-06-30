goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52516 = cljs.core.get_global_hierarchy;
return (fexpr__52516.cljs$core$IFn$_invoke$arity$0 ? fexpr__52516.cljs$core$IFn$_invoke$arity$0() : fexpr__52516.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__52519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__52519.cljs$core$IFn$_invoke$arity$1 ? fexpr__52519.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__52519.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52531 = cljs.core.get_global_hierarchy;
return (fexpr__52531.cljs$core$IFn$_invoke$arity$0 ? fexpr__52531.cljs$core$IFn$_invoke$arity$0() : fexpr__52531.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52534 = cljs.core.get_global_hierarchy;
return (fexpr__52534.cljs$core$IFn$_invoke$arity$0 ? fexpr__52534.cljs$core$IFn$_invoke$arity$0() : fexpr__52534.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__52576 = null;
var G__52576__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__52538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__52538.cljs$core$IFn$_invoke$arity$2 ? fexpr__52538.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__52538.call(null,ref,f));
});
var G__52576__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__52541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__52541.cljs$core$IFn$_invoke$arity$3 ? fexpr__52541.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__52541.call(null,ref,f,a1));
});
var G__52576__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__52542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__52542.cljs$core$IFn$_invoke$arity$4 ? fexpr__52542.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__52542.call(null,ref,f,a1,a2));
});
var G__52576__5 = (function() { 
var G__52581__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__52581 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__52582__i = 0, G__52582__a = new Array(arguments.length -  4);
while (G__52582__i < G__52582__a.length) {G__52582__a[G__52582__i] = arguments[G__52582__i + 4]; ++G__52582__i;}
  args = new cljs.core.IndexedSeq(G__52582__a,0,null);
} 
return G__52581__delegate.call(this,ref,f,a1,a2,args);};
G__52581.cljs$lang$maxFixedArity = 4;
G__52581.cljs$lang$applyTo = (function (arglist__52583){
var ref = cljs.core.first(arglist__52583);
arglist__52583 = cljs.core.next(arglist__52583);
var f = cljs.core.first(arglist__52583);
arglist__52583 = cljs.core.next(arglist__52583);
var a1 = cljs.core.first(arglist__52583);
arglist__52583 = cljs.core.next(arglist__52583);
var a2 = cljs.core.first(arglist__52583);
var args = cljs.core.rest(arglist__52583);
return G__52581__delegate(ref,f,a1,a2,args);
});
G__52581.cljs$core$IFn$_invoke$arity$variadic = G__52581__delegate;
return G__52581;
})()
;
G__52576 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__52576__2.call(this,ref,f);
case 3:
return G__52576__3.call(this,ref,f,a1);
case 4:
return G__52576__4.call(this,ref,f,a1,a2);
default:
var G__52584 = null;
if (arguments.length > 4) {
var G__52585__i = 0, G__52585__a = new Array(arguments.length -  4);
while (G__52585__i < G__52585__a.length) {G__52585__a[G__52585__i] = arguments[G__52585__i + 4]; ++G__52585__i;}
G__52584 = new cljs.core.IndexedSeq(G__52585__a,0,null);
}
return G__52576__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__52584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52576.cljs$lang$maxFixedArity = 4;
G__52576.cljs$lang$applyTo = G__52576__5.cljs$lang$applyTo;
G__52576.cljs$core$IFn$_invoke$arity$2 = G__52576__2;
G__52576.cljs$core$IFn$_invoke$arity$3 = G__52576__3;
G__52576.cljs$core$IFn$_invoke$arity$4 = G__52576__4;
G__52576.cljs$core$IFn$_invoke$arity$variadic = G__52576__5.cljs$core$IFn$_invoke$arity$variadic;
return G__52576;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__52547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__52547.cljs$core$IFn$_invoke$arity$2 ? fexpr__52547.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__52547.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__52587__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__52587 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__52588__i = 0, G__52588__a = new Array(arguments.length -  2);
while (G__52588__i < G__52588__a.length) {G__52588__a[G__52588__i] = arguments[G__52588__i + 2]; ++G__52588__i;}
  args = new cljs.core.IndexedSeq(G__52588__a,0,null);
} 
return G__52587__delegate.call(this,ref,f,args);};
G__52587.cljs$lang$maxFixedArity = 2;
G__52587.cljs$lang$applyTo = (function (arglist__52589){
var ref = cljs.core.first(arglist__52589);
arglist__52589 = cljs.core.next(arglist__52589);
var f = cljs.core.first(arglist__52589);
var args = cljs.core.rest(arglist__52589);
return G__52587__delegate(ref,f,args);
});
G__52587.cljs$core$IFn$_invoke$arity$variadic = G__52587__delegate;
return G__52587;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52591 = arguments.length;
var i__5770__auto___52592 = (0);
while(true){
if((i__5770__auto___52592 < len__5769__auto___52591)){
args__5775__auto__.push((arguments[i__5770__auto___52592]));

var G__52593 = (i__5770__auto___52592 + (1));
i__5770__auto___52592 = G__52593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq52549){
var G__52550 = cljs.core.first(seq52549);
var seq52549__$1 = cljs.core.next(seq52549);
var G__52551 = cljs.core.first(seq52549__$1);
var seq52549__$2 = cljs.core.next(seq52549__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52550,G__52551,seq52549__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
