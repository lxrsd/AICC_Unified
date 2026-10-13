import type { ReactNode } from 'react';

/**
 * Full-bleed hero that uses the real reference artwork as a right-anchored
 * background image. A white gradient fades in from the left so the baked-in
 * text in the source screenshot is hidden and our real (clickable) heading,
 * subhead and buttons sit on a clean surface — matching how the reference
 * composes the hero. No duplicate text; the controls are real DOM.
 */
export function Hero({
  eyebrow,
  title,
  subhead,
  children,
  image,
  variant,
}: {
  eyebrow?: string;
  title: ReactNode;
  subhead: ReactNode;
  children?: ReactNode;
  image: string;
  /**
   * Selects per-page artwork anchoring and left-wash reach (the `--hero-art-y`
   * / `--hero-fade-*` scales in styles.css). Omit to use the default sizing.
   */
  variant?: string;
}) {
  return (
    <section className={variant ? `hero hero--${variant}` : 'hero'}>
      <div className="hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="hero__fade" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="subhead">{subhead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
