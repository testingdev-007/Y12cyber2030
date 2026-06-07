;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Zero-Day']={
icon:"☢",cat:"Advanced Threat",col:"#ff88aa",
explain:[
 "ATTACK: ZERO-DAY EXPLOIT  |  OCR SPEC: 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "A zero-day is a vulnerability UNKNOWN to the vendor.","Zero days since they knew = zero days to prepare a patch.",
 "No fix exists. You CANNOT update your way out of this.","",
 "These sell for $1M+ on the zero-day market. Nation-states","and top criminal groups hoard them for targeted attacks.",
 "","Standard SIGNATURE-BASED defences fail (they match known","attack patterns). You need BEHAVIOURAL detection instead.",
 "","'Defence in depth': multiple independent security layers mean","a zero-day in one layer doesn't compromise everything.",
 "","RESPONSE STEPS:","  1. ISOLATE — cut off vulnerable systems. No patch = containment only.","  2. PATCH — apply emergency vendor fix when released.","  3. SCAN-NET — check other hosts for compromise."
],
mutations:[
 {name:"Nation-state APT",label:"🏴 STATE-SPONSORED",escMulti:1.8,spreadMult:2.5,userMult:1.8},
 {name:"Criminal group",label:"💰 CRIMINAL GROUP",escMulti:1.4,spreadMult:1.6,userMult:1.4},
 {name:"Broker-sold exploit",label:"💼 EXPLOIT BROKER",escMulti:1.2,spreadMult:1.3,userMult:1.2},
 {name:"Accidental discovery",label:"🎲 OPPORTUNISTIC",escMulti:0.8,spreadMult:0.6,userMult:0.9}
],
scenarios:[
 {id:"vpn_zeroday",name:"VPN Appliance Zero-Day",short:"Critical flaw in edge VPN device — perimeter breached",
  steps:["isolate","patch","scan-net"],
  smsgs:["VPN appliance isolated. Remote access temporarily disabled.",
         "Vendor emergency patch applied. VPN hardened.",
         "RESOLVED: Network scan complete. No lateral movement detected."],
  wrong:{trace:"Source doesn't matter — the flaw is in ALL unpatched VPNs. ISOLATE first.",
         block:"Firewalls can't stop exploitation of a legitimate device. ISOLATE.",
         educate:"Users can't avoid a hardware vulnerability. ISOLATE the device."},
  escs:["ZERO-DAY: critical VPN appliance flaw actively exploited",
        "Attacker authenticated to internal network via VPN",
        "LATERAL MOVEMENT: attacker accessing internal servers"],
  escR:11,uMin:500,uMax:30000,spread:"Trojan Backdoor"},

 {id:"browser_zeroday",name:"Browser Zero-Day",short:"Drive-by exploit delivered via malicious web page",
  steps:["isolate","patch","scan-net"],
  smsgs:["Infected workstations isolated. Drive-by infection contained.",
         "Browser emergency update deployed across all endpoints.",
         "RESOLVED: Endpoint scan clean. No C2 communication detected."],
  wrong:{block:"Users visited the page — blocking the site now won't help. ISOLATE infected machines.",
         "notify-users":"ISOLATE infected machines first — users need browser patched immediately after.",
         trace:"The exploit was served on a legitimate-looking site. ISOLATE first."},
  escs:["Drive-by browser exploit delivering payload via malicious page",
        "Code execution achieved on 12 workstations via browser flaw",
        "KERNEL ACCESS OBTAINED — EDR and AV fully bypassed"],
  escR:14,uMin:200,uMax:15000,spread:"Trojan Backdoor"},

 {id:"supply_chain",name:"Supply Chain Zero-Day",short:"Malicious update in trusted software vendor",
  steps:["isolate","patch","scan-net"],
  smsgs:["Affected software version isolated on all hosts.",
         "Vendor-confirmed clean update deployed. Malicious version removed.",
         "RESOLVED: Full network scan complete. 23 hosts confirmed clean."],
  wrong:{educate:"Users didn't do anything wrong — they updated legit software. ISOLATE.",
         lockout:"Account lockout won't remove malicious code. ISOLATE first.",
         "backup-restore":"Backups may also contain the malicious version. ISOLATE and PATCH first."},
  escs:["SUPPLY CHAIN: trusted software update contains malicious payload",
        "Payload executing on all machines that auto-updated",
        "THOUSANDS OF MACHINES COMPROMISED via software trust chain"],
  escR:9,uMin:2000,uMax:80000,spread:"Trojan Backdoor"}
]};
})();
