;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['DNS Poisoning']={
icon:"☣",cat:"Network Attack",col:"#44ffcc",
explain:[
 "ATTACK: DNS POISONING  |  OCR SPEC: 1.3.3(b) + 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "DNS (Domain Name System) translates domain names to IP addresses.","Poisoning corrupts cached DNS records so legitimate addresses",
 "resolve to attacker-controlled servers instead.","",
 "OCR DIRECT LINK (1.3.3b): DNS is in the internet structure spec.","You type: www.mybank.com",
 "Poisoned DNS says: go to 193.27.88.1 (attacker's fake server)","Users see: a perfect bank clone — completely unaware.",
 "","DNSSEC: DNS Security Extensions uses digital signatures to","authenticate DNS responses — prevents poisoning entirely.",
 "","RESPONSE STEPS:","  1. DNS-FLUSH — clear poisoned entries from all resolvers","  2. PATCH — implement DNSSEC and authenticated resolvers"
],
mutations:[
 {name:"ISP-level compromise",label:"🌐 ISP COMPROMISE",escMulti:1.7,spreadMult:2.0,userMult:3.0},
 {name:"Router firmware hack",label:"📡 ROUTER HACK",escMulti:1.3,spreadMult:1.4,userMult:1.5},
 {name:"Local cache attack",label:"🎲 LOCAL CACHE",escMulti:0.7,spreadMult:0.5,userMult:0.6},
 {name:"BGP route hijack",label:"⚡ BGP HIJACK",escMulti:1.9,spreadMult:2.5,userMult:4.0}
],
scenarios:[
 {id:"cache_poisoning",name:"DNS Cache Poisoning",short:"Corporate DNS resolver cache injected with fake records",
  steps:["dns-flush","patch"],
  smsgs:["DNS cache flushed across all corporate resolvers. Poisoned records removed.",
         "RESOLVED: DNSSEC deployed. Authenticated DNS responses only."],
  wrong:{block:"Users are reaching a server — just the wrong one. DNS-FLUSH to correct records.",
         isolate:"Don't isolate the DNS server — everyone needs it. DNS-FLUSH the cache.",
         educate:"Users can't detect this — DNS-FLUSH immediately.",
         trace:"Poison is active NOW — DNS-FLUSH to protect users immediately."},
  escs:["Anomalous DNS responses — corporate resolver cache poisoned",
        "Staff being silently redirected to credential-harvesting fake sites",
        "BANKING CREDENTIALS HARVESTED — 2,400 accounts compromised"],
  escR:25,uMin:500,uMax:20000,spread:"Phishing"},

 {id:"router_dns",name:"Home Router DNS Hijack",short:"ISP routers remotely accessed — DNS server changed",
  steps:["dns-flush","patch"],
  smsgs:["Affected routers detected. ISP notified. DNS settings remotely corrected.",
         "RESOLVED: Firmware patches deployed. Default credentials changed."],
  wrong:{isolate:"Isolating the router cuts internet access for everyone. DNS-FLUSH first.",
         block:"The attack is already in the router firmware. DNS-FLUSH the records.",
         "notify-users":"Users need their internet back. DNS-FLUSH first, then notify."},
  escs:["Home routers with default passwords — DNS server changed remotely",
        "60,000 home users redirected to phishing infrastructure",
        "MASS CREDENTIAL HARVEST: banking sites cloned, logins stolen"],
  escR:20,uMin:5000,uMax:100000,spread:"Credential Stuffing"},

 {id:"bgp_hijack",name:"BGP Route Hijacking",short:"Internet routing protocol manipulated — global misdirection",
  steps:["dns-flush","patch"],
  smsgs:["BGP routing tables corrected. Traffic restored to legitimate infrastructure.",
         "RESOLVED: Route authentication (RPKI) deployed. BGP hardened."],
  wrong:{trace:"BGP manipulation operates at carrier level — DNS-FLUSH first.",
         isolate:"Can't isolate the internet. DNS-FLUSH to restore routing.",
         block:"BGP operates at the carrier layer — standard blocks won't reach it."},
  escs:["BGP route hijack detected — traffic being misdirected at carrier level",
        "Major bank website traffic hijacked — regional users being intercepted",
        "MILLIONS OF USERS AFFECTED — global routing compromise"],
  escR:14,uMin:50000,uMax:500000,spread:"Man-in-the-Middle"}
]};
})();
