;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Social Engineering']={
icon:"🎭",cat:"Social Engineering",col:"#ffdd66",
explain:[
 "ATTACK: SOCIAL ENGINEERING  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Attackers impersonate IT support, executives or regulators","to trick staff into giving up credentials or authorising transfers.",
 "","PRETEXTING: fabricating a scenario to gain trust.","  'Hi, Microsoft support — your PC has a critical virus.'",
 "  'I'm the CEO's PA — he needs his password reset NOW.'","",
 "OCR (1.3.3c): Social engineering exploits human psychology.","People are naturally helpful and trusting of authority —",
 "attackers weaponise this systematically.","",
 "Kevin Mitnick (world's most wanted hacker): 'Most of my hacks","were social engineering, not technical exploits.'","",
 "RESPONSE STEPS:","  1. EDUCATE — urgent awareness alert: verify ALL IT requests","  2. LOCKOUT — lock any accounts given to the impersonator","  3. NOTIFY-USERS — formal incident report + new procedures"
],
mutations:[
 {name:"Insider accomplice",label:"🤝 INSIDER THREAT",escMulti:1.6,spreadMult:1.4,userMult:1.2},
 {name:"Well-researched attacker",label:"🔍 OSINT-DRIVEN",escMulti:1.4,spreadMult:1.5,userMult:1.0},
 {name:"Opportunistic cold caller",label:"🎲 COLD CALLER",escMulti:0.7,spreadMult:0.5,userMult:0.8},
 {name:"BEC specialist group",label:"💼 BEC GROUP",escMulti:1.3,spreadMult:1.2,userMult:0.6}
],
scenarios:[
 {id:"helpdesk_vishing",name:"IT Helpdesk Vishing",short:"Phone call impersonating IT support requesting credentials",
  steps:["educate","lockout","notify-users"],
  smsgs:["Security alert broadcast: NEVER give passwords over phone. Verify via callback.",
         "Compromised accounts locked. Attacker access revoked.",
         "RESOLVED: Incident logged. Callback verification policy enforced."],
  wrong:{patch:"No software to patch — EDUCATE staff about phone verification NOW.",
         "null-route":"Phone calls can't be network-blocked. EDUCATE staff first.",
         isolate:"Isolating systems affects all staff. Target the human flaw — EDUCATE.",
         trace:"Tracing calls is impractical. EDUCATE about verification first."},
  escs:["Suspicious IT helpdesk calls requesting password resets",
        "Three employees gave credentials to caller claiming to be IT",
        "VPN ACCESS GRANTED to attacker — internal network compromised"],
  escR:35,uMin:50,uMax:2000,spread:"Phishing"},

 {id:"ceo_fraud",name:"CEO Fraud / BEC",short:"Executive impersonation targeting finance for wire transfer",
  steps:["educate","lockout","notify-users"],
  smsgs:["Finance team alerted: verify ALL wire transfer requests via callback to known number.",
         "Attacker email account and any compromised accounts locked.",
         "RESOLVED: Fraudulent transfer cancelled. Dual-authorisation policy enacted."],
  wrong:{patch:"No code to fix — EDUCATE the finance team about verification immediately.",
         trace:"Email headers easy to spoof. EDUCATE the finance team NOW.",
         block:"Blocking email won't stop phone follow-ups. EDUCATE first."},
  escs:["CEO email impersonation — urgent wire transfer request to finance",
        "Finance manager processing £180,000 transfer to unknown account",
        "£180,000 TRANSFERRED — funds already moved to cryptocurrency"],
  escR:28,uMin:1,uMax:10,spread:"Phishing"},

 {id:"contractor_impersonation",name:"Contractor Impersonation",short:"Fake IT contractor gains physical and system access",
  steps:["educate","lockout","notify-users"],
  smsgs:["Staff briefed: verify all contractors via procurement — no exceptions.",
         "Rogue accounts created by impersonator locked and audited.",
         "RESOLVED: Access audit complete. Physical security review initiated."],
  wrong:{isolate:"The attacker is already inside. EDUCATE staff on verification immediately.",
         "scan-net":"Scan later — EDUCATE staff to stop giving access to unverified 'contractors'.",
         block:"Can't block a person in the building. EDUCATE first."},
  escs:["Unverified contractor claiming to be here to fix servers",
        "Contractor given server room access — USB devices inserted",
        "BACKDOOR INSTALLED on physical servers — persistent access obtained"],
  escR:40,uMin:10,uMax:500,spread:"Trojan Backdoor"}
]};
})();
