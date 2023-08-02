import{_ as v,r as h,o as a,c as n,a as t,b as i,w as m,F as p,d as f,e as y,t as c,f as x,n as w,p as $,g as C}from"./index-8fc6a3f4.js";const k={data(){return{products:{}}},methods:{async list(e=1){this.$store.commit("setLoading",{status:!0}),e!=1&&this.$router.push({path:"/",query:{page:e}}),this.$http.get("/products?page="+e).then(o=>{let d=o.data;this.products=d,this.$store.commit("setLoading",{status:!1})})},destroy(e){this.$swal({title:"Atenção!",text:"Você realmente deseja excluir esse item? Essa ação não pode ser desfeita",icon:"question",showCancelButton:!0,confirmButtonText:"SIM",cancelButtonText:"Cancelar",preConfirm:()=>{this.$store.commit("setLoading",{status:!0}),this.$http.delete("products/"+e).then(o=>{this.$util.toast(o.data),this.list(),this.$store.commit("setLoading",{status:!1})}).catch(o=>{o.response&&(o.response.status===422||o.response.status===404)&&(this.$util.toast(o.response.data),this.$store.commit("setLoading",{status:!1}))})}})}},mounted(){this.list(this.$route.query.page??1)}},g=e=>($("data-v-5baf1cb2"),e=e(),C(),e),V={class:"d-flex justify-content-between mt-3"},B=g(()=>t("h3",{class:"mt-3"},"Eletrodomésticos",-1)),L={class:"card mt-3"},I={class:"card-body"},S={class:"table-responsive"},j={class:"table table-striped table-hover"},N=g(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-center"},"#"),t("th",{scope:"col",style:{"min-width":"250px"}},"Titulo"),t("th",{scope:"col"},"Marca"),t("th",{scope:"col"},"Valor"),t("th",{scope:"col",style:{width:"150px"}},"Ações")])],-1)),T={scope:"row",class:"text-center"},q={style:{"vertical-align":"middle"}},E={class:"d-flex"},A={class:"d-flex justify-content-center align-items-center img shadow-sm"},F=["src"],M={class:"ms-2"},P={class:"text-left"},z=["onClick"],D={class:"d-flex justify-content-center"},R={class:"pagination"},G=["onClick"];function H(e,o,d,J,l,r){const _=h("router-link"),u=h("font-awesome-icon");return a(),n("div",null,[t("div",V,[B,t("div",null,[i(_,{class:"btn btn-primary",to:{name:"products.create"}},{default:m(()=>[y(" + Cadastrar ")]),_:1},8,["to"])])]),t("div",L,[t("div",I,[t("div",S,[t("table",j,[N,t("tbody",null,[(a(!0),n(p,null,f(l.products.data,s=>(a(),n("tr",{key:s.id},[t("th",T,c(s.id),1),t("td",q,[t("div",E,[t("div",A,[s.images.length>0?(a(),n("img",{key:0,class:"img-fluid",src:s.images[0].src.full_src??null},null,8,F)):x("",!0)]),t("div",M,c(s.name),1)])]),t("td",null,c(s.brand.name),1),t("td",P,"R$ "+c(s.value),1),t("td",null,[i(_,{class:"btn btn-primary m-1",to:{name:"products.edit",params:{id:s.id}}},{default:m(()=>[i(u,{icon:"edit"})]),_:2},1032,["to"]),t("button",{class:"btn-danger m-1 btn",onClick:b=>r.destroy(s.id)},[i(u,{icon:"trash"})],8,z)])]))),128))])])]),t("nav",D,[t("ul",R,[(a(!0),n(p,null,f(l.products.last_page,s=>(a(),n("li",{class:w(["page-item",{active:s===l.products.current_page}]),key:s.label},[t("a",{class:"page-link",onClick:b=>r.list(s)},c(s),9,G)],2))),128))])])])])])}const O=v(k,[["render",H],["__scopeId","data-v-5baf1cb2"]]);export{O as default};