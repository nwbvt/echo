goog.provide('nwbvt.echo.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("nwbvt.echo.events","initialize-db","nwbvt.echo.events/initialize-db",-646112415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"high-score","high-score",-1220549879))], null),(function (p__30881,_){
var map__30882 = p__30881;
var map__30882__$1 = cljs.core.__destructure_map(map__30882);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30882__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nwbvt.echo.db.default_db,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),high_score)], null);
}));
/**
 * Perform a tick
 */
nwbvt.echo.events.tick = (function nwbvt$echo$events$tick(p__30885,p__30886,game){
var map__30887 = p__30885;
var map__30887__$1 = cljs.core.__destructure_map(map__30887);
var db = map__30887__$1;
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30887__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var window__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30887__$1,new cljs.core.Keyword(null,"window","window",724519534));
var scored_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30887__$1,new cljs.core.Keyword(null,"scored?","scored?",1370335525));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30887__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var game_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30887__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var map__30888 = p__30886;
var map__30888__$1 = cljs.core.__destructure_map(map__30888);
var is_echo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"is-echo","is-echo",693972060));
var is_recent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"is-recent","is-recent",-138723553));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"options","options",99638489));
var period = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var clip_multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"clip-multiple","clip-multiple",1463099735));
if(cljs.core.truth_((function (){var and__5043__auto__ = running_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game,game_id);
} else {
return and__5043__auto__;
}
})())){
var echo_QMARK_ = nwbvt.echo.game.is_echo_QMARK_(s,window__$1);
var new_seq = nwbvt.echo.game.advance_sequence(s,options,window__$1,is_echo,is_recent,clip_multiple);
var lost_QMARK_ = ((cljs.core.not(scored_QMARK_)) && (echo_QMARK_));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"s","s",1705939918),new_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),false,new cljs.core.Keyword(null,"scored?","scored?",1370335525),false,new cljs.core.Keyword(null,"fade?","fade?",-1501427959),false], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(500),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","fade","nwbvt.echo.events/fade",911388538)], null)], null)], null),((lost_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","game-over","nwbvt.echo.events/game-over",-250333200)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),period,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","tick","nwbvt.echo.events/tick",-1855716757),game_id], null)], null)], null))], null)], null);
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","tick","nwbvt.echo.events/tick",-1855716757),(function (p__30891,p__30893){
var map__30894 = p__30891;
var map__30894__$1 = cljs.core.__destructure_map(map__30894);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30894__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30895 = p__30893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30895,(0),null);
var game_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30895,(1),null);
return nwbvt.echo.events.tick(db,nwbvt.echo.config.env,game_id);
}));
nwbvt.echo.events.click = (function nwbvt$echo$events$click(p__30899){
var map__30900 = p__30899;
var map__30900__$1 = cljs.core.__destructure_map(map__30900);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30900__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var window__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30900__$1,new cljs.core.Keyword(null,"window","window",724519534));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((nwbvt.echo.game.is_echo_QMARK_(s,window__$1))?new cljs.core.Keyword("nwbvt.echo.events","score","nwbvt.echo.events/score",1378950543):new cljs.core.Keyword("nwbvt.echo.events","game-over","nwbvt.echo.events/game-over",-250333200))], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","click","nwbvt.echo.events/click",-2058382968),(function (p__30902,event){
var map__30903 = p__30902;
var map__30903__$1 = cljs.core.__destructure_map(map__30903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30903__$1,new cljs.core.Keyword(null,"db","db",993250759));
return nwbvt.echo.events.click(db);
}));
nwbvt.echo.events.score = (function nwbvt$echo$events$score(p__30905,p__30906){
var map__30907 = p__30905;
var map__30907__$1 = cljs.core.__destructure_map(map__30907);
var db = map__30907__$1;
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30907__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30907__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var map__30908 = p__30906;
var map__30908__$1 = cljs.core.__destructure_map(map__30908);
var points_per_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30908__$1,new cljs.core.Keyword(null,"points-per-level","points-per-level",-1435692887));
var new_score = (score + (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"scored?","scored?",1370335525),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"score","score",-1963588780),(score + (1)),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(function (){var x__5130__auto__ = high_score;
var y__5131__auto__ = score;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),new cljs.core.Keyword(null,"vs-high","vs-high",-1694200753),cljs.core.compare(score,high_score)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.mod(new_score,points_per_level) === (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","advance","nwbvt.echo.events/advance",-1821136104)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","flash","nwbvt.echo.events/flash",-1807961118),new cljs.core.Keyword(null,"score","score",-1963588780)], null)], null)], null)], null);
});
nwbvt.echo.events.save_score_interceptor = (function nwbvt$echo$events$save_score_interceptor(p__30912){
var map__30913 = p__30912;
var map__30913__$1 = cljs.core.__destructure_map(map__30913);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30913__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
return nwbvt.echo.db.save_score(score);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("nwbvt.echo.events","score","nwbvt.echo.events/score",1378950543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(nwbvt.echo.events.save_score_interceptor)], null),(function (p__30917,event){
var map__30918 = p__30917;
var map__30918__$1 = cljs.core.__destructure_map(map__30918);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,new cljs.core.Keyword(null,"db","db",993250759));
return nwbvt.echo.events.score(db,nwbvt.echo.config.env);
}));
nwbvt.echo.events.advance = (function nwbvt$echo$events$advance(p__30930){
var map__30931 = p__30930;
var map__30931__$1 = cljs.core.__destructure_map(map__30931);
var db = map__30931__$1;
var window__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30931__$1,new cljs.core.Keyword(null,"window","window",724519534));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"window","window",724519534),(window__$1 + (1))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","flash","nwbvt.echo.events/flash",-1807961118),new cljs.core.Keyword(null,"window","window",724519534)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","advance","nwbvt.echo.events/advance",-1821136104),(function (p__30939,event){
var map__30940 = p__30939;
var map__30940__$1 = cljs.core.__destructure_map(map__30940);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30940__$1,new cljs.core.Keyword(null,"db","db",993250759));
return nwbvt.echo.events.advance(db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","start","nwbvt.echo.events/start",-1231214904),(function (p__30945,_){
var map__30946 = p__30945;
var map__30946__$1 = cljs.core.__destructure_map(map__30946);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30946__$1,new cljs.core.Keyword(null,"db","db",993250759));
var game_id = cljs.core.random_uuid();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.List.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"running?","running?",-257884763),true,new cljs.core.Keyword(null,"game-id","game-id",385578016),game_id,new cljs.core.Keyword(null,"lost?","lost?",-1656998727),false,new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"vs-high","vs-high",-1694200753),(-1),new cljs.core.Keyword(null,"fade?","fade?",-1501427959),false,new cljs.core.Keyword(null,"window","window",724519534),(2)], 0)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(nwbvt.echo.config.env),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","tick","nwbvt.echo.events/tick",-1855716757),game_id], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","flash","nwbvt.echo.events/flash",-1807961118),(function (p__30952,p__30953){
var map__30954 = p__30952;
var map__30954__$1 = cljs.core.__destructure_map(map__30954);
var map__30955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__30955__$1 = cljs.core.__destructure_map(map__30955);
var db = map__30955__$1;
var flash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30955__$1,new cljs.core.Keyword(null,"flash","flash",934660619));
var vec__30956 = p__30953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30956,(0),null);
var to_flash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30956,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flash","flash",934660619),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flash,to_flash,true)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","unflash","nwbvt.echo.events/unflash",1060808274),to_flash], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","unflash","nwbvt.echo.events/unflash",1060808274),(function (p__30966,p__30967){
var map__30968 = p__30966;
var map__30968__$1 = cljs.core.__destructure_map(map__30968);
var db = map__30968__$1;
var flash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30968__$1,new cljs.core.Keyword(null,"flash","flash",934660619));
var vec__30969 = p__30967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30969,(0),null);
var to_flash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30969,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flash","flash",934660619),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flash,to_flash,false));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","game-over","nwbvt.echo.events/game-over",-250333200),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"running?","running?",-257884763),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lost?","lost?",-1656998727),true], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nwbvt.echo.events","fade","nwbvt.echo.events/fade",911388538),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fade?","fade?",-1501427959),true);
}));

//# sourceMappingURL=nwbvt.echo.events.js.map
