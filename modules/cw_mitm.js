;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['Man-in-the-Middle']={
icon:"👁",cat:"Network Attack",col:"#66ccff",
explain:[
 "ATTACK: MAN-IN-THE-MIDDLE  |  OCR SPEC: 1.3.3(c) + 1.3.1(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Attacker positions between client and server — intercepting,","reading, and sometimes modifying all traffic silently.",
 "","OCR DIRECT LINK (1.3.1c): Encryption defeats MITM.","HTTPS/TLS creates an encrypted tunnel — intercepted packets",
 "are unreadable ciphertext without the session key.","TLS certificates verify server identity, preventing fakes.",
 "","ARP POISONING: attacker sends fake ARP replies claiming","their MAC address is the router. Traffic flows through them.",
 "","HSTS forces HTTPS-only — prevents downgrade attacks","that strip encryption back to plain HTTP.",
 "","RESPONSE STEPS:","  1. TRACE — locate the rogue device via ARP table anomalies","  2. ISOLATE — segment the compromised network portion","  3. REVOKE-ACCESS — invalidate all intercepted session tokens"
],
mutations:[
 {name:"State-sponsored wiretap",label:"🏴 STATE WIRETAP",escMulti:1.6,spreadMult:1.8,userMult:2.0},
 {name:"Rogue hotspot",label:"📡 ROGUE WIFI",escMulti:1.1,spreadMult:1.4,userMult:1.3},
 {name:"ARP spoofing tool",label:"🎲 ARP SPOOF",escMulti:0.8,spreadMult:0.6,userMult:0.8},
 {name:"SSL stripping attack",label:"🔓 SSL STRIP",escMulti:1.3,spreadMult:1.2,userMult:1.5}
],
scenarios:[
 {id:"arp_poisoning",name:"ARP Poisoning Attack",short:"Rogue device on LAN intercepting all network traffic",
  steps:["trace","isolate","revoke-access"],
  smsgs:["Rogue device identified: ARP poisoning from MAC aa:bb:cc:11:22:33 on VLAN 14.",
         "VLAN 14 segmented. Rogue device blocked. Interception severed.",
         "RESOLVED: All session tokens invalidated. Re-authentication enforced via HTTPS."],
  wrong:{patch:"No software flaw — this is network-layer interception. TRACE the rogue device.",
         "backup-restore":"Intercepted data can't be restored. TRACE the device first.",
         educate:"Users can't detect ARP poisoning. TRACE the network anomaly.",
         "notify-users":"Notify after isolating — users are still being watched. TRACE first."},
  escs:["ARP poisoning detected — all LAN traffic being intercepted",
        "Session cookies being harvested — multiple accounts hijacked",
        "FINANCIAL TRANSACTIONS INTERCEPTED AND SILENTLY MODIFIED"],
  escR:30,uMin:200,uMax:5000,spread:"Credential Stuffing"},

 {id:"rogue_wifi",name:"Rogue WiFi Hotspot",short:"Fake corporate WiFi capturing all device traffic",
  steps:["trace","isolate","revoke-access"],
  smsgs:["Rogue SSID 'CorpWiFi_Guest' identified. MAC address traced to floor 3.",
         "Rogue AP shut down. All affected devices disconnected and re-directed.",
         "RESOLVED: All credentials used on rogue network revoked. MFA enforced."],
  wrong:{patch:"Physical rogue device in the building — TRACE to locate it.",
         block:"Network blocking can't shut down a rogue physical AP. TRACE first.",
         "null-route":"The rogue WiFi is inside the building. TRACE to locate the device."},
  escs:["Rogue corporate WiFi SSID broadcasting — devices connecting",
        "25 devices connected to rogue AP — all traffic intercepted",
        "CORPORATE VPN CREDENTIALS HARVESTED from 25 devices"],
  escR:25,uMin:50,uMax:2000,spread:"Credential Stuffing"},

 {id:"ssl_stripping",name:"SSL Stripping Attack",short:"HTTPS downgraded to HTTP — encryption removed silently",
  steps:["trace","isolate","revoke-access"],
  smsgs:["SSL stripping proxy identified via certificate anomaly detection.",
         "Affected network segment isolated. HTTPS-only policy enforced via HSTS.",
         "RESOLVED: Sessions invalidated. HSTS headers deployed. Downgrade blocked."],
  wrong:{educate:"Users can't spot SSL stripping — the padlock may still show. TRACE the proxy.",
         "dns-flush":"DNS isn't the issue — SSL is being downgraded. TRACE the stripping proxy.",
         "null-route":"Need to keep the network up. TRACE the SSL stripping point first."},
  escs:["SSL stripping proxy active — HTTPS being downgraded silently",
        "Login credentials transmitted in plaintext — being captured",
        "BANKING SESSION TOKENS STOLEN — accounts being accessed in real-time"],
  escR:28,uMin:100,uMax:8000,spread:"Credential Stuffing"}
]};
})();
