goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69682 = arguments.length;
switch (G__69682) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69686 = (function (f,blockable,meta69687){
this.f = f;
this.blockable = blockable;
this.meta69687 = meta69687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69688,meta69687__$1){
var self__ = this;
var _69688__$1 = this;
return (new cljs.core.async.t_cljs$core$async69686(self__.f,self__.blockable,meta69687__$1));
}));

(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69688){
var self__ = this;
var _69688__$1 = this;
return self__.meta69687;
}));

(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69687","meta69687",65903212,null)], null);
}));

(cljs.core.async.t_cljs$core$async69686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69686");

(cljs.core.async.t_cljs$core$async69686.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69686.
 */
cljs.core.async.__GT_t_cljs$core$async69686 = (function cljs$core$async$__GT_t_cljs$core$async69686(f__$1,blockable__$1,meta69687){
return (new cljs.core.async.t_cljs$core$async69686(f__$1,blockable__$1,meta69687));
});

}

return (new cljs.core.async.t_cljs$core$async69686(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69706 = arguments.length;
switch (G__69706) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69712 = arguments.length;
switch (G__69712) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69714 = arguments.length;
switch (G__69714) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_71953 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71953) : fn1.call(null,val_71953));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71953) : fn1.call(null,val_71953));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69718 = arguments.length;
switch (G__69718) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___71959 = n;
var x_71960 = (0);
while(true){
if((x_71960 < n__5636__auto___71959)){
(a[x_71960] = x_71960);

var G__71961 = (x_71960 + (1));
x_71960 = G__71961;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69725 = (function (flag,meta69726){
this.flag = flag;
this.meta69726 = meta69726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69727,meta69726__$1){
var self__ = this;
var _69727__$1 = this;
return (new cljs.core.async.t_cljs$core$async69725(self__.flag,meta69726__$1));
}));

(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69727){
var self__ = this;
var _69727__$1 = this;
return self__.meta69726;
}));

(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69726","meta69726",1450278228,null)], null);
}));

(cljs.core.async.t_cljs$core$async69725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69725");

(cljs.core.async.t_cljs$core$async69725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69725.
 */
cljs.core.async.__GT_t_cljs$core$async69725 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69725(flag__$1,meta69726){
return (new cljs.core.async.t_cljs$core$async69725(flag__$1,meta69726));
});

}

return (new cljs.core.async.t_cljs$core$async69725(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69730 = (function (flag,cb,meta69731){
this.flag = flag;
this.cb = cb;
this.meta69731 = meta69731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69732,meta69731__$1){
var self__ = this;
var _69732__$1 = this;
return (new cljs.core.async.t_cljs$core$async69730(self__.flag,self__.cb,meta69731__$1));
}));

(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69732){
var self__ = this;
var _69732__$1 = this;
return self__.meta69731;
}));

(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69731","meta69731",487906256,null)], null);
}));

(cljs.core.async.t_cljs$core$async69730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69730");

(cljs.core.async.t_cljs$core$async69730.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async69730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69730.
 */
cljs.core.async.__GT_t_cljs$core$async69730 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69730(flag__$1,cb__$1,meta69731){
return (new cljs.core.async.t_cljs$core$async69730(flag__$1,cb__$1,meta69731));
});

}

return (new cljs.core.async.t_cljs$core$async69730(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69737_SHARP_){
var G__69740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69740) : fret.call(null,G__69740));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69738_SHARP_){
var G__69741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69741) : fret.call(null,G__69741));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__71974 = (i + (1));
i = G__71974;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___71977 = arguments.length;
var i__5770__auto___71978 = (0);
while(true){
if((i__5770__auto___71978 < len__5769__auto___71977)){
args__5775__auto__.push((arguments[i__5770__auto___71978]));

var G__71979 = (i__5770__auto___71978 + (1));
i__5770__auto___71978 = G__71979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69745){
var map__69746 = p__69745;
var map__69746__$1 = cljs.core.__destructure_map(map__69746);
var opts = map__69746__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69743){
var G__69744 = cljs.core.first(seq69743);
var seq69743__$1 = cljs.core.next(seq69743);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69744,seq69743__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69752 = arguments.length;
switch (G__69752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31601__auto___71987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_69781){
var state_val_69782 = (state_69781[(1)]);
if((state_val_69782 === (7))){
var inst_69777 = (state_69781[(2)]);
var state_69781__$1 = state_69781;
var statearr_69783_71988 = state_69781__$1;
(statearr_69783_71988[(2)] = inst_69777);

(statearr_69783_71988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (1))){
var state_69781__$1 = state_69781;
var statearr_69784_71990 = state_69781__$1;
(statearr_69784_71990[(2)] = null);

(statearr_69784_71990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (4))){
var inst_69760 = (state_69781[(7)]);
var inst_69760__$1 = (state_69781[(2)]);
var inst_69761 = (inst_69760__$1 == null);
var state_69781__$1 = (function (){var statearr_69785 = state_69781;
(statearr_69785[(7)] = inst_69760__$1);

return statearr_69785;
})();
if(cljs.core.truth_(inst_69761)){
var statearr_69786_71991 = state_69781__$1;
(statearr_69786_71991[(1)] = (5));

} else {
var statearr_69787_71992 = state_69781__$1;
(statearr_69787_71992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (13))){
var state_69781__$1 = state_69781;
var statearr_69788_71994 = state_69781__$1;
(statearr_69788_71994[(2)] = null);

(statearr_69788_71994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (6))){
var inst_69760 = (state_69781[(7)]);
var state_69781__$1 = state_69781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69781__$1,(11),to,inst_69760);
} else {
if((state_val_69782 === (3))){
var inst_69779 = (state_69781[(2)]);
var state_69781__$1 = state_69781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69781__$1,inst_69779);
} else {
if((state_val_69782 === (12))){
var state_69781__$1 = state_69781;
var statearr_69789_71996 = state_69781__$1;
(statearr_69789_71996[(2)] = null);

(statearr_69789_71996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (2))){
var state_69781__$1 = state_69781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69781__$1,(4),from);
} else {
if((state_val_69782 === (11))){
var inst_69770 = (state_69781[(2)]);
var state_69781__$1 = state_69781;
if(cljs.core.truth_(inst_69770)){
var statearr_69790_71997 = state_69781__$1;
(statearr_69790_71997[(1)] = (12));

} else {
var statearr_69791_71998 = state_69781__$1;
(statearr_69791_71998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (9))){
var state_69781__$1 = state_69781;
var statearr_69792_71999 = state_69781__$1;
(statearr_69792_71999[(2)] = null);

(statearr_69792_71999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (5))){
var state_69781__$1 = state_69781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69793_72000 = state_69781__$1;
(statearr_69793_72000[(1)] = (8));

} else {
var statearr_69794_72001 = state_69781__$1;
(statearr_69794_72001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (14))){
var inst_69775 = (state_69781[(2)]);
var state_69781__$1 = state_69781;
var statearr_69795_72002 = state_69781__$1;
(statearr_69795_72002[(2)] = inst_69775);

(statearr_69795_72002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (10))){
var inst_69767 = (state_69781[(2)]);
var state_69781__$1 = state_69781;
var statearr_69796_72003 = state_69781__$1;
(statearr_69796_72003[(2)] = inst_69767);

(statearr_69796_72003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69782 === (8))){
var inst_69764 = cljs.core.async.close_BANG_(to);
var state_69781__$1 = state_69781;
var statearr_69798_72006 = state_69781__$1;
(statearr_69798_72006[(2)] = inst_69764);

(statearr_69798_72006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_69799 = [null,null,null,null,null,null,null,null];
(statearr_69799[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_69799[(1)] = (1));

return statearr_69799;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_69781){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_69781);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e69800){var ex__31527__auto__ = e69800;
var statearr_69801_72009 = state_69781;
(statearr_69801_72009[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_69781[(4)]))){
var statearr_69802_72010 = state_69781;
(statearr_69802_72010[(1)] = cljs.core.first((state_69781[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72011 = state_69781;
state_69781 = G__72011;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_69781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_69781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_69803 = f__31602__auto__();
(statearr_69803[(6)] = c__31601__auto___71987);

return statearr_69803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__69804){
var vec__69805 = p__69804;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69805,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69805,(1),null);
var job = vec__69805;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31601__auto___72014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_69812){
var state_val_69813 = (state_69812[(1)]);
if((state_val_69813 === (1))){
var state_69812__$1 = state_69812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69812__$1,(2),res,v);
} else {
if((state_val_69813 === (2))){
var inst_69809 = (state_69812[(2)]);
var inst_69810 = cljs.core.async.close_BANG_(res);
var state_69812__$1 = (function (){var statearr_69816 = state_69812;
(statearr_69816[(7)] = inst_69809);

return statearr_69816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69812__$1,inst_69810);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_69817 = [null,null,null,null,null,null,null,null];
(statearr_69817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__);

(statearr_69817[(1)] = (1));

return statearr_69817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1 = (function (state_69812){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_69812);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e69818){var ex__31527__auto__ = e69818;
var statearr_69819_72015 = state_69812;
(statearr_69819_72015[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_69812[(4)]))){
var statearr_69821_72016 = state_69812;
(statearr_69821_72016[(1)] = cljs.core.first((state_69812[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72017 = state_69812;
state_69812 = G__72017;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = function(state_69812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1.call(this,state_69812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_69830 = f__31602__auto__();
(statearr_69830[(6)] = c__31601__auto___72014);

return statearr_69830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__69834){
var vec__69835 = p__69834;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69835,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69835,(1),null);
var job = vec__69835;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___72018 = n;
var __72019 = (0);
while(true){
if((__72019 < n__5636__auto___72018)){
var G__69844_72020 = type;
var G__69844_72021__$1 = (((G__69844_72020 instanceof cljs.core.Keyword))?G__69844_72020.fqn:null);
switch (G__69844_72021__$1) {
case "compute":
var c__31601__auto___72023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72019,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = ((function (__72019,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function (state_69857){
var state_val_69858 = (state_69857[(1)]);
if((state_val_69858 === (1))){
var state_69857__$1 = state_69857;
var statearr_69859_72025 = state_69857__$1;
(statearr_69859_72025[(2)] = null);

(statearr_69859_72025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69858 === (2))){
var state_69857__$1 = state_69857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69857__$1,(4),jobs);
} else {
if((state_val_69858 === (3))){
var inst_69855 = (state_69857[(2)]);
var state_69857__$1 = state_69857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69857__$1,inst_69855);
} else {
if((state_val_69858 === (4))){
var inst_69847 = (state_69857[(2)]);
var inst_69848 = process__$1(inst_69847);
var state_69857__$1 = state_69857;
if(cljs.core.truth_(inst_69848)){
var statearr_69861_72028 = state_69857__$1;
(statearr_69861_72028[(1)] = (5));

} else {
var statearr_69863_72029 = state_69857__$1;
(statearr_69863_72029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69858 === (5))){
var state_69857__$1 = state_69857;
var statearr_69865_72030 = state_69857__$1;
(statearr_69865_72030[(2)] = null);

(statearr_69865_72030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69858 === (6))){
var state_69857__$1 = state_69857;
var statearr_69867_72031 = state_69857__$1;
(statearr_69867_72031[(2)] = null);

(statearr_69867_72031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69858 === (7))){
var inst_69853 = (state_69857[(2)]);
var state_69857__$1 = state_69857;
var statearr_69869_72032 = state_69857__$1;
(statearr_69869_72032[(2)] = inst_69853);

(statearr_69869_72032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72019,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
;
return ((function (__72019,switch__31523__auto__,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_69871 = [null,null,null,null,null,null,null];
(statearr_69871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__);

(statearr_69871[(1)] = (1));

return statearr_69871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1 = (function (state_69857){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_69857);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e69874){var ex__31527__auto__ = e69874;
var statearr_69875_72033 = state_69857;
(statearr_69875_72033[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_69857[(4)]))){
var statearr_69876_72034 = state_69857;
(statearr_69876_72034[(1)] = cljs.core.first((state_69857[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72035 = state_69857;
state_69857 = G__72035;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = function(state_69857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1.call(this,state_69857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__;
})()
;})(__72019,switch__31523__auto__,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
})();
var state__31603__auto__ = (function (){var statearr_69878 = f__31602__auto__();
(statearr_69878[(6)] = c__31601__auto___72023);

return statearr_69878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
});})(__72019,c__31601__auto___72023,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
);


break;
case "async":
var c__31601__auto___72036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72019,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = ((function (__72019,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function (state_69895){
var state_val_69896 = (state_69895[(1)]);
if((state_val_69896 === (1))){
var state_69895__$1 = state_69895;
var statearr_69900_72037 = state_69895__$1;
(statearr_69900_72037[(2)] = null);

(statearr_69900_72037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (2))){
var state_69895__$1 = state_69895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69895__$1,(4),jobs);
} else {
if((state_val_69896 === (3))){
var inst_69893 = (state_69895[(2)]);
var state_69895__$1 = state_69895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69895__$1,inst_69893);
} else {
if((state_val_69896 === (4))){
var inst_69885 = (state_69895[(2)]);
var inst_69886 = async(inst_69885);
var state_69895__$1 = state_69895;
if(cljs.core.truth_(inst_69886)){
var statearr_69901_72041 = state_69895__$1;
(statearr_69901_72041[(1)] = (5));

} else {
var statearr_69904_72042 = state_69895__$1;
(statearr_69904_72042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (5))){
var state_69895__$1 = state_69895;
var statearr_69913_72043 = state_69895__$1;
(statearr_69913_72043[(2)] = null);

(statearr_69913_72043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (6))){
var state_69895__$1 = state_69895;
var statearr_69914_72044 = state_69895__$1;
(statearr_69914_72044[(2)] = null);

(statearr_69914_72044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69896 === (7))){
var inst_69891 = (state_69895[(2)]);
var state_69895__$1 = state_69895;
var statearr_69915_72045 = state_69895__$1;
(statearr_69915_72045[(2)] = inst_69891);

(statearr_69915_72045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72019,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
;
return ((function (__72019,switch__31523__auto__,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_69916 = [null,null,null,null,null,null,null];
(statearr_69916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__);

(statearr_69916[(1)] = (1));

return statearr_69916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1 = (function (state_69895){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_69895);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e69917){var ex__31527__auto__ = e69917;
var statearr_69918_72046 = state_69895;
(statearr_69918_72046[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_69895[(4)]))){
var statearr_69919_72047 = state_69895;
(statearr_69919_72047[(1)] = cljs.core.first((state_69895[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72049 = state_69895;
state_69895 = G__72049;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = function(state_69895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1.call(this,state_69895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__;
})()
;})(__72019,switch__31523__auto__,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
})();
var state__31603__auto__ = (function (){var statearr_69920 = f__31602__auto__();
(statearr_69920[(6)] = c__31601__auto___72036);

return statearr_69920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
});})(__72019,c__31601__auto___72036,G__69844_72020,G__69844_72021__$1,n__5636__auto___72018,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69844_72021__$1)].join('')));

}

var G__72050 = (__72019 + (1));
__72019 = G__72050;
continue;
} else {
}
break;
}

var c__31601__auto___72051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_69942){
var state_val_69943 = (state_69942[(1)]);
if((state_val_69943 === (7))){
var inst_69938 = (state_69942[(2)]);
var state_69942__$1 = state_69942;
var statearr_69948_72052 = state_69942__$1;
(statearr_69948_72052[(2)] = inst_69938);

(statearr_69948_72052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69943 === (1))){
var state_69942__$1 = state_69942;
var statearr_69949_72053 = state_69942__$1;
(statearr_69949_72053[(2)] = null);

(statearr_69949_72053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69943 === (4))){
var inst_69923 = (state_69942[(7)]);
var inst_69923__$1 = (state_69942[(2)]);
var inst_69924 = (inst_69923__$1 == null);
var state_69942__$1 = (function (){var statearr_69951 = state_69942;
(statearr_69951[(7)] = inst_69923__$1);

return statearr_69951;
})();
if(cljs.core.truth_(inst_69924)){
var statearr_69952_72056 = state_69942__$1;
(statearr_69952_72056[(1)] = (5));

} else {
var statearr_69953_72057 = state_69942__$1;
(statearr_69953_72057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69943 === (6))){
var inst_69923 = (state_69942[(7)]);
var inst_69928 = (state_69942[(8)]);
var inst_69928__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69929 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69930 = [inst_69923,inst_69928__$1];
var inst_69931 = (new cljs.core.PersistentVector(null,2,(5),inst_69929,inst_69930,null));
var state_69942__$1 = (function (){var statearr_69954 = state_69942;
(statearr_69954[(8)] = inst_69928__$1);

return statearr_69954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69942__$1,(8),jobs,inst_69931);
} else {
if((state_val_69943 === (3))){
var inst_69940 = (state_69942[(2)]);
var state_69942__$1 = state_69942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69942__$1,inst_69940);
} else {
if((state_val_69943 === (2))){
var state_69942__$1 = state_69942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69942__$1,(4),from);
} else {
if((state_val_69943 === (9))){
var inst_69935 = (state_69942[(2)]);
var state_69942__$1 = (function (){var statearr_69957 = state_69942;
(statearr_69957[(9)] = inst_69935);

return statearr_69957;
})();
var statearr_69958_72063 = state_69942__$1;
(statearr_69958_72063[(2)] = null);

(statearr_69958_72063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69943 === (5))){
var inst_69926 = cljs.core.async.close_BANG_(jobs);
var state_69942__$1 = state_69942;
var statearr_69961_72064 = state_69942__$1;
(statearr_69961_72064[(2)] = inst_69926);

(statearr_69961_72064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69943 === (8))){
var inst_69928 = (state_69942[(8)]);
var inst_69933 = (state_69942[(2)]);
var state_69942__$1 = (function (){var statearr_69962 = state_69942;
(statearr_69962[(10)] = inst_69933);

return statearr_69962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69942__$1,(9),results,inst_69928);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_69963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__);

(statearr_69963[(1)] = (1));

return statearr_69963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1 = (function (state_69942){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_69942);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e69964){var ex__31527__auto__ = e69964;
var statearr_69965_72068 = state_69942;
(statearr_69965_72068[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_69942[(4)]))){
var statearr_69967_72069 = state_69942;
(statearr_69967_72069[(1)] = cljs.core.first((state_69942[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72070 = state_69942;
state_69942 = G__72070;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = function(state_69942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1.call(this,state_69942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_69970 = f__31602__auto__();
(statearr_69970[(6)] = c__31601__auto___72051);

return statearr_69970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


var c__31601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70023){
var state_val_70024 = (state_70023[(1)]);
if((state_val_70024 === (7))){
var inst_70019 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
var statearr_70033_72071 = state_70023__$1;
(statearr_70033_72071[(2)] = inst_70019);

(statearr_70033_72071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (20))){
var state_70023__$1 = state_70023;
var statearr_70044_72072 = state_70023__$1;
(statearr_70044_72072[(2)] = null);

(statearr_70044_72072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (1))){
var state_70023__$1 = state_70023;
var statearr_70058_72073 = state_70023__$1;
(statearr_70058_72073[(2)] = null);

(statearr_70058_72073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (4))){
var inst_69981 = (state_70023[(7)]);
var inst_69981__$1 = (state_70023[(2)]);
var inst_69982 = (inst_69981__$1 == null);
var state_70023__$1 = (function (){var statearr_70069 = state_70023;
(statearr_70069[(7)] = inst_69981__$1);

return statearr_70069;
})();
if(cljs.core.truth_(inst_69982)){
var statearr_70070_72074 = state_70023__$1;
(statearr_70070_72074[(1)] = (5));

} else {
var statearr_70071_72075 = state_70023__$1;
(statearr_70071_72075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (15))){
var inst_69994 = (state_70023[(8)]);
var state_70023__$1 = state_70023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70023__$1,(18),to,inst_69994);
} else {
if((state_val_70024 === (21))){
var inst_70009 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
var statearr_70076_72076 = state_70023__$1;
(statearr_70076_72076[(2)] = inst_70009);

(statearr_70076_72076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (13))){
var inst_70014 = (state_70023[(2)]);
var state_70023__$1 = (function (){var statearr_70078 = state_70023;
(statearr_70078[(9)] = inst_70014);

return statearr_70078;
})();
var statearr_70080_72077 = state_70023__$1;
(statearr_70080_72077[(2)] = null);

(statearr_70080_72077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (6))){
var inst_69981 = (state_70023[(7)]);
var state_70023__$1 = state_70023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70023__$1,(11),inst_69981);
} else {
if((state_val_70024 === (17))){
var inst_70004 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
if(cljs.core.truth_(inst_70004)){
var statearr_70082_72078 = state_70023__$1;
(statearr_70082_72078[(1)] = (19));

} else {
var statearr_70087_72079 = state_70023__$1;
(statearr_70087_72079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (3))){
var inst_70021 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70023__$1,inst_70021);
} else {
if((state_val_70024 === (12))){
var inst_69991 = (state_70023[(10)]);
var state_70023__$1 = state_70023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70023__$1,(14),inst_69991);
} else {
if((state_val_70024 === (2))){
var state_70023__$1 = state_70023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70023__$1,(4),results);
} else {
if((state_val_70024 === (19))){
var state_70023__$1 = state_70023;
var statearr_70090_72081 = state_70023__$1;
(statearr_70090_72081[(2)] = null);

(statearr_70090_72081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (11))){
var inst_69991 = (state_70023[(2)]);
var state_70023__$1 = (function (){var statearr_70095 = state_70023;
(statearr_70095[(10)] = inst_69991);

return statearr_70095;
})();
var statearr_70096_72084 = state_70023__$1;
(statearr_70096_72084[(2)] = null);

(statearr_70096_72084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (9))){
var state_70023__$1 = state_70023;
var statearr_70097_72086 = state_70023__$1;
(statearr_70097_72086[(2)] = null);

(statearr_70097_72086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (5))){
var state_70023__$1 = state_70023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70098_72087 = state_70023__$1;
(statearr_70098_72087[(1)] = (8));

} else {
var statearr_70099_72088 = state_70023__$1;
(statearr_70099_72088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (14))){
var inst_69994 = (state_70023[(8)]);
var inst_69998 = (state_70023[(11)]);
var inst_69994__$1 = (state_70023[(2)]);
var inst_69997 = (inst_69994__$1 == null);
var inst_69998__$1 = cljs.core.not(inst_69997);
var state_70023__$1 = (function (){var statearr_70116 = state_70023;
(statearr_70116[(8)] = inst_69994__$1);

(statearr_70116[(11)] = inst_69998__$1);

return statearr_70116;
})();
if(inst_69998__$1){
var statearr_70128_72089 = state_70023__$1;
(statearr_70128_72089[(1)] = (15));

} else {
var statearr_70130_72090 = state_70023__$1;
(statearr_70130_72090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (16))){
var inst_69998 = (state_70023[(11)]);
var state_70023__$1 = state_70023;
var statearr_70131_72091 = state_70023__$1;
(statearr_70131_72091[(2)] = inst_69998);

(statearr_70131_72091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (10))){
var inst_69988 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
var statearr_70132_72092 = state_70023__$1;
(statearr_70132_72092[(2)] = inst_69988);

(statearr_70132_72092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (18))){
var inst_70001 = (state_70023[(2)]);
var state_70023__$1 = state_70023;
var statearr_70134_72093 = state_70023__$1;
(statearr_70134_72093[(2)] = inst_70001);

(statearr_70134_72093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70024 === (8))){
var inst_69985 = cljs.core.async.close_BANG_(to);
var state_70023__$1 = state_70023;
var statearr_70146_72094 = state_70023__$1;
(statearr_70146_72094[(2)] = inst_69985);

(statearr_70146_72094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_70159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__);

(statearr_70159[(1)] = (1));

return statearr_70159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1 = (function (state_70023){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70023);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70160){var ex__31527__auto__ = e70160;
var statearr_70161_72095 = state_70023;
(statearr_70161_72095[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70023[(4)]))){
var statearr_70167_72096 = state_70023;
(statearr_70167_72096[(1)] = cljs.core.first((state_70023[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72097 = state_70023;
state_70023 = G__72097;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__ = function(state_70023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1.call(this,state_70023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70186 = f__31602__auto__();
(statearr_70186[(6)] = c__31601__auto__);

return statearr_70186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

return c__31601__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70193 = arguments.length;
switch (G__70193) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70226 = arguments.length;
switch (G__70226) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70249 = arguments.length;
switch (G__70249) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31601__auto___72116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70304){
var state_val_70305 = (state_70304[(1)]);
if((state_val_70305 === (7))){
var inst_70296 = (state_70304[(2)]);
var state_70304__$1 = state_70304;
var statearr_70310_72117 = state_70304__$1;
(statearr_70310_72117[(2)] = inst_70296);

(statearr_70310_72117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (1))){
var state_70304__$1 = state_70304;
var statearr_70311_72119 = state_70304__$1;
(statearr_70311_72119[(2)] = null);

(statearr_70311_72119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (4))){
var inst_70276 = (state_70304[(7)]);
var inst_70276__$1 = (state_70304[(2)]);
var inst_70277 = (inst_70276__$1 == null);
var state_70304__$1 = (function (){var statearr_70312 = state_70304;
(statearr_70312[(7)] = inst_70276__$1);

return statearr_70312;
})();
if(cljs.core.truth_(inst_70277)){
var statearr_70318_72126 = state_70304__$1;
(statearr_70318_72126[(1)] = (5));

} else {
var statearr_70319_72127 = state_70304__$1;
(statearr_70319_72127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (13))){
var state_70304__$1 = state_70304;
var statearr_70325_72128 = state_70304__$1;
(statearr_70325_72128[(2)] = null);

(statearr_70325_72128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (6))){
var inst_70276 = (state_70304[(7)]);
var inst_70283 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70276) : p.call(null,inst_70276));
var state_70304__$1 = state_70304;
if(cljs.core.truth_(inst_70283)){
var statearr_70331_72129 = state_70304__$1;
(statearr_70331_72129[(1)] = (9));

} else {
var statearr_70336_72130 = state_70304__$1;
(statearr_70336_72130[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (3))){
var inst_70298 = (state_70304[(2)]);
var state_70304__$1 = state_70304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70304__$1,inst_70298);
} else {
if((state_val_70305 === (12))){
var state_70304__$1 = state_70304;
var statearr_70341_72136 = state_70304__$1;
(statearr_70341_72136[(2)] = null);

(statearr_70341_72136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (2))){
var state_70304__$1 = state_70304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70304__$1,(4),ch);
} else {
if((state_val_70305 === (11))){
var inst_70276 = (state_70304[(7)]);
var inst_70287 = (state_70304[(2)]);
var state_70304__$1 = state_70304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70304__$1,(8),inst_70287,inst_70276);
} else {
if((state_val_70305 === (9))){
var state_70304__$1 = state_70304;
var statearr_70347_72143 = state_70304__$1;
(statearr_70347_72143[(2)] = tc);

(statearr_70347_72143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (5))){
var inst_70279 = cljs.core.async.close_BANG_(tc);
var inst_70280 = cljs.core.async.close_BANG_(fc);
var state_70304__$1 = (function (){var statearr_70348 = state_70304;
(statearr_70348[(8)] = inst_70279);

return statearr_70348;
})();
var statearr_70349_72144 = state_70304__$1;
(statearr_70349_72144[(2)] = inst_70280);

(statearr_70349_72144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (14))){
var inst_70294 = (state_70304[(2)]);
var state_70304__$1 = state_70304;
var statearr_70350_72145 = state_70304__$1;
(statearr_70350_72145[(2)] = inst_70294);

(statearr_70350_72145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (10))){
var state_70304__$1 = state_70304;
var statearr_70351_72146 = state_70304__$1;
(statearr_70351_72146[(2)] = fc);

(statearr_70351_72146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70305 === (8))){
var inst_70289 = (state_70304[(2)]);
var state_70304__$1 = state_70304;
if(cljs.core.truth_(inst_70289)){
var statearr_70352_72147 = state_70304__$1;
(statearr_70352_72147[(1)] = (12));

} else {
var statearr_70353_72148 = state_70304__$1;
(statearr_70353_72148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_70354 = [null,null,null,null,null,null,null,null,null];
(statearr_70354[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_70354[(1)] = (1));

return statearr_70354;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_70304){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70304);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70355){var ex__31527__auto__ = e70355;
var statearr_70356_72153 = state_70304;
(statearr_70356_72153[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70304[(4)]))){
var statearr_70362_72154 = state_70304;
(statearr_70362_72154[(1)] = cljs.core.first((state_70304[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72155 = state_70304;
state_70304 = G__72155;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_70304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_70304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70380 = f__31602__auto__();
(statearr_70380[(6)] = c__31601__auto___72116);

return statearr_70380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70449){
var state_val_70450 = (state_70449[(1)]);
if((state_val_70450 === (7))){
var inst_70443 = (state_70449[(2)]);
var state_70449__$1 = state_70449;
var statearr_70458_72159 = state_70449__$1;
(statearr_70458_72159[(2)] = inst_70443);

(statearr_70458_72159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (1))){
var inst_70408 = init;
var inst_70409 = inst_70408;
var state_70449__$1 = (function (){var statearr_70459 = state_70449;
(statearr_70459[(7)] = inst_70409);

return statearr_70459;
})();
var statearr_70461_72160 = state_70449__$1;
(statearr_70461_72160[(2)] = null);

(statearr_70461_72160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (4))){
var inst_70416 = (state_70449[(8)]);
var inst_70416__$1 = (state_70449[(2)]);
var inst_70417 = (inst_70416__$1 == null);
var state_70449__$1 = (function (){var statearr_70462 = state_70449;
(statearr_70462[(8)] = inst_70416__$1);

return statearr_70462;
})();
if(cljs.core.truth_(inst_70417)){
var statearr_70463_72161 = state_70449__$1;
(statearr_70463_72161[(1)] = (5));

} else {
var statearr_70464_72162 = state_70449__$1;
(statearr_70464_72162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (6))){
var inst_70421 = (state_70449[(9)]);
var inst_70416 = (state_70449[(8)]);
var inst_70409 = (state_70449[(7)]);
var inst_70421__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_70409,inst_70416) : f.call(null,inst_70409,inst_70416));
var inst_70423 = cljs.core.reduced_QMARK_(inst_70421__$1);
var state_70449__$1 = (function (){var statearr_70469 = state_70449;
(statearr_70469[(9)] = inst_70421__$1);

return statearr_70469;
})();
if(inst_70423){
var statearr_70470_72168 = state_70449__$1;
(statearr_70470_72168[(1)] = (8));

} else {
var statearr_70472_72169 = state_70449__$1;
(statearr_70472_72169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (3))){
var inst_70446 = (state_70449[(2)]);
var state_70449__$1 = state_70449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70449__$1,inst_70446);
} else {
if((state_val_70450 === (2))){
var state_70449__$1 = state_70449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70449__$1,(4),ch);
} else {
if((state_val_70450 === (9))){
var inst_70421 = (state_70449[(9)]);
var inst_70409 = inst_70421;
var state_70449__$1 = (function (){var statearr_70473 = state_70449;
(statearr_70473[(7)] = inst_70409);

return statearr_70473;
})();
var statearr_70474_72170 = state_70449__$1;
(statearr_70474_72170[(2)] = null);

(statearr_70474_72170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (5))){
var inst_70409 = (state_70449[(7)]);
var state_70449__$1 = state_70449;
var statearr_70475_72171 = state_70449__$1;
(statearr_70475_72171[(2)] = inst_70409);

(statearr_70475_72171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (10))){
var inst_70441 = (state_70449[(2)]);
var state_70449__$1 = state_70449;
var statearr_70476_72173 = state_70449__$1;
(statearr_70476_72173[(2)] = inst_70441);

(statearr_70476_72173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70450 === (8))){
var inst_70421 = (state_70449[(9)]);
var inst_70433 = cljs.core.deref(inst_70421);
var state_70449__$1 = state_70449;
var statearr_70477_72175 = state_70449__$1;
(statearr_70477_72175[(2)] = inst_70433);

(statearr_70477_72175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31524__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31524__auto____0 = (function (){
var statearr_70478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70478[(0)] = cljs$core$async$reduce_$_state_machine__31524__auto__);

(statearr_70478[(1)] = (1));

return statearr_70478;
});
var cljs$core$async$reduce_$_state_machine__31524__auto____1 = (function (state_70449){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70449);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70479){var ex__31527__auto__ = e70479;
var statearr_70480_72177 = state_70449;
(statearr_70480_72177[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70449[(4)]))){
var statearr_70481_72178 = state_70449;
(statearr_70481_72178[(1)] = cljs.core.first((state_70449[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72179 = state_70449;
state_70449 = G__72179;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31524__auto__ = function(state_70449){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31524__auto____1.call(this,state_70449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31524__auto____0;
cljs$core$async$reduce_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31524__auto____1;
return cljs$core$async$reduce_$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70482 = f__31602__auto__();
(statearr_70482[(6)] = c__31601__auto__);

return statearr_70482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

return c__31601__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70490){
var state_val_70491 = (state_70490[(1)]);
if((state_val_70491 === (1))){
var inst_70484 = cljs.core.async.reduce(f__$1,init,ch);
var state_70490__$1 = state_70490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70490__$1,(2),inst_70484);
} else {
if((state_val_70491 === (2))){
var inst_70486 = (state_70490[(2)]);
var inst_70487 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_70486) : f__$1.call(null,inst_70486));
var state_70490__$1 = state_70490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70490__$1,inst_70487);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31524__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31524__auto____0 = (function (){
var statearr_70503 = [null,null,null,null,null,null,null];
(statearr_70503[(0)] = cljs$core$async$transduce_$_state_machine__31524__auto__);

(statearr_70503[(1)] = (1));

return statearr_70503;
});
var cljs$core$async$transduce_$_state_machine__31524__auto____1 = (function (state_70490){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70490);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70504){var ex__31527__auto__ = e70504;
var statearr_70505_72181 = state_70490;
(statearr_70505_72181[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70490[(4)]))){
var statearr_70506_72182 = state_70490;
(statearr_70506_72182[(1)] = cljs.core.first((state_70490[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72183 = state_70490;
state_70490 = G__72183;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31524__auto__ = function(state_70490){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31524__auto____1.call(this,state_70490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31524__auto____0;
cljs$core$async$transduce_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31524__auto____1;
return cljs$core$async$transduce_$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70507 = f__31602__auto__();
(statearr_70507[(6)] = c__31601__auto__);

return statearr_70507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

return c__31601__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__70510 = arguments.length;
switch (G__70510) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70535){
var state_val_70536 = (state_70535[(1)]);
if((state_val_70536 === (7))){
var inst_70517 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70537_72189 = state_70535__$1;
(statearr_70537_72189[(2)] = inst_70517);

(statearr_70537_72189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (1))){
var inst_70511 = cljs.core.seq(coll);
var inst_70512 = inst_70511;
var state_70535__$1 = (function (){var statearr_70538 = state_70535;
(statearr_70538[(7)] = inst_70512);

return statearr_70538;
})();
var statearr_70539_72190 = state_70535__$1;
(statearr_70539_72190[(2)] = null);

(statearr_70539_72190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (4))){
var inst_70512 = (state_70535[(7)]);
var inst_70515 = cljs.core.first(inst_70512);
var state_70535__$1 = state_70535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70535__$1,(7),ch,inst_70515);
} else {
if((state_val_70536 === (13))){
var inst_70529 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70540_72191 = state_70535__$1;
(statearr_70540_72191[(2)] = inst_70529);

(statearr_70540_72191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (6))){
var inst_70520 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
if(cljs.core.truth_(inst_70520)){
var statearr_70541_72192 = state_70535__$1;
(statearr_70541_72192[(1)] = (8));

} else {
var statearr_70542_72193 = state_70535__$1;
(statearr_70542_72193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (3))){
var inst_70533 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70535__$1,inst_70533);
} else {
if((state_val_70536 === (12))){
var state_70535__$1 = state_70535;
var statearr_70543_72194 = state_70535__$1;
(statearr_70543_72194[(2)] = null);

(statearr_70543_72194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (2))){
var inst_70512 = (state_70535[(7)]);
var state_70535__$1 = state_70535;
if(cljs.core.truth_(inst_70512)){
var statearr_70545_72195 = state_70535__$1;
(statearr_70545_72195[(1)] = (4));

} else {
var statearr_70546_72196 = state_70535__$1;
(statearr_70546_72196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (11))){
var inst_70526 = cljs.core.async.close_BANG_(ch);
var state_70535__$1 = state_70535;
var statearr_70549_72197 = state_70535__$1;
(statearr_70549_72197[(2)] = inst_70526);

(statearr_70549_72197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (9))){
var state_70535__$1 = state_70535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70550_72198 = state_70535__$1;
(statearr_70550_72198[(1)] = (11));

} else {
var statearr_70551_72199 = state_70535__$1;
(statearr_70551_72199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (5))){
var inst_70512 = (state_70535[(7)]);
var state_70535__$1 = state_70535;
var statearr_70552_72200 = state_70535__$1;
(statearr_70552_72200[(2)] = inst_70512);

(statearr_70552_72200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (10))){
var inst_70531 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70553_72201 = state_70535__$1;
(statearr_70553_72201[(2)] = inst_70531);

(statearr_70553_72201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (8))){
var inst_70512 = (state_70535[(7)]);
var inst_70522 = cljs.core.next(inst_70512);
var inst_70512__$1 = inst_70522;
var state_70535__$1 = (function (){var statearr_70556 = state_70535;
(statearr_70556[(7)] = inst_70512__$1);

return statearr_70556;
})();
var statearr_70557_72202 = state_70535__$1;
(statearr_70557_72202[(2)] = null);

(statearr_70557_72202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_70558 = [null,null,null,null,null,null,null,null];
(statearr_70558[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_70558[(1)] = (1));

return statearr_70558;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_70535){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70535);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70559){var ex__31527__auto__ = e70559;
var statearr_70561_72203 = state_70535;
(statearr_70561_72203[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70535[(4)]))){
var statearr_70563_72204 = state_70535;
(statearr_70563_72204[(1)] = cljs.core.first((state_70535[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72205 = state_70535;
state_70535 = G__72205;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_70535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_70535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70564 = f__31602__auto__();
(statearr_70564[(6)] = c__31601__auto__);

return statearr_70564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

return c__31601__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70568 = arguments.length;
switch (G__70568) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72208 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72208(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72209 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72209(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72212 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72212(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72213 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72213(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70585 = (function (ch,cs,meta70586){
this.ch = ch;
this.cs = cs;
this.meta70586 = meta70586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70587,meta70586__$1){
var self__ = this;
var _70587__$1 = this;
return (new cljs.core.async.t_cljs$core$async70585(self__.ch,self__.cs,meta70586__$1));
}));

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70587){
var self__ = this;
var _70587__$1 = this;
return self__.meta70586;
}));

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async70585.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async70585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70586","meta70586",803234430,null)], null);
}));

(cljs.core.async.t_cljs$core$async70585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70585");

(cljs.core.async.t_cljs$core$async70585.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70585.
 */
cljs.core.async.__GT_t_cljs$core$async70585 = (function cljs$core$async$mult_$___GT_t_cljs$core$async70585(ch__$1,cs__$1,meta70586){
return (new cljs.core.async.t_cljs$core$async70585(ch__$1,cs__$1,meta70586));
});

}

return (new cljs.core.async.t_cljs$core$async70585(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31601__auto___72223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_70736){
var state_val_70737 = (state_70736[(1)]);
if((state_val_70737 === (7))){
var inst_70732 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70741_72225 = state_70736__$1;
(statearr_70741_72225[(2)] = inst_70732);

(statearr_70741_72225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (20))){
var inst_70631 = (state_70736[(7)]);
var inst_70645 = cljs.core.first(inst_70631);
var inst_70646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70645,(0),null);
var inst_70647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70645,(1),null);
var state_70736__$1 = (function (){var statearr_70742 = state_70736;
(statearr_70742[(8)] = inst_70646);

return statearr_70742;
})();
if(cljs.core.truth_(inst_70647)){
var statearr_70743_72226 = state_70736__$1;
(statearr_70743_72226[(1)] = (22));

} else {
var statearr_70744_72227 = state_70736__$1;
(statearr_70744_72227[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (27))){
var inst_70686 = (state_70736[(9)]);
var inst_70679 = (state_70736[(10)]);
var inst_70597 = (state_70736[(11)]);
var inst_70681 = (state_70736[(12)]);
var inst_70686__$1 = cljs.core._nth(inst_70679,inst_70681);
var inst_70687 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70686__$1,inst_70597,done);
var state_70736__$1 = (function (){var statearr_70745 = state_70736;
(statearr_70745[(9)] = inst_70686__$1);

return statearr_70745;
})();
if(cljs.core.truth_(inst_70687)){
var statearr_70746_72228 = state_70736__$1;
(statearr_70746_72228[(1)] = (30));

} else {
var statearr_70747_72229 = state_70736__$1;
(statearr_70747_72229[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (1))){
var state_70736__$1 = state_70736;
var statearr_70748_72230 = state_70736__$1;
(statearr_70748_72230[(2)] = null);

(statearr_70748_72230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (24))){
var inst_70631 = (state_70736[(7)]);
var inst_70656 = (state_70736[(2)]);
var inst_70657 = cljs.core.next(inst_70631);
var inst_70607 = inst_70657;
var inst_70608 = null;
var inst_70609 = (0);
var inst_70610 = (0);
var state_70736__$1 = (function (){var statearr_70749 = state_70736;
(statearr_70749[(13)] = inst_70656);

(statearr_70749[(14)] = inst_70607);

(statearr_70749[(15)] = inst_70608);

(statearr_70749[(16)] = inst_70610);

(statearr_70749[(17)] = inst_70609);

return statearr_70749;
})();
var statearr_70750_72232 = state_70736__$1;
(statearr_70750_72232[(2)] = null);

(statearr_70750_72232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (39))){
var state_70736__$1 = state_70736;
var statearr_70754_72236 = state_70736__$1;
(statearr_70754_72236[(2)] = null);

(statearr_70754_72236[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (4))){
var inst_70597 = (state_70736[(11)]);
var inst_70597__$1 = (state_70736[(2)]);
var inst_70599 = (inst_70597__$1 == null);
var state_70736__$1 = (function (){var statearr_70755 = state_70736;
(statearr_70755[(11)] = inst_70597__$1);

return statearr_70755;
})();
if(cljs.core.truth_(inst_70599)){
var statearr_70756_72237 = state_70736__$1;
(statearr_70756_72237[(1)] = (5));

} else {
var statearr_70757_72238 = state_70736__$1;
(statearr_70757_72238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (15))){
var inst_70607 = (state_70736[(14)]);
var inst_70608 = (state_70736[(15)]);
var inst_70610 = (state_70736[(16)]);
var inst_70609 = (state_70736[(17)]);
var inst_70627 = (state_70736[(2)]);
var inst_70628 = (inst_70610 + (1));
var tmp70751 = inst_70607;
var tmp70752 = inst_70608;
var tmp70753 = inst_70609;
var inst_70607__$1 = tmp70751;
var inst_70608__$1 = tmp70752;
var inst_70609__$1 = tmp70753;
var inst_70610__$1 = inst_70628;
var state_70736__$1 = (function (){var statearr_70758 = state_70736;
(statearr_70758[(14)] = inst_70607__$1);

(statearr_70758[(18)] = inst_70627);

(statearr_70758[(15)] = inst_70608__$1);

(statearr_70758[(16)] = inst_70610__$1);

(statearr_70758[(17)] = inst_70609__$1);

return statearr_70758;
})();
var statearr_70760_72244 = state_70736__$1;
(statearr_70760_72244[(2)] = null);

(statearr_70760_72244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (21))){
var inst_70660 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70765_72245 = state_70736__$1;
(statearr_70765_72245[(2)] = inst_70660);

(statearr_70765_72245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (31))){
var inst_70686 = (state_70736[(9)]);
var inst_70690 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70686);
var state_70736__$1 = state_70736;
var statearr_70771_72253 = state_70736__$1;
(statearr_70771_72253[(2)] = inst_70690);

(statearr_70771_72253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (32))){
var inst_70678 = (state_70736[(19)]);
var inst_70679 = (state_70736[(10)]);
var inst_70680 = (state_70736[(20)]);
var inst_70681 = (state_70736[(12)]);
var inst_70692 = (state_70736[(2)]);
var inst_70693 = (inst_70681 + (1));
var tmp70762 = inst_70678;
var tmp70763 = inst_70679;
var tmp70764 = inst_70680;
var inst_70678__$1 = tmp70762;
var inst_70679__$1 = tmp70763;
var inst_70680__$1 = tmp70764;
var inst_70681__$1 = inst_70693;
var state_70736__$1 = (function (){var statearr_70773 = state_70736;
(statearr_70773[(19)] = inst_70678__$1);

(statearr_70773[(21)] = inst_70692);

(statearr_70773[(10)] = inst_70679__$1);

(statearr_70773[(20)] = inst_70680__$1);

(statearr_70773[(12)] = inst_70681__$1);

return statearr_70773;
})();
var statearr_70774_72260 = state_70736__$1;
(statearr_70774_72260[(2)] = null);

(statearr_70774_72260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (40))){
var inst_70705 = (state_70736[(22)]);
var inst_70709 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70705);
var state_70736__$1 = state_70736;
var statearr_70775_72261 = state_70736__$1;
(statearr_70775_72261[(2)] = inst_70709);

(statearr_70775_72261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (33))){
var inst_70696 = (state_70736[(23)]);
var inst_70698 = cljs.core.chunked_seq_QMARK_(inst_70696);
var state_70736__$1 = state_70736;
if(inst_70698){
var statearr_70776_72264 = state_70736__$1;
(statearr_70776_72264[(1)] = (36));

} else {
var statearr_70777_72265 = state_70736__$1;
(statearr_70777_72265[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (13))){
var inst_70621 = (state_70736[(24)]);
var inst_70624 = cljs.core.async.close_BANG_(inst_70621);
var state_70736__$1 = state_70736;
var statearr_70778_72266 = state_70736__$1;
(statearr_70778_72266[(2)] = inst_70624);

(statearr_70778_72266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (22))){
var inst_70646 = (state_70736[(8)]);
var inst_70653 = cljs.core.async.close_BANG_(inst_70646);
var state_70736__$1 = state_70736;
var statearr_70779_72267 = state_70736__$1;
(statearr_70779_72267[(2)] = inst_70653);

(statearr_70779_72267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (36))){
var inst_70696 = (state_70736[(23)]);
var inst_70700 = cljs.core.chunk_first(inst_70696);
var inst_70701 = cljs.core.chunk_rest(inst_70696);
var inst_70702 = cljs.core.count(inst_70700);
var inst_70678 = inst_70701;
var inst_70679 = inst_70700;
var inst_70680 = inst_70702;
var inst_70681 = (0);
var state_70736__$1 = (function (){var statearr_70782 = state_70736;
(statearr_70782[(19)] = inst_70678);

(statearr_70782[(10)] = inst_70679);

(statearr_70782[(20)] = inst_70680);

(statearr_70782[(12)] = inst_70681);

return statearr_70782;
})();
var statearr_70783_72268 = state_70736__$1;
(statearr_70783_72268[(2)] = null);

(statearr_70783_72268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (41))){
var inst_70696 = (state_70736[(23)]);
var inst_70711 = (state_70736[(2)]);
var inst_70712 = cljs.core.next(inst_70696);
var inst_70678 = inst_70712;
var inst_70679 = null;
var inst_70680 = (0);
var inst_70681 = (0);
var state_70736__$1 = (function (){var statearr_70786 = state_70736;
(statearr_70786[(19)] = inst_70678);

(statearr_70786[(25)] = inst_70711);

(statearr_70786[(10)] = inst_70679);

(statearr_70786[(20)] = inst_70680);

(statearr_70786[(12)] = inst_70681);

return statearr_70786;
})();
var statearr_70787_72269 = state_70736__$1;
(statearr_70787_72269[(2)] = null);

(statearr_70787_72269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (43))){
var state_70736__$1 = state_70736;
var statearr_70790_72276 = state_70736__$1;
(statearr_70790_72276[(2)] = null);

(statearr_70790_72276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (29))){
var inst_70720 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70792_72277 = state_70736__$1;
(statearr_70792_72277[(2)] = inst_70720);

(statearr_70792_72277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (44))){
var inst_70729 = (state_70736[(2)]);
var state_70736__$1 = (function (){var statearr_70794 = state_70736;
(statearr_70794[(26)] = inst_70729);

return statearr_70794;
})();
var statearr_70795_72278 = state_70736__$1;
(statearr_70795_72278[(2)] = null);

(statearr_70795_72278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (6))){
var inst_70670 = (state_70736[(27)]);
var inst_70669 = cljs.core.deref(cs);
var inst_70670__$1 = cljs.core.keys(inst_70669);
var inst_70671 = cljs.core.count(inst_70670__$1);
var inst_70672 = cljs.core.reset_BANG_(dctr,inst_70671);
var inst_70677 = cljs.core.seq(inst_70670__$1);
var inst_70678 = inst_70677;
var inst_70679 = null;
var inst_70680 = (0);
var inst_70681 = (0);
var state_70736__$1 = (function (){var statearr_70796 = state_70736;
(statearr_70796[(19)] = inst_70678);

(statearr_70796[(28)] = inst_70672);

(statearr_70796[(10)] = inst_70679);

(statearr_70796[(27)] = inst_70670__$1);

(statearr_70796[(20)] = inst_70680);

(statearr_70796[(12)] = inst_70681);

return statearr_70796;
})();
var statearr_70799_72279 = state_70736__$1;
(statearr_70799_72279[(2)] = null);

(statearr_70799_72279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (28))){
var inst_70696 = (state_70736[(23)]);
var inst_70678 = (state_70736[(19)]);
var inst_70696__$1 = cljs.core.seq(inst_70678);
var state_70736__$1 = (function (){var statearr_70800 = state_70736;
(statearr_70800[(23)] = inst_70696__$1);

return statearr_70800;
})();
if(inst_70696__$1){
var statearr_70801_72280 = state_70736__$1;
(statearr_70801_72280[(1)] = (33));

} else {
var statearr_70802_72281 = state_70736__$1;
(statearr_70802_72281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (25))){
var inst_70680 = (state_70736[(20)]);
var inst_70681 = (state_70736[(12)]);
var inst_70683 = (inst_70681 < inst_70680);
var inst_70684 = inst_70683;
var state_70736__$1 = state_70736;
if(cljs.core.truth_(inst_70684)){
var statearr_70807_72283 = state_70736__$1;
(statearr_70807_72283[(1)] = (27));

} else {
var statearr_70808_72284 = state_70736__$1;
(statearr_70808_72284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (34))){
var state_70736__$1 = state_70736;
var statearr_70809_72288 = state_70736__$1;
(statearr_70809_72288[(2)] = null);

(statearr_70809_72288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (17))){
var state_70736__$1 = state_70736;
var statearr_70810_72289 = state_70736__$1;
(statearr_70810_72289[(2)] = null);

(statearr_70810_72289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (3))){
var inst_70734 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70736__$1,inst_70734);
} else {
if((state_val_70737 === (12))){
var inst_70665 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70811_72296 = state_70736__$1;
(statearr_70811_72296[(2)] = inst_70665);

(statearr_70811_72296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (2))){
var state_70736__$1 = state_70736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70736__$1,(4),ch);
} else {
if((state_val_70737 === (23))){
var state_70736__$1 = state_70736;
var statearr_70814_72297 = state_70736__$1;
(statearr_70814_72297[(2)] = null);

(statearr_70814_72297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (35))){
var inst_70718 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70817_72298 = state_70736__$1;
(statearr_70817_72298[(2)] = inst_70718);

(statearr_70817_72298[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (19))){
var inst_70631 = (state_70736[(7)]);
var inst_70637 = cljs.core.chunk_first(inst_70631);
var inst_70638 = cljs.core.chunk_rest(inst_70631);
var inst_70639 = cljs.core.count(inst_70637);
var inst_70607 = inst_70638;
var inst_70608 = inst_70637;
var inst_70609 = inst_70639;
var inst_70610 = (0);
var state_70736__$1 = (function (){var statearr_70818 = state_70736;
(statearr_70818[(14)] = inst_70607);

(statearr_70818[(15)] = inst_70608);

(statearr_70818[(16)] = inst_70610);

(statearr_70818[(17)] = inst_70609);

return statearr_70818;
})();
var statearr_70820_72299 = state_70736__$1;
(statearr_70820_72299[(2)] = null);

(statearr_70820_72299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (11))){
var inst_70607 = (state_70736[(14)]);
var inst_70631 = (state_70736[(7)]);
var inst_70631__$1 = cljs.core.seq(inst_70607);
var state_70736__$1 = (function (){var statearr_70824 = state_70736;
(statearr_70824[(7)] = inst_70631__$1);

return statearr_70824;
})();
if(inst_70631__$1){
var statearr_70825_72301 = state_70736__$1;
(statearr_70825_72301[(1)] = (16));

} else {
var statearr_70826_72302 = state_70736__$1;
(statearr_70826_72302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (9))){
var inst_70667 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70828_72303 = state_70736__$1;
(statearr_70828_72303[(2)] = inst_70667);

(statearr_70828_72303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (5))){
var inst_70605 = cljs.core.deref(cs);
var inst_70606 = cljs.core.seq(inst_70605);
var inst_70607 = inst_70606;
var inst_70608 = null;
var inst_70609 = (0);
var inst_70610 = (0);
var state_70736__$1 = (function (){var statearr_70829 = state_70736;
(statearr_70829[(14)] = inst_70607);

(statearr_70829[(15)] = inst_70608);

(statearr_70829[(16)] = inst_70610);

(statearr_70829[(17)] = inst_70609);

return statearr_70829;
})();
var statearr_70830_72304 = state_70736__$1;
(statearr_70830_72304[(2)] = null);

(statearr_70830_72304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (14))){
var state_70736__$1 = state_70736;
var statearr_70835_72311 = state_70736__$1;
(statearr_70835_72311[(2)] = null);

(statearr_70835_72311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (45))){
var inst_70726 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70836_72312 = state_70736__$1;
(statearr_70836_72312[(2)] = inst_70726);

(statearr_70836_72312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (26))){
var inst_70670 = (state_70736[(27)]);
var inst_70722 = (state_70736[(2)]);
var inst_70723 = cljs.core.seq(inst_70670);
var state_70736__$1 = (function (){var statearr_70837 = state_70736;
(statearr_70837[(29)] = inst_70722);

return statearr_70837;
})();
if(inst_70723){
var statearr_70839_72316 = state_70736__$1;
(statearr_70839_72316[(1)] = (42));

} else {
var statearr_70841_72317 = state_70736__$1;
(statearr_70841_72317[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (16))){
var inst_70631 = (state_70736[(7)]);
var inst_70634 = cljs.core.chunked_seq_QMARK_(inst_70631);
var state_70736__$1 = state_70736;
if(inst_70634){
var statearr_70842_72318 = state_70736__$1;
(statearr_70842_72318[(1)] = (19));

} else {
var statearr_70843_72319 = state_70736__$1;
(statearr_70843_72319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (38))){
var inst_70715 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70844_72320 = state_70736__$1;
(statearr_70844_72320[(2)] = inst_70715);

(statearr_70844_72320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (30))){
var state_70736__$1 = state_70736;
var statearr_70845_72321 = state_70736__$1;
(statearr_70845_72321[(2)] = null);

(statearr_70845_72321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (10))){
var inst_70608 = (state_70736[(15)]);
var inst_70610 = (state_70736[(16)]);
var inst_70619 = cljs.core._nth(inst_70608,inst_70610);
var inst_70621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70619,(0),null);
var inst_70622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70619,(1),null);
var state_70736__$1 = (function (){var statearr_70850 = state_70736;
(statearr_70850[(24)] = inst_70621);

return statearr_70850;
})();
if(cljs.core.truth_(inst_70622)){
var statearr_70851_72322 = state_70736__$1;
(statearr_70851_72322[(1)] = (13));

} else {
var statearr_70852_72326 = state_70736__$1;
(statearr_70852_72326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (18))){
var inst_70663 = (state_70736[(2)]);
var state_70736__$1 = state_70736;
var statearr_70853_72327 = state_70736__$1;
(statearr_70853_72327[(2)] = inst_70663);

(statearr_70853_72327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (42))){
var state_70736__$1 = state_70736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70736__$1,(45),dchan);
} else {
if((state_val_70737 === (37))){
var inst_70696 = (state_70736[(23)]);
var inst_70705 = (state_70736[(22)]);
var inst_70597 = (state_70736[(11)]);
var inst_70705__$1 = cljs.core.first(inst_70696);
var inst_70706 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70705__$1,inst_70597,done);
var state_70736__$1 = (function (){var statearr_70855 = state_70736;
(statearr_70855[(22)] = inst_70705__$1);

return statearr_70855;
})();
if(cljs.core.truth_(inst_70706)){
var statearr_70857_72329 = state_70736__$1;
(statearr_70857_72329[(1)] = (39));

} else {
var statearr_70858_72330 = state_70736__$1;
(statearr_70858_72330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70737 === (8))){
var inst_70610 = (state_70736[(16)]);
var inst_70609 = (state_70736[(17)]);
var inst_70612 = (inst_70610 < inst_70609);
var inst_70613 = inst_70612;
var state_70736__$1 = state_70736;
if(cljs.core.truth_(inst_70613)){
var statearr_70859_72331 = state_70736__$1;
(statearr_70859_72331[(1)] = (10));

} else {
var statearr_70860_72332 = state_70736__$1;
(statearr_70860_72332[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31524__auto__ = null;
var cljs$core$async$mult_$_state_machine__31524__auto____0 = (function (){
var statearr_70861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70861[(0)] = cljs$core$async$mult_$_state_machine__31524__auto__);

(statearr_70861[(1)] = (1));

return statearr_70861;
});
var cljs$core$async$mult_$_state_machine__31524__auto____1 = (function (state_70736){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_70736);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e70864){var ex__31527__auto__ = e70864;
var statearr_70865_72334 = state_70736;
(statearr_70865_72334[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_70736[(4)]))){
var statearr_70866_72336 = state_70736;
(statearr_70866_72336[(1)] = cljs.core.first((state_70736[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72337 = state_70736;
state_70736 = G__72337;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31524__auto__ = function(state_70736){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31524__auto____1.call(this,state_70736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31524__auto____0;
cljs$core$async$mult_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31524__auto____1;
return cljs$core$async$mult_$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_70869 = f__31602__auto__();
(statearr_70869[(6)] = c__31601__auto___72223);

return statearr_70869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70871 = arguments.length;
switch (G__70871) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_72339 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_72339(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_72340 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_72340(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_72341 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_72341(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_72342 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_72342(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_72348 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_72348(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72349 = arguments.length;
var i__5770__auto___72350 = (0);
while(true){
if((i__5770__auto___72350 < len__5769__auto___72349)){
args__5775__auto__.push((arguments[i__5770__auto___72350]));

var G__72351 = (i__5770__auto___72350 + (1));
i__5770__auto___72350 = G__72351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70930){
var map__70931 = p__70930;
var map__70931__$1 = cljs.core.__destructure_map(map__70931);
var opts = map__70931__$1;
var statearr_70932_72353 = state;
(statearr_70932_72353[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70935_72354 = state;
(statearr_70935_72354[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_70938_72356 = state;
(statearr_70938_72356[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70916){
var G__70917 = cljs.core.first(seq70916);
var seq70916__$1 = cljs.core.next(seq70916);
var G__70918 = cljs.core.first(seq70916__$1);
var seq70916__$2 = cljs.core.next(seq70916__$1);
var G__70919 = cljs.core.first(seq70916__$2);
var seq70916__$3 = cljs.core.next(seq70916__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70917,G__70918,G__70919,seq70916__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70955 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70956){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70956 = meta70956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70957,meta70956__$1){
var self__ = this;
var _70957__$1 = this;
return (new cljs.core.async.t_cljs$core$async70955(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70956__$1));
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70957){
var self__ = this;
var _70957__$1 = this;
return self__.meta70956;
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70955.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70956","meta70956",243288286,null)], null);
}));

(cljs.core.async.t_cljs$core$async70955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70955");

(cljs.core.async.t_cljs$core$async70955.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70955.
 */
cljs.core.async.__GT_t_cljs$core$async70955 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70956){
return (new cljs.core.async.t_cljs$core$async70955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70956));
});

}

return (new cljs.core.async.t_cljs$core$async70955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31601__auto___72363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71025){
var state_val_71026 = (state_71025[(1)]);
if((state_val_71026 === (7))){
var inst_70985 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
if(cljs.core.truth_(inst_70985)){
var statearr_71027_72364 = state_71025__$1;
(statearr_71027_72364[(1)] = (8));

} else {
var statearr_71028_72365 = state_71025__$1;
(statearr_71028_72365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (20))){
var inst_70978 = (state_71025[(7)]);
var state_71025__$1 = state_71025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71025__$1,(23),out,inst_70978);
} else {
if((state_val_71026 === (1))){
var inst_70961 = calc_state();
var inst_70962 = cljs.core.__destructure_map(inst_70961);
var inst_70963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70962,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70962,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70962,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70966 = inst_70961;
var state_71025__$1 = (function (){var statearr_71029 = state_71025;
(statearr_71029[(8)] = inst_70966);

(statearr_71029[(9)] = inst_70964);

(statearr_71029[(10)] = inst_70963);

(statearr_71029[(11)] = inst_70965);

return statearr_71029;
})();
var statearr_71030_72366 = state_71025__$1;
(statearr_71030_72366[(2)] = null);

(statearr_71030_72366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (24))){
var inst_70969 = (state_71025[(12)]);
var inst_70966 = inst_70969;
var state_71025__$1 = (function (){var statearr_71031 = state_71025;
(statearr_71031[(8)] = inst_70966);

return statearr_71031;
})();
var statearr_71032_72367 = state_71025__$1;
(statearr_71032_72367[(2)] = null);

(statearr_71032_72367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (4))){
var inst_70980 = (state_71025[(13)]);
var inst_70978 = (state_71025[(7)]);
var inst_70977 = (state_71025[(2)]);
var inst_70978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70977,(0),null);
var inst_70979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70977,(1),null);
var inst_70980__$1 = (inst_70978__$1 == null);
var state_71025__$1 = (function (){var statearr_71033 = state_71025;
(statearr_71033[(14)] = inst_70979);

(statearr_71033[(13)] = inst_70980__$1);

(statearr_71033[(7)] = inst_70978__$1);

return statearr_71033;
})();
if(cljs.core.truth_(inst_70980__$1)){
var statearr_71034_72368 = state_71025__$1;
(statearr_71034_72368[(1)] = (5));

} else {
var statearr_71035_72369 = state_71025__$1;
(statearr_71035_72369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (15))){
var inst_70970 = (state_71025[(15)]);
var inst_70999 = (state_71025[(16)]);
var inst_70999__$1 = cljs.core.empty_QMARK_(inst_70970);
var state_71025__$1 = (function (){var statearr_71036 = state_71025;
(statearr_71036[(16)] = inst_70999__$1);

return statearr_71036;
})();
if(inst_70999__$1){
var statearr_71037_72370 = state_71025__$1;
(statearr_71037_72370[(1)] = (17));

} else {
var statearr_71038_72371 = state_71025__$1;
(statearr_71038_72371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (21))){
var inst_70969 = (state_71025[(12)]);
var inst_70966 = inst_70969;
var state_71025__$1 = (function (){var statearr_71039 = state_71025;
(statearr_71039[(8)] = inst_70966);

return statearr_71039;
})();
var statearr_71040_72372 = state_71025__$1;
(statearr_71040_72372[(2)] = null);

(statearr_71040_72372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (13))){
var inst_70992 = (state_71025[(2)]);
var inst_70993 = calc_state();
var inst_70966 = inst_70993;
var state_71025__$1 = (function (){var statearr_71041 = state_71025;
(statearr_71041[(8)] = inst_70966);

(statearr_71041[(17)] = inst_70992);

return statearr_71041;
})();
var statearr_71042_72373 = state_71025__$1;
(statearr_71042_72373[(2)] = null);

(statearr_71042_72373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (22))){
var inst_71019 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71043_72374 = state_71025__$1;
(statearr_71043_72374[(2)] = inst_71019);

(statearr_71043_72374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (6))){
var inst_70979 = (state_71025[(14)]);
var inst_70983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70979,change);
var state_71025__$1 = state_71025;
var statearr_71046_72375 = state_71025__$1;
(statearr_71046_72375[(2)] = inst_70983);

(statearr_71046_72375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (25))){
var state_71025__$1 = state_71025;
var statearr_71047_72376 = state_71025__$1;
(statearr_71047_72376[(2)] = null);

(statearr_71047_72376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (17))){
var inst_70979 = (state_71025[(14)]);
var inst_70971 = (state_71025[(18)]);
var inst_71001 = (inst_70971.cljs$core$IFn$_invoke$arity$1 ? inst_70971.cljs$core$IFn$_invoke$arity$1(inst_70979) : inst_70971.call(null,inst_70979));
var inst_71002 = cljs.core.not(inst_71001);
var state_71025__$1 = state_71025;
var statearr_71048_72378 = state_71025__$1;
(statearr_71048_72378[(2)] = inst_71002);

(statearr_71048_72378[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (3))){
var inst_71023 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71025__$1,inst_71023);
} else {
if((state_val_71026 === (12))){
var state_71025__$1 = state_71025;
var statearr_71050_72380 = state_71025__$1;
(statearr_71050_72380[(2)] = null);

(statearr_71050_72380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (2))){
var inst_70966 = (state_71025[(8)]);
var inst_70969 = (state_71025[(12)]);
var inst_70969__$1 = cljs.core.__destructure_map(inst_70966);
var inst_70970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71025__$1 = (function (){var statearr_71052 = state_71025;
(statearr_71052[(15)] = inst_70970);

(statearr_71052[(18)] = inst_70971);

(statearr_71052[(12)] = inst_70969__$1);

return statearr_71052;
})();
return cljs.core.async.ioc_alts_BANG_(state_71025__$1,(4),inst_70972);
} else {
if((state_val_71026 === (23))){
var inst_71010 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
if(cljs.core.truth_(inst_71010)){
var statearr_71054_72381 = state_71025__$1;
(statearr_71054_72381[(1)] = (24));

} else {
var statearr_71055_72382 = state_71025__$1;
(statearr_71055_72382[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (19))){
var inst_71005 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71056_72383 = state_71025__$1;
(statearr_71056_72383[(2)] = inst_71005);

(statearr_71056_72383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (11))){
var inst_70979 = (state_71025[(14)]);
var inst_70989 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_70979);
var state_71025__$1 = state_71025;
var statearr_71058_72384 = state_71025__$1;
(statearr_71058_72384[(2)] = inst_70989);

(statearr_71058_72384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (9))){
var inst_70979 = (state_71025[(14)]);
var inst_70996 = (state_71025[(19)]);
var inst_70970 = (state_71025[(15)]);
var inst_70996__$1 = (inst_70970.cljs$core$IFn$_invoke$arity$1 ? inst_70970.cljs$core$IFn$_invoke$arity$1(inst_70979) : inst_70970.call(null,inst_70979));
var state_71025__$1 = (function (){var statearr_71059 = state_71025;
(statearr_71059[(19)] = inst_70996__$1);

return statearr_71059;
})();
if(cljs.core.truth_(inst_70996__$1)){
var statearr_71060_72385 = state_71025__$1;
(statearr_71060_72385[(1)] = (14));

} else {
var statearr_71061_72386 = state_71025__$1;
(statearr_71061_72386[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (5))){
var inst_70980 = (state_71025[(13)]);
var state_71025__$1 = state_71025;
var statearr_71062_72387 = state_71025__$1;
(statearr_71062_72387[(2)] = inst_70980);

(statearr_71062_72387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (14))){
var inst_70996 = (state_71025[(19)]);
var state_71025__$1 = state_71025;
var statearr_71063_72388 = state_71025__$1;
(statearr_71063_72388[(2)] = inst_70996);

(statearr_71063_72388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (26))){
var inst_71015 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71064_72389 = state_71025__$1;
(statearr_71064_72389[(2)] = inst_71015);

(statearr_71064_72389[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (16))){
var inst_71007 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
if(cljs.core.truth_(inst_71007)){
var statearr_71065_72390 = state_71025__$1;
(statearr_71065_72390[(1)] = (20));

} else {
var statearr_71066_72391 = state_71025__$1;
(statearr_71066_72391[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (10))){
var inst_71021 = (state_71025[(2)]);
var state_71025__$1 = state_71025;
var statearr_71067_72392 = state_71025__$1;
(statearr_71067_72392[(2)] = inst_71021);

(statearr_71067_72392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (18))){
var inst_70999 = (state_71025[(16)]);
var state_71025__$1 = state_71025;
var statearr_71069_72393 = state_71025__$1;
(statearr_71069_72393[(2)] = inst_70999);

(statearr_71069_72393[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71026 === (8))){
var inst_70978 = (state_71025[(7)]);
var inst_70987 = (inst_70978 == null);
var state_71025__$1 = state_71025;
if(cljs.core.truth_(inst_70987)){
var statearr_71070_72394 = state_71025__$1;
(statearr_71070_72394[(1)] = (11));

} else {
var statearr_71071_72395 = state_71025__$1;
(statearr_71071_72395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31524__auto__ = null;
var cljs$core$async$mix_$_state_machine__31524__auto____0 = (function (){
var statearr_71072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71072[(0)] = cljs$core$async$mix_$_state_machine__31524__auto__);

(statearr_71072[(1)] = (1));

return statearr_71072;
});
var cljs$core$async$mix_$_state_machine__31524__auto____1 = (function (state_71025){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71025);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71073){var ex__31527__auto__ = e71073;
var statearr_71074_72396 = state_71025;
(statearr_71074_72396[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71025[(4)]))){
var statearr_71075_72397 = state_71025;
(statearr_71075_72397[(1)] = cljs.core.first((state_71025[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72398 = state_71025;
state_71025 = G__72398;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31524__auto__ = function(state_71025){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31524__auto____1.call(this,state_71025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31524__auto____0;
cljs$core$async$mix_$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31524__auto____1;
return cljs$core$async$mix_$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71076 = f__31602__auto__();
(statearr_71076[(6)] = c__31601__auto___72363);

return statearr_71076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_72399 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_72399(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_72401 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_72401(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_72410 = (function() {
var G__72411 = null;
var G__72411__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__72411__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__72411 = function(p,v){
switch(arguments.length){
case 1:
return G__72411__1.call(this,p);
case 2:
return G__72411__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72411.cljs$core$IFn$_invoke$arity$1 = G__72411__1;
G__72411.cljs$core$IFn$_invoke$arity$2 = G__72411__2;
return G__72411;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__71096 = arguments.length;
switch (G__71096) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72410(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72410(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71103 = arguments.length;
switch (G__71103) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__71101_SHARP_){
if(cljs.core.truth_((p1__71101_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__71101_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__71101_SHARP_.call(null,topic)))){
return p1__71101_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71101_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71109 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71110){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71110 = meta71110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71111,meta71110__$1){
var self__ = this;
var _71111__$1 = this;
return (new cljs.core.async.t_cljs$core$async71109(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71110__$1));
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71111){
var self__ = this;
var _71111__$1 = this;
return self__.meta71110;
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async71109.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async71109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71110","meta71110",-197297847,null)], null);
}));

(cljs.core.async.t_cljs$core$async71109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71109");

(cljs.core.async.t_cljs$core$async71109.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71109.
 */
cljs.core.async.__GT_t_cljs$core$async71109 = (function cljs$core$async$__GT_t_cljs$core$async71109(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71110){
return (new cljs.core.async.t_cljs$core$async71109(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71110));
});

}

return (new cljs.core.async.t_cljs$core$async71109(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31601__auto___72423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71190){
var state_val_71191 = (state_71190[(1)]);
if((state_val_71191 === (7))){
var inst_71186 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71194_72425 = state_71190__$1;
(statearr_71194_72425[(2)] = inst_71186);

(statearr_71194_72425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (20))){
var state_71190__$1 = state_71190;
var statearr_71195_72426 = state_71190__$1;
(statearr_71195_72426[(2)] = null);

(statearr_71195_72426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (1))){
var state_71190__$1 = state_71190;
var statearr_71197_72427 = state_71190__$1;
(statearr_71197_72427[(2)] = null);

(statearr_71197_72427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (24))){
var inst_71169 = (state_71190[(7)]);
var inst_71178 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_71169);
var state_71190__$1 = state_71190;
var statearr_71199_72431 = state_71190__$1;
(statearr_71199_72431[(2)] = inst_71178);

(statearr_71199_72431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (4))){
var inst_71121 = (state_71190[(8)]);
var inst_71121__$1 = (state_71190[(2)]);
var inst_71122 = (inst_71121__$1 == null);
var state_71190__$1 = (function (){var statearr_71200 = state_71190;
(statearr_71200[(8)] = inst_71121__$1);

return statearr_71200;
})();
if(cljs.core.truth_(inst_71122)){
var statearr_71201_72432 = state_71190__$1;
(statearr_71201_72432[(1)] = (5));

} else {
var statearr_71202_72433 = state_71190__$1;
(statearr_71202_72433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (15))){
var inst_71163 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71203_72437 = state_71190__$1;
(statearr_71203_72437[(2)] = inst_71163);

(statearr_71203_72437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (21))){
var inst_71183 = (state_71190[(2)]);
var state_71190__$1 = (function (){var statearr_71204 = state_71190;
(statearr_71204[(9)] = inst_71183);

return statearr_71204;
})();
var statearr_71205_72438 = state_71190__$1;
(statearr_71205_72438[(2)] = null);

(statearr_71205_72438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (13))){
var inst_71145 = (state_71190[(10)]);
var inst_71147 = cljs.core.chunked_seq_QMARK_(inst_71145);
var state_71190__$1 = state_71190;
if(inst_71147){
var statearr_71206_72439 = state_71190__$1;
(statearr_71206_72439[(1)] = (16));

} else {
var statearr_71207_72440 = state_71190__$1;
(statearr_71207_72440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (22))){
var inst_71175 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
if(cljs.core.truth_(inst_71175)){
var statearr_71208_72441 = state_71190__$1;
(statearr_71208_72441[(1)] = (23));

} else {
var statearr_71209_72442 = state_71190__$1;
(statearr_71209_72442[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (6))){
var inst_71121 = (state_71190[(8)]);
var inst_71171 = (state_71190[(11)]);
var inst_71169 = (state_71190[(7)]);
var inst_71169__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_71121) : topic_fn.call(null,inst_71121));
var inst_71170 = cljs.core.deref(mults);
var inst_71171__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71170,inst_71169__$1);
var state_71190__$1 = (function (){var statearr_71212 = state_71190;
(statearr_71212[(11)] = inst_71171__$1);

(statearr_71212[(7)] = inst_71169__$1);

return statearr_71212;
})();
if(cljs.core.truth_(inst_71171__$1)){
var statearr_71213_72446 = state_71190__$1;
(statearr_71213_72446[(1)] = (19));

} else {
var statearr_71214_72447 = state_71190__$1;
(statearr_71214_72447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (25))){
var inst_71180 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71215_72451 = state_71190__$1;
(statearr_71215_72451[(2)] = inst_71180);

(statearr_71215_72451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (17))){
var inst_71145 = (state_71190[(10)]);
var inst_71154 = cljs.core.first(inst_71145);
var inst_71155 = cljs.core.async.muxch_STAR_(inst_71154);
var inst_71156 = cljs.core.async.close_BANG_(inst_71155);
var inst_71157 = cljs.core.next(inst_71145);
var inst_71131 = inst_71157;
var inst_71132 = null;
var inst_71133 = (0);
var inst_71134 = (0);
var state_71190__$1 = (function (){var statearr_71216 = state_71190;
(statearr_71216[(12)] = inst_71156);

(statearr_71216[(13)] = inst_71132);

(statearr_71216[(14)] = inst_71133);

(statearr_71216[(15)] = inst_71134);

(statearr_71216[(16)] = inst_71131);

return statearr_71216;
})();
var statearr_71217_72456 = state_71190__$1;
(statearr_71217_72456[(2)] = null);

(statearr_71217_72456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (3))){
var inst_71188 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71190__$1,inst_71188);
} else {
if((state_val_71191 === (12))){
var inst_71165 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71219_72457 = state_71190__$1;
(statearr_71219_72457[(2)] = inst_71165);

(statearr_71219_72457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (2))){
var state_71190__$1 = state_71190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71190__$1,(4),ch);
} else {
if((state_val_71191 === (23))){
var state_71190__$1 = state_71190;
var statearr_71223_72458 = state_71190__$1;
(statearr_71223_72458[(2)] = null);

(statearr_71223_72458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (19))){
var inst_71121 = (state_71190[(8)]);
var inst_71171 = (state_71190[(11)]);
var inst_71173 = cljs.core.async.muxch_STAR_(inst_71171);
var state_71190__$1 = state_71190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71190__$1,(22),inst_71173,inst_71121);
} else {
if((state_val_71191 === (11))){
var inst_71145 = (state_71190[(10)]);
var inst_71131 = (state_71190[(16)]);
var inst_71145__$1 = cljs.core.seq(inst_71131);
var state_71190__$1 = (function (){var statearr_71224 = state_71190;
(statearr_71224[(10)] = inst_71145__$1);

return statearr_71224;
})();
if(inst_71145__$1){
var statearr_71225_72460 = state_71190__$1;
(statearr_71225_72460[(1)] = (13));

} else {
var statearr_71226_72461 = state_71190__$1;
(statearr_71226_72461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (9))){
var inst_71167 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71227_72463 = state_71190__$1;
(statearr_71227_72463[(2)] = inst_71167);

(statearr_71227_72463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (5))){
var inst_71128 = cljs.core.deref(mults);
var inst_71129 = cljs.core.vals(inst_71128);
var inst_71130 = cljs.core.seq(inst_71129);
var inst_71131 = inst_71130;
var inst_71132 = null;
var inst_71133 = (0);
var inst_71134 = (0);
var state_71190__$1 = (function (){var statearr_71228 = state_71190;
(statearr_71228[(13)] = inst_71132);

(statearr_71228[(14)] = inst_71133);

(statearr_71228[(15)] = inst_71134);

(statearr_71228[(16)] = inst_71131);

return statearr_71228;
})();
var statearr_71229_72464 = state_71190__$1;
(statearr_71229_72464[(2)] = null);

(statearr_71229_72464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (14))){
var state_71190__$1 = state_71190;
var statearr_71233_72465 = state_71190__$1;
(statearr_71233_72465[(2)] = null);

(statearr_71233_72465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (16))){
var inst_71145 = (state_71190[(10)]);
var inst_71149 = cljs.core.chunk_first(inst_71145);
var inst_71150 = cljs.core.chunk_rest(inst_71145);
var inst_71151 = cljs.core.count(inst_71149);
var inst_71131 = inst_71150;
var inst_71132 = inst_71149;
var inst_71133 = inst_71151;
var inst_71134 = (0);
var state_71190__$1 = (function (){var statearr_71235 = state_71190;
(statearr_71235[(13)] = inst_71132);

(statearr_71235[(14)] = inst_71133);

(statearr_71235[(15)] = inst_71134);

(statearr_71235[(16)] = inst_71131);

return statearr_71235;
})();
var statearr_71236_72467 = state_71190__$1;
(statearr_71236_72467[(2)] = null);

(statearr_71236_72467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (10))){
var inst_71132 = (state_71190[(13)]);
var inst_71133 = (state_71190[(14)]);
var inst_71134 = (state_71190[(15)]);
var inst_71131 = (state_71190[(16)]);
var inst_71139 = cljs.core._nth(inst_71132,inst_71134);
var inst_71140 = cljs.core.async.muxch_STAR_(inst_71139);
var inst_71141 = cljs.core.async.close_BANG_(inst_71140);
var inst_71142 = (inst_71134 + (1));
var tmp71230 = inst_71132;
var tmp71231 = inst_71133;
var tmp71232 = inst_71131;
var inst_71131__$1 = tmp71232;
var inst_71132__$1 = tmp71230;
var inst_71133__$1 = tmp71231;
var inst_71134__$1 = inst_71142;
var state_71190__$1 = (function (){var statearr_71237 = state_71190;
(statearr_71237[(13)] = inst_71132__$1);

(statearr_71237[(14)] = inst_71133__$1);

(statearr_71237[(15)] = inst_71134__$1);

(statearr_71237[(17)] = inst_71141);

(statearr_71237[(16)] = inst_71131__$1);

return statearr_71237;
})();
var statearr_71239_72469 = state_71190__$1;
(statearr_71239_72469[(2)] = null);

(statearr_71239_72469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (18))){
var inst_71160 = (state_71190[(2)]);
var state_71190__$1 = state_71190;
var statearr_71242_72470 = state_71190__$1;
(statearr_71242_72470[(2)] = inst_71160);

(statearr_71242_72470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71191 === (8))){
var inst_71133 = (state_71190[(14)]);
var inst_71134 = (state_71190[(15)]);
var inst_71136 = (inst_71134 < inst_71133);
var inst_71137 = inst_71136;
var state_71190__$1 = state_71190;
if(cljs.core.truth_(inst_71137)){
var statearr_71243_72471 = state_71190__$1;
(statearr_71243_72471[(1)] = (10));

} else {
var statearr_71244_72472 = state_71190__$1;
(statearr_71244_72472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71246[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71246[(1)] = (1));

return statearr_71246;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71190){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71190);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71248){var ex__31527__auto__ = e71248;
var statearr_71249_72474 = state_71190;
(statearr_71249_72474[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71190[(4)]))){
var statearr_71250_72475 = state_71190;
(statearr_71250_72475[(1)] = cljs.core.first((state_71190[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72477 = state_71190;
state_71190 = G__72477;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71251 = f__31602__auto__();
(statearr_71251[(6)] = c__31601__auto___72423);

return statearr_71251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71254 = arguments.length;
switch (G__71254) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71261 = arguments.length;
switch (G__71261) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71263 = arguments.length;
switch (G__71263) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31601__auto___72484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71317){
var state_val_71318 = (state_71317[(1)]);
if((state_val_71318 === (7))){
var state_71317__$1 = state_71317;
var statearr_71319_72486 = state_71317__$1;
(statearr_71319_72486[(2)] = null);

(statearr_71319_72486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (1))){
var state_71317__$1 = state_71317;
var statearr_71320_72487 = state_71317__$1;
(statearr_71320_72487[(2)] = null);

(statearr_71320_72487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (4))){
var inst_71275 = (state_71317[(7)]);
var inst_71277 = (state_71317[(8)]);
var inst_71280 = (inst_71277 < inst_71275);
var state_71317__$1 = state_71317;
if(cljs.core.truth_(inst_71280)){
var statearr_71321_72488 = state_71317__$1;
(statearr_71321_72488[(1)] = (6));

} else {
var statearr_71322_72489 = state_71317__$1;
(statearr_71322_72489[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (15))){
var inst_71303 = (state_71317[(9)]);
var inst_71308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_71303);
var state_71317__$1 = state_71317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71317__$1,(17),out,inst_71308);
} else {
if((state_val_71318 === (13))){
var inst_71303 = (state_71317[(9)]);
var inst_71303__$1 = (state_71317[(2)]);
var inst_71304 = cljs.core.some(cljs.core.nil_QMARK_,inst_71303__$1);
var state_71317__$1 = (function (){var statearr_71324 = state_71317;
(statearr_71324[(9)] = inst_71303__$1);

return statearr_71324;
})();
if(cljs.core.truth_(inst_71304)){
var statearr_71325_72490 = state_71317__$1;
(statearr_71325_72490[(1)] = (14));

} else {
var statearr_71327_72491 = state_71317__$1;
(statearr_71327_72491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (6))){
var state_71317__$1 = state_71317;
var statearr_71328_72496 = state_71317__$1;
(statearr_71328_72496[(2)] = null);

(statearr_71328_72496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (17))){
var inst_71310 = (state_71317[(2)]);
var state_71317__$1 = (function (){var statearr_71331 = state_71317;
(statearr_71331[(10)] = inst_71310);

return statearr_71331;
})();
var statearr_71332_72497 = state_71317__$1;
(statearr_71332_72497[(2)] = null);

(statearr_71332_72497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (3))){
var inst_71315 = (state_71317[(2)]);
var state_71317__$1 = state_71317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71317__$1,inst_71315);
} else {
if((state_val_71318 === (12))){
var _ = (function (){var statearr_71334 = state_71317;
(statearr_71334[(4)] = cljs.core.rest((state_71317[(4)])));

return statearr_71334;
})();
var state_71317__$1 = state_71317;
var ex71329 = (state_71317__$1[(2)]);
var statearr_71335_72498 = state_71317__$1;
(statearr_71335_72498[(5)] = ex71329);


if((ex71329 instanceof Object)){
var statearr_71336_72499 = state_71317__$1;
(statearr_71336_72499[(1)] = (11));

(statearr_71336_72499[(5)] = null);

} else {
throw ex71329;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (2))){
var inst_71274 = cljs.core.reset_BANG_(dctr,cnt);
var inst_71275 = cnt;
var inst_71277 = (0);
var state_71317__$1 = (function (){var statearr_71338 = state_71317;
(statearr_71338[(7)] = inst_71275);

(statearr_71338[(11)] = inst_71274);

(statearr_71338[(8)] = inst_71277);

return statearr_71338;
})();
var statearr_71339_72500 = state_71317__$1;
(statearr_71339_72500[(2)] = null);

(statearr_71339_72500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (11))){
var inst_71282 = (state_71317[(2)]);
var inst_71283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_71317__$1 = (function (){var statearr_71341 = state_71317;
(statearr_71341[(12)] = inst_71282);

return statearr_71341;
})();
var statearr_71342_72501 = state_71317__$1;
(statearr_71342_72501[(2)] = inst_71283);

(statearr_71342_72501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (9))){
var inst_71277 = (state_71317[(8)]);
var _ = (function (){var statearr_71344 = state_71317;
(statearr_71344[(4)] = cljs.core.cons((12),(state_71317[(4)])));

return statearr_71344;
})();
var inst_71289 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_71277) : chs__$1.call(null,inst_71277));
var inst_71290 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_71277) : done.call(null,inst_71277));
var inst_71291 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71289,inst_71290);
var ___$1 = (function (){var statearr_71345 = state_71317;
(statearr_71345[(4)] = cljs.core.rest((state_71317[(4)])));

return statearr_71345;
})();
var state_71317__$1 = state_71317;
var statearr_71346_72502 = state_71317__$1;
(statearr_71346_72502[(2)] = inst_71291);

(statearr_71346_72502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (5))){
var inst_71301 = (state_71317[(2)]);
var state_71317__$1 = (function (){var statearr_71347 = state_71317;
(statearr_71347[(13)] = inst_71301);

return statearr_71347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71317__$1,(13),dchan);
} else {
if((state_val_71318 === (14))){
var inst_71306 = cljs.core.async.close_BANG_(out);
var state_71317__$1 = state_71317;
var statearr_71348_72508 = state_71317__$1;
(statearr_71348_72508[(2)] = inst_71306);

(statearr_71348_72508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (16))){
var inst_71313 = (state_71317[(2)]);
var state_71317__$1 = state_71317;
var statearr_71349_72510 = state_71317__$1;
(statearr_71349_72510[(2)] = inst_71313);

(statearr_71349_72510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (10))){
var inst_71277 = (state_71317[(8)]);
var inst_71294 = (state_71317[(2)]);
var inst_71295 = (inst_71277 + (1));
var inst_71277__$1 = inst_71295;
var state_71317__$1 = (function (){var statearr_71351 = state_71317;
(statearr_71351[(14)] = inst_71294);

(statearr_71351[(8)] = inst_71277__$1);

return statearr_71351;
})();
var statearr_71352_72512 = state_71317__$1;
(statearr_71352_72512[(2)] = null);

(statearr_71352_72512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71318 === (8))){
var inst_71299 = (state_71317[(2)]);
var state_71317__$1 = state_71317;
var statearr_71353_72513 = state_71317__$1;
(statearr_71353_72513[(2)] = inst_71299);

(statearr_71353_72513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71362[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71362[(1)] = (1));

return statearr_71362;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71317){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71317);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71363){var ex__31527__auto__ = e71363;
var statearr_71364_72514 = state_71317;
(statearr_71364_72514[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71317[(4)]))){
var statearr_71365_72515 = state_71317;
(statearr_71365_72515[(1)] = cljs.core.first((state_71317[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72516 = state_71317;
state_71317 = G__72516;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71366 = f__31602__auto__();
(statearr_71366[(6)] = c__31601__auto___72484);

return statearr_71366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71369 = arguments.length;
switch (G__71369) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71402){
var state_val_71403 = (state_71402[(1)]);
if((state_val_71403 === (7))){
var inst_71382 = (state_71402[(7)]);
var inst_71381 = (state_71402[(8)]);
var inst_71381__$1 = (state_71402[(2)]);
var inst_71382__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71381__$1,(0),null);
var inst_71383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71381__$1,(1),null);
var inst_71384 = (inst_71382__$1 == null);
var state_71402__$1 = (function (){var statearr_71404 = state_71402;
(statearr_71404[(7)] = inst_71382__$1);

(statearr_71404[(8)] = inst_71381__$1);

(statearr_71404[(9)] = inst_71383);

return statearr_71404;
})();
if(cljs.core.truth_(inst_71384)){
var statearr_71405_72520 = state_71402__$1;
(statearr_71405_72520[(1)] = (8));

} else {
var statearr_71406_72521 = state_71402__$1;
(statearr_71406_72521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (1))){
var inst_71371 = cljs.core.vec(chs);
var inst_71372 = inst_71371;
var state_71402__$1 = (function (){var statearr_71407 = state_71402;
(statearr_71407[(10)] = inst_71372);

return statearr_71407;
})();
var statearr_71408_72522 = state_71402__$1;
(statearr_71408_72522[(2)] = null);

(statearr_71408_72522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (4))){
var inst_71372 = (state_71402[(10)]);
var state_71402__$1 = state_71402;
return cljs.core.async.ioc_alts_BANG_(state_71402__$1,(7),inst_71372);
} else {
if((state_val_71403 === (6))){
var inst_71398 = (state_71402[(2)]);
var state_71402__$1 = state_71402;
var statearr_71409_72527 = state_71402__$1;
(statearr_71409_72527[(2)] = inst_71398);

(statearr_71409_72527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (3))){
var inst_71400 = (state_71402[(2)]);
var state_71402__$1 = state_71402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71402__$1,inst_71400);
} else {
if((state_val_71403 === (2))){
var inst_71372 = (state_71402[(10)]);
var inst_71374 = cljs.core.count(inst_71372);
var inst_71375 = (inst_71374 > (0));
var state_71402__$1 = state_71402;
if(cljs.core.truth_(inst_71375)){
var statearr_71412_72528 = state_71402__$1;
(statearr_71412_72528[(1)] = (4));

} else {
var statearr_71413_72529 = state_71402__$1;
(statearr_71413_72529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (11))){
var inst_71372 = (state_71402[(10)]);
var inst_71391 = (state_71402[(2)]);
var tmp71410 = inst_71372;
var inst_71372__$1 = tmp71410;
var state_71402__$1 = (function (){var statearr_71414 = state_71402;
(statearr_71414[(11)] = inst_71391);

(statearr_71414[(10)] = inst_71372__$1);

return statearr_71414;
})();
var statearr_71415_72530 = state_71402__$1;
(statearr_71415_72530[(2)] = null);

(statearr_71415_72530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (9))){
var inst_71382 = (state_71402[(7)]);
var state_71402__$1 = state_71402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71402__$1,(11),out,inst_71382);
} else {
if((state_val_71403 === (5))){
var inst_71396 = cljs.core.async.close_BANG_(out);
var state_71402__$1 = state_71402;
var statearr_71416_72531 = state_71402__$1;
(statearr_71416_72531[(2)] = inst_71396);

(statearr_71416_72531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (10))){
var inst_71394 = (state_71402[(2)]);
var state_71402__$1 = state_71402;
var statearr_71417_72533 = state_71402__$1;
(statearr_71417_72533[(2)] = inst_71394);

(statearr_71417_72533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71403 === (8))){
var inst_71382 = (state_71402[(7)]);
var inst_71381 = (state_71402[(8)]);
var inst_71372 = (state_71402[(10)]);
var inst_71383 = (state_71402[(9)]);
var inst_71386 = (function (){var cs = inst_71372;
var vec__71377 = inst_71381;
var v = inst_71382;
var c = inst_71383;
return (function (p1__71367_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__71367_SHARP_);
});
})();
var inst_71387 = cljs.core.filterv(inst_71386,inst_71372);
var inst_71372__$1 = inst_71387;
var state_71402__$1 = (function (){var statearr_71418 = state_71402;
(statearr_71418[(10)] = inst_71372__$1);

return statearr_71418;
})();
var statearr_71419_72534 = state_71402__$1;
(statearr_71419_72534[(2)] = null);

(statearr_71419_72534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71420[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71420[(1)] = (1));

return statearr_71420;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71402){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71402);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71421){var ex__31527__auto__ = e71421;
var statearr_71422_72535 = state_71402;
(statearr_71422_72535[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71402[(4)]))){
var statearr_71423_72536 = state_71402;
(statearr_71423_72536[(1)] = cljs.core.first((state_71402[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72537 = state_71402;
state_71402 = G__72537;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71424 = f__31602__auto__();
(statearr_71424[(6)] = c__31601__auto___72519);

return statearr_71424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71427 = arguments.length;
switch (G__71427) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71453){
var state_val_71454 = (state_71453[(1)]);
if((state_val_71454 === (7))){
var inst_71433 = (state_71453[(7)]);
var inst_71433__$1 = (state_71453[(2)]);
var inst_71435 = (inst_71433__$1 == null);
var inst_71436 = cljs.core.not(inst_71435);
var state_71453__$1 = (function (){var statearr_71455 = state_71453;
(statearr_71455[(7)] = inst_71433__$1);

return statearr_71455;
})();
if(inst_71436){
var statearr_71456_72541 = state_71453__$1;
(statearr_71456_72541[(1)] = (8));

} else {
var statearr_71457_72542 = state_71453__$1;
(statearr_71457_72542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (1))){
var inst_71428 = (0);
var state_71453__$1 = (function (){var statearr_71458 = state_71453;
(statearr_71458[(8)] = inst_71428);

return statearr_71458;
})();
var statearr_71459_72543 = state_71453__$1;
(statearr_71459_72543[(2)] = null);

(statearr_71459_72543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (4))){
var state_71453__$1 = state_71453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71453__$1,(7),ch);
} else {
if((state_val_71454 === (6))){
var inst_71448 = (state_71453[(2)]);
var state_71453__$1 = state_71453;
var statearr_71460_72544 = state_71453__$1;
(statearr_71460_72544[(2)] = inst_71448);

(statearr_71460_72544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (3))){
var inst_71450 = (state_71453[(2)]);
var inst_71451 = cljs.core.async.close_BANG_(out);
var state_71453__$1 = (function (){var statearr_71461 = state_71453;
(statearr_71461[(9)] = inst_71450);

return statearr_71461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71453__$1,inst_71451);
} else {
if((state_val_71454 === (2))){
var inst_71428 = (state_71453[(8)]);
var inst_71430 = (inst_71428 < n);
var state_71453__$1 = state_71453;
if(cljs.core.truth_(inst_71430)){
var statearr_71462_72545 = state_71453__$1;
(statearr_71462_72545[(1)] = (4));

} else {
var statearr_71463_72546 = state_71453__$1;
(statearr_71463_72546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (11))){
var inst_71428 = (state_71453[(8)]);
var inst_71440 = (state_71453[(2)]);
var inst_71441 = (inst_71428 + (1));
var inst_71428__$1 = inst_71441;
var state_71453__$1 = (function (){var statearr_71464 = state_71453;
(statearr_71464[(10)] = inst_71440);

(statearr_71464[(8)] = inst_71428__$1);

return statearr_71464;
})();
var statearr_71465_72547 = state_71453__$1;
(statearr_71465_72547[(2)] = null);

(statearr_71465_72547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (9))){
var state_71453__$1 = state_71453;
var statearr_71466_72548 = state_71453__$1;
(statearr_71466_72548[(2)] = null);

(statearr_71466_72548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (5))){
var state_71453__$1 = state_71453;
var statearr_71467_72549 = state_71453__$1;
(statearr_71467_72549[(2)] = null);

(statearr_71467_72549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (10))){
var inst_71445 = (state_71453[(2)]);
var state_71453__$1 = state_71453;
var statearr_71468_72550 = state_71453__$1;
(statearr_71468_72550[(2)] = inst_71445);

(statearr_71468_72550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71454 === (8))){
var inst_71433 = (state_71453[(7)]);
var state_71453__$1 = state_71453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71453__$1,(11),out,inst_71433);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71469[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71469[(1)] = (1));

return statearr_71469;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71453){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71453);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71470){var ex__31527__auto__ = e71470;
var statearr_71471_72552 = state_71453;
(statearr_71471_72552[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71453[(4)]))){
var statearr_71472_72553 = state_71453;
(statearr_71472_72553[(1)] = cljs.core.first((state_71453[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72556 = state_71453;
state_71453 = G__72556;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71473 = f__31602__auto__();
(statearr_71473[(6)] = c__31601__auto___72540);

return statearr_71473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71475 = (function (f,ch,meta71476){
this.f = f;
this.ch = ch;
this.meta71476 = meta71476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71477,meta71476__$1){
var self__ = this;
var _71477__$1 = this;
return (new cljs.core.async.t_cljs$core$async71475(self__.f,self__.ch,meta71476__$1));
}));

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71477){
var self__ = this;
var _71477__$1 = this;
return self__.meta71476;
}));

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71478 = (function (f,ch,meta71476,_,fn1,meta71479){
this.f = f;
this.ch = ch;
this.meta71476 = meta71476;
this._ = _;
this.fn1 = fn1;
this.meta71479 = meta71479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71480,meta71479__$1){
var self__ = this;
var _71480__$1 = this;
return (new cljs.core.async.t_cljs$core$async71478(self__.f,self__.ch,self__.meta71476,self__._,self__.fn1,meta71479__$1));
}));

(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71480){
var self__ = this;
var _71480__$1 = this;
return self__.meta71479;
}));

(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__71474_SHARP_){
var G__71485 = (((p1__71474_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__71474_SHARP_) : self__.f.call(null,p1__71474_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__71485) : f1.call(null,G__71485));
});
}));

(cljs.core.async.t_cljs$core$async71478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71476","meta71476",682057849,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71475","cljs.core.async/t_cljs$core$async71475",-980307401,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71479","meta71479",566583227,null)], null);
}));

(cljs.core.async.t_cljs$core$async71478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71478");

(cljs.core.async.t_cljs$core$async71478.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71478.
 */
cljs.core.async.__GT_t_cljs$core$async71478 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71478(f__$1,ch__$1,meta71476__$1,___$2,fn1__$1,meta71479){
return (new cljs.core.async.t_cljs$core$async71478(f__$1,ch__$1,meta71476__$1,___$2,fn1__$1,meta71479));
});

}

return (new cljs.core.async.t_cljs$core$async71478(self__.f,self__.ch,self__.meta71476,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__71486 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__71486) : self__.f.call(null,G__71486));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async71475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71476","meta71476",682057849,null)], null);
}));

(cljs.core.async.t_cljs$core$async71475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71475");

(cljs.core.async.t_cljs$core$async71475.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71475.
 */
cljs.core.async.__GT_t_cljs$core$async71475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71475(f__$1,ch__$1,meta71476){
return (new cljs.core.async.t_cljs$core$async71475(f__$1,ch__$1,meta71476));
});

}

return (new cljs.core.async.t_cljs$core$async71475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71487 = (function (f,ch,meta71488){
this.f = f;
this.ch = ch;
this.meta71488 = meta71488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71489,meta71488__$1){
var self__ = this;
var _71489__$1 = this;
return (new cljs.core.async.t_cljs$core$async71487(self__.f,self__.ch,meta71488__$1));
}));

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71489){
var self__ = this;
var _71489__$1 = this;
return self__.meta71488;
}));

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async71487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71488","meta71488",706000393,null)], null);
}));

(cljs.core.async.t_cljs$core$async71487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71487");

(cljs.core.async.t_cljs$core$async71487.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71487.
 */
cljs.core.async.__GT_t_cljs$core$async71487 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71487(f__$1,ch__$1,meta71488){
return (new cljs.core.async.t_cljs$core$async71487(f__$1,ch__$1,meta71488));
});

}

return (new cljs.core.async.t_cljs$core$async71487(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71490 = (function (p,ch,meta71491){
this.p = p;
this.ch = ch;
this.meta71491 = meta71491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71492,meta71491__$1){
var self__ = this;
var _71492__$1 = this;
return (new cljs.core.async.t_cljs$core$async71490(self__.p,self__.ch,meta71491__$1));
}));

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71492){
var self__ = this;
var _71492__$1 = this;
return self__.meta71491;
}));

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async71490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71491","meta71491",1572216225,null)], null);
}));

(cljs.core.async.t_cljs$core$async71490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71490");

(cljs.core.async.t_cljs$core$async71490.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71490.
 */
cljs.core.async.__GT_t_cljs$core$async71490 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71490(p__$1,ch__$1,meta71491){
return (new cljs.core.async.t_cljs$core$async71490(p__$1,ch__$1,meta71491));
});

}

return (new cljs.core.async.t_cljs$core$async71490(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71514 = arguments.length;
switch (G__71514) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71538){
var state_val_71539 = (state_71538[(1)]);
if((state_val_71539 === (7))){
var inst_71534 = (state_71538[(2)]);
var state_71538__$1 = state_71538;
var statearr_71543_72567 = state_71538__$1;
(statearr_71543_72567[(2)] = inst_71534);

(statearr_71543_72567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (1))){
var state_71538__$1 = state_71538;
var statearr_71544_72569 = state_71538__$1;
(statearr_71544_72569[(2)] = null);

(statearr_71544_72569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (4))){
var inst_71520 = (state_71538[(7)]);
var inst_71520__$1 = (state_71538[(2)]);
var inst_71521 = (inst_71520__$1 == null);
var state_71538__$1 = (function (){var statearr_71546 = state_71538;
(statearr_71546[(7)] = inst_71520__$1);

return statearr_71546;
})();
if(cljs.core.truth_(inst_71521)){
var statearr_71548_72570 = state_71538__$1;
(statearr_71548_72570[(1)] = (5));

} else {
var statearr_71549_72571 = state_71538__$1;
(statearr_71549_72571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (6))){
var inst_71520 = (state_71538[(7)]);
var inst_71525 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71520) : p.call(null,inst_71520));
var state_71538__$1 = state_71538;
if(cljs.core.truth_(inst_71525)){
var statearr_71550_72572 = state_71538__$1;
(statearr_71550_72572[(1)] = (8));

} else {
var statearr_71551_72573 = state_71538__$1;
(statearr_71551_72573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (3))){
var inst_71536 = (state_71538[(2)]);
var state_71538__$1 = state_71538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71538__$1,inst_71536);
} else {
if((state_val_71539 === (2))){
var state_71538__$1 = state_71538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71538__$1,(4),ch);
} else {
if((state_val_71539 === (11))){
var inst_71528 = (state_71538[(2)]);
var state_71538__$1 = state_71538;
var statearr_71553_72574 = state_71538__$1;
(statearr_71553_72574[(2)] = inst_71528);

(statearr_71553_72574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (9))){
var state_71538__$1 = state_71538;
var statearr_71555_72575 = state_71538__$1;
(statearr_71555_72575[(2)] = null);

(statearr_71555_72575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (5))){
var inst_71523 = cljs.core.async.close_BANG_(out);
var state_71538__$1 = state_71538;
var statearr_71556_72576 = state_71538__$1;
(statearr_71556_72576[(2)] = inst_71523);

(statearr_71556_72576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (10))){
var inst_71531 = (state_71538[(2)]);
var state_71538__$1 = (function (){var statearr_71557 = state_71538;
(statearr_71557[(8)] = inst_71531);

return statearr_71557;
})();
var statearr_71558_72578 = state_71538__$1;
(statearr_71558_72578[(2)] = null);

(statearr_71558_72578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71539 === (8))){
var inst_71520 = (state_71538[(7)]);
var state_71538__$1 = state_71538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71538__$1,(11),out,inst_71520);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71565 = [null,null,null,null,null,null,null,null,null];
(statearr_71565[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71565[(1)] = (1));

return statearr_71565;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71538){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71538);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71566){var ex__31527__auto__ = e71566;
var statearr_71567_72580 = state_71538;
(statearr_71567_72580[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71538[(4)]))){
var statearr_71569_72581 = state_71538;
(statearr_71569_72581[(1)] = cljs.core.first((state_71538[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72583 = state_71538;
state_71538 = G__72583;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71571 = f__31602__auto__();
(statearr_71571[(6)] = c__31601__auto___72566);

return statearr_71571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71574 = arguments.length;
switch (G__71574) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71658){
var state_val_71659 = (state_71658[(1)]);
if((state_val_71659 === (7))){
var inst_71654 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
var statearr_71661_72588 = state_71658__$1;
(statearr_71661_72588[(2)] = inst_71654);

(statearr_71661_72588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (20))){
var inst_71622 = (state_71658[(7)]);
var inst_71634 = (state_71658[(2)]);
var inst_71635 = cljs.core.next(inst_71622);
var inst_71607 = inst_71635;
var inst_71608 = null;
var inst_71609 = (0);
var inst_71610 = (0);
var state_71658__$1 = (function (){var statearr_71662 = state_71658;
(statearr_71662[(8)] = inst_71607);

(statearr_71662[(9)] = inst_71608);

(statearr_71662[(10)] = inst_71609);

(statearr_71662[(11)] = inst_71634);

(statearr_71662[(12)] = inst_71610);

return statearr_71662;
})();
var statearr_71663_72589 = state_71658__$1;
(statearr_71663_72589[(2)] = null);

(statearr_71663_72589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (1))){
var state_71658__$1 = state_71658;
var statearr_71664_72590 = state_71658__$1;
(statearr_71664_72590[(2)] = null);

(statearr_71664_72590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (4))){
var inst_71591 = (state_71658[(13)]);
var inst_71591__$1 = (state_71658[(2)]);
var inst_71593 = (inst_71591__$1 == null);
var state_71658__$1 = (function (){var statearr_71665 = state_71658;
(statearr_71665[(13)] = inst_71591__$1);

return statearr_71665;
})();
if(cljs.core.truth_(inst_71593)){
var statearr_71666_72591 = state_71658__$1;
(statearr_71666_72591[(1)] = (5));

} else {
var statearr_71667_72592 = state_71658__$1;
(statearr_71667_72592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (15))){
var state_71658__$1 = state_71658;
var statearr_71671_72593 = state_71658__$1;
(statearr_71671_72593[(2)] = null);

(statearr_71671_72593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (21))){
var state_71658__$1 = state_71658;
var statearr_71672_72594 = state_71658__$1;
(statearr_71672_72594[(2)] = null);

(statearr_71672_72594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (13))){
var inst_71607 = (state_71658[(8)]);
var inst_71608 = (state_71658[(9)]);
var inst_71609 = (state_71658[(10)]);
var inst_71610 = (state_71658[(12)]);
var inst_71618 = (state_71658[(2)]);
var inst_71619 = (inst_71610 + (1));
var tmp71668 = inst_71607;
var tmp71669 = inst_71608;
var tmp71670 = inst_71609;
var inst_71607__$1 = tmp71668;
var inst_71608__$1 = tmp71669;
var inst_71609__$1 = tmp71670;
var inst_71610__$1 = inst_71619;
var state_71658__$1 = (function (){var statearr_71673 = state_71658;
(statearr_71673[(8)] = inst_71607__$1);

(statearr_71673[(9)] = inst_71608__$1);

(statearr_71673[(10)] = inst_71609__$1);

(statearr_71673[(14)] = inst_71618);

(statearr_71673[(12)] = inst_71610__$1);

return statearr_71673;
})();
var statearr_71674_72595 = state_71658__$1;
(statearr_71674_72595[(2)] = null);

(statearr_71674_72595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (22))){
var state_71658__$1 = state_71658;
var statearr_71675_72597 = state_71658__$1;
(statearr_71675_72597[(2)] = null);

(statearr_71675_72597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (6))){
var inst_71591 = (state_71658[(13)]);
var inst_71605 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71591) : f.call(null,inst_71591));
var inst_71606 = cljs.core.seq(inst_71605);
var inst_71607 = inst_71606;
var inst_71608 = null;
var inst_71609 = (0);
var inst_71610 = (0);
var state_71658__$1 = (function (){var statearr_71676 = state_71658;
(statearr_71676[(8)] = inst_71607);

(statearr_71676[(9)] = inst_71608);

(statearr_71676[(10)] = inst_71609);

(statearr_71676[(12)] = inst_71610);

return statearr_71676;
})();
var statearr_71677_72598 = state_71658__$1;
(statearr_71677_72598[(2)] = null);

(statearr_71677_72598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (17))){
var inst_71622 = (state_71658[(7)]);
var inst_71626 = cljs.core.chunk_first(inst_71622);
var inst_71627 = cljs.core.chunk_rest(inst_71622);
var inst_71629 = cljs.core.count(inst_71626);
var inst_71607 = inst_71627;
var inst_71608 = inst_71626;
var inst_71609 = inst_71629;
var inst_71610 = (0);
var state_71658__$1 = (function (){var statearr_71678 = state_71658;
(statearr_71678[(8)] = inst_71607);

(statearr_71678[(9)] = inst_71608);

(statearr_71678[(10)] = inst_71609);

(statearr_71678[(12)] = inst_71610);

return statearr_71678;
})();
var statearr_71679_72599 = state_71658__$1;
(statearr_71679_72599[(2)] = null);

(statearr_71679_72599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (3))){
var inst_71656 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71658__$1,inst_71656);
} else {
if((state_val_71659 === (12))){
var inst_71643 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
var statearr_71680_72601 = state_71658__$1;
(statearr_71680_72601[(2)] = inst_71643);

(statearr_71680_72601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (2))){
var state_71658__$1 = state_71658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71658__$1,(4),in$);
} else {
if((state_val_71659 === (23))){
var inst_71652 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
var statearr_71681_72603 = state_71658__$1;
(statearr_71681_72603[(2)] = inst_71652);

(statearr_71681_72603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (19))){
var inst_71638 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
var statearr_71682_72604 = state_71658__$1;
(statearr_71682_72604[(2)] = inst_71638);

(statearr_71682_72604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (11))){
var inst_71607 = (state_71658[(8)]);
var inst_71622 = (state_71658[(7)]);
var inst_71622__$1 = cljs.core.seq(inst_71607);
var state_71658__$1 = (function (){var statearr_71683 = state_71658;
(statearr_71683[(7)] = inst_71622__$1);

return statearr_71683;
})();
if(inst_71622__$1){
var statearr_71684_72605 = state_71658__$1;
(statearr_71684_72605[(1)] = (14));

} else {
var statearr_71685_72606 = state_71658__$1;
(statearr_71685_72606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (9))){
var inst_71645 = (state_71658[(2)]);
var inst_71646 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_71658__$1 = (function (){var statearr_71686 = state_71658;
(statearr_71686[(15)] = inst_71645);

return statearr_71686;
})();
if(cljs.core.truth_(inst_71646)){
var statearr_71687_72607 = state_71658__$1;
(statearr_71687_72607[(1)] = (21));

} else {
var statearr_71688_72608 = state_71658__$1;
(statearr_71688_72608[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (5))){
var inst_71595 = cljs.core.async.close_BANG_(out);
var state_71658__$1 = state_71658;
var statearr_71689_72609 = state_71658__$1;
(statearr_71689_72609[(2)] = inst_71595);

(statearr_71689_72609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (14))){
var inst_71622 = (state_71658[(7)]);
var inst_71624 = cljs.core.chunked_seq_QMARK_(inst_71622);
var state_71658__$1 = state_71658;
if(inst_71624){
var statearr_71690_72610 = state_71658__$1;
(statearr_71690_72610[(1)] = (17));

} else {
var statearr_71691_72611 = state_71658__$1;
(statearr_71691_72611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (16))){
var inst_71641 = (state_71658[(2)]);
var state_71658__$1 = state_71658;
var statearr_71692_72613 = state_71658__$1;
(statearr_71692_72613[(2)] = inst_71641);

(statearr_71692_72613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71659 === (10))){
var inst_71608 = (state_71658[(9)]);
var inst_71610 = (state_71658[(12)]);
var inst_71616 = cljs.core._nth(inst_71608,inst_71610);
var state_71658__$1 = state_71658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71658__$1,(13),out,inst_71616);
} else {
if((state_val_71659 === (18))){
var inst_71622 = (state_71658[(7)]);
var inst_71632 = cljs.core.first(inst_71622);
var state_71658__$1 = state_71658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71658__$1,(20),out,inst_71632);
} else {
if((state_val_71659 === (8))){
var inst_71609 = (state_71658[(10)]);
var inst_71610 = (state_71658[(12)]);
var inst_71613 = (inst_71610 < inst_71609);
var inst_71614 = inst_71613;
var state_71658__$1 = state_71658;
if(cljs.core.truth_(inst_71614)){
var statearr_71697_72617 = state_71658__$1;
(statearr_71697_72617[(1)] = (10));

} else {
var statearr_71699_72618 = state_71658__$1;
(statearr_71699_72618[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____0 = (function (){
var statearr_71702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71702[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__);

(statearr_71702[(1)] = (1));

return statearr_71702;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____1 = (function (state_71658){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71658);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71703){var ex__31527__auto__ = e71703;
var statearr_71704_72619 = state_71658;
(statearr_71704_72619[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71658[(4)]))){
var statearr_71705_72620 = state_71658;
(statearr_71705_72620[(1)] = cljs.core.first((state_71658[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72621 = state_71658;
state_71658 = G__72621;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__ = function(state_71658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____1.call(this,state_71658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31524__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71707 = f__31602__auto__();
(statearr_71707[(6)] = c__31601__auto__);

return statearr_71707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));

return c__31601__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71710 = arguments.length;
switch (G__71710) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71713 = arguments.length;
switch (G__71713) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71715 = arguments.length;
switch (G__71715) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71740){
var state_val_71741 = (state_71740[(1)]);
if((state_val_71741 === (7))){
var inst_71735 = (state_71740[(2)]);
var state_71740__$1 = state_71740;
var statearr_71743_72626 = state_71740__$1;
(statearr_71743_72626[(2)] = inst_71735);

(statearr_71743_72626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (1))){
var inst_71717 = null;
var state_71740__$1 = (function (){var statearr_71744 = state_71740;
(statearr_71744[(7)] = inst_71717);

return statearr_71744;
})();
var statearr_71746_72627 = state_71740__$1;
(statearr_71746_72627[(2)] = null);

(statearr_71746_72627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (4))){
var inst_71720 = (state_71740[(8)]);
var inst_71720__$1 = (state_71740[(2)]);
var inst_71721 = (inst_71720__$1 == null);
var inst_71722 = cljs.core.not(inst_71721);
var state_71740__$1 = (function (){var statearr_71747 = state_71740;
(statearr_71747[(8)] = inst_71720__$1);

return statearr_71747;
})();
if(inst_71722){
var statearr_71748_72631 = state_71740__$1;
(statearr_71748_72631[(1)] = (5));

} else {
var statearr_71749_72632 = state_71740__$1;
(statearr_71749_72632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (6))){
var state_71740__$1 = state_71740;
var statearr_71750_72634 = state_71740__$1;
(statearr_71750_72634[(2)] = null);

(statearr_71750_72634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (3))){
var inst_71737 = (state_71740[(2)]);
var inst_71738 = cljs.core.async.close_BANG_(out);
var state_71740__$1 = (function (){var statearr_71752 = state_71740;
(statearr_71752[(9)] = inst_71737);

return statearr_71752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71740__$1,inst_71738);
} else {
if((state_val_71741 === (2))){
var state_71740__$1 = state_71740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71740__$1,(4),ch);
} else {
if((state_val_71741 === (11))){
var inst_71720 = (state_71740[(8)]);
var inst_71729 = (state_71740[(2)]);
var inst_71717 = inst_71720;
var state_71740__$1 = (function (){var statearr_71753 = state_71740;
(statearr_71753[(7)] = inst_71717);

(statearr_71753[(10)] = inst_71729);

return statearr_71753;
})();
var statearr_71754_72635 = state_71740__$1;
(statearr_71754_72635[(2)] = null);

(statearr_71754_72635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (9))){
var inst_71720 = (state_71740[(8)]);
var state_71740__$1 = state_71740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71740__$1,(11),out,inst_71720);
} else {
if((state_val_71741 === (5))){
var inst_71717 = (state_71740[(7)]);
var inst_71720 = (state_71740[(8)]);
var inst_71724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71720,inst_71717);
var state_71740__$1 = state_71740;
if(inst_71724){
var statearr_71756_72637 = state_71740__$1;
(statearr_71756_72637[(1)] = (8));

} else {
var statearr_71757_72638 = state_71740__$1;
(statearr_71757_72638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (10))){
var inst_71732 = (state_71740[(2)]);
var state_71740__$1 = state_71740;
var statearr_71758_72640 = state_71740__$1;
(statearr_71758_72640[(2)] = inst_71732);

(statearr_71758_72640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71741 === (8))){
var inst_71717 = (state_71740[(7)]);
var tmp71755 = inst_71717;
var inst_71717__$1 = tmp71755;
var state_71740__$1 = (function (){var statearr_71759 = state_71740;
(statearr_71759[(7)] = inst_71717__$1);

return statearr_71759;
})();
var statearr_71760_72641 = state_71740__$1;
(statearr_71760_72641[(2)] = null);

(statearr_71760_72641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71761[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71761[(1)] = (1));

return statearr_71761;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71740){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71740);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71762){var ex__31527__auto__ = e71762;
var statearr_71763_72642 = state_71740;
(statearr_71763_72642[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71740[(4)]))){
var statearr_71764_72643 = state_71740;
(statearr_71764_72643[(1)] = cljs.core.first((state_71740[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72644 = state_71740;
state_71740 = G__72644;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71765 = f__31602__auto__();
(statearr_71765[(6)] = c__31601__auto___72625);

return statearr_71765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71767 = arguments.length;
switch (G__71767) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71805){
var state_val_71806 = (state_71805[(1)]);
if((state_val_71806 === (7))){
var inst_71801 = (state_71805[(2)]);
var state_71805__$1 = state_71805;
var statearr_71807_72647 = state_71805__$1;
(statearr_71807_72647[(2)] = inst_71801);

(statearr_71807_72647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (1))){
var inst_71768 = (new Array(n));
var inst_71769 = inst_71768;
var inst_71770 = (0);
var state_71805__$1 = (function (){var statearr_71808 = state_71805;
(statearr_71808[(7)] = inst_71769);

(statearr_71808[(8)] = inst_71770);

return statearr_71808;
})();
var statearr_71809_72648 = state_71805__$1;
(statearr_71809_72648[(2)] = null);

(statearr_71809_72648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (4))){
var inst_71773 = (state_71805[(9)]);
var inst_71773__$1 = (state_71805[(2)]);
var inst_71774 = (inst_71773__$1 == null);
var inst_71775 = cljs.core.not(inst_71774);
var state_71805__$1 = (function (){var statearr_71810 = state_71805;
(statearr_71810[(9)] = inst_71773__$1);

return statearr_71810;
})();
if(inst_71775){
var statearr_71811_72649 = state_71805__$1;
(statearr_71811_72649[(1)] = (5));

} else {
var statearr_71812_72650 = state_71805__$1;
(statearr_71812_72650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (15))){
var inst_71795 = (state_71805[(2)]);
var state_71805__$1 = state_71805;
var statearr_71815_72651 = state_71805__$1;
(statearr_71815_72651[(2)] = inst_71795);

(statearr_71815_72651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (13))){
var state_71805__$1 = state_71805;
var statearr_71816_72652 = state_71805__$1;
(statearr_71816_72652[(2)] = null);

(statearr_71816_72652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (6))){
var inst_71770 = (state_71805[(8)]);
var inst_71791 = (inst_71770 > (0));
var state_71805__$1 = state_71805;
if(cljs.core.truth_(inst_71791)){
var statearr_71819_72656 = state_71805__$1;
(statearr_71819_72656[(1)] = (12));

} else {
var statearr_71820_72657 = state_71805__$1;
(statearr_71820_72657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (3))){
var inst_71803 = (state_71805[(2)]);
var state_71805__$1 = state_71805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71805__$1,inst_71803);
} else {
if((state_val_71806 === (12))){
var inst_71769 = (state_71805[(7)]);
var inst_71793 = cljs.core.vec(inst_71769);
var state_71805__$1 = state_71805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71805__$1,(15),out,inst_71793);
} else {
if((state_val_71806 === (2))){
var state_71805__$1 = state_71805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71805__$1,(4),ch);
} else {
if((state_val_71806 === (11))){
var inst_71785 = (state_71805[(2)]);
var inst_71786 = (new Array(n));
var inst_71769 = inst_71786;
var inst_71770 = (0);
var state_71805__$1 = (function (){var statearr_71821 = state_71805;
(statearr_71821[(10)] = inst_71785);

(statearr_71821[(7)] = inst_71769);

(statearr_71821[(8)] = inst_71770);

return statearr_71821;
})();
var statearr_71822_72658 = state_71805__$1;
(statearr_71822_72658[(2)] = null);

(statearr_71822_72658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (9))){
var inst_71769 = (state_71805[(7)]);
var inst_71783 = cljs.core.vec(inst_71769);
var state_71805__$1 = state_71805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71805__$1,(11),out,inst_71783);
} else {
if((state_val_71806 === (5))){
var inst_71773 = (state_71805[(9)]);
var inst_71769 = (state_71805[(7)]);
var inst_71778 = (state_71805[(11)]);
var inst_71770 = (state_71805[(8)]);
var inst_71777 = (inst_71769[inst_71770] = inst_71773);
var inst_71778__$1 = (inst_71770 + (1));
var inst_71779 = (inst_71778__$1 < n);
var state_71805__$1 = (function (){var statearr_71823 = state_71805;
(statearr_71823[(12)] = inst_71777);

(statearr_71823[(11)] = inst_71778__$1);

return statearr_71823;
})();
if(cljs.core.truth_(inst_71779)){
var statearr_71824_72659 = state_71805__$1;
(statearr_71824_72659[(1)] = (8));

} else {
var statearr_71826_72660 = state_71805__$1;
(statearr_71826_72660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (14))){
var inst_71798 = (state_71805[(2)]);
var inst_71799 = cljs.core.async.close_BANG_(out);
var state_71805__$1 = (function (){var statearr_71829 = state_71805;
(statearr_71829[(13)] = inst_71798);

return statearr_71829;
})();
var statearr_71830_72661 = state_71805__$1;
(statearr_71830_72661[(2)] = inst_71799);

(statearr_71830_72661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (10))){
var inst_71789 = (state_71805[(2)]);
var state_71805__$1 = state_71805;
var statearr_71831_72662 = state_71805__$1;
(statearr_71831_72662[(2)] = inst_71789);

(statearr_71831_72662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71806 === (8))){
var inst_71769 = (state_71805[(7)]);
var inst_71778 = (state_71805[(11)]);
var tmp71828 = inst_71769;
var inst_71769__$1 = tmp71828;
var inst_71770 = inst_71778;
var state_71805__$1 = (function (){var statearr_71832 = state_71805;
(statearr_71832[(7)] = inst_71769__$1);

(statearr_71832[(8)] = inst_71770);

return statearr_71832;
})();
var statearr_71833_72667 = state_71805__$1;
(statearr_71833_72667[(2)] = null);

(statearr_71833_72667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71835[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71835[(1)] = (1));

return statearr_71835;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71805){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71805);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71837){var ex__31527__auto__ = e71837;
var statearr_71838_72668 = state_71805;
(statearr_71838_72668[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71805[(4)]))){
var statearr_71839_72669 = state_71805;
(statearr_71839_72669[(1)] = cljs.core.first((state_71805[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72671 = state_71805;
state_71805 = G__72671;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71840 = f__31602__auto__();
(statearr_71840[(6)] = c__31601__auto___72646);

return statearr_71840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71846 = arguments.length;
switch (G__71846) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31601__auto___72680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31602__auto__ = (function (){var switch__31523__auto__ = (function (state_71904){
var state_val_71905 = (state_71904[(1)]);
if((state_val_71905 === (7))){
var inst_71900 = (state_71904[(2)]);
var state_71904__$1 = state_71904;
var statearr_71909_72682 = state_71904__$1;
(statearr_71909_72682[(2)] = inst_71900);

(statearr_71909_72682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (1))){
var inst_71854 = [];
var inst_71855 = inst_71854;
var inst_71856 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71904__$1 = (function (){var statearr_71910 = state_71904;
(statearr_71910[(7)] = inst_71855);

(statearr_71910[(8)] = inst_71856);

return statearr_71910;
})();
var statearr_71911_72684 = state_71904__$1;
(statearr_71911_72684[(2)] = null);

(statearr_71911_72684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (4))){
var inst_71859 = (state_71904[(9)]);
var inst_71859__$1 = (state_71904[(2)]);
var inst_71860 = (inst_71859__$1 == null);
var inst_71861 = cljs.core.not(inst_71860);
var state_71904__$1 = (function (){var statearr_71912 = state_71904;
(statearr_71912[(9)] = inst_71859__$1);

return statearr_71912;
})();
if(inst_71861){
var statearr_71913_72685 = state_71904__$1;
(statearr_71913_72685[(1)] = (5));

} else {
var statearr_71914_72686 = state_71904__$1;
(statearr_71914_72686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (15))){
var inst_71855 = (state_71904[(7)]);
var inst_71892 = cljs.core.vec(inst_71855);
var state_71904__$1 = state_71904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71904__$1,(18),out,inst_71892);
} else {
if((state_val_71905 === (13))){
var inst_71884 = (state_71904[(2)]);
var state_71904__$1 = state_71904;
var statearr_71916_72687 = state_71904__$1;
(statearr_71916_72687[(2)] = inst_71884);

(statearr_71916_72687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (6))){
var inst_71855 = (state_71904[(7)]);
var inst_71886 = inst_71855.length;
var inst_71887 = (inst_71886 > (0));
var state_71904__$1 = state_71904;
if(cljs.core.truth_(inst_71887)){
var statearr_71917_72688 = state_71904__$1;
(statearr_71917_72688[(1)] = (15));

} else {
var statearr_71918_72689 = state_71904__$1;
(statearr_71918_72689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (17))){
var inst_71897 = (state_71904[(2)]);
var inst_71898 = cljs.core.async.close_BANG_(out);
var state_71904__$1 = (function (){var statearr_71919 = state_71904;
(statearr_71919[(10)] = inst_71897);

return statearr_71919;
})();
var statearr_71920_72690 = state_71904__$1;
(statearr_71920_72690[(2)] = inst_71898);

(statearr_71920_72690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (3))){
var inst_71902 = (state_71904[(2)]);
var state_71904__$1 = state_71904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71904__$1,inst_71902);
} else {
if((state_val_71905 === (12))){
var inst_71855 = (state_71904[(7)]);
var inst_71877 = cljs.core.vec(inst_71855);
var state_71904__$1 = state_71904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71904__$1,(14),out,inst_71877);
} else {
if((state_val_71905 === (2))){
var state_71904__$1 = state_71904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71904__$1,(4),ch);
} else {
if((state_val_71905 === (11))){
var inst_71855 = (state_71904[(7)]);
var inst_71859 = (state_71904[(9)]);
var inst_71863 = (state_71904[(11)]);
var inst_71874 = inst_71855.push(inst_71859);
var tmp71921 = inst_71855;
var inst_71855__$1 = tmp71921;
var inst_71856 = inst_71863;
var state_71904__$1 = (function (){var statearr_71922 = state_71904;
(statearr_71922[(12)] = inst_71874);

(statearr_71922[(7)] = inst_71855__$1);

(statearr_71922[(8)] = inst_71856);

return statearr_71922;
})();
var statearr_71925_72691 = state_71904__$1;
(statearr_71925_72691[(2)] = null);

(statearr_71925_72691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (9))){
var inst_71856 = (state_71904[(8)]);
var inst_71867 = cljs.core.keyword_identical_QMARK_(inst_71856,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_71904__$1 = state_71904;
var statearr_71926_72692 = state_71904__$1;
(statearr_71926_72692[(2)] = inst_71867);

(statearr_71926_72692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (5))){
var inst_71856 = (state_71904[(8)]);
var inst_71864 = (state_71904[(13)]);
var inst_71859 = (state_71904[(9)]);
var inst_71863 = (state_71904[(11)]);
var inst_71863__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71859) : f.call(null,inst_71859));
var inst_71864__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71863__$1,inst_71856);
var state_71904__$1 = (function (){var statearr_71928 = state_71904;
(statearr_71928[(13)] = inst_71864__$1);

(statearr_71928[(11)] = inst_71863__$1);

return statearr_71928;
})();
if(inst_71864__$1){
var statearr_71930_72693 = state_71904__$1;
(statearr_71930_72693[(1)] = (8));

} else {
var statearr_71931_72694 = state_71904__$1;
(statearr_71931_72694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (14))){
var inst_71859 = (state_71904[(9)]);
var inst_71863 = (state_71904[(11)]);
var inst_71879 = (state_71904[(2)]);
var inst_71880 = [];
var inst_71881 = inst_71880.push(inst_71859);
var inst_71855 = inst_71880;
var inst_71856 = inst_71863;
var state_71904__$1 = (function (){var statearr_71932 = state_71904;
(statearr_71932[(14)] = inst_71881);

(statearr_71932[(7)] = inst_71855);

(statearr_71932[(15)] = inst_71879);

(statearr_71932[(8)] = inst_71856);

return statearr_71932;
})();
var statearr_71933_72695 = state_71904__$1;
(statearr_71933_72695[(2)] = null);

(statearr_71933_72695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (16))){
var state_71904__$1 = state_71904;
var statearr_71934_72696 = state_71904__$1;
(statearr_71934_72696[(2)] = null);

(statearr_71934_72696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (10))){
var inst_71872 = (state_71904[(2)]);
var state_71904__$1 = state_71904;
if(cljs.core.truth_(inst_71872)){
var statearr_71935_72697 = state_71904__$1;
(statearr_71935_72697[(1)] = (11));

} else {
var statearr_71936_72698 = state_71904__$1;
(statearr_71936_72698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (18))){
var inst_71894 = (state_71904[(2)]);
var state_71904__$1 = state_71904;
var statearr_71937_72699 = state_71904__$1;
(statearr_71937_72699[(2)] = inst_71894);

(statearr_71937_72699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71905 === (8))){
var inst_71864 = (state_71904[(13)]);
var state_71904__$1 = state_71904;
var statearr_71938_72700 = state_71904__$1;
(statearr_71938_72700[(2)] = inst_71864);

(statearr_71938_72700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31524__auto__ = null;
var cljs$core$async$state_machine__31524__auto____0 = (function (){
var statearr_71939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71939[(0)] = cljs$core$async$state_machine__31524__auto__);

(statearr_71939[(1)] = (1));

return statearr_71939;
});
var cljs$core$async$state_machine__31524__auto____1 = (function (state_71904){
while(true){
var ret_value__31525__auto__ = (function (){try{while(true){
var result__31526__auto__ = switch__31523__auto__(state_71904);
if(cljs.core.keyword_identical_QMARK_(result__31526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31526__auto__;
}
break;
}
}catch (e71940){var ex__31527__auto__ = e71940;
var statearr_71941_72701 = state_71904;
(statearr_71941_72701[(2)] = ex__31527__auto__);


if(cljs.core.seq((state_71904[(4)]))){
var statearr_71942_72702 = state_71904;
(statearr_71942_72702[(1)] = cljs.core.first((state_71904[(4)])));

} else {
throw ex__31527__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72703 = state_71904;
state_71904 = G__72703;
continue;
} else {
return ret_value__31525__auto__;
}
break;
}
});
cljs$core$async$state_machine__31524__auto__ = function(state_71904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31524__auto____1.call(this,state_71904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31524__auto____0;
cljs$core$async$state_machine__31524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31524__auto____1;
return cljs$core$async$state_machine__31524__auto__;
})()
})();
var state__31603__auto__ = (function (){var statearr_71943 = f__31602__auto__();
(statearr_71943[(6)] = c__31601__auto___72680);

return statearr_71943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31603__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
