'use strict';

/* ==========================================================================
   1. DATA
   ========================================================================== */

/** UI text for both languages. Keys match the data-i18n attributes in index.html. */
const I18N = {
  ar: {
    nav_home: 'الرئيسية',
    nav_properties: 'العقارات',
    nav_about: 'من نحن',
    nav_services: 'خدماتنا',
    nav_contact: 'تواصل معنا',
    hero_title: 'حيث يبدأ فصل جديد من الفخامة',
    hero_text: 'نختار لك أرقى الفلل والشقق والبنتهاوس في أفضل مدن المنطقة، بخدمة شخصية تليق بذوقك.',
    hero_cta: 'استكشف العقارات',
    f_city: 'المدينة',
    f_type: 'نوع العقار',
    f_deal: 'نوع العملية',
    f_min: 'أقل سعر ($)',
    f_max: 'أعلى سعر ($)',
    f_search: 'بحث',
    f_reset: 'إعادة ضبط',
    all: 'الكل',
    villa: 'فيلا',
    apartment: 'شقة',
    penthouse: 'بنتهاوس',
    sale: 'للبيع',
    rent: 'للإيجار',
    mo: '/ شهرياً',
    props_title: 'عقارات مميزة',
    favs: 'المفضلة',
    empty: 'لا توجد عقارات مطابقة. جرّب تغيير الفلاتر.',
    found: 'عقار',
    beds: 'غرف',
    baths: 'حمامات',
    view: 'عرض التفاصيل',
    m_contact: 'اطلب معاينة',
    about_title: 'عن LUXURY ESTATE',
    about_text: 'نعمل منذ أكثر من 15 عاماً في سوق العقارات الفاخرة، ونرافق عملاءنا من أول معاينة حتى استلام المفاتيح.',
    vision_t: 'رؤيتنا',
    vision_p: 'أن نكون الوجهة الأولى لمن يبحث عن عقار استثنائي.',
    mission_t: 'رسالتنا',
    mission_p: 'تقديم عقارات موثّقة وخدمة شفافة تحفظ قيمة استثمارك.',
    st1: 'سنة خبرة',
    st2: 'عقار تم بيعه',
    st3: 'حجم المبيعات',
    st4: 'رضا العملاء',
    serv_title: 'خدماتنا',
    s1_t: 'شراء عقار',
    s1_p: 'نرشّح لك العقارات المناسبة ونتفاوض نيابةً عنك.',
    s2_t: 'بيع عقار',
    s2_p: 'تسعير دقيق وتسويق احترافي يصل للمشترين الجادين.',
    s3_t: 'تأجير عقار',
    s3_p: 'نجد المستأجر المناسب وندير العقد بالكامل.',
    s4_t: 'استشارة عقارية',
    s4_p: 'تحليل السوق والعائد لقرار استثماري واثق.',
    why_title: 'لماذا تختارنا',
    w1_t: 'عقارات موثّقة',
    w1_p: 'نراجع كل عقار وأوراقه قبل عرضه.',
    w2_t: 'خدمة شخصية',
    w2_p: 'مستشار واحد يتابع طلبك من البداية للنهاية.',
    w3_t: 'شبكة واسعة',
    w3_p: 'عقارات في دبي والقاهرة والرياض والدوحة.',
    test_title: 'آراء عملائنا',
    t1_p: 'وجدت الفيلا المناسبة خلال أسبوعين، وكل التفاصيل كانت واضحة.',
    t1_n: 'خالد المنصوري، دبي',
    t2_p: 'فريق محترف. بعنا الشقة بسعر أعلى مما توقعنا.',
    t2_n: 'منى الشريف، القاهرة',
    t3_p: 'استشارة ممتازة قبل الاستثمار، وفّرت علينا الكثير.',
    t3_n: 'عمر الحداد، الرياض',
    contact_title: 'تواصل معنا',
    contact_text: 'اترك بياناتك وسيتواصل معك أحد مستشارينا.',
    addr: 'برج الأعمال، دبي، الإمارات',
    c_name: 'الاسم',
    c_email: 'البريد الإلكتروني',
    c_phone: 'رقم الهاتف',
    c_msg: 'الرسالة',
    c_send: 'إرسال الرسالة',
    e_name: 'أدخل اسمك (حرفان على الأقل).',
    e_email: 'أدخل بريداً إلكترونياً صحيحاً.',
    e_phone: 'أدخل رقم هاتف صحيحاً (8 أرقام على الأقل).',
    e_msg: 'اكتب رسالة من 10 أحرف على الأقل.',
    ok: 'البيانات صحيحة. هذا موقع تجريبي ولم يتم إرسال الرسالة فعلياً.',
    rights: 'جميع الحقوق محفوظة.',
    btn: 'EN',
    skip: 'تخطَّ إلى المحتوى',
    aria_lang: 'تغيير اللغة',
    aria_menu: 'القائمة',
    aria_close: 'إغلاق',
    aria_main: 'التنقل الرئيسي',
    aria_footer: 'روابط التذييل',
    aria_search: 'البحث عن عقار',
    aria_fav: 'إضافة أو إزالة من المفضلة',
    empty_fav: 'لم تضف أي عقار إلى المفضلة بعد. اضغط على القلب في أي بطاقة.',
    title: 'LUXURY ESTATE | عقارات فاخرة'
  },
  en: {
    nav_home: 'Home',
    nav_properties: 'Properties',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_contact: 'Contact',
    hero_title: 'Where a new chapter of luxury begins',
    hero_text: 'Hand-picked villas, apartments and penthouses in the region’s finest cities, with service as refined as your taste.',
    hero_cta: 'Explore properties',
    f_city: 'City',
    f_type: 'Property type',
    f_deal: 'Deal type',
    f_min: 'Min price ($)',
    f_max: 'Max price ($)',
    f_search: 'Search',
    f_reset: 'Reset',
    all: 'All',
    villa: 'Villa',
    apartment: 'Apartment',
    penthouse: 'Penthouse',
    sale: 'For sale',
    rent: 'For rent',
    mo: '/ month',
    props_title: 'Featured properties',
    favs: 'Favorites',
    empty: 'No matching properties. Try changing the filters.',
    found: 'properties',
    beds: 'Beds',
    baths: 'Baths',
    view: 'View details',
    m_contact: 'Request a viewing',
    about_title: 'About LUXURY ESTATE',
    about_text: 'For over 15 years we have worked in luxury real estate, guiding clients from the first viewing to the day they receive the keys.',
    vision_t: 'Our vision',
    vision_p: 'To be the first choice for anyone seeking an exceptional home.',
    mission_t: 'Our mission',
    mission_p: 'Verified properties and transparent service that protect the value of your investment.',
    st1: 'Years of experience',
    st2: 'Properties sold',
    st3: 'Sales volume',
    st4: 'Client satisfaction',
    serv_title: 'Our services',
    s1_t: 'Buy property',
    s1_p: 'We shortlist the right homes and negotiate on your behalf.',
    s2_t: 'Sell property',
    s2_p: 'Accurate pricing and professional marketing that reaches serious buyers.',
    s3_t: 'Rent property',
    s3_p: 'We find the right tenant and manage the lease end to end.',
    s4_t: 'Property consultation',
    s4_p: 'Market and yield analysis for confident investment decisions.',
    why_title: 'Why choose us',
    w1_t: 'Verified listings',
    w1_p: 'Every property and its paperwork is reviewed before we list it.',
    w2_t: 'Personal service',
    w2_p: 'One advisor follows your request from start to finish.',
    w3_t: 'Wide network',
    w3_p: 'Properties in Dubai, Cairo, Riyadh and Doha.',
    test_title: 'Client testimonials',
    t1_p: 'I found the right villa within two weeks, and every detail was clear.',
    t1_n: 'Khaled Al Mansouri, Dubai',
    t2_p: 'A professional team. We sold our apartment above our expectations.',
    t2_n: 'Mona El Sherif, Cairo',
    t3_p: 'Excellent advice before investing. It saved us a lot.',
    t3_n: 'Omar Haddad, Riyadh',
    contact_title: 'Contact us',
    contact_text: 'Leave your details and one of our advisors will reach out.',
    addr: 'Business Tower, Dubai, UAE',
    c_name: 'Name',
    c_email: 'Email',
    c_phone: 'Phone number',
    c_msg: 'Message',
    c_send: 'Send message',
    e_name: 'Enter your name (2+ characters).',
    e_email: 'Enter a valid email address.',
    e_phone: 'Enter a valid phone number (8+ digits).',
    e_msg: 'Write a message of at least 10 characters.',
    ok: 'Details look valid. This is a demo site, so the message was not actually sent.',
    rights: 'All rights reserved.',
    btn: 'عربي',
    skip: 'Skip to content',
    aria_lang: 'Switch language',
    aria_menu: 'Menu',
    aria_close: 'Close',
    aria_main: 'Main navigation',
    aria_footer: 'Footer links',
    aria_search: 'Property search',
    aria_fav: 'Add or remove favorite',
    empty_fav: 'You have no favorites yet. Tap the heart on any card.',
    title: 'LUXURY ESTATE | Luxury Real Estate'
  }
};

const CITIES = {
  dubai: {
    ar: 'دبي',
    en: 'Dubai'
  },
  cairo: {
    ar: 'القاهرة',
    en: 'Cairo'
  },
  riyadh: {
    ar: 'الرياض',
    en: 'Riyadh'
  },
  doha: {
    ar: 'الدوحة',
    en: 'Doha'
  }
};

/** Local image path. Put the files in the images folder next to index.html (original downloaded file names). */
const imageUrl = (file) => `images/${file}`;

/** Demo listings. price = USD (monthly for rentals), area = square metres. */
const PROPS = [
  {
    id: 1,
    img: imageUrl('john-fornander-Id7u0EkTjBE-unsplash.jpg'),
    city: 'dubai',
    type: 'villa',
    deal: 'sale',
    price: 4800000,
    beds: 6,
    baths: 7,
    area: 820,
    name: {
      ar: 'فيلا الواحة الملكية',
      en: 'Royal Oasis Villa'
    },
    desc: {
      ar: 'فيلا عصرية بمسبح خاص وحديقة واسعة وإطلالة على المارينا.',
      en: 'A modern villa with a private pool, large garden and marina views.'
    }
  },
  {
    id: 2,
    img: imageUrl('huy-nguyen-AB-q9lwCVv8-unsplash.jpg'),
    city: 'dubai',
    type: 'penthouse',
    deal: 'sale',
    price: 3200000,
    beds: 4,
    baths: 5,
    area: 450,
    name: {
      ar: 'بنتهاوس سكاي لاين',
      en: 'Skyline Penthouse'
    },
    desc: {
      ar: 'طابق علوي بإطلالة بانورامية وتراس خاص.',
      en: 'A top-floor residence with panoramic views and a private terrace.'
    }
  },
  {
    id: 3,
    img: imageUrl('michael-brown-cUoXTLVFQ9M-unsplash.jpg'),
    city: 'cairo',
    type: 'villa',
    deal: 'sale',
    price: 1950000,
    beds: 5,
    baths: 5,
    area: 610,
    name: {
      ar: 'فيلا التجمع الذهبي',
      en: 'Golden Cairo Villa'
    },
    desc: {
      ar: 'فيلا في مجتمع مغلق بتصميم معماري راقٍ.',
      en: 'A villa in a gated community with refined architecture.'
    }
  },
  {
    id: 4,
    img: imageUrl('aalo-lens-7Gd07IjiO7s-unsplash.jpg'),
    city: 'riyadh',
    type: 'villa',
    deal: 'rent',
    price: 14000,
    beds: 5,
    baths: 6,
    area: 700,
    name: {
      ar: 'فيلا النخيل',
      en: 'Palm Residence'
    },
    desc: {
      ar: 'فيلا مفروشة بالكامل في حي هادئ.',
      en: 'A fully furnished villa in a quiet neighbourhood.'
    }
  },
  {
    id: 5,
    img: imageUrl('luke-van-zyl-koH7IVuwRLw-unsplash.jpg'),
    city: 'doha',
    type: 'apartment',
    deal: 'rent',
    price: 6500,
    beds: 3,
    baths: 3,
    area: 240,
    name: {
      ar: 'شقة اللؤلؤة',
      en: 'Pearl Apartment'
    },
    desc: {
      ar: 'شقة على الواجهة البحرية مع خدمات فندقية.',
      en: 'A waterfront apartment with hotel-style services.'
    }
  },
  {
    id: 6,
    img: imageUrl('villa-exterior.avif'),
    city: 'riyadh',
    type: 'villa',
    deal: 'sale',
    price: 2700000,
    beds: 7,
    baths: 8,
    area: 950,
    name: {
      ar: 'قصر العليا',
      en: 'Olaya Mansion'
    },
    desc: {
      ar: 'قصر بتشطيبات فاخرة وصالة سينما ومسبح داخلي.',
      en: 'A mansion with luxury finishes, a cinema room and indoor pool.'
    }
  },
  {
    id: 7,
    img: imageUrl('dada-design-9KGB4HspwsM-unsplash.jpg'),
    city: 'cairo',
    type: 'apartment',
    deal: 'rent',
    price: 3200,
    beds: 3,
    baths: 2,
    area: 210,
    name: {
      ar: 'شقة الزمالك على النيل',
      en: 'Zamalek Nile Apartment'
    },
    desc: {
      ar: 'شقة أنيقة بإطلالة مباشرة على النيل.',
      en: 'An elegant apartment with direct Nile views.'
    }
  },
  {
    id: 8,
    img: imageUrl('penthouse-terrace.jpg'),
    city: 'doha',
    type: 'penthouse',
    deal: 'sale',
    price: 2300000,
    beds: 4,
    baths: 4,
    area: 380,
    name: {
      ar: 'بنتهاوس الخليج',
      en: 'Gulf Penthouse'
    },
    desc: {
      ar: 'بنتهاوس بدورين وتراس يطل على الخليج.',
      en: 'A duplex penthouse with a terrace overlooking the Gulf.'
    }
  }
];

/* ==========================================================================
   2. CONFIG, STATE & HELPERS
   ========================================================================== */

const STORAGE_KEYS = {
  lang: 'le-lang',
  favorites: 'le-favs'
};

const DEFAULT_LANG = 'ar';

const state = {
  lang: DEFAULT_LANG,
  favorites: [],
  favoritesOnly: false
};

const $ = (selector) => document.querySelector(selector);

/** Translate a key into the current language. */
const t = (key) => I18N[state.lang][key] ?? key;

/** Format a number using the current language's digits. */
const formatNumber = (value) =>
  new Intl.NumberFormat(state.lang === 'ar' ? 'ar-EG' : 'en-US').format(value);

const formatPrice = (property) => {
  const suffix = property.deal === 'rent' ? ` ${t('mo')}` : '';
  return `$${formatNumber(property.price)}${suffix}`;
};

/** localStorage wrapper that never throws (private mode, blocked storage). */
const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable: the site still works without persistence */
    }
  }
};

/* ==========================================================================
   3. LANGUAGE
   ========================================================================== */

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.title = t('title');
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  $('#langBtn').textContent = t('btn');
  buildFilterOptions();
  renderProperties();
  storage.set(STORAGE_KEYS.lang, state.lang);
}

function toggleLanguage() {
  state.lang = state.lang === 'ar' ? 'en' : 'ar';
  applyLanguage();
  refreshFormMessages();
}

/* ==========================================================================
   4. FILTERS & PROPERTIES
   ========================================================================== */

/** Fill one <select>, keeping the current choice when the language changes. */
function fillSelect(selector, options) {
  const select = $(selector);
  const current = select.value;
  const allOption = `<option value="">${t('all')}</option>`;

  select.innerHTML =
    allOption + options.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
  select.value = current;
}

function buildFilterOptions() {
  fillSelect('#fCity', Object.entries(CITIES).map(([key, name]) => [key, name[state.lang]]));
  fillSelect('#fType', ['villa', 'apartment', 'penthouse'].map((key) => [key, t(key)]));
  fillSelect('#fDeal', ['sale', 'rent'].map((key) => [key, t(key)]));
}

function getFilteredProperties() {
  const city = $('#fCity').value;
  const type = $('#fType').value;
  const deal = $('#fDeal').value;
  const minPrice = parseFloat($('#fMin').value) || 0;
  const maxPrice = parseFloat($('#fMax').value) || Infinity;

  return PROPS.filter(
    (p) =>
      (!city || p.city === city) &&
      (!type || p.type === type) &&
      (!deal || p.deal === deal) &&
      p.price >= minPrice &&
      p.price <= maxPrice &&
      (!state.favoritesOnly || state.favorites.includes(p.id))
  );
}

function specsHTML(property) {
  return `
    <li><i class="fa-solid fa-bed"></i>${formatNumber(property.beds)} ${t('beds')}</li>
    <li><i class="fa-solid fa-bath"></i>${formatNumber(property.baths)} ${t('baths')}</li>
    <li><i class="fa-solid fa-ruler-combined"></i>${formatNumber(property.area)} m²</li>`;
}

function propertyCardHTML(property) {
  const lang = state.lang;
  const isFavorite = state.favorites.includes(property.id);

  return `
    <article class="card">
      <div class="card-img">
        <img src="${property.img}" alt="${property.name[lang]}" loading="lazy" decoding="async">
        <span class="tag">${t(property.deal)}</span>
        <button class="fav ${isFavorite ? 'on' : ''}" data-fav="${property.id}"
                aria-pressed="${isFavorite}" aria-label="${t('aria_fav')}: ${property.name[lang]}">
          <i class="fa-${isFavorite ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <h3>${property.name[lang]}</h3>
        <p class="muted">
          <i class="fa-solid fa-location-dot"></i>
          ${CITIES[property.city][lang]} · ${t(property.type)}
        </p>
        <p class="price">${formatPrice(property)}</p>
        <ul class="specs">${specsHTML(property)}</ul>
        <button class="btn btn-outline" data-view="${property.id}" type="button">${t('view')}</button>
      </div>
    </article>`;
}

function renderProperties() {
  const list = getFilteredProperties();

  $('#grid').innerHTML = list.map(propertyCardHTML).join('');
  $('#empty').hidden = list.length > 0;
  $('#empty').textContent = t(state.favoritesOnly && !state.favorites.length ? 'empty_fav' : 'empty');
  $('#count').textContent = `${formatNumber(list.length)} ${t('found')}`;
  $('#favCount').textContent = formatNumber(state.favorites.length);
  $('#favToggle').setAttribute('aria-pressed', state.favoritesOnly);

  bindCardImages();
}

/** Mark card images as loaded/failed, even when they finished loading (cache) before listeners attached. */
function bindCardImages() {
  document.querySelectorAll('.card-img img').forEach((img) => {
    const box = img.parentNode;

    const markLoaded = () => box.classList.add('is-loaded');
    const markFailed = () => box.classList.add('is-failed');

    if (img.complete) {
      if (img.naturalWidth > 0) markLoaded();
      else markFailed();
    } else {
      img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', markFailed, { once: true });
    }
  });
}

function resetFilters() {
  $('#searchForm').reset();
  state.favoritesOnly = false;
  renderProperties();
}

/* ==========================================================================
   5. FAVORITES & DETAILS MODAL
   ========================================================================== */

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.favorites, id];

  storage.set(STORAGE_KEYS.favorites, state.favorites);
  renderProperties();
}

function openPropertyModal(id) {
  const property = PROPS.find((p) => p.id === id);
  const lang = state.lang;

  $('#mImg').src = property.img;
  $('#mImg').alt = property.name[lang];
  $('#mTitle').textContent = property.name[lang];
  $('#mLoc').textContent = `${CITIES[property.city][lang]} · ${t(property.type)} · ${t(property.deal)}`;
  $('#mPrice').textContent = formatPrice(property);
  $('#mSpecs').innerHTML = specsHTML(property);
  $('#mDesc').textContent = property.desc[lang];
  $('#modal').showModal();
}

/* ==========================================================================
   6. CONTACT FORM VALIDATION
   ========================================================================== */

/** Each rule returns an i18n error key, or '' when the value is valid. */
const FORM_RULES = {
  cName: (value) => (value.trim().length >= 2 ? '' : 'e_name'),
  cEmail: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'e_email'),
  cPhone: (value) =>
    /^[+\d\s()-]+$/.test(value.trim()) && value.replace(/\D/g, '').length >= 8 ? '' : 'e_phone',
  cMsg: (value) => (value.trim().length >= 10 ? '' : 'e_msg')
};

function validateField(id) {
  const input = $(`#${id}`);
  const message = input.nextElementSibling;
  const errorKey = FORM_RULES[id](input.value);

  input.classList.toggle('bad', Boolean(errorKey));
  input.setAttribute('aria-invalid', Boolean(errorKey));
  message.id = `${id}Error`;
  input.setAttribute('aria-describedby', message.id);
  message.dataset.err = errorKey;
  message.textContent = errorKey ? t(errorKey) : '';

  return !errorKey;
}

/** Re-translate visible messages after a language switch. */
function refreshFormMessages() {
  document.querySelectorAll('#contactForm small').forEach((message) => {
    if (message.dataset.err) message.textContent = t(message.dataset.err);
  });

  const status = $('#formStatus');
  if (status.textContent) status.textContent = t('ok');
}

function handleContactSubmit(event) {
  event.preventDefault();

  const isValid = Object.keys(FORM_RULES).map(validateField).every(Boolean);
  $('#formStatus').textContent = isValid ? t('ok') : '';

  if (isValid) event.target.reset();
}

/* ==========================================================================
   7. MOBILE MENU
   ========================================================================== */

function setMenuOpen(isOpen) {
  const burger = $('#burger');

  $('#menu').classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  burger.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
}

/* ==========================================================================
   8. EVENT LISTENERS & INIT
   ========================================================================== */

function bindSearchEvents() {
  $('#searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    renderProperties();
    $('#properties').scrollIntoView();
  });

  ['fCity', 'fType', 'fDeal'].forEach((id) => $(`#${id}`).addEventListener('change', renderProperties));
  ['fMin', 'fMax'].forEach((id) => $(`#${id}`).addEventListener('input', renderProperties));

  $('#resetBtn').addEventListener('click', resetFilters);

  $('#favToggle').addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    renderProperties();
  });

  // One delegated listener handles every card button.
  $('#grid').addEventListener('click', (event) => {
    const favButton = event.target.closest('[data-fav]');
    const viewButton = event.target.closest('[data-view]');

    if (favButton) toggleFavorite(Number(favButton.dataset.fav));
    else if (viewButton) openPropertyModal(Number(viewButton.dataset.view));
  });
}

function bindModalEvents() {
  const modal = $('#modal');

  $('#mClose').addEventListener('click', () => modal.close());
  $('#mContact').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close(); // click on the backdrop
  });
}

function bindNavigationEvents() {
  $('#langBtn').addEventListener('click', toggleLanguage);
  $('#burger').addEventListener('click', () => setMenuOpen(!$('#menu').classList.contains('open')));
  $('#menu').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') setMenuOpen(false);
  });

  // Close the mobile menu with Escape or when the viewport becomes wide.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change', () => setMenuOpen(false));
}

function bindScrollEvents() {
  const header = $('#header');
  const links = document.querySelectorAll('#menu a');

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!('IntersectionObserver' in window)) return;

  // Highlight the nav link of the section currently in the middle of the screen.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  links.forEach((link) => {
    const section = $(link.getAttribute('href'));
    if (section) observer.observe(section);
  });
}

function bindFormEvents() {
  Object.keys(FORM_RULES).forEach((id) => $(`#${id}`).addEventListener('blur', () => validateField(id)));
  $('#contactForm').addEventListener('submit', handleContactSubmit);
}

function init() {
  // Validate stored values: they may be old, edited or corrupted.
  const savedFavorites = storage.get(STORAGE_KEYS.favorites, []);
  const savedLang = storage.get(STORAGE_KEYS.lang, DEFAULT_LANG);

  state.favorites = Array.isArray(savedFavorites)
    ? savedFavorites.filter((id) => PROPS.some((p) => p.id === id))
    : [];
  state.lang = savedLang in I18N ? savedLang : DEFAULT_LANG;

  applyLanguage();
  bindSearchEvents();
  bindModalEvents();
  bindNavigationEvents();
  bindScrollEvents();
  bindFormEvents();
}

document.addEventListener('DOMContentLoaded', init);