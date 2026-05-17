const commonsFile = (fileName, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

const exhibit = {
  hero: {
    image: commonsFile("Tobacco kiocks in Moscow August 1990.jpg", 1800),
    caption:
      "Москва, август 1990. Фото из Wikimedia Commons. Один архивный кадр используется как атмосферный вход в выставку."
  },
  sections: [
    {
      id: "media",
      label: "Раздел 01",
      title: "Музыка и телевидение",
      image: commonsFile("Listiev.jpeg", 1200),
      imageAlt: "Телеведущий Владислав Листьев",
      imageNote:
        "Телевизионная культура 1990-х: новые ведущие, форматы и каналы. Источник: Wikimedia Commons.",
      context:
        "Телевидение 1990-х быстро вышло из позднесоветской модели. Появлялись коммерческие каналы, новые рекламные блоки, музыкальные передачи, ток-шоу и политические эфиры. Популярные программы вроде «Поля чудес» были частью этой среды, но не исчерпывали её: важнее сама перестройка медиа, конкуренция каналов и новая роль телевидения в повседневности.",
      timeline: [
        ["1991", "Распад СССР меняет структуру вещания и привычную телевизионную повестку."],
        ["1993", "Начинает вещание НТВ, усиливается конкуренция новостей и авторских программ."],
        ["1995", "Создание ОРТ закрепляет новую модель федерального телевизионного поля."],
        ["1996", "Телевидение становится важнейшей площадкой политической кампании."],
        ["1999", "Музыкальные и развлекательные форматы становятся частью массового ритма десятилетия."]
      ],
      cards: [
        {
          title: "Коммерческие телеканалы",
          type: "медиа",
          date: "1993-1999",
          image: commonsFile("NTV logo 1993.svg", 900),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:NTV_logo_1993.svg",
          teaser: "Новые каналы меняли язык новостей, рекламы и авторского телевидения.",
          text:
            "В 1990-е телевидение стало конкурентной медиасредой. НТВ, ОРТ и другие каналы формировали новые жанры: аналитические программы, авторские новости, ток-шоу, развлекательные проекты. Это был не просто набор передач, а изменение способа, которым общество видело политику и повседневность."
        },
        {
          title: "Реклама в эфире",
          type: "повседневность",
          date: "1990-е",
          image: ("https://i.ytimg.com/vi/tnQQwZIOPvc/maxresdefault.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Boris_Yeltsin_7_May_1996.jpg",
          teaser: "Телевидение стало пространством и потребления, и политической агитации.",
          text:
            "Рекламные блоки и политические ролики стали привычной частью эфира. Для зрителя это означало появление нового визуального языка: коротких слоганов, узнаваемых брендов, телекампаний и постоянного обращения к потребителю или избирателю."
        },
        {
          title: "Музыкальное телевидение",
          type: "культура",
          date: "1990-е",
          image: ("https://vatnikstan.ru/wp-content/uploads/2020/11/smotret-i-slushat.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Jane_Air_band.jpg",
          teaser: "Клипы, концерты и молодежные передачи задавали новую сцену поп-культуры.",
          text:
            "Музыкальная культура 1990-х существовала между концертными площадками, кассетами, радио и телевидением. Клиповая эстетика, хит-парады и молодежные программы делали музыкантов частью общей визуальной среды десятилетия."
        },
        {
          title: "«Поле чудес» и массовый формат",
          type: "телепрограмма",
          date: "с 1990",
          image: ("http://avatars.mds.yandex.net/get-vthumb/3479083/8d35a0d9a2a4a527a3c427187b21719a/800x450"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Artemiy_on_television_July_1990.jpg",
          teaser: "Один из узнаваемых форматов, но не главный образ всей эпохи.",
          text:
            "«Поле чудес» важно как пример устойчивого массового телевизионного ритуала. Передача показывала, как развлекательные форматы собирали аудиторию, но рядом с ними существовали новости, реклама, музыкальные передачи и политические эфиры."
        }
      ]
    },
    {
      id: "cinema",
      label: "Раздел 02",
      title: "Кино 1990-х",
      image: commonsFile("VHS-cassette.jpg", 1200),
      imageAlt: "Видеокассеты VHS",
      imageNote:
        "VHS стал важной частью зрительского опыта 1990-х. Источник: Wikimedia Commons.",
      context:
        "Кино 1990-х нельзя свести только к фестивальным успехам или одному культовому фильму. Это время кризиса кинопроката, видеосалонов, пиратских кассет, авторского кино, массовых комедий и социальной драмы. Зритель часто встречался с кино не в большом зале, а через VHS, домашний просмотр и локальный видеорынок.",
      timeline: [
        ["1991", "Распад прежней системы кинопроизводства и проката."],
        ["1992-1995", "Распространение видеосалонов и домашнего просмотра на VHS."],
        ["1994", "«Утомлённые солнцем» получает международное признание."],
        ["1997", "«Брат» становится важным образом городской постсоветской драмы."],
        ["1998", "Экономический кризис усиливает проблемы индустрии и проката."]
      ],
      cards: [
        {
          title: "VHS и видеосалоны",
          type: "зрительский опыт",
          date: "1990-е",
          image: ("https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67d6b7ab56f3f81a676096c2_67d6b9688e7e6008f0f88947/scale_1200"),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:VHS-cassette.jpg",
          teaser: "Домашний просмотр и видеосалоны изменили саму привычку смотреть кино.",
          text:
            "VHS-культура была не периферией, а одним из главных каналов доступа к кино. Через видеосалоны, прокат кассет и домашние коллекции зрители узнавали зарубежное и российское кино, часто вне официального кинопроката."
        },
        {
          title: "«Брат» и городская драма",
          type: "кино",
          date: "1997",
          image: ("https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/9/0/6/8098609/be80db827b851b9452e7c0e926ece24e.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Sergei_Bodrov_Jr.JPG",
          teaser: "Фильм стал важной частью разговора о постсоветской идентичности.",
          text:
            "«Брат» Алексея Балабанова не должен заменять собой всё кино 1990-х, но он точно фиксирует важные темы десятилетия: городскую растерянность, насилие, поиск опоры, новую музыку и напряжение между личной моралью и социальной реальностью."
        },
        {
          title: "Авторское кино",
          type: "индустрия",
          date: "1990-е",
          image: ("https://735606.selcdn.ru/thumbnails/photos/2022/07/22/bzpjofmv3uzjzo8f_1024.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:House_of_Kotelnicheskaya_in_1990.jpg",
          teaser: "Фестивальная траектория существовала рядом с кризисом массового проката.",
          text:
            "В 1990-е российское авторское кино сохраняло международное присутствие, но это не отменяло сложного положения индустрии внутри страны. Фестивальный успех и повседневный зрительский опыт часто расходились."
        },
        {
          title: "Массовый зритель",
          type: "повседневность",
          date: "1990-е",
          image: ("https://pastvu.com/_p/a/e/6/8/e68748sv7d3h71wcot.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://pastvu.com/_p/a/e/6/8/e68748sv7d3h71wcot.jpg",
          teaser: "Кино 1990-х жило между залом, кассетой, телевизором и рынком.",
          text:
            "Для массового зрителя 1990-х кино было смешанной средой: часть фильмов смотрели в кинотеатрах, часть на кассетах, часть по телевидению. Поэтому раздел показывает не только режиссеров и награды, но и инфраструктуру просмотра."
        }
      ]
    },
    {
      id: "mass-culture",
      label: "Раздел 03",
      title: "Массовая культура",
      image: commonsFile("Kiosk of azart games with Salyolovsky Rail Terminal.jpg", 1200),
      imageAlt: "Киоск у Савёловского вокзала",
      imageNote:
        "Киоски, рынки и уличная торговля стали частью городского пейзажа. Источник: Wikimedia Commons.",
      context:
        "Массовая культура 1990-х складывалась из повседневных практик: рынков, киосков, импортных товаров, игровых приставок, пейджеров, видеокассет, журналов и рекламы. Это была не просто мода на вещи, а быстрый переход к новой потребительской среде, где советские привычки сосуществовали с рыночной культурой.",
      timeline: [
        ["1992", "Либерализация цен и рост уличной торговли."],
        ["1992-1994", "Dendy становится одной из самых узнаваемых игровых приставок в России."],
        ["1994-1996", "Пейджеры и ранняя мобильная связь становятся символами новой деловой среды."],
        ["1997", "Журналы, реклама и видеорынки формируют новые потребительские образы."],
        ["1998", "Кризис резко меняет покупательские возможности и бытовые ожидания."]
      ],
      cards: [
        {
          title: "Киоски и рынки",
          type: "городская среда",
          date: "1990-е",
          image: commonsFile("Tobacco kiocks in Moscow August 1990.jpg", 1000),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Tobacco_kiocks_in_Moscow_August_1990.jpg",
          teaser: "Городская торговля стала видимым знаком новой экономики.",
          text:
            "Киоски, ларьки и вещевые рынки делали рыночную реформу буквально видимой на улице. Через них в повседневность входили импортные продукты, кассеты, журналы, бытовая техника и новая логика выбора."
        },
        {
          title: "Dendy",
          type: "игровая культура",
          date: "1990-е",
          image: commonsFile("Dendy Junior with cart and joypads.jpg", 1000),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Dendy_Junior_with_cart_and_joypads.jpg",
          teaser: "Приставка стала частью домашнего досуга и детской культуры.",
          text:
            "Dendy важна не как символ всех 1990-х, а как пример новой домашней массовой культуры. Игры, картриджи, телереклама и обмен опытом между детьми создавали отдельный пласт повседневности."
        },
        {
          title: "Пейджер",
          type: "технологии быта",
          date: "середина 1990-х",
          image: commonsFile("Motorola Advisor Pager (5004528069).jpg", 1000),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Motorola_Advisor_Pager_(5004528069).jpg",
          teaser: "До массовых мобильных телефонов пейджер был знаком связи и статуса.",
          text:
            "Пейджеры вошли в российскую городскую культуру середины 1990-х как технология срочной связи. Они особенно ассоциировались с бизнесом, сервисами, молодежью и образом человека, включенного в новую динамичную экономику."
        },
        {
          title: "Журналы и реклама",
          type: "визуальная культура",
          date: "1990-е",
          image: ("https://www.unisender.com/ru/blog/wp-content/uploads-webpc/uploads/2025/12/1_kommercheskaya-i-politicheskaya-reklama-90-h-v-rossii.png.webp"),
          source: "Wikimedia Commons",
          sourceUrl: "hhttps://www.unisender.com/ru/blog/wp-content/uploads-webpc/uploads/2025/12/1_kommercheskaya-i-politicheskaya-reklama-90-h-v-rossii.png.webp",
          teaser: "Новые витрины и печатная культура меняли представления об успехе.",
          text:
            "Журналы, витрины и реклама создавали новые визуальные ориентиры: потребление, мода, бизнес, развлечения. Массовая культура 1990-х была заметна не только на экране, но и в городской среде."
        }
      ]
    },
    {
      id: "science-education",
      label: "Раздел 04",
      title: "Наука и образование",
      image: ("https://avatars.mds.yandex.net/i?id=20430e330201a0e2f4fe527fff598e69_l-5219719-images-thumbs&n=13"),
      imageAlt: "Архивный приказ о переименовании МГПИ",
      imageNote:
        "",
      context:
        "Наука и образование 1990-х переживали резкое недофинансирование, отток специалистов и институциональные реформы. Но это не только история кризиса: появлялись грантовые механизмы, новые учебники, гимназии и лицеи, негосударственные вузы, платные программы и ранний Рунет. Раздел показывает напряжение между потерями и адаптацией.",
      timeline: [
        ["1992", "Создан Российский фонд фундаментальных исследований."],
        ["1993", "Конституция РФ закрепляет право на образование."],
        ["1994", "Зарегистрирован национальный домен .ru."],
        ["1990-е", "Растет число негосударственных вузов и платных программ."],
        ["1998", "Кризис усиливает финансовые проблемы школ, вузов и науки."]
      ],
      cards: [
        {
          title: "Школа 1990-х",
          type: "образование",
          date: "1990-е",
          image: ("https://content-16.foto.my.mail.ru/community/ftrghana/385/h-3576.jpg"),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_%D0%BE_%D0%BF%D0%B5%D1%80%D0%B5%D0%B8%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8_%D0%9C%D0%93%D0%9F%D0%98.jpg",
          teaser: "Школа сталкивалась с нехваткой ресурсов и изменением программ.",
          text:
            "Школа 1990-х переживала нехватку финансирования, обновление учебников и постепенный отход от советских образовательных схем. Для рассказа важно показать не только бедность системы, но и поиск новых форм обучения."
        },
        {
          title: "Вузы и платное образование",
          type: "университеты",
          date: "1990-е",
          image: ("https://upload.wikimedia.org/wikipedia/commons/0/09/RIAN_archive_60127_Lomonosov_Moscow_State_University_on_Lenin_Hills.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Main_Building_of_Moscow_University.jpg",
          teaser: "Высшая школа менялась через новые программы и рыночные механизмы.",
          text:
            "В 1990-е высшее образование оказалось между прежней государственной системой и новыми рыночными условиями. Расширялись платные программы, появлялись негосударственные вузы, менялись представления о востребованных специальностях."
        },
        {
          title: "Наука и гранты",
          type: "наука",
          date: "1992-1999",
          image: ("https://test.sbras.info/system/files/upload/2019-08-22/K2.jpg"),
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Institutes_of_Russian_Academy_of_Science.jpg",
          teaser: " Академгородок 1990\
          Кризис науки сочетался с новыми механизмами поддержки исследований.",
          text:
            "Недофинансирование и отток кадров стали тяжелыми чертами научной сферы 1990-х. Одновременно возникали грантовые институты, международные связи и новые способы поддерживать исследования в условиях сокращения прежней системы."
        },
        {
          title: "Ранний Рунет",
          type: "цифровая среда",
          date: "1994-1999",
          image: ("https://cdn-images.mn.ru/images/2026/04/1000135105-size_834x546.jpg"),
          containImage: true,
          source: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Rambler.svg",
          teaser: "Регистрация .ru стала точкой отсчета новой информационной среды.",
          text:
            "Ранний Рунет был небольшим, но важным пространством университетов, энтузиастов, провайдеров и первых онлайн-проектов. Для темы образования он важен как начало цифровой инфраструктуры, которая позже сильно изменила доступ к информации."
        }
      ]
    }
  ]
};

const sectionsRoot = document.querySelector("#sections");
const hero = document.querySelector(".hero");
const heroCaption = document.querySelector("#hero-caption");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__image");
const modalMeta = document.querySelector(".modal__meta");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector(".modal__text");
const modalSource = document.querySelector(".modal__source");
const closeModalButton = document.querySelector(".modal__close");
const toTopButton = document.querySelector(".to-top");
const progressBar = document.querySelector(".reading-progress");

hero.style.setProperty("--hero-image", `url("${exhibit.hero.image}")`);
heroCaption.textContent = exhibit.hero.caption;

const createSection = (section) => {
  const sectionElement = document.createElement("section");
  sectionElement.className = "exhibit-section reveal";
  sectionElement.id = section.id;

  sectionElement.innerHTML = `
    <div class="section-grid">
      <aside class="section-photo">
        <div class="section-photo__frame">
          <img src="${section.image}" alt="${section.imageAlt}" loading="lazy">
        </div>
        <p class="source-note">${section.imageNote}</p>
      </aside>
      <div class="section-content">
        <p class="section-kicker">${section.label}</p>
        <h2>${section.title}</h2>
        <p class="section-context">${section.context}</p>
        <div class="timeline" aria-label="Линия времени">
          ${section.timeline
            .map(
              ([year, text]) => `
                <div class="timeline__item">
                  <span class="timeline__year">${year}</span>
                  <span class="timeline__text">${text}</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="cards">
          ${section.cards
            .map(
              (card, index) => `
                <button class="card" type="button" data-section="${section.id}" data-card="${index}">
                  <span class="card__image-wrap">
                    <img class="card__image ${card.containImage ? "card__image--contain" : ""}" src="${card.image}" alt="" loading="lazy">
                  </span>
                  <span class="card__body">
                    <span class="card__meta">${card.date} · ${card.type}</span>
                    <h3>${card.title}</h3>
                    <p>${card.teaser}</p>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  return sectionElement;
};

sectionsRoot.append(...exhibit.sections.map(createSection));

const revealTargets = Array.from(document.querySelectorAll(".intro-note, .exhibit-section, .card, .closing-exhibition"));
revealTargets.forEach((target) => target.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-revealed"));
}

const findCard = (sectionId, cardIndex) => {
  const section = exhibit.sections.find((item) => item.id === sectionId);
  return section.cards[Number(cardIndex)];
};

const openModal = (card) => {
  modalImage.src = card.image;
  modalImage.alt = card.title;
  modalImage.classList.toggle("modal__image--contain", card.containImage === true);
  modalMeta.textContent = `${card.date} · ${card.type} · ${card.source}`;
  modalTitle.textContent = card.title;
  modalText.textContent = card.text;
  modalSource.href = card.sourceUrl;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  closeModalButton.focus();
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
};

document.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (card) {
    openModal(findCard(card.dataset.section, card.dataset.card));
  }
});

closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sectionElements = exhibit.sections.map((section) => document.getElementById(section.id));

const activateNav = () => {
  const current = sectionElements
    .filter((section) => section.getBoundingClientRect().top < window.innerHeight * 0.42)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
  });

  toTopButton.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.55);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.setProperty("--progress", `${progress}%`);
};

window.addEventListener("scroll", activateNav, { passive: true });
window.addEventListener("resize", activateNav);
activateNav();
