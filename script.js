
const $=s=>document.querySelector(s);

const DATA=[
  {id:"bezos",name:"Jeff Bezos",age:61,worth:220,industry:["E-commerce","Cloud"],initials:"JB",headline:"Amazon & AWS.",how:[{when:"1994",what:"Started Amazon."},{when:"1997",what:"IPO; reinvested."},{when:"2006",what:"Launched AWS."}]},
  {id:"musk",name:"Elon Musk",age:54,worth:210,industry:["EVs","Space","Tech"],initials:"EM",headline:"Tesla & SpaceX.",how:[{when:"1999–2002",what:"X.com/PayPal."},{when:"2004–2012",what:"Led Tesla."},{when:"2002–",what:"Founded SpaceX."}]},
  {id:"buffett",name:"Warren Buffett",age:95,worth:130,industry:["Investing","Insurance"],initials:"WB",headline:"Berkshire Hathaway.",how:[{when:"1956–1965",what:"Partnerships."},{when:"1965–",what:"Insurance float."},{when:"1980s–2000s",what:"Coke, AmEx stakes."}]},
  {id:"oprah",name:"Oprah Winfrey",age:71,worth:2.8,industry:["Media","Entertainment"],initials:"OW",headline:"Media empire.",how:[{when:"1986–2011",what:"Syndication + rights."},{when:"2011–",what:"OWN network."}]},
  {id:"rihanna",name:"Rihanna",age:37,worth:1.4,industry:["Beauty","Music"],initials:"R",headline:"Fenty & music.",how:[{when:"2017",what:"Fenty Beauty."},{when:"2018–",what:"Savage X Fenty."}]},
  {id:"gates",name:"Bill Gates",age:69,worth:120,industry:["Software","Investing"],initials:"BG",headline:"Microsoft.",how:[{when:"1975–1980s",what:"MS‑DOS licensing."},{when:"1986",what:"Microsoft IPO."}]},
  {id:"zhong",name:"Zhong Shanshan",age:71,worth:60,industry:["Beverages","Pharma"],initials:"ZS",headline:"Nongfu Spring.",how:[{when:"1996",what:"Founded Nongfu."},{when:"2020",what:"IPO."}]},
  {id:"blakely",name:"Sara Blakely",age:54,worth:1.0,industry:["Apparel"],initials:"SB",headline:"Spanx.",how:[{when:"2000",what:"Patented idea."},{when:"2000s",what:"Retail growth."}]},
  {id:"zuck",name:"Mark Zuckerberg",age:41,worth:170,industry:["Social","VR/AR"],initials:"MZ",headline:"Meta (Facebook).",how:[{when:"2004",what:"Launched Facebook."},{when:"2012",what:"IPO; Instagram buy."},{when:"2014–",what:"WhatsApp; VR/AR bets."}]},
  {id:"ortega",name:"Amancio Ortega",age:89,worth:90,industry:["Fashion","Retail"],initials:"AO",headline:"Zara / Inditex.",how:[{when:"1975",what:"Opened first Zara."},{when:"2001",what:"Inditex IPO."}]},
  {id:"page",name:"Larry Page",age:52,worth:130,industry:["Search","Ads"],initials:"LP",headline:"Google co‑founder.",how:[{when:"1998",what:"Launched Google."},{when:"2000s",what:"AdWords/AdSense."}]},
  {id:"brin",name:"Sergey Brin",age:51,worth:125,industry:["Search","Ads"],initials:"SB",headline:"Google co‑founder.",how:[{when:"1998",what:"Launched Google."},{when:"2000s",what:"Scale & acquisitions."}]},
  {id:"slim",name:"Carlos Slim",age:85,worth:100,industry:["Telecom"],initials:"CS",headline:"América Móvil.",how:[{when:"1990s",what:"Telmex acquisition."},{when:"2000s",what:"Regional expansion."}]},
  {id:"kamprad",name:"Ingvar Kamprad",age:91,worth:58,industry:["Retail","Design"],initials:"IK",headline:"IKEA.",how:[{when:"1943",what:"Founded IKEA."},{when:"1950s–",what:"Flat‑pack model."}]},
  {id:"rowling",name:"J.K. Rowling",age:59,worth:1.0,industry:["Books","Media"],initials:"JKR",headline:"Harry Potter.",how:[{when:"1997",what:"First book published."},{when:"2000s–",what:"Films & licensing."}]},
  {id:"ambani",name:"Mukesh Ambani",age:68,worth:110,industry:["Energy","Telecom"],initials:"MA",headline:"Reliance Industries.",how:[{when:"2000s",what:"Petchem scale."},{when:"2016–",what:"Jio rollout."}]},
  {id:"jobs",name:"Steve Jobs",age:56,worth:10,industry:["Tech","Media"],initials:"SJ",headline:"Apple & Pixar.",how:[{when:"1976",what:"Co‑founded Apple."},{when:"1997–",what:"iMac, iPod, iPhone."}]},
  {id:"kylie",name:"Kylie Jenner",age:28,worth:0.9,industry:["Beauty","Media"],initials:"KJ",headline:"Kylie Cosmetics.",how:[{when:"2015",what:"Lip kits D2C."},{when:"2019",what:"Stake sale to Coty."}]},
  {id:"jayz",name:"Jay‑Z",age:55,worth:2.5,industry:["Music","Beverages"],initials:"JZ",headline:"Music & deals.",how:[{when:"1990s",what:"Label & masters."},{when:"2010s–",what:"Brand & tech stakes."}]},
  {id:"adani",name:"Gautam Adani",age:63,worth:70,industry:["Infrastructure","Energy"],initials:"GA",headline:"Ports to power.",how:[{when:"1990s",what:"Trading → ports."},{when:"2000s–2010s",what:"Energy & logistics scale."}]},
  {id:"sandberg",name:"Sheryl Sandberg",age:55,worth:1.7,industry:["Tech","Advertising"],initials:"SS",headline:"Monetized Facebook.",how:[{when:"2008–2015",what:"Built ads platform."},{when:"2010s",what:"Equity & diversification."}]},
  {id:"jackma",name:"Jack Ma",age:60,worth:30,industry:["E‑commerce","Fintech"],initials:"JM",headline:"Alibaba + Ant.",how:[{when:"1999",what:"Founded Alibaba."},{when:"2003–2014",what:"Taobao/Tmall; IPO."}]},
  {id:"kroc",name:"Ray Kroc",age:81,worth:0.6,industry:["Food","Franchising"],initials:"RK",headline:"McDonald’s scale.",how:[{when:"1955",what:"Franchise model."},{when:"1960s–1970s",what:"Global expansion."}]},
  {id:"ellison",name:"Larry Ellison",age:81,worth:160,industry:["Software","Databases"],initials:"LE",headline:"Oracle.",how:[{when:"1977",what:"Start Oracle."},{when:"1990s–2000s",what:"Acquisitions; suite."}]},
  {id:"dangote",name:"Aliko Dangote",age:68,worth:15,industry:["Commodities","Manufacturing"],initials:"ADg",headline:"Dangote Group.",how:[{when:"1990s",what:"Trading → manufacturing."},{when:"2000s",what:"Distribution moats."}]},
  {id:"mahuateng",name:"Pony Ma",age:53,worth:60,industry:["Social","Gaming"],initials:"PM",headline:"Tencent.",how:[{when:"1998–2004",what:"QQ/WeChat."},{when:"2010s",what:"Gaming investments."}]},
  {id:"thiel",name:"Peter Thiel",age:57,worth:7,industry:["VC","Software"],initials:"PT",headline:"PayPal, FB, Palantir.",how:[{when:"1998–2002",what:"PayPal exit."},{when:"2004–",what:"FB stake; venture bets."}]}
];

function card(p){
  return `<article class="card" data-id="${p.id}">
    <span class="badge">${p.industry[0]}</span>
    <div class="title">
      <div class="avatar">${p.initials}</div>
      <div><div><strong>${p.name}</strong></div><div class="small">${p.headline}</div></div>
    </div>
    <div class="meta">${p.industry.map(i=>`<span class="chip">${i}</span>`).join('')}</div>
    <div class="row"><button class="btn" data-action="details">How they got rich</button><span class="stat">$${p.worth}B</span></div>
  </article>`;
}

function render(){ $('#grid').innerHTML = DATA.map(card).join('') }

function openDetail(p){
  const html = `
    <h2>${p.name}</h2>
    <div class="kpis">
      <div class="kpi">Age: <strong>${p.age}</strong></div>
      <div class="kpi">Worth: <strong>$${p.worth}B</strong></div>
      <div class="kpi">Industry: <strong>${p.industry.join(', ')}</strong></div>
    </div>
    <div class="timeline">
      ${p.how.map(s=>`<div class="step"><div><strong>${s.when}</strong></div><div>${s.what}</div></div>`).join('')}
    </div>
    <p style="color:var(--muted);margin-top:10px">Short, simplified steps. Numbers can change.</p>
  `;
  $('#detail').innerHTML = html;
  $('#overlay').hidden = false;
}

function events(){
  $('#grid').addEventListener('click', e => {
    const btn=e.target.closest('[data-action="details"]'); if(!btn) return;
    const id=e.target.closest('.card').dataset.id;
    const p=DATA.find(x=>x.id===id);
    if(p) openDetail(p);
  });
  $('#closeBtn').addEventListener('click', ()=> $('#overlay').hidden=true);
  $('#overlay').addEventListener('click', e => { if(e.target.id==='overlay') $('#overlay').hidden=true; });
  document.addEventListener('keydown', e => { if(e.key==='Escape') $('#overlay').hidden=true; });
}

function init(){ render(); events(); }
document.addEventListener('DOMContentLoaded', init);
