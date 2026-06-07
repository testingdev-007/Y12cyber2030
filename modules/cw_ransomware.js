;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Ransomware']={
icon:"🔒",cat:"Malware",col:"#ff3333",
explain:[
 "ATTACK: RANSOMWARE  |  OCR SPEC: 1.3.3(c) + 1.3.1(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Ransomware encrypts all accessible files using asymmetric","encryption. The private key is held by attackers until payment.",
 "","OCR DIRECT LINK (1.3.1c): Asymmetric encryption uses a","public key to encrypt and a private key to decrypt.",
 "Without the private key, decryption is computationally","infeasible — even with supercomputers. That's why it works.",
 "","CRITICAL ORDER: Isolation MUST come first.","Every second uncontained = more files encrypted.",
 "","REAL WORLD: WannaCry (2017) hit 200,000 systems in 150","countries in 24 hours. NHS cost: £92M. Staff turned away.","",
 "RESPONSE ORDER (this MATTERS):","  1. ISOLATE — cut network access immediately","  2. KILL-PROCESS — stop active encryption","  3. BACKUP-RESTORE — recover from clean backup"
],
mutations:[
 {name:"Double extortion",label:"⚠ DOUBLE EXTORTION",escMulti:1.4,spreadMult:1.5,userMult:1.2},
 {name:"Nation-state wiper",label:"🏴 NATION-STATE",escMulti:1.8,spreadMult:2.5,userMult:1.6},
 {name:"Opportunistic script",label:"🎲 SCRIPT KIDDIE",escMulti:0.6,spreadMult:0.4,userMult:0.7},
 {name:"Ransomware-as-a-Service",label:"💼 RAAS GANG",escMulti:1.3,spreadMult:1.8,userMult:1.3}
],
scenarios:[
 {id:"wannacry_style",name:"Network Worm Ransomware",short:"Self-propagating ransomware spreading via network shares",
  steps:["isolate","kill-process","backup-restore"],
  smsgs:["Machine isolated from network. Worm spread halted.",
         "Encryption process terminated. File loss stopped.",
         "RESOLVED: Files restored from last clean backup. 0 data lost."],
  wrong:{patch:"CRITICAL: No time to patch — encryption is spreading NOW. ISOLATE immediately!",
         block:"Network blocking is too slow. ISOLATE the entire infected machine.",
         trace:"It's already inside. ISOLATE first, forensics later.",
         educate:"Not a training issue. ISOLATE the machine RIGHT NOW."},
  escs:["RANSOMWARE ACTIVE — encrypting files on infected workstation",
        "Worm spread to file server — shared drives being encrypted",
        "DOMAIN CONTROLLER ENCRYPTED — entire organisation locked out"],
  escR:13,uMin:200,uMax:8000,spread:"Ransomware"},

 {id:"targeted_hospital",name:"Critical Infrastructure Ransomware",short:"Healthcare/CNI targeted — lives potentially at risk",
  steps:["isolate","kill-process","backup-restore"],
  smsgs:["Critical systems isolated. Attack contained to non-clinical machines.",
         "Encryption process killed. Clinical systems unaffected.",
         "RESOLVED: Systems restored. Clinical operations resumed."],
  wrong:{trace:"LIVES AT RISK. No time to trace — ISOLATE critical systems NOW.",
         notify_users:"Staff already know. ISOLATE to protect clinical systems.",
         educate:"Medical staff need their systems. ISOLATE the infected machines."},
  escs:["CRITICAL INFRASTRUCTURE: ransomware in hospital network",
        "Patient records being encrypted — appointments cancelled",
        "ICU SYSTEMS OFFLINE — emergency divert declared"],
  escR:10,uMin:5000,uMax:50000,spread:"Ransomware"},

 {id:"double_extortion",name:"Double Extortion Attack",short:"Files encrypted AND data threatened for publication",
  steps:["isolate","kill-process","backup-restore"],
  smsgs:["Network access severed. Data exfiltration stopped.",
         "Encryption halted. Stolen data pipeline cut.",
         "RESOLVED: Files restored. Incident response team notified of data exposure."],
  wrong:{block:"Too slow — data is already being exfiltrated. ISOLATE to cut the channel.",
         patch:"Can't patch during active attack. ISOLATE all affected systems first.",
         "notify-users":"Public comms later — ISOLATE to stop data leaving the network."},
  escs:["Ransomware encrypting files AND exfiltrating to attacker server",
        "200GB of sensitive data already stolen — ransom note issued",
        "DATA PUBLISHED THREAT: pay or customer records go public"],
  escR:16,uMin:1000,uMax:20000,spread:"Credential Stuffing"}
]};
})();
