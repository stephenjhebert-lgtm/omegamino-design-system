// OmegAmino email tokens — mirrors ../../colors_and_type.css and ../../email-blocks/tokens.md
// Used inline (no classes) to stay Outlook-safe when exported.

const T = {
  color: {
    bgBody:        '#141C29',
    bgCard:        '#0F1A2E',
    borderSubtle:  '#1E3550',
    divider:       '#1E2A38',
    accentBlue:    '#1AACF0',
    accentGreen:   '#B3FF00',
    textPrimary:   '#F4F6FA',
    textSecondary: '#8A9BB5',
    textBody:      '#C7CAD0',
    igFallback:    '#C13584',
  },
  font: {
    display: "'Trebuchet MS', Helvetica, Arial, sans-serif",
    body:    "Helvetica, Arial, sans-serif",
    mono:    "'Courier New', Courier, monospace",
  },
  // Returns an inline-style object for a role
  role: {
    hero:       { fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontSize:'36px', fontWeight:'bold', textTransform:'uppercase', letterSpacing:'5px', color:'#F4F6FA', margin:0 },
    heading:    { fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontSize:'22px', fontWeight:'bold', textTransform:'uppercase', letterSpacing:'4px', color:'#F4F6FA', margin:0 },
    linkTitle:  { fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontSize:'16px', fontWeight:'bold', textTransform:'uppercase', letterSpacing:'2px', color:'#F4F6FA', margin:0 },
    codeDisplay:{ fontFamily: "'Trebuchet MS', Helvetica, Arial, sans-serif", fontSize:'30px', fontWeight:'bold', textTransform:'uppercase', letterSpacing:'5px', color:'#B3FF00', margin:0 },
    bodyCopy:   { fontFamily: "Helvetica, Arial, sans-serif", fontSize:'15px', lineHeight:1.6, color:'#C7CAD0', margin:0 },
    linkSub:    { fontFamily: "Helvetica, Arial, sans-serif", fontSize:'14px', color:'#8A9BB5', margin:0 },
    label:      { fontFamily: "'Courier New', Courier, monospace", fontSize:'11px', letterSpacing:'2.5px', textTransform:'uppercase', color:'#1AACF0', margin:0 },
    monoSm:     { fontFamily: "'Courier New', Courier, monospace", fontSize:'10px', letterSpacing:'2px', textTransform:'uppercase', color:'#8A9BB5', margin:0 },
    socialHandle:{fontFamily: "'Courier New', Courier, monospace", fontSize:'13px', color:'#8A9BB5', margin:0 },
  },
};

window.OATokens = T;
