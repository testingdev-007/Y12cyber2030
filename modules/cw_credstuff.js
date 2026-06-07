;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Credential Stuffing']={
icon:"🔑",cat:"Auth Attack",col:"#ff8844",
explain:[
 "ATTACK: CREDENTIAL STUFFING  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Billions of username:password pairs from past breaches are","freely available on dark web markets. Stuffing tests them",
 "at scale across services, exploiting widespread password reuse.","",
 "THE UNCOMFORTABLE TRUTH: 85% of people reuse passwords.","One breach = every service they share that password with",
 "is now vulnerable. At machine speed.","",
 "SCALE: A single breach DB can have 8 billion credentials.","At 1M attempts/hour, even 0.1% success = 8,000 accounts.",
 "","MFA (Multi-Factor Authentication) completely defeats this.","Even with the correct password, the second factor blocks entry.",
 "","RESPONSE STEPS:","  1. LOCKOUT — lock accounts matching known breach databases","  2. REVOKE-ACCESS — force password resets for all matches"
],
mutations:[
 {name:"Fresh breach database",label:"💾 FRESH BREACH DB",escMulti:1.4,spreadMult:1.5,userMult:2.0},
 {name:"Botnet-distributed",label:"🌐 BOTNET DIST.",escMulti:1.3,spreadMult:1.3,userMult:1.8},
 {name:"Targeted sector attack",label:"🎯 SECTOR TARGETED",escMulti:1.2,spreadMult:1.0,userMult:1.5},
 {name:"Opportunistic scan",label:"🎲 AUTOMATED SCAN",escMulti:0.7,spreadMult:0.6,userMult:0.9}
],
scenarios:[
 {id:"dark_web_db",name:"Dark Web Database Attack",short:"Millions of fresh breach credentials being tested",
  steps:["lockout","revoke-access"],
  smsgs:["Accounts matching Haveibeenpwned breach DB flagged and locked.",
         "RESOLVED: 2,847 accounts force-reset. MFA enforced organisation-wide."],
  wrong:{"null-route":"IPs rotate via proxy networks — LOCKOUT by credential match, not IP.",
         patch:"No code vulnerability — just reused passwords. LOCKOUT matching accounts.",
         trace:"Thousands of distributed IPs — LOCKOUT accounts instead of tracing."},
  escs:["Credential stuffing using dark web breach DB — 2M combos/hour",
        "847 accounts successfully accessed — customer data at risk",
        "PAYMENT DETAILS ACCESSED — GDPR mandatory notification triggered"],
  escR:20,uMin:5000,uMax:100000,spread:"Phishing"},

 {id:"sector_spray",name:"Financial Sector Spray",short:"Banking credentials specifically targeted — high-value accounts",
  steps:["lockout","revoke-access"],
  smsgs:["High-value account patterns locked. Financial transaction freeze applied.",
         "RESOLVED: All targeted accounts reset. Out-of-band verification enforced."],
  wrong:{isolate:"Isolating auth server blocks all customers. LOCKOUT targeted accounts.",
         block:"Blocklist won't keep up with proxy rotation. LOCKOUT the at-risk accounts.",
         educate:"Education takes days — LOCKOUT matching accounts NOW."},
  escs:["Financial sector credentials being systematically tested",
        "High-value banking accounts accessed — transfers attempted",
        "£4.2M IN FRAUDULENT TRANSFERS INITIATED — fraud detection triggered"],
  escR:16,uMin:1000,uMax:40000,spread:"Man-in-the-Middle"},

 {id:"streaming_gaming",name:"Account Takeover Campaign",short:"Subscription accounts resold — gateway for payment fraud",
  steps:["lockout","revoke-access"],
  smsgs:["Matching accounts locked. Anomalous access pattern flagged.",
         "RESOLVED: Affected accounts reset. Session invalidation complete."],
  wrong:{"null-route":"Stuffing comes from residential proxies — LOCKOUT by credential match.",
         isolate:"Isolating the service affects millions. Targeted LOCKOUT instead.",
         trace:"100k+ IPs involved. LOCKOUT is faster and more effective."},
  escs:["Account takeover campaign — subscription accounts being accessed",
        "12,000 accounts compromised — payment methods exposed",
        "MASS PAYMENT FRAUD: stored cards being used across 12,000 accounts"],
  escR:24,uMin:10000,uMax:500000,spread:"Phishing"}
]};
})();
