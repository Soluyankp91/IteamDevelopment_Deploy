"use strict";(self.webpackChunkTT=self.webpackChunkTT||[]).push([[371],{9371:(J,Z,n)=>{n.r(Z),n.d(Z,{CharacterDetailsModule:()=>E});var g=n(6895),m=n(7748),y=n(9300),T=n(4004),s=n(6814);const d=(0,s.ZF)("charactersDetails"),A=(0,s.P1)(d,e=>e.result),C=(0,s.P1)(d,e=>e.isLoading),x=(0,s.P1)(d,e=>e.error),o=(0,s.R7)({source:"Character Details Page",events:{"Character Loaded Success":(0,s.Ky)(),"Character Loaded Fail":(0,s.Ky)(),"Character Details Load":(0,s.Ky)(),NO_OP_CACHE:(0,s.uZ)()}});var t=n(1571),v=n(1572),p=n(3646);function U(e,a){1&e&&(t.ynx(0),t._UZ(1,"mat-spinner",4),t.BQk())}function O(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&e){const r=a.ngIf;t.xp6(2),t.Oqu(r.message)}}function I(e,a){if(1&e&&(t.YNc(0,O,3,1,"ng-container",1),t.ALo(1,"async")),2&e){const r=t.oxw(),i=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,2,r.error$))("ngIfElse",i)}}function q(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",6),t._uU(2,"Character Details"),t.qZA(),t.TgZ(3,"mat-list-item")(4,"span",7),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"span",8),t._uU(7),t.qZA()(),t.TgZ(8,"mat-list-item")(9,"span",7),t._uU(10,"Gender"),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA()(),t.TgZ(13,"mat-list-item")(14,"span",7),t._uU(15,"Birth Year"),t.qZA(),t.TgZ(16,"span",8),t._uU(17),t.qZA()(),t.TgZ(18,"mat-list-item")(19,"span",7),t._uU(20,"Eye color"),t.qZA(),t.TgZ(21,"span",8),t._uU(22),t.qZA()(),t.TgZ(23,"mat-list-item")(24,"span",7),t._uU(25,"Hair color"),t.qZA(),t.TgZ(26,"span",8),t._uU(27),t.qZA()(),t.TgZ(28,"mat-list-item")(29,"span",7),t._uU(30,"Height"),t.qZA(),t.TgZ(31,"span",8),t._uU(32),t.qZA()(),t.TgZ(33,"mat-list-item")(34,"span",7),t._uU(35,"Mass"),t.qZA(),t.TgZ(36,"span",8),t._uU(37),t.qZA()(),t.TgZ(38,"mat-list-item")(39,"span",7),t._uU(40,"Creation Date"),t.qZA(),t.TgZ(41,"span",8),t._uU(42),t.ALo(43,"date"),t.qZA()(),t.TgZ(44,"mat-list-item")(45,"span",7),t._uU(46,"HomeWorld"),t.qZA(),t.TgZ(47,"span",8),t._uU(48),t.qZA()(),t.BQk()),2&e){const r=a.ngIf,i=t.oxw(2);t.xp6(7),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.name),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.gender),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.birth_year),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.eye_color),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.hair_color),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.height),t.xp6(5),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.mass),t.xp6(5),t.Oqu(t.xi3(43,9,null==r.character||null==r.character.properties?null:r.character.properties.created,i.dateFormat)),t.xp6(6),t.Oqu(null==r.character||null==r.character.properties?null:r.character.properties.homeworld)}}const D=function(e){return{character:e}};function F(e,a){if(1&e&&(t.TgZ(0,"mat-list"),t.YNc(1,q,49,12,"ng-container",5),t.ALo(2,"async"),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",t.VKq(3,D,t.lcZ(2,1,r.characters$)))}}const $=[{path:":id",component:(()=>{const a=class{constructor(i,c){this.route=i,this.store=c,this.characters$=this.store.select(A).pipe((0,y.h)(l=>!!l),(0,T.U)(l=>l[this.characterId])),this.isLoading$=this.store.select(C),this.error$=this.store.select(x),this.dateFormat="dd/MM/yyyy",this.characterId=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.store.dispatch(o.characterDetailsLoad({id:this.characterId}))}};let e=a;return a.\u0275fac=function(c){return new(c||a)(t.Y36(m.gz),t.Y36(s.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-character-details"]],decls:7,vars:4,consts:[[1,"wrapper"],[4,"ngIf","ngIfElse"],["content",""],["item",""],[1,"spinner"],[4,"ngIf"],["mat-subheader","",1,"header"],["matListItemTitle",""],["matListItemLine",""]],template:function(c,l){if(1&c&&(t.TgZ(0,"div",0),t.YNc(1,U,2,0,"ng-container",1),t.ALo(2,"async"),t.YNc(3,I,2,4,"ng-template",null,2,t.W1O),t.qZA(),t.YNc(5,F,3,5,"ng-template",null,3,t.W1O)),2&c){const u=t.MAs(4);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,l.isLoading$))("ngIfElse",u)}},dependencies:[g.O5,v.Ou,p.i$,p.Tg,p.gs,p.WW,p.sL,g.Ov,g.uU],styles:["[_nghost-%COMP%]{display:block}.spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.wrapper[_ngcontent-%COMP%]{padding:10px}.header[_ngcontent-%COMP%]{font-size:20px}"],changeDetection:0}),e})()}];let B=(()=>{const a=class{};let e=a;return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.Bz.forChild($),m.Bz]}),e})();var h=n(2655),P=n(3900),L=n(9646),Y=n(262),M=n(6194);let S=(()=>{const a=class{constructor(i,c,l){this.actions$=i,this.store=c,this.apiService=l,this.loadCharacterDetails$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(o.characterDetailsLoad),(0,h.IC)(u=>this.store.select(A)),(0,P.w)(([u,W])=>W?.[u.id]?(0,L.of)(o.no_op_cache()):this.apiService.getCharacterById$(u.id).pipe((0,T.U)(f=>o.characterLoadedSuccess({character:f.result})),(0,Y.K)(f=>(0,L.of)(o.characterLoadedFail({error:f.error})))))))}};let e=a;return a.\u0275fac=function(c){return new(c||a)(t.LFG(h.eX),t.LFG(s.yh),t.LFG(M.s))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),e})();const Q=(0,s.Lq)({result:null,isLoading:!1,error:null},(0,s.on)(o.characterDetailsLoad,e=>({...e,isLoading:!0})),(0,s.on)(o.characterLoadedSuccess,(e,{character:a})=>{const r={...e.result};return r[a.uid]=a,{result:r,isLoading:!1,error:null}}),(0,s.on)(o.characterLoadedFail,(e,{error:a})=>({...e,isLoading:!1,error:a})),(0,s.on)(o.no_op_cache,e=>({...e,isLoading:!1})));var z=n(8741);let E=(()=>{const a=class{};let e=a;return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,B,h.sQ.forFeature(S),s.Aw.forFeature("charactersDetails",Q),z.m]}),e})()}}]);