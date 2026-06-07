;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Phishing']={
icon:"✉",cat:"Social Engineering",col:"#ffaa00",
explain:[
 "ATTACK: PHISHING  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Phishing sends fake emails mimicking trusted organisations","to steal credentials or install malware.",
 "It exploits HUMAN PSYCHOLOGY not software — making it","bypass purely technical defences like firewalls.",
 "","OCR KEY TERM: Social engineering — attacking people","rather than technology. Covered in 1.3.3(c).",
 "","DEFENCES: Email gateway filtering, DNS blacklisting,","user awareness training, MFA (so stolen passwords alone","aren't enough), reporting culture.",
 "","Wrong command? Hints:","  Phishing lives in email — TRACE the sending server first.","  BLOCK at gateway prevents more emails arriving.","  NOTIFY-USERS to change passwords and report suspicious mail."
],
mutations:[
 {name:"Nation-state actor",label:"🏴 STATE-SPONSORED",escMulti:1.6,spreadMult:2.0,userMult:1.4},
 {name:"AI-generated lures",label:"🤖 AI-ENHANCED",escMulti:1.3,spreadMult:1.1,userMult:1.2},
 {name:"Opportunistic",label:"🎲 OPPORTUNISTIC",escMulti:0.7,spreadMult:0.5,userMult:0.8},
 {name:"Coordinated campaign",label:"🌐 COORDINATED",escMulti:1.1,spreadMult:2.2,userMult:1.5}
],
scenarios:[
 {id:"mass_campaign",name:"Mass Phishing Campaign",short:"Bulk emails sent to entire organisation",
  steps:["trace","block","notify-users"],
  smsgs:["Origin traced: malicious domain on compromised server identified.",
         "Domain blacklisted at email gateway. New emails quarantined.",
         "RESOLVED: Staff alerted. Passwords reset. Emails purged."],
  wrong:{isolate:"Isolation targets machines, not mail servers. TRACE the sending domain first.",
         patch:"No software bug — users are being tricked. TRACE identifies the source.",
         lockout:"Locking accounts hurts legit users. TRACE and BLOCK the domain first."},
  escs:["Phishing emails reaching all inboxes — credentials at risk",
        "Users clicking malicious links — credential harvest underway",
        "ADMIN CREDENTIALS STOLEN — full network access obtained"],
  escR:28,uMin:5000,uMax:60000,spread:"Credential Stuffing"},

 {id:"spear_phish",name:"Spear Phishing",short:"Highly targeted email crafted for specific employees",
  steps:["trace","block","notify-users"],
  smsgs:["Sending server identified. Target list of 12 employees confirmed.",
         "Malicious domain blocked. Targeted emails quarantined.",
         "RESOLVED: Targeted staff briefed. Credentials changed."],
  wrong:{isolate:"TRACE the sending domain — isolation won't reach delivered emails.",
         patch:"No code to fix here. TRACE the sending infrastructure.",
         "null-route":"Traffic filtering won't remove targeted emails. TRACE first."},
  escs:["Targeted phishing at senior staff — admin credentials at risk",
        "Two executives have clicked — credential compromise confirmed",
        "C-SUITE CREDENTIALS STOLEN — board-level access obtained"],
  escR:22,uMin:10,uMax:500,spread:"Social Engineering"},

 {id:"whaling",name:"Whaling Attack",short:"CEO/CFO targeted for high-value fraud authorisation",
  steps:["trace","block","notify-users"],
  smsgs:["Attacker email infrastructure traced and flagged.",
         "CEO/CFO inboxes protected. Impersonation domain nullified.",
         "RESOLVED: Board alerted. Wire transfer halted. Verification protocol updated."],
  wrong:{isolate:"This is in email, not a machine. TRACE the impersonation domain.",
         educate:"Education takes too long. TRACE and BLOCK the impersonation domain first.",
         patch:"No patch for human deception. TRACE the attacker's sending server."},
  escs:["CEO email impersonation detected — high-value fraud attempt",
        "Finance team received fraudulent wire transfer request",
        "£240,000 FRAUDULENT TRANSFER AUTHORISED — wire fraud complete"],
  escR:25,uMin:1,uMax:20,spread:"Social Engineering"}
]};
})();
