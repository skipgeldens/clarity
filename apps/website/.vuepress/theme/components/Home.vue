<style>
.need-style-fix > a {
  color: #fff !important;
}
</style>
<template>
  <main>
    <section class="home-hero">
      <div class="home-hero-content">
        <h1>Clarity Design System</h1>
        <p class="head">
          UX guidelines, HTML/CSS framework, and Angular components working together to craft exceptional experiences
        </p>
        <br />
        <div class="home-hero-btn">
          <cds-button class="need-style-fix">
            <router-link to="get-started">Get Started</router-link>
          </cds-button>
          <cds-button action="outline">
            <router-link to="documentation">Documentation</router-link>
          </cds-button>
        </div>
        <p class="subtext">
          View the <a rel="noopener" target="_blank" href="https://github.com/vmware/clarity">source</a> on GitHub
        </p>
      </div>
      <div class="bg-img" :class="currentSeason"></div>
    </section>

    <section class="home-cards">
      <div class="home-cards-container clearfix">
        <h1>Designed for designers and built for developers</h1>
        <div class="home-card-wrapper clr-row">
          <div class="home-card home-card-sketch clr-col-3">
            <div class="home-card-bug">
              <img src="/images/home/sketch.svg" alt="Sketch logo" />
            </div>
            <h3 class="home-card-title">Sketch Template</h3>
            <p>
              Jumpstart your project using our
              <a routerLink="get-started" fragment="designResources">Sketch template</a>
              with ready-to-use components.
            </p>
          </div>

          <div class="home-card home-card-ux clr-col-3">
            <div class="home-card-bug">
              <img src="/images/home/ux.svg" alt="UX guidelines" />
            </div>
            <h3 class="home-card-title">UX guidelines</h3>
            <p>
              Reference UX guidelines that stem from ongoing research and exploration, making it easy to design cohesive
              experiences.
            </p>
          </div>

          <div class="home-card home-card-html clr-col-3">
            <div class="home-card-bug">
              <img src="/images/home/html.svg" alt="HTML/CSS" />
            </div>
            <h3 class="home-card-title">HTML/CSS</h3>
            <p>
              Start building with our HTML/CSS framework and rapidly go from prototype to production.
            </p>
          </div>

          <div class="home-card home-card-angular clr-col-3">
            <div class="home-card-bug">
              <img src="/images/home/angular.svg" alt="Angular logo" />
            </div>
            <h3 class="home-card-title">Angular</h3>
            <p>
              Use our set of data-bound and performant components on top of Angular to add interactivity
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="home-process">
      <h1>From prototype to product, faster and better</h1>

      <div class="clr-row">
        <div class="home-process-block clr-col-6">
          <div class="home-process-block__title">
            <div class="img bulb"></div>
            <h3>Product-based</h3>
          </div>
          <p>
            We work closely with product teams to understand and solve the vast array of challenges they face. These
            solutions are built into Clarity and contributed back to the community.
          </p>
        </div>
        <div class="home-process-block clr-col-6">
          <div class="home-process-block__title">
            <div class="img rapid"></div>
            <h3>Rapid development</h3>
          </div>
          <p>
            Clarity’s shared foundation of design and development makes communication and collaboration between
            different areas of expertise easier than ever.
          </p>
        </div>
        <div class="home-process-block clr-col-6">
          <div class="home-process-block__title">
            <div class="img evolving"></div>
            <h3>Evolving</h3>
          </div>
          <p>
            Design patterns and technology change quickly. Clarity is built to anticipate and adopt to changes quickly
            and easily.
          </p>
        </div>
        <div class="home-process-block clr-col-6">
          <div class="home-process-block__title">
            <div class="img reliable"></div>
            <h3>Reliable</h3>
          </div>
          <p>
            We have a dedicated team focused on shipping frequently, with a high bar of quality standard.
          </p>
        </div>
      </div>
    </section>

    <section class="home-contact">
      <div class="clr-row home-contact-container">
        <div class="home-contact-block clr-col-6">
          <a href="//opensource.org/licenses/MIT" class="mit-link home-contact_link" rel="noopener" target="_blank">
            <span class="img"></span>
            Clarity is licensed under the MIT License. <span class="xtra">Read more here.</span>
          </a>
        </div>
        <div class="home-contact-block clr-col-6">
          <a href="//twitter.com/VMwareClarity" class="twr-link home-contact_link" rel="noopener" target="_blank">
            <span class="img"></span>
            @VMwareClarity
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    currentSeason() {
      const now = new Date();
      const currentYear = now.getFullYear();
      let season = 'winter';

      if (now < new Date(currentYear, 2, 1)) {
        season = 'winter'; // Jan 1 - Mar 1
      } else if (now < new Date(currentYear, 5, 1)) {
        season = 'spring'; // Mar 1 - Jun 1
      } else if (now < new Date(currentYear, 8, 1)) {
        season = 'summer'; // Jun 1 - Sep 1
      } else if (now < new Date(currentYear, 11, 1)) {
        season = 'autumn'; // Sep 1 - Dec 1
      }

      return `bg-img-${season}`;
    },
  },
};
</script>
