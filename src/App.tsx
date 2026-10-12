import { useEffect, useState, type ReactNode } from "react";

const colors = [
  { name: "Action Orange", hex: "#FF5A18", tone: "orange" },
  { name: "Burnt Orange", hex: "#C83D0A", tone: "burnt" },
  { name: "Garage Black", hex: "#17191C", tone: "black" },
  { name: "Steel Gray", hex: "#6E747B", tone: "steel" },
  { name: "Cool Silver", hex: "#DDE1E4", tone: "silver" },
  { name: "Workshop", hex: "#F4F2ED", tone: "cream" },
];

type LogoProps = { compact?: boolean; reversed?: boolean; small?: boolean };

function Mark({ reversed = false }: { reversed?: boolean }) {
  return (
    <svg className="mark" viewBox="0 0 88 88" aria-label="FixNow location and wrench symbol">
      <path
        className={reversed ? "mark-pin reversed" : "mark-pin"}
        d="M44 5C23.6 5 9 19.7 9 38.8c0 25.7 35 44.4 35 44.4s35-18.7 35-44.4C79 19.7 64.4 5 44 5Z"
      />
      <path
        className="mark-wrench"
        d="M60.4 25.1a15.8 15.8 0 0 0-19.7 20L26.1 59.7a6.1 6.1 0 0 0 8.7 8.6l14.5-14.5a15.8 15.8 0 0 0 20-19.7l-9.6 9.6-8.2-1.5-1.5-8.1 10.4-9Z"
      />
      <circle cx="31.2" cy="63.2" r="2.8" className="mark-hole" />
    </svg>
  );
}

function Logo({ compact = false, reversed = false, small = false }: LogoProps) {
  return (
    <div className={`logo ${small ? "logo-small" : ""}`}>
      <Mark reversed={reversed} />
      {!compact && (
        <div className={reversed ? "wordmark reversed" : "wordmark"}>
          Fix<span>Now</span>
        </div>
      )}
    </div>
  );
}

const iconPaths: Record<string, ReactNode> = {
  battery: (
    <>
      <path d="M9 10V7M15 10V7M7 10h10a2 2 0 0 1 2 2v7H5v-7a2 2 0 0 1 2-2Z" />
      <path d="m13 12-3 4h4l-3 4" />
    </>
  ),
  tire: (
    <>
      <circle cx="12" cy="13" r="7" />
      <circle cx="12" cy="13" r="3" />
      <path d="m8 7 2 3M16 7l-2 3M8 19l2-3M16 19l-2-3M12 4V2" />
    </>
  ),
  tow: (
    <>
      <path d="M3 16h11l3-5h3l1 5v3H3v-3ZM5 16l3-6h5l3 6" />
      <circle cx="7" cy="20" r="2" />
      <circle cx="18" cy="20" r="2" />
    </>
  ),
  engine: (
    <>
      <path d="M5 10h3l2-3h5l2 3h2a2 2 0 0 1 2 2v6H5V10Z" />
      <path d="M2 12v5M10 12h5M12 4v3M9 4h6" />
    </>
  ),
  location: (
    <>
      <path d="M12 22s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="15" rx="2" />
      <path d="M8 3v6M16 3v6M4 11h16M8 15h3M14 15h2M8 18h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 5 2.8 8.4 7 10 4.2-1.6 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
};

function ServiceIcon({ type, label }: { type: string; label: string }) {
  return (
    <div className="service-icon">
      <div className="icon-box">
        <svg viewBox="0 0 24 24">{iconPaths[type]}</svg>
      </div>
      <span>{label}</span>
    </div>
  );
}

function MascotCrop({
  column,
  row,
  label,
}: {
  column: number;
  row: number;
  label: string;
}) {
  return (
    <div className="expression">
      <div className="expression-image">
        <img
          src="/assets/fixnow-mascot-sheet.png"
          alt={`FixNow mascot, ${label} expression`}
          style={{
            left: `${-column * 100}%`,
            top: `${-row * 100}%`,
          }}
        />
      </div>
      <span>{label}</span>
    </div>
  );
}

function PhoneMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "phone phone-compact" : "phone"}>
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="app-topline">
          <Logo compact small />
          <span>FIXNOW</span>
        </div>
        <div className="app-copy">
          <span>สวัสดีครับ</span>
          <strong>ให้เราช่วยอะไร?</strong>
        </div>
        <div className="mini-map">
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-pin"><Mark /></div>
        </div>
        <div className="app-actions">
          <div><ServiceIcon type="battery" label="แบตเตอรี่" /></div>
          <div><ServiceIcon type="tire" label="ยางรถ" /></div>
          <div><ServiceIcon type="tow" label="รถยก" /></div>
        </div>
        <div className="app-button">เรียกช่างตอนนี้</div>
      </div>
    </div>
  );
}

function ShirtMockup() {
  return (
    <div className="product-stage">
      <div className="shirt">
        <div className="shirt-collar" />
        <div className="shirt-logo"><Logo reversed small /></div>
        <div className="shirt-piping" />
      </div>
      <div className="product-label"><strong>FIELD POLO</strong><span>Approved provider apparel</span></div>
    </div>
  );
}

function CapMockup() {
  return (
    <div className="product-stage">
      <div className="cap">
        <div className="cap-crown"><Mark /></div>
        <div className="cap-brim" />
      </div>
      <div className="product-label"><strong>SERVICE CAP</strong><span>High-visibility brand mark</span></div>
    </div>
  );
}

function VanMockup() {
  return (
    <div className="product-stage vehicle-stage">
      <div className="van">
        <div className="van-body">
          <div className="van-window" />
          <div className="van-window rear" />
          <div className="van-logo"><Logo small /></div>
          <div className="provider">PARTICIPATING SERVICE PROVIDER</div>
          <div className="van-stripe" />
        </div>
        <div className="wheel wheel-left" />
        <div className="wheel wheel-right" />
      </div>
      <div className="product-label"><strong>SERVICE VEHICLE</strong><span>Partner branding concept</span></div>
    </div>
  );
}

function AdMockup() {
  return (
    <div className="product-stage">
      <div className="ad-card">
        <div className="ad-brand"><Logo reversed small /></div>
        <div className="ad-copy">
          <span>รถมีปัญหา?</span>
          <strong>ช่างพร้อมไปหา</strong>
          <i>24/7 ASSISTANCE</i>
        </div>
        <div className="ad-mascot">
          <MascotCrop column={2} row={1} label="" />
        </div>
      </div>
      <div className="product-label"><strong>DIGITAL CAMPAIGN</strong><span>Social &amp; display template</span></div>
    </div>
  );
}

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fitBoard = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
    fitBoard();
    window.addEventListener("resize", fitBoard);
    return () => window.removeEventListener("resize", fitBoard);
  }, []);

  return (
    <main className="viewport">
      <div className="board-shell" style={{ width: 1920 * scale, height: 1080 * scale }}>
        <div className="brand-board" style={{ transform: `scale(${scale})` }}>
          <div className="top-meta">
            <span>FIXNOW / BRAND IDENTITY SYSTEM</span>
            <span>01 — CORE IDENTITY · 2025</span>
          </div>

          <section className="hero panel">
            <div className="hero-grid" />
            <div className="hero-content">
              <div className="eyebrow light">DIGITAL ROADSIDE ASSISTANCE</div>
              <Logo reversed />
              <div className="tagline">YOUR CAR HELP, RIGHT NOW</div>
              <div className="thai-headline">รถมีปัญหา? <em>FixNow</em> ให้ช่างไปหาคุณ</div>
              <div className="hero-proof">
                <span>FAST RESPONSE</span><i />
                <span>VERIFIED MECHANICS</span><i />
                <span>LIVE STATUS</span>
              </div>
            </div>
            <div className="hero-phone"><PhoneMockup /></div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </section>

          <section className="logo-system panel">
            <div className="section-heading">
              <div><span>01</span> LOGO SYSTEM</div>
              <small>ONE MARK. EVERY MOMENT.</small>
            </div>
            <div className="logo-showcase">
              <div className="logo-main">
                <Logo />
                <p>PRIMARY HORIZONTAL</p>
              </div>
              <div className="logo-dark">
                <Logo reversed small />
                <p>REVERSED</p>
              </div>
              <div className="logo-symbol">
                <Logo compact />
                <p>SYMBOL</p>
              </div>
              <div className="app-icon">
                <Mark />
                <p>APP ICON</p>
              </div>
            </div>
            <div className="logo-note">
              <b>THE PIN + WRENCH</b>
              <span>A location marker cut with a precision wrench — immediate help, exactly where drivers need it.</span>
            </div>
          </section>

          <section className="palette panel">
            <div className="section-heading">
              <div><span>02</span> COLOR</div>
              <small>ACTION MEETS TRUST</small>
            </div>
            <div className="swatches">
              {colors.map((color) => (
                <div className="swatch" key={color.hex}>
                  <div className={`color-chip ${color.tone}`} />
                  <strong>{color.name}</strong>
                  <span>{color.hex}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="typography panel">
            <div className="section-heading">
              <div><span>03</span> TYPOGRAPHY</div>
              <small>ANUPHAN + MANROPE</small>
            </div>
            <div className="type-layout">
              <div className="type-hero">Aa<span>กข</span></div>
              <div className="type-samples">
                <div className="type-line bold"><span>700</span>Help is on the way.</div>
                <div className="type-line medium"><span>600</span>บริการรถยนต์ที่ไว้ใจได้</div>
                <div className="type-line regular"><span>400</span>Track your mechanic in real time.</div>
                <div className="type-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789</div>
              </div>
            </div>
          </section>

          <section className="icons panel">
            <div className="section-heading">
              <div><span>04</span> SERVICE ICONS</div>
              <small>2PX · ROUND CAP</small>
            </div>
            <div className="icon-row">
              <ServiceIcon type="battery" label="BATTERY" />
              <ServiceIcon type="tire" label="TIRE" />
              <ServiceIcon type="tow" label="TOWING" />
              <ServiceIcon type="engine" label="REPAIR" />
              <ServiceIcon type="location" label="LOCATION" />
              <ServiceIcon type="calendar" label="BOOKING" />
              <ServiceIcon type="shield" label="PROTECTED" />
            </div>
          </section>

          <section className="mascot panel">
            <div className="section-heading">
              <div><span>05</span> MASCOT VOICE</div>
              <small>CAPABLE · HUMAN · READY</small>
            </div>
            <div className="mascot-content">
              <div className="mascot-copy">
                <strong>MEET FIX.</strong>
                <p>Your expert copilot for every unexpected turn.</p>
                <span>Always in uniform. Always carrying the signature adjustable wrench.</span>
              </div>
              <div className="expressions">
                <MascotCrop column={0} row={0} label="EXCITED" />
                <MascotCrop column={1} row={0} label="DETERMINED" />
                <MascotCrop column={1} row={1} label="SURPRISED" />
                <MascotCrop column={0} row={1} label="EMPATHETIC" />
                <MascotCrop column={2} row={1} label="CONFIDENT" />
              </div>
            </div>
          </section>

          <section className="applications panel">
            <div className="section-heading applications-heading">
              <div><span>06</span> BRAND IN MOTION</div>
              <small>A CONSISTENT SYSTEM, FROM SCREEN TO STREET</small>
            </div>
            <div className="applications-row">
              <div className="product-stage phone-stage">
                <PhoneMockup compact />
                <div className="product-label"><strong>MOBILE SERVICE</strong><span>Book · track · pay</span></div>
              </div>
              <ShirtMockup />
              <CapMockup />
              <VanMockup />
              <AdMockup />
            </div>
          </section>

          <footer>
            <Logo small />
            <span>Reliable help for every road ahead.</span>
            <b>FIXNOW.CO.TH</b>
          </footer>
        </div>
      </div>
    </main>
  );
}
