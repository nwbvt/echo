goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40406__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40407__i = 0, G__40407__a = new Array(arguments.length -  0);
while (G__40407__i < G__40407__a.length) {G__40407__a[G__40407__i] = arguments[G__40407__i + 0]; ++G__40407__i;}
  args = new cljs.core.IndexedSeq(G__40407__a,0,null);
} 
return G__40406__delegate.call(this,args);};
G__40406.cljs$lang$maxFixedArity = 0;
G__40406.cljs$lang$applyTo = (function (arglist__40408){
var args = cljs.core.seq(arglist__40408);
return G__40406__delegate(args);
});
G__40406.cljs$core$IFn$_invoke$arity$variadic = G__40406__delegate;
return G__40406;
})()
);

(o.error = (function() { 
var G__40409__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40413__i = 0, G__40413__a = new Array(arguments.length -  0);
while (G__40413__i < G__40413__a.length) {G__40413__a[G__40413__i] = arguments[G__40413__i + 0]; ++G__40413__i;}
  args = new cljs.core.IndexedSeq(G__40413__a,0,null);
} 
return G__40409__delegate.call(this,args);};
G__40409.cljs$lang$maxFixedArity = 0;
G__40409.cljs$lang$applyTo = (function (arglist__40414){
var args = cljs.core.seq(arglist__40414);
return G__40409__delegate(args);
});
G__40409.cljs$core$IFn$_invoke$arity$variadic = G__40409__delegate;
return G__40409;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
