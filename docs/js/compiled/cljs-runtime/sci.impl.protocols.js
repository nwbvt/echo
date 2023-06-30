goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58238 = arguments.length;
var i__5770__auto___58239 = (0);
while(true){
if((i__5770__auto___58239 < len__5769__auto___58238)){
args__5775__auto__.push((arguments[i__5770__auto___58239]));

var G__58240 = (i__5770__auto___58239 + (1));
i__5770__auto___58239 = G__58240;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__58001 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58001,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58001,(1),null);
var vec__58004 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58004,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58004,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58015){
var vec__58016 = p__58015;
var seq__58017 = cljs.core.seq(vec__58016);
var first__58018 = cljs.core.first(seq__58017);
var seq__58017__$1 = cljs.core.next(seq__58017);
var method_name = first__58018;
var ___$2 = seq__58017__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__57976__auto__","x__57976__auto__",1048464329,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__57977__auto__","args__57977__auto__",810937384,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__57978__auto__","methods__57978__auto__",-2129398243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__57976__auto__","x__57976__auto__",1048464329,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__57978__auto__","methods__57978__auto__",-2129398243,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__57976__auto__","x__57976__auto__",1048464329,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__57977__auto__","args__57977__auto__",810937384,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__57979__auto__","x__57979__auto__",-1959695728,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__57980__auto__","args__57980__auto__",1670560413,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__57981__auto__","meta__57981__auto__",2013672231,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__57979__auto__","x__57979__auto__",-1959695728,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__57982__auto__","method__57982__auto__",-1721232932,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__57981__auto__","meta__57981__auto__",2013672231,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__57982__auto__","method__57982__auto__",-1721232932,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__57982__auto__","method__57982__auto__",-1721232932,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__57979__auto__","x__57979__auto__",-1959695728,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__57980__auto__","args__57980__auto__",1670560413,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__57979__auto__","x__57979__auto__",-1959695728,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq57984){
var G__57985 = cljs.core.first(seq57984);
var seq57984__$1 = cljs.core.next(seq57984);
var G__57986 = cljs.core.first(seq57984__$1);
var seq57984__$2 = cljs.core.next(seq57984__$1);
var G__57987 = cljs.core.first(seq57984__$2);
var seq57984__$3 = cljs.core.next(seq57984__$2);
var G__57988 = cljs.core.first(seq57984__$3);
var seq57984__$4 = cljs.core.next(seq57984__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57985,G__57986,G__57987,G__57988,seq57984__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58253 = arguments.length;
var i__5770__auto___58254 = (0);
while(true){
if((i__5770__auto___58254 < len__5769__auto___58253)){
args__5775__auto__.push((arguments[i__5770__auto___58254]));

var G__58255 = (i__5770__auto___58254 + (1));
i__5770__auto___58254 = G__58255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__58034 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__58036 = null;
var count__58037 = (0);
var i__58038 = (0);
while(true){
if((i__58038 < count__58037)){
var vec__58095 = chunk__58036.cljs$core$IIndexed$_nth$arity$2(null,i__58038);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58095,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58095,(1),null);
var extend_via_metadata_58256 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_58257 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_58258 = sci.impl.vars.getName(proto_ns_58257);
var pns_str_58259 = (cljs.core.truth_(extend_via_metadata_58256)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_58258):null);
var seq__58098_58260 = cljs.core.seq(mmap);
var chunk__58099_58261 = null;
var count__58100_58262 = (0);
var i__58101_58263 = (0);
while(true){
if((i__58101_58263 < count__58100_58262)){
var vec__58117_58264 = chunk__58099_58261.cljs$core$IIndexed$_nth$arity$2(null,i__58101_58263);
var meth_name_58265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58117_58264,(0),null);
var f_58266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58117_58264,(1),null);
var meth_str_58267 = cljs.core.name(meth_name_58265);
var meth_sym_58268 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_58267);
var env_58269 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_58270 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_58269,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_58258,meth_sym_58268], null));
var multi_method_58271 = cljs.core.deref(multi_method_var_58270);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_58271,atype,(cljs.core.truth_(extend_via_metadata_58256)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_58259,meth_str_58267);
return ((function (seq__58098_58260,chunk__58099_58261,count__58100_58262,i__58101_58263,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58267,meth_sym_58268,env_58269,multi_method_var_58270,multi_method_58271,vec__58117_58264,meth_name_58265,f_58266,extend_via_metadata_58256,proto_ns_58257,pns_58258,pns_str_58259,vec__58095,proto,mmap){
return (function() { 
var G__58274__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58266,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58266,this$,args);
}
};
var G__58274 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__58275__i = 0, G__58275__a = new Array(arguments.length -  1);
while (G__58275__i < G__58275__a.length) {G__58275__a[G__58275__i] = arguments[G__58275__i + 1]; ++G__58275__i;}
  args = new cljs.core.IndexedSeq(G__58275__a,0,null);
} 
return G__58274__delegate.call(this,this$,args);};
G__58274.cljs$lang$maxFixedArity = 1;
G__58274.cljs$lang$applyTo = (function (arglist__58276){
var this$ = cljs.core.first(arglist__58276);
var args = cljs.core.rest(arglist__58276);
return G__58274__delegate(this$,args);
});
G__58274.cljs$core$IFn$_invoke$arity$variadic = G__58274__delegate;
return G__58274;
})()
;
;})(seq__58098_58260,chunk__58099_58261,count__58100_58262,i__58101_58263,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58267,meth_sym_58268,env_58269,multi_method_var_58270,multi_method_58271,vec__58117_58264,meth_name_58265,f_58266,extend_via_metadata_58256,proto_ns_58257,pns_58258,pns_str_58259,vec__58095,proto,mmap))
})():f_58266));


var G__58277 = seq__58098_58260;
var G__58278 = chunk__58099_58261;
var G__58279 = count__58100_58262;
var G__58280 = (i__58101_58263 + (1));
seq__58098_58260 = G__58277;
chunk__58099_58261 = G__58278;
count__58100_58262 = G__58279;
i__58101_58263 = G__58280;
continue;
} else {
var temp__5804__auto___58281 = cljs.core.seq(seq__58098_58260);
if(temp__5804__auto___58281){
var seq__58098_58282__$1 = temp__5804__auto___58281;
if(cljs.core.chunked_seq_QMARK_(seq__58098_58282__$1)){
var c__5568__auto___58283 = cljs.core.chunk_first(seq__58098_58282__$1);
var G__58284 = cljs.core.chunk_rest(seq__58098_58282__$1);
var G__58285 = c__5568__auto___58283;
var G__58286 = cljs.core.count(c__5568__auto___58283);
var G__58287 = (0);
seq__58098_58260 = G__58284;
chunk__58099_58261 = G__58285;
count__58100_58262 = G__58286;
i__58101_58263 = G__58287;
continue;
} else {
var vec__58123_58288 = cljs.core.first(seq__58098_58282__$1);
var meth_name_58289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58123_58288,(0),null);
var f_58290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58123_58288,(1),null);
var meth_str_58291 = cljs.core.name(meth_name_58289);
var meth_sym_58292 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_58291);
var env_58293 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_58294 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_58293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_58258,meth_sym_58292], null));
var multi_method_58295 = cljs.core.deref(multi_method_var_58294);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_58295,atype,(cljs.core.truth_(extend_via_metadata_58256)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_58259,meth_str_58291);
return ((function (seq__58098_58260,chunk__58099_58261,count__58100_58262,i__58101_58263,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58291,meth_sym_58292,env_58293,multi_method_var_58294,multi_method_58295,vec__58123_58288,meth_name_58289,f_58290,seq__58098_58282__$1,temp__5804__auto___58281,extend_via_metadata_58256,proto_ns_58257,pns_58258,pns_str_58259,vec__58095,proto,mmap){
return (function() { 
var G__58296__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58290,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58290,this$,args);
}
};
var G__58296 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__58299__i = 0, G__58299__a = new Array(arguments.length -  1);
while (G__58299__i < G__58299__a.length) {G__58299__a[G__58299__i] = arguments[G__58299__i + 1]; ++G__58299__i;}
  args = new cljs.core.IndexedSeq(G__58299__a,0,null);
} 
return G__58296__delegate.call(this,this$,args);};
G__58296.cljs$lang$maxFixedArity = 1;
G__58296.cljs$lang$applyTo = (function (arglist__58300){
var this$ = cljs.core.first(arglist__58300);
var args = cljs.core.rest(arglist__58300);
return G__58296__delegate(this$,args);
});
G__58296.cljs$core$IFn$_invoke$arity$variadic = G__58296__delegate;
return G__58296;
})()
;
;})(seq__58098_58260,chunk__58099_58261,count__58100_58262,i__58101_58263,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58291,meth_sym_58292,env_58293,multi_method_var_58294,multi_method_58295,vec__58123_58288,meth_name_58289,f_58290,seq__58098_58282__$1,temp__5804__auto___58281,extend_via_metadata_58256,proto_ns_58257,pns_58258,pns_str_58259,vec__58095,proto,mmap))
})():f_58290));


var G__58301 = cljs.core.next(seq__58098_58282__$1);
var G__58302 = null;
var G__58303 = (0);
var G__58304 = (0);
seq__58098_58260 = G__58301;
chunk__58099_58261 = G__58302;
count__58100_58262 = G__58303;
i__58101_58263 = G__58304;
continue;
}
} else {
}
}
break;
}


var G__58309 = seq__58034;
var G__58310 = chunk__58036;
var G__58311 = count__58037;
var G__58312 = (i__58038 + (1));
seq__58034 = G__58309;
chunk__58036 = G__58310;
count__58037 = G__58311;
i__58038 = G__58312;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58034);
if(temp__5804__auto__){
var seq__58034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58034__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58034__$1);
var G__58317 = cljs.core.chunk_rest(seq__58034__$1);
var G__58318 = c__5568__auto__;
var G__58319 = cljs.core.count(c__5568__auto__);
var G__58320 = (0);
seq__58034 = G__58317;
chunk__58036 = G__58318;
count__58037 = G__58319;
i__58038 = G__58320;
continue;
} else {
var vec__58128 = cljs.core.first(seq__58034__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(1),null);
var extend_via_metadata_58321 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_58322 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_58323 = sci.impl.vars.getName(proto_ns_58322);
var pns_str_58324 = (cljs.core.truth_(extend_via_metadata_58321)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_58323):null);
var seq__58131_58325 = cljs.core.seq(mmap);
var chunk__58132_58326 = null;
var count__58133_58327 = (0);
var i__58134_58328 = (0);
while(true){
if((i__58134_58328 < count__58133_58327)){
var vec__58142_58329 = chunk__58132_58326.cljs$core$IIndexed$_nth$arity$2(null,i__58134_58328);
var meth_name_58330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58142_58329,(0),null);
var f_58331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58142_58329,(1),null);
var meth_str_58332 = cljs.core.name(meth_name_58330);
var meth_sym_58333 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_58332);
var env_58334 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_58335 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_58334,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_58323,meth_sym_58333], null));
var multi_method_58336 = cljs.core.deref(multi_method_var_58335);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_58336,atype,(cljs.core.truth_(extend_via_metadata_58321)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_58324,meth_str_58332);
return ((function (seq__58131_58325,chunk__58132_58326,count__58133_58327,i__58134_58328,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58332,meth_sym_58333,env_58334,multi_method_var_58335,multi_method_58336,vec__58142_58329,meth_name_58330,f_58331,extend_via_metadata_58321,proto_ns_58322,pns_58323,pns_str_58324,vec__58128,proto,mmap,seq__58034__$1,temp__5804__auto__){
return (function() { 
var G__58338__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58331,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58331,this$,args);
}
};
var G__58338 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__58339__i = 0, G__58339__a = new Array(arguments.length -  1);
while (G__58339__i < G__58339__a.length) {G__58339__a[G__58339__i] = arguments[G__58339__i + 1]; ++G__58339__i;}
  args = new cljs.core.IndexedSeq(G__58339__a,0,null);
} 
return G__58338__delegate.call(this,this$,args);};
G__58338.cljs$lang$maxFixedArity = 1;
G__58338.cljs$lang$applyTo = (function (arglist__58340){
var this$ = cljs.core.first(arglist__58340);
var args = cljs.core.rest(arglist__58340);
return G__58338__delegate(this$,args);
});
G__58338.cljs$core$IFn$_invoke$arity$variadic = G__58338__delegate;
return G__58338;
})()
;
;})(seq__58131_58325,chunk__58132_58326,count__58133_58327,i__58134_58328,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58332,meth_sym_58333,env_58334,multi_method_var_58335,multi_method_58336,vec__58142_58329,meth_name_58330,f_58331,extend_via_metadata_58321,proto_ns_58322,pns_58323,pns_str_58324,vec__58128,proto,mmap,seq__58034__$1,temp__5804__auto__))
})():f_58331));


var G__58342 = seq__58131_58325;
var G__58343 = chunk__58132_58326;
var G__58344 = count__58133_58327;
var G__58345 = (i__58134_58328 + (1));
seq__58131_58325 = G__58342;
chunk__58132_58326 = G__58343;
count__58133_58327 = G__58344;
i__58134_58328 = G__58345;
continue;
} else {
var temp__5804__auto___58346__$1 = cljs.core.seq(seq__58131_58325);
if(temp__5804__auto___58346__$1){
var seq__58131_58350__$1 = temp__5804__auto___58346__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58131_58350__$1)){
var c__5568__auto___58351 = cljs.core.chunk_first(seq__58131_58350__$1);
var G__58352 = cljs.core.chunk_rest(seq__58131_58350__$1);
var G__58353 = c__5568__auto___58351;
var G__58354 = cljs.core.count(c__5568__auto___58351);
var G__58355 = (0);
seq__58131_58325 = G__58352;
chunk__58132_58326 = G__58353;
count__58133_58327 = G__58354;
i__58134_58328 = G__58355;
continue;
} else {
var vec__58148_58356 = cljs.core.first(seq__58131_58350__$1);
var meth_name_58357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58148_58356,(0),null);
var f_58358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58148_58356,(1),null);
var meth_str_58360 = cljs.core.name(meth_name_58357);
var meth_sym_58361 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_58360);
var env_58362 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_58363 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_58362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_58323,meth_sym_58361], null));
var multi_method_58364 = cljs.core.deref(multi_method_var_58363);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_58364,atype,(cljs.core.truth_(extend_via_metadata_58321)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_58324,meth_str_58360);
return ((function (seq__58131_58325,chunk__58132_58326,count__58133_58327,i__58134_58328,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58360,meth_sym_58361,env_58362,multi_method_var_58363,multi_method_58364,vec__58148_58356,meth_name_58357,f_58358,seq__58131_58350__$1,temp__5804__auto___58346__$1,extend_via_metadata_58321,proto_ns_58322,pns_58323,pns_str_58324,vec__58128,proto,mmap,seq__58034__$1,temp__5804__auto__){
return (function() { 
var G__58365__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58358,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_58358,this$,args);
}
};
var G__58365 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__58366__i = 0, G__58366__a = new Array(arguments.length -  1);
while (G__58366__i < G__58366__a.length) {G__58366__a[G__58366__i] = arguments[G__58366__i + 1]; ++G__58366__i;}
  args = new cljs.core.IndexedSeq(G__58366__a,0,null);
} 
return G__58365__delegate.call(this,this$,args);};
G__58365.cljs$lang$maxFixedArity = 1;
G__58365.cljs$lang$applyTo = (function (arglist__58367){
var this$ = cljs.core.first(arglist__58367);
var args = cljs.core.rest(arglist__58367);
return G__58365__delegate(this$,args);
});
G__58365.cljs$core$IFn$_invoke$arity$variadic = G__58365__delegate;
return G__58365;
})()
;
;})(seq__58131_58325,chunk__58132_58326,count__58133_58327,i__58134_58328,seq__58034,chunk__58036,count__58037,i__58038,fq,meth_str_58360,meth_sym_58361,env_58362,multi_method_var_58363,multi_method_58364,vec__58148_58356,meth_name_58357,f_58358,seq__58131_58350__$1,temp__5804__auto___58346__$1,extend_via_metadata_58321,proto_ns_58322,pns_58323,pns_str_58324,vec__58128,proto,mmap,seq__58034__$1,temp__5804__auto__))
})():f_58358));


var G__58368 = cljs.core.next(seq__58131_58350__$1);
var G__58369 = null;
var G__58370 = (0);
var G__58371 = (0);
seq__58131_58325 = G__58368;
chunk__58132_58326 = G__58369;
count__58133_58327 = G__58370;
i__58134_58328 = G__58371;
continue;
}
} else {
}
}
break;
}


var G__58372 = cljs.core.next(seq__58034__$1);
var G__58373 = null;
var G__58374 = (0);
var G__58375 = (0);
seq__58034 = G__58372;
chunk__58036 = G__58373;
count__58037 = G__58374;
i__58038 = G__58375;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq58029){
var G__58030 = cljs.core.first(seq58029);
var seq58029__$1 = cljs.core.next(seq58029);
var G__58031 = cljs.core.first(seq58029__$1);
var seq58029__$2 = cljs.core.next(seq58029__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58030,G__58031,seq58029__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__58154){
var vec__58155 = p__58154;
var seq__58156 = cljs.core.seq(vec__58155);
var first__58157 = cljs.core.first(seq__58156);
var seq__58156__$1 = cljs.core.next(seq__58156);
var args = first__58157;
var body = seq__58156__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__58151__auto__","farg__58151__auto__",-182088294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__58152__auto__","m__58152__auto__",-746396646,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__58151__auto__","farg__58151__auto__",-182088294,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__58153__auto__","meth__58153__auto__",-661977354,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__58152__auto__","m__58152__auto__",-746396646,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__58153__auto__","meth__58153__auto__",-661977354,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58163){
var vec__58164 = p__58163;
var seq__58165 = cljs.core.seq(vec__58164);
var first__58166 = cljs.core.first(seq__58165);
var seq__58165__$1 = cljs.core.next(seq__58165);
var meth_name = first__58166;
var fn_body = seq__58165__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58159_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__58159_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58384 = arguments.length;
var i__5770__auto___58385 = (0);
while(true){
if((i__5770__auto___58385 < len__5769__auto___58384)){
args__5775__auto__.push((arguments[i__5770__auto___58385]));

var G__58386 = (i__5770__auto___58385 + (1));
i__5770__auto___58385 = G__58386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__58168_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__58168_SHARP_)));
}),impls);
var protocol_var = (function (){var G__58175 = ctx;
var G__58176 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__58177 = protocol_name;
var fexpr__58174 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__58174.cljs$core$IFn$_invoke$arity$3 ? fexpr__58174.cljs$core$IFn$_invoke$arity$3(G__58175,G__58176,G__58177) : fexpr__58174.call(null,G__58175,G__58176,G__58177));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58182){
var vec__58183 = p__58182;
var seq__58184 = cljs.core.seq(vec__58183);
var first__58185 = cljs.core.first(seq__58184);
var seq__58184__$1 = cljs.core.next(seq__58184);
var type = first__58185;
var meths = seq__58184__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq58169){
var G__58170 = cljs.core.first(seq58169);
var seq58169__$1 = cljs.core.next(seq58169);
var G__58171 = cljs.core.first(seq58169__$1);
var seq58169__$2 = cljs.core.next(seq58169__$1);
var G__58172 = cljs.core.first(seq58169__$2);
var seq58169__$3 = cljs.core.next(seq58169__$2);
var G__58173 = cljs.core.first(seq58169__$3);
var seq58169__$4 = cljs.core.next(seq58169__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58170,G__58171,G__58172,G__58173,seq58169__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58391 = arguments.length;
var i__5770__auto___58392 = (0);
while(true){
if((i__5770__auto___58392 < len__5769__auto___58391)){
args__5775__auto__.push((arguments[i__5770__auto___58392]));

var G__58393 = (i__5770__auto___58392 + (1));
i__5770__auto___58392 = G__58393;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__58186_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__58186_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58194){
var vec__58195 = p__58194;
var seq__58196 = cljs.core.seq(vec__58195);
var first__58197 = cljs.core.first(seq__58196);
var seq__58196__$1 = cljs.core.next(seq__58196);
var proto = first__58197;
var meths = seq__58196__$1;
var protocol_var = (function (){var G__58199 = ctx;
var G__58200 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__58201 = proto;
var fexpr__58198 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__58198.cljs$core$IFn$_invoke$arity$3 ? fexpr__58198.cljs$core$IFn$_invoke$arity$3(G__58199,G__58200,G__58201) : fexpr__58198.call(null,G__58199,G__58200,G__58201));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq58188){
var G__58189 = cljs.core.first(seq58188);
var seq58188__$1 = cljs.core.next(seq58188);
var G__58190 = cljs.core.first(seq58188__$1);
var seq58188__$2 = cljs.core.next(seq58188__$1);
var G__58191 = cljs.core.first(seq58188__$2);
var seq58188__$3 = cljs.core.next(seq58188__$2);
var G__58192 = cljs.core.first(seq58188__$3);
var seq58188__$4 = cljs.core.next(seq58188__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58189,G__58190,G__58191,G__58192,seq58188__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__58204_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__58204_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__58204_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__58207 = cljs.core._EQ_;
var expr__58208 = p;
if(cljs.core.truth_((pred__58207.cljs$core$IFn$_invoke$arity$2 ? pred__58207.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__58208) : pred__58207.call(null,cljs.core.IDeref,expr__58208)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__58207.cljs$core$IFn$_invoke$arity$2 ? pred__58207.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__58208) : pred__58207.call(null,cljs.core.ISwap,expr__58208)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__58207.cljs$core$IFn$_invoke$arity$2 ? pred__58207.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__58208) : pred__58207.call(null,cljs.core.IReset,expr__58208)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__58208)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__58225 = clazz;
var G__58225__$1 = (((G__58225 == null))?null:cljs.core.meta(G__58225));
if((G__58225__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__58225__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__58228_SHARP_){
return cljs.core.get_method(p1__58228_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
