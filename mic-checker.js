(function(){
  var UI = {
    en:{
      eyebrow:"HEALTH TOOL", title:"AI Medicine Interaction Checker",
      subtitle:"Enter 2\u201310 medicines to check for possible interactions, general warnings, and safety notes.",
      disclaimer:"This tool gives general, educational information based on a limited, curated reference set. It is not a complete medical database and does not replace advice from a doctor or pharmacist. Always confirm with a qualified healthcare professional before starting, stopping, or combining any medicine.",
      addLabel:"Add another medicine", checkLabel:"Check Interactions",
      placeholder:"e.g. Aspirin, Metformin, Paracetamol",
      resultTitle:"Results",
      noneFound:"No documented interaction found between:",
      noneDetail:"This does not guarantee the combination is safe \u2014 it means it is not in our reference set. Please confirm with a pharmacist or doctor.",
      unrecognized:"Not recognised:",
      unrecognizedDetail:"We could not match this to our reference list. Please check the spelling or ask your pharmacist directly.",
      footer:"Reference data covers common, well-documented drug-class interactions only and is not exhaustive. Individual risk depends on dose, health conditions, and other medicines. For emergencies, contact a doctor or emergency services immediately.",
      minInput:"Please enter at least 2 medicine names.",
      severity:{major:"Major", moderate:"Moderate", minor:"Minor", none:"No data"}
    },
    bn:{
      eyebrow:"স্বাস্থ্য টুল", title:"এআই মেডিসিন ইন্টারঅ্যাকশন চেকার",
      subtitle:"সম্ভাব্য ইন্টারঅ্যাকশন, সাধারণ সতর্কতা এবং সেফটি নোট জানতে ২–১০টি ওষুধের নাম লিখুন।",
      disclaimer:"এই টুলটি একটি সীমিত রেফারেন্স তালিকার ভিত্তিতে সাধারণ, শিক্ষামূলক তথ্য দেয়। এটি সম্পূর্ণ মেডিকেল ডেটাবেস নয় এবং ডাক্তার বা ফার্মাসিস্টের পরামর্শের বিকল্প নয়। যেকোনো ওষুধ শুরু, বন্ধ বা একসাথে খাওয়ার আগে অবশ্যই যোগ্য স্বাস্থ্যকর্মীর সাথে পরামর্শ করুন।",
      addLabel:"আরেকটি ওষুধ যোগ করুন", checkLabel:"ইন্টারঅ্যাকশন চেক করুন",
      placeholder:"যেমন: Aspirin, Metformin, Paracetamol",
      resultTitle:"ফলাফল",
      noneFound:"এই দুটির মধ্যে কোনো তথ্যভুক্ত ইন্টারঅ্যাকশন পাওয়া যায়নি:",
      noneDetail:"এর মানে এই নয় যে একসাথে খাওয়া নিরাপদ — শুধু এটি আমাদের রেফারেন্স তালিকায় নেই। দয়া করে ফার্মাসিস্ট বা ডাক্তারের সাথে নিশ্চিত করুন।",
      unrecognized:"শনাক্ত করা যায়নি:",
      unrecognizedDetail:"এই নামটি আমাদের তালিকার সাথে মেলানো যায়নি। বানান পরীক্ষা করুন অথবা সরাসরি ফার্মাসিস্টকে জিজ্ঞাসা করুন।",
      footer:"রেফারেন্স ডেটাতে শুধুমাত্র সাধারণ ও সুপ্রতিষ্ঠিত ওষুধ-শ্রেণির ইন্টারঅ্যাকশন রয়েছে, এটি সম্পূর্ণ নয়। ব্যক্তিভেদে ঝুঁকি মাত্রা, শারীরিক অবস্থা ও অন্যান্য ওষুধের উপর নির্ভর করে। জরুরি অবস্থায় দ্রুত ডাক্তার বা জরুরি সেবায় যোগাযোগ করুন।",
      minInput:"অনুগ্রহ করে অন্তত ২টি ওষুধের নাম লিখুন।",
      severity:{major:"গুরুতর", moderate:"মাঝারি", minor:"সামান্য", none:"তথ্য নেই"}
    },
    hi:{
      eyebrow:"हेल्थ टूल", title:"एआई मेडिसिन इंटरैक्शन चेकर",
      subtitle:"संभावित इंटरैक्शन, सामान्य चेतावनी और सुरक्षा जानकारी के लिए 2–10 दवाओं के नाम दर्ज करें।",
      disclaimer:"यह टूल एक सीमित संदर्भ सूची के आधार पर सामान्य, शैक्षिक जानकारी देता है। यह पूर्ण मेडिकल डेटाबेस नहीं है और डॉक्टर या फार्मासिस्ट की सलाह का विकल्प नहीं है। कोई भी दवा शुरू करने, बंद करने या साथ में लेने से पहले हमेशा किसी योग्य स्वास्थ्य विशेषज्ञ से पुष्टि करें।",
      addLabel:"एक और दवा जोड़ें", checkLabel:"इंटरैक्शन जांचें",
      placeholder:"जैसे: Aspirin, Metformin, Paracetamol",
      resultTitle:"परिणाम",
      noneFound:"इन दोनों के बीच कोई दर्ज इंटरैक्शन नहीं मिला:",
      noneDetail:"इसका मतलब यह नहीं कि साथ लेना सुरक्षित है — बस यह हमारी संदर्भ सूची में नहीं है। कृपया फार्मासिस्ट या डॉक्टर से पुष्टि करें।",
      unrecognized:"पहचाना नहीं गया:",
      unrecognizedDetail:"यह नाम हमारी सूची से मेल नहीं खाया। कृपया स्पेलिंग जांचें या सीधे फार्मासिस्ट से पूछें।",
      footer:"संदर्भ डेटा में केवल सामान्य, सुस्थापित दवा-वर्ग इंटरैक्शन शामिल हैं, यह पूर्ण नहीं है। व्यक्तिगत जोखिम खुराक, स्वास्थ्य स्थिति और अन्य दवाओं पर निर्भर करता है। आपातकाल में तुरंत डॉक्टर या इमरजेंसी सेवा से संपर्क करें।",
      minInput:"कृपया कम से कम 2 दवाओं के नाम दर्ज करें।",
      severity:{major:"गंभीर", moderate:"मध्यम", minor:"मामूली", none:"डेटा नहीं"}
    }
  };

  var EFF = {
    bleeding:{en:"Increased risk of bleeding.", bn:"রক্তক্ষরণের ঝুঁকি বেড়ে যায়।", hi:"रक्तस्राव (ब्लीडिंग) का खतरा बढ़ सकता है।"},
    giBleed:{en:"Increased risk of stomach irritation or gastrointestinal bleeding.", bn:"পাকস্থলীতে জ্বালাপোড়া বা রক্তক্ষরণের ঝুঁকি বাড়ে।", hi:"पेट में जलन या आंतरिक रक्तस्राव का खतरा बढ़ सकता है।"},
    kidneyBP:{en:"May reduce blood pressure control and increase strain on the kidneys.", bn:"রক্তচাপ নিয়ন্ত্রণ কমে যেতে পারে এবং কিডনির উপর চাপ বাড়তে পারে।", hi:"ब्लड प्रेशर नियंत्रण कम हो सकता है और किडनी पर दबाव बढ़ सकता है।"},
    potassium:{en:"Risk of dangerously high blood potassium (hyperkalemia).", bn:"রক্তে পটাশিয়ামের মাত্রা বিপজ্জনকভাবে বেড়ে যাওয়ার ঝুঁকি (হাইপারক্যালেমিয়া)।", hi:"रक्त में पोटैशियम का स्तर खतरनाक रूप से बढ़ने का खतरा (हाइपरकेलेमिया)।"},
    muscleTox:{en:"Increased risk of muscle damage (myopathy/rhabdomyolysis).", bn:"মাংসপেশির ক্ষতির ঝুঁকি বাড়ে (মায়োপ্যাথি/র‍্যাবডোমায়োলাইসিস)।", hi:"मांसपेशियों को नुकसान (मायोपैथी/रैबडोमायोलिसिस) का खतरा बढ़ सकता है।"},
    digoxinTox:{en:"May raise digoxin levels or the risk of toxicity from it.", bn:"ডিগক্সিনের মাত্রা বা এর বিষক্রিয়ার ঝুঁকি বাড়িয়ে দিতে পারে।", hi:"डिगॉक्सिन का स्तर या उसकी विषाक्तता का खतरा बढ़ा सकता है।"},
    serotonin:{en:"Risk of serotonin syndrome (agitation, high fever, rapid heartbeat).", bn:"সেরোটোনিন সিন্ড্রোমের ঝুঁকি (অস্থিরতা, উচ্চ জ্বর, দ্রুত হৃৎস্পন্দন)।", hi:"सेरोटोनिन सिंड्रोम का खतरा (बेचैनी, तेज़ बुखार, तेज़ धड़कन)।"},
    lacticAcidosis:{en:"Increased risk of lactic acidosis, especially with heavy alcohol use.", bn:"ল্যাকটিক অ্যাসিডোসিসের ঝুঁকি বাড়ে, বিশেষত অতিরিক্ত মদ্যপানে।", hi:"लैक्टिक एसिडोसिस का खतरा बढ़ सकता है, खासकर अधिक शराब सेवन के साथ।"},
    hypoglycemia:{en:"Increased risk of low blood sugar (hypoglycemia).", bn:"রক্তে শর্করা কমে যাওয়ার (হাইপোগ্লাইসেমিয়া) ঝুঁকি বাড়ে।", hi:"ब्लड शुगर कम होने (हाइपोग्लाइसीमिया) का खतरा बढ़ सकता है।"},
    reducedEffect:{en:"May reduce how well one of the medicines works.", bn:"একটি ওষুধের কার্যকারিতা কমে যেতে পারে।", hi:"किसी एक दवा की प्रभावशीलता कम हो सकती है।"},
    absorption:{en:"May reduce absorption \u2014 consider spacing the doses apart.", bn:"শোষণ কমে যেতে পারে; দুটি ওষুধ আলাদা সময়ে খাওয়া ভালো।", hi:"अवशोषण कम हो सकता है; दोनों दवाएं अलग-अलग समय पर लेना बेहतर है।"},
    sedation:{en:"Increased drowsiness/sedation, and in some cases slowed breathing.", bn:"অতিরিক্ত ঝিমুনি/অবসাদ হতে পারে, কিছু ক্ষেত্রে শ্বাসক্রিয়া ধীর হওয়ার ঝুঁকি।", hi:"अत्यधिक नींद/सुस्ती हो सकती है, कुछ मामलों में सांस धीमी होने का खतरा।"},
    monitorINR:{en:"May affect blood-thinning (INR) levels \u2014 monitoring is advised.", bn:"রক্ত পাতলা হওয়ার (আইএনআর) মাত্রায় প্রভাব ফেলতে পারে; পর্যবেক্ষণ প্রয়োজন।", hi:"खून पतला होने (INR) के स्तर को प्रभावित कर सकता है; निगरानी ज़रूरी है।"}
  };

  var ALIAS = {
    "aspirin":"aspirin","disprin":"aspirin","ecosprin":"aspirin",
    "warfarin":"warfarin","coumadin":"warfarin",
    "ibuprofen":"nsaid","advil":"nsaid","brufen":"nsaid","naproxen":"nsaid","diclofenac":"nsaid","voveran":"nsaid",
    "paracetamol":"paracetamol","acetaminophen":"paracetamol","tylenol":"paracetamol","napa":"paracetamol","ace":"paracetamol","calpol":"paracetamol",
    "metformin":"metformin","glucophage":"metformin","glycomet":"metformin",
    "atorvastatin":"statin","simvastatin":"statin","rosuvastatin":"statin","lipitor":"statin","atorlip":"statin","crestor":"statin",
    "lisinopril":"acei","enalapril":"acei","ramipril":"acei","captopril":"acei",
    "losartan":"arb","telmisartan":"arb","valsartan":"arb",
    "amlodipine":"ccb","amlopres":"ccb","norvasc":"ccb",
    "omeprazole":"ppi","pantoprazole":"ppi","esomeprazole":"ppi","pan":"ppi","nexium":"ppi",
    "sertraline":"ssri","fluoxetine":"ssri","escitalopram":"ssri","paroxetine":"ssri","zoloft":"ssri","prozac":"ssri",
    "tramadol":"tramadol","tramal":"tramadol",
    "digoxin":"digoxin","lanoxin":"digoxin",
    "furosemide":"loopdiuretic","lasix":"loopdiuretic","frusemide":"loopdiuretic",
    "spironolactone":"potassiumsparing","aldactone":"potassiumsparing","eplerenone":"potassiumsparing",
    "levothyroxine":"levothyroxine","eltroxin":"levothyroxine","thyronorm":"levothyroxine",
    "clopidogrel":"clopidogrel","plavix":"clopidogrel","clopilet":"clopidogrel",
    "prednisolone":"corticosteroid","prednisone":"corticosteroid","dexamethasone":"corticosteroid","methylprednisolone":"corticosteroid",
    "azithromycin":"macrolide","erythromycin":"macrolide","clarithromycin":"macrolide","azithral":"macrolide",
    "ciprofloxacin":"fluoroquinolone","levofloxacin":"fluoroquinolone","ofloxacin":"fluoroquinolone",
    "insulin":"insulin","lantus":"insulin","mixtard":"insulin","humalog":"insulin",
    "alcohol":"alcohol","wine":"alcohol","beer":"alcohol","whisky":"alcohol"
  };

  var PAIRS = [
    ["aspirin","warfarin","major",["bleeding"]],
    ["nsaid","warfarin","major",["bleeding","giBleed"]],
    ["nsaid","aspirin","moderate",["giBleed","reducedEffect"]],
    ["nsaid","acei","moderate",["kidneyBP"]],
    ["nsaid","arb","moderate",["kidneyBP"]],
    ["nsaid","loopdiuretic","moderate",["kidneyBP","reducedEffect"]],
    ["ssri","nsaid","moderate",["giBleed"]],
    ["ssri","tramadol","major",["serotonin"]],
    ["ssri","warfarin","moderate",["bleeding"]],
    ["ssri","alcohol","moderate",["sedation"]],
    ["statin","macrolide","major",["muscleTox"]],
    ["statin","ccb","moderate",["muscleTox"]],
    ["digoxin","loopdiuretic","moderate",["digoxinTox"]],
    ["digoxin","macrolide","moderate",["digoxinTox"]],
    ["acei","potassiumsparing","major",["potassium"]],
    ["arb","potassiumsparing","major",["potassium"]],
    ["acei","arb","moderate",["kidneyBP","potassium"]],
    ["warfarin","macrolide","moderate",["monitorINR","bleeding"]],
    ["warfarin","fluoroquinolone","moderate",["monitorINR","bleeding"]],
    ["warfarin","corticosteroid","minor",["monitorINR"]],
    ["warfarin","alcohol","moderate",["monitorINR","bleeding"]],
    ["warfarin","tramadol","moderate",["monitorINR","bleeding"]],
    ["clopidogrel","ppi","moderate",["reducedEffect"]],
    ["clopidogrel","aspirin","minor",["bleeding"]],
    ["clopidogrel","warfarin","major",["bleeding"]],
    ["metformin","alcohol","moderate",["lacticAcidosis"]],
    ["insulin","alcohol","moderate",["hypoglycemia"]],
    ["corticosteroid","nsaid","moderate",["giBleed"]],
    ["corticosteroid","alcohol","minor",["giBleed"]],
    ["levothyroxine","ppi","minor",["absorption"]],
    ["tramadol","alcohol","major",["sedation"]]
  ];
  function pairKey(a,b){ return [a,b].sort().join("|"); }
  var PAIR_MAP = {};
  PAIRS.forEach(function(p){ PAIR_MAP[pairKey(p[0],p[1])] = {severity:p[2], effects:p[3]}; });

  var currentLang = "en";
  var root = document.getElementById("mic-root");
  var inputsWrap = document.getElementById("mic-inputs");
  var resultsWrap = document.getElementById("mic-results");
  var resultList = document.getElementById("mic-result-list");

  function showMsg(text){
    var box = document.getElementById("mic-msg");
    box.textContent = text;
    box.style.display = "block";
  }
  function clearMsg(){
    var box = document.getElementById("mic-msg");
    box.textContent = "";
    box.style.display = "none";
  }

  var valueMap = new Map();
  function trackValue(input){
    valueMap.set(input, "");
    input.addEventListener("input", function(e){
      valueMap.set(e.currentTarget, e.currentTarget.value);
    });
  }

  function makeRow(idx){
    var row = document.createElement("div");
    row.className = "mic-row";
    var input = document.createElement("input");
    input.type = "text";
    input.className = "mic-med-input";
    input.placeholder = UI[currentLang].placeholder;
    trackValue(input);
    row.appendChild(input);
    if(idx >= 2){
      var rm = document.createElement("button");
      rm.className = "mic-remove"; rm.type = "button"; rm.textContent = "\u00d7";
      rm.addEventListener("click", function(){ row.remove(); });
      row.appendChild(rm);
    }
    return row;
  }

  // Bind value-tracking to the two static input rows already in the HTML.
  var staticInputs = root.querySelectorAll(".mic-med-input");
  for(var si=0; si<staticInputs.length; si++){ trackValue(staticInputs[si]); }

  function initRows(){
    inputsWrap.innerHTML = "";
    inputsWrap.appendChild(makeRow(0));
    inputsWrap.appendChild(makeRow(1));
  }
  // Note: initial two rows are now static HTML (see markup) since JS-created
  // elements added during the very first synchronous script pass don't
  // reliably render inside amp-script. initRows() is kept only for reference
  // and is not called on load.

  document.getElementById("mic-add").addEventListener("click", function(){
    var count = inputsWrap.querySelectorAll(".mic-row").length;
    if(count >= 10) return;
    inputsWrap.appendChild(makeRow(count));
  });

  function applyLang(lang){
    currentLang = lang;
    var t = UI[lang];
    document.getElementById("mic-eyebrow").textContent = t.eyebrow;
    document.getElementById("mic-title").textContent = t.title;
    document.getElementById("mic-subtitle").textContent = t.subtitle;
    document.getElementById("mic-disclaimer").textContent = t.disclaimer;
    document.getElementById("mic-add-label").textContent = t.addLabel;
    document.getElementById("mic-check-label").textContent = t.checkLabel;
    document.getElementById("mic-result-title").textContent = t.resultTitle;
    document.getElementById("mic-footer-note").textContent = t.footer;
    var inputs = root.querySelectorAll(".mic-med-input");
    for(var i=0;i<inputs.length;i++){ inputs[i].placeholder = t.placeholder; }
    clearMsg();
  }

  var langRadios = [
    document.getElementById("mic-lang-en"),
    document.getElementById("mic-lang-bn"),
    document.getElementById("mic-lang-hi")
  ];
  for(var i=0;i<langRadios.length;i++){
    if(!langRadios[i]) continue;
    langRadios[i].addEventListener("change", function(e){
      applyLang(e.currentTarget.getAttribute("data-lang"));
    });
  }

  applyLang("en");

  document.getElementById("mic-check").addEventListener("click", function(){
    var t = UI[currentLang];
    var inputEls = root.querySelectorAll(".mic-med-input");
    var raw = [];
    for(var i=0;i<inputEls.length;i++){
      var v = (valueMap.get(inputEls[i]) || "").trim();
      if(v.length > 0) raw.push(v);
    }

    if(raw.length < 2){ showMsg(t.minInput); return; }
    clearMsg();

    var items = raw.map(function(name){
      var key = name.toLowerCase();
      return { name:name, cls: ALIAS[key] || null };
    });

    resultList.innerHTML = "";

    items.filter(function(i){ return !i.cls; }).forEach(function(i){
      var card = document.createElement("div");
      card.className = "mic-pair-card none";
      card.innerHTML =
        '<div class="mic-pair-head"><div class="mic-pair-names">'+t.unrecognized+' '+escapeHtml(i.name)+'</div>' +
        '<span class="mic-badge mic-badge-none">'+t.severity.none+'</span></div>' +
        '<div class="mic-pair-text">'+t.unrecognizedDetail+'</div>';
      resultList.appendChild(card);
    });

    var known = items.filter(function(i){ return i.cls; });
    for(var a=0; a<known.length; a++){
      for(var b=a+1; b<known.length; b++){
        var A = known[a], B = known[b];
        var key = pairKey(A.cls, B.cls);
        var match = PAIR_MAP[key];
        var card = document.createElement("div");
        if(match){
          card.className = "mic-pair-card " + match.severity;
          var effText = match.effects.map(function(k){ return EFF[k][currentLang]; }).join(" ");
          card.innerHTML =
            '<div class="mic-pair-head"><div class="mic-pair-names">'+escapeHtml(A.name)+' + '+escapeHtml(B.name)+'</div>' +
            '<span class="mic-badge mic-badge-'+match.severity+'">'+t.severity[match.severity]+'</span></div>' +
            '<div class="mic-pair-text">'+effText+'</div>';
        } else {
          if(A.cls === B.cls) continue;
          card.className = "mic-pair-card none";
          card.innerHTML =
            '<div class="mic-pair-head"><div class="mic-pair-names">'+escapeHtml(A.name)+' + '+escapeHtml(B.name)+'</div>' +
            '<span class="mic-badge mic-badge-none">'+t.severity.none+'</span></div>' +
            '<div class="mic-pair-text">'+t.noneDetail+'</div>';
        }
        resultList.appendChild(card);
      }
    }

    resultsWrap.classList.add("show");
  });

  function escapeHtml(s){
    return s.replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
})();
