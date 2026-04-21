// OmegAmino email block primitives — React recreations of ../../email-blocks/blocks/*.html
// Every block is an outer full-width table (Omnisend's content column is the real max-width).

const T = window.OATokens;

function EmailHeader({ variant = 'cyan' }) {
  const fg = variant === 'white' ? T.color.textPrimary : T.color.accentBlue;
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td align="center" style={{ padding: '32px 28px 16px' }}>
        <span style={{
          fontFamily: T.font.display, fontSize: '28px', fontWeight: 'bold',
          letterSpacing: '5px', textTransform: 'uppercase', color: fg,
        }}>OMEG<span style={{ color: T.color.textPrimary }}>Ω</span>AMINO</span>
      </td></tr></tbody>
    </table>
  );
}

function SectionHeader({ label = '// LABEL LINE', heading = 'HEADING TEXT' }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '24px 28px 12px' }}>
        <p style={{ ...T.role.label, marginBottom: '6px' }}>{label}</p>
        <p style={T.role.heading}>{heading}</p>
      </td></tr></tbody>
    </table>
  );
}

function BodyCopy({ paragraphs = [] }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '12px 28px 20px' }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ ...T.role.bodyCopy, margin: i === paragraphs.length - 1 ? 0 : '0 0 16px 0' }}>{p}</p>
        ))}
      </td></tr></tbody>
    </table>
  );
}

function CodeBox({ label = 'Affiliate Code', code = 'CODE', saveLine = 'Save 10% at checkout' }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '12px 28px 20px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          <td align="center" style={{
            backgroundColor: T.color.bgCard, border: `1px solid ${T.color.borderSubtle}`,
            borderRadius: '8px', padding: '18px 20px',
          }}>
            <p style={{ ...T.role.monoSm, marginBottom: '6px' }}>{label}</p>
            <p style={T.role.codeDisplay}>{code}</p>
            <p style={{ ...T.role.monoSm, letterSpacing: 0, textTransform: 'none', fontSize: '11px', marginTop: '6px' }}>{saveLine}</p>
          </td>
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

function LinkRowItem({ href = '#', title = 'LINK TITLE', subtitle = 'Short description.', trailing = false }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ marginBottom: trailing ? 0 : '10px' }}>
      <tbody><tr><td style={{
        backgroundColor: T.color.bgCard, borderLeft: `3px solid ${T.color.accentBlue}`,
        borderRadius: '0 6px 6px 0', padding: '14px 18px',
      }}>
        <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
            <td style={{ ...T.role.linkTitle }}>{title}</td>
            <td align="right" style={{ ...T.role.linkTitle, color: T.color.accentBlue, whiteSpace: 'nowrap', paddingLeft: '12px' }}>→</td>
          </tr></tbody></table>
          <p style={{ ...T.role.linkSub, marginTop: '3px' }}>{subtitle}</p>
        </a>
      </td></tr></tbody>
    </table>
  );
}

function LinkRow({ items = [] }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '12px 28px 20px' }}>
        {items.map((it, i) => (
          <LinkRowItem key={i} {...it} trailing={i === items.length - 1} />
        ))}
      </td></tr></tbody>
    </table>
  );
}

function Divider() {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '0 28px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          <td style={{ height: '1px', fontSize: 0, lineHeight: 0, backgroundColor: T.color.divider }}>&nbsp;</td>
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

function SocialRow({ href = 'https://www.instagram.com/omegamino', handle = '@omegamino' }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '12px 28px 20px' }}>
        <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
          <table role="presentation" cellPadding="0" cellSpacing="0" border="0"><tbody><tr>
            <td width="36" height="36" align="center" valign="middle" style={{
              width: '36px', height: '36px', borderRadius: '6px',
              background: 'linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)',
            }}>
              <img src="https://img.icons8.com/ios-glyphs/22/ffffff/instagram-new.png" alt="Instagram" width="20" height="20" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </td>
            <td style={{ paddingLeft: '12px', ...T.role.socialHandle, verticalAlign: 'middle' }}>{handle}</td>
          </tr></tbody></table>
        </a>
      </td></tr></tbody>
    </table>
  );
}

// Side-by-side 2-column block — not yet in ../../email-blocks/; documented here as a proposed addition.
// Each column is a product card (title + short hook + arrow).
function SideBySide({ left, right }) {
  const cell = {
    backgroundColor: T.color.bgCard, borderLeft: `3px solid ${T.color.accentBlue}`,
    borderRadius: '0 6px 6px 0', padding: '14px 18px', verticalAlign: 'top',
    width: '50%',
  };
  const Card = ({ it }) => (
    <a href={it?.href || '#'} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
        <td style={T.role.linkTitle}>{it?.title}</td>
        <td align="right" style={{ ...T.role.linkTitle, color: T.color.accentBlue, whiteSpace: 'nowrap', paddingLeft: '8px' }}>→</td>
      </tr></tbody></table>
      <p style={{ ...T.role.linkSub, marginTop: '3px' }}>{it?.subtitle}</p>
    </a>
  );
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: '12px 28px 20px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          <td style={{ ...cell, paddingRight: '9px' }}><Card it={left} /></td>
          <td style={{ width: '10px' }}>&nbsp;</td>
          <td style={cell}><Card it={right} /></td>
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

function EmailFooter() {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td align="center" style={{ padding: '20px 28px 32px' }}>
        <p style={{ ...T.role.monoSm, marginBottom: '8px' }}>// OMNISEND HANDLES UNSUBSCRIBE + ADDRESS</p>
        <p style={{ ...T.role.linkSub, color: T.color.textSecondary, margin: 0 }}>For research purposes only. 21+.</p>
      </td></tr></tbody>
    </table>
  );
}

// ═══════════════════════════════════════════════════════════════
// CAMPAIGN BLOCKS — updated from the Moving Sale campaign (Apr 2026)
// These reflect the real email structure, not the repo's text-only assumption.
// ═══════════════════════════════════════════════════════════════

// Stylized "A + Ω arch" brand mark as SVG. Placeholder until Chase sends the real asset.
function LogoMark({ size = 64, glow = true }) {
  const blue = '#1AACF0';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {glow && <defs><filter id="oaglow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>}
      <g filter={glow ? 'url(#oaglow)' : ''} fill="none" stroke={blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Ω arch */}
        <path d="M 24 42 Q 50 6 76 42"/>
        <path d="M 18 44 L 30 44"/>
        <path d="M 70 44 L 82 44"/>
        {/* A uprights */}
        <path d="M 30 86 L 50 38 L 70 86"/>
        <path d="M 38 68 L 62 68"/>
      </g>
    </svg>
  );
}

// Full-bleed hero image slot. Pass `src` at render time.
function HeroImage({ src, alt = 'Campaign hero', href }) {
  const img = (
    <img src={src} alt={alt} width="600" style={{ display: 'block', width: '100%', height: 'auto', border: 0 }} />
  );
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: T.color.bgBody }}>
      <tbody><tr><td style={{ padding: 0, lineHeight: 0, fontSize: 0 }}>
        {href ? <a href={href} target="_blank" rel="noreferrer">{img}</a> : img}
      </td></tr></tbody>
    </table>
  );
}

// Header lockup: logo mark + wordmark + optional "RESEARCH COMPANY" tagline.
function BrandHeader({ tagline = 'RESEARCH COMPANY', bg = T.color.bgBody }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: bg }}>
      <tbody><tr><td align="center" style={{ padding: '28px 28px 20px' }}>
        <div style={{ lineHeight: 0, marginBottom: '8px' }}><LogoMark size={72} /></div>
        <div style={{
          fontFamily: T.font.display, fontSize: '22px', fontWeight: 'bold',
          letterSpacing: '6px', textTransform: 'uppercase', color: T.color.textPrimary,
        }}>OMEGAMINO</div>
        {tagline && <div style={{
          fontFamily: T.font.mono, fontSize: '10px', letterSpacing: '3px',
          textTransform: 'uppercase', color: T.color.textSecondary, marginTop: '4px',
        }}>{tagline}</div>}
      </td></tr></tbody>
    </table>
  );
}

// Nav bar — SHOP · FAQs · ACCOUNT · CONTACT
function NavBar({ items = [
  { label: 'SHOP', href: '#' }, { label: 'FAQs', href: '#' },
  { label: 'ACCOUNT', href: '#' }, { label: 'CONTACT', href: '#' },
] }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: '#000000' }}>
      <tbody><tr><td style={{ padding: '18px 28px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          {items.map((it, i) => (
            <td key={i} align="center" style={{
              fontFamily: T.font.display, fontSize: '13px', fontWeight: 'bold',
              letterSpacing: '3px', textTransform: 'uppercase',
            }}>
              <a href={it.href} style={{ color: T.color.textPrimary, textDecoration: 'none' }}>{it.label}</a>
            </td>
          ))}
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

// Light-panel body section (white/gray background, dark text) — matches real campaigns.
function LightPanel({ children, bg = '#EFEFEF', align = 'center' }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: bg }}>
      <tbody><tr><td align={align} style={{ padding: '28px 28px 24px', textAlign: align }}>{children}</td></tr></tbody>
    </table>
  );
}

// Pill CTA button — pale cyan fill, near-black uppercase text.
function PillButton({ href = '#', label = 'SHOP NOW' }) {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" align="center" style={{ margin: '8px auto' }}>
      <tbody><tr>
        <td align="center" style={{ backgroundColor: '#B9E4EE', borderRadius: '999px', padding: '12px 28px' }}>
          <a href={href} target="_blank" rel="noreferrer" style={{
            fontFamily: T.font.display, fontSize: '14px', fontWeight: 'bold',
            letterSpacing: '3px', textTransform: 'uppercase', color: '#0E2A33',
            textDecoration: 'none',
          }}>{label}</a>
        </td>
      </tr></tbody>
    </table>
  );
}

// Athlete affiliate row — circular photo + name/code/follow + Instagram icon.
// Alternating light/dark rows are handled by the parent layout.
function AthleteRow({ photo, name = 'ATHLETE NAME', code = 'CODE', href = '#', bg = '#000000', fg = '#F4F6FA' }) {
  const onLight = bg !== '#000000' && bg !== T.color.bgBody;
  const nameColor = onLight ? '#111111' : fg;
  const codeColor = onLight ? '#333333' : T.color.textSecondary;
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: bg }}>
      <tbody><tr><td style={{ padding: '18px 22px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          {/* Photo */}
          <td width="80" valign="middle" style={{ width: '80px' }}>
            {photo
              ? <img src={photo} alt={name} width="68" height="68" style={{ width: '68px', height: '68px', borderRadius: '999px', display: 'block', objectFit: 'cover' }}/>
              : <div style={{ width: '68px', height: '68px', borderRadius: '999px', background: '#1E3550' }}/>
            }
          </td>
          {/* Text */}
          <td valign="middle" style={{ paddingLeft: '8px' }}>
            <div style={{ fontFamily: T.font.display, fontSize: '16px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', color: nameColor, marginBottom: '4px' }}>{name}</div>
            <div style={{ fontFamily: T.font.mono, fontSize: '11px', letterSpacing: '1.5px', color: codeColor, textTransform: 'uppercase' }}>
              CODE: <span style={{ fontStyle: 'italic', color: onLight ? '#111' : T.color.textPrimary }}>{code}</span>
            </div>
            <a href={href} target="_blank" rel="noreferrer" style={{ fontFamily: T.font.mono, fontSize: '11px', letterSpacing: '1.5px', color: onLight ? '#333' : T.color.textSecondary, textDecoration: 'none', textTransform: 'uppercase' }}>
              Follow <span style={{ color: T.color.accentBlue }}>→</span>
            </a>
          </td>
          {/* Instagram icon */}
          <td width="56" align="right" valign="middle" style={{ width: '56px' }}>
            <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)', textAlign: 'center', lineHeight: '44px', display: 'inline-block' }}>
                <img src="https://img.icons8.com/ios-glyphs/28/ffffff/instagram-new.png" alt="Instagram" width="24" height="24" style={{ verticalAlign: 'middle', display: 'inline-block' }}/>
              </div>
            </a>
          </td>
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

// Research-use disclaimer block — appears above the Omnisend unsubscribe footer.
function DisclaimerBlock() {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: '#000000' }}>
      <tbody><tr><td align="center" style={{ padding: '24px 28px 28px' }}>
        <div style={{ lineHeight: 0, marginBottom: '12px' }}><LogoMark size={48} glow={false}/></div>
        <div style={{ fontFamily: T.font.display, fontSize: '13px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', color: T.color.textPrimary, marginBottom: '12px' }}>
          FOR LABORATORY RESEARCH USE ONLY
        </div>
        <p style={{ fontFamily: T.font.body, fontSize: '11px', lineHeight: 1.55, color: T.color.textSecondary, margin: '0 0 10px 0' }}>
          All materials sold on this site are supplied solely for laboratory research and development by qualified professionals. They are <b>not</b> for human or animal ingestion, injection, or any other form of consumption and may not be used as drugs, food additives, cosmetics, or household chemicals.
        </p>
        <p style={{ fontFamily: T.font.body, fontSize: '11px', lineHeight: 1.55, color: T.color.textSecondary, margin: 0 }}>
          By purchasing, you represent and warrant that you are professionally qualified to handle these materials and will comply with all applicable laws and safety protocols.
        </p>
      </td></tr></tbody>
    </table>
  );
}

// FDA boilerplate — bordered box at the very bottom.
function FDABoilerplate() {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ backgroundColor: '#000000' }}>
      <tbody><tr><td style={{ padding: '0 24px 24px' }}>
        <table role="presentation" cellPadding="0" cellSpacing="0" border="0" width="100%"><tbody><tr>
          <td style={{ border: '1px solid #2a2a2a', padding: '12px 14px', fontFamily: T.font.body, fontSize: '11px', lineHeight: 1.5, color: T.color.textPrimary }}>
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </td>
        </tr></tbody></table>
      </td></tr></tbody>
    </table>
  );
}

Object.assign(window, {
  EmailHeader, SectionHeader, BodyCopy, CodeBox, LinkRow, LinkRowItem,
  Divider, SocialRow, SideBySide, EmailFooter,
  LogoMark, HeroImage, BrandHeader, NavBar, LightPanel, PillButton,
  AthleteRow, DisclaimerBlock, FDABoilerplate,
});
