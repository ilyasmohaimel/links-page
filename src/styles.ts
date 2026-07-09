export const appStyles = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@500;600;700;800;900&display=swap');

:root {
  color-scheme: light;
  --bg: #f4f7f8;
  --shell: rgba(247, 250, 251, 0.9);
  --ink: #06141b;
  --muted: #4a5c6a;
  --line: #d5dee3;
  --soft-line: #ccd0cf;
  --cta: #06141b;
  --shadow: 0 28px 70px rgba(17, 33, 45, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.72);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
}

html {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Manrope', Inter, ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.page {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  color: var(--ink);
}

.page__background,
.page__grid,
.page__watermark {
  pointer-events: none;
  position: absolute;
  inset: 0;
}

.page__background {
  z-index: -20;
  background: var(--bg);
}

.page__grid {
  z-index: -10;
  opacity: 0.82;
  background-image:
    linear-gradient(to right, rgba(17, 33, 45, 0.055) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(17, 33, 45, 0.055) 1px, transparent 1px);
  background-size: 48px 48px;
}

.page__watermark {
  z-index: -10;
  bottom: -24px;
  top: auto;
  display: none;
  font-family: 'Anton', 'Arial Narrow', Impact, sans-serif;
  font-size: clamp(12rem, 18vw, 18rem);
  line-height: 0.9;
  text-align: center;
  letter-spacing: 0;
  color: rgba(6, 20, 27, 0.035);
}

.shell {
  width: 100%;
  max-width: 430px;
  border: 1px solid var(--line);
  border-radius: 44px;
  background: var(--shell);
  padding: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.shell__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

.shell__eyebrow {
  margin: 0;
  max-width: 13rem;
  color: #253745;
  font-size: 0.68rem;
  font-weight: 900;
  line-height: 1.38;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.shell__language {
  display: flex;
  align-items: center;
  gap: 8px;
}

.shell__pill {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  padding: 6px 12px;
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.shell__pill--active {
  border-color: var(--cta);
  background: var(--cta);
  color: #fff;
}

.profile {
  display: grid;
  gap: 20px;
}

.profile__media {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #e8eef1;
}

.profile__image,
.profile__fallback {
  aspect-ratio: 1.75 / 1;
  width: 100%;
}

.profile__image {
  object-fit: cover;
  object-position: 50% 27%;
}

.profile__fallback {
  display: grid;
  place-items: center;
  color: var(--ink);
  font-family: 'Anton', 'Arial Narrow', Impact, sans-serif;
  font-size: clamp(3.5rem, 10vw, 5rem);
  letter-spacing: 0.02em;
}

.profile__copy {
  display: grid;
  gap: 8px;
}

.profile__kicker {
  margin: 0;
  color: #253745;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.profile__name {
  margin: 0;
  font-family: 'Anton', 'Arial Narrow', Impact, sans-serif;
  font-size: clamp(4rem, 16vw, 5.9rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: 0;
  text-transform: uppercase;
}

.profile__handle {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.profile__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.cta {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease;
}

.cta:hover {
  transform: translateY(-2px);
}

.cta:focus-visible,
.link-row:focus-visible {
  outline: 2px solid var(--ink);
  outline-offset: 2px;
}

.cta--primary {
  border-color: var(--cta);
  background: var(--cta);
  color: #fff;
  box-shadow: 0 12px 26px rgba(6, 20, 27, 0.16);
}

.cta--primary:hover {
  background: #11212d;
}

.cta--secondary {
  border-color: #9faaaf;
  background: rgba(255, 255, 255, 0.6);
  color: var(--ink);
}

.cta--secondary:hover {
  border-color: var(--ink);
  background: #fff;
}

.cta__label {
  min-width: 0;
}

.cta__iconWrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 180ms ease;
}

.cta:hover .cta__iconWrap {
  transform: translateX(2px);
}

.cta__icon {
  width: 16px;
  height: 16px;
  stroke-width: 2.5;
}

.link-list {
  margin-top: 20px;
  display: grid;
  gap: 10px;
}

.link-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  border: 1px solid var(--soft-line);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.54);
  padding: 10px 16px;
  color: var(--ink);
  box-shadow: 0 10px 24px rgba(17, 33, 45, 0.045);
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
}

.link-row:hover {
  transform: translateY(-2px);
  border-color: #8d9aa3;
  background: rgba(255, 255, 255, 0.94);
}

.link-row__icon {
  display: grid;
  place-items: center;
  color: var(--ink);
}

.link-row__iconGlyph {
  width: 24px;
  height: 24px;
  stroke-width: 2.2;
}

.link-row__markBase {
  display: grid;
  place-items: center;
  color: var(--ink);
  font-weight: 600;
  line-height: 1;
}

.link-row__mark {
  width: 24px;
  height: 24px;
  font-size: 1.55rem;
}

.link-row__mark--github {
  width: 24px;
  height: 24px;
  font-size: 1.25rem;
}

.link-row__copy {
  min-width: 0;
}

.link-row__title {
  display: block;
  color: #11212d;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.17em;
  line-height: 1.2;
  text-transform: uppercase;
}

.link-row__desc {
  display: block;
  overflow: hidden;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link-row__arrow {
  width: 20px;
  height: 20px;
  justify-self: end;
  stroke-width: 2.1;
  transition: transform 180ms ease;
}

.link-row:hover .link-row__arrow {
  transform: translateX(4px);
}

.shell__footer {
  margin-top: 24px;
  border-top: 1px solid var(--line);
  padding-top: 20px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-align: center;
}

@media (max-width: 389px) {
  .profile__actions {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .page__watermark {
    display: block;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 12px;
  }

  .shell {
    border-radius: 32px;
    padding: 20px;
  }

  .shell__header {
    margin-bottom: 16px;
    padding-bottom: 16px;
  }

  .profile {
    gap: 16px;
  }

  .profile__actions {
    grid-template-columns: 1fr;
  }
}
`
