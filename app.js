// @ts-check

const app = document.querySelector('#app');
if (!app) throw new Error('Application root is missing.');

const utilityLinks = [
  ['Careers', 'https://careers.nfp.com/job-search-results/?primary_state=FL'],
  ['Contact Us', '/contact'],
  ['Learn About NFP', 'https://nfp.com/']
];

const navItems = [
  ['Individual Solutions', '/individual-solutions'],
  ['Corporate Benefits', '/corporate-benefits'],
  ['About', '/about'],
  ['Start a Quote', 'https://quote.mbaileygroup.com/']
];

const footerLinks = [
  ['Individual Solutions', '/individual-solutions'],
  ['Corporate Benefits', '/corporate-benefits'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
  ['Accessibility', '/accessibility']
];

const legalDisclosure = `This site is published for residents of the United States only. Registered Representatives of Kestra Investment Services, LLC and Investment Advisor Representatives of Kestra Advisory Services, LLC, may only conduct business with residents of the states and jurisdictions in which they are properly registered. Therefore, a response to a request for information may be delayed. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed. Neither Kestra IS or Kestra AS provides legal or tax advice. For additional information, please contact our Compliance department at 737-443-2582. Investor Disclosures:`;

const reviews = [
  {
    title: 'Made a daunting process easy',
    copy: 'Tina Moller was absolutely amazing! She took the time to help me choose a health insurance plan that would work for me. She answered all my questions and made a daunting process easy! I would recommend the Bailey Group and Tina to anyone looking to explore their health insurance options.',
    author: 'Aubrey G.'
  },
  {
    title: 'Treated like family',
    copy: 'Tammy Evans is one of the most professional and committed people I and my family have ever dealt with... in any business. She found solutions, made them happen, and executed. We are insured, treated like family, and could not be more proud to be associated with Tammy and Bailey Group.',
    author: 'Stewart D.'
  },
  {
    title: 'Made me feel totally at ease',
    copy: 'Just wanted say its always a pleasure to work with The Bailey Group and specifically Tammy Morabito. In 2 minutes, she addressed my needs and concerns made me feel totally at ease. She is smart, professional and most importantly a subject matter expert and I look forward to working with her on my account.',
    author: 'Dale R.'
  },
  {
    title: 'Went way above and beyond',
    copy: 'Andrew was extremely helpful and pleasantly professional. He had a sincere desire to help me with my very complex problem. I’m very happy to state that he solved it and then some! He went way above and beyond and I recommend him to anyone who wants a stellar quality customer service experience.',
    author: 'Donald F.'
  }
];

const solutionCards = [
  ['Health Insurance', 'We can help you choose the right plan for your needs and budget.', 'Family walking down the beach.', '/mbaileygroup-recreation/assets/source/individual-solutions/health-insurance.jpeg', '/individual-solutions/health-insurance'],
  ['Medicare Coverage', 'New to Medicare? Need help understanding your options? We can help.', 'Older couple holding hands with two surfboards.', '/mbaileygroup-recreation/assets/source/individual-solutions/medicare-coverage.jpg', '/individual-solutions/medicare'],
  ['Financial Services', 'As with most other things in life, the key to achieving your long-term financial objectives is planning.', 'Surfboard lying on an empty beach.', '/mbaileygroup-recreation/assets/source/individual-solutions/financial-services.jpg', 'http://www.mbaileygroup-financial.com/'],
  ['Dental Insurance', 'An undeniable relationship exists between a healthy mouth and overall good health.', 'Woman smiling in dental chair before her appointment.', '/mbaileygroup-recreation/assets/source/individual-solutions/dental-insurance.jpg', '/individual-solutions/dental-insurance'],
  ['Life Insurance', 'The best time to review your current life insurance situation is directly before or after a major life event.', 'Little girl with her head resting on her dad’s shoulder.', '/mbaileygroup-recreation/assets/source/individual-solutions/life-insurance.jpg', '/individual-solutions/life-insurance'],
  ['International Health Insurance', 'When you travel, you need health insurance that goes with you. Don’t leave home without it.', 'Airplane landing on a runway.', '/mbaileygroup-recreation/assets/source/individual-solutions/travel-insurance.jpg', '/individual-solutions/travel-insurance'],
  ['Accident, Critical Illness & Hospital Indemnity', 'Three plans that go above and beyond what health insurance provides.', 'Busy hospital hallway.', '/mbaileygroup-recreation/assets/source/individual-solutions/accident-critical-illness-hospital-indemnity.jpg', '/individual-solutions/accident-critical-illness-hospital-idemnity']
];

const githubPagesBase = '/mbaileygroup-recreation';

function currentPath() {
  const browserPath = window.location.pathname;
  const pathWithoutBase = browserPath === githubPagesBase
    ? '/'
    : browserPath.startsWith(`${githubPagesBase}/`)
      ? browserPath.slice(githubPagesBase.length)
      : browserPath;
  const path = pathWithoutBase.replace(/\/+$/, '');
  return path || '/';
}

function githubPagesPath(path) {
  const localPath = path === githubPagesBase
    ? '/'
    : path.startsWith(`${githubPagesBase}/`)
      ? path.slice(githubPagesBase.length)
      : path;
  return `${githubPagesBase}${localPath === '/' ? '/' : localPath}`;
}

function wordmark() {
  return `<img class="brand-logo" src="/mbaileygroup-recreation/assets/source/bailey-logo.png" alt="The Bailey Group – An NFP Company">`;
}

/** @param {string} label @param {string} href @param {string} [extra] */
function internalLink(label, href, extra = '') {
  const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ' data-route'} ${extra}>${label}</a>`;
}

function header() {
  const path = currentPath();
  return `<header class="site-header">
    <div class="header-wrap">
      <nav class="utility-nav" aria-label="Utility navigation">
        ${utilityLinks.map(([label, href]) => internalLink(label, href)).join('')}
      </nav>
      <div class="brand-row">
        <span class="brand-row__spacer" aria-hidden="true"></span>
        <a class="logo-link" data-route href="/" aria-label="The Bailey Group home">${wordmark()}</a>
        <span class="brand-row__spacer" aria-hidden="true"></span>
      </div>
      <button class="mobile-menu-button" id="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">Menu <span aria-hidden="true">☰</span></button>
      <nav class="primary-nav" id="primary-navigation" aria-label="Primary navigation">
        <div class="primary-nav__links">
          ${navItems.map(([label, href]) => `<a href="${href}" data-route${path === href ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        </div>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-wrap">
      <div class="footer-top">
        <div class="footer-brand">
          ${wordmark()}
          <p>${legalDisclosure} <a href="https://bit.ly/KF-Disclosures" target="_blank" rel="noreferrer">Investor Disclosures</a></p>
        </div>
        <nav aria-label="Footer navigation">
          <ul class="footer-links">${footerLinks.map(([label, href]) => `<li>${internalLink(label, href)}</li>`).join('')}</ul>
        </nav>
      </div>
      <div class="footer-contact">
        <p><a href="https://maps.google.com/maps?ll=29.864157,-81.296313&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=The%20Bailey%20Group%201200%20Plantation%20Island%20Dr%20S%20%23210%20St%20Augustine%2C%20FL%2032080" target="_blank" rel="noreferrer">Get Directions</a><br>1200 Plantation Island Dr S #210 | St. Augustine, FL 32080</p>
        <p><a href="tel:904-461-1800">904.461.1800</a> or <a href="tel:866-826-1800">866.826.1800</a><br><a href="mailto:info@mbaileygroup.com">info@mbaileygroup.com</a></p>
      </div>
      <div class="footer-small">${legalDisclosure} <a href="https://bit.ly/KF-Disclosures" target="_blank" rel="noreferrer">Investor Disclosures</a></div>
      <div class="footer-meta"><span>© ${new Date().getFullYear()} The Bailey Group</span><span>Insurance & Benefits · St. Augustine, Florida</span></div>
    </div>
  </footer>`;
}

/** @param {{title: string, copy: string, author: string}} review */
function reviewCard(review) {
  return `<article class="review">
    <img class="review-stars" src="/mbaileygroup-recreation/assets/source/five-stars.svg" alt="Five-star review">
    <h3>“${review.title}”</h3>
    <p>${review.copy}</p>
    <cite>– ${review.author}</cite>
  </article>`;
}

function trustLogos() {
  const logos = [
    ['Rayonier logo', '/mbaileygroup-recreation/assets/source/client-logos/rayonier-logo.svg'],
    ['accesso logo', '/mbaileygroup-recreation/assets/source/client-logos/accesso-logo.svg'],
    ['Ring Power logo', '/mbaileygroup-recreation/assets/source/client-logos/ring-power-logo.svg'],
    ['Brooks Rehabilitation logo', '/mbaileygroup-recreation/assets/source/client-logos/brooks-rehab-logo.svg'],
    ['Jacksonville Police Officers and Fire Fighters Health Insurance Trust logo', '/mbaileygroup-recreation/assets/source/client-logos/jacksonville-police-fire-trust-logo.svg'],
    ['Flagler Health+ logo', '/mbaileygroup-recreation/assets/source/client-logos/flagler-health-logo.svg']
  ];
  return `<div class="logo-row" aria-label="Selected corporate clients">${logos.map(([alt, src]) => `<div class="logo-tile"><img src="${src}" alt="${alt}" loading="lazy"></div>`).join('')}</div>`;
}

function home() {
  return `<main id="main-content">
    <section class="homepage-hero" aria-labelledby="home-title">
      <div class="hero-visual">
        <img src="/mbaileygroup-recreation/assets/source/hero-pregnant-beagle.jpg" alt="Pregnant woman smiling at her pet beagle" fetchpriority="high">
      </div>
      <div class="hero-panel">
        <div class="hero-panel__grid">
          <div class="hero-panel__title">
            <p class="eyebrow">Individual Health &amp; Medicare</p>
            <h1 id="home-title">Getting enrolled in a health insurance or Medicare plan doesn't have to be complicated.</h1>
          </div>
          <div class="hero-panel__copy">
            <p>In fact, it can be the opposite. At The Bailey Group, you’ll work with a local insurance advisor to find just the right insurance coverage for your specific needs &amp; budget. Our goal is to make getting covered <em>simple</em>, with no added costs or fees.</p>
            <a class="button" href="https://quote.mbaileygroup.com/" target="_blank" rel="noreferrer">Start a Quote &gt;</a>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews-layout section--mist" aria-label="Client reviews">
      <div class="reference-photo reference-photo--team">
        <img src="/mbaileygroup-recreation/assets/source/individual-health-team.jpg" alt="The Bailey Group individual health team" loading="lazy">
      </div>
      <div class="reviews-copy">
        <div class="review-grid">${[reviews[0], reviews[2], reviews[1], reviews[3]].map(reviewCard).join('')}</div>
        <div class="reviews-cta">
          <h2>Over 135 five-star reviews and 5.0 average rating</h2>
          <a class="review-link" href="https://www.google.com/search?q=the+bailey+group" target="_blank" rel="noreferrer">See all Google Reviews ›</a>
        </div>
      </div>
    </section>

    <section class="split-feature split-feature--benefits" aria-labelledby="benefits-title">
      <div class="split-feature__copy">
        <div class="split-feature__copy-inner">
          <p class="eyebrow">Corporate Benefits</p>
          <h2 id="benefits-title">Custom solutions for happy, healthy employees.</h2>
          <p>Building the perfect plan to attract high-performing, loyal employees is hard. Making sure that the plan meets legal, regulatory and other requirements is even harder. You need a program customized for you — not an off-the-shelf package. One that’s designed for your size, location, number of employees, demographics and type of business.</p>
          <p>Finding the right solution depends on having a different perspective that sees the big picture as well as the intricate details. That’s where we come in, bringing you the right people, technology, experience and insights that can help you see and do so much more. Most of all, we strive to take the headaches out of the process.</p>
          <a class="text-link" data-route href="/corporate-benefits">Learn more ›</a>
        </div>
      </div>
      <div class="reference-photo reference-photo--work">
        <img src="/mbaileygroup-recreation/assets/source/happy-healthy-employees.jpg" alt="Happy and healthy employees going about their work days" loading="lazy">
      </div>
    </section>

    <section class="section trust-block" aria-labelledby="trust-title">
      <div class="section__wrap">
        <h2 id="trust-title">Over 300 companies and organizations trust us to understand their pain points and carefully craft a benefits program that supports and reflects their vision.</h2>
        ${trustLogos()}
      </div>
    </section>

    <section class="financial-card" aria-labelledby="financial-title">
      <div class="financial-card__copy">
        <div>
          <p class="eyebrow">Financial Services</p>
          <h2 id="financial-title">No matter where you want to go, we’ll help you get there, together.</h2>
          <p>Our first priority is helping you take care of yourself and your family. We want to learn more about your personal situation, identify your dreams and goals, and understand your risk tolerance. Long-term relationships that encourage open and honest communication have been the cornerstone of our foundation of success.</p>
          <a class="button" href="http://mbaileygroup-financial.com/" target="_blank" rel="noreferrer">Learn more</a>
        </div>
      </div>
      <div class="financial-card__visual"><img src="/mbaileygroup-recreation/assets/source/financial-services.jpg" alt="The Bailey Group financial services advisor" loading="lazy"></div>
    </section>
  </main>`;
}

/** @param {string} title @param {string} intro */
function pageHero(title, intro) {
  return `<section class="page-hero"><div class="page-hero__inner"><h1>${title}</h1>${intro ? `<p>${intro}</p>` : ''}</div></section>`;
}

function solutions() {
  return `<main id="main-content">
    ${pageHero('Individual Solutions', 'We make the process of getting the insurance coverage you need simple.')}
    <section class="section" aria-labelledby="solutions-title"><div class="section__wrap">
      <p class="content-intro" id="solutions-title">Straightforward advice, local support, and options shaped around the way you live.</p>
      <div class="card-grid">${solutionCards.map(([title, text, alt, src, href]) => `<article class="solution-card"><div class="solution-card__image"><img src="${src}" alt="${alt}" loading="lazy"></div><div class="solution-card__content"><h2>${title}</h2><p>${text}</p><a href="${href}"${href.startsWith('/') ? ' data-route' : ' target="_blank" rel="noreferrer"'}>Learn More →</a></div></article>`).join('')}</div>
    </div></section>
  </main>`;
}

/** @param {string} title @param {string} intro @param {string} content */
function serviceShell(title, intro, content) {
  return `<main id="main-content">${pageHero(title, intro)}<section class="section"><div class="section__wrap service-page"><p class="service-breadcrumb"><a data-route href="/individual-solutions">← Individual Solutions</a></p>${content}</div></section></main>`;
}

function quotePanel() {
  return `<aside class="quote-panel"><h2>Work one-on-one with an agent to get enrolled at no additional cost.</h2><a class="button button--ink" href="https://quote.mbaileygroup.com/" target="_blank" rel="noreferrer">Start a Quote</a></aside>`;
}

function healthInsurance() {
  const terms = [
    ['Coverage', 'When you enroll in a health plan, the insurance company agrees to pay for preventive services and part of your medical bills when you need care.'],
    ['In-network', 'Using a doctor, hospital, or health care facility in your insurance company’s network generally means lower prices for care.'],
    ['Out-of-network', 'Care from a non-network provider can be subject to deductibles and copayments and may cost more.'],
    ['Premium', 'Premiums are the payments you make each month to your insurance company for coverage.'],
    ['Deductible', 'A specific dollar amount you pay out of pocket before benefits are available through a health plan.'],
    ['Co-insurance', 'The amount or percentage you pay for certain covered health care services, typically after a deductible is met.'],
    ['Co-payment', 'A flat fee that you pay toward the cost of covered medical services.'],
    ['Out-of-pocket max', 'The highest out-of-pocket amount paid for covered services during a benefit period.']
  ];
  return serviceShell('We Make Health Insurance Simple.', 'We can help you find the right plan for your needs and budget – at no additional cost.', `<h2 class="service-lead">Health insurance is confusing. We’re here to simplify things.</h2><div class="service-grid service-grid--three"><article class="service-card"><h3>Work one-on-one with an agent dedicated to you and your family.</h3><p>At The Bailey Group, you’ll work with a dedicated agent to find the right Florida Blue plan based on how you actually use your health insurance.</p></article><article class="service-card"><h3>Get enrolled at no extra cost.</h3><p>We take care of the entire process for you at no extra cost. The premium remains the same whether you get help from us or do it on your own.</p></article><article class="service-card"><h3>Support throughout the year.</h3><p>Claims can be denied and payments can fail. No matter the issue, your dedicated agent at The Bailey Group is here to help.</p></article></div><aside class="service-callout"><h2>The Bailey Group is your local agency for Florida Blue.</h2><p>Our team has expert knowledge of Florida Blue plans and options, plus preferred access to help with claims issues and questions related to your plan.</p></aside><h2>Knowledge is power when it comes to health insurance.</h2><p>Here are key terms you’re bound to encounter along the way.</p><div class="term-grid">${terms.map(([term, definition]) => `<article class="term"><h3>${term}</h3><p>${definition}</p></article>`).join('')}</div>${quotePanel()}`);
}

function medicare() {
  const parts = [
    ['Part A', 'Hospital insurance – for inpatient stays and more', 'Usually there is no monthly premium for Part A coverage. You may pay the Part A deductible and coinsurance when you receive inpatient hospital care.'],
    ['Part B', 'Medical insurance – for doctor services and more', 'Part B is optional coverage. You usually pay a monthly premium and, for most services, meet the deductible and pay coinsurance.'],
    ['Part C', 'Medicare Advantage', 'Medicare Advantage plans combine Medicare Part A and Part B and usually include prescription drug coverage. Many plans include dental, hearing, and vision benefits.'],
    ['Part D', 'Medicare-approved prescription drug coverage', 'Part D is sold through private organizations and can be purchased as a standalone prescription drug plan or included with a Medicare Advantage plan.']
  ];
  return serviceShell('We’re here to help you navigate the complicated world of MEDICARE', 'Local guidance for understanding coverage, enrollment, and plan options.', `<h2 class="service-lead">The four parts of Medicare</h2><p>Original Medicare (Part A and B) does not cover all medical expenses. Here’s a quick overview of the four parts and what they mean to you.</p><div class="service-grid service-grid--two">${parts.map(([part, title, copy]) => `<article class="service-card service-card--number"><span>${part}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div><h2>Medicare’s annual timeline</h2><div class="service-grid service-grid--two"><article class="service-card"><h3>Medicare Advantage Open Enrollment Period</h3><p>From January 1 through March 31 each year, people in an MA plan can make a one-time election to another MA plan or Original Medicare.</p></article><article class="service-card"><h3>Annual Election Period (AEP)</h3><p>From October 15 through December 7, you can choose to enroll in an MA plan or Original Medicare for the next year.</p></article><article class="service-card"><h3>Initial Election Period</h3><p>If you’re eligible because you’re turning 65, your seven-month window starts three months before your birthday month and ends three months after.</p></article><article class="service-card"><h3>Special Enrollment Period</h3><p>Special enrollment timing depends on your circumstances. An advisor can help you understand your options.</p></article></div><aside class="quote-panel"><h2>Let us help guide you through your Medicare options.</h2><a class="button button--ink" href="tel:904-671-0511">Call 904.671.0511</a></aside>`);
}

function dentalInsurance() {
  return serviceShell('You Only Have One Smile. Take Care of It.', 'BlueDental insurance plans can protect more than just your teeth.', `<h2 class="service-lead">You’re already taking great care of your health. Make sure your teeth are covered too.</h2><p>Dental care is not included in every health insurance plan. While some health plans include basic dental check-ups, many adult plans have no coverage at all.</p><div class="service-grid service-grid--two"><article class="service-card"><h3>Affordable Dental Coverage Through BlueDental</h3><p>An undeniable relationship exists between a healthy mouth and overall good health. An affordable BlueDental plan looks out for more than just your teeth.</p><ul><li>Plans for adults and children compliant with Affordable Care Act regulations.</li><li>Specific plans with value-added benefits, including savings on orthodontic and cosmetic procedures.</li><li>No pre-existing condition limitations.</li></ul></article><article class="service-card"><h3>See if your dentist is covered.</h3><p>Before choosing health insurance, confirm that your preferred provider is covered under the plan.</p><ol><li>Find BlueDental plans available in your area.</li><li>Select “Is my dentist covered?”</li><li>Enter your dentist’s last name and location.</li><li>Select your dentist and view available plans.</li></ol></article></div>${quotePanel()}`);
}

function lifeInsurance() {
  const events = ['Married or getting married', 'A parent or about to become one', 'New homeowner', 'Job change', 'Retirement', 'Single'];
  return serviceShell('Affordable Protection For Your Family’s Future', 'Term life insurance solutions through Florida Combined Life Insurance.', `<h2 class="service-lead">No one will debate the importance of life insurance.</h2><p>Some common misconceptions keep people from exploring the available options. Typically the best time to review your life insurance situation is directly before or after a major life event.</p><div class="service-grid service-grid--three">${events.map((event) => `<article class="service-card"><h3>${event}</h3><p>Reviewing your protection at this stage can help you keep the people and commitments that matter to you in mind.</p></article>`).join('')}</div><h2>LifeEssentials<sup>SM</sup> Term Life Insurance Protection Through Florida Blue</h2><div class="service-grid service-grid--two"><article class="service-card"><h3>Age 18 – 64</h3><p>LifeEssentials Level Term is available to individuals between the ages of 18 and 64.</p></article><article class="service-card"><h3>Up to 30 years of coverage</h3><p>Choose from 10, 15, 20, 25, or 30 years of coverage.</p></article><article class="service-card"><h3>Up to $100,000 of coverage</h3><p>Choose coverage amounts of $25,000, $50,000, $75,000, or $100,000.</p></article><article class="service-card"><h3>30-day free look period</h3><p>If you are not happy with a term life plan within the first 30 days, cancel the coverage and premiums are refunded.</p></article></div>${quotePanel()}`);
}

function travelInsurance() {
  return serviceShell('Health Insurance That Travels With You', 'Quickly find and access quality care internationally with GeoBlue.', `<h2 class="service-lead">Take quality health care coverage with you no matter where your travels take you.</h2><p>Leave home confident that a trusted source of medical care is available on a moment’s notice.</p><div class="service-grid service-grid--three"><article class="service-card"><h3>No matter the country, town or time zone</h3><p>Whether you’re traveling to Africa, Asia, or the Caribbean, GeoBlue can help you travel with confidence.</p><a href="https://www.geobluetravelinsurance.com/destination_dashboard/index.cfm" target="_blank" rel="noreferrer">See where GeoBlue is available →</a></article><article class="service-card"><h3>Doctors that speak your language</h3><p>Professionals must meet GeoBlue’s standards before joining the network, including English fluency and certification requirements.</p></article><article class="service-card"><h3>From a leisure trip to a two-year work assignment</h3><p>Choose a plan customized for the length of your trip—no need to pay for a monthly plan when travel only lasts a week.</p></article></div><aside class="service-callout"><h2>GeoBlue members enjoy these benefits in 180 countries.</h2><div class="service-benefits"><span>24/7 phone and mobile support</span><span>Prompt access to trusted doctors and hospitals</span><span>Cashless appointment scheduling</span></div></aside>${quotePanel()}`);
}

function accidentCoverage() {
  const plans = [
    ['Accident', 'Accidents like fractures, concussions, and lacerations are more common than you think. Be prepared to cover unplanned expenses as you recover.'],
    ['Critical Illness', 'Cancer, heart attack, and stroke can put finances at risk. Critical Illness coverage helps protect finances with cash benefits paid when a covered illness is diagnosed.'],
    ['Hospital Indemnity', 'Get extra protection through supplemental income paid directly to you to help offset unexpected medical expenses that can add up quickly.']
  ];
  return serviceShell('Three Plans That Go Above & Beyond Health Insurance', 'Extra support for unexpected health events and the expenses that come with them.', `<div class="service-grid service-grid--three">${plans.map(([title, copy]) => `<article class="service-card service-card--accent"><h2>${title}</h2><p>${copy}</p><a class="text-link" href="https://quote.mbaileygroup.com/" target="_blank" rel="noreferrer">Start a Quote →</a></article>`).join('')}</div>${quotePanel()}`);
}

function corporateBenefits() {
  return `<main id="main-content">
    ${pageHero('Corporate Benefits', 'You want exceptional people, so you need exceptional benefits.')}
    <section class="section"><div class="section__wrap">
      <p class="content-intro">Empower your workforce to succeed, at work and at home, whether you’re a cast of thousands or a small tight-knit team.</p>
      <div class="focus-row"><div><h3>Employee Benefits</h3></div><div><h3>Executive Benefits</h3></div><div><h3>HR Solutions</h3></div><div><h3>Well-Being &amp; Engagement</h3></div></div>
      <div class="copy-columns"><p>Either way, you know good people who have your back are valuable. And the best deserve the best: a complete benefits package they understand.</p><p>We’ve helped businesses overcome every corporate benefits challenge you can think of. We can help find the right retirement plans, facilitate informational meetings that are actually fun, refine current practices, manage notification schedules, customize a technology toolkit, and stay current on compliance.</p><p>Beyond showcasing a variety of plans, we can offer strategic advice as you piece together a holistic benefits ecosystem. Our advisors can support you with tech and HR solutions to ease administrative burden, too.</p><p>Ultimately, the heart of corporate benefits is making your offerings work for your people. We can partner with you to strengthen employees’ appreciation of their benefits for the long haul.</p></div>
      <div class="nfp-panel"><div><h2>Backed by NFP – a leading insurance broker and consultant.</h2><p>Complex risks will always be part of life, and managing them well requires specialized expertise. Let The Bailey Group and NFP take the worry out of protecting it all and help you build for the future.</p><a class="button button--ink" href="https://nfp.com/" target="_blank" rel="noreferrer">Learn more about NFP »</a></div><div class="nfp-mark" aria-label="NFP">NFP</div></div>
    </div></section>
    <section class="section section--mist trust-block"><div class="section__wrap"><h2>Over 300 companies and organizations trust us to understand their pain points and carefully craft a benefits program that supports and reflects their vision.</h2>${trustLogos()}</div></section>
  </main>`;
}

function about() {
  const history = [
    ['1954', 'John D. Bailey, Sr. at his desk in 1954', 'The firm of Thompson Bailey Baker, established 75 years ago, was founded by John Thompson and Harold Ryman in St. Augustine, Florida. In 1954, John Bailey becomes a partner in the business.', ''],
    ['1984', 'Mark Bailey, Sr. joins the firm', 'John’s son, Mark, joins the firm after graduating from Vanderbilt University with a double-major in economics and business.', ''],
    ['1996', 'The Bailey Group is founded', 'Mark Bailey, Sr. subsequently buys Thompson Bailey Baker’s principal lines of business associated with health, life, annuities, retirement benefits, estate conservation, and financial products. Shortly after, The Bailey Group is founded.', '/mbaileygroup-recreation/assets/bailey-group-leadership.jpg'],
    ['2001', 'A home on Plantation Island Drive', 'The Bailey Group moves into their new office located on Plantation Island Drive just off of the 312 bridge heading east.', '/mbaileygroup-recreation/assets/bailey-office.jpg'],
    ['2003', 'The Bailey Health Group is founded', 'The Bailey Health Group partners with BlueCross and BlueShield of Florida, now known as Florida Blue, to offer individual health insurance products.', ''],
    ['2016', 'Celebrating 20 years', 'The Bailey Group celebrates their 20th year serving the Northeast Florida community.', '/mbaileygroup-recreation/assets/bailey-community.jpg']
  ];
  return `<main id="main-content">
    ${pageHero('Meet The Bailey Group', 'Our journey to become one of the largest insurance and benefits firms in the State of Florida began over 60 years ago.')}
    <section class="section"><div class="section__wrap"><h2 class="content-intro">Our Story</h2><div class="timeline">${history.map(([year, title, copy, image]) => `<article class="timeline-item"><div class="timeline-year">${year}</div><div class="timeline-content"><h2>${title}</h2><p>${copy}</p>${image ? `<img class="timeline-image" src="${image}" alt="${title}" />` : ''}</div></article>`).join('')}</div></div></section>
  </main>`;
}

function contact() {
  return `<main id="main-content">
    ${pageHero('Contact Us', 'We’re ready to help with your benefits, health insurance, Medicare, and financial-service questions.')}
    <section class="section"><div class="section__wrap contact-layout">
      <aside class="contact-card"><h2>The Bailey Group</h2><p>1200 Plantation Island Dr S #210<br>St. Augustine, FL 32080</p><h3>Hours of Operation</h3><p><strong>Monday – Friday:</strong> 8 a.m. to 5 p.m.<br><strong>Saturday &amp; Sunday:</strong> Closed</p><h3>Get In Touch</h3><p>Front Desk: <a href="tel:904-461-1800">904.461.1800</a><br>Individual Insurance Team: <a href="tel:904-671-0511">904.671.0511</a><br>Toll Free: <a href="tel:866-826-1800">866.826.1800</a><br>Fax: 904.461.1775<br>Email: <a href="mailto:info@mbaileygroup.com">info@mbaileygroup.com</a></p><ul class="social-list"><li><a href="https://www.facebook.com/TheBaileyGroup/" target="_blank" rel="noreferrer">Facebook</a></li><li><a href="https://www.linkedin.com/company/thebaileygroup/" target="_blank" rel="noreferrer">LinkedIn</a></li><li><a href="https://www.instagram.com/bailey_group/" target="_blank" rel="noreferrer">Instagram</a></li><li><a href="https://www.youtube.com/user/mbaileygroup" target="_blank" rel="noreferrer">YouTube</a></li></ul></aside>
      <div class="contact-form"><h2>Send Us a Message</h2><p>Whether you’re a member of one of our groups that we provide benefits to or an individual insurance client, you’ve come to the right place to get in touch with us. Whatever the issue, big or small, we’re here to help in any way that we can.</p><p><strong>Use the form below to let us know about your problem, issue, question, or comment and we’ll have the appropriate party respond as soon as possible.</strong></p><form id="contact-form" novalidate><div class="form-grid"><label>First Name<input name="first-name" autocomplete="given-name" required></label><label>Last Name<input name="last-name" autocomplete="family-name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Phone<input name="phone" type="tel" autocomplete="tel"></label><label>Subject<input name="subject" required></label><label>Message<textarea name="message" required></textarea></label></div><button class="button" type="submit">Send Message</button><p class="form-status" id="form-status" aria-live="polite"></p></form></div>
    </div></section>
  </main>`;
}

function privacy() {
  return `<main id="main-content">
    ${pageHero('Our Privacy Policy, Cookie Policy, &amp; Terms of Service', 'Revised July 22, 2021. This policy is effective as of May 25, 2018.')}
    <section class="section"><article class="legal"><h2>Privacy Policy</h2><p>Your privacy is important to us. It is MFB Financial, Inc. dba The Bailey Group’s policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://mbaileygroup.com/" target="_blank" rel="noreferrer">https://mbaileygroup.com</a>, and other sites we own and operate.</p><h3>Information We Collect</h3><p><strong>Log data.</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered “non-identifying information,” as it does not personally identify you on its own. It may include your Internet Protocol address, browser type and version, pages visited, visit time and date, time spent on each page, and other details.</p><p><strong>Personal information.</strong> We may ask for personal information relevant to providing a service. This may include:</p><ul><li>Name</li><li>Email</li><li>Date of birth</li><li>Phone/mobile number</li><li>Home, mailing, and work address</li><li>Payment information</li><li>Driver’s license details</li><li>Tax, SSN, Medicare, or similar number</li></ul><p><strong>LinkedIn Lead Gen Forms.</strong> We may ask for your name, email, job title, company name, company size, and industry through a LinkedIn Lead Gen form. We will keep your personal information safe and will not share it with an outside entity.</p><h3>How We Collect Information</h3><p>We collect information by fair and lawful means, with your knowledge and consent. We let you know why we’re collecting it and how it will be used. You are free to refuse our request for information, with the understanding that we may be unable to provide some desired services.</p><h3>Use of Information</h3><p>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience in future. We may share aggregated and anonymised versions of this information in website and customer usage trend reports.</p><p>We may use personal details to contact you with website and service updates, along with promotional content believed to be of interest. You may opt out by following the unsubscribe instructions provided alongside promotional correspondence.</p><h3>Data Processing and Storage</h3><p>The personal information we collect is stored and processed in the United States, or where our partners, affiliates, and third-party providers maintain facilities. We retain it only as long as necessary to provide or improve a service, and protect it within commercially acceptable means.</p><h3>Third-Party Access to Information</h3><p>We use third-party services for analytics tracking, user authentication, content marketing, and email marketing. These services may access data solely to perform specific tasks on our behalf. We do not sell or rent personal information to marketers or third parties.</p><h3>Children’s Privacy</h3><p>We are committed to protecting the privacy of children who use our services. We encourage parents to engage with us in protecting children and ensuring a safe online experience.</p><h3>Changes to This Policy</h3><p>At our discretion, we may change this privacy policy to reflect current acceptable practices. Continued use of this site after changes will be regarded as acceptance of our practices around privacy and personal information.</p><h3>Your Rights and Responsibilities</h3><p>You have the right to be informed about how data is collected and used; to know what data we collect; to correct and update personal information; to request its deletion; and to restrict or object to its use.</p><p><strong>The Bailey Group’s Data Controller:</strong><br>Mark Bailey, Jr.<br><a href="mailto:mjrbailey@mbaileygroup.com">mjrbailey@mbaileygroup.com</a><br><a href="tel:904-461-2118">904.461.2118</a></p><h2>Cookie Policy</h2><p>If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from <a href="https://mbaileygroup.com/" target="_blank" rel="noreferrer">https://mbaileygroup.com</a>, with the understanding that we may be unable to provide some desired content and services.</p><h2>Terms of Service</h2><p>${legalDisclosure} <a href="https://bit.ly/KF-Disclosures" target="_blank" rel="noreferrer">Investor Disclosures</a>.</p></article></section>
  </main>`;
}

function accessibility() {
  return `<main id="main-content">
    ${pageHero('Accessibility Statement', 'Revised 2/13/2020')}
    <section class="section"><article class="legal"><p>The Bailey Group is committed to inclusion of its customers and web visitors with disabilities. We are taking steps to ensure that the pages and applications within our websites adhere to the standards of the <strong>Web Content Accessibility Guidelines</strong> (WCAG) 2.0 level AA.</p><p>If you have any difficulty viewing any page via assistive technology, please <a data-route href="/contact">contact us</a> so that we can make the information available to you.</p></article></section>
  </main>`;
}

function notFound() {
  return `<main id="main-content">${pageHero('Page Not Found', 'The page you’re looking for is not part of this recreation.')}<section class="section"><div class="section__wrap" style="text-align:center"><a class="button button--ink" data-route href="/">Return home</a></div></section></main>`;
}

/** @type {Record<string, () => string>} */
const routes = {
  '/': home,
  '/individual-solutions': solutions,
  '/individual-solutions/health-insurance': healthInsurance,
  '/individual-solutions/medicare': medicare,
  '/individual-solutions/dental-insurance': dentalInsurance,
  '/individual-solutions/life-insurance': lifeInsurance,
  '/individual-solutions/travel-insurance': travelInsurance,
  '/individual-solutions/accident-critical-illness-hospital-idemnity': accidentCoverage,
  '/corporate-benefits': corporateBenefits,
  '/about': about,
  '/contact': contact,
  '/privacy': privacy,
  '/accessibility': accessibility
};

function bindInteractions() {
  document.querySelectorAll('a[data-route]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      event.preventDefault();
      window.history.pushState({}, '', githubPagesPath(href));
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });

  updateHeaderScrollState();

  /** @type {HTMLButtonElement | null} */
  const menuButton = document.querySelector('#menu-toggle');
  menuButton?.addEventListener('click', () => {
    const headerElement = document.querySelector('.site-header');
    const isOpen = headerElement?.classList.toggle('is-open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  /** @type {HTMLFormElement | null} */
  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Thank you. This front-end recreation is ready to connect to your preferred contact-form service.';
  });
}

function updateHeaderScrollState() {
  const headerElement = document.querySelector('.site-header');
  headerElement?.classList.toggle('is-scrolled', window.scrollY > 40);
}

function render() {
  if (!app) return;
  const page = routes[currentPath()] ?? notFound;
  app.innerHTML = `${header()}${page()}${footer()}`;
  document.querySelectorAll('a[data-route]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href?.startsWith('/')) link.setAttribute('href', githubPagesPath(href));
  });
  bindInteractions();
}

window.addEventListener('popstate', render);
window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
render();
