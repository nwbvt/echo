goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__54223 = (fixed_arity | (0));
switch (G__54223) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54225 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__54224){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54225,G__54224);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55357 = cljs.core._nth(recur_val,(0));
G__54224 = G__55357;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54230 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__54229){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54230,G__54229);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55361 = cljs.core._nth(recur_val,(0));
G__54229 = G__55361;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54234 = cljs.core._nth(params,(0));
var G__54235 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__54232,G__54233){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54234,G__54232);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54235,G__54233);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55362 = cljs.core._nth(recur_val,(0));
var G__55363 = cljs.core._nth(recur_val,(1));
G__54232 = G__55362;
G__54233 = G__55363;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54238 = cljs.core._nth(params,(0));
var G__54239 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__54236,G__54237){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54238,G__54236);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54239,G__54237);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55364 = cljs.core._nth(recur_val,(0));
var G__55365 = cljs.core._nth(recur_val,(1));
G__54236 = G__55364;
G__54237 = G__55365;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54244 = cljs.core._nth(params,(0));
var G__54245 = cljs.core._nth(params,(1));
var G__54246 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__54241,G__54242,G__54243){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54244,G__54241);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54245,G__54242);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54246,G__54243);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55371 = cljs.core._nth(recur_val,(0));
var G__55372 = cljs.core._nth(recur_val,(1));
var G__55373 = cljs.core._nth(recur_val,(2));
G__54241 = G__55371;
G__54242 = G__55372;
G__54243 = G__55373;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54250 = cljs.core._nth(params,(0));
var G__54251 = cljs.core._nth(params,(1));
var G__54252 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__54247,G__54248,G__54249){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54250,G__54247);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54251,G__54248);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54252,G__54249);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55381 = cljs.core._nth(recur_val,(0));
var G__55382 = cljs.core._nth(recur_val,(1));
var G__55383 = cljs.core._nth(recur_val,(2));
G__54247 = G__55381;
G__54248 = G__55382;
G__54249 = G__55383;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54257 = cljs.core._nth(params,(0));
var G__54258 = cljs.core._nth(params,(1));
var G__54259 = cljs.core._nth(params,(2));
var G__54260 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__54253,G__54254,G__54255,G__54256){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54257,G__54253);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54258,G__54254);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54259,G__54255);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54260,G__54256);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55387 = cljs.core._nth(recur_val,(0));
var G__55388 = cljs.core._nth(recur_val,(1));
var G__55389 = cljs.core._nth(recur_val,(2));
var G__55390 = cljs.core._nth(recur_val,(3));
G__54253 = G__55387;
G__54254 = G__55388;
G__54255 = G__55389;
G__54256 = G__55390;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54270 = cljs.core._nth(params,(0));
var G__54271 = cljs.core._nth(params,(1));
var G__54272 = cljs.core._nth(params,(2));
var G__54273 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__54266,G__54267,G__54268,G__54269){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54270,G__54266);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54271,G__54267);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54272,G__54268);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54273,G__54269);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55392 = cljs.core._nth(recur_val,(0));
var G__55393 = cljs.core._nth(recur_val,(1));
var G__55394 = cljs.core._nth(recur_val,(2));
var G__55395 = cljs.core._nth(recur_val,(3));
G__54266 = G__55392;
G__54267 = G__55393;
G__54268 = G__55394;
G__54269 = G__55395;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54286 = cljs.core._nth(params,(0));
var G__54287 = cljs.core._nth(params,(1));
var G__54288 = cljs.core._nth(params,(2));
var G__54289 = cljs.core._nth(params,(3));
var G__54290 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__54281,G__54282,G__54283,G__54284,G__54285){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54286,G__54281);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54287,G__54282);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54288,G__54283);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54289,G__54284);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54290,G__54285);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55396 = cljs.core._nth(recur_val,(0));
var G__55397 = cljs.core._nth(recur_val,(1));
var G__55398 = cljs.core._nth(recur_val,(2));
var G__55399 = cljs.core._nth(recur_val,(3));
var G__55400 = cljs.core._nth(recur_val,(4));
G__54281 = G__55396;
G__54282 = G__55397;
G__54283 = G__55398;
G__54284 = G__55399;
G__54285 = G__55400;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54296 = cljs.core._nth(params,(0));
var G__54297 = cljs.core._nth(params,(1));
var G__54298 = cljs.core._nth(params,(2));
var G__54299 = cljs.core._nth(params,(3));
var G__54300 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__54291,G__54292,G__54293,G__54294,G__54295){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54296,G__54291);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54297,G__54292);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54298,G__54293);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54299,G__54294);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54300,G__54295);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55405 = cljs.core._nth(recur_val,(0));
var G__55406 = cljs.core._nth(recur_val,(1));
var G__55407 = cljs.core._nth(recur_val,(2));
var G__55408 = cljs.core._nth(recur_val,(3));
var G__55409 = cljs.core._nth(recur_val,(4));
G__54291 = G__55405;
G__54292 = G__55406;
G__54293 = G__55407;
G__54294 = G__55408;
G__54295 = G__55409;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54311 = cljs.core._nth(params,(0));
var G__54312 = cljs.core._nth(params,(1));
var G__54313 = cljs.core._nth(params,(2));
var G__54314 = cljs.core._nth(params,(3));
var G__54315 = cljs.core._nth(params,(4));
var G__54316 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__54305,G__54306,G__54307,G__54308,G__54309,G__54310){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54311,G__54305);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54312,G__54306);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54313,G__54307);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54314,G__54308);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54315,G__54309);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54316,G__54310);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55418 = cljs.core._nth(recur_val,(0));
var G__55419 = cljs.core._nth(recur_val,(1));
var G__55420 = cljs.core._nth(recur_val,(2));
var G__55421 = cljs.core._nth(recur_val,(3));
var G__55422 = cljs.core._nth(recur_val,(4));
var G__55423 = cljs.core._nth(recur_val,(5));
G__54305 = G__55418;
G__54306 = G__55419;
G__54307 = G__55420;
G__54308 = G__55421;
G__54309 = G__55422;
G__54310 = G__55423;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54326 = cljs.core._nth(params,(0));
var G__54327 = cljs.core._nth(params,(1));
var G__54328 = cljs.core._nth(params,(2));
var G__54329 = cljs.core._nth(params,(3));
var G__54330 = cljs.core._nth(params,(4));
var G__54331 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__54320,G__54321,G__54322,G__54323,G__54324,G__54325){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54326,G__54320);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54327,G__54321);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54328,G__54322);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54329,G__54323);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54330,G__54324);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54331,G__54325);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55428 = cljs.core._nth(recur_val,(0));
var G__55429 = cljs.core._nth(recur_val,(1));
var G__55430 = cljs.core._nth(recur_val,(2));
var G__55431 = cljs.core._nth(recur_val,(3));
var G__55432 = cljs.core._nth(recur_val,(4));
var G__55433 = cljs.core._nth(recur_val,(5));
G__54320 = G__55428;
G__54321 = G__55429;
G__54322 = G__55430;
G__54323 = G__55431;
G__54324 = G__55432;
G__54325 = G__55433;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54341 = cljs.core._nth(params,(0));
var G__54342 = cljs.core._nth(params,(1));
var G__54343 = cljs.core._nth(params,(2));
var G__54344 = cljs.core._nth(params,(3));
var G__54345 = cljs.core._nth(params,(4));
var G__54346 = cljs.core._nth(params,(5));
var G__54347 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__54334,G__54335,G__54336,G__54337,G__54338,G__54339,G__54340){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54341,G__54334);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54342,G__54335);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54343,G__54336);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54344,G__54337);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54345,G__54338);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54346,G__54339);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54347,G__54340);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55440 = cljs.core._nth(recur_val,(0));
var G__55441 = cljs.core._nth(recur_val,(1));
var G__55442 = cljs.core._nth(recur_val,(2));
var G__55443 = cljs.core._nth(recur_val,(3));
var G__55444 = cljs.core._nth(recur_val,(4));
var G__55445 = cljs.core._nth(recur_val,(5));
var G__55446 = cljs.core._nth(recur_val,(6));
G__54334 = G__55440;
G__54335 = G__55441;
G__54336 = G__55442;
G__54337 = G__55443;
G__54338 = G__55444;
G__54339 = G__55445;
G__54340 = G__55446;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54360 = cljs.core._nth(params,(0));
var G__54361 = cljs.core._nth(params,(1));
var G__54362 = cljs.core._nth(params,(2));
var G__54363 = cljs.core._nth(params,(3));
var G__54364 = cljs.core._nth(params,(4));
var G__54365 = cljs.core._nth(params,(5));
var G__54366 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__54353,G__54354,G__54355,G__54356,G__54357,G__54358,G__54359){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54360,G__54353);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54361,G__54354);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54362,G__54355);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54363,G__54356);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54364,G__54357);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54365,G__54358);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54366,G__54359);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55452 = cljs.core._nth(recur_val,(0));
var G__55453 = cljs.core._nth(recur_val,(1));
var G__55454 = cljs.core._nth(recur_val,(2));
var G__55455 = cljs.core._nth(recur_val,(3));
var G__55456 = cljs.core._nth(recur_val,(4));
var G__55457 = cljs.core._nth(recur_val,(5));
var G__55458 = cljs.core._nth(recur_val,(6));
G__54353 = G__55452;
G__54354 = G__55453;
G__54355 = G__55454;
G__54356 = G__55455;
G__54357 = G__55456;
G__54358 = G__55457;
G__54359 = G__55458;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54375 = cljs.core._nth(params,(0));
var G__54376 = cljs.core._nth(params,(1));
var G__54377 = cljs.core._nth(params,(2));
var G__54378 = cljs.core._nth(params,(3));
var G__54379 = cljs.core._nth(params,(4));
var G__54380 = cljs.core._nth(params,(5));
var G__54381 = cljs.core._nth(params,(6));
var G__54382 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__54367,G__54368,G__54369,G__54370,G__54371,G__54372,G__54373,G__54374){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54375,G__54367);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54376,G__54368);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54377,G__54369);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54378,G__54370);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54379,G__54371);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54380,G__54372);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54381,G__54373);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54382,G__54374);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55462 = cljs.core._nth(recur_val,(0));
var G__55463 = cljs.core._nth(recur_val,(1));
var G__55464 = cljs.core._nth(recur_val,(2));
var G__55465 = cljs.core._nth(recur_val,(3));
var G__55466 = cljs.core._nth(recur_val,(4));
var G__55467 = cljs.core._nth(recur_val,(5));
var G__55468 = cljs.core._nth(recur_val,(6));
var G__55469 = cljs.core._nth(recur_val,(7));
G__54367 = G__55462;
G__54368 = G__55463;
G__54369 = G__55464;
G__54370 = G__55465;
G__54371 = G__55466;
G__54372 = G__55467;
G__54373 = G__55468;
G__54374 = G__55469;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54394 = cljs.core._nth(params,(0));
var G__54395 = cljs.core._nth(params,(1));
var G__54396 = cljs.core._nth(params,(2));
var G__54397 = cljs.core._nth(params,(3));
var G__54398 = cljs.core._nth(params,(4));
var G__54399 = cljs.core._nth(params,(5));
var G__54401 = cljs.core._nth(params,(6));
var G__54402 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__54386,G__54387,G__54388,G__54389,G__54390,G__54391,G__54392,G__54393){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54394,G__54386);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54395,G__54387);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54396,G__54388);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54397,G__54389);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54398,G__54390);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54399,G__54391);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54401,G__54392);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54402,G__54393);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55474 = cljs.core._nth(recur_val,(0));
var G__55475 = cljs.core._nth(recur_val,(1));
var G__55476 = cljs.core._nth(recur_val,(2));
var G__55477 = cljs.core._nth(recur_val,(3));
var G__55478 = cljs.core._nth(recur_val,(4));
var G__55479 = cljs.core._nth(recur_val,(5));
var G__55480 = cljs.core._nth(recur_val,(6));
var G__55481 = cljs.core._nth(recur_val,(7));
G__54386 = G__55474;
G__54387 = G__55475;
G__54388 = G__55476;
G__54389 = G__55477;
G__54390 = G__55478;
G__54391 = G__55479;
G__54392 = G__55480;
G__54393 = G__55481;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54416 = cljs.core._nth(params,(0));
var G__54417 = cljs.core._nth(params,(1));
var G__54418 = cljs.core._nth(params,(2));
var G__54419 = cljs.core._nth(params,(3));
var G__54420 = cljs.core._nth(params,(4));
var G__54421 = cljs.core._nth(params,(5));
var G__54422 = cljs.core._nth(params,(6));
var G__54423 = cljs.core._nth(params,(7));
var G__54424 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__54407,G__54408,G__54409,G__54410,G__54411,G__54412,G__54413,G__54414,G__54415){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54416,G__54407);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54417,G__54408);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54418,G__54409);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54419,G__54410);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54420,G__54411);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54421,G__54412);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54422,G__54413);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54423,G__54414);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54424,G__54415);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55489 = cljs.core._nth(recur_val,(0));
var G__55490 = cljs.core._nth(recur_val,(1));
var G__55491 = cljs.core._nth(recur_val,(2));
var G__55492 = cljs.core._nth(recur_val,(3));
var G__55493 = cljs.core._nth(recur_val,(4));
var G__55494 = cljs.core._nth(recur_val,(5));
var G__55495 = cljs.core._nth(recur_val,(6));
var G__55496 = cljs.core._nth(recur_val,(7));
var G__55497 = cljs.core._nth(recur_val,(8));
G__54407 = G__55489;
G__54408 = G__55490;
G__54409 = G__55491;
G__54410 = G__55492;
G__54411 = G__55493;
G__54412 = G__55494;
G__54413 = G__55495;
G__54414 = G__55496;
G__54415 = G__55497;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54442 = cljs.core._nth(params,(0));
var G__54443 = cljs.core._nth(params,(1));
var G__54444 = cljs.core._nth(params,(2));
var G__54445 = cljs.core._nth(params,(3));
var G__54446 = cljs.core._nth(params,(4));
var G__54447 = cljs.core._nth(params,(5));
var G__54448 = cljs.core._nth(params,(6));
var G__54449 = cljs.core._nth(params,(7));
var G__54450 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__54433,G__54434,G__54435,G__54436,G__54437,G__54438,G__54439,G__54440,G__54441){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54442,G__54433);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54443,G__54434);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54444,G__54435);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54445,G__54436);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54446,G__54437);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54447,G__54438);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54448,G__54439);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54449,G__54440);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54450,G__54441);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55502 = cljs.core._nth(recur_val,(0));
var G__55503 = cljs.core._nth(recur_val,(1));
var G__55504 = cljs.core._nth(recur_val,(2));
var G__55505 = cljs.core._nth(recur_val,(3));
var G__55506 = cljs.core._nth(recur_val,(4));
var G__55507 = cljs.core._nth(recur_val,(5));
var G__55508 = cljs.core._nth(recur_val,(6));
var G__55509 = cljs.core._nth(recur_val,(7));
var G__55510 = cljs.core._nth(recur_val,(8));
G__54433 = G__55502;
G__54434 = G__55503;
G__54435 = G__55504;
G__54436 = G__55505;
G__54437 = G__55506;
G__54438 = G__55507;
G__54439 = G__55508;
G__54440 = G__55509;
G__54441 = G__55510;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54466 = cljs.core._nth(params,(0));
var G__54467 = cljs.core._nth(params,(1));
var G__54468 = cljs.core._nth(params,(2));
var G__54469 = cljs.core._nth(params,(3));
var G__54470 = cljs.core._nth(params,(4));
var G__54471 = cljs.core._nth(params,(5));
var G__54472 = cljs.core._nth(params,(6));
var G__54473 = cljs.core._nth(params,(7));
var G__54474 = cljs.core._nth(params,(8));
var G__54475 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__54456,G__54457,G__54458,G__54459,G__54460,G__54461,G__54462,G__54463,G__54464,G__54465){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54466,G__54456);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54467,G__54457);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54468,G__54458);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54469,G__54459);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54470,G__54460);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54471,G__54461);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54472,G__54462);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54473,G__54463);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54474,G__54464);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54475,G__54465);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55514 = cljs.core._nth(recur_val,(0));
var G__55515 = cljs.core._nth(recur_val,(1));
var G__55516 = cljs.core._nth(recur_val,(2));
var G__55517 = cljs.core._nth(recur_val,(3));
var G__55518 = cljs.core._nth(recur_val,(4));
var G__55519 = cljs.core._nth(recur_val,(5));
var G__55520 = cljs.core._nth(recur_val,(6));
var G__55521 = cljs.core._nth(recur_val,(7));
var G__55522 = cljs.core._nth(recur_val,(8));
var G__55523 = cljs.core._nth(recur_val,(9));
G__54456 = G__55514;
G__54457 = G__55515;
G__54458 = G__55516;
G__54459 = G__55517;
G__54460 = G__55518;
G__54461 = G__55519;
G__54462 = G__55520;
G__54463 = G__55521;
G__54464 = G__55522;
G__54465 = G__55523;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54488 = cljs.core._nth(params,(0));
var G__54489 = cljs.core._nth(params,(1));
var G__54490 = cljs.core._nth(params,(2));
var G__54491 = cljs.core._nth(params,(3));
var G__54492 = cljs.core._nth(params,(4));
var G__54493 = cljs.core._nth(params,(5));
var G__54494 = cljs.core._nth(params,(6));
var G__54495 = cljs.core._nth(params,(7));
var G__54496 = cljs.core._nth(params,(8));
var G__54497 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__54478,G__54479,G__54480,G__54481,G__54482,G__54483,G__54484,G__54485,G__54486,G__54487){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54488,G__54478);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54489,G__54479);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54490,G__54480);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54491,G__54481);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54492,G__54482);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54493,G__54483);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54494,G__54484);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54495,G__54485);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54496,G__54486);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54497,G__54487);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55531 = cljs.core._nth(recur_val,(0));
var G__55532 = cljs.core._nth(recur_val,(1));
var G__55533 = cljs.core._nth(recur_val,(2));
var G__55534 = cljs.core._nth(recur_val,(3));
var G__55535 = cljs.core._nth(recur_val,(4));
var G__55536 = cljs.core._nth(recur_val,(5));
var G__55537 = cljs.core._nth(recur_val,(6));
var G__55538 = cljs.core._nth(recur_val,(7));
var G__55539 = cljs.core._nth(recur_val,(8));
var G__55540 = cljs.core._nth(recur_val,(9));
G__54478 = G__55531;
G__54479 = G__55532;
G__54480 = G__55533;
G__54481 = G__55534;
G__54482 = G__55535;
G__54483 = G__55536;
G__54484 = G__55537;
G__54485 = G__55538;
G__54486 = G__55539;
G__54487 = G__55540;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54516 = cljs.core._nth(params,(0));
var G__54517 = cljs.core._nth(params,(1));
var G__54518 = cljs.core._nth(params,(2));
var G__54519 = cljs.core._nth(params,(3));
var G__54520 = cljs.core._nth(params,(4));
var G__54521 = cljs.core._nth(params,(5));
var G__54522 = cljs.core._nth(params,(6));
var G__54523 = cljs.core._nth(params,(7));
var G__54524 = cljs.core._nth(params,(8));
var G__54525 = cljs.core._nth(params,(9));
var G__54526 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__54505,G__54506,G__54507,G__54508,G__54509,G__54510,G__54511,G__54512,G__54513,G__54514,G__54515){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54516,G__54505);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54517,G__54506);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54518,G__54507);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54519,G__54508);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54520,G__54509);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54521,G__54510);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54522,G__54511);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54523,G__54512);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54524,G__54513);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54525,G__54514);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54526,G__54515);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55542 = cljs.core._nth(recur_val,(0));
var G__55543 = cljs.core._nth(recur_val,(1));
var G__55544 = cljs.core._nth(recur_val,(2));
var G__55545 = cljs.core._nth(recur_val,(3));
var G__55546 = cljs.core._nth(recur_val,(4));
var G__55547 = cljs.core._nth(recur_val,(5));
var G__55548 = cljs.core._nth(recur_val,(6));
var G__55549 = cljs.core._nth(recur_val,(7));
var G__55550 = cljs.core._nth(recur_val,(8));
var G__55551 = cljs.core._nth(recur_val,(9));
var G__55552 = cljs.core._nth(recur_val,(10));
G__54505 = G__55542;
G__54506 = G__55543;
G__54507 = G__55544;
G__54508 = G__55545;
G__54509 = G__55546;
G__54510 = G__55547;
G__54511 = G__55548;
G__54512 = G__55549;
G__54513 = G__55550;
G__54514 = G__55551;
G__54515 = G__55552;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54541 = cljs.core._nth(params,(0));
var G__54542 = cljs.core._nth(params,(1));
var G__54543 = cljs.core._nth(params,(2));
var G__54544 = cljs.core._nth(params,(3));
var G__54545 = cljs.core._nth(params,(4));
var G__54546 = cljs.core._nth(params,(5));
var G__54547 = cljs.core._nth(params,(6));
var G__54548 = cljs.core._nth(params,(7));
var G__54549 = cljs.core._nth(params,(8));
var G__54550 = cljs.core._nth(params,(9));
var G__54551 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__54530,G__54531,G__54532,G__54533,G__54534,G__54535,G__54536,G__54537,G__54538,G__54539,G__54540){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54541,G__54530);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54542,G__54531);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54543,G__54532);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54544,G__54533);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54545,G__54534);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54546,G__54535);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54547,G__54536);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54548,G__54537);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54549,G__54538);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54550,G__54539);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54551,G__54540);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55558 = cljs.core._nth(recur_val,(0));
var G__55559 = cljs.core._nth(recur_val,(1));
var G__55560 = cljs.core._nth(recur_val,(2));
var G__55561 = cljs.core._nth(recur_val,(3));
var G__55562 = cljs.core._nth(recur_val,(4));
var G__55563 = cljs.core._nth(recur_val,(5));
var G__55564 = cljs.core._nth(recur_val,(6));
var G__55565 = cljs.core._nth(recur_val,(7));
var G__55566 = cljs.core._nth(recur_val,(8));
var G__55567 = cljs.core._nth(recur_val,(9));
var G__55568 = cljs.core._nth(recur_val,(10));
G__54530 = G__55558;
G__54531 = G__55559;
G__54532 = G__55560;
G__54533 = G__55561;
G__54534 = G__55562;
G__54535 = G__55563;
G__54536 = G__55564;
G__54537 = G__55565;
G__54538 = G__55566;
G__54539 = G__55567;
G__54540 = G__55568;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54565 = cljs.core._nth(params,(0));
var G__54566 = cljs.core._nth(params,(1));
var G__54567 = cljs.core._nth(params,(2));
var G__54568 = cljs.core._nth(params,(3));
var G__54569 = cljs.core._nth(params,(4));
var G__54570 = cljs.core._nth(params,(5));
var G__54571 = cljs.core._nth(params,(6));
var G__54572 = cljs.core._nth(params,(7));
var G__54573 = cljs.core._nth(params,(8));
var G__54574 = cljs.core._nth(params,(9));
var G__54575 = cljs.core._nth(params,(10));
var G__54576 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__54553,G__54554,G__54555,G__54556,G__54557,G__54558,G__54559,G__54560,G__54561,G__54562,G__54563,G__54564){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54565,G__54553);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54566,G__54554);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54567,G__54555);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54568,G__54556);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54569,G__54557);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54570,G__54558);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54571,G__54559);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54572,G__54560);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54573,G__54561);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54574,G__54562);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54575,G__54563);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54576,G__54564);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55579 = cljs.core._nth(recur_val,(0));
var G__55580 = cljs.core._nth(recur_val,(1));
var G__55581 = cljs.core._nth(recur_val,(2));
var G__55582 = cljs.core._nth(recur_val,(3));
var G__55583 = cljs.core._nth(recur_val,(4));
var G__55584 = cljs.core._nth(recur_val,(5));
var G__55585 = cljs.core._nth(recur_val,(6));
var G__55586 = cljs.core._nth(recur_val,(7));
var G__55587 = cljs.core._nth(recur_val,(8));
var G__55588 = cljs.core._nth(recur_val,(9));
var G__55589 = cljs.core._nth(recur_val,(10));
var G__55590 = cljs.core._nth(recur_val,(11));
G__54553 = G__55579;
G__54554 = G__55580;
G__54555 = G__55581;
G__54556 = G__55582;
G__54557 = G__55583;
G__54558 = G__55584;
G__54559 = G__55585;
G__54560 = G__55586;
G__54561 = G__55587;
G__54562 = G__55588;
G__54563 = G__55589;
G__54564 = G__55590;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54598 = cljs.core._nth(params,(0));
var G__54599 = cljs.core._nth(params,(1));
var G__54600 = cljs.core._nth(params,(2));
var G__54601 = cljs.core._nth(params,(3));
var G__54602 = cljs.core._nth(params,(4));
var G__54603 = cljs.core._nth(params,(5));
var G__54604 = cljs.core._nth(params,(6));
var G__54605 = cljs.core._nth(params,(7));
var G__54606 = cljs.core._nth(params,(8));
var G__54607 = cljs.core._nth(params,(9));
var G__54608 = cljs.core._nth(params,(10));
var G__54609 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592,G__54593,G__54594,G__54595,G__54596,G__54597){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54598,G__54586);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54599,G__54587);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54600,G__54588);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54601,G__54589);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54602,G__54590);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54603,G__54591);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54604,G__54592);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54605,G__54593);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54606,G__54594);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54607,G__54595);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54608,G__54596);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54609,G__54597);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55595 = cljs.core._nth(recur_val,(0));
var G__55596 = cljs.core._nth(recur_val,(1));
var G__55597 = cljs.core._nth(recur_val,(2));
var G__55598 = cljs.core._nth(recur_val,(3));
var G__55599 = cljs.core._nth(recur_val,(4));
var G__55600 = cljs.core._nth(recur_val,(5));
var G__55601 = cljs.core._nth(recur_val,(6));
var G__55602 = cljs.core._nth(recur_val,(7));
var G__55603 = cljs.core._nth(recur_val,(8));
var G__55604 = cljs.core._nth(recur_val,(9));
var G__55605 = cljs.core._nth(recur_val,(10));
var G__55606 = cljs.core._nth(recur_val,(11));
G__54586 = G__55595;
G__54587 = G__55596;
G__54588 = G__55597;
G__54589 = G__55598;
G__54590 = G__55599;
G__54591 = G__55600;
G__54592 = G__55601;
G__54593 = G__55602;
G__54594 = G__55603;
G__54595 = G__55604;
G__54596 = G__55605;
G__54597 = G__55606;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54633 = cljs.core._nth(params,(0));
var G__54636 = cljs.core._nth(params,(1));
var G__54637 = cljs.core._nth(params,(2));
var G__54638 = cljs.core._nth(params,(3));
var G__54639 = cljs.core._nth(params,(4));
var G__54640 = cljs.core._nth(params,(5));
var G__54641 = cljs.core._nth(params,(6));
var G__54642 = cljs.core._nth(params,(7));
var G__54643 = cljs.core._nth(params,(8));
var G__54644 = cljs.core._nth(params,(9));
var G__54645 = cljs.core._nth(params,(10));
var G__54646 = cljs.core._nth(params,(11));
var G__54647 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__54620,G__54621,G__54622,G__54623,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631,G__54632){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54633,G__54620);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54636,G__54621);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54637,G__54622);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54638,G__54623);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54639,G__54624);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54640,G__54625);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54641,G__54626);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54642,G__54627);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54643,G__54628);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54644,G__54629);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54645,G__54630);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54646,G__54631);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54647,G__54632);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55617 = cljs.core._nth(recur_val,(0));
var G__55618 = cljs.core._nth(recur_val,(1));
var G__55619 = cljs.core._nth(recur_val,(2));
var G__55620 = cljs.core._nth(recur_val,(3));
var G__55621 = cljs.core._nth(recur_val,(4));
var G__55622 = cljs.core._nth(recur_val,(5));
var G__55623 = cljs.core._nth(recur_val,(6));
var G__55624 = cljs.core._nth(recur_val,(7));
var G__55625 = cljs.core._nth(recur_val,(8));
var G__55626 = cljs.core._nth(recur_val,(9));
var G__55627 = cljs.core._nth(recur_val,(10));
var G__55628 = cljs.core._nth(recur_val,(11));
var G__55629 = cljs.core._nth(recur_val,(12));
G__54620 = G__55617;
G__54621 = G__55618;
G__54622 = G__55619;
G__54623 = G__55620;
G__54624 = G__55621;
G__54625 = G__55622;
G__54626 = G__55623;
G__54627 = G__55624;
G__54628 = G__55625;
G__54629 = G__55626;
G__54630 = G__55627;
G__54631 = G__55628;
G__54632 = G__55629;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54669 = cljs.core._nth(params,(0));
var G__54670 = cljs.core._nth(params,(1));
var G__54671 = cljs.core._nth(params,(2));
var G__54672 = cljs.core._nth(params,(3));
var G__54673 = cljs.core._nth(params,(4));
var G__54674 = cljs.core._nth(params,(5));
var G__54675 = cljs.core._nth(params,(6));
var G__54676 = cljs.core._nth(params,(7));
var G__54677 = cljs.core._nth(params,(8));
var G__54678 = cljs.core._nth(params,(9));
var G__54679 = cljs.core._nth(params,(10));
var G__54680 = cljs.core._nth(params,(11));
var G__54681 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__54656,G__54657,G__54658,G__54659,G__54660,G__54661,G__54662,G__54663,G__54664,G__54665,G__54666,G__54667,G__54668){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54669,G__54656);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54670,G__54657);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54671,G__54658);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54672,G__54659);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54673,G__54660);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54674,G__54661);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54675,G__54662);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54676,G__54663);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54677,G__54664);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54678,G__54665);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54679,G__54666);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54680,G__54667);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54681,G__54668);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55639 = cljs.core._nth(recur_val,(0));
var G__55640 = cljs.core._nth(recur_val,(1));
var G__55641 = cljs.core._nth(recur_val,(2));
var G__55642 = cljs.core._nth(recur_val,(3));
var G__55643 = cljs.core._nth(recur_val,(4));
var G__55644 = cljs.core._nth(recur_val,(5));
var G__55645 = cljs.core._nth(recur_val,(6));
var G__55646 = cljs.core._nth(recur_val,(7));
var G__55647 = cljs.core._nth(recur_val,(8));
var G__55648 = cljs.core._nth(recur_val,(9));
var G__55649 = cljs.core._nth(recur_val,(10));
var G__55650 = cljs.core._nth(recur_val,(11));
var G__55651 = cljs.core._nth(recur_val,(12));
G__54656 = G__55639;
G__54657 = G__55640;
G__54658 = G__55641;
G__54659 = G__55642;
G__54660 = G__55643;
G__54661 = G__55644;
G__54662 = G__55645;
G__54663 = G__55646;
G__54664 = G__55647;
G__54665 = G__55648;
G__54666 = G__55649;
G__54667 = G__55650;
G__54668 = G__55651;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54699 = cljs.core._nth(params,(0));
var G__54700 = cljs.core._nth(params,(1));
var G__54701 = cljs.core._nth(params,(2));
var G__54702 = cljs.core._nth(params,(3));
var G__54703 = cljs.core._nth(params,(4));
var G__54704 = cljs.core._nth(params,(5));
var G__54705 = cljs.core._nth(params,(6));
var G__54706 = cljs.core._nth(params,(7));
var G__54707 = cljs.core._nth(params,(8));
var G__54708 = cljs.core._nth(params,(9));
var G__54709 = cljs.core._nth(params,(10));
var G__54710 = cljs.core._nth(params,(11));
var G__54711 = cljs.core._nth(params,(12));
var G__54712 = cljs.core._nth(params,(13));
var G__54713 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54684,G__54685,G__54686,G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693,G__54694,G__54695,G__54696,G__54697,G__54698){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54699,G__54684);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54700,G__54685);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54701,G__54686);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54702,G__54687);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54703,G__54688);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54704,G__54689);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54705,G__54690);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54706,G__54691);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54707,G__54692);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54708,G__54693);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54709,G__54694);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54710,G__54695);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54711,G__54696);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54712,G__54697);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54713,G__54698);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55666 = cljs.core._nth(recur_val,(0));
var G__55667 = cljs.core._nth(recur_val,(1));
var G__55668 = cljs.core._nth(recur_val,(2));
var G__55669 = cljs.core._nth(recur_val,(3));
var G__55670 = cljs.core._nth(recur_val,(4));
var G__55671 = cljs.core._nth(recur_val,(5));
var G__55672 = cljs.core._nth(recur_val,(6));
var G__55673 = cljs.core._nth(recur_val,(7));
var G__55674 = cljs.core._nth(recur_val,(8));
var G__55675 = cljs.core._nth(recur_val,(9));
var G__55676 = cljs.core._nth(recur_val,(10));
var G__55677 = cljs.core._nth(recur_val,(11));
var G__55678 = cljs.core._nth(recur_val,(12));
var G__55679 = cljs.core._nth(recur_val,(13));
var G__55680 = cljs.core._nth(recur_val,(14));
G__54684 = G__55666;
G__54685 = G__55667;
G__54686 = G__55668;
G__54687 = G__55669;
G__54688 = G__55670;
G__54689 = G__55671;
G__54690 = G__55672;
G__54691 = G__55673;
G__54692 = G__55674;
G__54693 = G__55675;
G__54694 = G__55676;
G__54695 = G__55677;
G__54696 = G__55678;
G__54697 = G__55679;
G__54698 = G__55680;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54738 = cljs.core._nth(params,(0));
var G__54739 = cljs.core._nth(params,(1));
var G__54740 = cljs.core._nth(params,(2));
var G__54741 = cljs.core._nth(params,(3));
var G__54742 = cljs.core._nth(params,(4));
var G__54743 = cljs.core._nth(params,(5));
var G__54744 = cljs.core._nth(params,(6));
var G__54745 = cljs.core._nth(params,(7));
var G__54746 = cljs.core._nth(params,(8));
var G__54747 = cljs.core._nth(params,(9));
var G__54748 = cljs.core._nth(params,(10));
var G__54749 = cljs.core._nth(params,(11));
var G__54750 = cljs.core._nth(params,(12));
var G__54751 = cljs.core._nth(params,(13));
var G__54752 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54723,G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735,G__54736,G__54737){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54738,G__54723);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54739,G__54724);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54740,G__54725);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54741,G__54726);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54742,G__54727);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54743,G__54728);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54744,G__54729);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54745,G__54730);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54746,G__54731);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54747,G__54732);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54748,G__54733);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54749,G__54734);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54750,G__54735);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54751,G__54736);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54752,G__54737);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55691 = cljs.core._nth(recur_val,(0));
var G__55692 = cljs.core._nth(recur_val,(1));
var G__55693 = cljs.core._nth(recur_val,(2));
var G__55694 = cljs.core._nth(recur_val,(3));
var G__55695 = cljs.core._nth(recur_val,(4));
var G__55696 = cljs.core._nth(recur_val,(5));
var G__55697 = cljs.core._nth(recur_val,(6));
var G__55698 = cljs.core._nth(recur_val,(7));
var G__55699 = cljs.core._nth(recur_val,(8));
var G__55700 = cljs.core._nth(recur_val,(9));
var G__55701 = cljs.core._nth(recur_val,(10));
var G__55702 = cljs.core._nth(recur_val,(11));
var G__55703 = cljs.core._nth(recur_val,(12));
var G__55704 = cljs.core._nth(recur_val,(13));
var G__55705 = cljs.core._nth(recur_val,(14));
G__54723 = G__55691;
G__54724 = G__55692;
G__54725 = G__55693;
G__54726 = G__55694;
G__54727 = G__55695;
G__54728 = G__55696;
G__54729 = G__55697;
G__54730 = G__55698;
G__54731 = G__55699;
G__54732 = G__55700;
G__54733 = G__55701;
G__54734 = G__55702;
G__54735 = G__55703;
G__54736 = G__55704;
G__54737 = G__55705;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54784 = cljs.core._nth(params,(0));
var G__54785 = cljs.core._nth(params,(1));
var G__54786 = cljs.core._nth(params,(2));
var G__54787 = cljs.core._nth(params,(3));
var G__54788 = cljs.core._nth(params,(4));
var G__54789 = cljs.core._nth(params,(5));
var G__54790 = cljs.core._nth(params,(6));
var G__54791 = cljs.core._nth(params,(7));
var G__54792 = cljs.core._nth(params,(8));
var G__54793 = cljs.core._nth(params,(9));
var G__54794 = cljs.core._nth(params,(10));
var G__54795 = cljs.core._nth(params,(11));
var G__54796 = cljs.core._nth(params,(12));
var G__54797 = cljs.core._nth(params,(13));
var G__54798 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54766,G__54767,G__54768,G__54769,G__54770,G__54771,G__54772,G__54773,G__54775,G__54776,G__54777,G__54778,G__54779,G__54781,G__54782){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54784,G__54766);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54785,G__54767);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54786,G__54768);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54787,G__54769);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54788,G__54770);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54789,G__54771);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54790,G__54772);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54791,G__54773);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54792,G__54775);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54793,G__54776);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54794,G__54777);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54795,G__54778);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54796,G__54779);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54797,G__54781);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54798,G__54782);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55714 = cljs.core._nth(recur_val,(0));
var G__55715 = cljs.core._nth(recur_val,(1));
var G__55716 = cljs.core._nth(recur_val,(2));
var G__55717 = cljs.core._nth(recur_val,(3));
var G__55718 = cljs.core._nth(recur_val,(4));
var G__55719 = cljs.core._nth(recur_val,(5));
var G__55720 = cljs.core._nth(recur_val,(6));
var G__55721 = cljs.core._nth(recur_val,(7));
var G__55722 = cljs.core._nth(recur_val,(8));
var G__55723 = cljs.core._nth(recur_val,(9));
var G__55724 = cljs.core._nth(recur_val,(10));
var G__55725 = cljs.core._nth(recur_val,(11));
var G__55726 = cljs.core._nth(recur_val,(12));
var G__55727 = cljs.core._nth(recur_val,(13));
var G__55728 = cljs.core._nth(recur_val,(14));
G__54766 = G__55714;
G__54767 = G__55715;
G__54768 = G__55716;
G__54769 = G__55717;
G__54770 = G__55718;
G__54771 = G__55719;
G__54772 = G__55720;
G__54773 = G__55721;
G__54775 = G__55722;
G__54776 = G__55723;
G__54777 = G__55724;
G__54778 = G__55725;
G__54779 = G__55726;
G__54781 = G__55727;
G__54782 = G__55728;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54821 = cljs.core._nth(params,(0));
var G__54822 = cljs.core._nth(params,(1));
var G__54823 = cljs.core._nth(params,(2));
var G__54824 = cljs.core._nth(params,(3));
var G__54825 = cljs.core._nth(params,(4));
var G__54826 = cljs.core._nth(params,(5));
var G__54827 = cljs.core._nth(params,(6));
var G__54828 = cljs.core._nth(params,(7));
var G__54829 = cljs.core._nth(params,(8));
var G__54830 = cljs.core._nth(params,(9));
var G__54831 = cljs.core._nth(params,(10));
var G__54832 = cljs.core._nth(params,(11));
var G__54833 = cljs.core._nth(params,(12));
var G__54834 = cljs.core._nth(params,(13));
var G__54835 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__54806,G__54807,G__54808,G__54809,G__54810,G__54811,G__54812,G__54813,G__54814,G__54815,G__54816,G__54817,G__54818,G__54819,G__54820){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54821,G__54806);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54822,G__54807);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54823,G__54808);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54824,G__54809);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54825,G__54810);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54826,G__54811);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54827,G__54812);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54828,G__54813);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54829,G__54814);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54830,G__54815);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54831,G__54816);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54832,G__54817);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54833,G__54818);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54834,G__54819);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54835,G__54820);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55738 = cljs.core._nth(recur_val,(0));
var G__55739 = cljs.core._nth(recur_val,(1));
var G__55740 = cljs.core._nth(recur_val,(2));
var G__55741 = cljs.core._nth(recur_val,(3));
var G__55742 = cljs.core._nth(recur_val,(4));
var G__55743 = cljs.core._nth(recur_val,(5));
var G__55744 = cljs.core._nth(recur_val,(6));
var G__55745 = cljs.core._nth(recur_val,(7));
var G__55746 = cljs.core._nth(recur_val,(8));
var G__55747 = cljs.core._nth(recur_val,(9));
var G__55748 = cljs.core._nth(recur_val,(10));
var G__55749 = cljs.core._nth(recur_val,(11));
var G__55750 = cljs.core._nth(recur_val,(12));
var G__55751 = cljs.core._nth(recur_val,(13));
var G__55752 = cljs.core._nth(recur_val,(14));
G__54806 = G__55738;
G__54807 = G__55739;
G__54808 = G__55740;
G__54809 = G__55741;
G__54810 = G__55742;
G__54811 = G__55743;
G__54812 = G__55744;
G__54813 = G__55745;
G__54814 = G__55746;
G__54815 = G__55747;
G__54816 = G__55748;
G__54817 = G__55749;
G__54818 = G__55750;
G__54819 = G__55751;
G__54820 = G__55752;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54865 = cljs.core._nth(params,(0));
var G__54866 = cljs.core._nth(params,(1));
var G__54867 = cljs.core._nth(params,(2));
var G__54868 = cljs.core._nth(params,(3));
var G__54869 = cljs.core._nth(params,(4));
var G__54870 = cljs.core._nth(params,(5));
var G__54871 = cljs.core._nth(params,(6));
var G__54872 = cljs.core._nth(params,(7));
var G__54873 = cljs.core._nth(params,(8));
var G__54874 = cljs.core._nth(params,(9));
var G__54875 = cljs.core._nth(params,(10));
var G__54876 = cljs.core._nth(params,(11));
var G__54877 = cljs.core._nth(params,(12));
var G__54878 = cljs.core._nth(params,(13));
var G__54879 = cljs.core._nth(params,(14));
var G__54880 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__54849,G__54850,G__54851,G__54852,G__54853,G__54854,G__54855,G__54856,G__54857,G__54858,G__54859,G__54860,G__54861,G__54862,G__54863,G__54864){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54865,G__54849);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54866,G__54850);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54867,G__54851);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54868,G__54852);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54869,G__54853);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54870,G__54854);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54871,G__54855);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54872,G__54856);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54873,G__54857);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54874,G__54858);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54875,G__54859);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54876,G__54860);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54877,G__54861);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54878,G__54862);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54879,G__54863);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54880,G__54864);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55768 = cljs.core._nth(recur_val,(0));
var G__55769 = cljs.core._nth(recur_val,(1));
var G__55770 = cljs.core._nth(recur_val,(2));
var G__55771 = cljs.core._nth(recur_val,(3));
var G__55772 = cljs.core._nth(recur_val,(4));
var G__55773 = cljs.core._nth(recur_val,(5));
var G__55774 = cljs.core._nth(recur_val,(6));
var G__55775 = cljs.core._nth(recur_val,(7));
var G__55776 = cljs.core._nth(recur_val,(8));
var G__55777 = cljs.core._nth(recur_val,(9));
var G__55778 = cljs.core._nth(recur_val,(10));
var G__55779 = cljs.core._nth(recur_val,(11));
var G__55780 = cljs.core._nth(recur_val,(12));
var G__55781 = cljs.core._nth(recur_val,(13));
var G__55782 = cljs.core._nth(recur_val,(14));
var G__55783 = cljs.core._nth(recur_val,(15));
G__54849 = G__55768;
G__54850 = G__55769;
G__54851 = G__55770;
G__54852 = G__55771;
G__54853 = G__55772;
G__54854 = G__55773;
G__54855 = G__55774;
G__54856 = G__55775;
G__54857 = G__55776;
G__54858 = G__55777;
G__54859 = G__55778;
G__54860 = G__55779;
G__54861 = G__55780;
G__54862 = G__55781;
G__54863 = G__55782;
G__54864 = G__55783;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54909 = cljs.core._nth(params,(0));
var G__54910 = cljs.core._nth(params,(1));
var G__54911 = cljs.core._nth(params,(2));
var G__54912 = cljs.core._nth(params,(3));
var G__54913 = cljs.core._nth(params,(4));
var G__54914 = cljs.core._nth(params,(5));
var G__54915 = cljs.core._nth(params,(6));
var G__54916 = cljs.core._nth(params,(7));
var G__54917 = cljs.core._nth(params,(8));
var G__54918 = cljs.core._nth(params,(9));
var G__54919 = cljs.core._nth(params,(10));
var G__54920 = cljs.core._nth(params,(11));
var G__54921 = cljs.core._nth(params,(12));
var G__54922 = cljs.core._nth(params,(13));
var G__54923 = cljs.core._nth(params,(14));
var G__54924 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__54893,G__54894,G__54895,G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902,G__54903,G__54904,G__54905,G__54906,G__54907,G__54908){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54909,G__54893);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54910,G__54894);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54911,G__54895);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54912,G__54896);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54913,G__54897);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54914,G__54898);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54915,G__54899);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54916,G__54900);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54917,G__54901);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54918,G__54902);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54919,G__54903);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54920,G__54904);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54921,G__54905);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54922,G__54906);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54923,G__54907);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54924,G__54908);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55790 = cljs.core._nth(recur_val,(0));
var G__55791 = cljs.core._nth(recur_val,(1));
var G__55792 = cljs.core._nth(recur_val,(2));
var G__55793 = cljs.core._nth(recur_val,(3));
var G__55794 = cljs.core._nth(recur_val,(4));
var G__55795 = cljs.core._nth(recur_val,(5));
var G__55796 = cljs.core._nth(recur_val,(6));
var G__55797 = cljs.core._nth(recur_val,(7));
var G__55798 = cljs.core._nth(recur_val,(8));
var G__55799 = cljs.core._nth(recur_val,(9));
var G__55800 = cljs.core._nth(recur_val,(10));
var G__55801 = cljs.core._nth(recur_val,(11));
var G__55802 = cljs.core._nth(recur_val,(12));
var G__55803 = cljs.core._nth(recur_val,(13));
var G__55804 = cljs.core._nth(recur_val,(14));
var G__55805 = cljs.core._nth(recur_val,(15));
G__54893 = G__55790;
G__54894 = G__55791;
G__54895 = G__55792;
G__54896 = G__55793;
G__54897 = G__55794;
G__54898 = G__55795;
G__54899 = G__55796;
G__54900 = G__55797;
G__54901 = G__55798;
G__54902 = G__55799;
G__54903 = G__55800;
G__54904 = G__55801;
G__54905 = G__55802;
G__54906 = G__55803;
G__54907 = G__55804;
G__54908 = G__55805;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__54951 = cljs.core._nth(params,(0));
var G__54952 = cljs.core._nth(params,(1));
var G__54953 = cljs.core._nth(params,(2));
var G__54954 = cljs.core._nth(params,(3));
var G__54955 = cljs.core._nth(params,(4));
var G__54956 = cljs.core._nth(params,(5));
var G__54957 = cljs.core._nth(params,(6));
var G__54958 = cljs.core._nth(params,(7));
var G__54959 = cljs.core._nth(params,(8));
var G__54960 = cljs.core._nth(params,(9));
var G__54961 = cljs.core._nth(params,(10));
var G__54962 = cljs.core._nth(params,(11));
var G__54963 = cljs.core._nth(params,(12));
var G__54964 = cljs.core._nth(params,(13));
var G__54965 = cljs.core._nth(params,(14));
var G__54966 = cljs.core._nth(params,(15));
var G__54967 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__54934,G__54935,G__54936,G__54937,G__54938,G__54939,G__54940,G__54941,G__54942,G__54943,G__54944,G__54945,G__54946,G__54947,G__54948,G__54949,G__54950){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__54951,G__54934);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54952,G__54935);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54953,G__54936);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54954,G__54937);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54955,G__54938);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54956,G__54939);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54957,G__54940);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54958,G__54941);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54959,G__54942);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54960,G__54943);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54961,G__54944);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54962,G__54945);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54963,G__54946);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__54964,G__54947);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__54965,G__54948);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__54966,G__54949);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__54967,G__54950);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55824 = cljs.core._nth(recur_val,(0));
var G__55825 = cljs.core._nth(recur_val,(1));
var G__55826 = cljs.core._nth(recur_val,(2));
var G__55827 = cljs.core._nth(recur_val,(3));
var G__55828 = cljs.core._nth(recur_val,(4));
var G__55829 = cljs.core._nth(recur_val,(5));
var G__55830 = cljs.core._nth(recur_val,(6));
var G__55831 = cljs.core._nth(recur_val,(7));
var G__55832 = cljs.core._nth(recur_val,(8));
var G__55833 = cljs.core._nth(recur_val,(9));
var G__55834 = cljs.core._nth(recur_val,(10));
var G__55835 = cljs.core._nth(recur_val,(11));
var G__55836 = cljs.core._nth(recur_val,(12));
var G__55837 = cljs.core._nth(recur_val,(13));
var G__55838 = cljs.core._nth(recur_val,(14));
var G__55839 = cljs.core._nth(recur_val,(15));
var G__55840 = cljs.core._nth(recur_val,(16));
G__54934 = G__55824;
G__54935 = G__55825;
G__54936 = G__55826;
G__54937 = G__55827;
G__54938 = G__55828;
G__54939 = G__55829;
G__54940 = G__55830;
G__54941 = G__55831;
G__54942 = G__55832;
G__54943 = G__55833;
G__54944 = G__55834;
G__54945 = G__55835;
G__54946 = G__55836;
G__54947 = G__55837;
G__54948 = G__55838;
G__54949 = G__55839;
G__54950 = G__55840;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__54987 = cljs.core._nth(params,(0));
var G__54988 = cljs.core._nth(params,(1));
var G__54989 = cljs.core._nth(params,(2));
var G__54990 = cljs.core._nth(params,(3));
var G__54991 = cljs.core._nth(params,(4));
var G__54992 = cljs.core._nth(params,(5));
var G__54993 = cljs.core._nth(params,(6));
var G__54994 = cljs.core._nth(params,(7));
var G__54995 = cljs.core._nth(params,(8));
var G__54996 = cljs.core._nth(params,(9));
var G__54997 = cljs.core._nth(params,(10));
var G__54998 = cljs.core._nth(params,(11));
var G__54999 = cljs.core._nth(params,(12));
var G__55000 = cljs.core._nth(params,(13));
var G__55001 = cljs.core._nth(params,(14));
var G__55002 = cljs.core._nth(params,(15));
var G__55003 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__54970,G__54971,G__54972,G__54973,G__54974,G__54975,G__54976,G__54977,G__54978,G__54979,G__54980,G__54981,G__54982,G__54983,G__54984,G__54985,G__54986){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__54987,G__54970);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__54988,G__54971);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__54989,G__54972);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__54990,G__54973);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__54991,G__54974);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__54992,G__54975);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__54993,G__54976);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__54994,G__54977);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__54995,G__54978);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__54996,G__54979);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__54997,G__54980);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__54998,G__54981);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__54999,G__54982);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55000,G__54983);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55001,G__54984);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55002,G__54985);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55003,G__54986);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55858 = cljs.core._nth(recur_val,(0));
var G__55859 = cljs.core._nth(recur_val,(1));
var G__55860 = cljs.core._nth(recur_val,(2));
var G__55861 = cljs.core._nth(recur_val,(3));
var G__55862 = cljs.core._nth(recur_val,(4));
var G__55863 = cljs.core._nth(recur_val,(5));
var G__55864 = cljs.core._nth(recur_val,(6));
var G__55865 = cljs.core._nth(recur_val,(7));
var G__55866 = cljs.core._nth(recur_val,(8));
var G__55867 = cljs.core._nth(recur_val,(9));
var G__55868 = cljs.core._nth(recur_val,(10));
var G__55869 = cljs.core._nth(recur_val,(11));
var G__55870 = cljs.core._nth(recur_val,(12));
var G__55871 = cljs.core._nth(recur_val,(13));
var G__55872 = cljs.core._nth(recur_val,(14));
var G__55873 = cljs.core._nth(recur_val,(15));
var G__55874 = cljs.core._nth(recur_val,(16));
G__54970 = G__55858;
G__54971 = G__55859;
G__54972 = G__55860;
G__54973 = G__55861;
G__54974 = G__55862;
G__54975 = G__55863;
G__54976 = G__55864;
G__54977 = G__55865;
G__54978 = G__55866;
G__54979 = G__55867;
G__54980 = G__55868;
G__54981 = G__55869;
G__54982 = G__55870;
G__54983 = G__55871;
G__54984 = G__55872;
G__54985 = G__55873;
G__54986 = G__55874;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__55026 = cljs.core._nth(params,(0));
var G__55027 = cljs.core._nth(params,(1));
var G__55028 = cljs.core._nth(params,(2));
var G__55029 = cljs.core._nth(params,(3));
var G__55030 = cljs.core._nth(params,(4));
var G__55031 = cljs.core._nth(params,(5));
var G__55032 = cljs.core._nth(params,(6));
var G__55033 = cljs.core._nth(params,(7));
var G__55034 = cljs.core._nth(params,(8));
var G__55035 = cljs.core._nth(params,(9));
var G__55036 = cljs.core._nth(params,(10));
var G__55037 = cljs.core._nth(params,(11));
var G__55038 = cljs.core._nth(params,(12));
var G__55039 = cljs.core._nth(params,(13));
var G__55040 = cljs.core._nth(params,(14));
var G__55041 = cljs.core._nth(params,(15));
var G__55042 = cljs.core._nth(params,(16));
var G__55043 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__55008,G__55009,G__55010,G__55011,G__55012,G__55013,G__55014,G__55015,G__55016,G__55017,G__55018,G__55019,G__55020,G__55021,G__55022,G__55023,G__55024,G__55025){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__55026,G__55008);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55027,G__55009);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55028,G__55010);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55029,G__55011);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55030,G__55012);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55031,G__55013);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55032,G__55014);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55033,G__55015);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55034,G__55016);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55035,G__55017);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55036,G__55018);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55037,G__55019);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55038,G__55020);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55039,G__55021);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55040,G__55022);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55041,G__55023);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55042,G__55024);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55043,G__55025);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55883 = cljs.core._nth(recur_val,(0));
var G__55884 = cljs.core._nth(recur_val,(1));
var G__55885 = cljs.core._nth(recur_val,(2));
var G__55886 = cljs.core._nth(recur_val,(3));
var G__55887 = cljs.core._nth(recur_val,(4));
var G__55888 = cljs.core._nth(recur_val,(5));
var G__55889 = cljs.core._nth(recur_val,(6));
var G__55890 = cljs.core._nth(recur_val,(7));
var G__55891 = cljs.core._nth(recur_val,(8));
var G__55892 = cljs.core._nth(recur_val,(9));
var G__55893 = cljs.core._nth(recur_val,(10));
var G__55894 = cljs.core._nth(recur_val,(11));
var G__55895 = cljs.core._nth(recur_val,(12));
var G__55896 = cljs.core._nth(recur_val,(13));
var G__55897 = cljs.core._nth(recur_val,(14));
var G__55898 = cljs.core._nth(recur_val,(15));
var G__55899 = cljs.core._nth(recur_val,(16));
var G__55900 = cljs.core._nth(recur_val,(17));
G__55008 = G__55883;
G__55009 = G__55884;
G__55010 = G__55885;
G__55011 = G__55886;
G__55012 = G__55887;
G__55013 = G__55888;
G__55014 = G__55889;
G__55015 = G__55890;
G__55016 = G__55891;
G__55017 = G__55892;
G__55018 = G__55893;
G__55019 = G__55894;
G__55020 = G__55895;
G__55021 = G__55896;
G__55022 = G__55897;
G__55023 = G__55898;
G__55024 = G__55899;
G__55025 = G__55900;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__55113 = cljs.core._nth(params,(0));
var G__55114 = cljs.core._nth(params,(1));
var G__55115 = cljs.core._nth(params,(2));
var G__55116 = cljs.core._nth(params,(3));
var G__55117 = cljs.core._nth(params,(4));
var G__55118 = cljs.core._nth(params,(5));
var G__55119 = cljs.core._nth(params,(6));
var G__55120 = cljs.core._nth(params,(7));
var G__55121 = cljs.core._nth(params,(8));
var G__55122 = cljs.core._nth(params,(9));
var G__55123 = cljs.core._nth(params,(10));
var G__55124 = cljs.core._nth(params,(11));
var G__55125 = cljs.core._nth(params,(12));
var G__55126 = cljs.core._nth(params,(13));
var G__55127 = cljs.core._nth(params,(14));
var G__55128 = cljs.core._nth(params,(15));
var G__55129 = cljs.core._nth(params,(16));
var G__55130 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__55094,G__55096,G__55097,G__55098,G__55099,G__55100,G__55101,G__55102,G__55103,G__55104,G__55105,G__55106,G__55107,G__55108,G__55109,G__55110,G__55111,G__55112){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__55113,G__55094);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55114,G__55096);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55115,G__55097);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55116,G__55098);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55117,G__55099);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55118,G__55100);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55119,G__55101);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55120,G__55102);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55121,G__55103);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55122,G__55104);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55123,G__55105);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55124,G__55106);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55125,G__55107);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55126,G__55108);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55127,G__55109);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55128,G__55110);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55129,G__55111);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55130,G__55112);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55919 = cljs.core._nth(recur_val,(0));
var G__55920 = cljs.core._nth(recur_val,(1));
var G__55921 = cljs.core._nth(recur_val,(2));
var G__55922 = cljs.core._nth(recur_val,(3));
var G__55923 = cljs.core._nth(recur_val,(4));
var G__55924 = cljs.core._nth(recur_val,(5));
var G__55925 = cljs.core._nth(recur_val,(6));
var G__55926 = cljs.core._nth(recur_val,(7));
var G__55927 = cljs.core._nth(recur_val,(8));
var G__55928 = cljs.core._nth(recur_val,(9));
var G__55929 = cljs.core._nth(recur_val,(10));
var G__55930 = cljs.core._nth(recur_val,(11));
var G__55931 = cljs.core._nth(recur_val,(12));
var G__55932 = cljs.core._nth(recur_val,(13));
var G__55933 = cljs.core._nth(recur_val,(14));
var G__55934 = cljs.core._nth(recur_val,(15));
var G__55935 = cljs.core._nth(recur_val,(16));
var G__55936 = cljs.core._nth(recur_val,(17));
G__55094 = G__55919;
G__55096 = G__55920;
G__55097 = G__55921;
G__55098 = G__55922;
G__55099 = G__55923;
G__55100 = G__55924;
G__55101 = G__55925;
G__55102 = G__55926;
G__55103 = G__55927;
G__55104 = G__55928;
G__55105 = G__55929;
G__55106 = G__55930;
G__55107 = G__55931;
G__55108 = G__55932;
G__55109 = G__55933;
G__55110 = G__55934;
G__55111 = G__55935;
G__55112 = G__55936;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__55151 = cljs.core._nth(params,(0));
var G__55152 = cljs.core._nth(params,(1));
var G__55153 = cljs.core._nth(params,(2));
var G__55154 = cljs.core._nth(params,(3));
var G__55155 = cljs.core._nth(params,(4));
var G__55156 = cljs.core._nth(params,(5));
var G__55157 = cljs.core._nth(params,(6));
var G__55158 = cljs.core._nth(params,(7));
var G__55159 = cljs.core._nth(params,(8));
var G__55160 = cljs.core._nth(params,(9));
var G__55161 = cljs.core._nth(params,(10));
var G__55162 = cljs.core._nth(params,(11));
var G__55163 = cljs.core._nth(params,(12));
var G__55164 = cljs.core._nth(params,(13));
var G__55165 = cljs.core._nth(params,(14));
var G__55166 = cljs.core._nth(params,(15));
var G__55167 = cljs.core._nth(params,(16));
var G__55168 = cljs.core._nth(params,(17));
var G__55169 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__55132,G__55133,G__55134,G__55135,G__55136,G__55137,G__55138,G__55139,G__55140,G__55141,G__55142,G__55143,G__55144,G__55145,G__55146,G__55147,G__55148,G__55149,G__55150){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__55151,G__55132);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55152,G__55133);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55153,G__55134);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55154,G__55135);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55155,G__55136);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55156,G__55137);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55157,G__55138);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55158,G__55139);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55159,G__55140);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55160,G__55141);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55161,G__55142);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55162,G__55143);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55163,G__55144);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55164,G__55145);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55165,G__55146);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55166,G__55147);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55167,G__55148);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55168,G__55149);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55169,G__55150);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55958 = cljs.core._nth(recur_val,(0));
var G__55959 = cljs.core._nth(recur_val,(1));
var G__55960 = cljs.core._nth(recur_val,(2));
var G__55961 = cljs.core._nth(recur_val,(3));
var G__55962 = cljs.core._nth(recur_val,(4));
var G__55963 = cljs.core._nth(recur_val,(5));
var G__55964 = cljs.core._nth(recur_val,(6));
var G__55965 = cljs.core._nth(recur_val,(7));
var G__55966 = cljs.core._nth(recur_val,(8));
var G__55967 = cljs.core._nth(recur_val,(9));
var G__55968 = cljs.core._nth(recur_val,(10));
var G__55969 = cljs.core._nth(recur_val,(11));
var G__55970 = cljs.core._nth(recur_val,(12));
var G__55971 = cljs.core._nth(recur_val,(13));
var G__55972 = cljs.core._nth(recur_val,(14));
var G__55973 = cljs.core._nth(recur_val,(15));
var G__55974 = cljs.core._nth(recur_val,(16));
var G__55975 = cljs.core._nth(recur_val,(17));
var G__55976 = cljs.core._nth(recur_val,(18));
G__55132 = G__55958;
G__55133 = G__55959;
G__55134 = G__55960;
G__55135 = G__55961;
G__55136 = G__55962;
G__55137 = G__55963;
G__55138 = G__55964;
G__55139 = G__55965;
G__55140 = G__55966;
G__55141 = G__55967;
G__55142 = G__55968;
G__55143 = G__55969;
G__55144 = G__55970;
G__55145 = G__55971;
G__55146 = G__55972;
G__55147 = G__55973;
G__55148 = G__55974;
G__55149 = G__55975;
G__55150 = G__55976;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__55192 = cljs.core._nth(params,(0));
var G__55193 = cljs.core._nth(params,(1));
var G__55194 = cljs.core._nth(params,(2));
var G__55195 = cljs.core._nth(params,(3));
var G__55196 = cljs.core._nth(params,(4));
var G__55197 = cljs.core._nth(params,(5));
var G__55198 = cljs.core._nth(params,(6));
var G__55199 = cljs.core._nth(params,(7));
var G__55200 = cljs.core._nth(params,(8));
var G__55201 = cljs.core._nth(params,(9));
var G__55202 = cljs.core._nth(params,(10));
var G__55203 = cljs.core._nth(params,(11));
var G__55204 = cljs.core._nth(params,(12));
var G__55205 = cljs.core._nth(params,(13));
var G__55206 = cljs.core._nth(params,(14));
var G__55207 = cljs.core._nth(params,(15));
var G__55208 = cljs.core._nth(params,(16));
var G__55209 = cljs.core._nth(params,(17));
var G__55210 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__55173,G__55174,G__55175,G__55176,G__55177,G__55178,G__55179,G__55180,G__55181,G__55182,G__55183,G__55184,G__55185,G__55186,G__55187,G__55188,G__55189,G__55190,G__55191){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__55192,G__55173);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55193,G__55174);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55194,G__55175);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55195,G__55176);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55196,G__55177);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55197,G__55178);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55198,G__55179);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55199,G__55180);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55200,G__55181);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55201,G__55182);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55202,G__55183);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55203,G__55184);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55204,G__55185);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55205,G__55186);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55206,G__55187);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55207,G__55188);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55208,G__55189);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55209,G__55190);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55210,G__55191);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__55980 = cljs.core._nth(recur_val,(0));
var G__55981 = cljs.core._nth(recur_val,(1));
var G__55982 = cljs.core._nth(recur_val,(2));
var G__55983 = cljs.core._nth(recur_val,(3));
var G__55984 = cljs.core._nth(recur_val,(4));
var G__55985 = cljs.core._nth(recur_val,(5));
var G__55986 = cljs.core._nth(recur_val,(6));
var G__55987 = cljs.core._nth(recur_val,(7));
var G__55988 = cljs.core._nth(recur_val,(8));
var G__55989 = cljs.core._nth(recur_val,(9));
var G__55990 = cljs.core._nth(recur_val,(10));
var G__55991 = cljs.core._nth(recur_val,(11));
var G__55992 = cljs.core._nth(recur_val,(12));
var G__55993 = cljs.core._nth(recur_val,(13));
var G__55994 = cljs.core._nth(recur_val,(14));
var G__55995 = cljs.core._nth(recur_val,(15));
var G__55996 = cljs.core._nth(recur_val,(16));
var G__55997 = cljs.core._nth(recur_val,(17));
var G__55998 = cljs.core._nth(recur_val,(18));
G__55173 = G__55980;
G__55174 = G__55981;
G__55175 = G__55982;
G__55176 = G__55983;
G__55177 = G__55984;
G__55178 = G__55985;
G__55179 = G__55986;
G__55180 = G__55987;
G__55181 = G__55988;
G__55182 = G__55989;
G__55183 = G__55990;
G__55184 = G__55991;
G__55185 = G__55992;
G__55186 = G__55993;
G__55187 = G__55994;
G__55188 = G__55995;
G__55189 = G__55996;
G__55190 = G__55997;
G__55191 = G__55998;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__55233 = cljs.core._nth(params,(0));
var G__55234 = cljs.core._nth(params,(1));
var G__55235 = cljs.core._nth(params,(2));
var G__55236 = cljs.core._nth(params,(3));
var G__55237 = cljs.core._nth(params,(4));
var G__55238 = cljs.core._nth(params,(5));
var G__55239 = cljs.core._nth(params,(6));
var G__55240 = cljs.core._nth(params,(7));
var G__55241 = cljs.core._nth(params,(8));
var G__55242 = cljs.core._nth(params,(9));
var G__55243 = cljs.core._nth(params,(10));
var G__55244 = cljs.core._nth(params,(11));
var G__55245 = cljs.core._nth(params,(12));
var G__55246 = cljs.core._nth(params,(13));
var G__55247 = cljs.core._nth(params,(14));
var G__55248 = cljs.core._nth(params,(15));
var G__55249 = cljs.core._nth(params,(16));
var G__55250 = cljs.core._nth(params,(17));
var G__55251 = cljs.core._nth(params,(18));
var G__55252 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__55213,G__55214,G__55215,G__55216,G__55217,G__55218,G__55219,G__55220,G__55221,G__55222,G__55223,G__55224,G__55225,G__55226,G__55227,G__55228,G__55229,G__55230,G__55231,G__55232){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__55233,G__55213);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55234,G__55214);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55235,G__55215);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55236,G__55216);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55237,G__55217);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55238,G__55218);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55239,G__55219);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55240,G__55220);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55241,G__55221);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55242,G__55222);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55243,G__55223);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55244,G__55224);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55245,G__55225);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55246,G__55226);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55247,G__55227);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55248,G__55228);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55249,G__55229);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55250,G__55230);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55251,G__55231);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__55252,G__55232);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__56045 = cljs.core._nth(recur_val,(0));
var G__56046 = cljs.core._nth(recur_val,(1));
var G__56047 = cljs.core._nth(recur_val,(2));
var G__56048 = cljs.core._nth(recur_val,(3));
var G__56049 = cljs.core._nth(recur_val,(4));
var G__56050 = cljs.core._nth(recur_val,(5));
var G__56051 = cljs.core._nth(recur_val,(6));
var G__56052 = cljs.core._nth(recur_val,(7));
var G__56053 = cljs.core._nth(recur_val,(8));
var G__56054 = cljs.core._nth(recur_val,(9));
var G__56055 = cljs.core._nth(recur_val,(10));
var G__56056 = cljs.core._nth(recur_val,(11));
var G__56057 = cljs.core._nth(recur_val,(12));
var G__56058 = cljs.core._nth(recur_val,(13));
var G__56059 = cljs.core._nth(recur_val,(14));
var G__56060 = cljs.core._nth(recur_val,(15));
var G__56061 = cljs.core._nth(recur_val,(16));
var G__56062 = cljs.core._nth(recur_val,(17));
var G__56063 = cljs.core._nth(recur_val,(18));
var G__56064 = cljs.core._nth(recur_val,(19));
G__55213 = G__56045;
G__55214 = G__56046;
G__55215 = G__56047;
G__55216 = G__56048;
G__55217 = G__56049;
G__55218 = G__56050;
G__55219 = G__56051;
G__55220 = G__56052;
G__55221 = G__56053;
G__55222 = G__56054;
G__55223 = G__56055;
G__55224 = G__56056;
G__55225 = G__56057;
G__55226 = G__56058;
G__55227 = G__56059;
G__55228 = G__56060;
G__55229 = G__56061;
G__55230 = G__56062;
G__55231 = G__56063;
G__55232 = G__56064;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
} else {
var G__55278 = cljs.core._nth(params,(0));
var G__55279 = cljs.core._nth(params,(1));
var G__55280 = cljs.core._nth(params,(2));
var G__55281 = cljs.core._nth(params,(3));
var G__55282 = cljs.core._nth(params,(4));
var G__55283 = cljs.core._nth(params,(5));
var G__55284 = cljs.core._nth(params,(6));
var G__55285 = cljs.core._nth(params,(7));
var G__55286 = cljs.core._nth(params,(8));
var G__55287 = cljs.core._nth(params,(9));
var G__55288 = cljs.core._nth(params,(10));
var G__55289 = cljs.core._nth(params,(11));
var G__55290 = cljs.core._nth(params,(12));
var G__55291 = cljs.core._nth(params,(13));
var G__55292 = cljs.core._nth(params,(14));
var G__55293 = cljs.core._nth(params,(15));
var G__55294 = cljs.core._nth(params,(16));
var G__55295 = cljs.core._nth(params,(17));
var G__55296 = cljs.core._nth(params,(18));
var G__55297 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__55258,G__55259,G__55260,G__55261,G__55262,G__55263,G__55264,G__55265,G__55266,G__55267,G__55268,G__55269,G__55270,G__55271,G__55272,G__55273,G__55274,G__55275,G__55276,G__55277){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__55278,G__55258);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__55279,G__55259);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__55280,G__55260);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__55281,G__55261);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__55282,G__55262);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__55283,G__55263);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__55284,G__55264);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__55285,G__55265);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__55286,G__55266);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__55287,G__55267);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__55288,G__55268);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__55289,G__55269);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__55290,G__55270);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__55291,G__55271);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__55292,G__55272);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__55293,G__55273);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__55294,G__55274);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__55295,G__55275);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__55296,G__55276);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__55297,G__55277);
var ret__53649__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___53650__auto__ = (ret__53649__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___53650__auto__){
var recur_val = sci.impl.types.getVal(ret__53649__auto__);
var G__56080 = cljs.core._nth(recur_val,(0));
var G__56081 = cljs.core._nth(recur_val,(1));
var G__56082 = cljs.core._nth(recur_val,(2));
var G__56083 = cljs.core._nth(recur_val,(3));
var G__56084 = cljs.core._nth(recur_val,(4));
var G__56085 = cljs.core._nth(recur_val,(5));
var G__56086 = cljs.core._nth(recur_val,(6));
var G__56087 = cljs.core._nth(recur_val,(7));
var G__56088 = cljs.core._nth(recur_val,(8));
var G__56089 = cljs.core._nth(recur_val,(9));
var G__56090 = cljs.core._nth(recur_val,(10));
var G__56091 = cljs.core._nth(recur_val,(11));
var G__56092 = cljs.core._nth(recur_val,(12));
var G__56093 = cljs.core._nth(recur_val,(13));
var G__56094 = cljs.core._nth(recur_val,(14));
var G__56095 = cljs.core._nth(recur_val,(15));
var G__56096 = cljs.core._nth(recur_val,(16));
var G__56097 = cljs.core._nth(recur_val,(17));
var G__56098 = cljs.core._nth(recur_val,(18));
var G__56100 = cljs.core._nth(recur_val,(19));
G__55258 = G__56080;
G__55259 = G__56081;
G__55260 = G__56082;
G__55261 = G__56083;
G__55262 = G__56084;
G__55263 = G__56085;
G__55264 = G__56086;
G__55265 = G__56087;
G__55266 = G__56088;
G__55267 = G__56089;
G__55268 = G__56090;
G__55269 = G__56091;
G__55270 = G__56092;
G__55271 = G__56093;
G__55272 = G__56094;
G__55273 = G__56095;
G__55274 = G__56096;
G__55275 = G__56097;
G__55276 = G__56098;
G__55277 = G__56100;
continue;
} else {
return ret__53649__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__56107 = cljs.core.next(args_STAR_);
var G__56108 = cljs.core.next(params__$1);
var G__56109 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__56107;
params__$1 = G__56108;
ret = G__56109;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__55312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55312,(0),null);
var vec__55315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55312,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55315,(0),null);
var G__56110 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__56110;
continue;
} else {
var G__56111 = recur_val;
args = G__56111;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56112__i = 0, G__56112__a = new Array(arguments.length -  0);
while (G__56112__i < G__56112__a.length) {G__56112__a[G__56112__i] = arguments[G__56112__i + 0]; ++G__56112__i;}
  args = new cljs.core.IndexedSeq(G__56112__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__56113){
var args = cljs.core.seq(arglist__56113);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__56114 = cljs.core.next(args_STAR_);
var G__56115 = cljs.core.next(params__$1);
var G__56116 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__56114;
params__$1 = G__56115;
ret = G__56116;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__55322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(0),null);
var vec__55325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55325,(0),null);
var G__56121 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__56121;
continue;
} else {
var G__56122 = recur_val;
args = G__56122;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56123__i = 0, G__56123__a = new Array(arguments.length -  0);
while (G__56123__i < G__56123__a.length) {G__56123__a[G__56123__i] = arguments[G__56123__i + 0]; ++G__56123__i;}
  args = new cljs.core.IndexedSeq(G__56123__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__56124){
var args = cljs.core.seq(arglist__56124);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__56128__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__56128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56130__i = 0, G__56130__a = new Array(arguments.length -  0);
while (G__56130__i < G__56130__a.length) {G__56130__a[G__56130__i] = arguments[G__56130__i + 0]; ++G__56130__i;}
  args = new cljs.core.IndexedSeq(G__56130__a,0,null);
} 
return G__56128__delegate.call(this,args);};
G__56128.cljs$lang$maxFixedArity = 0;
G__56128.cljs$lang$applyTo = (function (arglist__56131){
var args = cljs.core.seq(arglist__56131);
return G__56128__delegate(args);
});
G__56128.cljs$core$IFn$_invoke$arity$variadic = G__56128__delegate;
return G__56128;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__55330_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55330_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
