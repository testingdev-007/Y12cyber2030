;(function(){
if(!window.CW_MODULES)window.CW_MODULES={};
window.CW_MODULES['SQL Injection']={
icon:"💉",cat:"Web Attack",col:"#44bbff",
explain:[
 "ATTACK: SQL INJECTION  |  OCR SPEC: 1.3.2(d) + 1.3.3(c)","━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
 "Attackers inject SQL commands via web form inputs,","manipulating the database query to extract or delete data.",
 "","OCR DIRECT LINK (1.3.2d): You already know SQL commands!","Classic attack:  ' OR 1=1 --  in a login field returns ALL users.",
 "  Normal:  SELECT * FROM users WHERE name='[input]'","  Attack:  WHERE name='x' OR 1=1 --  (always true = bypass!)",
 "","DEFENCES: Parameterised queries (prepared statements) treat","input as data, never as code. Input validation rejects",
 "suspicious characters: '  --  ;  DROP  UNION","",
 "RESPONSE STEPS:","  1. TRACE — find the vulnerable endpoint in the access logs","  2. PATCH — deploy parameterised queries / input validation","  3. REVOKE-ACCESS — rotate all DB credentials exposed"
],
mutations:[
 {name:"Automated SQLi scanner",label:"🤖 AUTOMATED SCAN",escMulti:0.9,spreadMult:1.2,userMult:1.5},
 {name:"Nation-state APT",label:"🏴 APT GROUP",escMulti:1.5,spreadMult:1.8,userMult:2.0},
 {name:"Opportunistic",label:"🎲 OPPORTUNISTIC",escMulti:0.7,spreadMult:0.5,userMult:0.8},
 {name:"Ransomware group recon",label:"💰 PRE-RANSOMWARE",escMulti:1.2,spreadMult:1.6,userMult:1.3}
],
scenarios:[
 {id:"login_bypass",name:"SQLi Login Bypass",short:"Authentication bypass via injected OR clause",
  steps:["trace","patch","revoke-access"],
  smsgs:["Vulnerable login endpoint identified: /api/auth. Attack vector confirmed.",
         "Parameterised queries deployed on login form. Injection blocked.",
         "RESOLVED: All admin credentials rotated. Audit log clean."],
  wrong:{block:"Blocking IPs won't fix unparameterised code — others will find it. TRACE first.",
         isolate:"Taking the app offline hurts everyone. TRACE the vulnerable endpoint.",
         educate:"This is a code flaw, not user error. TRACE then PATCH."},
  escs:["SQLi login bypass attempts detected in access logs",
        "Admin authentication bypassed — database being explored",
        "FULL DATABASE ACCESS OBTAINED — all user records exposed"],
  escR:32,uMin:200,uMax:30000,spread:"Credential Stuffing"},

 {id:"data_extraction",name:"SQLi Data Extraction",short:"UNION-based attack dumping entire database",
  steps:["trace","patch","revoke-access"],
  smsgs:["Injection pattern in search endpoint identified: UNION SELECT attack.",
         "Input sanitisation and parameterisation deployed.",
         "RESOLVED: DB credentials reset. Exposed data flagged for GDPR notification."],
  wrong:{block:"Changing IPs won't stop the structural code vulnerability. TRACE and PATCH.",
         "null-route":"Network blocking doesn't fix SQL inside your codebase.",
         lockout:"Locking user accounts won't fix the code vulnerability. TRACE first."},
  escs:["UNION SELECT injection extracting user table data",
        "Customer PII being exfiltrated — GDPR breach imminent",
        "ENTIRE DATABASE DUMPED — 2.1M customer records stolen"],
  escR:38,uMin:1000,uMax:80000,spread:"Credential Stuffing"},

 {id:"blind_sqli",name:"Blind SQL Injection",short:"Time-based inference attack — slower but devastating",
  steps:["trace","patch","revoke-access"],
  smsgs:["Time-delay patterns in logs confirm blind SQLi on /api/search.",
         "Parameterised queries deployed. Boolean/time-based injection blocked.",
         "RESOLVED: Credentials rotated. DB hardened against inference attacks."],
  wrong:{isolate:"The vulnerability is in the code, not the machine. TRACE the endpoint.",
         "notify-users":"Users aren't at immediate risk yet. TRACE the injection point first.",
         trace:"This is the correct first step! You're on the right track."},
  escs:["Slow time-based SQL injection detected — database schema mapping",
        "Attacker has full schema — now extracting user credentials",
        "ADMIN HASH EXTRACTED — password cracking in progress"],
  escR:45,uMin:500,uMax:40000,spread:"Brute Force"}
]};
})();
