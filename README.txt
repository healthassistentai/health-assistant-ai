গুরুত্বপূর্ণ নোট — আগের স্টোরি ওভাররাইট এড়াতে
================================================

আগেরবার একই ফোল্ডার/ফাইলনেম (health-assistant-ai/health-assistant-ai.html)
ব্যবহার করার কারণে নতুন আপলোড পুরনো স্টোরিটাকে ওভাররাইট করে দিয়েছিল।

এবার সেই সমস্যা এড়াতে এই প্যাকেজে ফোল্ডার ও HTML ফাইলের নাম বদলে দেওয়া হয়েছে:

    health-assistant-ai-v2/
    ├── health-assistant-ai-v2.html   <-- নতুন, ইউনিক নাম
    ├── poster.jpg
    ├── publisher-logo.jpg
    ├── slide-1.jpg
    └── slide-2.jpg

GitHub রিপোতে আপলোড করার সময়:
--------------------------------
১. এই পুরো "health-assistant-ai-v2" ফোল্ডারটা আপনার রিপোর রুটে আলাদা
   ফোল্ডার হিসেবে রাখুন (আগের "health-assistant-ai" ফোল্ডারের পাশে,
   ভেতরে না — যাতে কোনো ফাইল ওভাররাইট না হয়)।

২. লাইভ লিংক হবে:
   https://healthassistentai.github.io/health-assistant-ai/health-assistant-ai-v2/health-assistant-ai-v2.html
   (যদি রিপোর নাম আগেরটাই থাকে)

৩. ভবিষ্যতে নতুন কোনো Web Story বানালে সবসময় আলাদা ফোল্ডার/ফাইলনেম
   ব্যবহার করুন (যেমন health-assistant-ai-v3, অথবা তারিখ দিয়ে যেমন
   health-assistant-ai-2026-08)। এতে একই path-এ দুটো ভিন্ন স্টোরি
   কখনো একে অপরকে মুছে ফেলবে না, এবং দুটোই আলাদাভাবে লাইভ থাকবে।

৪. Blog Post URL এবার খালি দেওয়া ছিল, তাই canonical ট্যাগ ও দুটো
   CTA বাটনই ওয়েবসাইট হোমপেজ (https://www.healthassistentai.com)-এ
   পয়েন্ট করছে। ব্লগ পোস্ট রেডি হলে জানাবেন, আমি সেটা আপডেট করে দেব।
