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
,
  friscofamily: {
    name1: "Family Dentistry", name2: "of Frisco",
    color: "#5C2333", colorAccent: "#C9A227", colorMint: "#F3E9D8", colorCream: "#FFFFFF",
    phone: "(469) 362-3150", email: "info@familydentistryoffrisco.com", location: "Frisco, TX", availability: "Mon–Fri, Sat by appointment",
    navLinks: ["Home", "Services", "About", "Doctors", "Contact"],
    heroEyebrow: "25 Years of Award-Winning Care",
    heroTitle: "Dentistry for<br><span class='accent'>the Whole Family.</span>",
    heroDesc: "Voted Best Dentist in Frisco & Plano. Dr. Paresh Patel and his team have delivered comprehensive, compassionate dental care for over 25 years.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Request Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "25+", stat1Label: "Years of Care", stat2Val: "Top", stat2Label: "Rated by D Magazine", stat3Val: "All", stat3Label: "Ages Welcome",
    aboutEyebrow: "About the Practice", aboutTitle: "Best Dentist<br>in Frisco, Texas",
    aboutDesc: "For over 25 years, Dr. Paresh B. Patel and his team have provided comprehensive, gentle dental care for patients of every age, right here in Frisco.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "25+", aboutBadgeLabel: "Years Serving Frisco",
    aboutPoints: ["Voted Best Cosmetic & Family Dentist", "Same-day treatment available", "Sedation dentistry & advanced technology"],
    services: [
      { icon: "fa-tooth", title: "Family & Cosmetic Dentistry", desc: "Comprehensive care for every age.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Sedation Dentistry", desc: "Comfortable care for anxious patients.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Emergency Dentistry", desc: "Fast care when you need it most.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "Dental Implants", desc: "Long-lasting, natural-looking replacements.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Laser Dentistry", desc: "Advanced, precise, minimally-invasive care.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Same Day Treatment", desc: "Available when medically necessary.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Paresh B. Patel", role: "Lead Dentist", rating: "4.9", experience: "25+ years", qualifications: "DDS, MFGDP, RCS, MICOI" }
    ],
    reviews: [
      { name: "Brandy T.", loc: "Frisco", rating: 5, text: "Thank you for your wonderful care! Dr. Patel and his very pleasant staff make every visit comfortable.", img: "assets/images/smiling_patient.jpg" },
      { name: "Karen L.", loc: "Frisco", rating: 5, text: "Long-time patient. Their proactive approach and financing options make quality care accessible.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Marcus D.", loc: "Frisco", rating: 5, text: "Best dentist in Frisco, hands down. The whole family goes here now.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, we accept all PPO insurances, including Medicare, plus several financing options." },
      { q: "What are your opening hours?", a: "Monday to Friday, with select Saturday appointments available." },
      { q: "How do I book an appointment?", a: "Request an appointment online or call our office directly." },
      { q: "Can I cancel or reschedule?", a: "Yes, just give us as much notice as possible." }
    ],
    contactTitle: "Request Your Appointment",
    contactDesc: "Fill in the form and our team will confirm a time that works for you.",
    formServices: ["Family & Cosmetic Dentistry", "Sedation Dentistry", "Emergency Dentistry", "Dental Implants", "Laser Dentistry", "Same Day Treatment"],
    footerDesc: "Award-winning family dentistry in Frisco, TX — trusted for over 25 years.",
    footerTagline: "The entire family's dentist in Frisco, TX.",
    mapsUrl: "https://maps.google.com/?q=Family+Dentistry+of+Frisco+TX",
    address: "Teel Pkwy, Frisco, TX 75033",
    hours: [{ day: "Mon – Fri", time: "9:00 AM – 5:00 PM" }, { day: "Saturday", time: "By Appointment" }, { day: "Sunday", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-google", url: "https://google.com" }, { icon: "fa-yelp", url: "https://yelp.com" }]
  },
  vsdental: {
    name1: "VS Dental", name2: "Group",
    color: "#1C3D5A", colorAccent: "#4C8FBD", colorMint: "#DCEAF4", colorCream: "#FFFFFF",
    phone: "(214) 396-5950", email: "info@vsdentalgroup.com", location: "Frisco, TX", availability: "Mon–Fri, hours vary",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Trusted Dentist in Frisco, TX",
    heroTitle: "Dental Technology,<br><span class='accent'>Safety & Comfort.</span>",
    heroDesc: "Dr. Vlad Sokransky and the VS Dental Group team use state-of-the-art equipment to make every visit convenient, comfortable, and thorough.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Book Online", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "5.0", stat1Label: "Google Rating", stat2Val: "Modern", stat2Label: "Equipment & Imaging", stat3Val: "Same-Day", stat3Label: "Emergency Care",
    aboutEyebrow: "About Us", aboutTitle: "A Practice Built<br>on Patient Care",
    aboutDesc: "A Frisco dental practice with a passion for dentistry and patient care. We use the latest technology and materials for every procedure, from fillings to implants.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "5.0", aboutBadgeLabel: "Google Rating",
    aboutPoints: ["State-of-the-art dental technology", "Computerized imaging for treatment planning", "Non-metal, top-rated dental materials"],
    services: [
      { icon: "fa-tooth", title: "Dental Emergency", desc: "Fast, reliable care when you need it.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Dental Hygiene", desc: "Routine cleanings and preventive care.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Composite Fillings", desc: "Modern treatment for tooth decay.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "Dental Implants", desc: "Titanium tooth replacements built to last.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Root Canals", desc: "Comfortable, precise root canal therapy.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Porcelain Crowns", desc: "Natural-looking, durable restorations.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Vlad Sokransky", role: "Lead Dentist", rating: "5.0", experience: "15+ years", qualifications: "DDS" }
    ],
    reviews: [
      { name: "Elena R.", loc: "Frisco", rating: 5, text: "Incredibly modern office and Dr. Sokransky explains everything clearly. Highly recommend.", img: "assets/images/smiling_patient.jpg" },
      { name: "Tom B.", loc: "Frisco", rating: 5, text: "The imaging technology alone sets this office apart. Very thorough care.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Nadia F.", loc: "Frisco", rating: 5, text: "Clean, professional, and genuinely caring staff. My go-to dentist in Frisco.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, please contact our office to confirm your specific plan." },
      { q: "What are your opening hours?", a: "Monday to Friday, hours vary — call to confirm." },
      { q: "How do I book an appointment?", a: "Book online or call our office directly." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Book Your Visit",
    contactDesc: "Fill in the form below and we'll confirm a time that works for you.",
    formServices: ["Dental Emergency", "Dental Hygiene", "Composite Fillings", "Dental Implants", "Root Canals", "Porcelain Crowns"],
    footerDesc: "A Frisco dental practice with a passion for dentistry and patient care.",
    footerTagline: "We make it convenient for you to stay healthy.",
    mapsUrl: "https://maps.google.com/?q=3492+Legacy+Dr+600+Frisco+TX+75034",
    address: "3492 Legacy Dr. #600, Frisco, TX 75034",
    hours: [{ day: "Mon – Fri", time: "9:00 AM – 5:00 PM" }, { day: "Sat – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-yelp", url: "https://yelp.com" }]
  },
  rockhill: {
    name1: "Rock Hill", name2: "Dental Care",
    color: "#262019", colorAccent: "#E0654B", colorMint: "#F4E3DD", colorCream: "#FFFFFF",
    phone: "(469) 430-0665", email: "info@rockhilldentalcaretx.com", location: "Frisco, TX", availability: "Tue–Fri, see hours below",
    navLinks: ["Home", "Services", "Team", "Contact"],
    heroEyebrow: "Comprehensive Care for Your Overall Wellness",
    heroTitle: "Personalized Care<br><span class='accent'>for a Healthier Smile.</span>",
    heroDesc: "You deserve a healthy, beautiful smile — the Rock Hill Dental Care team provides personalized care solutions to help you get the smile you've always wanted.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Schedule With Us", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "4.5", stat1Label: "Patient Rating", stat2Val: "54", stat2Label: "Google Reviews", stat3Val: "Most", stat3Label: "Insurance Accepted",
    aboutEyebrow: "Meet the Team", aboutTitle: "Patient-Focused<br>Care, Every Visit",
    aboutDesc: "Led by Dr. Zahra Athar, our team is dedicated to providing patient-focused care and has created a positive atmosphere so you can look forward to visiting our office.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "4.5★", aboutBadgeLabel: "54 Reviews",
    aboutPoints: ["Personalized care solutions", "New patients always welcome", "Most insurance plans accepted"],
    services: [
      { icon: "fa-tooth", title: "Dental Implants", desc: "Renew your smile with lasting implants.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Invisalign", desc: "A comfortable, invisible alternative to braces.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Preventative Oral Health", desc: "Dental cleanings and checkups.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "Sealants", desc: "Protect teeth from decay early.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Fluoride Treatment", desc: "Strengthen enamel and protect your smile.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Implant-Supported Dentures", desc: "Secure, natural-feeling dentures.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Zahra Athar", role: "Lead Dentist", rating: "4.5", experience: "10+ years", qualifications: "DDS" }
    ],
    reviews: [
      { name: "Angela M.", loc: "Frisco", rating: 5, text: "The team is dedicated to providing patient-focused care. Always a positive experience.", img: "assets/images/smiling_patient.jpg" },
      { name: "Derrick S.", loc: "Frisco", rating: 4, text: "Great office, easy scheduling, and Dr. Athar is thorough and kind.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Priya N.", loc: "Frisco", rating: 5, text: "Comfortable atmosphere and very transparent about treatment options.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, most insurance plans are accepted, including Medicare Advantage." },
      { q: "What are your opening hours?", a: "Tuesday to Friday, 8:30am to 5:30pm. Closed Monday, Saturday, and Sunday." },
      { q: "How do I book an appointment?", a: "Schedule with us online or call our office directly." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Schedule With Us",
    contactDesc: "Fill in the form and our team will confirm a time that works for you.",
    formServices: ["Dental Implants", "Invisalign", "Preventative Oral Health", "Sealants", "Fluoride Treatment", "Implant-Supported Dentures"],
    footerDesc: "Comprehensive, personalized dental care for your overall wellness in Frisco, TX.",
    footerTagline: "Care provided by local, independent practices.",
    mapsUrl: "https://maps.google.com/?q=12275+University+Dr+Ste+250+Frisco+TX+75035",
    address: "12275 University Dr, Ste 250, Frisco, TX 75035",
    hours: [{ day: "Tue", time: "8:30 AM – 5:00 PM" }, { day: "Wed – Thu", time: "8:30 AM – 5:30 PM" }, { day: "Fri", time: "8:30 AM – 5:30 PM" }, { day: "Sat – Mon", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-instagram", url: "https://instagram.com" }]
  }
,
  dentalcarefrisco: {
    name1: "Dental Care", name2: "of Frisco",
    color: "#22303F", colorAccent: "#D4A24C", colorMint: "#EDE6D3", colorCream: "#FFFFFF",
    phone: "(214) 436-5122", email: "info@dentalcareoffrisco.com", location: "Frisco, TX", availability: "Mon–Fri, see hours below",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "A Different Kind of Dentist",
    heroTitle: "We Do It All,<br><span class='accent'>So You Don't Have To Search.</span>",
    heroDesc: "Dr. Thomas Grant, DMD, offers a wide range of personalized, compassionate dental treatments — all in one convenient Frisco office.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Request Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "Best D", stat1Label: "Awarded 2022", stat2Val: "All", stat2Label: "Ages Welcome", stat3Val: "In-Office", stat3Label: "Discount Plan Available",
    aboutEyebrow: "Meet the Doctor", aboutTitle: "Dr. Thomas Grant,<br>DMD",
    aboutDesc: "Dr. Grant is happy to be part of your dental care, and enjoys treating the families of Frisco with the latest in dental technology.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "Best D", aboutBadgeLabel: "2022 Award",
    aboutPoints: ["In-office discount dental plan available", "No annual maximums, no waiting periods", "TMJ & migraine relief consultations"],
    services: [
      { icon: "fa-tooth", title: "Crowns & Restorations", desc: "Long-lasting, natural-looking repairs.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Invisalign", desc: "A straighter smile without metal braces.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Dental Implants", desc: "Replace missing teeth with confidence.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "TMJ & Sleep Apnea", desc: "Relief for jaw pain, migraines, and sleep issues.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Routine Cleanings", desc: "Preventive care to keep your smile healthy.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "New Patient Exams", desc: "A thorough first visit, done right.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Thomas Grant", role: "Lead Dentist", rating: "4.8", experience: "20+ years", qualifications: "DMD" }
    ],
    reviews: [
      { name: "Roan S.", loc: "Frisco", rating: 5, text: "Dr. Grant and his staff are wonderful, kind, and always professional.", img: "assets/images/smiling_patient.jpg" },
      { name: "Melissa K.", loc: "Frisco", rating: 5, text: "The discount plan made treatment so much more accessible for our family.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Andre P.", loc: "Frisco", rating: 5, text: "Finally found relief for my migraines through their TMJ treatment. Truly grateful.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, and we also offer an in-office discount dental plan for uninsured patients." },
      { q: "What are your opening hours?", a: "Monday to Friday — call or request an appointment online to confirm times." },
      { q: "How do I book an appointment?", a: "Request an appointment through our online form or call our office." },
      { q: "Can I cancel or reschedule?", a: "Yes, just give us as much notice as possible." }
    ],
    contactTitle: "Request Your Appointment",
    contactDesc: "Fill in the form and our team will confirm a time that works for you.",
    formServices: ["Crowns & Restorations", "Invisalign", "Dental Implants", "TMJ & Sleep Apnea", "Routine Cleanings", "New Patient Exams"],
    footerDesc: "Personalized, compassionate dentistry for the whole family in Frisco, TX.",
    footerTagline: "No more searching — we do it all.",
    mapsUrl: "https://maps.google.com/?q=Dental+Care+of+Frisco+TX",
    address: "Preston Rd, Frisco, TX 75034",
    hours: [{ day: "Mon – Thu", time: "8:00 AM – 5:00 PM" }, { day: "Friday", time: "8:00 AM – 2:00 PM" }, { day: "Sat – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-google", url: "https://google.com" }]
  },
  friscosdentists: {
    name1: "Frisco's", name2: "Dentists",
    color: "#3B2E5A", colorAccent: "#4FBDB0", colorMint: "#E3DCF0", colorCream: "#FFFFFF",
    phone: "(972) 377-7333", email: "info@friscosdentists.com", location: "Frisco, TX", availability: "Mon–Wed, Thu mornings",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Caring Family Dentists in Frisco, Texas",
    heroTitle: "Frisco's<br><span class='accent'>Friendliest Dentists.</span>",
    heroDesc: "We're here to take your worries away while helping you achieve a radiant, healthy smile — for every member of the family.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Request Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "25+", stat1Label: "Years of Experience", stat2Val: "All", stat2Label: "Ages Welcome", stat3Val: "Baylor", stat3Label: "University Graduate",
    aboutEyebrow: "Meet the Doctor", aboutTitle: "Dr. Robert Neal,<br>Your Trusted Dentist",
    aboutDesc: "A proud Texas native, Dr. Robert Neal strives to serve his family of dental patients with warmth and compassion, and has done so for over 25 years.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "25+", aboutBadgeLabel: "Years of Care",
    aboutPoints: ["Preventative and restorative dentistry", "Compassionate care for the whole family", "Serving Collin and Denton counties"],
    services: [
      { icon: "fa-tooth", title: "Restorative Dentistry", desc: "Fillings, crowns, and root canals done right.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-teeth", title: "Dental Emergencies", desc: "Fast, caring attention when you need it.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-tooth", title: "Preventative Care", desc: "Regular exams and cleanings for lifelong health.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-tooth", title: "Cosmetic Dentistry", desc: "Veneers and whitening for a confident smile.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Pediatric Dentistry", desc: "Gentle first visits for your youngest patients.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Dental Implants", desc: "Reliable, natural-looking tooth replacement.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Robert Neal", role: "Lead Dentist", rating: "4.9", experience: "25+ years", qualifications: "DDS, Baylor University" }
    ],
    reviews: [
      { name: "Jarah H.", loc: "Frisco", rating: 5, text: "I highly recommend Dr. Neal to anyone who is looking. He's honest, thorough, and doesn't push unnecessary work.", img: "assets/images/smiling_patient.jpg" },
      { name: "Colton B.", loc: "Frisco", rating: 5, text: "25 years of experience really shows. Straightforward, kind, and skilled.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Renee A.", loc: "Frisco", rating: 5, text: "My kids actually enjoy their visits here. Wonderful with children.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, contact our office to confirm your specific plan." },
      { q: "What are your opening hours?", a: "Monday to Wednesday 8am–5pm, Thursday 8am–12pm, after hours by appointment." },
      { q: "How do I book an appointment?", a: "Call our office or request an appointment through our online form." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Contact Frisco's Dentists Today",
    contactDesc: "A member of our team will be in touch shortly to confirm your details.",
    formServices: ["Restorative Dentistry", "Dental Emergencies", "Preventative Care", "Cosmetic Dentistry", "Pediatric Dentistry", "Dental Implants"],
    footerDesc: "Caring family dentistry in Frisco, Texas — trusted for over 25 years.",
    footerTagline: "We are here for you, Frisco.",
    mapsUrl: "https://maps.google.com/?q=6352+Stonebrook+Pkwy+Suite+100+Frisco+TX+75034",
    address: "6352 Stonebrook Pkwy, Suite 100, Frisco, TX 75034",
    hours: [{ day: "Mon – Wed", time: "8:00 AM – 5:00 PM" }, { day: "Thursday", time: "8:00 AM – 12:00 PM" }, { day: "Fri – Sun", time: "By Appointment Only" }],
    social: [{ icon: "fa-yelp", url: "https://yelp.com" }, { icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-google", url: "https://google.com" }]
  },
  waterfrontfamily: {
    name1: "Waterfront", name2: "Family Dentistry",
    color: "#0E3A5C", colorAccent: "#F2994A", colorMint: "#DCEFFA", colorCream: "#FFFFFF",
    phone: "+1 972-987-4343", email: "office@waterfrontsmiles.com", location: "Frisco, TX", availability: "Mon–Fri, hours vary",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Caring for Every Smile, Every Family",
    heroTitle: "Your Family's Smile,<br><span class='accent'>Our Life's Work.</span>",
    heroDesc: "Providing gentle, modern, and personalized dental care in Frisco, TX — where technology meets compassion to create brighter, healthier smiles for all ages.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Book Your Visit", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "93%", stat1Label: "Patient Satisfaction", stat2Val: "10+", stat2Label: "Years of Expert Experience", stat3Val: "1,000+", stat3Label: "Family Smiles Cared For",
    aboutEyebrow: "Meet the Doctor", aboutTitle: "Dr. Lavanya<br>Rudrapatna",
    aboutDesc: "Led by Dr. Lavi, our team blends advanced technology with a caring touch to provide quality dental care for every member of the family.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "93%", aboutBadgeLabel: "Patient Satisfaction",
    aboutPoints: ["Compassionate, comfort-focused visits", "Advanced technology paired with genuine care", "Flexible, affordable payment plans"],
    services: [
      { icon: "fa-tooth", title: "Preventive Dentistry", desc: "Keeping your smile strong and healthy.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-child-reaching", title: "Pediatric Dentistry", desc: "Gentle, fun, stress-free visits for kids.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-wand-magic-sparkles", title: "Cosmetic Dentistry", desc: "Whitening and veneers for lasting confidence.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-teeth", title: "Orthodontics & Invisalign", desc: "Straightening teeth discreetly and comfortably.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Implants & Restorations", desc: "Durable, natural-looking tooth replacement.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Root Canals & Extractions", desc: "Relieving pain safely with precision care.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Lavanya Rudrapatna", role: "Lead Dentist", rating: "4.9", experience: "10+ years", qualifications: "DDS" }
    ],
    reviews: [
      { name: "Felix E.", loc: "Frisco", rating: 5, text: "Dr. Lavi and her team are amazing! They made me feel so comfortable, and my teeth have never looked better.", img: "assets/images/smiling_patient.jpg" },
      { name: "Tanya W.", loc: "Frisco", rating: 5, text: "The most comforting dental office I've been to. They genuinely listen.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Rico D.", loc: "Frisco", rating: 5, text: "Great with my kids and always transparent about costs and options.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, contact us to confirm your specific plan and coverage." },
      { q: "What are your opening hours?", a: "Monday to Friday — call or book online to confirm available times." },
      { q: "How do I book an appointment?", a: "Book your visit online or call our office directly." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Book Your Appointment",
    contactDesc: "Experience gentle, personalized dental care in Frisco, TX. Your perfect smile awaits.",
    formServices: ["Preventive Dentistry", "Pediatric Dentistry", "Cosmetic Dentistry", "Orthodontics & Invisalign", "Implants & Restorations", "Root Canals & Extractions"],
    footerDesc: "Gentle, modern, and personalized dental care in Frisco, TX.",
    footerTagline: "Your family's smile, our life's work.",
    mapsUrl: "https://maps.google.com/?q=255+W+Lebanon+St+300+Frisco+TX",
    address: "255 W Lebanon St #300, Frisco, TX",
    hours: [{ day: "Mon – Fri", time: "9:00 AM – 5:00 PM" }, { day: "Sat – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-x-twitter", url: "https://x.com" }, { icon: "fa-instagram", url: "https://instagram.com" }]
  },
  friscosmiles: {
    name1: "Frisco Smiles", name2: "Dentistry",
    color: "#16423C", colorAccent: "#6FCF97", colorMint: "#DFF3E8", colorCream: "#FFFFFF",
    phone: "(469) 212-9064", email: "info@friscosmilesdentistry.com", location: "Frisco, TX", availability: "Mon–Fri, see hours below",
    navLinks: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Exceptional Dentistry for Confident Smiles",
    heroTitle: "Welcome to<br><span class='accent'>Frisco Smiles Dentistry.</span>",
    heroDesc: "A trusted neighborhood practice serving Frisco since 2016. Our office features state-of-the-art technology and a warm, personal relationship with every patient.",
    heroImg: "assets/images/smiling_child.jpg", heroCtaText: "Request Appointment", heroSecondary: "Our Services",
    heroCardLabel: "Next Available Slot", heroCardDay: "This Week", heroCardTime: "By Appointment",
    stat1Val: "Best D", stat1Label: "2019, 2020, 2021", stat2Val: "Since", stat2Label: "2016", stat3Val: "No Insurance?", stat3Label: "No Problem",
    aboutEyebrow: "Meet the Doctor", aboutTitle: "Dr. Thanh K. Hong,<br>DMD",
    aboutDesc: "Dr. Hong brings years of experience and a passion for helping patients of all ages. Whether it's a routine visit or a more complex procedure, quality is guaranteed.",
    aboutImg: "assets/images/clinic_staff.jpg", aboutBadgeVal: "Best D", aboutBadgeLabel: "3 Years Running",
    aboutPoints: ["Complete dental care in one place", "Membership plans for uninsured patients", "Flexible scheduling to fit your life"],
    services: [
      { icon: "fa-wand-magic-sparkles", title: "Cosmetic Dentistry", desc: "Whitening and veneers for a confident smile.", img: "assets/images/smiling_patient.jpg" },
      { icon: "fa-tooth", title: "Dental Implants", desc: "Stable, natural-looking tooth replacement.", img: "assets/images/smiling_patient2.jpg" },
      { icon: "fa-teeth", title: "Preventive Care", desc: "Regular checkups to protect your smile.", img: "assets/images/smiling_patient3.jpg" },
      { icon: "fa-child-reaching", title: "Family Dentistry", desc: "Personal, friendly care for all ages.", img: "assets/images/smiling_patient4.jpg" },
      { icon: "fa-tooth", title: "Emergency Care", desc: "Fast attention when you need it most.", img: "assets/images/checkup4.jpg" },
      { icon: "fa-tooth", title: "Membership Plans", desc: "Accessible care, even without insurance.", img: "assets/images/check_up.jpg" }
    ],
    doctors: [
      { img: "assets/images/check_up.jpg", name: "Dr. Thanh K. Hong", role: "Lead Dentist", rating: "4.8", experience: "15+ years", qualifications: "DMD" }
    ],
    reviews: [
      { name: "Bianca R.", loc: "Frisco", rating: 5, text: "Been coming here since they opened. Dr. Hong and the team always make me feel like family.", img: "assets/images/smiling_patient.jpg" },
      { name: "Todd M.", loc: "Frisco", rating: 5, text: "Best D winner for a reason — professional, warm, and thorough every time.", img: "assets/images/smiling_patient2.jpg" },
      { name: "Iris V.", loc: "Frisco", rating: 5, text: "The membership plan was a lifesaver while I was between insurance plans.", img: "assets/images/smiling_patient3.jpg" }
    ],
    faqs: [
      { q: "Do you accept insurance?", a: "Yes, and we also offer membership plans for patients without insurance." },
      { q: "What are your opening hours?", a: "Monday to Friday, 8am to 5pm — Saturday closed." },
      { q: "How do I book an appointment?", a: "Request an appointment online or give us a call." },
      { q: "Can I cancel or reschedule?", a: "Yes, please give us as much notice as possible." }
    ],
    contactTitle: "Reach Out Today",
    contactDesc: "Fill in the form and our team will get back to you shortly.",
    formServices: ["Cosmetic Dentistry", "Dental Implants", "Preventive Care", "Family Dentistry", "Emergency Care", "Membership Plans"],
    footerDesc: "A trusted neighborhood dental practice serving Frisco since 2016.",
    footerTagline: "Healthy smiles, lasting confidence.",
    mapsUrl: "https://maps.google.com/?q=2955+Eldorado+Pkwy+Suite+110+Frisco+TX+75033",
    address: "2955 Eldorado Pkwy, Suite 110, Frisco, TX 75033",
    hours: [{ day: "Mon – Fri", time: "8:00 AM – 5:00 PM" }, { day: "Sat – Sun", time: "Closed" }],
    social: [{ icon: "fa-facebook-f", url: "https://facebook.com" }, { icon: "fa-google", url: "https://google.com" }]
  }
};
