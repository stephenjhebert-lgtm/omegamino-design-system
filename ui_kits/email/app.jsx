// Interactive picker: sidebar of templates, center render at 600px (email width),
// right pane shows inline-style HTML to paste into Omnisend Custom HTML block.

function App() {
  const [active, setActive] = React.useState(window.OATemplates[0].id);
  const [copied, setCopied] = React.useState(false);
  const hostRef = React.useRef(null);
  const tpl = window.OATemplates.find(t => t.id === active);

  const [exported, setExported] = React.useState('');
  React.useEffect(() => {
    // After render, snapshot the outerHTML of the render host to show
    // what the user would paste into Omnisend.
    const t = setTimeout(() => {
      if (!hostRef.current) return;
      const html = hostRef.current.innerHTML;
      // Pretty-print lite: newline between top-level tables.
      const pretty = html.replace(/<\/table>/g, '</table>\n');
      setExported(pretty);
    }, 30);
    return () => clearTimeout(t);
  }, [active]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(exported); setCopied(true); setTimeout(() => setCopied(false), 1400); }
    catch { /* ignore */ }
  };

  return (
    <div style={appStyles.root}>
      {/* Sidebar */}
      <aside style={appStyles.sidebar}>
        <div style={appStyles.brand}>
          OMEG<span style={{ color: '#F4F6FA' }}>Ω</span>AMINO
          <div style={appStyles.brandSub}>// EMAIL UI KIT</div>
        </div>
        <div style={appStyles.navLabel}>TEMPLATES</div>
        <ul style={appStyles.nav}>
          {window.OATemplates.map(t => (
            <li key={t.id}>
              <button
                onClick={() => setActive(t.id)}
                style={{ ...appStyles.navBtn, ...(t.id === active ? appStyles.navBtnActive : {}) }}
              >
                <span style={appStyles.navArrow}>{t.id === active ? '→' : ' '}</span>
                <span>{t.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div style={appStyles.hint}>
          <div style={appStyles.hintLabel}>// HOW TO USE</div>
          <p style={appStyles.hintP}>Pick a template. Preview renders at 600px (Omnisend content column).</p>
          <p style={appStyles.hintP}>Copy the HTML on the right into an Omnisend <b>Custom HTML</b> block.</p>
          <p style={appStyles.hintP}>All layouts stack, support side-by-side where shown, and use tokens from the design system.</p>
        </div>
      </aside>

      {/* Center: email preview */}
      <main style={appStyles.main}>
        <div style={appStyles.mainHead}>
          <div style={appStyles.crumb}>/ preview / <span style={{ color: '#F4F6FA' }}>{tpl.label.toLowerCase()}</span></div>
          <div style={appStyles.crumb}>600PX · OMNISEND CONTENT COLUMN</div>
        </div>
        <div style={appStyles.stage}>
          <div style={appStyles.emailWrap} ref={hostRef}>
            <tpl.Component />
          </div>
        </div>
      </main>

      {/* Right: HTML export */}
      <aside style={appStyles.right}>
        <div style={appStyles.rightHead}>
          <div style={appStyles.crumb}>// HTML · PASTE INTO OMNISEND CUSTOM HTML</div>
          <button onClick={copy} style={appStyles.copyBtn}>{copied ? 'COPIED' : 'COPY'}</button>
        </div>
        <pre style={appStyles.code}>{exported}</pre>
      </aside>
    </div>
  );
}

const appStyles = {
  root: { display: 'grid', gridTemplateColumns: '260px 1fr 380px', height: '100vh', background: '#0B1320', color: '#C7CAD0', fontFamily: 'Helvetica, Arial, sans-serif' },
  sidebar: { borderRight: '1px solid #1E2A38', padding: '24px 18px', overflowY: 'auto' },
  brand: { fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontWeight: 'bold', letterSpacing: '4px', color: '#1AACF0', fontSize: '20px', textTransform: 'uppercase' },
  brandSub: { fontFamily: "'Courier New', Courier, monospace", fontSize: '10px', letterSpacing: '2px', color: '#8A9BB5', marginTop: '4px' },
  navLabel: { fontFamily: "'Courier New', Courier, monospace", fontSize: '10px', letterSpacing: '2px', color: '#1AACF0', marginTop: '28px', marginBottom: '8px' },
  nav: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' },
  navBtn: { display: 'flex', alignItems: 'center', gap: '10px', width: '100%', background: 'transparent', border: 'none', borderLeft: '3px solid transparent', padding: '10px 12px', textAlign: 'left', color: '#C7CAD0', fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '0 6px 6px 0' },
  navBtnActive: { background: '#0F1A2E', borderLeft: '3px solid #1AACF0', color: '#F4F6FA' },
  navArrow: { fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", color: '#1AACF0', width: '10px' },
  hint: { marginTop: '28px', borderTop: '1px solid #1E2A38', paddingTop: '16px' },
  hintLabel: { fontFamily: "'Courier New', Courier, monospace", fontSize: '10px', letterSpacing: '2px', color: '#1AACF0', marginBottom: '8px' },
  hintP: { fontSize: '12px', lineHeight: 1.5, color: '#8A9BB5', margin: '0 0 8px 0' },

  main: { display: 'flex', flexDirection: 'column', minWidth: 0, background: '#0B1320' },
  mainHead: { display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #1E2A38' },
  crumb: { fontFamily: "'Courier New', Courier, monospace", fontSize: '10px', letterSpacing: '2px', color: '#8A9BB5', textTransform: 'uppercase' },
  stage: { flex: 1, overflow: 'auto', padding: '28px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' },
  emailWrap: { width: '600px', maxWidth: '100%', background: '#141C29', boxShadow: '0 0 0 1px #1E2A38' },

  right: { borderLeft: '1px solid #1E2A38', display: 'flex', flexDirection: 'column', minWidth: 0 },
  rightHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid #1E2A38' },
  copyBtn: { fontFamily: "'Courier New', Courier, monospace", fontSize: '10px', letterSpacing: '2px', background: 'transparent', border: '1px solid #1E3550', color: '#1AACF0', padding: '6px 10px', cursor: 'pointer', borderRadius: '4px' },
  code: { flex: 1, margin: 0, padding: '14px', overflow: 'auto', background: '#0F1A2E', color: '#C7CAD0', fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', lineHeight: 1.5, whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
