;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Trojan Backdoor']={
icon:"🐴",cat:"Malware",col:"#cc44ff",
explain:[
 "ATTACK: TROJAN BACKDOOR  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "A Trojan disguises itself as legitimate software and installs","a hidden backdoor — giving attackers persistent, silent access",
 "that can go undetected for months or years.","",
 "OCR DISTINCTIONS (1.3.3c) — know the difference:","  Trojan: requires user to run it. Does NOT self-replicate.",
 "  Virus: attaches to files and DOES self-replicate.","  Worm: spreads autonomously across networks — no user needed.",
 "","C2 (Command & Control): The attacker's remote server issues","commands to infected hosts. Infected machines = 'botnet'.",
 "","DEFENCES: Application whitelisting, code signing certificates,","behaviour-based AV, network monitoring for outbound C2 beacons.",
 "","RESPONSE STEPS:","  1. SCAN-NET — find all hosts communicating with C2 server","  2. ISOLATE — cut off all infected machines","  3. WIPE-CLEAN — full reinstall (backdoors survive patching)"
],
mutations:[
 {name:"Nation-state APT",label:"🏴 APT GROUP",escMulti:1.7,spreadMult:2.0,userMult:1.5},
 {name:"Commercial RAT",label:"💼 COMMERCIAL RAT",escMulti:1.1,spreadMult:1.3,userMult:1.2},
 {name:"Script kiddie",label:"🎲 FREE RAT TOOL",escMulti:0.6,spreadMult:0.5,userMult:0.8},
 {name:"Ransomware pre-stage",label:"💰 PRE-RANSOMWARE",escMulti:1.4,spreadMult:1.8,userMult:1.3}
],
scenarios:[
 {id:"rat",name:"Remote Access Trojan",short:"Full remote control backdoor installed silently",
  steps:["scan-net","isolate","wipe-clean"],
  smsgs:["C2 beacon traffic identified: 7 infected hosts calling home to 94.142.xx.xx.",
         "All 7 infected machines isolated. C2 communication severed.",
         "RESOLVED: Clean reinstall complete on all hosts. Backdoor permanently removed."],
  wrong:{patch:"Patching won't remove an installed backdoor. SCAN-NET to find all infected hosts.",
         block:"C2 servers rotate IPs. SCAN-NET to find infected machines first.",
         educate:"The RAT is already installed. SCAN-NET to map the infection."},
  escs:["C2 beacon traffic detected — RAT installed on corporate machine",
        "Data exfiltration confirmed — attacker browsing file shares remotely",
        "APT: full network visibility, privilege escalation in progress"],
  escR:45,uMin:100,uMax:5000,spread:"Trojan Backdoor"},

 {id:"keylogger",name:"Keylogger Trojan",short:"All keystrokes captured and sent to attacker",
  steps:["scan-net","isolate","wipe-clean"],
  smsgs:["Keylogger processes identified via anomalous outbound data patterns.",
         "Infected machines isolated. Keystroke exfiltration stopped.",
         "RESOLVED: All machines wiped. Credentials rotated — keylogger data made useless."],
  wrong:{lockout:"Locking accounts won't remove the keylogger still running. SCAN-NET first.",
         "revoke-access":"Credentials will be captured again after reset if keylogger remains. SCAN-NET first.",
         block:"Keylogger rotates upload destinations. SCAN-NET to find infected machines."},
  escs:["Keylogger trojan: all typed passwords being captured",
        "Banking and email credentials sent to attacker C2 server",
        "MASS CREDENTIAL THEFT: 340 accounts compromised in real-time"],
  escR:38,uMin:50,uMax:8000,spread:"Credential Stuffing"},

 {id:"dropper",name:"Trojan Dropper Campaign",short:"Trojan downloading additional malware payloads",
  steps:["scan-net","isolate","wipe-clean"],
  smsgs:["Dropper C2 communication identified. 15 staged payloads intercepted.",
         "Infected machines isolated. Payload download chain severed.",
         "RESOLVED: All machines wiped. 3 secondary malware families removed."],
  wrong:{patch:"Dropper will just download updated payloads. SCAN-NET to find all infected hosts.",
         "notify-users":"Users can't see this. SCAN-NET to identify all affected machines.",
         trace:"Dropper uses CDN for distribution — trace won't help. SCAN-NET."},
  escs:["Trojan dropper downloading secondary malware payloads",
        "Ransomware and keylogger payloads staged on 15 machines",
        "MULTI-STAGE ATTACK: ransomware deployment imminent"],
  escR:32,uMin:200,uMax:15000,spread:"Ransomware"}
]};
})();
