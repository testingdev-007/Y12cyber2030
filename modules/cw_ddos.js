;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['DDoS']={
icon:"⚡",cat:"Network Attack",col:"#4488ff",
explain:[
 "ATTACK: DDoS  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Distributed Denial of Service floods the target with traffic","from thousands of compromised devices (a botnet), exhausting",
 "bandwidth and CPU until legitimate users can't connect.","",
 "OCR: DDoS attacks AVAILABILITY — one of the CIA triad.","(Confidentiality, Integrity, Availability)",
 "","DEFENCES: Null routing (drop attack traffic at router level),","rate limiting, CDN traffic scrubbing, ISP upstream filtering.",
 "","KEY INSIGHT: Isolating the server = the attacker wins.","You must drop the attack traffic, not the legitimate service.","",
 "RESPONSE STEPS:","  1. NULL-ROUTE — drop attack traffic upstream at the router","  2. RATE-LIMIT — throttle remaining suspicious connections"
],
mutations:[
 {name:"State-sponsored DDoS",label:"🏴 APT BOTNET",escMulti:1.7,spreadMult:2.0,userMult:2.0},
 {name:"Hacktivist campaign",label:"⚡ HACKTIVIST",escMulti:1.2,spreadMult:1.5,userMult:1.4},
 {name:"Script kiddie stresser",label:"🎲 STRESSER TOOL",escMulti:0.6,spreadMult:0.3,userMult:0.7},
 {name:"IoT botnet",label:"📡 IOT BOTNET",escMulti:1.4,spreadMult:1.8,userMult:1.5}
],
scenarios:[
 {id:"volumetric",name:"Volumetric DDoS Flood",short:"Pure bandwidth exhaustion — massive traffic volume",
  steps:["null-route","rate-limit"],
  smsgs:["Null route applied. 847Gbps attack traffic dropped at upstream router.",
         "RESOLVED: Rate limiting active. Legitimate traffic restored."],
  wrong:{isolate:"Isolating the server takes it offline — that's exactly what the attacker wants. NULL-ROUTE.",
         patch:"DDoS isn't a software flaw. NULL-ROUTE to block attack traffic.",
         block:"Standard IP blocking can't handle botnet scale. NULL-ROUTE upstream.",
         trace:"Analysis wastes time during active DDoS. NULL-ROUTE first."},
  escs:["Server response times critical — 847Gbps attack traffic incoming",
        "Service intermittent — 75% packet loss affecting all users",
        "TOTAL OUTAGE — server offline, zero connectivity for all users"],
  escR:16,uMin:5000,uMax:100000,spread:"DDoS"},

 {id:"app_layer",name:"Application Layer DDoS",short:"HTTP flood exhausting server CPU — not bandwidth",
  steps:["null-route","rate-limit"],
  smsgs:["Suspicious HTTP patterns identified and upstream filtered.",
         "RESOLVED: Per-IP rate limiting applied. Server CPU normalised."],
  wrong:{isolate:"Taking the app offline = attack success. NULL-ROUTE the HTTP flood.",
         patch:"No code vulnerability — the application is working correctly. NULL-ROUTE.",
         educate:"Users aren't the problem. NULL-ROUTE the HTTP flood traffic."},
  escs:["Application CPU at 100% — HTTP flood from distributed sources",
        "Database connections exhausted — app throwing 503 errors",
        "APPLICATION COMPLETELY UNRESPONSIVE — all requests rejected"],
  escR:20,uMin:2000,uMax:40000,spread:"DDoS"},

 {id:"dns_amplification",name:"DNS Amplification Attack",short:"DNS reflection multiplying attack traffic 50x",
  steps:["null-route","rate-limit"],
  smsgs:["Open DNS resolvers identified and blocked. Amplification halted.",
         "RESOLVED: Rate limiting on DNS queries applied. Traffic normalised."],
  wrong:{isolate:"The attack comes from DNS infrastructure, not one machine. NULL-ROUTE.",
         "dns-flush":"DNS flush won't stop incoming amplified traffic. NULL-ROUTE first.",
         trace:"Traffic source is spoofed — tracing won't help. NULL-ROUTE immediately."},
  escs:["DNS amplification detected — 50x traffic multiplication factor",
        "Network edge saturated — legitimate DNS queries failing",
        "NETWORK INFRASTRUCTURE OFFLINE — DNS resolution failing globally"],
  escR:18,uMin:10000,uMax:200000,spread:"DNS Poisoning"}
]};
})();
