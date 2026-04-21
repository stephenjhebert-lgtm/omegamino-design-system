// OmegAmino email templates. Each renders a realistic campaign layout
// using the primitives in Blocks.jsx.
//
// These are the "few templates/reusable formats" the email program uses
// most often — layouts for stacking, side-by-side, hero-plus-body, etc.

function Welcome() {
  return (
    <>
      <EmailHeader />
      <SectionHeader label="// welcome" heading="YOU'RE IN" />
      <BodyCopy paragraphs={[
        "Quick context on what to expect. Protocol notes, stack rationales, and the occasional partner drop. No hype, no daily blasts.",
        "Start here:",
      ]} />
      <LinkRow items={[
        { href: 'https://omegamino.net/bpc-157', title: 'BPC-157 PROTOCOL', subtitle: 'Dosing windows, sequencing with TB-500, expected timelines.' },
      ]} />
      <Divider />
      <SectionHeader label="// first-order" heading="CODE ON US" />
      <CodeBox label="Welcome Code" code="START10" saveLine="Save 10% on your first order" />
      <Divider />
      <SocialRow href="https://www.instagram.com/omegamino" handle="@omegamino" />
      <EmailFooter />
    </>
  );
}

function PartnerDrop() {
  return (
    <>
      <EmailHeader />
      <SectionHeader label="// new partner" heading="WELCOME TO THE TEAM" />
      <BodyCopy paragraphs={[
        "Gary Crosby joins the research roster. Data-driven approach, transparent about his stack, consistent protocol discipline.",
        "His picks below. Code GARY runs through the end of the month.",
      ]} />
      <CodeBox label="Affiliate Code" code="GARY" saveLine="Save 10% at checkout" />
      <LinkRow items={[
        { href: 'https://omegamino.net/shop', title: "GARY'S SHELF", subtitle: 'The exact compounds he runs.' },
        { href: 'https://omegamino.net/gary-protocol', title: 'READ THE PROTOCOL', subtitle: 'Stack rationale, dosing windows.' },
      ]} />
      <Divider />
      <SocialRow href="https://www.instagram.com/gaz_crosby_formula" handle="@gaz_crosby_formula" />
      <EmailFooter />
    </>
  );
}

function ProtocolEducation() {
  return (
    <>
      <EmailHeader />
      <SectionHeader label="// protocol night" heading="BPC-157 + TB-500" />
      <BodyCopy paragraphs={[
        "Soft-tissue recovery stacks are the most-asked question in the DMs. Here's how athletes in the community are sequencing the two.",
      ]} />
      <Divider />
      <SectionHeader label="// the angle" heading="WHY STACK THEM" />
      <BodyCopy paragraphs={[
        "BPC-157 handles systemic repair. TB-500 works on tissue mobility and flexibility. They cover different mechanisms, which is why serious protocols run them together.",
      ]} />
      <SectionHeader label="// dosing" heading="HOW TO RUN IT" />
      <BodyCopy paragraphs={[
        "Most community protocols split dosing morning/evening and run 4–6 weeks. Full breakdown, including injection sites and cycling notes:",
      ]} />
      <LinkRow items={[
        { href: 'https://omegamino.net/stack-bpc-tb500', title: 'READ THE STACK', subtitle: 'Community-sourced protocol, no outcome claims.' },
      ]} />
      <Divider />
      <EmailFooter />
    </>
  );
}

function StackDigest() {
  return (
    <>
      <EmailHeader />
      <SectionHeader label="// march digest" heading="WHAT'S ON THE SHELF" />
      <BodyCopy paragraphs={[
        "Four compounds, four angles. Pick what applies.",
      ]} />
      <SideBySide
        left={{ href: '#', title: 'BPC-157', subtitle: 'Soft tissue, gut lining.' }}
        right={{ href: '#', title: 'TB-500', subtitle: 'Flexibility, recovery.' }}
      />
      <SideBySide
        left={{ href: '#', title: 'GLP-1', subtitle: 'Protocol-only. Read first.' }}
        right={{ href: '#', title: 'IPAMORELIN', subtitle: 'Sleep-cycle support.' }}
      />
      <Divider />
      <SectionHeader label="// this month" heading="20% ON STACKS" />
      <CodeBox label="Stack Code" code="STACK20" saveLine="Applies to any 2-compound order" />
      <Divider />
      <SocialRow />
      <EmailFooter />
    </>
  );
}

function ReEngagement() {
  return (
    <>
      <EmailHeader />
      <SectionHeader label="// been a minute" heading="QUICK ONE" />
      <BodyCopy paragraphs={[
        "No guilt trip. Just sending one thing we think is worth your time.",
      ]} />
      <LinkRow items={[
        { href: 'https://omegamino.net/protocol-lab', title: 'THE PROTOCOL LAB', subtitle: 'New: community protocols, no marketing copy, no outcome claims.' },
      ]} />
      <Divider />
      <EmailFooter />
    </>
  );
}

function PromoSale() {
  // Matches the Moving Sale campaign structure observed Apr 2026.
  return (
    <>
      <BrandHeader tagline="RESEARCH COMPANY" />
      <NavBar />
      <HeroImage src="../../assets/campaign-examples/moving-sale-top.png" alt="Moving Sale — up to 30% off + free shipping" href="#" />
      <LightPanel bg="#EFEFEF">
        <div style={{ fontFamily: T.font.display, fontSize: '18px', fontWeight: 'bold', color: '#111', marginBottom: '14px' }}>
          Save up to 30% this week.*
        </div>
        <p style={{ fontFamily: T.font.body, fontSize: '14px', lineHeight: 1.6, color: '#333', margin: '0 0 12px 0' }}>
          20% off sitewide, automatically applied at checkout. Got an affiliate code? Stack it for an extra 10% on top.
        </p>
        <p style={{ fontFamily: T.font.body, fontSize: '14px', lineHeight: 1.6, color: '#333', margin: '0 0 12px 0' }}>
          Plus everything ships free.
        </p>
        <p style={{ fontFamily: T.font.body, fontSize: '14px', lineHeight: 1.6, color: '#333', margin: '0 0 18px 0' }}>
          Straightforward: we need to move product, you get the deal.
        </p>
        <PillButton href="https://omegamino.net/shop" label="SHOP NOW" />
        <p style={{ fontFamily: T.font.body, fontSize: '10px', lineHeight: 1.5, color: '#6B6B6B', margin: '18px 0 0 0' }}>
          *Valid April 21, 12:01 AM, April 25, 11:59PM CST, while supplies last. Qualifying items must be in a single order. Add item to cart and 20% offer auto applies. Add the affiliate code for additional 10%. <b>Limit 1 per customer.</b> Not valid on prior purchases or other offers. Taxes apply to paid items. No returns.
        </p>
      </LightPanel>

      <AthleteRow bg="#000000" photo="" name="CHRIS MASSARO" code="CMASS" href="#" />
      <AthleteRow bg="#FFFFFF" photo="" name="TOMMY JOHN" code="TOMMY" href="#" />
      <AthleteRow bg="#000000" photo="" name="DOM CARDONE" code="IFBBDOM" href="#" />

      <DisclaimerBlock />
      <FDABoilerplate />
    </>
  );
}

const TEMPLATES = [
  { id: 'promo',        label: 'Promo / Sale',           Component: PromoSale },
  { id: 'welcome',      label: 'Welcome / Onboarding',   Component: Welcome },
  { id: 'partner',      label: 'Partner Drop',           Component: PartnerDrop },
  { id: 'protocol',     label: 'Protocol Education',     Component: ProtocolEducation },
  { id: 'digest',       label: 'Stack Digest (2-col)',   Component: StackDigest },
  { id: 'reengage',     label: 'Re-engagement',          Component: ReEngagement },
];

window.OATemplates = TEMPLATES;
