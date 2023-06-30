goog.provide('nwbvt.echo.db');
nwbvt.echo.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running?","running?",-257884763),false], null);
nwbvt.echo.db.local_store_key = "nwbvt.echo.high-score";
nwbvt.echo.db.high_score = (function nwbvt$echo$db$high_score(){
return parseInt((function (){var or__5045__auto__ = localStorage.getItem(nwbvt.echo.db.local_store_key);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})());
});
nwbvt.echo.db.save_score = (function nwbvt$echo$db$save_score(score){
var current_high = nwbvt.echo.db.high_score();
if((score > current_high)){
return localStorage.setItem(nwbvt.echo.db.local_store_key,score);
} else {
return null;
}
});
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),nwbvt.echo.db.high_score());
}));

//# sourceMappingURL=nwbvt.echo.db.js.map
