<template>
  <title>Contact</title>

  <div class="contact-page">
    <section class="contact-section">

      <!-- HEADER -->
      <div class="section-heading">
        <span class="section-label">Get In Touch</span>

        <h1>Contact Me</h1>
        
        <div class="section-divider"></div>
      </div>

      <!-- CONTACT CARD -->
      <div class="contact-card">

        <!-- INTRO -->
        <div class="contact-intro">
          <span class="content-label">
            LET'S CONNECT
          </span>

          <h2>
            I'd love to hear
            <span>from you.</span>
          </h2>

          <p>
            The easiest way to reach me is by email. You can also
            give me a call or connect with me through LinkedIn.
          </p>

        </div>

        <!-- CONTACT METHODS -->
        <div class="contact-methods">

          <!-- EMAIL -->
          <div
            class="contact-method"
            :class="{ copied: copiedField === 'email' }"
          >
            <div class="method-icon">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </div>

            <div class="method-content">
              <span class="method-label">EMAIL</span>

              <a href="mailto:isaac.subrahmanyam@outlook.com">
                isaac.subrahmanyam@outlook.com
              </a>
            </div>

            <button
              class="copy-button"
              type="button"
              aria-label="Copy email address"
              @click="copy('email', 'isaac.subrahmanyam@outlook.com')"
            >
              <i v-if="copiedField !== 'email'" class="fas fa-copy" aria-hidden="true"></i>

              <i v-else class="fas fa-check" aria-hidden="true"></i>

              <span class="copy-tooltip">
                {{ copiedField === 'email' ? 'Copied!' : 'Copy' }}
              </span>
            </button>
          </div>

          <!-- PHONE -->
          <div
            class="contact-method"
            :class="{ copied: copiedField === 'phone' }"
          >
            <div class="method-icon">
              <i class="fas fa-phone" aria-hidden="true"></i>
            </div>

            <div class="method-content">
              <span class="method-label">PHONE</span>

              <a href="tel:+14077255513">
                407-725-5513
              </a>
            </div>

            <button
              class="copy-button"
              type="button"
              aria-label="Copy phone number"
              @click="copy('phone', '407-725-5513')"
            >
              <i v-if="copiedField !== 'phone'" class="fas fa-copy" aria-hidden="true"></i>

              <i v-else class="fas fa-check" aria-hidden="true"></i>

              <span class="copy-tooltip">
                {{ copiedField === 'phone' ? 'Copied!' : 'Copy' }}
              </span>
            </button>
          </div>

          <!-- LINKEDIN -->
          <a
            href="https://www.linkedin.com/in/isaac-subrahmanyam/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method contact-link"
          >
            <div class="method-icon">
              <i class="fab fa-linkedin-in linkedin-icon" aria-hidden="true"></i>
            </div>

            <div class="method-content">
              <span class="method-label">LINKEDIN</span>

              <span class="method-value">
                Connect on LinkedIn
              </span>
            </div>

            <span class="external-arrow">
              <i class="fas fa-external-link-alt external-link-icon" aria-hidden="true"></i>
            </span>
          </a>

          <!-- GITHUB -->
          <a
            href="https://github.com/Isaac-Subrahmanyam"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method contact-link"
          >
            <div class="method-icon">
              <i class="fab fa-github github-icon" aria-hidden="true"></i>
            </div>

            <div class="method-content">
              <span class="method-label">GITHUB</span>

              <span class="method-value">
                View my GitHub
              </span>
            </div>

            <span class="external-arrow">
              <i class="fas fa-external-link-alt external-link-icon" aria-hidden="true"></i>
            </span>
          </a>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      copiedField: null,
      copyTimeout: null
    }
  },

  methods: {
    async copy(field, value) {
      try {
        await navigator.clipboard.writeText(value)

        this.copiedField = field

        if (this.copyTimeout) {
          clearTimeout(this.copyTimeout)
        }

        this.copyTimeout = setTimeout(() => {
          this.copiedField = null
        }, 1800)
      } catch (error) {
        console.error('Unable to copy to clipboard:', error)
      }
    }
  },

  beforeUnmount() {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.contact-page {
  width: 100%;
  padding: 40px 0 120px;
}

.contact-section {
  width: min(950px, 90%);
  margin: 0 auto;
}

/* ========================================
   PAGE HEADER
======================================== */

.section-heading {
  max-width: 620px;
  margin: 0 auto 55px;

  text-align: center;
}

.section-label,
.content-label {
  display: block;

  margin-bottom: 9px;

  color: #58b7d8;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-heading h1 {
  margin: 0;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(32px, 5vw, 44px);
  font-weight: 600;

  letter-spacing: -0.035em;
}

.section-heading p {
  max-width: 510px;

  margin: 12px auto 0;

  color: rgba(255, 255, 255, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 14px;

  line-height: 1.7;
}

.section-divider {
  width: 44px;
  height: 3px;

  margin: 18px auto 0;

  border-radius: 100px;

  background: linear-gradient(
    90deg,
    transparent,
    #3a93b3,
    transparent
  );

  box-shadow:
    0 0 12px rgba(58, 147, 179, 0.4);
}

/* ========================================
   CONTACT CARD
======================================== */

.contact-card {
  display: grid;

  grid-template-columns: 0.85fr 1.15fr;

  overflow: hidden;

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.9),
      rgba(7, 16, 21, 0.94)
    );

  border:
    1px solid rgba(123, 195, 221, 0.13);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  backdrop-filter: blur(12px);
}

/* ========================================
   INTRO
======================================== */

.contact-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 45px 40px;

  text-align: left;

  background:
    linear-gradient(
      160deg,
      rgba(58, 147, 179, 0.12),
      rgba(5, 15, 20, 0.2)
    );

  border-right:
    1px solid rgba(123, 195, 221, 0.09);
}

.contact-intro h2 {
  margin: 0 0 17px;

  color: #f3f8fa;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(25px, 3vw, 32px);
  font-weight: 600;

  line-height: 1.25;

  letter-spacing: -0.03em;
}

.contact-intro h2 span {
  color: #72c9e8;
}

.contact-intro > p {
  margin: 0;

  color: rgba(255, 255, 255, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 12.5px;

  line-height: 1.8;
}

/* ========================================
   AVAILABILITY
======================================== */

.availability {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  margin-top: 28px;
  padding-top: 21px;

  border-top:
    1px solid rgba(255, 255, 255, 0.06);
}

.availability-dot {
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  margin-top: 5px;

  border-radius: 50%;

  background: #67c7e9;

  box-shadow:
    0 0 9px rgba(103, 199, 233, 0.65);
}

.availability div {
  display: flex;
  flex-direction: column;

  gap: 3px;
}

.availability strong {
  color: rgba(255, 255, 255, 0.8);

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
}

.availability div > span {
  color: rgba(255, 255, 255, 0.34);

  font-family: 'Inter', sans-serif;
  font-size: 9px;

  line-height: 1.5;
}

/* ========================================
   CONTACT METHODS
======================================== */

.contact-methods {
  display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 35px;
}

.contact-method {
  position: relative;

  min-height: 68px;

  display: flex;
  align-items: center;

  gap: 13px;

  padding: 11px 12px;

  border-radius: 12px;

  background:
    rgba(255, 255, 255, 0.025);

  border:
    1px solid rgba(255, 255, 255, 0.06);

  text-align: left;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-method:hover {
  transform: translateY(-2px);

  background:
    rgba(58, 147, 179, 0.055);

  border-color:
    rgba(123, 195, 221, 0.18);

  box-shadow:
    0 7px 20px rgba(0, 0, 0, 0.14);
}

.contact-method.copied {
  border-color:
    rgba(103, 199, 233, 0.34);

  background:
    rgba(58, 147, 179, 0.08);
}

/* ========================================
   METHOD ICON
======================================== */

.method-icon {
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #76cce9;

  background:
    rgba(58, 147, 179, 0.08);

  border:
    1px solid rgba(123, 195, 221, 0.13);

  border-radius: 10px;
}

.method-icon i {
  font-size: 18px;
  line-height: 1;
}

.method-icon .github-icon {
  font-size: 20px;
}

.linkedin-icon {
  font-size: 18px;
  line-height: 1;
}

/* ========================================
   METHOD CONTENT
======================================== */

.method-content {
  min-width: 0;

  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 4px;
}

.method-label {
  color: rgba(123, 195, 221, 0.48);

  font-family: 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 700;

  letter-spacing: 0.14em;
}

.method-content a,
.method-value {
  overflow: hidden;

  color: rgba(255, 255, 255, 0.78);

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;

  text-decoration: none;

  text-overflow: ellipsis;
  white-space: nowrap;

  transition: color 0.2s ease;
}

.method-content a:hover {
  color: #9edff6;
}

/* ========================================
   COPY BUTTON
======================================== */

.copy-button {
  position: relative;

  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  color: rgba(255, 255, 255, 0.45);

  background:
    rgba(255, 255, 255, 0.025);

  border:
    1px solid rgba(255, 255, 255, 0.07);

  border-radius: 8px;

  outline: none;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.copy-button i {
  font-size: 15px;
  line-height: 1;
}

.copy-button:hover {
  color: #8edcf7;

  background:
    rgba(58, 147, 179, 0.12);

  border-color:
    rgba(123, 195, 221, 0.25);

  transform: scale(1.04);
}

.copied .copy-button {
  color: #8edcf7;

  background:
    rgba(58, 147, 179, 0.12);

  border-color:
    rgba(123, 195, 221, 0.25);
}

/* ========================================
   COPY TOOLTIP
======================================== */

.copy-tooltip {
  position: absolute;

  right: 50%;
  bottom: calc(100% + 9px);

  transform:
    translateX(50%)
    translateY(4px);

  padding: 5px 8px;

  color: #dff7ff;

  background: #07151b;

  border:
    1px solid rgba(123, 195, 221, 0.18);

  border-radius: 6px;

  font-family: 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 600;

  white-space: nowrap;

  opacity: 0;
  visibility: hidden;

  pointer-events: none;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.3);

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease,
    transform 0.2s ease;
}

.copy-button:hover .copy-tooltip,
.copied .copy-tooltip {
  opacity: 1;
  visibility: visible;

  transform:
    translateX(50%)
    translateY(0);
}

/* ========================================
   EXTERNAL LINKS
======================================== */

.contact-link {
  color: inherit;

  text-decoration: none;

  cursor: pointer;
}

.external-arrow {
  margin-left: auto;

  color: rgba(123, 195, 221, 0.45);

  font-family: 'Inter', sans-serif;
  font-size: 14px;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.external-link-icon {
  font-size: 13px;
  line-height: 1;
}

.contact-link:hover .external-arrow {
  color: #8edcf7;

  transform: translate(2px, -2px);
}

.contact-link:hover .method-value {
  color: #ffffff;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 750px) {
  .contact-card {
    grid-template-columns: 1fr;
  }

  .contact-intro {
    padding: 35px;

    border-right: none;

    border-bottom:
      1px solid rgba(123, 195, 221, 0.09);
  }

  .contact-methods {
    padding: 30px 35px 35px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 550px) {
  .contact-page {
    padding-top: 20px;
  }

  .contact-section {
    width: 92%;
  }

  .section-heading {
    margin-bottom: 40px;
  }

  .section-heading h1 {
    font-size: 30px;
  }

  .contact-card {
    border-radius: 17px;
  }

  .contact-intro {
    padding: 28px 22px;
  }

  .contact-intro h2 {
    font-size: 24px;
  }

  .contact-methods {
    padding: 22px;

    gap: 9px;
  }

  .contact-method {
    min-height: 64px;

    gap: 10px;

    padding: 10px;
  }

  .method-icon {
    width: 36px;
    height: 36px;
  }

  .method-icon i {
    font-size: 16px;
  }

  .method-icon .github-icon {
    font-size: 18px;
  }

  .method-content a,
  .method-value {
    font-size: 10px;
  }

  .copy-button {
    width: 32px;
    height: 32px;
  }
}

</style>