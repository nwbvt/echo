goog.provide('nwbvt.echo.core');
nwbvt.echo.core.dev_setup = (function nwbvt$echo$core$dev_setup(){
if(nwbvt.echo.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
nwbvt.echo.core.mount_root = (function nwbvt$echo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nwbvt.echo.views.echo.main_panel], null),root_el);
});
nwbvt.echo.core.init = (function nwbvt$echo$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nwbvt.echo.events","initialize-db","nwbvt.echo.events/initialize-db",-646112415)], null));

nwbvt.echo.core.dev_setup();

return nwbvt.echo.core.mount_root();
});

//# sourceMappingURL=nwbvt.echo.core.js.map
