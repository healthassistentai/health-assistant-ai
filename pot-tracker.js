(function(){
  var UI = {
    en:{
      eyebrow:"HEALTH TOOL", title:"Period & Ovulation Tracker",
      subtitle:"Enter your last period start date and cycle details to estimate your next period, fertile window, and ovulation day.",
      disclaimer:"This tool gives general estimates using standard cycle-length assumptions. Actual ovulation timing varies by person and by cycle, and irregular cycles can make these estimates less accurate. This is not a method of contraception and does not replace advice from a doctor or gynecologist.",
      labelDate:"Last period start date", labelCycle:"Average cycle length (days)", labelPeriod:"Average period length (days)",
      calc:"Calculate",
      statNext:"Next period", statFertile:"Fertile window", statOvulation:"Estimated ovulation",
      timelineTitle:"This cycle at a glance",
      legendPeriod:"Period days", legendFertile:"Fertile window", legendOvulation:"Ovulation day",
      upcomingTitle:"Upcoming cycles",
      cyclePeriod:"Period", cycleFertile:"Fertile window", cycleOvulation:"Ovulation day",
      cycleLabel:"Cycle",
      footer:"Estimates assume a consistent cycle length and a typical 14-day luteal phase; real cycles can vary. Track a few cycles for more accurate personal patterns, and consult a doctor if your cycle is very irregular or you have concerns about fertility.",
      needDate:"Please select your last period start date."
    },
    bn:{
      eyebrow:"স্বাস্থ্য টুল", title:"পিরিয়ড ও ওভুলেশন ট্র্যাকার",
      subtitle:"পরবর্তী পিরিয়ড, ফার্টাইল উইন্ডো এবং ওভুলেশন দিন আন্দাজ করতে আপনার শেষ পিরিয়ড শুরুর তারিখ ও সাইকেলের তথ্য দিন।",
      disclaimer:"এই টুলটি সাধারণ ধরে নেওয়া (স্ট্যান্ডার্ড) সাইকেল দৈর্ঘ্যের ভিত্তিতে একটি আনুমানিক হিসাব দেয়। প্রকৃত ওভুলেশনের সময় ব্যক্তিভেদে এবং সাইকেল ভেদে ভিন্ন হতে পারে, এবং অনিয়মিত সাইকেলে এই হিসাব কম নির্ভুল হতে পারে। এটি জন্মনিয়ন্ত্রণের কোনো পদ্ধতি নয় এবং ডাক্তার বা স্ত্রীরোগ বিশেষজ্ঞের পরামর্শের বিকল্প নয়।",
      labelDate:"শেষ পিরিয়ড শুরুর তারিখ", labelCycle:"গড় সাইকেল দৈর্ঘ্য (দিন)", labelPeriod:"গড় পিরিয়ড দৈর্ঘ্য (দিন)",
      calc:"হিসাব করুন",
      statNext:"পরবর্তী পিরিয়ড", statFertile:"ফার্টাইল উইন্ডো", statOvulation:"আনুমানিক ওভুলেশন",
      timelineTitle:"এই সাইকেলের সংক্ষিপ্ত চিত্র",
      legendPeriod:"পিরিয়ডের দিন", legendFertile:"ফার্টাইল উইন্ডো", legendOvulation:"ওভুলেশনের দিন",
      upcomingTitle:"আসন্ন সাইকেলসমূহ",
      cyclePeriod:"পিরিয়ড", cycleFertile:"ফার্টাইল উইন্ডো", cycleOvulation:"ওভুলেশনের দিন",
      cycleLabel:"সাইকেল",
      footer:"এই হিসাব একটি নির্দিষ্ট সাইকেল দৈর্ঘ্য এবং সাধারণ ১৪ দিনের লুটিয়াল ফেজ ধরে করা হয়েছে; প্রকৃত সাইকেল ভিন্ন হতে পারে। নিজের প্যাটার্ন ভালোভাবে বুঝতে কয়েক মাস ট্র্যাক করুন, এবং সাইকেল খুব অনিয়মিত হলে বা উর্বরতা নিয়ে দুশ্চিন্তা থাকলে ডাক্তারের পরামর্শ নিন।",
      needDate:"অনুগ্রহ করে আপনার শেষ পিরিয়ড শুরুর তারিখ দিন।"
    },
    hi:{
      eyebrow:"हेल्थ टूल", title:"पीरियड और ओव्यूलेशन ट्रैकर",
      subtitle:"अगले पीरियड, फर्टाइल विंडो और ओव्यूलेशन दिन का अनुमान लगाने के लिए अपनी पिछली पीरियड शुरू होने की तारीख और साइकिल की जानकारी दर्ज करें।",
      disclaimer:"यह टूल सामान्य मानी गई (स्टैंडर्ड) साइकिल लंबाई के आधार पर एक अनुमानित हिसाब देता है। असली ओव्यूलेशन का समय व्यक्ति और साइकिल के अनुसार अलग हो सकता है, और अनियमित साइकिल में यह अनुमान कम सटीक हो सकता है। यह गर्भनिरोधक का कोई तरीका नहीं है और डॉक्टर या स्त्री रोग विशेषज्ञ की सलाह का विकल्प नहीं है।",
      labelDate:"पिछली पीरियड शुरू होने की तारीख", labelCycle:"औसत साइकिल लंबाई (दिन)", labelPeriod:"औसत पीरियड लंबाई (दिन)",
      calc:"गणना करें",
      statNext:"अगला पीरियड", statFertile:"फर्टाइल विंडो", statOvulation:"अनुमानित ओव्यूलेशन",
      timelineTitle:"इस साइकिल का सारांश",
      legendPeriod:"पीरियड के दिन", legendFertile:"फर्टाइल विंडो", legendOvulation:"ओव्यूलेशन का दिन",
      upcomingTitle:"आने वाली साइकिलें",
      cyclePeriod:"पीरियड", cycleFertile:"फर्टाइल विंडो", cycleOvulation:"ओव्यूलेशन का दिन",
      cycleLabel:"साइकिल",
      footer:"यह अनुमान एक स्थिर साइकिल लंबाई और सामान्य 14-दिन के ल्यूटियल फेज़ को मानकर लगाया गया है; असली साइकिल अलग हो सकती है। अपने व्यक्तिगत पैटर्न को बेहतर समझने के लिए कुछ महीनों तक ट्रैक करें, और साइकिल बहुत अनियमित होने या प्रजनन क्षमता को लेकर चिंता होने पर डॉक्टर से सलाह लें।",
      needDate:"कृपया अपनी पिछली पीरियड शुरू होने की तारीख चुनें।"
    }
  };

  var LOCALE = { en:"en-US", bn:"bn-BD", hi:"hi-IN" };
  var currentLang = "en";
  var lastResult = null;
  var root = document.getElementById("pot-root");

  function fmtDate(d, lang){
    try{
      return new Intl.DateTimeFormat(LOCALE[lang], { day:"numeric", month:"short", year:"numeric" }).format(d);
    }catch(e){
      return d.toDateString();
    }
  }
  function addDays(date, n){
    var d = new Date(date.getTime());
    d.setDate(d.getDate() + n);
    return d;
  }
  function showMessage(msg){
    var box = document.getElementById("pot-msg");
    if(box){ box.textContent = msg; box.style.display = "block"; }
  }
  function clearMessage(){
    var box = document.getElementById("pot-msg");
    if(box){ box.textContent = ""; box.style.display = "none"; }
  }

  function applyLang(lang){
    currentLang = lang;
    var t = UI[lang];
    document.getElementById("pot-eyebrow").textContent = t.eyebrow;
    document.getElementById("pot-title").textContent = t.title;
    document.getElementById("pot-subtitle").textContent = t.subtitle;
    document.getElementById("pot-disclaimer").textContent = t.disclaimer;
    document.getElementById("pot-label-date").textContent = t.labelDate;
    document.getElementById("pot-label-cycle").textContent = t.labelCycle;
    document.getElementById("pot-label-period").textContent = t.labelPeriod;
    document.getElementById("pot-calc-label").textContent = t.calc;
    document.getElementById("pot-stat-next-label").textContent = t.statNext;
    document.getElementById("pot-stat-fertile-label").textContent = t.statFertile;
    document.getElementById("pot-stat-ovulation-label").textContent = t.statOvulation;
    document.getElementById("pot-timeline-title").textContent = t.timelineTitle;
    document.getElementById("pot-legend-period").textContent = t.legendPeriod;
    document.getElementById("pot-legend-fertile").textContent = t.legendFertile;
    document.getElementById("pot-legend-ovulation").textContent = t.legendOvulation;
    document.getElementById("pot-upcoming-title").textContent = t.upcomingTitle;
    document.getElementById("pot-footer-note").textContent = t.footer;
    var btns = root.querySelectorAll(".pot-lang-btn");
    for(var i=0;i<btns.length;i++){
      var b = btns[i];
      if(b.getAttribute("data-lang") === lang){ b.classList.add("active"); }
      else{ b.classList.remove("active"); }
    }
    clearMessage();
    if(lastResult){
      render(lastResult);
    } else {
      document.getElementById("pot-stat-next-value").textContent = "--";
      document.getElementById("pot-stat-fertile-value").textContent = "--";
      document.getElementById("pot-stat-ovulation-value").textContent = "--";
    }
  }

  function compute(){
    var t = UI[currentLang];
    var dateVal = document.getElementById("pot-date").value;
    if(!dateVal){ showMessage(t.needDate); return; }
    clearMessage();
    var cycleLen = parseInt(document.getElementById("pot-cycle").value, 10) || 28;
    var periodLen = parseInt(document.getElementById("pot-period").value, 10) || 5;
    var parts = dateVal.split("-");
    var lastStart = new Date(parseInt(parts[0],10), parseInt(parts[1],10)-1, parseInt(parts[2],10));

    var cycles = [];
    for(var i=0; i<6; i++){
      var cycleStart = addDays(lastStart, i*cycleLen);
      var periodEnd = addDays(cycleStart, periodLen - 1);
      var nextPeriodStart = addDays(cycleStart, cycleLen);
      var ovulation = addDays(nextPeriodStart, -14);
      var fertileStart = addDays(ovulation, -5);
      var fertileEnd = addDays(ovulation, 1);
      cycles.push({
        cycleStart:cycleStart, periodEnd:periodEnd,
        ovulation:ovulation, fertileStart:fertileStart, fertileEnd:fertileEnd,
        nextPeriodStart:nextPeriodStart, cycleLen:cycleLen, periodLen:periodLen
      });
    }
    lastResult = cycles;
    render(cycles);
  }

  function render(cycles){
    var t = UI[currentLang];
    var c0 = cycles[0];

    document.getElementById("pot-stat-next-value").textContent = fmtDate(c0.nextPeriodStart, currentLang);
    document.getElementById("pot-stat-fertile-value").textContent = fmtDate(c0.fertileStart, currentLang) + " - " + fmtDate(c0.fertileEnd, currentLang);
    document.getElementById("pot-stat-ovulation-value").textContent = fmtDate(c0.ovulation, currentLang);

    var timeline = document.getElementById("pot-timeline");
    timeline.innerHTML = "";
    for(var d=0; d<c0.cycleLen; d++){
      var day = addDays(c0.cycleStart, d);
      var cell = document.createElement("div");
      cell.className = "pot-day";
      if(d < c0.periodLen){ cell.classList.add("period"); }
      if(day >= c0.fertileStart && day <= c0.fertileEnd){ cell.classList.add("fertile"); }
      if(day.getTime() === c0.ovulation.getTime()){ cell.classList.add("ovulation"); cell.classList.remove("fertile"); }
      cell.textContent = String(d+1);
      timeline.appendChild(cell);
    }

    var list = document.getElementById("pot-cycle-list");
    list.innerHTML = "";
    for(var idx=0; idx<cycles.length; idx++){
      var cy = cycles[idx];
      var card = document.createElement("div");
      card.className = "pot-cycle-card";
      card.innerHTML =
        '<div class="pot-cycle-head">'+t.cycleLabel+' '+(idx+1)+'</div>' +
        '<div class="pot-cycle-row"><b>'+t.cyclePeriod+':</b> '+fmtDate(cy.cycleStart, currentLang)+' - '+fmtDate(cy.periodEnd, currentLang)+'</div>' +
        '<div class="pot-cycle-row"><b>'+t.cycleFertile+':</b> '+fmtDate(cy.fertileStart, currentLang)+' - '+fmtDate(cy.fertileEnd, currentLang)+'</div>' +
        '<div class="pot-cycle-row"><b>'+t.cycleOvulation+':</b> '+fmtDate(cy.ovulation, currentLang)+'</div>';
      list.appendChild(card);
    }

    document.getElementById("pot-results").classList.add("show");
  }

  var langBtns = root.querySelectorAll(".pot-lang-btn");
  for(var i=0;i<langBtns.length;i++){
    langBtns[i].addEventListener("click", function(e){
      applyLang(e.currentTarget.getAttribute("data-lang"));
    });
  }
  document.getElementById("pot-calc").addEventListener("click", compute);

  applyLang("en");
})();
