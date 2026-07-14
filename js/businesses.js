const businesses = {
  willow: {
    name1: "Willow", name2: "Family Dental",
    color: "#163832", colorAccent: "#1D6E6A", colorMint: "#D8EAE2", colorCream: "#FFFFFF",
    phone: "0161 496 0221", email: "hello@willowdental.co.uk", location: "Manchester City Centre", availability: "Mon–Sat, 8am–7pm",
    navLinks: ["Home", "Services", "About", "Doctors", "Contact"],
    heroEyebrow: "Family-Friendly Dental Care",
    heroTitle: "Healthy smiles,<br><span class='accent'>looked after properly.</span>",
    heroDesc: "Gentle, modern dentistry for every age — from first checkups to full smile makeovers. Same-week appointments, no long waits.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Book an Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "Tomorrow", heroCardTime: "10:30 AM",
    stat1Val: "4.9", stat1Label: "Patient Rating", stat2Val: "2,300+", stat2Label: "Smiles Treated", stat3Val: "98%", stat3Label: "Would Recommend",
    aboutEyebrow: "About Us", aboutTitle: "We're Here for<br>You and Your Family",
    aboutDesc: "Our mission is to provide exceptional dental care in a comfortable, welcoming environment.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "15+", aboutBadgeLabel: "Years of Excellence",
    aboutPoints: ["Personalised treatment plans", "Gentle, modern techniques", "Trusted by thousands of families"],
    services: [
      { icon: "fa-tooth", title: "General Checkups", desc: "Routine exams and cleanings.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Teeth Whitening", desc: "Safe, professional whitening.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Fillings & Repairs", desc: "Tooth-coloured fillings.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-child-reaching", title: "Children's Dentistry", desc: "Gentle care from day one.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Cosmetic Dentistry", desc: "Veneers and smile makeovers.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Emergency Care", desc: "Fast appointments when urgent.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Daniel Carter", role: "Lead Dentist", rating: "4.9", experience: "15 years", qualifications: "BDS, MFDS RCS" },
      { img: "assets/images/check-up2.jpg", name: "Dr. Aisha Bello", role: "Cosmetic Dentistry", rating: "4.8", experience: "9 years", qualifications: "BDS, PGCert Aesthetic Dentistry" },
      { img: "assets/images/check-up3.jpg", name: "Dr. Marco Reyes", role: "Paediatric Dentistry", rating: "5.0", experience: "11 years", qualifications: "BDS, DipPaedDent RCS" }
    ],
    reviews: [
      { name: "Sarah M.", loc: "Salford", rating: 5, text: "The team made my daughter's first checkup so easy!", img: "assets/images/smiling_patient.jpg" },
      { name: "James R.", loc: "Prestwich", rating: 5, text: "Quick, painless filling and no waiting around.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Priya K.", loc: "Manchester", rating: 5, text: "Friendly staff, clean modern clinic.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans." },
      { q: "What are your opening hours?", a: "Monday to Friday, 8am to 7pm, Saturday 9am to 2pm." },
      { q: "How do I book an appointment?", a: "Book through the form in our Contact section, or call us." },
      { q: "Can I cancel or reschedule?", a: "Yes — 24 hours notice by phone or email." }
    ],
    contactTitle: "Book Your Appointment",
    contactDesc: "Fill in your details and we'll confirm your slot within the hour.",
    formServices: ["General Checkup", "Teeth Whitening", "Fillings & Repairs", "Children's Dentistry", "Cosmetic Dentistry", "Emergency Care"],
    footerDesc: "Family-friendly dental care in the heart of Manchester.",
    footerTagline: "Book online or call — we're here Mon–Sat.",
    mapsUrl: "https://maps.google.com/?q=Willow+Family+Dental+Manchester",
    address: "142 Deansgate, Manchester, M3 3WA",
    hours: [{ day: "Mon – Fri", time: "8:00 AM – 7:00 PM" }, { day: "Saturday", time: "9:00 AM – 2:00 PM" }, { day: "Sunday", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }, { icon: "fa-google", url: "https://google.com" }]
  }
,
  baker: {
    name1: "David Baker", name2: "DDS",
    color: "#1B2A4A", colorAccent: "#C9972D", colorMint: "#F5EFDE", colorCream: "#FFFFFF",
    phone: "(972) 612-3920", email: "info@davidbakerdds.com", location: "Plano, TX", availability: "Mon–Thu, 8am–5pm",
    navLinks: ["Home", "Services", "About", "Doctors", "Contact"],
    heroEyebrow: "Coit Road, Plano, TX — Since 1989",
    heroTitle: "A healthy smile,<br><span class='accent'>close to home.</span>",
    heroDesc: "Dr. Baker has spent his entire 35-year career caring for Plano families — this concept is simply a modern shell for that same trusted, personal care.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Request Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "Tomorrow", heroCardTime: "10:30 AM",
    stat1Val: "5.0", stat1Label: "Patient Rating", stat2Val: "30+", stat2Label: "Years in Plano", stat3Val: "98%", stat3Label: "Would Recommend",
    aboutEyebrow: "About the Practice", aboutTitle: "Meet Dr.<br>David Baker",
    aboutDesc: "A 1989 graduate who has spent his entire career in Plano, built on personal, unhurried care.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "30+", aboutBadgeLabel: "Years of Excellence",
    aboutPoints: ["Care for the whole family", "Modern Sirona 3D imaging & CEREC crowns", "A calm approach to dental anxiety"],
    services: [
      { icon: "fa-tooth", title: "Dental Implants", desc: "Natural-feeling replacements.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Teeth Whitening", desc: "Safe, professional whitening.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Crowns & Veneers", desc: "Same-day CEREC crowns.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-child-reaching", title: "Family Dentistry", desc: "Care for every generation.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "SureSmile Aligners", desc: "Discreet clear aligners.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Root Canals", desc: "Comfortable in-office therapy.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. David Baker", role: "Lead Dentist", rating: "5.0", experience: "35 years", qualifications: "DDS, Sirona Certified" }
    ],
    reviews: [
      { name: "Ludmila H.", loc: "Plano", rating: 5, text: "Highly professional, excellent skills and compassion.", img: "assets/images/smiling_patient.jpg" },
      { name: "Laura S.", loc: "Plano", rating: 5, text: "Entire staff were very kind.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Alexandra P.", loc: "Plano", rating: 5, text: "Very good experience.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, most major dental insurance plans." },
      { q: "What are your opening hours?", a: "Monday to Thursday, 8am to 5pm." },
      { q: "How do I book an appointment?", a: "Call or text us directly." },
      { q: "Can I cancel or reschedule?", a: "24 hours notice by phone." }
    ],
    contactTitle: "Request Your Appointment",
    contactDesc: "Call or text us, or send the form and we'll confirm a time.",
    formServices: ["Dental Implants", "Teeth Whitening", "Crowns & Veneers", "Family Dentistry", "SureSmile Aligners", "Root Canals"],
    footerDesc: "Comfortable, personalized family dentistry serving Plano.",
    footerTagline: "Care for the whole family, close to home.",
    mapsUrl: "https://maps.google.com/?q=1708+Coit+Rd+Ste+290+Plano+TX+75075",
    address: "1708 Coit Rd, Ste 290, Plano, TX 75075",
    hours: [{ day: "Mon – Wed", time: "8:00 AM – 5:00 PM" }, { day: "Thursday", time: "8:00 AM – 5:00 PM" }, { day: "Fri – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }, { icon: "fa-google", url: "https://google.com" }]
  },
  smileone: {
    name1: "Smile One", name2: "Dental",
    color: "#0F5C52", colorAccent: "#2FBFA6", colorMint: "#D8EAE2", colorCream: "#FFFFFF",
    phone: "972.372.9170", email: "info@smileonedental.com", location: "East Plano, TX", availability: "See hours below",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Serving East Plano Since Day One",
    heroTitle: "Privately owned care,<br><span class='accent'>right on K Avenue.</span>",
    heroDesc: "A privately owned dental practice on K Avenue and Plano Parkway. Same-day appointments when possible, and a team that actually knows your name.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Book an Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "4.9", stat1Label: "Patient Rating", stat2Val: "100%", stat2Label: "Privately Owned", stat3Val: "Same-Day", stat3Label: "Appointments",
    aboutEyebrow: "About Us", aboutTitle: "Patients of All Ages,<br>Always Welcome",
    aboutDesc: "We know visiting the dentist can be nerve-wracking, so comfort is our priority.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "Same-Day", aboutBadgeLabel: "Appointments",
    aboutPoints: ["Modern, comfortable office", "Affordable payment options", "Conservative approach to treatment"],
    services: [
      { icon: "fa-tooth", title: "General Dentistry", desc: "Checkups and cleanings.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Teeth Whitening", desc: "Brighten your smile safely.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Fillings & Repairs", desc: "Natural-blending fillings.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-child-reaching", title: "Children's Dentistry", desc: "Gentle care from day one.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Cosmetic Dentistry", desc: "Veneers and makeovers.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Emergency Care", desc: "Fast urgent appointments.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Team Lead", role: "General Dentistry", rating: "4.9", experience: "12 years", qualifications: "DDS" }
    ],
    reviews: [
      { name: "M. Torres", loc: "Plano", rating: 5, text: "Same day appointments, genuinely comfortable.", img: "assets/images/smiling_patient.jpg" },
      { name: "K. Daniels", loc: "Plano", rating: 5, text: "Affordable and honest.", img: "assets/images/smiling_patient2.jpg" },
      { name: "R. Osei", loc: "Plano", rating: 5, text: "Friendly team, modern office.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Most PPO insurances and Medicaid." },
      { q: "What are your opening hours?", a: "Mon 9–5, Tue 11–7, Wed closed, Thu 11–7." },
      { q: "How do I book an appointment?", a: "Call us or use the contact form." },
      { q: "Can I cancel or reschedule?", a: "24 hours notice to avoid a $50 fee." }
    ],
    contactTitle: "Send Us a Message",
    contactDesc: "Have a question or want to book? Fill in the form.",
    formServices: ["General Dentistry", "Teeth Whitening", "Fillings & Repairs", "Children's Dentistry", "Cosmetic Dentistry", "Emergency Care"],
    footerDesc: "A privately owned dental practice in East Plano.",
    footerTagline: "Same-day appointments, when possible.",
    mapsUrl: "https://maps.google.com/?q=617+K+Ave+300+Plano+TX+75074",
    address: "617 K Ave #300, Plano, TX 75074",
    hours: [{ day: "Mon", time: "9:00 AM – 5:00 PM" }, { day: "Tue / Thu", time: "11:00 AM – 7:00 PM" }, { day: "Wed / Sat / Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }]
  },
  mydentist: {
    name1: "My Dentist", name2: "in Plano",
    color: "#1B4B66", colorAccent: "#2E8FBF", colorMint: "#DCEAF2", colorCream: "#FFFFFF",
    phone: "(972) 378-9747", email: "info@mydentistinplano.com", location: "Plano, TX", availability: "Mon–Fri, hours vary",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Preston Road, Plano, TX",
    heroTitle: "Get the smile<br><span class='accent'>of your dreams.</span>",
    heroDesc: "Dr. Darren Dickson — voted one of America's Top Dentists — combines cosmetic, sedation, and restorative dentistry on Preston Road.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Schedule Now", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "5.0", stat1Label: "Patient Rating", stat2Val: "20+", stat2Label: "Years of Experience", stat3Val: "Top", stat3Label: "Rated Plano Dentist",
    aboutEyebrow: "About the Doctor", aboutTitle: "Dr. Darren Dickson,<br>Plano Dentist",
    aboutDesc: "Known for cosmetic, restorative, and full-mouth rehabilitation dentistry.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "20+", aboutBadgeLabel: "Years Experience",
    aboutPoints: ["Fellow, ICOI", "Member, Academy of Cosmetic Dentistry", "Advanced sedation & implant training"],
    services: [
      { icon: "fa-tooth", title: "Dental Implants", desc: "Precise, natural results.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Sedation Dentistry", desc: "Care without the anxiety.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Smile Makeovers", desc: "Never feel self-conscious again.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Full Mouth Rehabilitation", desc: "Restore health and function.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Porcelain Veneers", desc: "Natural cosmetic finish.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Restorative Dentistry", desc: "Comprehensive restorative care.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Darren Dickson", role: "Cosmetic & Restorative Dentistry", rating: "5.0", experience: "20+ years", qualifications: "DDS, Fellow ICOI" }
    ],
    reviews: [
      { name: "T. Nguyen", loc: "Plano", rating: 5, text: "Transformed my smile completely.", img: "assets/images/smiling_patient.jpg" },
      { name: "B. Coleman", loc: "Plano", rating: 5, text: "Best implant experience, results look natural.", img: "assets/images/smiling_patient2.jpg" },
      { name: "S. Whitfield", loc: "Plano", rating: 5, text: "Sedation dentistry made a huge difference.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, most major insurance providers." },
      { q: "What are your opening hours?", a: "Mon–Tue 7–6, Wed 7–5:30, Thu–Fri 8:30–5:30." },
      { q: "How do I book an appointment?", a: "Call us or use the Schedule Now button." },
      { q: "Can I cancel or reschedule?", a: "Give as much notice as possible." }
    ],
    contactTitle: "Visit Our Plano Dentist Today",
    contactDesc: "We welcome new patients! Fill in the form below.",
    formServices: ["Dental Implants", "Sedation Dentistry", "Smile Makeovers", "Full Mouth Rehabilitation", "Porcelain Veneers", "Restorative Dentistry"],
    footerDesc: "Advanced cosmetic, sedation, and restorative dentistry in Plano.",
    footerTagline: "We are accepting new patients.",
    mapsUrl: "https://maps.google.com/?q=6545+Preston+Rd+Suite+100+Plano+TX+75024",
    address: "6545 Preston Rd, Suite 100, Plano, TX 75024",
    hours: [{ day: "Mon – Tue", time: "7:00 AM – 6:00 PM" }, { day: "Wed", time: "7:00 AM – 5:30 PM" }, { day: "Thu – Fri", time: "8:30 AM – 5:30 PM" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }, { icon: "fa-google", url: "https://google.com" }]
  }
,
  familysmiles: {
    name1: "Family Smiles", name2: "of Plano",
    color: "#5B3A8E", colorAccent: "#F2B705", colorMint: "#EFE6FA", colorCream: "#FFFFFF",
    phone: "(469) 406-2200", email: "hello@familysmilesdentist.com", location: "Plano, TX", availability: "Mon–Sat, hours vary",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "14th Street, Plano, TX",
    heroTitle: "Experience Better<br><span class='accent'>Dentistry for Kids.</span>",
    heroDesc: "Family and kid-friendly dentistry led by Dr. Ravindranath Reddy — guilt-free care, a no-work-zone for parents, and a Charlie Cam so you can watch every visit.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Book Online", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "4.7", stat1Label: "Patient Rating", stat2Val: "450+", stat2Label: "Happy Reviews", stat3Val: "Kid", stat3Label: "Friendly Features",
    aboutEyebrow: "About Us", aboutTitle: "Fun for Children,<br>Less Stressful for You",
    aboutDesc: "Parents, we've got it covered. From tablet stations to a Charlie Cam so you can watch your child's appointment, we make dental visits stress-free for the whole family.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "100%", aboutBadgeLabel: "Kid-Friendly",
    aboutPoints: ["Guilt-free dentistry for parents", "Watch appointments via Charlie Cam", "Same-day and flexible scheduling"],
    services: [
      { icon: "fa-child", title: "Family Dentistry", desc: "Affordable, friendly care for every age.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-tooth", title: "Memory-Free Dentistry", desc: "Comfortable sedation options for anxious visits.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-hand-holding-heart", title: "Affordable Care", desc: "Flexible plans so every family can access care.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-child-reaching", title: "Children's Dentistry", desc: "Fun, guilt-free visits for kids of all ages.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "General Checkups", desc: "Routine exams and cleanings for the family.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Emergency Care", desc: "Fast appointments when you need them.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Ravindranath Reddy", role: "Lead Dentist", rating: "4.7", experience: "14 years", qualifications: "DDS" }
    ],
    reviews: [
      { name: "Stephanie O.", loc: "Plano", rating: 5, text: "Had a great experience at the dentist. Everyone was helpful and kind.", img: "assets/images/smiling_patient.jpg" },
      { name: "Monique F.", loc: "Plano", rating: 5, text: "My kids actually look forward to going now — the tablet station is a hit.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Derek W.", loc: "Plano", rating: 5, text: "Loved being able to watch the appointment. Made me feel so much more at ease.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans — contact us to confirm yours." },
      { q: "What are your opening hours?", a: "Mon 8–2, Tue 10–6, Wed 10–6, Thu 10–6, Fri 9–5, Sat 8–2, Sun closed." },
      { q: "How do I book an appointment?", a: "Book online or call us directly to schedule your visit." },
      { q: "Can I cancel or reschedule?", a: "Yes, just give us notice as early as possible." }
    ],
    contactTitle: "Book Your Adventure",
    contactDesc: "Fill in the form and our team will confirm your appointment shortly.",
    formServices: ["Family Dentistry", "Memory-Free Dentistry", "Affordable Care", "Children's Dentistry", "General Checkups", "Emergency Care"],
    footerDesc: "Where every dental visit is an adventure for kids and families in Plano.",
    footerTagline: "Book your adventure today.",
    mapsUrl: "https://maps.google.com/?q=1900+14th+St+Suite+C+Plano+TX+75074",
    address: "1900 14th St, Suite C, Plano, TX 75074",
    hours: [{ day: "Mon", time: "8:00 AM – 2:00 PM" }, { day: "Tue – Thu", time: "10:00 AM – 6:00 PM" }, { day: "Fri", time: "9:00 AM – 5:00 PM" }, { day: "Sat", time: "8:00 AM – 2:00 PM" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }, { icon: "fa-google", url: "https://google.com" }]
  },
  planofamily: {
    name1: "Plano Family", name2: "Dental",
    color: "#33222B", colorAccent: "#C1666B", colorMint: "#F4E3E1", colorCream: "#FFFFFF",
    phone: "(469) 884-6872", email: "info@planofamilydental.com", location: "Plano, TX", availability: "Mon–Fri, hours vary",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Serving Plano Families Since 1987",
    heroTitle: "Real Results,<br><span class='accent'>Real Confidence.</span>",
    heroDesc: "Nearly four decades of conservative, minimally-invasive dental care in Plano — with real before-and-after results you can see for yourself.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Schedule Online", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "4.9", stat1Label: "Patient Rating", stat2Val: "1,000+", stat2Label: "Smiles Restored", stat3Val: "Same-Day", stat3Label: "Consultations",
    aboutEyebrow: "About Us", aboutTitle: "Experience Minimally<br>Invasive, Conservative Care",
    aboutDesc: "Our team specializes in dental implants, cosmetic dentistry, and restorative treatments — always favoring conservative options before major procedures.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "Est.", aboutBadgeLabel: "1987",
    aboutPoints: ["Conservative, minimally-invasive treatment", "Before & after transformation gallery", "Dental Wellness Savings Plan for uninsured patients"],
    services: [
      { icon: "fa-tooth", title: "Dental Implants", desc: "Long-term solutions for missing teeth.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Cosmetic Dentistry", desc: "Transform your smile with confidence.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-teeth", title: "Teeth Whitening", desc: "Brighten your smile safely and effectively.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "Emergency Dentistry", desc: "Fast care when you need it most.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Root Canal Treatment", desc: "Comfortable, conservative root canal care.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Wisdom Tooth Extraction", desc: "Gentle, precise extractions.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Wasim Joseph", role: "Lead Dentist", rating: "4.9", experience: "18 years", qualifications: "DDS, MAGD" }
    ],
    reviews: [
      { name: "Rebecca T.", loc: "Plano", rating: 5, text: "The before and after results speak for themselves. Truly life-changing care.", img: "assets/images/smiling_patient.jpg" },
      { name: "Antonio V.", loc: "Plano", rating: 5, text: "Minimally invasive and they explain every option clearly before treatment.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Grace H.", loc: "Plano", rating: 5, text: "Their wellness savings plan made treatment affordable without insurance.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, and we also offer a Dental Wellness Savings Plan for patients without insurance." },
      { q: "What are your opening hours?", a: "Monday to Friday, hours vary by day — call to confirm." },
      { q: "How do I book an appointment?", a: "Schedule online or call us directly to book a consultation." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Schedule Your Consultation",
    contactDesc: "Fill in the form and we'll confirm a time that works for you.",
    formServices: ["Dental Implants", "Cosmetic Dentistry", "Teeth Whitening", "Emergency Dentistry", "Root Canal Treatment", "Wisdom Tooth Extraction"],
    footerDesc: "Minimally-invasive, conservative dental care with real results, serving Plano since 1987.",
    footerTagline: "Real results, real confidence.",
    mapsUrl: "https://maps.google.com/?q=Plano+Family+Dental+Plano+TX",
    address: "Plano, TX 75024",
    hours: [{ day: "Mon – Thu", time: "8:00 AM – 5:00 PM" }, { day: "Friday", time: "8:00 AM – 2:00 PM" }, { day: "Sat – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }, { icon: "fa-google", url: "https://google.com" }]
  }
};
