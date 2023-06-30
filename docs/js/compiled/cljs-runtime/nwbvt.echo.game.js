goog.provide('nwbvt.echo.game');
/**
 * Choose the next option given sequence s, nback window,
 *   and probabilities to pick the echo or one of the most choice
 */
nwbvt.echo.game.choose_next = (function nwbvt$echo$game$choose_next(s,options,window,is_echo,is_recent){
if((window < cljs.core.count(s))){
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1));
var nback = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(window - (1)));
var recent = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30861_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30861_SHARP_,nback);
}),s);
if((r <= is_echo)){
return nback;
} else {
if((((r <= (is_echo + is_recent))) && (((0) < cljs.core.count(recent))))){
return cljs.core.rand_nth(recent);
} else {
return cljs.core.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30862_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30862_SHARP_,nback);
}),options));

}
}
} else {
return cljs.core.rand_nth(options);
}
});
/**
 * Advance the sequence to the next turn
 */
nwbvt.echo.game.advance_sequence = (function nwbvt$echo$game$advance_sequence(s,options,window,is_echo,is_recent,clip_multiple){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((window * clip_multiple),s),nwbvt.echo.game.choose_next(s,options,window,is_echo,is_recent));
});
/**
 * Determines whether or not the 
 */
nwbvt.echo.game.is_echo_QMARK_ = (function nwbvt$echo$game$is_echo_QMARK_(s,window){
if((window >= cljs.core.count(s))){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,window));
}
});

//# sourceMappingURL=nwbvt.echo.game.js.map
