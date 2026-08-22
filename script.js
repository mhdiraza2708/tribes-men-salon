/* =========================================================
   TRIBES MEN SALON — MUSCAT
   ---------------------------------------------------------
   EDIT THIS BLOCK — everything the salon needs to go live.
   ========================================================= */
const CONFIG = {
  // ---- BRANCHES ----
  // phone: international format, digits only (Oman = 968)
  // maps:  what gets searched on Google Maps for "Get Directions"
  branches: {
    boshar: {
      phone: "96897387797",
      phoneDisplay: "+968 9738 7797",
      maps: "Tribes Men's Spa and Salon, Office 1991, Al Ghubrah Street 9, Bausher, Muscat, Oman"
    },
    mazoon: {
      phone: "96897387798",
      phoneDisplay: "+968 9738 7798",
      maps: "Tribes Men's Spa and Salon, Al Mazoon Street, Seeb, Muscat, Oman"
    }
  },
  // Which branch the floating WhatsApp button and header "call" links use
  primaryBranch: "boshar",

  // Pre-filled WhatsApp message
  whatsappMessage: "Hi Tribes, I'd like to book an appointment.",
  // Instagram profile
  instagram: "https://instagram.com/tribesoman",

  // ---- BOOKING CALENDAR ----
  // Paste your Calendly event link here, e.g.
  // "https://calendly.com/tribesmensalon/haircut"
  // Google Appointment Schedules also work (paste the /appointments/schedules/... URL).
  // Leave empty ("") to show the WhatsApp fallback card instead.
  calendlyUrl: ""
};

/* =========================================================
   THE MENU
   ---------------------------------------------------------
   To change a price, edit the `p` value. To add a service,
   copy a line. `n` = note shown under the name. `best: 1`
   adds the gold Best Seller badge. `g` starts a sub-group.
   ========================================================= */
const MENU = [
  {
    id: "hair",
    en: "Hair & Beard", ar: "الشعر واللحية",
    items: [
      { en: "Classic Hair Cut", ar: "قصة شعر كلاسيكية", nEn: "including Hair Wash", nAr: "تشمل غسيل الشعر", p: "4" },
      { en: "Hair Fade", ar: "تدرّج الشعر", nEn: "including Hair Wash", nAr: "تشمل غسيل الشعر", p: "4" },
      { en: "Full Head Shave", ar: "حلاقة الرأس بالكامل", p: "3" },
      { en: "Wash & Blow Dry", ar: "غسيل وتجفيف", p: "2" },
      { en: "Kids Hair Cut", ar: "قصة شعر للأطفال", nEn: "including Hair Wash", nAr: "تشمل غسيل الشعر", p: "3" },
      { en: "Beard Trim", ar: "تهذيب اللحية", p: "2" },
      { en: "Regular Beard Treatment", ar: "علاج اللحية العادي", nEn: "including Beard Trim", nAr: "يشمل تهذيب اللحية", p: "1.5" },
      { en: "Special Beard Treatment", ar: "علاج اللحية الخاص", nEn: "including Beard Trim", nAr: "يشمل تهذيب اللحية", p: "3" },
      { en: "Beard Color", ar: "صبغة اللحية", p: "3" }
    ]
  },
  {
    id: "facial",
    en: "Facial Miracles", ar: "عجائب البشرة",
    items: [
      { en: "Face Cleansing", ar: "تنظيف الوجه", p: "2" },
      { en: "Face Mask", ar: "قناع الوجه", p: "2" },
      { en: "Face Scrub", ar: "مقشّر الوجه", p: "3" },
      { en: "Steam Cleansing", ar: "تنظيف بالبخار", p: "5" },
      { en: "Express Facial", ar: "تنظيف بشرة سريع", p: "10" },
      { en: "Deep Cleansing Facial", ar: "تنظيف بشرة عميق", p: "15" },
      { en: "Glow & Brightening", ar: "نضارة وتفتيح", p: "20" },
      { en: "Anti-Acne", ar: "علاج حب الشباب", p: "20" },
      { en: "Oxygen Hydration", ar: "ترطيب بالأكسجين", p: "20" },
      { en: "Special Korean Facial", ar: "تنظيف بشرة كوري خاص", p: "25", best: 1 },
      { en: "Hydra Facial", ar: "هيدرا فيشل", p: "30" }
    ]
  },
  {
    id: "massage",
    en: "Body Massages", ar: "مساج الجسم",
    items: [
      { en: "Face Massage", ar: "مساج الوجه", nEn: "15 mins", nAr: "١٥ دقيقة", p: "5" },
      { en: "Hand Massage", ar: "مساج اليدين", nEn: "15 mins", nAr: "١٥ دقيقة", p: "5" },
      { en: "Foot Massage", ar: "مساج القدمين", nEn: "15 mins", nAr: "١٥ دقيقة", p: "5" },
      { en: "Head & Shoulder Massage", ar: "مساج الرأس والكتفين", nEn: "15 mins", nAr: "١٥ دقيقة", p: "6" },
      { en: "Hand & Feet Massage", ar: "مساج اليدين والقدمين", nEn: "15 mins", nAr: "١٥ دقيقة", p: "6" },
      { en: "Swedish Massage", ar: "المساج السويدي", nEn: "30/45/60 mins", nAr: "٣٠/٤٥/٦٠ دقيقة", p: "10/15/20" },
      { en: "Deep Tissue Massage", ar: "مساج الأنسجة العميقة", nEn: "30/45/60 mins", nAr: "٣٠/٤٥/٦٠ دقيقة", p: "10/15/20", best: 1 },
      { en: "Thai Massage", ar: "المساج التايلندي", nEn: "30/45/60 mins", nAr: "٣٠/٤٥/٦٠ دقيقة", p: "10/15/20" },
      { en: "Sports Massage", ar: "المساج الرياضي", nEn: "30/45/60 mins", nAr: "٣٠/٤٥/٦٠ دقيقة", p: "11/16/22" },
      { en: "Omani Luban Massage", ar: "مساج اللبان العُماني", nEn: "30/45/60 mins", nAr: "٣٠/٤٥/٦٠ دقيقة", p: "12/17/22" },
      { en: "Hot Stone Massage", ar: "مساج الأحجار الساخنة", nEn: "60 mins", nAr: "٦٠ دقيقة", p: "22" },
      { en: "Tribes Signature Massage", ar: "مساج ترايبس المميز", nEn: "60 mins", nAr: "٦٠ دقيقة", p: "25" }
    ]
  },
  {
    id: "moroccan",
    en: "Moroccan Bath", ar: "الحمام المغربي",
    leadEn: "Relieve stress, body pain and feel energized with our special Moroccan bath treatments.",
    leadAr: "تخلّص من التوتر وآلام الجسم واستعد نشاطك مع علاجات الحمام المغربي الخاصة بنا.",
    items: [
      { en: "Self Moroccan Bath", ar: "حمام مغربي ذاتي", p: "10" },
      { en: "Classic Moroccan Bath", ar: "حمام مغربي كلاسيكي", p: "15" },
      { en: "Herbal Moroccan Bath", ar: "حمام مغربي بالأعشاب", p: "20" },
      { en: "Royal Moroccan Bath", ar: "حمام مغربي ملكي", p: "25", best: 1 },
      { en: "Tribal Moroccan Bath", ar: "حمام ترايبل المغربي", p: "30" }
    ]
  },
  {
    id: "handfeet",
    en: "Hand & Feet", ar: "اليدين والقدمين",
    items: [
      { en: "Hand or Feet Nail Cutting", ar: "تقليم أظافر اليدين أو القدمين", p: "3" },
      { en: "Hand & Feet Nail Cutting", ar: "تقليم أظافر اليدين والقدمين", p: "6" },
      { en: "Foot Spa", ar: "سبا القدمين", p: "6" },
      { en: "Manicure", ar: "منيكير", p: "6" },
      { en: "Pedicure", ar: "بديكير", p: "8" },
      { en: "Pedicure + Foot Spa", ar: "بديكير + سبا القدمين", p: "10" },
      { en: "Foot Spa with Foot Massage", ar: "سبا القدمين مع مساج", p: "10" },
      { en: "Mani + Pedi", ar: "منيكير + بديكير", p: "12" },
      { en: "Mani + Pedi + Foot Spa", ar: "منيكير + بديكير + سبا القدمين", p: "15", best: 1 },
      { en: "Footlogix Special Pedicure", ar: "بديكير فوتلوجيكس الخاص", p: "15" },
      { en: "Voesh USA Manicure", ar: "منيكير فوش الأمريكي", p: "9" },
      { en: "Voesh USA Pedicure", ar: "بديكير فوش الأمريكي", p: "12" },
      { en: "Voesh USA Mani + Pedi + Foot Spa", ar: "فوش الأمريكي: منيكير + بديكير + سبا القدمين", p: "20" }
    ]
  },
  {
    id: "kevin",
    en: "Kevin Murphy", ar: "كيفن ميرفي",
    leadEn: "Be awed by the mastery of our stylists with carefully crafted colouring sessions designed to elevate your look.",
    leadAr: "استمتع بإتقان مصفّفينا مع جلسات صبغة مصمّمة بعناية لترتقي بإطلالتك.",
    items: [
      { gEn: "Color Treatments", gAr: "علاجات الصبغة" },
      { en: "Hair Polish", ar: "تلميع الشعر", p: "15" },
      { en: "Hair Color Low Lights", ar: "صبغة الشعر لو لايتس", nEn: "Medium/Long", nAr: "متوسط/طويل", p: "25" },
      { en: "Hair Color Highlights", ar: "صبغة الشعر هاي لايتس", nEn: "Medium/Long", nAr: "متوسط/طويل", p: "30" },
      { en: "Platinum / Blonde", ar: "بلاتيني / أشقر", nEn: "Short/Medium/Long", nAr: "قصير/متوسط/طويل", p: "25/30/35" },
      { gEn: "Restore & Repair", gAr: "الترميم والعلاج" },
      { en: "Scalp Spa", ar: "سبا فروة الرأس", p: "10", best: 1 },
      { en: "Anti Dandruff", ar: "علاج القشرة", p: "10" },
      { en: "Anti Hair Fall", ar: "علاج تساقط الشعر", p: "10" },
      { en: "Hydrate Me", ar: "ترطيب الشعر", p: "10" },
      { en: "Stimulate Me", ar: "تحفيز الشعر", p: "10" },
      { en: "Anti-Frizz", ar: "علاج التجعّد", p: "10" },
      { en: "Detox", ar: "ديتوكس", p: "10" }
    ]
  },
  {
    id: "hairtreat",
    en: "Hair Treatments", ar: "علاجات الشعر",
    items: [
      { en: "Argan Oil Hair Spa", ar: "سبا الشعر بزيت الأرغان", p: "5" },
      { en: "Japanese Hair Mask", ar: "قناع الشعر الياباني", p: "7" },
      { en: "Hair Protein", ar: "بروتين الشعر", nEn: "Short/Medium/Long", nAr: "قصير/متوسط/طويل", p: "20/25/30" },
      { en: "Hair Keratin", ar: "كيراتين الشعر", nEn: "Short/Medium/Long", nAr: "قصير/متوسط/طويل", p: "25/30/35" },
      { en: "Hair Botox", ar: "بوتوكس الشعر", nEn: "Short/Medium/Long", nAr: "قصير/متوسط/طويل", p: "25/30/35" },
      { en: "Hair Curls / Perms", ar: "تجعيد الشعر / برم", nEn: "Short/Medium/Long", nAr: "قصير/متوسط/طويل", p: "30/35/40" }
    ]
  },
  {
    id: "wax",
    en: "Trim & Wax", ar: "التهذيب والواكس",
    items: [
      { en: "Nose Waxing", ar: "واكس الأنف", p: "1" },
      { en: "Ear Waxing", ar: "واكس الأذن", p: "1" },
      { en: "Nose + Ear Waxing", ar: "واكس الأنف + الأذن", p: "1.5" },
      { en: "Eyebrow Shaping", ar: "تحديد الحواجب", p: "2" },
      { en: "Full Face Waxing", ar: "واكس الوجه بالكامل", p: "6" },
      { en: "Under Arms Trim / Wax", ar: "تهذيب / واكس تحت الإبط", p: "2/3" },
      { en: "Foot Trim / Wax", ar: "تهذيب / واكس القدمين", p: "2/4" },
      { en: "Arms Trim / Wax", ar: "تهذيب / واكس الذراعين", p: "4/6" },
      { en: "Chest Trim / Wax", ar: "تهذيب / واكس الصدر", p: "6/8" },
      { en: "Back Trim / Wax", ar: "تهذيب / واكس الظهر", p: "6/8" },
      { en: "Lower Leg Trim / Wax", ar: "تهذيب / واكس أسفل الساق", p: "6/8" },
      { en: "Full Legs Trim / Wax", ar: "تهذيب / واكس الساقين بالكامل", p: "8/10" },
      { en: "Bikini Trim / Wax", ar: "تهذيب / واكس البيكيني", p: "10/12" },
      { en: "Full Body Trimming", ar: "تهذيب الجسم بالكامل", p: "25" },
      { en: "Full Body Waxing", ar: "واكس الجسم بالكامل", p: "30" }
    ]
  },
  {
    id: "wedding",
    en: "Wedding Packages", ar: "باقات الأعراس",
    items: [
      { en: "Wedding Silver", ar: "باقة الفضية", p: "35",
        nEn: "Haircut &middot; Beard Trimming &middot; Express Facial &middot; Manicure/Pedicure &middot; Self Moroccan Bath",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; تنظيف بشرة سريع &middot; منيكير/بديكير &middot; حمام مغربي ذاتي" },
      { en: "Wedding Gold", ar: "الباقة الذهبية", p: "45",
        nEn: "Haircut &middot; Beard Trimming &middot; Deep Cleansing Facial &middot; Manicure/Pedicure/Foot Spa &middot; Classic Moroccan Bath",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; تنظيف بشرة عميق &middot; منيكير/بديكير/سبا القدمين &middot; حمام مغربي كلاسيكي" },
      { en: "Wedding Platinum", ar: "الباقة البلاتينية", p: "55",
        nEn: "Haircut &middot; Beard Trimming &middot; Deep Cleansing Facial &middot; Manicure/Pedicure/Foot Spa &middot; Royal Moroccan Bath",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; تنظيف بشرة عميق &middot; منيكير/بديكير/سبا القدمين &middot; حمام مغربي ملكي" }
    ]
  },
  {
    id: "packages",
    en: "All In One", ar: "باقات متكاملة",
    items: [
      { en: "Party All Night", ar: "سهرة طوال الليل", p: "15",
        nEn: "Haircut &middot; Beard Trimming &middot; Express Facial",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; تنظيف بشرة سريع" },
      { en: "It's My Birthday", ar: "عيد ميلادي", p: "20",
        nEn: "Haircut &middot; Beard Trimming &middot; Express Facial &middot; Manicure",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; تنظيف بشرة سريع &middot; منيكير" },
      { en: "Work & Relax", ar: "عمل واسترخاء", p: "20",
        nEn: "Haircut &middot; Beard Trimming &middot; Manicure/Pedicure &middot; Face Mask",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; منيكير/بديكير &middot; قناع الوجه" },
      { en: "It's Friday Again", ar: "الجمعة من جديد", p: "25",
        nEn: "Haircut &middot; Beard Trimming &middot; Foot Spa &middot; Body Massage (45 mins)",
        nAr: "قصة شعر &middot; تهذيب اللحية &middot; سبا القدمين &middot; مساج الجسم (٤٥ دقيقة)" }
    ]
  }
];

/* =========================================================
   THE TEAM
   ---------------------------------------------------------
   Photos go in assets/team/<img>.jpg
   ========================================================= */
const BRANCHES = [
  { id: "all",    en: "All Specialists", ar: "جميع المتخصصين" },
  { id: "boshar", en: "Boshar",          ar: "بوشر" },
  { id: "mazoon", en: "Mazoon Street",   ar: "شارع مازون" }
];

const TEAM = [
  { img: "ahmed",  en: "Ahmed",  ar: "أحمد",  branch: "boshar",
    sEn: "Haircut, Beard & Facial", sAr: "قص الشعر، اللحية والفيشل" },
  { img: "aman",   en: "Aman",   ar: "أمان",  branch: "boshar",
    sEn: "Haircut, Beard & Facial", sAr: "قص الشعر، اللحية والفيشل" },
  { img: "raman",  en: "Raman",  ar: "رامان", branch: "boshar",
    sEn: "Hair Fade, Beard Fade & Facial", sAr: "تدريج الشعر، تدريج اللحية والفيشل" },
  { img: "ali",    en: "Ali",    ar: "علي",   branch: "boshar",
    sEn: "Body Scrub, Massage & Facial", sAr: "تقشير الجسم، المساج والفيشل" },
  { img: "romeo",  en: "Romeo",  ar: "روميو", branch: "boshar",
    sEn: "Manicure, Pedicure, Foot Spa, Moroccan Bath & Massage",
    sAr: "المانيكير، الباديكير، سبا القدم، الحمام المغربي والمساج" },
  { img: "randy",  en: "Randy",  ar: "راندي", branch: "boshar",
    sEn: "Manicure, Pedicure, Foot Spa, Facial, Body Trimming & Waxing",
    sAr: "المانيكير، الباديكير، سبا القدم، الفيشل، تخفيف شعر الجسم والواكس" },
  { img: "saif",   en: "Saif",   ar: "سيف",   branch: "mazoon",
    sEn: "Haircut, Beard & Facial", sAr: "قص الشعر، اللحية والفيشل" },
  { img: "zohaib", en: "Zohaib", ar: "زهيب",  branch: "mazoon",
    sEn: "Haircut, Beard & Facial", sAr: "قص الشعر، اللحية والفيشل" },
  { img: "raj",    en: "Raj",    ar: "راج",   branch: "mazoon",
    sEn: "Hair Fade, Beard Fade & Facial", sAr: "تدريج الشعر، تدريج اللحية والفيشل" },
  { img: "kris",   en: "Kris",   ar: "كريس",  branch: "mazoon",
    sEn: "Body Massage, Body Scrub, Manicure, Pedicure, Waxing & Trimming",
    sAr: "مساج الجسم، تقشير الجسم، المانيكير، الباديكير، الواكس والتخفيف" },
  { img: "sk",     en: "S.K",    ar: "إس كيه", branch: "mazoon",
    sEn: "Body Massage, Manicure, Pedicure & Facial",
    sAr: "مساج الجسم، المانيكير، الباديكير والفيشل" }
];

/* =========================================================
   TRANSLATIONS
   ========================================================= */
const I18N = {
  en: {
    "brand.sub": "MEN'S SPA &amp; SALON",
    "nav.about": "About", "nav.services": "Services", "nav.team": "Barbers",
    "nav.gallery": "Gallery", "nav.reviews": "Reviews", "nav.contact": "Contact",
    "nav.book": "Book Now",

    "hero.eyebrow": "Est. Muscat &middot; Oman",
    "hero.title1": "Sharp cuts.",
    "hero.title2": "Sharper standards.",
    "hero.lead": "A men's grooming house built on craft, ritual and respect. Master barbers, hot towels, single-blade finishes — in the heart of Muscat.",
    "hero.cta1": "Book an Appointment",
    "hero.cta2": "View Services",
    "hero.stat1": "Years of craft", "hero.stat2": "Master barbers", "hero.stat3": "Average rating",

    "about.eyebrow": "The House",
    "about.title": "More than a haircut — a standard you keep.",
    "about.p1": "Tribes Men Salon was built for the man who notices the details. Every chair, every blade and every product is chosen with intent. We take our time, because rushed work shows.",
    "about.p2": "From a clean skin fade to a full grooming ritual, our barbers are trained in classic technique and modern styling — and we finish every service with a hot towel and a proper consultation.",
    "about.f1t": "Master barbers only", "about.f1p": "Every barber on the floor is vetted, trained and time-served.",
    "about.f2t": "Sterilised, single-use", "about.f2p": "Fresh blades, sanitised tools and clean linen for every guest.",
    "about.f3t": "Private &amp; unhurried", "about.f3p": "Appointment-led so your chair is ready the minute you walk in.",

    "services.eyebrow": "The Menu",
    "services.title": "Services &amp; Pricing",
    "services.lead": "Your journey to discovery begins here. We invite you to experience the best grooming.",
    "services.note": "All prices in Omani Rial. Walk-ins welcome when the floor is free — but a booked chair is a guaranteed chair.",
    "menu.best": "Best Seller",

    "booking.eyebrow": "Reserve",
    "booking.title": "Book Your Chair",
    "booking.lead": "Pick a time that works for you. You'll get instant confirmation and a reminder before your appointment.",
    "booking.h1": "How it works",
    "booking.s1t": "Choose a service", "booking.s1p": "Select from the calendar's service list.",
    "booking.s2t": "Pick your slot", "booking.s2p": "Live availability, updated in real time.",
    "booking.s3t": "Confirm", "booking.s3p": "Confirmation by email and SMS.",
    "booking.alt": "Prefer to talk to us?",
    "booking.wa": "Book on WhatsApp", "booking.call": "Call the salon",
    "booking.hoursTitle": "Opening hours",
    "booking.fbTitle": "Booking calendar not connected yet",
    "booking.fbBody": "Add your Calendly (or Google Appointments) link to <code>CONFIG.calendlyUrl</code> in <code>script.js</code> and the live calendar will appear here.",
    "booking.fbCta": "Book on WhatsApp instead",

    "hours.d1": "Daily", "hours.d2": "",

    "team.eyebrow": "The Tribe", "team.title": "Meet the Team",
    "team.lead": "Request your specialist by name when you book.",

    "gallery.eyebrow": "The Work", "gallery.title": "Inside the Salon",

    "reviews.eyebrow": "Word of Mouth", "reviews.title": "What Muscat Says",
    "rev.1": "\"Best fade I've had in Oman, full stop. They actually listen before they touch your hair.\"", "rev.1m": "Al Khuwair",
    "rev.2": "\"The hot towel shave is worth the trip alone. Clean place, proper service, no rushing.\"", "rev.2m": "Expat, Muscat",
    "rev.3": "\"Booked online, walked in, chair was ready. Two years now and never a bad cut.\"", "rev.3m": "Regular since 2023",

    "contact.eyebrow": "Find Us", "contact.title": "Two Branches in Muscat",
    "contact.addr": "Address", "contact.phone": "Phone", "contact.email": "Email", "contact.hours": "Hours",
    "contact.cta": "Book Now", "contact.dir": "Get Directions",
    "branch.boshar": "Boshar", "branch.bosharAddr": "Office 1991, Al Ghubrah Street 9, Bausher, Muscat",
    "branch.mazoon": "Mazoon Street", "branch.mazoonAddr": "Al Mazoon Street, Seeb, Muscat",

    "footer.tag": "Craft, ritual and respect — since 2013.",
    "footer.rights": "All rights reserved.",
    "footer.made": "Muscat, Sultanate of Oman",

    "wa.label": "Book on WhatsApp"
  },

  ar: {
    "brand.sub": "سبا وصالون رجالي",
    "nav.about": "من نحن", "nav.services": "الخدمات", "nav.team": "الحلاقون",
    "nav.gallery": "المعرض", "nav.reviews": "الآراء", "nav.contact": "تواصل",
    "nav.book": "احجز الآن",

    "hero.eyebrow": "تأسس في مسقط &middot; عُمان",
    "hero.title1": "قصّات دقيقة.",
    "hero.title2": "ومعايير أدقّ.",
    "hero.lead": "دار عناية رجالية قائمة على الحرفة والطقوس والاحترام. حلاقون محترفون، مناشف ساخنة، ولمسات نهائية بشفرة واحدة — في قلب مسقط.",
    "hero.cta1": "احجز موعدك",
    "hero.cta2": "تصفّح الخدمات",
    "hero.stat1": "سنة من الحرفة", "hero.stat2": "حلاقون محترفون", "hero.stat3": "متوسط التقييم",

    "about.eyebrow": "الدار",
    "about.title": "أكثر من مجرد قصّة شعر — إنه معيار تحافظ عليه.",
    "about.p1": "أُسّس صالونترايبس للرجل الذي يلاحظ التفاصيل. كل كرسي، وكل شفرة، وكل منتج مختار بعناية. نأخذ وقتنا، لأن العمل المتعجّل يظهر أثره.",
    "about.p2": "من التدرّج النظيف إلى طقوس العناية الكاملة، حلاقونا مدرّبون على التقنيات الكلاسيكية والتصفيف الحديث — وننهي كل خدمة بمنشفة ساخنة واستشارة كاملة.",
    "about.f1t": "حلاقون محترفون فقط", "about.f1p": "كل حلاق لدينا مُختار ومدرَّب وذو خبرة طويلة.",
    "about.f2t": "تعقيم وأدوات لمرة واحدة", "about.f2p": "شفرات جديدة وأدوات معقّمة ومناشف نظيفة لكل ضيف.",
    "about.f3t": "خصوصية وراحة", "about.f3p": "نعمل بالمواعيد ليكون كرسيك جاهزاً لحظة وصولك.",

    "services.eyebrow": "القائمة",
    "services.title": "الخدمات والأسعار",
    "services.lead": "رحلتك نحو التميّز تبدأ من هنا. ندعوك لتجربة أفضل عناية رجالية.",
    "services.note": "جميع الأسعار بالريال العُماني. نرحّب بالزيارات دون موعد عند توفر مكان — لكن الحجز يضمن لك كرسيك.",
    "menu.best": "الأكثر طلباً",

    "booking.eyebrow": "الحجز",
    "booking.title": "احجز كرسيك",
    "booking.lead": "اختر الوقت المناسب لك. ستصلك رسالة تأكيد فورية وتذكير قبل موعدك.",
    "booking.h1": "كيف تحجز",
    "booking.s1t": "اختر الخدمة", "booking.s1p": "اختر من قائمة الخدمات في التقويم.",
    "booking.s2t": "اختر الموعد", "booking.s2p": "مواعيد متاحة ومحدّثة لحظياً.",
    "booking.s3t": "أكّد الحجز", "booking.s3p": "تأكيد عبر البريد والرسائل النصية.",
    "booking.alt": "تفضّل التحدث معنا؟",
    "booking.wa": "احجز عبر واتساب", "booking.call": "اتصل بالصالون",
    "booking.hoursTitle": "ساعات العمل",
    "booking.fbTitle": "تقويم الحجز غير مُفعّل بعد",
    "booking.fbBody": "أضف رابط Calendly (أو مواعيد جوجل) في <code>CONFIG.calendlyUrl</code> داخل ملف <code>script.js</code> وسيظهر التقويم هنا.",
    "booking.fbCta": "احجز عبر واتساب",

    "hours.d1": "يوميًا", "hours.d2": "",

    "team.eyebrow": "الفريق", "team.title": "تعرّف على الفريق",
    "team.lead": "اطلب المتخصص بالاسم عند الحجز.",

    "gallery.eyebrow": "أعمالنا", "gallery.title": "داخل الصالون",

    "reviews.eyebrow": "آراء الزبائن", "reviews.title": "ماذا تقول مسقط",
    "rev.1": "«أفضل تدرّج حصلت عليه في عُمان. يستمعون فعلاً قبل أن يبدأوا.»", "rev.1m": "الخوير",
    "rev.2": "«حلاقة المنشفة الساخنة تستحق الزيارة وحدها. مكان نظيف وخدمة راقية بلا استعجال.»", "rev.2m": "مقيم في مسقط",
    "rev.3": "«حجزت أونلاين، وصلت، والكرسي جاهز. سنتان ولم أخرج بقصة سيئة أبداً.»", "rev.3m": "زبون منذ ٢٠٢٣",

    "contact.eyebrow": "موقعنا", "contact.title": "فرعان في مسقط",
    "contact.addr": "العنوان", "contact.phone": "الهاتف", "contact.email": "البريد الإلكتروني", "contact.hours": "ساعات العمل",
    "contact.cta": "احجز الآن", "contact.dir": "احصل على الاتجاهات",
    "branch.boshar": "بوشر", "branch.bosharAddr": "مكتب 1991، شارع الغبرة 9، بوشر، مسقط",
    "branch.mazoon": "شارع مازون", "branch.mazoonAddr": "شارع مازون، السيب، مسقط",

    "footer.tag": "حرفة وطقوس واحترام — منذ ٢٠١٣.",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.made": "مسقط، سلطنة عُمان",

    "wa.label": "احجز عبر واتساب"
  }
};

/* =========================================================
   LINKS
   ========================================================= */
function applyLinks() {
  const primary = CONFIG.branches[CONFIG.primaryBranch];
  const mapsUrl = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const map = {
    whatsapp: `https://wa.me/${primary.phone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`,
    tel: `tel:+${primary.phone}`,
    maps: mapsUrl(primary.maps),
    instagram: CONFIG.instagram,
    telBoshar: `tel:+${CONFIG.branches.boshar.phone}`,
    telMazoon: `tel:+${CONFIG.branches.mazoon.phone}`,
    mapsBoshar: mapsUrl(CONFIG.branches.boshar.maps),
    mapsMazoon: mapsUrl(CONFIG.branches.mazoon.maps)
  };

  document.querySelectorAll("[data-link]").forEach(el => {
    const href = map[el.dataset.link];
    if (href) el.setAttribute("href", href);
  });

  document.querySelectorAll("[data-phone-text]").forEach(el => {
    el.textContent = primary.phoneDisplay;
  });
  document.querySelectorAll("[data-phone-boshar]").forEach(el => {
    el.textContent = CONFIG.branches.boshar.phoneDisplay;
  });
  document.querySelectorAll("[data-phone-mazoon]").forEach(el => {
    el.textContent = CONFIG.branches.mazoon.phoneDisplay;
  });
}

/* =========================================================
   MENU RENDERING
   ========================================================= */
let activeCategory = MENU[0].id;

function renderMenu(lang) {
  const tabs = document.getElementById("menuTabs");
  const panel = document.getElementById("menuPanel");
  if (!tabs || !panel) return;

  const L = lang === "ar" ? "ar" : "en";
  const bestLabel = I18N[L]["menu.best"];

  tabs.innerHTML = MENU.map(cat => `
    <button type="button" role="tab" class="menu-tab${cat.id === activeCategory ? " on" : ""}"
            data-cat="${cat.id}" aria-selected="${cat.id === activeCategory}">${cat[L]}</button>
  `).join("");

  const cat = MENU.find(c => c.id === activeCategory) || MENU[0];
  const lead = L === "ar" ? cat.leadAr : cat.leadEn;

  const rows = cat.items.map(item => {
    if (item.gEn) {
      return `<li class="menu-group">${L === "ar" ? item.gAr : item.gEn}</li>`;
    }
    const note = L === "ar" ? item.nAr : item.nEn;
    return `
      <li class="menu-row">
        <div class="menu-name">
          <span>${item[L]}${item.best ? `<b class="best" title="${bestLabel}">${bestLabel}</b>` : ""}</span>
          ${note ? `<small>${note}</small>` : ""}
        </div>
        <span class="menu-price">${item.p}</span>
      </li>`;
  }).join("");

  panel.innerHTML = `
    <h3 class="menu-heading">${cat[L]}</h3>
    ${lead ? `<p class="menu-lead">${lead}</p>` : ""}
    <ul class="menu-list">${rows}</ul>
  `;
}

function initMenu() {
  const tabs = document.getElementById("menuTabs");
  if (!tabs) return;
  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderMenu(document.documentElement.lang);
  });
}

/* =========================================================
   TEAM RENDERING
   ========================================================= */
let activeBranch = "all";

function renderTeam(lang) {
  const filter = document.getElementById("branchFilter");
  const grid = document.getElementById("teamGrid");
  if (!filter || !grid) return;

  const L = lang === "ar" ? "ar" : "en";

  filter.innerHTML = BRANCHES.map(b => `
    <button type="button" role="tab" class="branch-btn${b.id === activeBranch ? " on" : ""}"
            data-branch="${b.id}" aria-selected="${b.id === activeBranch}">${b[L]}</button>
  `).join("");

  const people = TEAM.filter(p => activeBranch === "all" || p.branch === activeBranch);
  const branchName = id => BRANCHES.find(b => b.id === id)[L];

  grid.innerHTML = people.map(p => `
    <article class="team-card">
      <div class="team-photo" style="background-image:
        linear-gradient(185deg, rgba(226,113,42,.18), transparent 55%),
        url('assets/team/${p.img}.jpg'),
        linear-gradient(160deg,#2b1a12,#120c08)"></div>
      <div class="team-info">
        <h3>${p[L]}</h3>
        <p class="team-role">${L === "ar" ? p.sAr : p.sEn}</p>
        <span class="team-branch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>
          </svg>${branchName(p.branch)}
        </span>
      </div>
    </article>
  `).join("");
}

function initTeam() {
  const filter = document.getElementById("branchFilter");
  if (!filter) return;
  filter.addEventListener("click", e => {
    const btn = e.target.closest(".branch-btn");
    if (!btn) return;
    activeBranch = btn.dataset.branch;
    renderTeam(document.documentElement.lang);
  });
}

/* =========================================================
   LANGUAGE
   ========================================================= */
function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll("[data-lang-label]").forEach(el => {
    el.classList.toggle("on", el.dataset.langLabel === lang);
  });

  renderMenu(lang);
  renderTeam(lang);

  try { localStorage.setItem("tribes-lang", lang); } catch (e) { /* private mode */ }
}

/* =========================================================
   BOOKING CALENDAR
   ========================================================= */
function initBooking() {
  const embed = document.getElementById("calendlyEmbed");
  const fallback = document.getElementById("calendlyFallback");
  const url = (CONFIG.calendlyUrl || "").trim();

  if (!url) return; // keep the fallback card

  fallback.remove();

  if (url.includes("calendly.com")) {
    embed.setAttribute("data-url", `${url}?hide_gdpr_banner=1&background_color=17100b&text_color=f2e7dc&primary_color=e2712a`);
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  } else {
    // Google Appointment Schedules or any other embeddable booking page
    const frame = document.createElement("iframe");
    frame.src = url;
    frame.title = "Booking calendar";
    frame.style.cssText = "width:100%;height:760px;border:0;";
    frame.loading = "lazy";
    embed.appendChild(frame);
  }
}

/* =========================================================
   UI BEHAVIOUR
   ========================================================= */
function initHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initNav() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  // Active link highlighting
  const links = [...nav.querySelectorAll("a")];
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => spy.observe(s));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add("in"), i * 70);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  items.forEach(el => io.observe(el));
}

/* =========================================================
   STAT COUNTERS
   ========================================================= */
function animateCount(el, duration = 1500) {
  const raw = el.textContent.trim();
  const m = raw.match(/^([\d.]+)(.*)$/);
  if (!m) return;
  const end = parseFloat(m[1]);
  const suffix = m[2] || "";
  const decimals = (m[1].split(".")[1] || "").length;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (end * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initStatCounters() {
  const stats = document.querySelectorAll(".hero-stats strong");
  if (!stats.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setTimeout(() => stats.forEach(el => animateCount(el)), 350);
}

/* =========================================================
   CUSTOM CURSOR — scissors
   ========================================================= */
function initCursorFx() {
  const fx = document.querySelector(".cursor-fx");
  if (!fx) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let shown = false;
  window.addEventListener("mousemove", e => {
    fx.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    if (!shown) { fx.classList.add("on"); shown = true; }
  });
  window.addEventListener("mousedown", () => fx.classList.add("snip"));
  window.addEventListener("mouseup", () => fx.classList.remove("snip"));
  document.addEventListener("mouseover", e => {
    fx.classList.toggle("hover", !!e.target.closest("a, button, .btn"));
  });
  document.addEventListener("mouseleave", () => fx.classList.remove("on"));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  let saved = "en";
  try { saved = localStorage.getItem("tribes-lang") || "en"; } catch (e) { /* private mode */ }

  initMenu();
  initTeam();
  setLanguage(saved);
  applyLinks();
  initBooking();
  initHeader();
  initNav();
  initReveal();
  initStatCounters();
  initCursorFx();

  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("langToggle").addEventListener("click", () => {
    const next = document.documentElement.lang === "ar" ? "en" : "ar";
    setLanguage(next);
  });
});
