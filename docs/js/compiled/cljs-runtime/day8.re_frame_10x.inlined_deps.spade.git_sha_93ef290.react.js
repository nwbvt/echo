goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context = module$node_modules$react$index.createContext(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context.Provider;
}
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.provided_container = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$provided_container(){
var or__5045__auto__ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context._currentValue2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.context._currentValue;
}
});
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.__GT_AlternateStyleContainer(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.provided_container,day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_));
/**
 * Uses the provided IStyleContainer to render the styles of the children
 * elements. This is a reagent-style React component, meant to wrap whatever
 * part of your app needs to have its styled rendered elsewhere (often the
 * root of the app), eg:
 * 
 *   [with-style-container container
 *    [your-view]]
 * 
 * Note that behavior in the presence of a reactively changing `container` is
 * undefined. You should expect to declare one container per render.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_style_container(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40308 = arguments.length;
var i__5770__auto___40309 = (0);
while(true){
if((i__5770__auto___40309 < len__5769__auto___40308)){
args__5775__auto__.push((arguments[i__5770__auto___40309]));

var G__40310 = (i__5770__auto___40309 + (1));
i__5770__auto___40309 = G__40310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$core$IFn$_invoke$arity$variadic = (function (container,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),container], null)], null),children);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container.cljs$lang$applyTo = (function (seq40272){
var G__40273 = cljs.core.first(seq40272);
var seq40272__$1 = cljs.core.next(seq40272);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40273,seq40272__$1);
}));

/**
 * A convenience for rendering Spade styles into an alternate dom target.
 * The first argument may either be an actual DOM element, or a function which
 * returns one.
 * 
 * See `with-style-container`, which this uses under the hood.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40311 = arguments.length;
var i__5770__auto___40312 = (0);
while(true){
if((i__5770__auto___40312 < len__5769__auto___40311)){
args__5775__auto__.push((arguments[i__5770__auto___40312]));

var G__40313 = (i__5770__auto___40312 + (1));
i__5770__auto___40312 = G__40313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$core$IFn$_invoke$arity$variadic = (function (get_dom_target,_children){
var container = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1(get_dom_target);
return (function() { 
var day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate = function (_,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container,container], null),children);
};
var day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render = function (_,var_args){
var children = null;
if (arguments.length > 1) {
var G__40326__i = 0, G__40326__a = new Array(arguments.length -  1);
while (G__40326__i < G__40326__a.length) {G__40326__a[G__40326__i] = arguments[G__40326__i + 1]; ++G__40326__i;}
  children = new cljs.core.IndexedSeq(G__40326__a,0,null);
} 
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate.call(this,_,children);};
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$lang$maxFixedArity = 1;
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$lang$applyTo = (function (arglist__40328){
var _ = cljs.core.first(arglist__40328);
var children = cljs.core.rest(arglist__40328);
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate(_,children);
});
day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render__delegate;
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$react$with_dom_render;
})()
;
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_dom.cljs$lang$applyTo = (function (seq40279){
var G__40280 = cljs.core.first(seq40279);
var seq40279__$1 = cljs.core.next(seq40279);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40280,seq40279__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.js.map
