;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Brute Force']={
icon:"🔨",cat:"Auth Attack",col:"#ffcc44",
explain:[
 "ATTACK: BRUTE FORCE  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Automated tools test thousands of password combinations per","second against login portals until one works.",
 "","THE MATHS: 8-char lowercase = 26^8 = 208 billion combos.","At 1M attempts/sec = 58 hours.",
 "Add uppercase + numbers: 218 trillion combos = 2,500 years!","This is WHY complexity rules exist.",
 "","VARIANTS: Pure brute-force (all combinations), Dictionary","(common passwords list), Credential Stuffing (breached DBs).",
 "","DEFENCES: Account lockout policy, rate limiting per IP,","CAPTCHA to detect bots, MFA (correct password = still no access).",
 "","RESPONSE STEPS:","  1. LOCKOUT — enforce lockout after N failed attempts","  2. RATE-LIMIT — throttle authentication requests per IP/second"
],
mutations:[
 {name:"Distributed botnet",label:"🌐 DISTRIBUTED",escMulti:1.4,spreadMult:1.3,userMult:1.5},
 {name:"Password spray",label:"🌊 PASSWORD SPRAY",escMulti:1.1,spreadMult:1.0,userMult:2.0},
 {name:"Targeted attack",label:"🎯 TARGETED",escMulti:1.3,spreadMult:0.8,userMult:0.5},
 {name:"Script kiddie",label:"🎲 SCRIPT KIDDIE",escMulti:0.6,spreadMult:0.4,userMult:0.7}
],
scenarios:[
 {id:"dictionary_attack",name:"Dictionary Attack",short:"Common password wordlist tested at high speed",
  steps:["lockout","rate-limit"],
  smsgs:["Account lockout enforced: 5 attempts max before 15-minute lockout.",
         "RESOLVED: Rate limiting applied. Attack neutralised."],
  wrong:{patch:"No software bug — auth is working correctly. LOCKOUT stops the guessing.",
         isolate:"Isolating the auth server locks everyone out. Use LOCKOUT.",
         trace:"Source is obvious — it's a dictionary attack. LOCKOUT immediately.",
         block:"Blocking one IP won't stop a distributed attack. LOCKOUT accounts."},
  escs:["Dictionary attack on login portal — top 10,000 passwords being tried",
        "Multiple accounts locked out — some already compromised",
        "ADMIN PASSWORD CRACKED — elevated privileges obtained"],
  escR:22,uMin:100,uMax:5000,spread:"Credential Stuffing"},

 {id:"password_spray",name:"Password Spray Attack",short:"Top 5 passwords tried against every account — evades lockout",
  steps:["lockout","rate-limit"],
  smsgs:["Spray pattern detected. Lockout threshold tightened to 3 attempts.",
         "RESOLVED: Per-IP rate limiting applied. Spray neutralised."],
  wrong:{isolate:"Isolation stops all access. LOCKOUT with reduced threshold stops the spray.",
         patch:"The auth system is working — LOCKOUT with tighter policy.",
         trace:"Spray comes from thousands of IPs. LOCKOUT by attempt count."},
  escs:["Password spray detected — 'Password1' tried on all 4,200 accounts",
        "47 accounts accessed via common passwords — data at risk",
        "MULTIPLE ADMIN ACCOUNTS COMPROMISED — full domain access"],
  escR:28,uMin:50,uMax:20000,spread:"Credential Stuffing"},

 {id:"credential_reuse",name:"Credential Reuse Attack",short:"Leaked breach passwords tested — 85% of people reuse",
  steps:["lockout","rate-limit"],
  smsgs:["Accounts matching known breach signatures locked pending reset.",
         "RESOLVED: Rate limiting deployed. Breach-matched accounts reset."],
  wrong:{block:"Proxied IPs from thousands of countries. LOCKOUT by credential match.",
         "null-route":"Blocking network won't fix reused passwords. LOCKOUT affected accounts.",
         educate:"Education takes time — LOCKOUT matching accounts NOW."},
  escs:["Login attempts using credentials from known breach database",
        "300+ accounts accessed using reused passwords",
        "PAYMENT DATA ACCESSED — GDPR breach notification required"],
  escR:18,uMin:500,uMax:50000,spread:"Credential Stuffing"}
]};
})();
