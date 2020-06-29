<template>
  <footer class="doc-footer">
    <div class="footer-wrapper">
      <div class="vmware-source-wrapper">
        <a href="https://vmware.com/" target="_blank" class="vmware-logo-link">
          <img class="vmware-weblogo" src="/images/vmware-logo.svg" alt="VMware" />
        </a>
        <a href="http://vmware.design/" target="_blank" class="vmware-design-link">
          VMware Design
        </a>
        <div class="social-media-links">
          <a href="https://github.com/vmware/clarity" target="_blank" class="sm-icon-link">
            <img src="/images/components/button/footer/github.png" alt="Clarity Github" />
          </a>
          <a href="https://twitter.com/VMwareClarity" target="_blank" class="sm-icon-link">
            <img src="/images/components/button/footer/twitter.png" alt="Clarity Twitter" />
          </a>
          <a href="https://medium.com/claritydesignsystem" target="_blank" class="sm-icon-link">
            <img src="/images/components/button/footer/medium.png" alt="Clarity Medium" />
          </a>
        </div>
      </div>
      <p class="copyright">
        &copy; 2016 - {{ year }} VMware, Inc. All Rights Reserved. Code licensed by
        <a href="https://opensource.org/licenses/MIT" target="_blank" class="mit-link">MIT License</a>
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
.doc-footer {
  margin-top: auto;
}
.footer-wrapper {
  position: relative;
  margin-top: 3rem;
  padding-top: 1.2rem;
  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 2.4rem);
    top: 0;
    left: -1.2rem;
    border-top: 1px solid #ccc;
  }
}
.vmware-source-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  .vmware-logo-link {
    margin-right: 0.6rem;
  }
  .vmware-weblogo {
    height: 0.7rem;
  }
  .social-media-links {
    display: flex;
    margin-left: auto;
    width: 7.2rem;
    justify-content: flex-end;
    a.sm-icon-link {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 0.6rem;
    }
    .sm-icon-link img {
      opacity: 0.35;
    }
  }
}
.mit-link {
  margin-right: 0.6rem;
}
.copyright {
  margin-top: 0.6rem;
}
</style>
