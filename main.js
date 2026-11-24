const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ic=n=>`<svg class="i"><use href="#${n}"/></svg>`;
let topic="",cur="m";
const wa=k=>`https://wa.me/${U[k].w}?text=`+encodeURIComponent(`Olá! Conheci o consultório pelo site e gostaria de informações sobre agendamento na unidade ${U[k].n}.`+(topic?` Tenho interesse em: ${topic}.`:""));
const map=k=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(U[k].q);
$$("img[data-photo]").forEach(i=>{i.src=PHOTO;i.onerror=()=>{i.style.visibility="hidden"}});
$("#ug").innerHTML=Object.keys(U).map(k=>{const u=U[k];return `<article class="un ${k} rv"><h3>${u.n}</h3><div class="r">${ic("pin")}<span>${u.a?u.a+"<br>":""}${u.c}<br>Referência: ${u.r}.</span></div><div class="r">${ic("ph")}<span>${u.t}</span></div><div class="bt"><a class="btn ${k=="m"?"p":"w"}" data-wa="${k}" target="_blank" rel="noopener">Agendar em ${u.n}</a><a class="btn ${k=="m"?"o":"g"}" data-map="${k}" target="_blank" rel="noopener">${ic("nav")}Como chegar</a></div></article>`}).join("");
function sync(){$$("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa));$$("[data-map]").forEach(a=>a.href=map(a.dataset.map));$$("[data-tel]").forEach(a=>{a.textContent=U[a.dataset.tel].t;a.href="tel:+55"+U[a.dataset.tel].t.replace(/\D/g,"")});
$("#bkT").textContent="Agendar em "+U[cur].n;$("#bkI").textContent=U[cur].t+(topic?" · Interesse: "+topic:"");$("#bkB").href=wa(cur);$$(".sel button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.u==cur))}
$$(".sel button").forEach(b=>b.onclick=()=>{cur=b.dataset.u;sync()});
document.addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(b){topic=b.dataset.t;sync();$("#unidades").scrollIntoView({behavior:"smooth"})}});
const hd=$("#hd");const bg=$("#bg");
bg.onclick=()=>{const o=hd.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
$$("#nav a").forEach(a=>a.onclick=()=>{hd.classList.remove("open");bg.setAttribute("aria-expanded","false")});
addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>30),{passive:true});
$("#hideRv").onclick=()=>{$("#rg").hidden=true;$("#hideRv").hidden=true};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)$$("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(s=>so.observe(s));
sync();

(function(){
$('.hr .btn').innerHTML='Agendar<span class="lg"> consulta</span>';
document.body.insertAdjacentHTML('afterbegin','<a class="skip" href="#inicio">Pular para o conteúdo</a>');
$('#hd .c').insertAdjacentHTML('afterend','<i id="pr"></i>');
$('.fr').insertAdjacentHTML('beforeend','<span class="cap">Dra. Cibelle Aleixo &amp; Dr. Iago Gonzaga<small>Monteiro e Sumé — PB</small></span>');
$('#tg').innerHTML=T.map(t=>`<article class="cd rv"><div class="vis">${ic(t[0])}</div><div class="bd"><h3>${t[1]}</h3><p>${t[2]}</p><button data-t="${t[1]}">Saiba mais<span></span></button></div></article>`).join('');
$('#pg').innerHTML=P.map((p,i)=>`<article class="pf rv"><div class="pic"><img src="${CROPS[i]}" alt="${p[0]}" loading="lazy" width="320" height="400"><span class="tag">${ic('tooth')}Foto oficial</span></div><div class="b"><h3>${p[0]}</h3><div class="t">${p[1]}</div><p>${p[2]}</p><div class="slots">CRO · Formação · Especializações: a confirmar</div><a class="btn p" href="#unidades">Agendar atendimento</a></div></article>`).join('');
$$('#ug [data-wa],.mb [data-wa]').forEach(a=>a.insertAdjacentHTML('afterbegin',ic('wa')+' '));
sync();
$$('#tg .rv,#pg .rv').forEach(e=>io.observe(e));
const pr=$('#pr');addEventListener('scroll',()=>{pr.style.transform='scaleX('+(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))+')'},{passive:true});
})();
