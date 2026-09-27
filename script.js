/* =========================================================
   NOSA TOUR — Shared logic (i18n, tours data, booking modal)
   ========================================================= */

/* ---------- CONFIG ---------- */
/* FormBold form address. Bookings are posted there
   and FormBold forwards them to Telegram. */
const BOOKING_ENDPOINT = "https://formbold.com/s/3Gaea";
/* Fallback when BOOKING_ENDPOINT is empty or unreachable: opens a Telegram chat
   with this username (without @) and the booking pre-filled. */
const TELEGRAM_USERNAME = "your_telegram_username";

/* ---------- UI TEXT (all static interface strings) ---------- */
const UI = {
  hy: {
    brand: "Nosa Tour",
    nav_home: "Գլխավոր",
    nav_tours: "Տուրեր",
    nav_contact: "Կապ",
    hero_title: "Շարմ Էլ Շեյխի ամենալավ էքսկուրսիաները",
    hero_sub: "Ծով, անապատ և պատմություն մեկ գործակալությունում. ապահով, ապահովագրված ու առանց նախավճարի",
    hero_cta_tours: "Դիտել տուրերը",
    hero_cta_book: "Ամրագրել տուր",
    trust_prepay_title: "Առանց նախավճարի",
    trust_prepay_text: "Վճարումը կատարվում է տուրի օրը, տեղում",
    trust_safe_title: "100% ապահով տուրեր",
    trust_safe_text: "Բոլոր էքսկուրսիաները ապահովագրված են",
    trust_license_title: "Լիցենզավորված գործակալություն",
    trust_license_text: "Զբոսաշրջության նախարարության A դասի լիցենզիա",
    trust_kids_title: "Զեղչեր երեխաների համար",
    trust_kids_text: "Մինչև 100% զեղչ՝ կախված տուրից և տարիքից",
    cats_title: "Ընտրիր ուղղությունը",
    cat_sea_title: "Ծովային տուրեր",
    cat_sea_text: "Կղզիներ, յախտեր, VIP նավակներ և սուզվածքներ Կարմիր ծովում",
    cat_adventure_title: "Անապատային արկածներ",
    cat_adventure_text: "Քվադրոցիկլ, բագի, ջիփ-սաֆարի և բեդուինական երեկո",
    cat_family_title: "Ընտանեկան հանգիստ",
    cat_family_text: "Դելֆինարիում և ջրային պարկ ամբողջ ընտանիքի համար",
    cat_combo_title: "Կոմբո տուրեր",
    cat_combo_text: "Մի քանի ակտիվություն մեկ օրում, ամենաշահավետ գները",
    cat_historical_title: "Պատմական էքսկուրսիաներ",
    cat_historical_text: "Կահիրե, Լուքսոր, Սինայի լեռ, Պետրա և Երուսաղեմ",
    cats_cta: "Դիտել բոլոր տուրերը →",
    home_tours_title: "Բոլոր տուրերը",
    home_tours_cta: "Դիտել բոլորը →",
    trust_inline: "100% ապահովագրված · 0% կանխավճար",
    why_title: "Ինչու՞ ընտրել մեզ",
    why_1_title: "10+ տարվա փորձ",
    why_1_text: "Հազարավոր գոհ զբոսաշրջիկներ Շարմ Էլ Շեյխում",
    why_2_title: "Հայերեն և ռուսերեն ուղեկցում",
    why_2_text: "Հարմարավետ շփում ձեր լեզվով",
    why_3_title: "Ճկուն ամրագրում",
    why_3_text: "Փոփոխություններ և չեղարկում՝ առանց խնդիրների",
    footer_contact_title: "Կապ մեզ հետ",
    footer_location: "Շարմ Էլ Շեյխ, Եգիպտոս",
    footer_rights: "Բոլոր իրավունքները պաշտպանված են",
    tours_page_title: "Բոլոր տուրերը",
    tours_page_sub: "Ընտրիր կատեգորիան և գտիր հենց քեզ հարմար էքսկուրսիան",
    filter_all: "Բոլորը",
    filter_sea: "Ծովային",
    filter_adventure: "Անապատային",
    filter_family: "Ընտանեկան",
    filter_combo: "Կոմբո",
    filter_historical: "Պատմական",
    price_adult: "Մեծահասակ",
    price_child: "Երեխա",
    price_from: "սկսած",
    book_btn: "Ամրագրել",
    details_btn: "Մանրամասն",
    back_to_tours: "← Բոլոր տուրերը",
    modal_title: "Ամրագրում",
    modal_tour_label: "Տուր",
    modal_name: "Անուն, ազգանուն",
    modal_tour_select: "Տուր",
    modal_tour_placeholder: "Ընտրեք տուրը",
    modal_option: "Տարբերակ",
    modal_phone: "Հեռախոսահամար",
    modal_messenger: "Կապի համար մեսենջեր",
    modal_messenger_id: "Մեսենջերի համարը",
    modal_messenger_id_tg: "Telegram համար կամ @username",
    modal_hotel: "Հյուրանոցի անունը",
    modal_room: "Սենյակի համարը",
    total_label: "Ընդհանուր գումար",
    total_note: "Մոտավոր գումար է․ վերջնական գինը կհաստատի մեր մենեջերը",
    total_request: "Գինը անհատական է, կճշտենք ձեզ հետ",
    total_pick_tour: "Ընտրեք տուրը՝ գումարը տեսնելու համար",
    units_pairs_weight: "Քանի՞ զույգ է համապատասխանում (միասին մինչև 140 կգ)",
    units_pairs_weight_hint: "Երկու հոգու գինը գործում է, եթե երկու հյուրի քաշը միասին չի գերազանցում 140 կգ։ Մնացածը վճարում են մեկ հոգու գինը։",
    units_pairs_quad: "Քանի՞ քվադրոցիկլ՝ 2 հոգով",
    units_pairs_quad_hint: "Երկու հոգու գինը գործում է, եթե երկուսը նստում են նույն քվադրոցիկլին։ Մնացածը նստում են մեկական։",
    units_buggy_0: "2-տեղանոց բագի (հատ)",
    units_buggy_1: "4-տեղանոց բագի (հատ)",
    units_buggy_hint: "Գինը մեկ բագիի համար է․ 2-տեղանոցում նստում է մինչև 2, 4-տեղանոցում՝ մինչև 4 հոգի։",
    units_seats_short: "Տեղերը բավարար չեն բոլոր հյուրերի համար․ ավելացրեք բագի",
    modal_date: "Ցանկալի ամսաթիվ",
    modal_date_note: "Ամրագրումն ընդունվում է առնվազն 24 ժամ առաջ",
    modal_adults: "Մեծահասակներ",
    modal_children_u6: "Երեխաներ (մինչև 6)",
    modal_children_6to11: "Երեխաներ (6–11+)",
    modal_comment: "Մեկնաբանություն (ոչ պարտադիր)",
    modal_submit: "Ուղարկել հայտը",
    modal_note: "Հայտը կուղարկվի անմիջապես մեզ, և մենք շուտով կկապվենք ձեզ հետ",
    booking_sending: "Ուղարկվում է…",
    booking_success: "Շնորհակալություն։ Ձեր հայտը ստացվել է, մենք շուտով կկապվենք ձեզ հետ։",
    booking_error: "Չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին կամ գրել մեզ Telegram-ով։",
    modal_close: "Փակել",
    unavailable_note: "Ժամանակավորապես անհասանելի է, խնդրում ենք ճշտել",
  },
  ru: {
    brand: "Nosa Tour",
    nav_home: "Главная",
    nav_tours: "Экскурсии",
    nav_contact: "Контакты",
    hero_title: "Лучшие экскурсии Шарм-эль-Шейха",
    hero_sub: "Море, пустыня и история в одном агентстве: безопасно, застраховано и без предоплаты",
    hero_cta_tours: "Смотреть экскурсии",
    hero_cta_book: "Забронировать тур",
    trust_prepay_title: "Без предоплаты",
    trust_prepay_text: "Оплата в день экскурсии, на месте",
    trust_safe_title: "100% безопасные туры",
    trust_safe_text: "Все экскурсии застрахованы",
    trust_license_title: "Лицензированное агентство",
    trust_license_text: "Лицензия министерства туризма класса А",
    trust_kids_title: "Скидки детям",
    trust_kids_text: "До 100% скидки в зависимости от тура и возраста",
    cats_title: "Выберите направление",
    cat_sea_title: "Морские экскурсии",
    cat_sea_text: "Острова, яхты, VIP-катера и дайвинг в Красном море",
    cat_adventure_title: "Приключения в пустыне",
    cat_adventure_text: "Квадроциклы, багги, джип-сафари и бедуинский вечер",
    cat_family_title: "Отдых с детьми",
    cat_family_text: "Дельфинарий и аквапарк для всей семьи",
    cat_combo_title: "Комбо-туры",
    cat_combo_text: "Несколько активностей за один день по лучшей цене",
    cat_historical_title: "Исторические экскурсии",
    cat_historical_text: "Каир, Луксор, гора Моисея, Петра и Иерусалим",
    cats_cta: "Смотреть все экскурсии →",
    home_tours_title: "Все экскурсии",
    home_tours_cta: "Смотреть все →",
    trust_inline: "100% застраховано · 0% предоплата",
    why_title: "Почему выбирают нас",
    why_1_title: "10+ лет опыта",
    why_1_text: "Тысячи довольных туристов в Шарм-эль-Шейхе",
    why_2_title: "Сопровождение на русском и армянском",
    why_2_text: "Комфортное общение на вашем языке",
    why_3_title: "Гибкое бронирование",
    why_3_text: "Изменения и отмена без проблем",
    footer_contact_title: "Связаться с нами",
    footer_location: "Шарм-эль-Шейх, Египет",
    footer_rights: "Все права защищены",
    tours_page_title: "Все экскурсии",
    tours_page_sub: "Выберите категорию и найдите подходящую именно вам экскурсию",
    filter_all: "Все",
    filter_sea: "Морские",
    filter_adventure: "Пустыня",
    filter_family: "С детьми",
    filter_combo: "Комбо",
    filter_historical: "Исторические",
    price_adult: "Взрослый",
    price_child: "Ребёнок",
    price_from: "от",
    book_btn: "Забронировать",
    details_btn: "Подробнее",
    back_to_tours: "← Все экскурсии",
    modal_title: "Бронирование",
    modal_tour_label: "Экскурсия",
    modal_name: "Имя, фамилия",
    modal_tour_select: "Экскурсия",
    modal_tour_placeholder: "Выберите экскурсию",
    modal_option: "Вариант",
    modal_phone: "Номер телефона",
    modal_messenger: "Мессенджер для связи",
    modal_messenger_id: "Номер в мессенджере",
    modal_messenger_id_tg: "Номер или @username в Telegram",
    modal_hotel: "Название отеля",
    modal_room: "Номер комнаты",
    total_label: "Итого",
    total_note: "Сумма ориентировочная — окончательную цену подтвердит наш менеджер",
    total_request: "Цена индивидуальная — уточним с вами",
    total_pick_tour: "Выберите экскурсию, чтобы увидеть сумму",
    units_pairs_weight: "Сколько пар подходит (вдвоём до 140 кг)",
    units_pairs_weight_hint: "Цена за двоих действует, если общий вес двух гостей не больше 140 кг. Остальные платят цену за одного.",
    units_pairs_quad: "Сколько квадроциклов вдвоём",
    units_pairs_quad_hint: "Цена за двоих — если двое едут на одном квадроцикле. Остальные едут по одному.",
    units_buggy_0: "Багги 2-местные (шт.)",
    units_buggy_1: "Багги 4-местные (шт.)",
    units_buggy_hint: "Цена за одну машину: в 2-местную садятся до 2, в 4-местную — до 4 человек.",
    units_seats_short: "Мест не хватает на всех гостей — добавьте багги",
    modal_date: "Желаемая дата",
    modal_date_note: "Бронирование принимается не менее чем за 24 часа",
    modal_adults: "Взрослых",
    modal_children_u6: "Детей (до 6 лет)",
    modal_children_6to11: "Детей (6–11+)",
    modal_comment: "Комментарий (необязательно)",
    modal_submit: "Отправить заявку",
    modal_note: "Заявка придёт нам сразу, и мы скоро свяжемся с вами",
    booking_sending: "Отправляем…",
    booking_success: "Спасибо! Ваша заявка получена, мы скоро свяжемся с вами.",
    booking_error: "Не удалось отправить. Попробуйте ещё раз или напишите нам в Telegram.",
    modal_close: "Закрыть",
    unavailable_note: "Временно недоступно, уточняйте у менеджера",
  },
  en: {
    brand: "Nosa Tour",
    nav_home: "Home",
    nav_tours: "Excursions",
    nav_contact: "Contact",
    hero_title: "The best excursions in Sharm El Sheikh",
    hero_sub: "Sea, desert and history with one agency: safe, insured, and no prepayment",
    hero_cta_tours: "Browse excursions",
    hero_cta_book: "Book a tour",
    trust_prepay_title: "No prepayment",
    trust_prepay_text: "You pay on the day of the excursion, on the spot",
    trust_safe_title: "100% safe tours",
    trust_safe_text: "Every excursion is fully insured",
    trust_license_title: "Licensed agency",
    trust_license_text: "Class A license from the Ministry of Tourism",
    trust_kids_title: "Discounts for kids",
    trust_kids_text: "Up to 100% off depending on tour and age",
    cats_title: "Choose a direction",
    cat_sea_title: "Sea excursions",
    cat_sea_text: "Islands, yachts, VIP speedboats and diving in the Red Sea",
    cat_adventure_title: "Desert adventures",
    cat_adventure_text: "Quad bikes, buggies, jeep safari and a Bedouin evening",
    cat_family_title: "Family fun",
    cat_family_text: "Dolphinarium and water park for the whole family",
    cat_combo_title: "Combo tours",
    cat_combo_text: "Several activities in one day at the best price",
    cat_historical_title: "Historical excursions",
    cat_historical_text: "Cairo, Luxor, Mount Sinai, Petra and Jerusalem",
    cats_cta: "See all excursions →",
    home_tours_title: "All excursions",
    home_tours_cta: "See all →",
    trust_inline: "100% insured · 0% prepayment",
    why_title: "Why choose us",
    why_1_title: "10+ years of experience",
    why_1_text: "Thousands of happy travelers in Sharm El Sheikh",
    why_2_title: "Russian & Armenian speaking guides",
    why_2_text: "Comfortable communication in your language",
    why_3_title: "Flexible booking",
    why_3_text: "Changes and cancellations without hassle",
    footer_contact_title: "Get in touch",
    footer_location: "Sharm El Sheikh, Egypt",
    footer_rights: "All rights reserved",
    tours_page_title: "All excursions",
    tours_page_sub: "Pick a category and find the excursion that suits you",
    filter_all: "All",
    filter_sea: "Sea",
    filter_adventure: "Desert",
    filter_family: "With kids",
    filter_combo: "Combo",
    filter_historical: "Historical",
    price_adult: "Adult",
    price_child: "Child",
    price_from: "from",
    book_btn: "Book now",
    details_btn: "Details",
    back_to_tours: "← All excursions",
    modal_title: "Booking",
    modal_tour_label: "Excursion",
    modal_name: "Full name",
    modal_tour_select: "Tour",
    modal_tour_placeholder: "Choose a tour",
    modal_option: "Option",
    modal_phone: "Phone number",
    modal_messenger: "Messenger to contact you",
    modal_messenger_id: "Messenger number",
    modal_messenger_id_tg: "Telegram number or @username",
    modal_hotel: "Hotel name",
    modal_room: "Room number",
    total_label: "Total",
    total_note: "Approximate — our manager will confirm the final price",
    total_request: "Custom price — we'll confirm it with you",
    total_pick_tour: "Choose a tour to see the total",
    units_pairs_weight: "How many pairs qualify (140 kg or less together)",
    units_pairs_weight_hint: "The price for two applies if the two guests weigh 140 kg or less together. Everyone else pays the single price.",
    units_pairs_quad: "Quads with 2 riders",
    units_pairs_quad_hint: "The double price applies when two people share one quad. Everyone else rides alone.",
    units_buggy_0: "2-seat buggies",
    units_buggy_1: "4-seat buggies",
    units_buggy_hint: "Price is per buggy: a 2-seater takes up to 2 people, a 4-seater up to 4.",
    units_seats_short: "Not enough seats for all guests — add a buggy",
    modal_date: "Preferred date",
    modal_date_note: "Bookings require at least 24 hours' notice",
    modal_adults: "Adults",
    modal_children_u6: "Children (under 6)",
    modal_children_6to11: "Children (6–11+)",
    modal_comment: "Comment (optional)",
    modal_submit: "Send request",
    modal_note: "Your request reaches us right away — we'll contact you shortly",
    booking_sending: "Sending…",
    booking_success: "Thank you! Your request has been received — we'll contact you shortly.",
    booking_error: "Couldn't send. Please try again or message us on Telegram.",
    modal_close: "Close",
    unavailable_note: "Temporarily unavailable, please ask our manager",
  },
};

/* ---------- ICONS (inline SVG, stroke-based, share the brand style) ---------- */
const ICONS = {
  wave: `<path d="M2 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/>`,
  submarine: `<ellipse cx="12" cy="13" rx="9" ry="4"/><path d="M12 9V4"/><path d="M9 4h6"/><circle cx="9" cy="13" r="1.2"/><circle cx="12" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/><path d="M3 17c3 2 15 2 18 0"/>`,
  parachute: `<path d="M3 11a9 9 0 0 1 18 0c-2-1-4-1.5-9-1.5S5 10 3 11z"/><path d="M5 11l2 9M9 11l1 9M15 11l-1 9M19 11l-2 9"/><path d="M7 20h10"/>`,
  dolphin: `<path d="M3 16c4-6 9-10 17-9-2 2-2 3-1 5 1 1 0 2-1 2-1 3-4 5-8 5-3 0-5-1-7-3z"/><circle cx="16" cy="9" r=".6" fill="currentColor" stroke="none"/>`,
  jeep: `<path d="M3 16v-3l2-4h10l3 4h2a1 1 0 0 1 1 1v2"/><path d="M3 16h18"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/><path d="M8 9V6h5l2 3"/>`,
  burst: `<path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.5 4.5l4 4M15.5 15.5l4 4M19.5 4.5l-4 4M8.5 15.5l-4 4"/>`,
  landmark: `<path d="M3 21h18"/><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6"/>`,
  plane: `<path d="M2 15l8-2 3-8 2 1-2 7 6-1 2 2-7 3 1 6-2 1-3-6-6 3z"/>`,
  moon: `<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>`,
  splash: `<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M4 19c1 1 2 1 3 0M17 19c1 1 2 1 3 0"/>`,
  boat: `<path d="M3 15h18l-2 5H5l-2-5Z"/><path d="M6 15V6h2v9M12 15V4h1l4 6"/><path d="M2 19h20"/>`,
};

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ---------- TOURS DATA ---------- */
/* price: freeform pre-built string per language (keeps varied pricing patterns simple).
   image: expected file at images/<id>.jpg — if missing, the icon shows instead (graceful fallback). */

/* The posters have lettering on them, so RU/EN pages use translated copies
   (images/<id>-ru.jpg, images/<id>-en.jpg), falling back to the Armenian original. */
function tourImage(id, lang) {
  return lang === "hy" ? `images/${id}.jpg` : `images/${id}-${lang}.jpg`;
}
function tourImageFallback(id, lang) {
  return lang === "hy" ? "" : `images/${id}.jpg`;
}

const TOURS = [
  /* ---------------- SEA ---------------- */
  {
    id: "ras-mohammed-tiran",
    category: "sea", icon: "boat",
    title: { hy: "Ռաս Մոհամեդ / կղզի Տիրան (VIP յախտ)", ru: "Рас-Мохаммед / остров Тиран (VIP яхта)", en: "Ras Mohammed / Tiran Island (VIP yacht)" },
    desc: {
      hy: "Օրվա ամենագեղեցիկ ծովային տուրը՝ ընտրությամբ Ռաս Մոհամեդի արգելոց կամ Տիրան կղզի։ Ամեն ինչ ներառված է՝ ճաշ, խմիչքներ, ռուսալեզու գիդ, տրանսֆեր։ Կանգառ Ոսկե ծոցում սնորկլինգի համար և ազատ ժամանակ Սպիտակ կղզու կրիստալային ջրերում։",
      ru: "Один из самых впечатляющих маршрутов Шарм-эль-Шейха — на выбор заповедник Рас-Мохаммед или остров Тиран. Всё включено: обед, напитки, русскоговорящий гид, трансфер. Остановка в Золотой бухте для снорклинга и час свободного времени на Белом острове.",
      en: "One of the most impressive routes in Sharm El Sheikh — choose Ras Mohammed Reserve or Tiran Island. Everything is included: lunch, drinks, a Russian-speaking guide, transfer. A stop at the Golden Bay for snorkeling and free time on White Island's crystal waters.",
    },
    full: {
      hy: "ԵԳԻՊՏԱԿԱՆ ՄԱԼԴԻՎՆԵՐ — WHITE ISLAND\n\nԾովային զբոսանք, որը սիրահարվում է քեզ առաջին հայացքից:\n\nԻնչու՞ են զբոսաշրջիկներն ընտրում հենց այս էքսկուրսիան.\n– Շարմ Էլ Շեյխի ամենատպավորիչ երթուղիներից մեկը\n– Իդեալական է լուսանկարների, հանգստի, սնորկլինգի և ստորջրյա արկածների համար\n– Ամեն ինչ ներառված է. տրանսֆեր, գիդ, ճաշ, խմիչքներ, դայվինգի սարքավորում, սնորկլինգի համար սեփական դիմակ, հնարավոր է վարձել նաև նավահանգստում ($5)\n\nԾրագիր.\n✅ Տրանսֆեր հյուրանոցից՝ ռուսալեզու գիդի ուղեկցությամբ\n✅ Գրանցում նավահանգստում և նստում յախտի վրա\n✅ 1-ին կանգառ. Ռաս Մոհամեդ ազգային պարկ — Ոսկե ծոց, սնորկլինգ և դայվինգ, գունավոր մարջաններ, ծովային կրիաներ\n✅ 2-րդ կանգառ. բաց ծով — եզակի մարջանային խութ, երկրորդ հնարավորություն սնորկլինգի կամ դայվինգի համար\n✅ Ճաշ յախտի վրա (շվեդական սեղան, խմիչքներ առանց սահմանափակման, ցանկության դեպքում՝ ծովամթերք լրացուցիչ վճարով)\n✅ Սպիտակ կղզի — էքսկուրսիայի մարգարիտը, մեկ ժամ ազատ ժամանակ լեգենդար ավազոտ կղզում, բյուրեղապես մաքուր ջուր\n✅ Վերադարձ նավահանգիստ և տրանսֆեր հյուրանոց (մոտ 16:00–16:30)\n\n💯 Այլընտրանք՝ Տիրան կղզի (նույն գնով), հայտնի իր մարջանային խութերով։\nԴիտողություն. Ռաս Մոհամեդ / Տիրան կղզին կախված է օրվա երթուղուց, ճշտեք ամրագրելիս։",
      ru: "ЕГИПЕТСКИЕ МАЛЬДИВЫ — WHITE ISLAND\n\nМорская прогулка, которая влюбляет в себя с первого взгляда!\n\nПочему туристы выбирают именно эту экскурсию?\n– Один из самых впечатляющих маршрутов в Шарм-эль-Шейхе\n– Идеально для фото, релакса, снорклинга и подводных приключений\n– Всё включено: трансфер, гид, обед, напитки, снаряжение для дайвинга; для снорклинга маски свои, можно взять в аренду в порту ($5)\n\nПрограмма экскурсии:\n✅ Трансфер из отеля в сопровождении русскоязычного гида\n✅ Регистрация в порту и посадка на яхту\n✅ 1-я остановка: Национальный парк Рас-Мохаммед — Золотая бухта, снорклинг и дайвинг, красочные кораллы, морские черепахи\n✅ 2-я остановка: открытое море — уникальный коралловый риф, вторая возможность для снорклинга или дайвинга\n✅ Обед на борту яхты (шведский стол, напитки без ограничений, по желанию — морепродукты за доплату)\n✅ Белый остров — жемчужина экскурсии, час свободного времени на легендарном песчаном острове, кристально чистая вода\n✅ Возвращение в порт и трансфер в отель (ориентировочно 16:00–16:30)\n\n💯 Альтернатива: остров Тиран (та же цена) — знаменит своими коралловыми рифами.\nУточняйте при бронировании, какой маршрут запланирован на выбранный день.",
      en: "EGYPTIAN MALDIVES — WHITE ISLAND\n\nA sea trip that you'll fall in love with at first sight!\n\nWhy travelers choose this excursion:\n– One of the most impressive routes in Sharm El Sheikh\n– Perfect for photos, relaxing, snorkeling and underwater adventures\n– Everything included: transfer, guide, lunch, drinks, diving gear; bring your own snorkel mask or rent one at the port ($5)\n\nProgram:\n✅ Hotel transfer with a Russian-speaking guide\n✅ Check-in at the port and boarding the yacht\n✅ Stop 1: Ras Mohammed National Park — Golden Bay, snorkeling and diving, colorful corals, sea turtles\n✅ Stop 2: open sea — a unique coral reef, a second chance to snorkel or dive\n✅ Lunch on board (buffet, unlimited drinks, seafood available for an extra charge)\n✅ White Island — the highlight, an hour of free time on the legendary sandy island with crystal-clear water\n✅ Return to port and hotel transfer (around 16:00–16:30)\n\n💯 Alternative: Tiran Island (same price) — famous for its coral reefs.\nPlease confirm which route is scheduled for your chosen day when booking.",
    },
    price: {
      hy: "Մեծահասակ $32 · Մինչև 10 տ. $16 · Սուզվածք $12-ից (11+) · 08:00–17:00",
      ru: "Взрослый $32 · До 10 лет $16 · Дайвинг от $12 (с 11 лет) · 08:00–17:00",
      en: "Adult $32 · Under 10 $16 · Diving from $12 (11+) · 08:00–17:00",
    },
  },
  {
    id: "lux-yacht",
    category: "sea", icon: "boat",
    title: { hy: "Lux յախտ", ru: "Lux яхта", en: "Lux yacht" },
    desc: {
      hy: "Հանգիստ ու հարմարավետ ձևաչափ մեծ ընկերությունների կամ ընտանիքների համար։",
      ru: "Комфортный формат для больших компаний и семей на просторной яхте.",
      en: "A comfortable format for larger groups and families on a spacious yacht.",
    },
    price: { hy: "Մեծահասակ $55 · Երեխա (մինչև 10) $28 · Մինչև 5 տարեկան՝ անվճար", ru: "Взрослый $55 · Ребёнок до 10 лет $28 · До 5 лет бесплатно", en: "Adult $55 · Child under 10 $28 · Under 5 free" },
  },
  {
    id: "yacht-rental",
    category: "sea", icon: "boat",
    title: { hy: "Յախտի վարձույթ", ru: "Аренда яхты", en: "Yacht rental" },
    desc: {
      hy: "Անհատական յախտ՝ միայն ձեզ և ձեր ընկերների համար, ցանկացած ձևաչափով։",
      ru: "Отдельная яхта только для вас и вашей компании — под любой формат отдыха.",
      en: "A private yacht just for you and your group, for any kind of celebration.",
    },
    price: { hy: "Գնացուցակ $500-ից", ru: "Цена от $500", en: "Price from $500" },
  },
  {
    id: "vip-speedboat",
    category: "sea", icon: "wave",
    title: { hy: "VIP զբոսանք արագընթաց նավակով", ru: "VIP-прогулка на скоростной лодке", en: "VIP speedboat cruise" },
    desc: {
      hy: "Անհատական երթուղի, մինչև 10 մարդու համար՝ արևածագի դրայվ կամ մայրամուտի ռոմանտիկա, երբեմն նաև դելֆինների հետ հանդիպում բաց ծովում։ Ծրագիրը կազմվում է հենց ձեզ համար։",
      ru: "Индивидуальный маршрут на компанию до 10 человек: драйв на рассвете или романтика на закате, а иногда и встреча с дельфинами в открытом море. Программа собирается под вас.",
      en: "A private route for up to 10 people: sunrise thrills or sunset romance, sometimes even dolphins in the open sea. The program is built around you.",
    },
    full: {
      hy: "VIP-ԶԲՈՍԱՆՔ ԱՐԱԳԸՆԹԱՑ ՆԱՎԱԿՈՎ ՇԱՐՄՈՒՄ — երբ երազանքն իրականություն է դառնում:\n\nՊատկերացրու. դու թռչում ես Կարմիր ծովի ալիքների վրայով, ծովը փայլում է արևի տակ, իսկ քամին խաղում է քո մազերի հետ։ Շուրջդ՝ անծայրածիր լազուր, լռություն, որը խախտում է միայն ալիքների ձայնը և... երբեմն՝ դելֆինների ուրախ հայտնվելը կողքով։\n\nԱյս ուղևորությունը ոչ թե պարզապես էքսկուրսիա է, այլ ազատության զգացողություն։\n• Վարձույթ՝ 1 ժամից\n• Մինչև 10 մարդու համար\n• Անհատական երթուղի\n• 100% VIP մթնոլորտ\n• Ծրագիրը կազմվում է հենց ձեզ համար\n• Գինը հաշվարկվում է անհատապես՝ միայն այն ինչ քեզ պետք է\n\nՈւզում ես ռոմանտիկա մայրամուտին? Թե՞ ադրենալին լուսաբացին? Կամ գուցե՝ ֆոտոսեսիա դելֆինների հետ բաց ծովում? Ամեն ինչ հնարավոր է՝ սա քո օրն է:",
      ru: "VIP-ПРОГУЛКА НА СКОРОСТНОЙ ЛОДКЕ В ШАРМЕ — когда мечта становится реальностью!\n\nПредставь: ты взлетаешь над волнами Красного моря, море искрится под солнцем, а ветер играет с твоими волосами. Вокруг — бескрайняя лазурь, тишина, прерываемая лишь плеском волн и... иногда — радостным появлением дельфинов рядом!\n\nЭто не экскурсия — это ощущение полной свободы.\n• Аренда от 1 часа\n• Вместимость до 10 человек\n• Индивидуальный маршрут\n• Атмосфера — 100% VIP\n• Программа подбирается под тебя\n• Цена рассчитывается индивидуально — только за то, что нужно именно тебе!\n\nХочешь романтики на закате? А может, драйва на рассвете? Или фотосессию с дельфинами в открытом море? Всё возможно — это твой день!",
      en: "VIP SPEEDBOAT CRUISE IN SHARM — when a dream becomes reality!\n\nImagine: you're flying over the waves of the Red Sea, the sea sparkling in the sun, wind playing with your hair. All around — endless blue, silence broken only by the splash of waves and... sometimes the joyful appearance of dolphins nearby!\n\nThis isn't an excursion — it's a feeling of complete freedom.\n• Rental from 1 hour\n• Up to 10 people\n• A private route\n• 100% VIP atmosphere\n• The program is tailored to you\n• Price calculated individually — you only pay for what you actually want!\n\nWant sunset romance? Sunrise adrenaline? Or a photoshoot with dolphins in the open sea? It's all possible — this is your day!",
    },
    price: { hy: "Վարձույթ 1 ժամից · Գինը՝ անհատական", ru: "Аренда от 1 часа · Цена индивидуальная", en: "Rental from 1 hour · Custom pricing" },
  },
  {
    id: "bathyscaphe",
    category: "sea", icon: "submarine",
    title: { hy: "Բատիսկաֆ (ստորջրյա նավակ)", ru: "Батискаф (подводная лодка)", en: "Bathyscaphe (semi-submarine)" },
    desc: {
      hy: "Դիտեք Կարմիր ծովի ստորջրյա աշխարհը՝ առանց թրջվելու։ Խոշոր պատուհաններից երևում են մարջանային խութեր, թիթեռնիկ-ձկներ, մուրենաներ, երբեմն էլ՝ կրիաներ։ Հարմար է նաև նրանց համար, ովքեր չգիտեն լողալ։",
      ru: "Познакомьтесь с подводным миром Красного моря, не заходя в воду. Через большие окна видны коралловые рифы, скаты, мурены, рыба-клоун, а иногда и черепахи. Отлично подходит для семей и тех, кто не умеет плавать.",
      en: "Explore the Red Sea's underwater world without getting wet. Large windows reveal coral reefs, rays, moray eels, clownfish, and sometimes turtles. Great for families and non-swimmers alike.",
    },
    full: {
      hy: "ԷՔՍԿՈՒՐՍԻԱ ԲԱՏԻՍԿԱՖՈՎ ՇԱՐՄ ԷԼ ՇԵՅԽՈՒՄ\n\nՏեսակ. ծովային, ընտանեկան, ակնարկային։ Հարմար է բոլոր տարիքի համար, հատկապես երեխաներով ընտանիքների և նրանց համար, ովքեր չգիտեն լողալ։ Տևողությունը՝ 2-3 ժամ։\n\nԲատիսկաֆով էքսկուրսիան Կարմիր ծովի ստորջրյա աշխարհին ծանոթանալու իդեալական միջոց է՝ առանց ջուրը մտնելու։ Բատիսկաֆը նավակ է՝ ամբողջովին ջրի տակ գտնվող ստորին խցիկով, հագեցած մեծ պանորամային պատուհաններով։ Ներսից բացվում է հիասքանչ տեսարան մարջանային խութերի, գունավոր ձկների և ծովային բնակիչների վրա իրենց բնական միջավայրում։\n\nԻնչպես է անցնում էքսկուրսիան.\n1. Հանդիպում և տրանսֆեր. զբոսաշրջիկներին վերցնում են հյուրանոցից և հասցնում նավահանգիստ։\n2. Սուզում. նավակը մեկնում է ափից, և դուք իջնում եք ստորին խցիկը։ Պատուհանները գտնվում են մոտ 3-4 մետր խորության վրա, հենց այնտեղ է սկսվում իրական ծովային կյանքի շոուն։\n3. Դիտում. կտեսնեք մարջանային խութեր, թիթեռնիկ-ձկներ, մուրենաներ, կլոուն-ձկներ, նապոլեոն-ձուկ, երբեմն էլ՝ կրիա։ Գիդը պատմում է հետաքրքիր փաստեր։\n\nԺամեր ընտրության համար՝ 08:00, 11:00, 15:00։\n\nԱռավելություններ՝ անվտանգ և հարմար երեխաների համար, հնարավորություն տեսնելու ստորջրյա աշխարհը առանց սուզվելու, կարճ տևողություն՝ իդեալական հագեցած հանգստի համար։",
      ru: "ЭКСКУРСИЯ НА БАТИСКАФЕ В ШАРМ-ЭЛЬ-ШЕЙХЕ\n\nТип экскурсии: морская, семейная, обзорная. Подходит для всех возрастов, особенно для семей с детьми и тех, кто не умеет плавать. Продолжительность: 2-3 часа.\n\nЭкскурсия на батискафе — это идеальный способ познакомиться с подводным миром Красного моря, не заходя в воду. Батискаф представляет собой лодку с нижним отсеком, полностью погружённым под воду и оснащённым большими панорамными окнами. Изнутри открывается потрясающий обзор на коралловые рифы, разноцветных рыб и морских обитателей в их естественной среде.\n\nКак проходит экскурсия:\n1. Встреча и трансфер: туристов забирают из отеля в Шарм-эль-Шейхе и доставляют в порт.\n2. Погружение: лодка отправляется от берега, и вы спускаетесь в нижний отсек. Окна батискафа находятся на глубине примерно 3–4 метров — именно там начинается настоящее шоу морской жизни.\n3. Наблюдение за подводным миром: вы увидите коралловые рифы, скатов, мурен, рыбу-клоуна, рыбу-наполеона, а если повезёт — даже черепаху. Гид на борту расскажет интересные факты о морских обитателях и рифах.\n\nВремя на выбор: 08:00, 11:00, 15:00.\n\nПреимущества экскурсии: безопасно и удобно для детей, возможность увидеть подводный мир без погружения, короткое время — идеально для насыщенного отдыха.",
      en: "BATHYSCAPHE EXCURSION IN SHARM EL SHEIKH\n\nType: sea, family-friendly, sightseeing. Suitable for all ages, especially families with children and non-swimmers. Duration: 2-3 hours.\n\nA bathyscaphe excursion is the perfect way to get to know the Red Sea's underwater world without getting into the water. The bathyscaphe is a boat with a lower compartment fully submerged and fitted with large panoramic windows. From inside you get a stunning view of coral reefs, colorful fish and marine life in their natural habitat.\n\nHow it works:\n1. Pickup and transfer: guests are collected from their Sharm El Sheikh hotel and taken to the port.\n2. Descent: the boat departs from shore and you go down into the lower compartment. The windows sit about 3-4 meters deep — that's where the real underwater show begins.\n3. Watching marine life: you'll see coral reefs, rays, moray eels, clownfish, Napoleon wrasse, and with luck even a turtle. An onboard guide shares interesting facts.\n\nTime slots: 08:00, 11:00, 15:00.\n\nBenefits: safe and comfortable for children, a chance to see the underwater world without diving, and a short duration — perfect for a packed day.",
    },
    price: { hy: "Մեծահասակ $30 · Մինչև 12 տ. $15 · Մինչև 5 տ. անվճար · Ժամեր՝ 08:00 / 11:00 / 15:00", ru: "Взрослый $30 · До 12 лет $15 · До 5 лет бесплатно · Время: 08:00 / 11:00 / 15:00", en: "Adult $30 · Under 12 $15 · Under 5 free · Times: 08:00 / 11:00 / 15:00" },
  },
  {
    id: "parasailing-boat",
    category: "sea", icon: "parachute",
    title: { hy: "Պարաշյուտ նավակից", ru: "Парасейлинг с катера", en: "Parasailing from a boat" },
    desc: {
      hy: "Բարձրացեք ծովի վրայով և վայելեք Շարմ Էլ Շեյխի ափերի տեսարանը թռչունի թռիչքից՝ ադրենալինի չափաբաժնով։ Ներառված է անհատական տրանսֆեր հյուրանոցից։",
      ru: "Взлетите над морем и полюбуйтесь побережьем Шарм-эль-Шейха с высоты птичьего полёта — с дозой адреналина. Включён индивидуальный трансфер из отеля.",
      en: "Rise above the sea and enjoy Sharm El Sheikh's coastline from a bird's-eye view, with a dose of adrenaline. A private hotel transfer is included.",
    },
    full: {
      hy: "ՊԱՐԱՇՅՈՒՏ ՆԱՎԱԿԻՑ + անհատական տրանսֆեր ցանկացած հյուրանոցից Շարմ Էլ Շեյխում\n\nՏես Շարմը թռչունի թռիչքից!\nՊարաշյուտային թռիչքը հնարավորություն կտա նայել Շարմ Էլ Շեյխին և հրաշալի Կարմիր ծովին թռչունի բարձրությունից, ինչպես նաև ստանալ ադրենալինի չափաբաժին։\n\nԷքսկուրսիան տևում է 1 ժամ։\n\nԾրագիր.\nՏրանսֆեր հյուրանոցից\nԿատեր ~30 րոպե\nԻնստրուկտաժ\nԹռիչք պարաշյուտով նավակից ~7 րոպե\nՏրանսֆեր հյուրանոց\n\nԳինի մեջ չի մտնում. լուսանկարիչի արած ֆոտո/վիդեո նյութեր։\n\nՀետդ վերցրու լողազգեստ և սրբիչ։\n\nՈրպեսզի ավելի վառ լինեն զգացողությունները, էքսկուրսիային կարելի է ավելացնել բանանով կամ «հաբիկով» զբոսանք։",
      ru: "ПАРАСЕЙЛИНГ С КАТЕРА + индивидуальный трансфер с любого отеля Шарм Эль Шейха\n\nУвидеть Шарм с высоты полёта!\nПолёт на парашюте даст возможность взглянуть на Шарм-эль-Шейх и прекрасное Красное море с высоты птичьего полёта, а также получить дозу адреналина!\n\nЭкскурсия займёт 1 час.\n\nПрограмма:\nТрансфер из отеля\nКатер ~30 минут\nИнструктаж\nПолёт на парашюте с катера ~7 минут\nТрансфер в отель\n\nВ стоимость не входит: фото/видео, сделанные фотографом.\n\nС собой нужно взять купальные принадлежности и полотенце.\n\nДля более ярких эмоций к экскурсии можно добавить катание на банане или таблетке.",
      en: "PARASAILING FROM A BOAT + private transfer from any hotel in Sharm El Sheikh\n\nSee Sharm from a bird's-eye view!\nThe parachute flight lets you see Sharm El Sheikh and the beautiful Red Sea from above — plus a dose of adrenaline!\n\nThe excursion takes 1 hour.\n\nProgram:\nHotel transfer\nBoat ride ~30 minutes\nBriefing\nParasailing flight from the boat ~7 minutes\nTransfer back to the hotel\n\nNot included: photos/video taken by a photographer.\n\nBring swimwear and a towel.\n\nFor extra thrills, add a banana boat or sofa (tube) ride to the excursion.",
    },
    price: { hy: "Մեկ մարդու $25 · Երկուսի համար $40 (միասին մինչև 140 կգ)", ru: "1 чел $25 · Вдвоём $40 (вдвоём до 140 кг)", en: "1 person $25 · Two together $40 (up to 140 kg combined)" },
  },
  {
    id: "diving-from-beach",
    category: "sea", icon: "wave",
    title: { hy: "Սուզվածք ափից (անհատական)", ru: "Дайвинг с пляжа (индивидуально)", en: "Diving from the beach (private)" },
    desc: {
      hy: "Անհատական սուզվածք ինստրուկտորի ուղեկցությամբ, ուղիղ ափից։ Տրանսֆեր, սարքավորում և ռուսալեզու ինստրուկտոր՝ ամեն ինչ ներառված է։",
      ru: "Индивидуальное погружение с инструктором прямо с пляжа. Трансфер, снаряжение и русскоговорящий инструктор — всё включено.",
      en: "A private dive with an instructor straight from the beach. Transfer, gear and a Russian-speaking instructor are all included.",
    },
    full: {
      hy: "ՍՈՒԶՎԱԾՔ ԱՓԻՑ (ԱՆՀԱՏԱԿԱՆ)\n\nԱնհատական 1 սուզվածք՝ 15 րոպե տևողությամբ։ Սուզվածքների քանակը և ժամանակը որոշում եք ինքներդ։\n\nՆերառված է. տրանսֆեր, սարքավորում, ռուսալեզու ինստրուկտոր — ամեն ինչ ներառված։\n\nԺամանակը՝ ըստ ցանկության (էքսկուրսիա մինչև 3 ժամ)։",
      ru: "ДАЙВИНГ С ПЛЯЖА (ИНДИВИДУАЛЬНО)\n\nИндивидуально: 1 погружение — 15 минут. Количество и время вы определяете сами.\n\nВключено: трансфер, снаряжение, русскоговорящий инструктор — всё включено.\n\nВремя на выбор (экскурсия до 3 часов).",
      en: "DIVING FROM THE BEACH (PRIVATE)\n\nPrivate: 1 dive — 15 minutes. You decide how many dives and when.\n\nIncluded: transfer, gear, a Russian-speaking instructor — all included.\n\nTime of your choosing (up to a 3-hour outing).",
    },
    price: { hy: "$40 մեկ սուզվածք (15 ր) · Տևողությունը՝ մինչև 3 ժամ", ru: "$40 за 1 погружение (15 мин) · Экскурсия до 3 часов", en: "$40 per dive (15 min) · Up to 3-hour outing" },
  },
  {
    id: "yacht-party-dinner-show",
    category: "sea", icon: "boat",
    title: { hy: "Երեկույթ յախտի վրա՝ ընթրիքով և շոուով", ru: "Вечеринка на яхте с ужином и шоу", en: "Yacht party with dinner and show" },
    desc: {
      hy: "Երեկոյան ծովային զբոսանք, ծովամթերքով ընթրիք, ֆոլկլորային պար, «Թանուրա» պար և արևելյան փորոտիքի պար, ապա՝ դիսկոտեկ։ Հիանալի է հարսանիքների, ծննդյան օրերի և զույգերի ռոմանտիկ երեկոյի համար։",
      ru: "Вечерняя морская прогулка, ужин из морепродуктов, фольклорные танцы, «Танура» и танец живота, а затем дискотека. Отлично подходит для годовщин, дней рождения и романтического вечера вдвоём.",
      en: "An evening sail, a seafood dinner, folk dances, the whirling 'Tanura' dance and belly dance, followed by a disco. Great for anniversaries, birthdays or a romantic night out.",
    },
    full: {
      hy: "ԵՐԵԿՈՒՅԹ ՅԱԽՏԻ ՎՐԱ՝ ԸՆԹՐԻՔՈՎ\n\nԵրեկոյան յախտ — Շարմ Էլ Շեյխի ափի լույսերը շքեղ յախտի տախտակամածից, լուսնի արտացոլումը ալիքների վրա, աստղազարդ երկինք, հագեցած շոու ծրագիր, համեղ ընթրիք ծովամթերքով և պարեր մինչև առավոտ։\n\nՄենք ձեզ կվերցնենք հյուրանոցից ժամը 17:00-ին միկրոավտոբուսով դեպի նավահանգիստ։\n\nԱյս անմոռանալի ուղևորությունը հարմար է թե՛ սիրահար զույգերի, թե՛ ընկերների ընկերության համար։ Իդեալական տարբերակ է կյանքի կարևոր օրերը նշելու համար՝ տարեդարձեր, նշանադրություն, ծննդյան օր (ծնունդի հերոսը կստանա տորթ և անձնական շնորհավորանք վարողից)։\n\nԾրագրում՝ ֆոլկլորային խումբ ազգային պարերով, կախարդների տպավորիչ ելույթ, «Թանուրա» արական պարը թմբուկներով և արևելյան փորոտիքի պար։\n\nԸնթրիքին՝ ծովամթերք, մսեղեն, հավի ուտեստներ, տարբեր կողապատեր, բանջարեղեն և մրգեր։ Ոչ ալկոհոլային խմիչքներ (բացի թարմ քամած հյութերից և թուրքական սուրճից) ներառված են գնի մեջ։\n\nԵրեկոյան ծրագրի վերջին մասը՝ դիսկոտեկ։\n\nՄոտ 22:00-ին, անցկացնելով հրաշալի երեկո, կվերադառնաք հյուրանոց։",
      ru: "ВЕЧЕРИНКА НА ЯХТЕ С УЖИНОМ\n\nВечерняя яхта — огни побережья Шарм-Эль-Шейха с палубы роскошной яхты, завораживающее отражение бликов луны на волнах в открытом море, звёздное небо, насыщенная шоу-программа, вкусный ужин с морепродуктами и танцы до упада!\n\nМы заберём вас из отеля в 17:00 на микроавтобусе до порта.\n\nЭта незабываемая поездка придётся по вкусу как влюблённым парам для романтической атмосферы, так и компании друзей. Лучший вариант для празднования знаменательных дат: годовщины, помолвки, дня рождения (именинники получат в подарок торт и персональные поздравления от ведущего).\n\nВ программе: фольклорная группа с зажигательными национальными танцами, увлекательное выступление фокусников, головокружительный мужской танец с юбками и бубнами «Танура» и пленительный танец живота (программа может меняться).\n\nВас ждёт вкусный ужин из морепродуктов, блюд из мяса, курицы, разнообразных гарниров, овощей и фруктов. Безалкогольные напитки (кроме свежевыжатых соков и кофе по-турецки) включены в стоимость.\n\nПоследняя часть вечерней программы — дискотека!\n\nОколо 22:00, проведя прекрасный вечер, вы вернётесь обратно в отель.",
      en: "YACHT PARTY WITH DINNER\n\nAn evening yacht — the lights of the Sharm El Sheikh coastline from the deck of a luxury yacht, moonlight shimmering on the waves, a starry sky, a packed show program, a delicious seafood dinner, and dancing till you drop!\n\nWe'll pick you up from your hotel at 17:00 by minibus to the port.\n\nThis unforgettable trip suits couples looking for a romantic evening and groups of friends alike. It's a great choice for celebrating special dates — anniversaries, engagements, birthdays (the birthday guest gets a free cake and a personal shout-out from the host).\n\nProgram: a folk group with lively national dances, an entertaining magic act, the dizzying men's 'Tanura' skirt-and-tambourine dance, and a captivating belly dance (program may vary).\n\nDinner includes seafood, meat and chicken dishes, various side dishes, vegetables and fruit. Soft drinks (except fresh juice and Turkish coffee) are included in the price.\n\nThe evening wraps up with a disco!\n\nAround 22:00, after a wonderful evening, you'll return to your hotel.",
    },
    price: { hy: "$25 մեկ մարդու համար · 17:00–22:00", ru: "$25 за человека · 17:00–22:00", en: "$25 per person · 17:00–22:00" },
  },

  /* ---------------- ADVENTURE ---------------- */
  {
    id: "quad-bike",
    category: "adventure", icon: "jeep",
    title: { hy: "Քվադրոցիկլ անապատում", ru: "Квадроцикл", en: "Quad bike in the desert" },
    desc: {
      hy: "Ադրենալինով լի ուղևորություն Սինայի անապատով՝ ինքներդ ղեկավարելով քվադրոցիկլը։",
      ru: "Заряд адреналина по пустыне Синая — вы сами за рулём квадроцикла.",
      en: "An adrenaline ride across the Sinai desert — you drive the quad bike yourself.",
    },
    price: { hy: "1 հոգի քվադրոցիկլին $15 · 2 հոգի նույն քվադրոցիկլին $20", ru: "Сингл (1 чел. на квадроцикле) $15 · Дабл (2 чел. на одном) $20", en: "Single (1 rider) $15 · Double (2 on one quad) $20" },
  },
  {
    id: "buggy",
    category: "adventure", icon: "jeep",
    title: { hy: "Բագի", ru: "Багги", en: "Buggy" },
    desc: {
      hy: "Նոր մեքենաներ, ավելի հզոր և կայուն տարբերակ անապատային արկածների սիրահարների համար։ 3 ժամ անապատում՝ մայրամուտով կամ արևածագով։ Հնարավոր է ուղտի հեծում +$5։",
      ru: "Новые машины, более мощный и устойчивый вариант для любителей приключений. 3 часа в пустыне с закатом или рассветом. Доступно катание на верблюде +$5.",
      en: "New buggies for a more powerful, stable desert ride. 3 hours in the desert with a sunset or sunrise. Camel ride available for +$5.",
    },
    full: {
      hy: "ԲԱԳԻ\n\nԱնհավատալի դրայվ, անմոռանալի հույզեր և ադրենալին!\n\nՆոր մեքենաներ։ 3 ժամ անցկացրու անապատում, դիտիր մայրամուտ կամ արևածագ, կան նաև ցերեկային ուղևորություններ։\n\nԿարող ես նաև հեծնել ուղտ և տեսնել բեդուինական գյուղը՝ անմոռանալի տպավորություններ և ծովային հույզեր երաշխավորված են։",
      ru: "БАГГИ\n\nНевероятный драйв, незабываемые эмоции и адреналин!\n\nНовые машины. 3 часа провести в пустыне, встретить закат или рассвет, а также дневные катания.\n\nВы можете покататься на верблюдах, увидеть бедуинскую деревню — незабываемые впечатления и море эмоций гарантировано.",
      en: "BUGGY\n\nIncredible drive, unforgettable emotions and adrenaline!\n\nNew vehicles. Spend 3 hours in the desert, catch a sunset or sunrise, or ride during the day.\n\nYou can also ride a camel and see a Bedouin village — unforgettable memories and a sea of emotions guaranteed.",
    },
    price: { hy: "2-տեղանոց բագի $35 · 4-տեղանոց բագի $45 (գինը մեկ բագիի համար) · Ուղտի հեծում +$2", ru: "2-местный багги $35 · 4-местный багги $45 (цена за одну машину) · Катание на верблюде +$2", en: "2-seat buggy $35 · 4-seat buggy $45 (price per buggy) · Camel ride +$2" },
  },
  {
    id: "super-safari-dinner-show",
    category: "adventure", icon: "jeep",
    title: { hy: "Սուպեր սաֆարի՝ ընթրիքով և շոուով", ru: "Супер сафари с шоу и ужином в пустыне", en: "Super safari with dinner and show" },
    desc: {
      hy: "Քվադրոցիկլով անցում գունավոր ավազների միջով, կանգառներ լուսանկարների համար, ապա բեդուինական վրան՝ թեյով, ուղտի հեծումով և մայրամուտով։ Երեկոյան՝ ընթրիք աստղազարդ երկնքի տակ և ազգային եգիպտական պարերի շոու։",
      ru: "Поездка на квадроцикле по разноцветному песку, остановки для фото, затем бедуинский шатёр с чаем, катанием на верблюде и закатом. Вечером — ужин под звёздами и шоу традиционных египетских танцев.",
      en: "A quad ride across colored sands with photo stops, then a Bedouin tent with tea, a camel ride and sunset. In the evening — dinner under the stars and a traditional Egyptian dance show.",
    },
    full: {
      hy: "ՍՈՒՊԵՐ ՍԱՖԱՐԻ ԸՆԹՐԻՔՈՎ ԱՆԱՊԱՏՈՒՄ\n\nԾրագիր 17:00-ից 22:00 (5 ժամ)։ Երեխաներ մինչև 5 տարեկան՝ անվճար։\n\nԾրագիր.\nԺամը 17:00-ի սահմաններում կվերցնենք ձեզ հյուրանոցից հարմարավետ ավտոբուսով և կհասցնենք անապատ։ Ժամանելուն պես ինստրուկտորը կանցկացնի ուսուցում քվադրոցիկլը կառավարելու վերաբերյալ։ Արաֆաթկա, հարմար հագուստ և լավ տրամադրություն, և գնացինք⤵️\n\n✅ Քվադրոցիկլով անցնում եք գունավոր ավազների միջով, ճանապարհին կանգառներ ենք անում լուսանկարների համար (գիդն ընտրում է ամենագեղեցիկ վայրերը)։\n✅ Կանգառներից մեկում լսում ենք, թե ինչպես է արձագանքը կրկնում մեր ձայները։\n✅ Քվադրոցիկլով ուղևորություն՝ 1 ժամ 30 րոպե։\n✅ Մոտ մեկ ժամ հետո կժամանեք նպատակակետ (բեդուինական վրան), որտեղ կարող եք հանգստանալ, վայելել արաբական թեյի հյուրընկալությունը և իմանալ բեդուինների ավանդական կյանքի մասին։\n✅ Այնուհետև՝ ուղտի հեծում և հիասքանչ մայրամուտ։\n✅ Կսպասվի ընթրիք աստղազարդ երկնքի տակ, պատրաստված իսկական բեդուինական վրանում, և ոչ ալկոհոլային խմիչքներ։\n\nՀամտեսելու եք ազգային խոհանոց, կտեսնեք ազգային եգիպտական պարերի ֆոլկլորային շոու՝ որովայնի պար և հայտնի Թանուրա պար, որը կավարտի արաբական գիշերային Արևելքի կոլորիտի մեջ ընկղմումը։\n\nԱյնուհետև՝ վերադարձ հյուրանոց մոտ 22:00-ին։",
      ru: "СУПЕР САФАРИ с УЖИНОМ в ПУСТЫНЕ\n\nПрограмма с 17:00 до 22:00 (5 часов). Дети до 5 лет БЕСПЛАТНО.\n\nПрограмма:\nОколо 17:00 мы заберём вас из отеля на комфортабельном автобусе на экскурсию Супер Сафари и доставим в пустыню. По прибытии инструктор проводит обучение по управлению квадроциклом. Арафатка, удобная одежда и хорошее настроение — и погнали⤵️\n\n✅ На квадроцикле вы пройдёте через разноцветный песок, по дороге к бедуинам делаем остановки для фото (гид-сопровождающий выбирает для этого самые красивые места).\n✅ На одной из остановок слушаем, как эхо повторяет наши голоса.\n✅ Катание на квадроцикле 1 час 30 минут.\n✅ Примерно через час вы прибудете в пункт назначения (бедуинская палатка), здесь вы можете расслабиться, насладиться типичным гостеприимством арабского чая и узнать о традиционной жизни бедуинов.\n✅ Затем — поездка на верблюде и наслаждение прекрасным закатом.\n✅ Вам будет предложен ужин под звёздным небом, приготовленный в настоящем бедуинском шатре, и безалкогольные напитки.\n\nЗдесь вы попробуете национальную кухню, увидите фольклорное шоу национальных египетских танцев: танец живота и знаменитый танец Танура, который завершит погружение в колорит арабского ночного Востока.\n\nЗатем вы возвращаетесь обратно в отель около 22:00.",
      en: "SUPER SAFARI WITH DESERT DINNER\n\nProgram from 17:00 to 22:00 (5 hours). Children under 5 FREE.\n\nProgram:\nAround 17:00 we'll pick you up from your hotel on a comfortable bus for the Super Safari excursion and take you to the desert. On arrival, an instructor teaches you how to operate a quad bike. Headscarf, comfortable clothes, good mood — and off we go!\n\n✅ You'll ride the quad across colorful sands, with photo stops on the way to the Bedouins at the guide's favorite spots.\n✅ At one stop, listen to the echo repeat your voice.\n✅ Quad riding: 1 hour 30 minutes.\n✅ About an hour later you'll reach a Bedouin tent, where you can relax, enjoy traditional Arabic tea hospitality and learn about Bedouin life.\n✅ Then a camel ride and a beautiful sunset.\n✅ Dinner under the stars, cooked in a real Bedouin tent, plus soft drinks.\n\nYou'll taste local cuisine and watch a folk show of traditional Egyptian dances: belly dance and the famous whirling Tanura dance, capping off the immersion into Arabian night culture.\n\nThen you'll return to the hotel around 22:00.",
    },
    price: { hy: "$25 մեկ մարդու · $40 երկուսի համար (2 հոգի նույն քվադրոցիկլին) · Մինչև 5 տ. անվճար · 17:00–22:00", ru: "$25 за человека · $40 за двоих (вдвоём на одном квадроцикле) · До 5 лет бесплатно · 17:00–22:00", en: "$25 per person · $40 for two (sharing one quad) · Under 5 free · 17:00–22:00" },
  },
  {
    id: "golden-dahab",
    category: "adventure", icon: "jeep",
    title: { hy: "Ոսկե Դահաբ", ru: "Золотой Дахаб", en: "Golden Dahab" },
    desc: {
      hy: "Ջիփ-սաֆարի դեպի Եգիպտոսի ամենագեղեցիկ կիրճը՝ Էլ Սալամա, զբոսանք կիրճով, ուղտի հեծում ծովափին, լող «երեք ավազանում», ճաշ ծովափնյա սրճարանում և գնումներ Դահաբ քաղաքում։",
      ru: "Джип-сафари к красивейшему каньону Египта Эль-Салама, прогулка по каньону, катание на верблюдах у моря, купание в «трёх бассейнах», обед в кафе у моря и шоппинг в Дахабе.",
      en: "A jeep safari to Egypt's stunning El Salama Canyon, a walk through it, camel rides by the sea, a swim in the 'three pools', lunch at a seaside café, and shopping in Dahab.",
    },
    full: {
      hy: "GOLD DAHAB — ԱՆՑԿԱՑՐՈՒ ՕՐԸ ՇԱՐՄ ԷԼ ՇԵՅԽՈՒՄ ՎԱՌ!\n\nԱմեն օր՝ 8-ից 18-ը։ Կիրճ + լող «three pools»-ում (երեք ավազաններ)։ Սաֆարի քվադրոցիկլով +$10 մեկի / $15 երկուսի (1 քվադրոցիկլով)։\n\nԾրագիր.\n✨ Տրանսֆեր հյուրանոցից՝ մոտ 8:00-ին (միկրոավտոբուս, ճանապարհը՝ մոտ 2 ժամ)\n✨ Ջիփ-սաֆարի դեպի Եգիպտոսի ամենագեղեցիկ կիրճը՝ Էլ Սալամա\n✨ Հետիոտն զբոսանք կիրճով (համեմատում են Մարսի հետ, հրաշալի լուսանկարներ)\n✨ Ուղտերի հեծում ծովի ափով\n✨ Լող «երեք ավազաններում» (խորհուրդ է տրվում բաճկոնով ⚠️)\n✨ Ճաշ ծովափնյա սրճարանում\n✨ Գնումներ Դահաբ քաղաքում\n✨ Տրանսֆեր հյուրանոց, ժամանում՝ մոտ 18:00-ին\n\nՀաջորդականությունը կարող է փոփոխվել։\n\n💲 Լրացուցիչ վճարով, ցանկության դեպքում.\n– Խմիչքներ էքսկուրսիայի ընթացքում\n– Սնորկլինգի սարքավորման վարձույթ (դիմակ, ձեռնոց, բաճկոն, հիդրոկոստյում)\n– Լուսանկարչի արած ֆոտո/վիդեո նյութեր (գինը ճշտել նախապես)\n\n⚠️ Ձեր անվտանգության համար խորհուրդ է տրվում լողալ բաճկոնով։",
      ru: "GOLD DAHAB — ПРОВЕДИ ДЕНЬ В ШАРМ ЭЛЬ ШЕЙХЕ ЯРКО!\n\nКаждый день с 8 до 18. Каньон + купание в «трёх бассейнах». Сафари на квадроцикле +$10 сингл / $15 за двоих на 1 квадроцикле.\n\nПрограмма:\n✨ Трансфер из отеля около 8:00 (микроавтобус, ехать около 2 часов)\n✨ Джип-сафари до самого красивого каньона в Египте — Эль-Салама\n✨ Пешая прогулка по каньону (его сравнивают с Марсом, море красивых фотографий в копилочку)\n✨ Катание на верблюдах вдоль моря\n✨ Купание в «трёх бассейнах» (рекомендуется в жилете ⚠️)\n✨ Обед в кафе у моря\n✨ Шоппинг в г. Дахаб\n✨ Трансфер в отель, приезд около 18:00\n\nПоследовательность может меняться.\n\n💲 За доп. плату, по желанию:\n– напитки во время экскурсии;\n– прокат оборудования для снорклинга (маска, ласты, жилет, гидрокостюм);\n– фото- и видеоматериалы, сделанные фотографом (цену уточнять у фотографа заранее).\n\n⚠️ Для вашей безопасности рекомендуется плавать в жилете.",
      en: "GOLDEN DAHAB — SPEND A VIBRANT DAY IN SHARM EL SHEIKH!\n\nEvery day from 8 to 18. Canyon + a swim in the 'three pools'. Quad safari add-on +$10 single / $15 for two on one quad.\n\nProgram:\n✨ Hotel transfer around 8:00 (minibus, about a 2-hour ride)\n✨ Jeep safari to Egypt's most beautiful canyon — El Salama\n✨ A walk through the canyon (often compared to Mars — a sea of great photos)\n✨ Camel rides along the sea\n✨ A swim in the 'three pools' (a life vest is recommended ⚠️)\n✨ Lunch at a seaside café\n✨ Shopping in the town of Dahab\n✨ Hotel transfer, arrival around 18:00\n\nThe order may change.\n\n💲 Optional, extra charge:\n– drinks during the excursion;\n– snorkeling gear rental (mask, fins, vest, wetsuit);\n– photos/video by a photographer (confirm the price with them in advance).\n\n⚠️ For your safety, swimming with a life vest is recommended.",
    },
    price: { hy: "$20 · Ամեն օր 08:00–18:00 · Քվադրոցիկլ +$10 (մեկ) / +$15 (երկուսի)", ru: "$20 · Ежедневно 08:00–18:00 · Квадроцикл +$10 (сингл) / +$15 (дабл)", en: "$20 · Daily 08:00–18:00 · Quad add-on +$10 (single) / +$15 (double)" },
  },
  {
    id: "ras-mohammed-by-car",
    category: "adventure", icon: "jeep",
    title: { hy: "Ռաս Մոհամեդ (ավտոբուսով)", ru: "Рас-Мохаммед на автобусе", en: "Ras Mohammed by car" },
    desc: {
      hy: "Ազգային արգելոց, «Ալլահի դարպասները», մանգրոյի անտառներ, ցանկությունների լիճ և սնորկլինգ։",
      ru: "Национальный заповедник, «Врата Аллаха», мангровые рощи, озеро желаний и снорклинг.",
      en: "The national reserve, the 'Gates of Allah', mangrove groves, Wish Lake and snorkeling.",
    },
    price: { hy: "$20 մեկ մարդու համար", ru: "$20 за человека", en: "$20 per person" },
  },

  /* ---------------- FAMILY ---------------- */
  {
    id: "dolphin-show-swim",
    category: "family", icon: "dolphin",
    title: { hy: "Դելֆինարիում. շոու և լող դելֆինների հետ", ru: "Дельфинарий: шоу и плавание с дельфинами", en: "Dolphinarium: show & swim with dolphins" },
    desc: {
      hy: "Եզակի շոու՝ դելֆինների ակրոբատիկ ցատկերով, պարերով և նույնիսկ նկարչությամբ։ Ցանկության դեպքում կարելի է նաև իրականում լողալ դելֆինների հետ՝ նախապես ամրագրելով ժամը։",
      ru: "Уникальное шоу с акробатическими трюками, танцами и даже рисованием дельфинов. По желанию можно заказать настоящее плавание с дельфинами, забронировав время заранее.",
      en: "A unique show featuring acrobatic tricks, dancing and even dolphin painting. Real swimming with dolphins is available too, by pre-booked time slot.",
    },
    full: {
      hy: "ԴԵԼՖԻՆԱՐԻՈՒՄ ՇԱՐՄ ԷԼ ՇԵՅԽՈՒՄ\n\nԵզակի շոու դելֆինների մասնակցությամբ, որտեղ կտեսնեք նրանց ակրոբատիկ հնարքները, պարերը և նույնիսկ նկարչությունը։ Ներկայացումը տևում է մոտ 50-60 րոպե և կթողնի անմոռանալի տպավորություններ թե՛ երեխաների, թե՛ մեծահասակների մոտ։\n\nԷքսկուրսիայի նկարագրություն.\n• Հարմարավետ, օդորակիչով ավտոբուսով վերցնում ենք ձեզ հյուրանոցից և հասցնում դելֆինարիում։\n• Այնուհետև ձեզ սպասում է շոու-ծրագիր. կտեսնեք, թե ինչպես են դելֆինները կատարում տարբեր հնարքներ, այդ թվում՝ ցատկեր, պարեր և նկարչություն։\n• Ցանկության դեպքում կարող եք պատվիրել լող դելֆինների հետ (նախապես ամրագրելով ժամանակը)։\n• Պրոֆեսիոնալ օպերատորները կպահպանեն ձեր պահերը դելֆինների հետ. ֆոտոները և վիդեոները հնարավոր կլինի ձեռք բերել ներկայացումից հետո։\n\nԷքսկուրսիայի տևողությունը՝ մոտ 2 ժամ, ներառյալ տրանսֆերը և շոուն։",
      ru: "ДЕЛЬФИНАРИЙ В ШАРМ-ЭЛЬ-ШЕЙХЕ\n\nЭто уникальное шоу с участием дельфинов, где вы сможете увидеть их акробатические трюки, танцы и даже рисование. Представление длится около 50-60 минут и оставит незабываемые впечатления как у детей, так и у взрослых.\n\nОписание экскурсии:\n• На комфортабельном автобусе с кондиционером забираем вас из отеля и доставим в дельфинарий.\n• Далее вас ожидает шоу-программа: вы увидите, как дельфины выполняют различные трюки, включая прыжки, танцы и рисование.\n• По желанию вы можете заказать плавание с дельфинами (предварительно забронировав время).\n• Профессиональные операторы запечатлеют ваши моменты с дельфинами; фотографии и видео можно будет приобрести после представления.\n\nПродолжительность экскурсии: около 2 часов, включая трансфер и шоу.",
      en: "DOLPHINARIUM IN SHARM EL SHEIKH\n\nA unique show with dolphins performing acrobatic tricks, dancing, and even painting. The show lasts about 50-60 minutes and leaves unforgettable impressions on both kids and adults.\n\nExcursion description:\n• A comfortable air-conditioned bus picks you up from your hotel and takes you to the dolphinarium.\n• Then enjoy the show: watch dolphins perform tricks, including jumps, dances and painting.\n• Optionally book a swim with the dolphins (pre-booked time slot).\n• Professional camera operators capture your moments with the dolphins; photos and videos can be purchased after the show.\n\nExcursion duration: about 2 hours, including transfer and the show.",
    },
    price: { hy: "Շոու՝ $25 (մինչև 4տ. անվճար, մինչև 8տ. $18) · Լող՝ 15ր $80 / 30ր $105", ru: "Шоу: $25 (до 4 лет бесплатно, до 8 лет $18) · Плавание: 15 мин $80 / 30 мин $105", en: "Show: $25 (under 4 free, under 8 $18) · Swim: 15 min $80 / 30 min $105" },
  },
  {
    id: "aquapark",
    category: "family", icon: "splash",
    title: { hy: "Ջրային պարկ", ru: "Аквапарк", en: "Water park" },
    desc: {
      hy: "32+ ջրասահանք, 9 բացօթյա լողավազան, ռեստորաններ և բարեր՝ ամբողջ ընտանիքի զվարճանքի համար։ Տրանսֆերը հյուրանոցից և հետ ներառված է։",
      ru: "32+ водные горки, 9 открытых бассейнов, рестораны и бары — веселье для всей семьи. Трансфер из отеля и обратно включён.",
      en: "32+ water slides, 9 outdoor pools, restaurants and bars — fun for the whole family. Hotel transfer both ways is included.",
    },
    full: {
      hy: "ՋՐԱՅԻՆ ՊԱՐԿ — ծովային հանգստավայրերի ուրախության գլխավոր մատակարարը\n\nԾրագրում ներառված է.\n– Տրանսֆեր՝ մոտ ժամը 10:00-ին\n– Ջրային պարկը գտնվում է Albatros Aqua Resort հյուրանոցում Շարմ Էլ Շեյխում։ Ներառում է 32+ ջրասահանք, 2 ռեստորան, 6 բար և 9 բացօթյա լողավազան։\n– Տրանսֆեր հյուրանոց՝ մոտ 17:00-ին\n\nԳնի մեջ ներառված է.\n✅ Տրանսֆեր հյուրանոցից/հյուրանոց\n✅ Մուտքի տոմս ջրային պարկ\n\nԳնի մեջ ՉԻ ներառված.\n✖️ Ճաշ ռեստորանում (12:00–14:30) և ոչ ալկոհոլային խմիչքներ (10:00–17:00) — վճարվում են լրացուցիչ (+$10 մեկ մարդու համար)\n\nԱշխատում է ամեն օր՝ 10:00-ից 17:00։\n\nՎերցրու քեզ հետ. գլխարկ, սրբիչ, լողազգեստ, արևապաշտպան ակնոց, արևապաշտպան կրեմ։",
      ru: "АКВАПАРК — главный поставщик веселья на морских курортах\n\nЧто входит в программу экскурсии:\n– Трансфер приблизительно около 10:00\n– Аквапарк расположен в одноимённом отеле Albatros Aqua Resort в Шарм-эль-Шейхе. Включает более 32 водных горок, 2 ресторана, 6 баров и 9 открытых бассейнов.\n– Трансфер в отель приблизительно к 17:00\n\nВ стоимость экскурсии включено:\n✅ Трансфер из / до отеля\n✅ Входной билет на посещение аквапарка\n\nЧто не входит в стоимость:\n✖️ Обед в ресторане с 12:00 до 14:30 и безалкогольные напитки с 10:00 до 17:00 (оплачиваются дополнительно, +$10 за человека)\n\nОрганизовываем экскурсию ежедневно с 10:00 до 17:00.\n\nВозьмите с собой: головной убор, полотенце, купальные принадлежности, солнечные очки, солнцезащитный крем.",
      en: "WATER PARK — the top source of fun at the seaside resorts\n\nWhat's included in the program:\n– Transfer around 10:00\n– The water park is located at the Albatros Aqua Resort hotel in Sharm El Sheikh. It has 32+ water slides, 2 restaurants, 6 bars and 9 outdoor pools.\n– Hotel transfer around 17:00\n\nIncluded in the price:\n✅ Hotel transfer both ways\n✅ Water park entry ticket\n\nNot included:\n✖️ Restaurant lunch from 12:00 to 14:30 and soft drinks from 10:00 to 17:00 (extra charge, +$10 per person)\n\nRuns daily from 10:00 to 17:00.\n\nBring: a hat, towel, swimwear, sunglasses, sunscreen.",
    },
    price: { hy: "Մեծահասակ $40 (all inclusive՝ $50) · 5–11 տ. $20 · Մինչև 4 տ. անվճար · 10:00–17:00", ru: "Взрослый $40 (всё включено $50) · 5–11 лет $20 · До 4 лет бесплатно · 10:00–17:00", en: "Adult $40 (all-inclusive $50) · Ages 5–11 $20 · Under 4 free · 10:00–17:00" },
  },

  /* ---------------- COMBO ---------------- */
  {
    id: "aqua-fun-5in1",
    category: "combo", icon: "burst",
    title: { hy: "Aqua Fun 5-ը-1-ում", ru: "Aqua Fun 5в1", en: "Aqua Fun 5-in-1" },
    desc: {
      hy: "Ապակե հատակով նավակ, պարաշյուտ, բանան, «հաբիկ», արագընթաց նավակ և տրանսֆեր։",
      ru: "Лодка с прозрачным дном, парашют, банан, таблетка, скоростная лодка и трансфер.",
      en: "Glass-bottom boat, parasailing, banana boat, sofa ride, speedboat and transfer.",
    },
    price: { hy: "$35 մեկ մարդու · $60 երկուսի համար (միասին մինչև 140 կգ)", ru: "$35 за человека · $60 за двоих (вдвоём до 140 кг)", en: "$35 per person · $60 for two (up to 140 kg combined)" },
  },
  {
    id: "aqua-day-4in1",
    category: "combo", icon: "burst",
    title: { hy: "Aqua Day", ru: "Aqua Day", en: "Aqua Day" },
    desc: {
      hy: "Առավոտյան ակտիվ արկած ամբողջ ընտանիքի համար. ապակե հատակով նավակ, պարաշյուտ, բանան, «հաբիկ» և արագընթաց նավակ։ Ներառված է տրանսֆեր հյուրանոցից։",
      ru: "Активное утро для всей семьи: лодка с прозрачным дном, парашют, банан, таблетка и скоростная лодка. Включён трансфер из отеля.",
      en: "An active morning for the whole family: glass-bottom boat, parasailing, banana boat, sofa ride and speedboat. Hotel transfer included.",
    },
    full: {
      hy: "AQUA DAY — երբ հանգստանում են ԲՈԼՈՐԸ!\n\nԵրեխաները ճչում են երջանկությունից, մեծերը՝ ադրենալինից, և ոչ ոք չի ուզում տուն վերադառնալ!\n\nՀամեմատած ընդամենը $30 գնով դու ստանում ես մի քանի արկածներ մեկ առավոտվա ընթացքում.\nԺամը 08:30-ից 13:00.\n— Ապակե հատակով նավակ — երեխաները հիացած են, մեծերն էլ նկարահանում են՝ «Նայի՛ր, դա Nemo-ն է»\n— Պարաշյուտ — բարձրանում ենք երկինք, գոռում ենք «ՄԱՄԱ՛» և սելֆի ենք անում ամպերի հետ\n— Բանան — այստեղ գոռում են բոլորը, նույնիսկ նրանք, ովքեր կարծում էին, թե «չեն վախենա»\n— «Հաբիկ» — ատրակցիոն նրանց համար, ովքեր չեն վախենում թրջվել ու երջանիկ լինել\n— Արագընթաց նավակ — ահա հենց այստեղ էլ հայրիկները ավելի բարձր են գոռում, քան իրենց երեխաները!\n\nԳինը՝ 30$ մեկի համար, 50$ երկուսի համար (իդեալական զույգերի, ընկերուհիների կամ ծնող+երեխա համար)։ Քաշը երկուսի համար՝ միասին մինչև 140 կգ։\n\nՏրանսֆեր հյուրանոցից — կվերցնենք, կբերենք, և դուք նույնիսկ չեք նկատի, թե ինչքան արագ եք սիրահարվել ծովին և այս օրվան։",
      ru: "AQUA DAY — когда отдыхают ВСЕ!\n\nДети пищат от счастья, взрослые визжат от адреналина — и никто не хочет домой!\n\nВсего за 30$ ты получаешь 5 приключений за одно утро! С 08:30 до 13:00:\n— Лодка со стеклянным дном — дети залипают, взрослые снимают: «Смотри, это Немо!»\n— Парашют — поднимаемся в небо, орём «МАМА!» и делаем селфи с облаками\n— Банан — здесь кричат все! Даже те, кто думал, что «не испугается»\n— Таблетка — аттракцион для тех, кто не боится быть мокрым и счастливым\n— Скоростная лодка — вот тут папы кричат громче детей!\n\nЦена сказки: 30$ — за одного, 50$ — вдвоём (идеально для пары, подружек или родитель + ребёнок). Вес на двоих — до 140 кг.\n\nТрансфер с отеля — заберём, привезём, и вы даже не заметите, как быстро влюбились в море и этот день!",
      en: "AQUA DAY — when EVERYONE has fun!\n\nKids squeal with joy, adults scream from adrenaline — and nobody wants to go home!\n\nFor just $30 you get 5 adventures in one morning! From 08:30 to 13:00:\n— Glass-bottom boat — kids are glued to the glass, adults film: 'Look, it's Nemo!'\n— Parasailing — up into the sky, shouting 'MOM!' and taking selfies with the clouds\n— Banana boat — everyone screams here, even the ones who thought they 'wouldn't be scared'\n— Sofa ride — for those not afraid of getting wet and happy\n— Speedboat — this is where dads scream louder than their kids!\n\nPrice: $30 solo, $50 for two (perfect for a couple, friends, or a parent + child). Combined weight limit for two: 140 kg.\n\nHotel transfer included — we'll pick you up and bring you back, and you won't even notice how fast you fell in love with the sea and this day!",
    },
    price: { hy: "$30 մեկ մարդու · $50 երկուսի համար (միասին մինչև 140 կգ) · 08:30–13:00", ru: "$30 за человека · $50 за двоих (вдвоём до 140 кг) · 08:30–13:00", en: "$30 per person · $50 for two (up to 140 kg combined) · 08:30–13:00" },
  },
  {
    id: "fun-day-3in1",
    category: "combo", icon: "burst",
    title: { hy: "Fun Day 3-ը-1-ում", ru: "Fun Day 3в1", en: "Fun Day 3-in-1" },
    desc: {
      hy: "Սուզվածք, պարաշյուտ, բանան և տրանսֆեր՝ մեկ ակտիվ առավոտվա մեջ։",
      ru: "Дайвинг, полёт на парашюте, банан и трансфер — всё за одно активное утро.",
      en: "Diving, parasailing, a banana boat and transfer — all in one active morning.",
    },
    full: {
      hy: "ԿՈՄԲՈ ՏՈՒՐԵՐ ԴԱՅՎԻՆԳՈՎ — Fun Day 3-ը-1-ում\n\n🤿 դայվինգ\n🪂 թռիչք պարաշյուտով\n🍌 զբոսանք բանանով\n🚘 տրանսֆեր\n\nԱմեն ինչ ներառված է. Էքսկուրսիայի ժամանակը՝ 09:00-ից 13:00։",
      ru: "КОМБО ТУРЫ С ДАЙВИНГОМ — Fun Day 3в1\n\n🤿 дайвинг\n🪂 полёт на парашюте\n🍌 катание на банане\n🚘 трансфер\n\nВсё включено. Время экскурсии с 09:00 до 13:00.",
      en: "COMBO TOURS WITH DIVING — Fun Day 3-in-1\n\n🤿 diving\n🪂 parasailing flight\n🍌 banana boat ride\n🚘 transfer\n\nAll included. Excursion time: 09:00 to 13:00.",
    },
    price: { hy: "$45 մեկ մարդու համար · 09:00–13:00", ru: "$45 за человека · 09:00–13:00", en: "$45 per person · 09:00–13:00" },
  },
  {
    id: "bomba-8in1",
    category: "combo", icon: "burst",
    title: { hy: "Բոմբա 8-ը-1-ում", ru: "Бомба 8в1", en: "Bomba 8-in-1" },
    desc: {
      hy: "Ամենահագեցած տուրը՝ քվադրոցիկլ և ուղտի հեծում անապատում, ապա ծովափ՝ պարաշյուտով, բանանով, արագընթաց նավակով, սնորկլինգով և ապակե հատակով նավակով։ Ավարտը՝ ճաշ ծովափնյա ռեստորանում (ձուկ/շիշքաբաբ/պիցցա ընտրությամբ)։ Ներառված է ապահովագրություն և ռուսալեզու գիդ։",
      ru: "Самая насыщенная экскурсия: квадроцикл и верблюд в пустыне, затем пляж с парасейлингом, бананом, скоростным катером, снорклингом и лодкой со стеклянным дном. Завершение — обед в ресторане на пляже (рыба/шашлык/пицца на выбор). Включены страховка и русскоговорящий гид.",
      en: "The most packed excursion: quad bike and camel ride in the desert, then the beach with parasailing, banana boat, speedboat, snorkeling and a glass-bottom boat. Finishes with lunch at a beach restaurant (fish/kebab/pizza). Insurance and a Russian-speaking guide included.",
    },
    full: {
      hy: "ԲՈՄԲԱ 8-Ը-1-ՈՒՄ\n\nՄենք պատրաստել ենք ձեզ համար մի բան անհավատալի, հուզիչ և անմոռանալի✅✅✅\n\n✅ Տրանսֆեր հյուրանոցից\n✅ Ապահովագրություն գործում է\n✅ Ռուսալեզու գիդ\n\n➡️ Էքստրիմ Շարմ — Շարմ Էլ Շեյխի ամենահագեցած էքսկուրսիան։ Նրանց համար, ովքեր չեն սիրում մեկ տեղում նստել և ուզում են փորձել անապատի և Կարմիր ծովի ողջ էքստրիմը! Իսկ եթե ունեք քիչ օրեր՝ բոլոր զվարճություններն ասպլացնելու հնարավորություն։\n\n➡️ Ձեզ սպասվում է անապատում.\n✅ Քվադրոցիկլով ուղևորություն\n✅ Ուղտի հեծում\n\n➡️ Հետո մենք գնում ենք ծովափ, որտեղ վայելում ենք.\n✅ Պարասեյլինգ (պարաշյուտ յախտից)\n✅ Բանան\n✅ Արագընթաց կատեր\n✅ Սնորկլինգ\n✅ Էքսկուրսիա ապակե հատակով նավակով\n\n➡️ Այնուհետև գնում ենք ծովափնյա ռեստորան, որտեղ ձեզ սպասում է.\n✅ Ճաշ ընտրությամբ (ձուկ/շիշքաբաբ/պիցցա)\n\n✅ Դրանից հետո ձեզ կվերադարձնեն հյուրանոց։\n\n➡️ Էքսկուրսիան՝ 08:00-ից 14:00։",
      ru: "БОМБА 8В1\n\nРебята, мы подготовили для вас что-то невероятное, эмоциональное и незабываемое✅✅✅\n\n✅ Трансфер из отеля\n✅ Страховка действует\n✅ Русскоговорящий гид\n\n➡️ Экстрим Шарм — самая насыщенная экскурсия в Шарм-эль-Шейхе. Для тех, кто не любит сидеть на одном месте, а хочет испытать весь экстрим пустыни и Красного моря! А также, если у вас не много дней, чтобы попробовать все развлечения!\n\n➡️ Вас ожидает в пустыне:\n✅ катание на квадроциклах\n✅ на верблюде\n\n➡️ После чего мы отправляемся к морю на пляж, там катаемся на:\n✅ парасейлинг (парашют с яхты)\n✅ банан\n✅ скоростной катер\n✅ снорклинг\n✅ экскурсия на лодке со стеклянным дном\n\n➡️ Потом отправимся в ресторан на пляже, где вас ждёт:\n✅ обед на выбор (рыба/шашлык/пицца)\n\n✅ После чего вас отвезут обратно в отель.\n\n➡️ Экскурсия с 08:00 до 14:00.",
      en: "BOMBA 8-IN-1\n\nWe've prepared something incredible, emotional and unforgettable for you✅✅✅\n\n✅ Hotel transfer\n✅ Insurance included\n✅ Russian-speaking guide\n\n➡️ Extreme Sharm — the most packed excursion in Sharm El Sheikh. For those who don't like sitting still and want the full extreme of the desert and the Red Sea! Also great if you have few days and want to try everything.\n\n➡️ In the desert you'll enjoy:\n✅ quad biking\n✅ camel riding\n\n➡️ Then off to the beach, where you'll enjoy:\n✅ parasailing (from a boat)\n✅ banana boat\n✅ speedboat\n✅ snorkeling\n✅ a glass-bottom boat tour\n\n➡️ Then a beach restaurant awaits with:\n✅ lunch of your choice (fish/kebab/pizza)\n\n✅ After that, you'll be taken back to your hotel.\n\n➡️ Excursion time: 08:00 to 14:00.",
    },
    price: { hy: "$50 մեկ մարդու · $80 երկուսի համար (միասին մինչև 140 կգ) · 08:00–14:00", ru: "$50 за человека · $80 за двоих (вдвоём до 140 кг) · 08:00–14:00", en: "$50 per person · $80 for two (up to 140 kg combined) · 08:00–14:00" },
  },
  {
    id: "adventure-7in1",
    category: "combo", icon: "burst",
    title: { hy: "Adventure — 7 էքսկուրսիա 1 օրում", ru: "Adventure — 7 экскурсий за 1 день", en: "Adventure — 7 tours in 1 day" },
    desc: {
      hy: "Ամեն ինչ ներառված. արագընթաց նավակ, պարաշյուտ, բանան, ուղտի հեծում, քվադրոցիկլ անապատում, սուզվածք ափից և տրանսֆեր։ Իդեալական է ադրենալինի սիրահարների համար, ովքեր ուզում են զգալ ամեն ինչ մեկ օրում։",
      ru: "Всё включено: скоростная лодка, парашют, банан, катание на верблюдах, квадроциклы в пустыне, дайвинг с пляжа и трансфер. Отличная возможность для любителей экстрима ощутить весь спектр эмоций за один день.",
      en: "All included: speedboat, parasailing, banana boat, camel rides, desert quad biking, beach diving and transfer. A great chance for thrill-seekers to feel it all in a single day.",
    },
    full: {
      hy: "Adventure — 7 էքսկուրսիա 1 օրում\n\nԱմեն ինչ ներառված է🔥🔥🔥\n🚤 Արագընթաց նավակ\n🪂 Պարաշյուտ\n🍌 Ատրակցիոն Բանան\n🐪 Ուղտի հեծում\n🛺🛵 Քվադրոցիկլով ուղևորություն անապատում\n🤿 Դայվինգ ափից\n🚍 Տրանսֆեր\n\n💯 Ադրենալինի սիրահարների համար սա հրաշալի հնարավորություն է զգալու հույզերի ողջ սպեկտրը՝ միաժամանակ տեսնելով Կարմիր ծովի գեղեցկությունը։",
      ru: "Adventure — 7 экскурсий за 1 день\n\nВсё включено🔥🔥🔥\n🚤 Скоростная лодка\n🪂 Парашют\n🍌 Аттракцион Банан\n🐪 Катания на верблюдах\n🛺🛵 Катания на квадроциклах в пустыне\n🤿 Дайвинг с пляжа\n🚍 Трансфер\n\n💯 Для любителя экстрима это отличная возможность ощутить весь спектр эмоций и при этом увидеть красоту Красного моря.",
      en: "Adventure — 7 excursions in 1 day\n\nEverything included🔥🔥🔥\n🚤 Speedboat\n🪂 Parasailing\n🍌 Banana boat ride\n🐪 Camel rides\n🛺🛵 Desert quad biking\n🤿 Diving from the beach\n🚍 Transfer\n\n💯 A great chance for thrill-seekers to feel the full range of emotions while also seeing the beauty of the Red Sea.",
    },
    price: { hy: "$70 մեկ մարդու համար", ru: "$70 за человека", en: "$70 per person" },
  },

  /* ---------------- HISTORICAL ---------------- */
  {
    id: "moses-mountain-sunrise",
    category: "historical", icon: "landmark",
    title: { hy: "Լուսաբաց Մովսեսի լեռան վրա + Սբ Եկատերինայի վանք", ru: "Гора Моисея + монастырь Св. Екатерины", en: "Mount Moses sunrise + St. Catherine's Monastery" },
    desc: {
      hy: "Գիշերային բարձրացում սուրբ Սինայի լեռը (2285մ), որտեղ, ըստ ավանդության, Մովսեսը ստացավ 10 պատվիրանները։ Գագաթին՝ հիասքանչ լուսաբաց, այնուհետև իջնում և այցելություն աշխարհի հնագույն գործող վանքերից մեկը։",
      ru: "Ночное восхождение на священную гору Синай (2285 м), где, по преданию, Моисей получил 10 заповедей. На вершине — незабываемый рассвет, затем спуск и посещение одного из древнейших действующих монастырей мира.",
      en: "A night climb up sacred Mount Sinai (2,285 m), where tradition says Moses received the Ten Commandments. An unforgettable sunrise at the summit, then a descent and a visit to one of the world's oldest working monasteries.",
    },
    full: {
      hy: "ԼԵՌ ՄՈՎՍԵՍ + ՍՈՒՐԲ ԵԿԱՏԵՐԻՆԱՅԻ ՎԱՆՔ\n\nԳիշերային էքսկուրսիա Շարմ Էլ Շեյխից։ Միայն չորեքշաբթի, ուրբաթ և կիրակի։ Ժամը 20:00-ից մինչև 14:00 հաջորդ օրը։\n\nԶգա Սինայի էներգիան, բարձրացիր այնտեղ, որտեղ, ըստ ավանդության, մարգարե Մովսեսը ստացավ 10 պատվիրանները։ Հոյակապ լուսաբաց, լեռների լռություն և եզակի հոգևոր վայր — տպավորություններ, որոնք կմնան քեզ հետ ընդմիշտ։\n\nԾրագիր.\n✅ 20:00 — մեկնում հյուրանոցից\n✅ Տեղափոխում լեռան ստորոտ, ռուսալեզու գիդի ուղեկցությամբ\n✅ Գիշերային բարձրացում Մովսեսի լեռը (2285 մ)\n– Արևածագ — իսկական կախարդանք գագաթին\n✅ Իջնում և այցելություն Սուրբ Եկատերինայի վանք\n– Աշխարհի հնագույն գործող վանքերից մեկը\n✅ Վերադարձ Շարմ և տրանսֆեր հյուրանոց, մոտավորապես 13:30–14:00-ին\n\nԻնչ է ներառված.\n– Տրանսֆեր հյուրանոցից և հետ\n– Ռուսալեզու գիդի ծառայություններ\n– Այցելություն վանք\n– Մուտքի տոմսեր\n\nԻնչ վերցնել քեզ հետ.\n– Հարմար կոշիկ\n– Տաք հագուստ (գագաթին զով է)\n– Ջուր, նախուտեստ, լապտեր",
      ru: "ГОРА МОИСЕЯ + МОНАСТЫРЬ СВЯТОЙ ЕКАТЕРИНЫ\n\nНочная экскурсия из Шарм-эль-Шейха. Только в среду, пятницу и воскресенье. С 20:00 до 14:00 следующего дня.\n\nПочувствуй энергию Синая, поднимись туда, где, по преданию, пророк Моисей получил 10 заповедей. Величественный рассвет, тишина гор и уникальное духовное место — впечатления, которые останутся с тобой навсегда.\n\nПрограмма тура:\n✅ 20:00 — выезд из отеля\n✅ Переезд к подножию горы, сопровождение русскоязычного гида\n✅ Ночное восхождение на гору Моисея (2 285 м)\n– Восход солнца — настоящая магия на вершине\n✅ Спуск и посещение монастыря Святой Екатерины\n– Один из древнейших действующих монастырей в мире\n✅ Возвращение в Шарм и трансфер в отель, ориентировочно в 13:30–14:00\n\nЧто включено:\n– Трансфер из отеля и обратно\n– Услуги русскоязычного гида\n– Посещение монастыря\n– Входные билеты\n\nЧто взять с собой:\n– Удобную обувь\n– Тёплую одежду (на вершине прохладно)\n– Воду, перекус, фонарик",
      en: "MOUNT MOSES + ST. CATHERINE'S MONASTERY\n\nA night excursion from Sharm El Sheikh. Wednesday, Friday and Sunday only. From 20:00 to 14:00 the next day.\n\nFeel the energy of Sinai and climb to where, tradition says, the prophet Moses received the Ten Commandments. A majestic sunrise, mountain silence, and a unique spiritual place — memories that will stay with you forever.\n\nTour program:\n✅ 20:00 — depart from the hotel\n✅ Drive to the foot of the mountain with a Russian-speaking guide\n✅ Night climb up Mount Moses (2,285 m)\n– Sunrise — real magic at the summit\n✅ Descent and a visit to St. Catherine's Monastery\n– One of the oldest working monasteries in the world\n✅ Return to Sharm and hotel transfer, around 13:30–14:00\n\nIncluded:\n– Hotel transfer both ways\n– A Russian-speaking guide\n– Monastery visit\n– Entry tickets\n\nWhat to bring:\n– Comfortable shoes\n– Warm clothing (it's cool at the summit)\n– Water, a snack, a flashlight",
    },
    price: { hy: "$30 մեկ մարդու · Միայն չորեքշաբթի, ուրբաթ, կիրակի · 20:00–14:00 (հաջորդ օր)", ru: "$30 за человека · Только среда, пятница, воскресенье · 20:00–14:00 (на след. день)", en: "$30 per person · Wed, Fri, Sun only · 20:00–14:00 (next day)" },
  },
  {
    id: "st-catherine-monastery",
    category: "historical", icon: "landmark",
    title: { hy: "Սուրբ Եկատերինայի վանք", ru: "Монастырь Св. Екатерины", en: "St. Catherine's Monastery" },
    desc: {
      hy: "Աշխարհի ամենահին գործող վանքերից մեկը՝ հարուստ պատմությամբ և հանգիստ մթնոլորտով, առանց գիշերային բարձրացման։",
      ru: "Один из старейших действующих монастырей мира с богатой историей и умиротворяющей атмосферой, без ночного восхождения.",
      en: "One of the world's oldest working monasteries, rich in history and quiet atmosphere, without the night climb.",
    },
    price: { hy: "$30 մեկ մարդու համար", ru: "$30 за человека", en: "$30 per person" },
  },
  {
    id: "cairo-bus",
    category: "historical", icon: "landmark",
    title: { hy: "Կահիրե (ավտոբուսով)", ru: "Каир на автобусе", en: "Cairo by bus" },
    desc: {
      hy: "Գիշերային մեկնում Շարմից, ուղեկցությամբ ոստիկանության և գիդի։ Ծրագրում՝ Եգիպտական ազգային թանգարան, ճաշ ռեստորանում, Գիզայի բուրգեր և Սֆինքս, հնարավորություն՝ զբոսանք Նեղոսով (առանձին վճարով)։",
      ru: "Ночной выезд из Шарма в сопровождении полиции и гида. В программе: Египетский национальный музей, обед в ресторане, пирамиды Гизы и Сфинкс, по желанию — прогулка на лодке по Нилу (за доплату).",
      en: "A night departure from Sharm with police and guide escort. Includes the Egyptian National Museum, lunch, the Pyramids of Giza and the Sphinx, with an optional Nile boat ride (extra charge).",
    },
    full: {
      hy: "ԷՔՍԿՈՒՐՍԻԱ ԴԵՊԻ ԿԱՀԻՐԵ ԱՎՏՈԲՈՒՍՈՎ ՇԱՐՄ ԷԼ ՇԵՅԽԻՑ\n\nՀագեցած ճամփորդություն դեպի Եգիպտոսի հին հրաշալիքները!\n\nՄեկնում. երեկոյան, մոտավորապես գիշերվա ժամը 12:00-ին\nՎերադարձ. հաջորդ օրվա ուշ երեկոյան (մոտ գիշերվա ժամը 01:00-ին)\nՏրանսպորտ. հարմարավետ զբոսաշրջային ավտոբուս՝ օդորակիչով, ոստիկանության և գիդի ուղեկցությամբ\nՃանապարհի ժամանակը. մոտ 6–7 ժամ (մեկ ուղղությամբ)\n\nԳնի մեջ մտնում է.\n• Տրանսֆեր երկու ուղղությամբ\n• Մուտքի տոմսեր ըստ ծրագրի\n• Ռուսալեզու գիդի ծառայություններ\n• Ճաշ ռեստորանում\n• Այցելություն պապիրուսի ինստիտուտ կամ բուրավետ յուղերի խանութ\n\nԾրագիր.\n1. Մեկնում հյուրանոցից — գիշերային տրանսֆեր Շարմից Կահիրե հարմարավետ ավտոբուսով, ճանապարհին 1-2 կանգառ հանգստի համար\n2. Ժամանում Կահիրե — նախաճաշ (ցանկության դեպքում կարելի է վերցնել հյուրանոցից կամ գնել ճանապարհին)\n3. Եգիպտական ազգային թանգարան — ակնարկային էքսկուրսիա գիդի հետ, Թութանհամոնի գանձերը, փարավոնների մումիաներ, հին արտեֆակտներ, սարկոֆագներ, արձաններ և այլն\n4. Ճաշ ռեստորանում — եգիպտական խոհանոց, խմիչքներ լրացուցիչ վճարով\n5. Գիզայի բուրգեր և Սֆինքս — Քեոպսի, Քեֆրենի և Միկերինի մեծ բուրգերը, պանորամային հրապարակ լուսանկարների համար, Մեծ Սֆինքսի արձանը, ցանկության դեպքում՝ ուղտի հեծում (առանձին վճարով)\n6. Ցանկության դեպքում. զբոսանք Նեղոսով նավակով (լրացուցիչ վճարով) ~$10\n7. Մեկնում Շարմ Էլ Շեյխ — վերադարձ հյուրանոց երեկոյան, հոգնած, բայց երջանիկ!\n\nԽորհուրդներ.\n• Պարտադիր վերցրու անձնագիրը\n• Հարմար հագուստ և կոշիկ\n• Ջուր, նախուտեստ, հեռախոսի լիցքավորիչ\n• Գլխարկ և արևապաշտպան ակնոց",
      ru: "ЭКСКУРСИЯ В КАИР НА АВТОБУСЕ ИЗ ШАРМ-ЭЛЬ-ШЕЙХА\n\nНасыщенное путешествие к древним чудесам Египта!\n\nВыезд: вечером, примерно в 12:00 ночи\nВозвращение: поздно вечером следующего дня (около 01:00 ночи)\nТранспорт: комфортабельный туристический автобус с кондиционером, в сопровождении полиции и гида\nВремя в пути: около 6–7 часов (в одну сторону)\n\nВходит в стоимость:\n• Трансфер туда-обратно\n• Входные билеты по программе\n• Услуги русскоговорящего гида\n• Обед в ресторане\n• Посещение института папируса или магазина ароматических масел\n\nПрограмма тура:\n1. Выезд из отеля — ночной трансфер из Шарма в Каир на удобном автобусе, по пути 1–2 остановки для отдыха\n2. Прибытие в Каир — завтрак (по желанию — можно взять с собой из отеля или купить по дороге)\n3. Египетский национальный музей — обзорная экскурсия с гидом, сокровища Тутанхамона, мумии фараонов, древние артефакты, саркофаги, статуи и многое другое\n4. Обед в ресторане — египетская кухня, напитки за дополнительную плату\n5. Пирамиды Гизы и Сфинкс — великие пирамиды Хеопса, Хефрена и Микерина, панорамная площадка для фото, статуя Великого Сфинкса, дополнительно можно покататься на верблюде (оплачивается отдельно)\n6. По желанию: прогулка по Нилу на лодке (за доп. плату) ~$10\n7. Отправление в Шарм-эль-Шейх — возвращение в отель вечером, уставшие, но счастливые!\n\nСоветы:\n• Обязательно взять с собой паспорт\n• Удобную одежду и обувь\n• Воду, перекус, зарядку для телефона\n• Головной убор и солнцезащитные очки",
      en: "CAIRO EXCURSION BY BUS FROM SHARM EL SHEIKH\n\nA packed journey to Egypt's ancient wonders!\n\nDeparture: in the evening, around midnight\nReturn: late the following evening (around 01:00 at night)\nTransport: a comfortable air-conditioned tour bus, escorted by police and a guide\nTravel time: about 6–7 hours (one way)\n\nIncluded:\n• Round-trip transfer\n• Entry tickets per the program\n• A Russian-speaking guide\n• Restaurant lunch\n• A visit to the papyrus institute or an aromatic oils shop\n\nTour program:\n1. Depart the hotel — an overnight transfer from Sharm to Cairo on a comfortable bus, with 1–2 rest stops along the way\n2. Arrival in Cairo — breakfast (bring your own from the hotel or buy along the way)\n3. The Egyptian National Museum — a guided tour, Tutankhamun's treasures, pharaohs' mummies, ancient artifacts, sarcophagi, statues and more\n4. Restaurant lunch — Egyptian cuisine, drinks at extra cost\n5. The Pyramids of Giza and the Sphinx — the great pyramids of Khufu, Khafre and Menkaure, a panoramic photo spot, the Great Sphinx statue, an optional camel ride (extra charge)\n6. Optional: a Nile boat ride (extra charge) ~$10\n7. Depart for Sharm El Sheikh — return to the hotel in the evening, tired but happy!\n\nTips:\n• Bring your passport\n• Comfortable clothes and shoes\n• Water, a snack, a phone charger\n• A hat and sunglasses",
    },
    price: { hy: "Մեծահասակ $60 · Երեխա $50", ru: "Взрослый $60 · Ребёнок $50", en: "Adult $60 · Child $50" },
  },
  {
    id: "cairo-bus-grand-museum",
    category: "historical", icon: "landmark",
    title: { hy: "Կահիրե + Մեծ եգիպտական թանգարան (ավտոբուսով)", ru: "Каир + Гранд музей на автобусе", en: "Cairo + Grand Egyptian Museum by bus" },
    desc: {
      hy: "Դասական Կահիրեի տուրին ավելացած է այցելություն նոր Մեծ եգիպտական թանգարան։ Հասանելի է նաև փոքր խմբով ֆորմատ։",
      ru: "К классическому туру по Каиру добавлено посещение нового Гранд Египетского музея. Также доступен формат мини-группы.",
      en: "The classic Cairo tour plus a visit to the new Grand Egyptian Museum. A small-group format is also available.",
    },
    price: { hy: "Մեծահասակ $90 · Երեխա $80 · Փոքր խումբ՝ $115 / $105", ru: "Взрослый $90 · Ребёнок $80 · Мини-группа $115 / $105", en: "Adult $90 · Child $80 · Small group $115 / $105" },
  },
  {
    id: "cairo-by-plane",
    category: "historical", icon: "plane",
    title: { hy: "Կահիրե (ինքնաթիռով)", ru: "Каир на самолёте", en: "Cairo by plane" },
    desc: {
      hy: "Կոմպակտ ֆորմատ նրանց համար, ովքեր ուզում են տեսնել Գիզայի բուրգերը՝ չկորցնելով ամբողջ արձակուրդը ճանապարհին։ Թռիչքը՝ ~40 րոպե, ուղեկցում՝ պատմաբան-գիդ Կահիրեում։ Երկարությունը՝ մոտ 16 ժամ։ Անհրաժեշտ է վիզա-կնիք օդանավակայանում։ Խորհուրդ է տրվում ամրագրել նախապես։",
      ru: "Компактный формат для тех, кто хочет увидеть пирамиды Гизы, не жертвуя всем отпуском на дорогу. Перелёт ~40 минут, в Каире — гид-историк. Длительность около 16 часов. Нужна виза-марка в аэропорту. Рекомендуем бронировать заранее.",
      en: "A compact format for seeing the Pyramids of Giza without spending your whole trip on the road. About a 40-minute flight, with a historian guide in Cairo. Roughly 16 hours total. A visa stamp is needed at the airport. Advance booking is recommended.",
    },
    full: {
      hy: "ԿԱՀԻՐԵ ԻՆՔՆԱԹԻՌՈՎ ՇԱՐՄ ԷԼ ՇԵՅԽԻՑ\n\nՏուրի տեսակ. խմբակային։ Ցանկության դեպքում կարելի է պատվիրել անհատական։\n\nՄեկնման օրերը ճշտել նախապես։ Տևողությունը՝ 16 ժամ, սկսած 05:00-ից մինչև 21:00։\n\n❗️Ուշադրություն! Եգիպտոսի ցանկացած քաղաք Սինայի թերակղզուց դուրս այցելելու համար (Հուրգադա, Կահիրե, Ալեքսանդրիա, Լուքսոր և այլն) վիզան պետք է գնել օդանավակայանում՝ ժամանելուն պես։ Այս էքսկուրսիան անհրաժեշտ է ամրագրել մի քանի օր առաջ։\n\nԵգիպտոսի յուրաքանչյուր երկրպագու պարտավոր է այցելել Գիզայի բուրգերը։ Նրանց համար, ովքեր ուզում են առավելագույնս սեղմ ճամփորդություն, առաջարկում ենք ինքնաթիռով Կահիրե։ Ծրագիրը դասական է, բայց շատ հագեցած։\n\n⬇️ Ծրագիր.\n🔻 Ժամը 05:00-ից՝ տրանսֆեր հավաքում է զբոսաշրջիկներին\n🔻 Օդանավակայանում գիդը կնստեցնի ինքնաթիռ, առանց լրացուցիչ ծախսերի, գլխավորը՝ ունենալ վիզա և անձնագրի բնօրինակ\n🔻 Թռիչքը տևում է մոտ 40 րոպե\n🔻 Ժամանելուն պես Կահիրեում ձեզ կդիմավորի մեր գիդ-պատմաբանը։ Առաջինը ծրագրում՝ Կահիրեի ազգային թանգարան Թահրիր հրապարակում\n🔻 Այնուհետև՝ ճաշ ազգային եգիպտական ուտեստներից։ Ցանկության դեպքում կարող եք գնալ Նեղոսով ռեստորան (լրացուցիչ վճարով)\n🔻 Գիզայի բուրգերի և Սֆինքսի դիտում\n🔻 Այցելություն պապիրուսի և յուղերի թանգարան\n🔻 Տրանսֆեր օդանավակայան, վերադարձ Շարմ Էլ Շեյխ մոտավորապես 21:00-ին\n\n✅ Գնի մեջ մտնում է. թռիչքի տոմսեր Շարմ-Կահիրե-Շարմ, բոլոր անհրաժեշտ տրանսֆերները, ռուսալեզու գիդի ծառայություններ, մուտքի տոմսեր, ճաշ ռեստորանում։\n\n❌ Չի մտնում. մուտք բուրգերի ներսը, զբոսանք Նեղոսով, խմիչքներ ճաշի ժամանակ, անձնական ծախսեր։\n\n‼️ Վերցնել քեզ հետ. անձնագրի բնօրինակ՝ վիզայով, հարմար հագուստ և կոշիկ, արևապաշտպան միջոցներ, սնունդ ճանապարհի համար։",
      ru: "КАИР НА САМОЛЁТЕ ИЗ ШАРМ ЭЛЬ ШЕЙХА\n\nТип экскурсии: групповая. По желанию можно заказать индивидуально.\n\nДни выезда уточняйте заранее. Длительность 16 часов, начиная с 05:00 до 21:00.\n\n❗️Обратите внимание! Визу для посещения любого города Египта вне Синайского полуострова (Хургада, Каир, Александрия, Луксор и др.) надо покупать в аэропорту сразу по прилёту. Бронировать данную экскурсию необходимо за несколько дней.\n\nКаждый уважающий себя поклонник Египта обязательно должен посетить пирамиды в Гизе. А для тех, кто желает сделать своё путешествие максимально компактным, предлагаем отправиться в Каир на самолёте. Программа стандартная, но очень насыщенная.\n\n⬇️ Программа экскурсии:\n🔻 Начиная с 05:00 утра трансфер собирает туристов\n🔻 В аэропорту наш гид посадит в самолёт, без дополнительных затрат, главное иметь при себе визу и оригинал паспорта\n🔻 Полёт длится около 40 минут\n🔻 По прилёту вас встретит наш гид-историк в Каире. Первым в программе — Каирский национальный музей на площади Тахрир\n🔻 Далее по программе обед из национальных египетских блюд. Есть возможность отправиться в ресторан по Нилу на катере за дополнительную плату\n🔻 Обзор пирамид и Сфинкса\n🔻 Посещение музея папируса и масел\n🔻 Трансфер доставит вас в аэропорт, возвращение в Шарм-эль-Шейх примерно к 21:00\n\n✅ В стоимость экскурсии входит: авиабилеты Шарм-Каир-Шарм, все необходимые трансферы, услуги русскоговорящего гида, билеты во все достопримечательности по программе, обед в ресторане.\n\n❌ Не входит: вход внутрь пирамид, прогулка на катере по Нилу, напитки во время обеда, личные расходы.\n\n‼️ Необходимо взять с собой: паспорт-оригинал с визой, удобную одежду из натуральной ткани и обувь, защиту от солнца, еду в дорогу.",
      en: "CAIRO BY PLANE FROM SHARM EL SHEIKH\n\nTour type: group. Can be booked privately on request.\n\nConfirm departure days in advance. Duration: 16 hours, from 05:00 to 21:00.\n\n❗️Note! A visa for visiting any Egyptian city outside the Sinai Peninsula (Hurghada, Cairo, Alexandria, Luxor, etc.) must be purchased at the airport on arrival. This excursion needs to be booked a few days in advance.\n\nEvery Egypt enthusiast should visit the pyramids at Giza. For those who want the most compact trip possible, we offer Cairo by plane. The program is the classic one, but very packed.\n\n⬇️ Program:\n🔻 From 05:00, transfer collects guests\n🔻 At the airport our guide gets you on the flight, no extra cost, just bring your visa and original passport\n🔻 The flight takes about 40 minutes\n🔻 On arrival, our historian guide meets you in Cairo. First on the program — the Egyptian National Museum at Tahrir Square\n🔻 Then lunch of Egyptian dishes. An optional Nile boat restaurant is available at extra cost\n🔻 Viewing the pyramids and the Sphinx\n🔻 A visit to the papyrus and oils museum\n🔻 Transfer to the airport, return to Sharm El Sheikh around 21:00\n\n✅ Included: Sharm-Cairo-Sharm flights, all necessary transfers, a Russian-speaking guide, entry tickets per the program, restaurant lunch.\n\n❌ Not included: entry inside the pyramids, the Nile boat ride, drinks during lunch, personal expenses.\n\n‼️ Bring: original passport with visa, comfortable natural-fabric clothing and shoes, sun protection, food for the road.",
    },
    price: { hy: "Մեծահասակ $225 · Երեխա $215 · Մեծ թանգարանով՝ $270 / $260", ru: "Взрослый $225 · Ребёнок $215 · С Гранд музеем $270 / $260", en: "Adult $225 · Child $215 · With Grand Museum $270 / $260" },
  },
  {
    id: "luxor-valley-kings-plane",
    category: "historical", icon: "plane",
    title: { hy: "Լուքսոր և Թագավորների հովիտ (ինքնաթիռով)", ru: "Луксор и долина царей на самолёте", en: "Luxor & Valley of the Kings by plane" },
    desc: {
      hy: "Ճամփորդություն փարավոնների հետքերով՝ Հին Եգիպտոսի պատմության և հնագիտության համաշխարհային կենտրոն։ Ծրագրում՝ Թագավորների հովիտ, Հաթշեփսուտի տաճար, Կառնակի տաճար և պապիրուսի ցուցահանդես։ Թռիչք՝ ուրբաթ և երեքշաբթի, ~04:30-ին մեկնում հյուրանոցից։",
      ru: "Путешествие по следам фараонов — мировой центр археологии Древнего Египта. В программе: долина царей, храм Хатшепсут, Карнакский храм и выставка папируса. Вылеты по вторникам и пятницам, выезд из отеля около 04:30.",
      en: "A journey in the footsteps of the pharaohs — a world center of Ancient Egyptian archaeology. Includes the Valley of the Kings, Hatshepsut's Temple, Karnak Temple and a papyrus exhibit. Flights on Tuesdays and Fridays, hotel pickup around 04:30.",
    },
    full: {
      hy: "ԼՈՒՔՍՈՐ ԻՆՔՆԱԹԻՌՈՎ ՇԱՐՄ ԷԼ ՇԵՅԽԻՑ\n\n✈️ Երեքշաբթի և ուրբաթ, երբեմն լինում են լրացուցիչ չվերթեր, ճշտեք։\n\nԼուքսորը ճամփորդություն է փարավոնների հետքերով, երազանք հին Եգիպտոսի պատմության և մշակույթի սիրահարների համար։ Աշխարհում չկա ուրիշ քաղաք, որտեղ կենտրոնացած լինի այսքան հին հուշարձան — սա գրեթե մեկ երրորդն է բոլոր պատմական մասունքների, հնագիտության համաշխարհային կենտրոն։\n\n✅ Մոտ 4:30 առավոտյան մեկնում հյուրանոցից ավտոբուսով դեպի օդանավակայան\n✅ Թռիչք Շարմ Էլ Շեյխից ժամը 6-ին, թռիչքի ժամանակը՝ 45 րոպե\n✅ Լուքսորի օդանավակայանում ձեզ կդիմավորի ռուսալեզու գիդ, ով կուղեկցի ողջ էքսկուրսիան\n\n✨ Ծրագրում առաջինը՝ այցելություն Թագավորների հովիտ, «Մեմնոնի կոլոսներ»\n✨ Հաթշեփսուտ թագուհու տաճարի այցելություն\n✨ Քարե իրերի ցուցահանդեսի այցելություն\n✨ Զբոսանք Նեղոսով (առանձին վճարով)\n✨ Զբոսանքից հետո՝ ճաշ\n✨ Կառնակի տաճար\n✨ Պապիրուսի ցուցահանդեսի այցելություն\n\n✅ Թռիչք Լուքսորից՝ ժամը 20:30-ին։ Շարմ Էլ Շեյխի օդանավակայանում ձեզ կդիմավորեն և ավտոբուսով կհասցնեն հյուրանոց։\n\n⚠️ Անհրաժեշտ է վիզա-կնիք (վաճառվում է օդանավակայանում, եթե միանգամից չեք գնել, մենք կօգնենք)։",
      ru: "ЛУКСОР НА САМОЛЁТЕ ИЗ ШАРМ ЭЛЬ ШЕЙХА\n\n✈️ Вторник и пятница, иногда бывают дополнительные рейсы, уточняйте.\n\nЛуксор — это путешествие по следам фараонов, мечта почитателей истории, культуры и всего, с чем связан Древний Египет. В мире нет другого города, где было бы сосредоточено такое огромное количество древних памятников — это почти треть всех исторических реликвий, всемирный центр археологии!\n\n✅ Около 4:30 утра выезд из отеля на автобусе в аэропорт\n✅ Вылет из Шарм-эль-Шейха в 6 утра, время полёта 45 мин.\n✅ В аэропорту Луксора вас встретит русскоговорящий гид, который будет вести всю экскурсию\n\n✨ Первое по программе в Луксоре — посещение долины царей, «колоссов Мемнона»\n✨ Посещение храма царицы Хатшепсут\n✨ Посещение выставки каменных изделий\n✨ Прогулка по Нилу (за отдельную плату)\n✨ После прогулки — обед\n✨ Карнакский храм\n✨ Посещение выставки папируса\n\n✅ Вылет из Луксора в 20:30. В аэропорту Шарм-эль-Шейха вас встретят и отвезут в отель на автобусе.\n\n⚠️ Необходима виза-марка (продаётся в аэропорту, если вы не купили её сразу — мы вам поможем).",
      en: "LUXOR BY PLANE FROM SHARM EL SHEIKH\n\n✈️ Tuesdays and Fridays, sometimes extra flights are added — please check.\n\nLuxor is a journey in the footsteps of the pharaohs, a dream for lovers of history, culture and everything Ancient Egyptian. No other city in the world concentrates so many ancient monuments — almost a third of all historical relics, a world center of archaeology!\n\n✅ Around 4:30 am, hotel pickup by bus to the airport\n✅ Departure from Sharm El Sheikh at 6 am, flight time 45 min.\n✅ At Luxor airport a Russian-speaking guide meets you and leads the whole excursion\n\n✨ First on the program in Luxor — the Valley of the Kings, the 'Colossi of Memnon'\n✨ A visit to the Temple of Queen Hatshepsut\n✨ A visit to a stoneware exhibition\n✨ A Nile boat ride (extra charge)\n✨ Lunch after the walk\n✨ Karnak Temple\n✨ A papyrus exhibition visit\n\n✅ Departure from Luxor at 20:30. You'll be met at Sharm El Sheikh airport and taken to your hotel by bus.\n\n⚠️ A visa stamp is required (sold at the airport; if you haven't bought one already, we'll help).",
    },
    price: { hy: "$280 մեկ մարդու համար", ru: "$280 за человека", en: "$280 per person" },
  },
  {
    id: "jordan-petra-ferry",
    category: "historical", icon: "landmark",
    title: { hy: "Հորդանան — լեգենդար Պետրա (լաստանավով)", ru: "Иордания — легендарная Петра (на пароме)", en: "Jordan — legendary Petra (by ferry)" },
    desc: {
      hy: "Հին քաղաք՝ քանդակված ուղիղ ժայռերի մեջ մոտ 4000 տարի առաջ, ՅՈՒՆԵՍԿՕ-ի ժառանգություն և աշխարհի 7 հրաշալիքներից մեկը։ Անցում լաստանավով Տաբայից Աքաբա, ապա ճանապարհ Վադի Ռամ անապատով և Սիք կիրճով դեպի հայտնի Էլ Խազնա։ Ներառված է գիդ, ապահովագրություն, մուտքի տոմսեր և ճաշ։ Ուշադրություն՝ հասանելի չէ Ուզբեկստանի քաղաքացիների համար։",
      ru: "Древний город, высеченный в скалах около 4000 лет назад, объект ЮНЕСКО и одно из новых чудес света. Переправа на пароме из Табы в Акабу, затем путь через пустыню Вади Рам и каньон Сик к знаменитой Эль-Хазне. Включены гид, страховка, входные билеты и обед. Внимание: недоступно для граждан Узбекистана.",
      en: "An ancient city carved into the rock about 4,000 years ago, a UNESCO site and one of the new Seven Wonders of the World. A ferry crossing from Taba to Aqaba, then a drive through the Wadi Rum desert and the Siq canyon to the famous Treasury. Guide, insurance, entry tickets and lunch included. Note: not available for citizens of Uzbekistan.",
    },
    full: {
      hy: "ԼԵԳԵՆԴԱՐ ՊԵՏՐԱ — հին թագավորության մայրաքաղաք, փորագրված ուղիղ ԺԱՅՌԵՐՈՒՄ մոտ 4000 տարի առաջ! Իր հարուստ պատմության և հազվագյուտ գեղեցկության շնորհիվ, անցյալ դարի վերջում Պետրան ընդգրկվել է ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության ցանկում, իսկ 2007 թվականին ընտրվել է որպես աշխարհի նոր «7 հրաշալիքներից» մեկը 😍\n\n⚠️ ՄԵԿՆՈՒՄ ՉՈՐԵՔՇԱԲԹԻ ԵՎ ՇԱԲԱԹ ԳԻՇԵՐԸ\n\n✅ Ինչ է ներառված.\nՌուսալեզու պրոֆեսիոնալ գիդ\nԱպահովագրություն\nՄուտքի տոմսեր\nՃաշ\nՏրանսֆեր\n\nԾրագիր. «Պետրա (Հորդանան) լաստանավով Շարմ Էլ Շեյխից».\n\n*Ժամը 1:30-ին մեկնում ենք հյուրանոցից։ Ուղևորվում ենք Թաբա նավահանգիստ։ Ճանապարհը՝ մոտ 3 ժամ։\n*Թաբայից լաստանավով ուղևորվում ենք Հորդանանի Աքաբա նավահանգիստ։ Ծովային ճանապարհը տևում է 1 ժամ։ Ճանապարհին վայելում ենք տեսարանը միանգամից երեք երկրների վրա՝ Իսրայել (Էյլաթ քաղաք), Հորդանան (Աքաբա) և Սաուդյան Արաբիա։\n*Ժամանում ենք Աքաբա։ Հորդանանական կողմում ձեզ կդիմավորի ռուսալեզու գիդը, հարմարավետ օդորակիչով ավտոբուսով։ Ճանապարհը դեպի Պետրա անցնում է զարմանահրաշ Վադի Ռամ անապատով։ Մոտ 2 ժամ։\n*Հասնելով հիմնական մասին, կանցնեք գալարուն ճանապարհով Սիք կիրճով, շրջապատված զարմանալի վարդագույն ժայռերով։ Կիրճով ճանապարհը՝ 1200 մետր։\n*Մի շրջադարձից հետո ձեզ կբացվի տեսարան, որը ժամանակին այնքան զարմացրել է շվեյցարացի Բուրխարդին — վեհաշուք Էլ Խազնա, փորագրված ժայռի մեջ։ Այնուհետև կիրճը լայնանում է և բացում գաղտնիքային հին քաղաքը։ Կտեսնեք քարանձավային քաղաք, հին պաշտամունքային կառույցներ, մեծ ամֆիթատրոն, բյուզանդական եկեղեցի, հռոմեական սյունաշարեր և շատ ավելին։\n\nԱյնուհետև՝\n*15:00 ճաշ հյուրանոցում (ներառված է)\n*17:00 վերադարձ Աքաբա\n*18:00 մեկնում Աքաբայից Թաբա լաստանավով\n*00:00 ժամանում Շարմ, վերադարձ հյուրանոց\n\nՈՒՇԱԴՐՈՒԹՅՈՒՆ! Ուզբեկստանի քաղաքացիների համար այս էքսկուրսիան հասանելի չէ։\n\nԳնի մեջ չի մտնում. խմիչքներ։",
      ru: "ЛЕГЕНДАРНАЯ ПЕТРА — древняя столица царства, вырубленная прямо в СКАЛАХ примерно 4000 лет назад! Благодаря своей богатой истории и отличной сохранности памятников, в конце прошлого века Петра была включена в список всемирного наследия ЮНЕСКО, а в 2007 году избрана одним из новых «ЧУДЕС СВЕТА» 😍\n\n⚠️ ВЫЕЗД В СРЕДУ И СУББОТУ НОЧЬЮ\n\n✅ Что включено:\nРусскоговорящий профессиональный гид\nСтраховка\nВходные билеты\nОбед\nТрансфер\n\nПрограмма экскурсии «Петра (Иордания) на пароме из Шарм-эль-Шейха»:\n\n*В 1:30 выезжаем из отеля. Отправляемся в порт города Таба. В дороге часа 3.\n*Из Таба отправляемся на пароме в иорданский порт города Акаба. Путь морем занимает 1 час. По дороге любуемся прекрасным видом сразу на три страны — Израиль (город Эйлат), Иорданию (Акаба) и Саудовскую Аравию.\n*Прибываем в Акабу. На иорданской стороне вас встретит русскоговорящий гид, на комфортабельном автобусе с кондиционером. Дорога в Петру пролегает через удивительную пустыню Вади Рам. Около 2 часов.\n*Прибыв к месту начала основной части экскурсии, вы пройдёте извилистым путём по каньону Сик, окружённому изумительными розовыми скалами. Путь по каньону составляет 1200 метров.\n*За одним из поворотов нам откроется вид, который так поразил в своё время швейцарца Буркхардта, — величественная Эль-Хазна, высеченная в скале. Затем ущелье расширяется и открывает таинственный древний город. Вы увидите пещерный город, выдолбленный в скалах, загадочные культовые сооружения древности, величественный амфитеатр, вмещавший до 8 тысяч зрителей, византийскую церковь, римские колоннады и многое другое.\n\nЗатем:\n*15:00 обед в отеле (входит в стоимость)\n*17:00 возвращение в Акабу\n*18:00 выезд из г. Акабы в г. Табу на пароме\n*00:00 прибытие в Шарм, возвращение в отель\n\nВНИМАНИЕ! Для граждан Узбекистана данная экскурсия недоступна!\n\nВ стоимость не входит: напитки.",
      en: "LEGENDARY PETRA — an ancient kingdom's capital, carved straight into the ROCK about 4,000 years ago! Thanks to its rich history and remarkable preservation, Petra was added to the UNESCO World Heritage list at the end of the last century, and in 2007 was chosen as one of the New Seven Wonders of the World 😍\n\n⚠️ DEPARTS WEDNESDAY AND SATURDAY NIGHT\n\n✅ Included:\nA professional Russian-speaking guide\nInsurance\nEntry tickets\nLunch\nTransfer\n\nTour program 'Petra (Jordan) by ferry from Sharm El Sheikh':\n\n*At 1:30 we leave the hotel, heading to the port of Taba. About a 3-hour drive.\n*From Taba we take a ferry to the Jordanian port of Aqaba. The sea crossing takes 1 hour. Along the way, enjoy views of three countries at once — Israel (Eilat), Jordan (Aqaba) and Saudi Arabia.\n*Arrival in Aqaba. On the Jordanian side a Russian-speaking guide meets you, with a comfortable air-conditioned bus. The road to Petra passes through the amazing Wadi Rum desert. About 2 hours.\n*Arriving at the start of the main part of the excursion, you'll walk through the winding Siq canyon, surrounded by stunning pink rock walls. The canyon path is 1,200 meters long.\n*Around one bend, a view opens up that once amazed the Swiss explorer Burckhardt — the majestic Treasury (Al-Khazneh), carved into the rock. The gorge then widens to reveal the mysterious ancient city. You'll see a cave city carved into the rock, mysterious ancient ritual structures, a grand amphitheater that once held up to 8,000 spectators, a Byzantine church, Roman colonnades and much more.\n\nThen:\n*15:00 lunch at the hotel (included)\n*17:00 return to Aqaba\n*18:00 depart Aqaba for Taba by ferry\n*00:00 arrival in Sharm, return to hotel\n\nATTENTION! This excursion is not available for citizens of Uzbekistan!\n\nNot included: drinks.",
    },
    price: { hy: "$245 մեկ մարդու համար · Մեկնում՝ չորեքշաբթի և շաբաթ գիշեր", ru: "$245 за человека · Выезд в среду и субботу ночью", en: "$245 per person · Departs Wed & Sat at night" },
  },
  {
    id: "jerusalem",
    category: "historical", icon: "landmark",
    title: { hy: "Երուսաղեմ", ru: "Иерусалим", en: "Jerusalem" },
    desc: {
      hy: "Այցելություն սուրբ վայրերին՝ Մեռյալ ծովում լողալու հնարավորությամբ, Ծննդոց տաճար, Ձիթենյաց լեռ, Ողբի պատ, Սուրբ Գերեզմանի տաճար և Չարչախաչ ճանապարհ։ ՌԴ, Ուկրաինայի և Բելառուսի քաղաքացիների համար վիզա պետք չէ։ Ուղեկցվում է եգիպտական ոստիկանության և բանակի կողմից։",
      ru: "Посещение святых мест: купание в Мёртвом море, Храм Рождества Христова, Елеонская гора, Стена плача, Храм Гроба Господня и Крестный путь. Виза не требуется для граждан РФ, Украины и Беларуси. Маршрут контролируется египетской полицией и армией.",
      en: "A visit to the holy sites: swimming in the Dead Sea, the Church of the Nativity, the Mount of Olives, the Wailing Wall, the Church of the Holy Sepulchre and the Via Dolorosa. No visa required for citizens of Russia, Ukraine and Belarus. The route is escorted by Egyptian police and army.",
    },
    full: {
      hy: "⭐️ ԵՐՈՒՍԱՂԵՄ ⭐️\n\nԱմբողջ աշխարհից մարդիկ գալիս են՝ դիպչելու Սրբավայրին և այցելելու Կախարդական վայրերին, թողնելու գրություն, աղոթելու և ցանկություն կատարելու, զգալու մաքրագործում և տեսնելու Իսրայելը 💫\n\nԱյս էքսկուրսիայի համար ՌԴ, Ուկրաինայի և Բելառուսի քաղաքացիների համար վիզա պետք չէ։\n\nՀարմարավետ ավտոբուսով, լիարժեք անվտանգության պայմաններում, ճանապարհը ամբողջությամբ վերահսկվում է եգիպտական ոստիկանության և բանակի կողմից, դուք մեկնում եք Երուսաղեմ🙌\n\nՄեկնում Շարմ Էլ Շեյխից շաբաթը 2 անգամ.\n❗️Երեկոյան մոտ 20:00-ին երկուշաբթիից երեքշաբթի կամ հինգշաբթիից ուրբաթ գիշեր։\nՎերադարձ Շարմ մոտավորապես կեսգիշերին նույն օրը (հնարավոր են աննշան ուշացումներ սահմանին)։\n\nԾրագրում.\n📍 Լող Մեռյալ ծովում (նախապես պատրաստեք լողազգեստ, սրբիչներ, փոխարկվող հագուստ)\n📍 Ծննդոց տաճար (պահպանել dress code)\n📍 Ձիթենյաց լեռ\n📍 Ողբի պատ\n📍 Սուրբ Գերեզմանի տաճար\n📍 Չարչախաչ ճանապարհ\n📍 Ճաշ (ուտելիքը ներառված է գնի մեջ, խմիչքները վճարվում են առանձին)\n\n*Եթե ժամանակացույցը թույլ տա, կլինի կանգառ Հորդանան գետի մոտ։\n\nՎերցրու քեզ հետ ուղևորության համար.\n🔻 Անձնագիր (եգիպտական վիզա-կնիք ՊԵՏՔ ՉԷ)\n🔻 Հարմար հագուստ բնական գործվածքից և հարմար կոշիկ, գլխարկ, արևապաշտպան ակնոց\n🔻 Լողազգեստներ Մեռյալ ծովի և Հորդանան գետի համար. լողազգեստ, շապիկ, սրբիչներ, հիգիենայի պարագաներ\n🔻 Հյուրանոցի ռեսեպշնում նախապես պատվիրել ճանապարհի ճաշարանական տուփեր (հյուրանոցի անվճար ծառայություն)\n🔻 Խորտիկներ, ջուր և այլն\n🔻 Փող անձնական ծախսերի համար",
      ru: "⭐️ ИЕРУСАЛИМ ⭐️\n\nСо всего мира люди едут, чтобы прикоснуться к Святыне и посетить волшебные места, оставить записку, помолиться и загадать желание, испытать очищение и увидеть Израиль 💫\n\nДля посещения данной экскурсии виза для граждан РФ, Украины и Беларуси не требуется.\n\nНа комфортабельном автобусе, в полной безопасности, дорога полностью контролируется египетской полицией и армией, вы отправляетесь в Иерусалим🙌\n\nВыезд из Шарм-эль-Шейха два раза в неделю:\n❗️Вечером около 20:00 с понедельника на вторник либо с четверга на пятницу.\nВозвращение в Шарм около полуночи в тот же день (возможны незначительные задержки на границе).\n\nВ программе:\n📍 Купание в Мёртвом море (приготовьте купальный костюм, полотенца, сменную одежду)\n📍 Храм Рождества Христова (соблюдайте дресс-код)\n📍 Елеонская гора\n📍 Стена плача\n📍 Храм Гроба Господня\n📍 Крестный путь\n📍 Обед (еда входит в стоимость, напитки оплачиваются отдельно)\n\n*В случае если позволит тайминг, будет остановка на реке Иордан.\n\nВозьмите с собой в поездку:\n🔻 Паспорт (египетская виза-марка НЕ требуется)\n🔻 Удобную одежду из натуральной ткани и удобную обувь, головной убор, солнцезащитные очки\n🔻 Купальные принадлежности для Мёртвого моря и реки Иордан: купальники, футболка, полотенца, средства гигиены\n🔻 Заранее на ресепшн вашего отеля заказать ланч-боксы с собой в поездку (это бесплатная услуга от вашего отеля)\n🔻 Снеки, воду и т.п.\n🔻 Деньги для личных расходов",
      en: "⭐️ JERUSALEM ⭐️\n\nPeople travel from all over the world to touch the Holy Land and visit its magical places — to leave a note, pray, make a wish, feel cleansed, and see Israel 💫\n\nNo visa is required for citizens of Russia, Ukraine and Belarus for this excursion.\n\nOn a comfortable bus, fully secured, with the route entirely controlled by Egyptian police and army, you head to Jerusalem🙌\n\nDeparts from Sharm El Sheikh twice a week:\n❗️In the evening around 20:00, Monday-to-Tuesday or Thursday-to-Friday night.\nReturn to Sharm around midnight the same day (minor border delays possible).\n\nProgram:\n📍 Swimming in the Dead Sea (bring a swimsuit, towels, a change of clothes)\n📍 The Church of the Nativity (dress code applies)\n📍 The Mount of Olives\n📍 The Wailing Wall\n📍 The Church of the Holy Sepulchre\n📍 The Via Dolorosa\n📍 Lunch (food included, drinks paid separately)\n\n*If timing allows, there will be a stop at the Jordan River.\n\nBring with you:\n🔻 Passport (an Egyptian visa stamp is NOT required)\n🔻 Comfortable natural-fabric clothing and shoes, a hat, sunglasses\n🔻 Swimwear for the Dead Sea and Jordan River: swimsuits, a t-shirt, towels, toiletries\n🔻 Ask your hotel reception in advance for packed lunch boxes for the trip (a free service from your hotel)\n🔻 Snacks, water, etc.\n🔻 Money for personal expenses",
    },
    price: { hy: "$180 մեկ մարդու համար · Շաբաթը 2 անգամ, երեկոյան մեկնում", ru: "$180 за человека · 2 раза в неделю, вечерний выезд", en: "$180 per person · Twice a week, evening departure" },
  },
  {
    id: "night-city-lights-dinner-show",
    category: "historical", icon: "moon",
    title: { hy: "Գիշերային քաղաքի լույսերը", ru: "Огни ночного города", en: "City lights by night" },
    desc: {
      hy: "Ծովամթերքով ընթրիք, հին քաղաքի փողոցներ և հայտնի սրճարաններ։ Հասանելի է դիսկոտեկով տարբերակ։",
      ru: "Ужин из морепродуктов, улочки старого города и знаменитые кафе. Есть вариант с дискотекой.",
      en: "A seafood dinner, the old town's streets and famous cafés. A version with a disco is available.",
    },
    price: { hy: "$35 · Դիսկոտեկով՝ $50", ru: "$35 · С дискотекой $50", en: "$35 · With disco $50" },
  },
];

/* ---------- BOOKING CALCULATOR ---------- */
/* How each tour's total is estimated from the booking form's three counts:
   adults, children 6–11 (kids) and children under 6 (small).
   The printed prices use varied age brackets, so these map them onto the form's
   brackets; the form tells visitors the sum is approximate.
     per(a, c, s)     price per adult / child 6–11 / child under 6
     pairW(one, two)  one person / two together if they weigh ≤ 140 kg combined
     pairQ(one, two)  one rider / two riders sharing one quad
                      (for both pair kinds the visitor says how many pairs qualify;
                       adults + kids 6–11 count, under-6 free)
     seats([[n, $]])  vehicles by seat count; the visitor picks how many of each
     request          custom price, no total
     options          variants the visitor chooses (each with its own rule) */
const per = (a, c, s) => ({ type: "per", a, c, s });
const pairW = (one, two) => ({ type: "pair", kind: "weight", one, two });
const pairQ = (one, two) => ({ type: "pair", kind: "quad", one, two });
const seats = (list) => ({ type: "seats", list });
const request = { type: "request" };
const opt = (hy, ru, en, rule) => ({ label: { hy, ru, en }, rule });

const PRICING = {
  "ras-mohammed-tiran": per(32, 16, 16),
  "lux-yacht": per(55, 28, 0),
  "yacht-rental": request,
  "vip-speedboat": request,
  "bathyscaphe": per(30, 15, 0),
  "parasailing-boat": pairW(25, 40),
  "diving-from-beach": per(40, 40, 0),
  "yacht-party-dinner-show": per(25, 25, 0),
  "quad-bike": pairQ(15, 20),
  "buggy": seats([[2, 35], [4, 45]]),
  "super-safari-dinner-show": pairQ(25, 40),
  "golden-dahab": per(20, 20, 0),
  "ras-mohammed-by-car": per(20, 20, 0),
  "dolphin-show-swim": [
    opt("Շոու", "Шоу", "Show", per(25, 18, 18)),
    opt("Լող դելֆինների հետ՝ 15 ր", "Плавание с дельфинами 15 мин", "Swim with dolphins, 15 min", per(80, 80, 0)),
    opt("Լող դելֆինների հետ՝ 30 ր", "Плавание с дельфинами 30 мин", "Swim with dolphins, 30 min", per(105, 105, 0)),
  ],
  "aquapark": [
    opt("Ստանդարտ", "Стандарт", "Standard", per(40, 20, 0)),
    opt("All inclusive", "Всё включено", "All-inclusive", per(50, 20, 0)),
  ],
  "aqua-fun-5in1": pairW(35, 60),
  "aqua-day-4in1": pairW(30, 50),
  "fun-day-3in1": per(45, 45, 0),
  "bomba-8in1": pairW(50, 80),
  "adventure-7in1": per(70, 70, 0),
  "moses-mountain-sunrise": per(30, 30, 0),
  "st-catherine-monastery": per(30, 30, 0),
  "cairo-bus": per(60, 50, 50),
  "cairo-bus-grand-museum": [
    opt("Ստանդարտ խումբ", "Стандартная группа", "Standard group", per(90, 80, 80)),
    opt("Փոքր խումբ", "Мини-группа", "Small group", per(115, 105, 105)),
  ],
  "cairo-by-plane": [
    opt("Ստանդարտ", "Стандарт", "Standard", per(225, 215, 215)),
    opt("Մեծ եգիպտական թանգարանով", "С Гранд музеем", "With the Grand Egyptian Museum", per(270, 260, 260)),
  ],
  "luxor-valley-kings-plane": per(280, 280, 0),
  "jordan-petra-ferry": per(245, 245, 0),
  "jerusalem": per(180, 180, 0),
  "night-city-lights-dinner-show": [
    opt("Ստանդարտ", "Стандарт", "Standard", per(35, 35, 0)),
    opt("Դիսկոտեկով", "С дискотекой", "With disco", per(50, 50, 0)),
  ],
};

/* Returns { total, detail, short } in dollars (short = seats missing), or null
   when the price is set individually. units: { pairs } or { vehicles: [count per type] }. */
function calcBookingTotal(rule, adults, kids, small, units = {}) {
  if (!rule || rule.type === "request") return null;
  if (rule.type === "per") {
    const parts = [];
    if (adults) parts.push(`${adults} × $${rule.a}`);
    if (kids) parts.push(`${kids} × $${rule.c}`);
    if (small && rule.s) parts.push(`${small} × $${rule.s}`);
    return { total: adults * rule.a + kids * rule.c + small * rule.s, detail: parts.join(" + ") };
  }
  if (rule.type === "pair") {
    const n = adults + kids;
    const pairs = Math.min(units.pairs || 0, Math.floor(n / 2));
    const singles = n - 2 * pairs;
    const parts = [];
    if (pairs) parts.push(`${pairs} × $${rule.two}`);
    if (singles) parts.push(`${singles} × $${rule.one}`);
    return { total: pairs * rule.two + singles * rule.one, detail: parts.join(" + ") };
  }
  if (rule.type === "seats") {
    const counts = units.vehicles || [];
    let total = 0, seatsTotal = 0;
    const parts = [];
    rule.list.forEach(([seatCount, price], i) => {
      const c = counts[i] || 0;
      total += c * price;
      seatsTotal += c * seatCount;
      if (c) parts.push(`${c} × $${price}`);
    });
    return { total, detail: parts.join(" + "), short: seatsTotal < adults + kids + small };
  }
  return null;
}

/* Cheapest vehicle mix that seats n people — the starting suggestion for buggies. */
function suggestVehicles(list, n) {
  const [[smallSeats, smallPrice], [bigSeats, bigPrice]] = list;
  let best = null;
  for (let big = 0; big <= Math.ceil(n / bigSeats); big++) {
    const smallCount = Math.ceil(Math.max(0, n - big * bigSeats) / smallSeats);
    const cost = big * bigPrice + smallCount * smallPrice;
    if (!best || cost < best.cost) best = { cost, counts: [smallCount, big] };
  }
  return best.counts;
}

/* ---------- LANGUAGE STATE ---------- */
function getLang() {
  return localStorage.getItem("nosa_lang") || "ru";
}
function setLang(lang) {
  localStorage.setItem("nosa_lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  const dict = UI[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  if (typeof renderTours === "function") renderTours();
  if (typeof renderHomeTours === "function") renderHomeTours();
  if (typeof renderDetailPage === "function") renderDetailPage();
  if (typeof refreshBookingForm === "function") refreshBookingForm();
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  applyLang(getLang());
}

/* ---------- TOURS RENDERING (tours.html only) ---------- */
let activeFilter = "all";
let currentTourForBooking = null;

function renderTours() {
  const grid = document.getElementById("toursGrid");
  if (!grid) return;
  const lang = getLang();
  const dict = UI[lang];
  grid.innerHTML = "";

  TOURS.filter((t) => activeFilter === "all" || t.category === activeFilter).forEach((t) => {
    const card = document.createElement("article");
    card.className = `tour-card cat-${t.category}` + (t.unavailable ? " is-unavailable" : "");

    const priceLine = t.price[lang].replace("unavailable_note", dict.unavailable_note);
    const fallbackUrl = tourImageFallback(t.id, lang);

    card.innerHTML = `
      <div class="tour-media">
        ${iconSvg(t.icon)}
        <img src="${tourImage(t.id, lang)}" alt="${t.title[lang]}" loading="lazy"
             data-fallback="${fallbackUrl}"
             onerror="if(this.dataset.fallback && this.src.indexOf(this.dataset.fallback)===-1){this.src=this.dataset.fallback;} else {this.style.display='none'; this.parentNode.classList.add('no-photo');}">
      </div>
      <h3 class="tour-title">${t.title[lang]}</h3>
      <p class="tour-desc">${t.desc[lang]}</p>
      <p class="tour-price">${priceLine}</p>
      <div class="tour-actions">
        <a class="btn btn-details" href="tour.html?id=${t.id}">${dict.details_btn}</a>
        <button class="btn btn-book" ${t.unavailable ? "disabled" : ""} data-tour-id="${t.id}">
          ${t.unavailable ? dict.unavailable_note : dict.book_btn}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll(".btn-book:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => openBookingModal(btn.dataset.tourId));
  });
}

function initFilters() {
  const filterBar = document.getElementById("filterBar");
  if (!filterBar) return;

  const hash = window.location.hash.replace("#", "");
  const validFilters = ["sea", "adventure", "family", "combo", "historical"];
  if (validFilters.includes(hash)) {
    activeFilter = hash;
    filterBar.querySelectorAll("button").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === hash);
    });
  }

  filterBar.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      filterBar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTours();
    });
  });
}

/* ---------- FULL-TEXT FORMATTER ---------- */
/* Turns the plain full-text tour descriptions (written with blank-line
   paragraphs and ✅/✨/🔻/📍 prefixed lines) into real HTML: bullet lists,
   a styled lede for short opening lines, and a divider for "⸻" rules —
   instead of dumping raw emoji-prefixed text into one pre-line blob. */
function formatFullText(text) {
  const bulletRegex = /^(✅|✨|🔻|📍|✔)\s*/;
  const blocks = text.split(/\n\n+/);
  return blocks
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length === 0) return "";
      if (lines.every((l) => /^[⸻—\-–]+$/.test(l))) return '<hr class="detail-divider">';
      if (lines.every((l) => bulletRegex.test(l))) {
        return `<ul class="detail-list">${lines.map((l) => `<li>${l.replace(bulletRegex, "")}</li>`).join("")}</ul>`;
      }
      if (lines.length === 1 && lines[0].length < 70) {
        return `<p class="detail-lede">${lines[0]}</p>`;
      }
      return `<p>${lines.join("<br>")}</p>`;
    })
    .filter(Boolean)
    .join("");
}

/* ---------- TOUR DETAIL PAGE (tour.html only) ---------- */
let detailTour = null;

function getTourIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderDetailPage() {
  const root = document.getElementById("detailRoot");
  if (!root) return;

  const id = getTourIdFromUrl();
  detailTour = TOURS.find((t) => t.id === id) || null;
  const lang = getLang();
  const dict = UI[lang];

  if (!detailTour) {
    root.innerHTML = `<p>${dict.unavailable_note}</p><p><a href="tours.html">${dict.back_to_tours}</a></p>`;
    document.title = "Nosa Tour";
    return;
  }

  document.title = `${detailTour.title[lang]} — Nosa Tour`;

  const priceLine = detailTour.price[lang].replace("unavailable_note", dict.unavailable_note);
  const rawText = (detailTour.full && detailTour.full[lang]) ? detailTour.full[lang] : detailTour.desc[lang];
  const bodyHtml = formatFullText(rawText);
  const fallbackUrl = tourImageFallback(detailTour.id, lang);
  const catLabelKey = { sea: "cat_sea_title", adventure: "cat_adventure_title", family: "cat_family_title", combo: "cat_combo_title", historical: "cat_historical_title" }[detailTour.category];

  root.innerHTML = `
    <div class="container detail-topbar">
      <a href="tours.html" class="back-link">← ${dict.back_to_tours.replace("← ", "")}</a>
      <span class="detail-cat-chip cat-${detailTour.category}">${dict[catLabelKey]}</span>
    </div>
    <div class="container detail-layout">
    <figure class="detail-poster cat-${detailTour.category}">
      <div class="detail-poster-frame">
        <img src="${tourImage(detailTour.id, lang)}" alt="${detailTour.title[lang]}"
             data-fallback="${fallbackUrl}"
             onerror="if(this.dataset.fallback && this.src.indexOf(this.dataset.fallback)===-1){this.src=this.dataset.fallback;} else {this.replaceWith(document.createRange().createContextualFragment(this.dataset.icon)); document.querySelector('.detail-poster').classList.add('no-photo');}"
             data-icon='${iconSvg(detailTour.icon)}'>
      </div>
    </figure>
    <div class="detail-body">
      <h1>${detailTour.title[lang]}</h1>
      <div class="detail-price-box">${priceLine}</div>
      <div class="detail-text">${bodyHtml}</div>
      <div class="detail-cta">
        <button class="btn btn-primary" id="detailBookBtn" ${detailTour.unavailable ? "disabled" : ""}>
          ${detailTour.unavailable ? dict.unavailable_note : dict.book_btn}
        </button>
      </div>
    </div>
    </div>
  `;

  const bookBtn = document.getElementById("detailBookBtn");
  if (bookBtn && !detailTour.unavailable) {
    bookBtn.addEventListener("click", () => openBookingModal(detailTour.id));
  }
}

/* ---------- HOMEPAGE TOURS (index.html only) ---------- */
function renderHomeTours() {
  const grid = document.getElementById("homeToursGrid");
  if (!grid) return;
  const lang = getLang();
  const dict = UI[lang];
  grid.innerHTML = "";

  TOURS.forEach((t) => {
    const catLabelKey = { sea: "filter_sea", adventure: "filter_adventure", family: "filter_family", combo: "filter_combo", historical: "filter_historical" }[t.category];
    const priceLine = t.price[lang].replace("unavailable_note", dict.unavailable_note);
    const fallbackUrl = tourImageFallback(t.id, lang);

    // Not one big link: the card holds two actions (details page / booking modal),
    // so only the photo and title link to the details page.
    const detailsUrl = `tour.html?id=${t.id}`;
    const card = document.createElement("article");
    card.className = `home-tour-card cat-${t.category}` + (t.unavailable ? " is-unavailable" : "");
    card.innerHTML = `
      <a class="htc-media" href="${detailsUrl}" tabindex="-1" aria-hidden="true">
        ${iconSvg(t.icon)}
        <img src="${tourImage(t.id, lang)}" alt="${t.title[lang]}" loading="lazy"
             data-fallback="${fallbackUrl}"
             onload="this.closest('.htc-media').classList.add('has-photo')"
             onerror="if(this.dataset.fallback && this.src.indexOf(this.dataset.fallback)===-1){this.src=this.dataset.fallback;} else {this.style.display='none'; this.parentNode.classList.add('no-photo');}">
        <span class="htc-badge">${dict[catLabelKey]}</span>
      </a>
      <div class="htc-body">
        <h3 class="htc-title"><a href="${detailsUrl}">${t.title[lang]}</a></h3>
        <p class="htc-desc">${t.desc[lang]}</p>
        <p class="htc-trust"><i class="htc-check">✓</i> ${dict.trust_inline}</p>
        <div class="htc-footer">
          <span class="htc-price-label">${dict.price_from}</span>
          <span class="htc-price">${priceLine.split(" · ")[0]}</span>
        </div>
        <div class="htc-actions">
          <a class="btn btn-details" href="${detailsUrl}">${dict.details_btn}</a>
          <button class="btn htc-book" ${t.unavailable ? "disabled" : ""} data-tour-id="${t.id}">
            ${t.unavailable ? dict.unavailable_note : dict.book_btn}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll(".htc-book:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => openBookingModal(btn.dataset.tourId));
  });
}

function openBookingModal(tourId) {
  currentTourForBooking = TOURS.find((t) => t.id === tourId) || null;
  const form = document.getElementById("bookingForm");
  if (form) form.reset();
  const unitsRow = document.getElementById("bfUnitsRow");
  if (unitsRow) { unitsRow.dataset.type = ""; unitsRow.dataset.touched = ""; }
  refreshBookingForm();
  const status = document.getElementById("bookingStatus");
  if (status) setBookingStatus(status, "", "");
  document.getElementById("bookingModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

/* Re-fills the language-dependent parts of the booking form: tour list,
   variant list, messenger label and the running total. */
function refreshBookingForm() {
  const tourSelect = document.getElementById("bfTour");
  if (!tourSelect) return;
  const lang = getLang();
  const dict = UI[lang];

  tourSelect.innerHTML =
    `<option value="" disabled>${dict.modal_tour_placeholder}</option>` +
    TOURS.map((t) => `<option value="${t.id}">${t.title[lang]}</option>`).join("");
  tourSelect.value = currentTourForBooking ? currentTourForBooking.id : "";

  const label = document.getElementById("modalTourName");
  if (label) label.textContent = currentTourForBooking ? currentTourForBooking.title[lang] : "";

  refreshBookingOptions();
  refreshMessengerLabel();
  refreshBookingUnits();
  updateBookingTotal();
}

/* Extra inputs some tours price by: how many pairs qualify for the "two
   together" price, or how many buggies of each size. Rebuilt when the tour,
   variant, guest counts or language change; entered values are kept. */
function refreshBookingUnits() {
  const row = document.getElementById("bfUnitsRow");
  if (!row) return;
  const dict = UI[getLang()];
  const rule = currentPricingRule();
  const count = (id) => Math.max(0, parseInt(document.getElementById(id).value, 10) || 0);
  const type = !rule ? "" : rule.type === "pair" ? `pair-${rule.kind}` : rule.type === "seats" ? "seats" : "";

  if (!type) {
    row.hidden = true;
    row.innerHTML = "";
    row.dataset.type = "";
    row.dataset.touched = "";
    return;
  }
  const same = row.dataset.type === type;
  row.hidden = false;

  if (rule.type === "pair") {
    const max = Math.floor((count("bfAdults") + count("bfChildren6to11")) / 2);
    const prev = same && document.getElementById("bfPairs") ? Number(document.getElementById("bfPairs").value) : 0;
    const key = rule.kind === "weight" ? "units_pairs_weight" : "units_pairs_quad";
    row.innerHTML =
      `<label for="bfPairs">${dict[key]}</label>` +
      `<select id="bfPairs">${Array.from({ length: max + 1 }, (_, i) => `<option value="${i}">${i}</option>`).join("")}</select>` +
      `<p class="modal-note units-hint">${dict[key + "_hint"]}</p>`;
    const select = document.getElementById("bfPairs");
    select.value = String(Math.min(prev, max));
    select.addEventListener("change", updateBookingTotal);
  } else {
    const people = count("bfAdults") + count("bfChildren6to11") + count("bfChildrenU6");
    const values = same && row.dataset.touched
      ? rule.list.map((_, i) => Number(document.getElementById(`bfVeh${i}`).value) || 0)
      : suggestVehicles(rule.list, people);
    row.innerHTML =
      `<div class="form-grid-2">` +
      rule.list.map((_, i) =>
        `<div><label for="bfVeh${i}">${dict[`units_buggy_${i}`]}</label>` +
        `<input type="number" id="bfVeh${i}" min="0" value="${values[i]}" required></div>`).join("") +
      `</div><p class="modal-note units-hint">${dict.units_buggy_hint}</p>`;
    rule.list.forEach((_, i) => {
      document.getElementById(`bfVeh${i}`).addEventListener("input", () => {
        row.dataset.touched = "1";
        updateBookingTotal();
      });
    });
  }
  row.dataset.type = type;
}

/* A different tour/variant starts from fresh suggestions. */
function resetBookingUnits() {
  const row = document.getElementById("bfUnitsRow");
  if (!row) return;
  row.dataset.type = "";
  row.dataset.touched = "";
  refreshBookingUnits();
}

function readBookingUnits() {
  const pairs = document.getElementById("bfPairs");
  const vehicles = [0, 1].map((i) => document.getElementById(`bfVeh${i}`));
  return {
    pairs: pairs ? Number(pairs.value) || 0 : 0,
    vehicles: vehicles.map((el) => (el ? Math.max(0, Number(el.value) || 0) : 0)),
  };
}

/* Armenian line for the booking message describing pairs / buggies, if any. */
function bookingUnitsSummary() {
  const rule = currentPricingRule();
  if (!rule) return null;
  const u = readBookingUnits();
  if (rule.type === "pair") {
    const key = rule.kind === "weight" ? "Զույգեր (միասին ≤140 կգ)" : "Քվադրոցիկլ 2 հոգով";
    return [key, String(u.pairs)];
  }
  if (rule.type === "seats") {
    return ["Բագի", `2-տեղանոց × ${u.vehicles[0]}, 4-տեղանոց × ${u.vehicles[1]}`];
  }
  return null;
}

function refreshBookingOptions() {
  const row = document.getElementById("bfOptionRow");
  const select = document.getElementById("bfOption");
  if (!row || !select) return;
  const lang = getLang();
  const pricing = currentTourForBooking ? PRICING[currentTourForBooking.id] : null;
  const keep = select.value;
  if (Array.isArray(pricing)) {
    select.innerHTML = pricing.map((o, i) => `<option value="${i}">${o.label[lang]}</option>`).join("");
    if (keep && pricing[keep]) select.value = keep;
    row.hidden = false;
  } else {
    select.innerHTML = "";
    row.hidden = true;
  }
}

function refreshMessengerLabel() {
  const label = document.getElementById("bfMessengerIdLabel");
  const messenger = document.getElementById("bfMessenger");
  if (!label || !messenger) return;
  const dict = UI[getLang()];
  label.textContent = messenger.value === "Telegram" ? dict.modal_messenger_id_tg : dict.modal_messenger_id;
}

function currentPricingRule() {
  if (!currentTourForBooking) return undefined;
  const pricing = PRICING[currentTourForBooking.id];
  if (Array.isArray(pricing)) {
    const i = Number(document.getElementById("bfOption").value) || 0;
    return pricing[i].rule;
  }
  return pricing;
}

function currentOptionLabel() {
  if (!currentTourForBooking) return "";
  const pricing = PRICING[currentTourForBooking.id];
  if (!Array.isArray(pricing)) return "";
  const i = Number(document.getElementById("bfOption").value) || 0;
  return pricing[i].label.hy;
}

/* Live total shown to the visitor; also returned for the booking message. */
function updateBookingTotal() {
  const box = document.getElementById("bookingTotal");
  if (!box) return "";
  const dict = UI[getLang()];
  const count = (id) => Math.max(0, parseInt(document.getElementById(id).value, 10) || 0);

  if (!currentTourForBooking) {
    box.innerHTML = `<span class="bt-hint">${dict.total_pick_tour}</span>`;
    return "";
  }
  const result = calcBookingTotal(currentPricingRule(), count("bfAdults"), count("bfChildren6to11"), count("bfChildrenU6"), readBookingUnits());
  // Too few buggy seats blocks sending until the visitor adds a buggy.
  const firstVehicle = document.getElementById("bfVeh0");
  if (firstVehicle) firstVehicle.setCustomValidity(result && result.short ? dict.units_seats_short : "");
  if (!result) {
    box.innerHTML = `<span class="bt-label">${dict.total_label}</span><span class="bt-hint">${dict.total_request}</span>`;
    return "—";
  }
  box.innerHTML =
    `<span class="bt-label">${dict.total_label}</span>` +
    `<span class="bt-sum">$${result.total}</span>` +
    (result.detail ? `<span class="bt-detail">${result.detail}</span>` : "") +
    (result.short ? `<span class="bt-warn">${dict.units_seats_short}</span>` : "") +
    `<span class="bt-note">${dict.total_note}</span>`;
  return `$${result.total}` + (result.detail ? ` (${result.detail})` : "");
}

function closeBookingModal() {
  document.getElementById("bookingModal").classList.remove("open");
  document.body.style.overflow = "";
}

function initModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.querySelector(".modal-close").addEventListener("click", closeBookingModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeBookingModal(); });

  document.querySelectorAll("[data-open-booking]").forEach((el) => {
    el.addEventListener("click", (e) => { e.preventDefault(); openBookingModal(null); });
  });

  // Bookings need at least 24 hours' notice — set the date input's minimum
  // to tomorrow's date so the person can't pick today or a past date.
  const dateInput = document.getElementById("bfDate");
  if (dateInput) {
    const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    dateInput.min = minDate.toISOString().split("T")[0];
  }

  document.getElementById("bfTour").addEventListener("change", (e) => {
    currentTourForBooking = TOURS.find((t) => t.id === e.target.value) || null;
    const label = document.getElementById("modalTourName");
    if (label) label.textContent = currentTourForBooking ? currentTourForBooking.title[getLang()] : "";
    document.getElementById("bfOption").value = "";
    refreshBookingOptions();
    resetBookingUnits();
    updateBookingTotal();
  });
  document.getElementById("bfOption").addEventListener("change", () => {
    resetBookingUnits();
    updateBookingTotal();
  });
  ["bfAdults", "bfChildren6to11", "bfChildrenU6"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      refreshBookingUnits();
      updateBookingTotal();
    });
  });
  document.getElementById("bfMessenger").addEventListener("change", refreshMessengerLabel);

  // Most people use the same number for their messenger: mirror the phone
  // into it until they edit the messenger field themselves.
  const phone = document.getElementById("bfPhone");
  const messengerId = document.getElementById("bfMessengerId");
  let mirrored = "";
  phone.addEventListener("input", () => {
    if (messengerId.value === mirrored) { messengerId.value = phone.value; mirrored = phone.value; }
  });

  const form = document.getElementById("bookingForm");
  form.addEventListener("reset", () => { mirrored = ""; });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lang = getLang();
    const dict = UI[lang];
    const val = (id) => document.getElementById(id).value.trim();
    const booking = {
      tour: currentTourForBooking ? currentTourForBooking.title.hy : "",
      option: currentOptionLabel(),
      name: val("bfName"),
      phone: val("bfPhone"),
      messenger: val("bfMessenger"),
      messengerId: val("bfMessengerId"),
      hotel: val("bfHotel"),
      room: val("bfRoom"),
      date: val("bfDate"),
      adults: val("bfAdults"),
      childrenU6: val("bfChildrenU6"),
      children6to11: val("bfChildren6to11"),
      comment: val("bfComment"),
      units: bookingUnitsSummary(),
      total: updateBookingTotal(),
    };
    // FormBold forwards field names as-is to Telegram, so they're the Armenian
    // labels the owner reads, whatever language the visitor used.
    const payload = {
      "Տուր": booking.tour,
      ...(booking.option ? { "Տարբերակ": booking.option } : {}),
      "Անուն, ազգանուն": booking.name,
      "Հեռախոս": booking.phone,
      "Մեսենջեր": `${booking.messenger}: ${booking.messengerId}`,
      "Հյուրանոց": booking.hotel,
      "Սենյակ": booking.room,
      "Ամսաթիվ": booking.date,
      "Մեծահասակներ": booking.adults,
      "Երեխաներ (մինչև 6)": booking.childrenU6,
      "Երեխաներ (6–11+)": booking.children6to11,
      ...(booking.units ? { [booking.units[0]]: booking.units[1] } : {}),
      "Գումար (մոտավոր)": booking.total || "—",
      "Մեկնաբանություն": booking.comment || "—",
      "Կայքի լեզու": lang,
    };

    if (!BOOKING_ENDPOINT) {
      window.open(telegramChatUrl(booking, dict, lang), "_blank");
      closeBookingModal();
      form.reset();
      return;
    }

    const status = document.getElementById("bookingStatus");
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    setBookingStatus(status, dict.booking_sending, "");
    try {
      const res = await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setBookingStatus(status, dict.booking_success, "is-success");
      form.reset();
      refreshBookingForm();
    } catch (err) {
      setBookingStatus(status, dict.booking_error, "is-error");
      if (TELEGRAM_USERNAME !== "your_telegram_username") {
        const a = document.createElement("a");
        a.href = telegramChatUrl(booking, dict, lang);
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = " Telegram →";
        status.appendChild(a);
      }
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function setBookingStatus(el, text, cls) {
  el.textContent = text;
  el.className = "booking-status" + (cls ? " " + cls : "");
}

/* Pre-filled Telegram chat — used when the relay isn't configured or fails. */
function telegramChatUrl(b, dict, lang) {
  const tourName = currentTourForBooking ? currentTourForBooking.title[lang] : "—";
  const lines = [
    `Nosa Tour — ${dict.modal_title}`,
    `${dict.modal_tour_label}: ${tourName}${b.option ? ` (${b.option})` : ""}`,
    `${dict.modal_name}: ${b.name}`,
    `${dict.modal_phone}: ${b.phone}`,
    `${b.messenger}: ${b.messengerId}`,
    `${dict.modal_hotel}: ${b.hotel}`,
    `${dict.modal_room}: ${b.room}`,
    `${dict.modal_date}: ${b.date || "—"}`,
    `${dict.modal_adults}: ${b.adults}`,
    `${dict.modal_children_u6}: ${b.childrenU6}`,
    `${dict.modal_children_6to11}: ${b.children6to11}`,
    ...(b.units ? [`${b.units[0]}: ${b.units[1]}`] : []),
    `${dict.total_label}: ${b.total || "—"}`,
  ];
  if (b.comment) lines.push(`${dict.modal_comment}: ${b.comment}`);
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLangSwitcher();
  initFilters();
  initModal();
  renderTours();
  renderHomeTours();
  renderDetailPage();
});
