# Finance Analysis & Mentor Preparation Report
## Lolita Bagojan (Finance) - Prototron Accelerator

**Prepared:** December 8, 2025  
**Company:** Gratheon OÜ  
**Website:** [gratheon.com](../../../index.md)
**Meeting Purpose:** Financial strategy and readiness assessment for accelerator program

---

## Executive Summary

Gratheon is an Estonian deeptech startup building beehive monitoring IoT hardware and SaaS analytics platform. While the company demonstrates strong technical capabilities, clear market positioning, and detailed equity planning, it lacks fundamental financial infrastructure and data required for investor readiness and sustainable growth.

### Financial Readiness Score: 3/10 (Pre-Seed Critical Gaps)

**Strengths:**
- Well-structured equity cap table with vesting schedules
- Clear fundraising roadmap (€40k → €1M → €5M → €15M → €40M)
- Detailed pricing strategy across 4 SaaS tiers + hardware
- Strong market sizing (620k beekeepers EU, 94M hives globally)

**Critical Gaps:**
- **No documented financial statements** (P&L, balance sheet, cash flow)
- **No unit economics data** (CAC, LTV, churn, gross margin)
- **No burn rate or runway tracking**
- **No revenue forecasts or financial models**
- **Hardware COGS unknown** (manufacturing costs not estimated)
- **No bookkeeping system mentioned**
- **No budget allocation** (development vs sales vs operations)

### Immediate Financial Risks

1. **Blind Cash Management:** Cannot make informed decisions without burn rate visibility
2. **Pricing Validation Gap:** Prices set without cost structure or profitability analysis
3. **Fundraising Vulnerability:** Investors will demand financial data that doesn't exist
4. **Resource Misallocation:** Building 3 products simultaneously without ROI modeling
5. **Scalability Unknown:** No path to profitability or break-even modeling

---

## 1. FINANCIAL INFRASTRUCTURE ASSESSMENT

### 1.1 Current State: CRITICAL ABSENCE

**What Exists:**
- ✅ Company registered: Gratheon OÜ (Estonia)
- ✅ Equity structure documented in detail
- ✅ Trademark filing (€300 invested, Dec 2025)
- ✅ NVIDIA Inception Program membership (GPU credits)
- ✅ Pricing tiers defined (Hobbyist/Starter/Pro/Flexible)

**What's Missing:**
- ❌ No mention of accounting software (Xero, QuickBooks, Merit Aktiva)
- ❌ No bookkeeper or CFO involvement
- ❌ No financial statements generated
- ❌ No expense tracking system
- ❌ No invoicing infrastructure
- ❌ No VAT compliance documentation
- ❌ No payroll system (volunteers + contractors?)
- ❌ No financial controls or approval processes

**Impact:**
- Cannot track burn rate or runway
- Cannot calculate unit economics
- Risk of tax compliance issues
- Impossible to audit for due diligence
- No basis for financial forecasting

### 1.2 Recommended Immediate Actions

#### Priority 1: Basic Bookkeeping Setup (Week 1)

**Tool Selection:**
- **Option A (Estonia-specific):** Merit Aktiva (€20-40/mo)
  - Estonian language support
  - e-Invoicing integration
  - Tax reporting automation
- **Option B (International):** Xero (€25-60/mo)
  - Better for multi-currency
  - Strong ecosystem integrations
  - Investor familiarity

**Initial Setup Tasks:**
1. Connect bank accounts (auto-import transactions)
2. Categorize historical expenses (past 12 months minimum)
3. Set up chart of accounts:
   - Revenue: SaaS subscriptions, hardware sales, grants
   - COGS: Cloud infrastructure, AI inference, hardware manufacturing
   - R&D: Software development, prototyping
   - Sales/Marketing: Website hosting, ads, events
   - Operations: Legal, accounting, insurance
4. Generate monthly P&L statements
5. Track cash position weekly

**Cost:** €300-500 one-time setup + €25-60/month

#### Priority 2: Financial Dashboard (Week 2)

**Key Metrics to Track:**

| Category | Metric | Target | Current Status |
|----------|--------|--------|----------------|
| **Cash** | Bank balance | Track weekly | Unknown |
| **Cash** | Monthly burn rate | `<€5k` pre-funding | Unknown |
| **Cash** | Runway (months) | >12 months | Unknown |
| **Revenue** | MRR (Monthly Recurring Revenue) | €500 by Q2 2026 | Unknown (likely €0) |
| **Revenue** | ARR (Annual Recurring Revenue) | €100k by 2027 | Unknown |
| **Customers** | Paying customers | 50 by Q4 2026 | Unknown (200 registered, 0 paying?) |
| **Customers** | Free → Paid conversion rate | >5% | Unknown |
| **Customers** | Monthly churn rate | `<5%` | Unknown |
| **Unit Econ** | CAC (Customer Acquisition Cost) | `<€100` | Unknown |
| **Unit Econ** | LTV (Lifetime Value) | >€500 | Unknown |
| **Unit Econ** | LTV/CAC ratio | >3:1 | Unknown |
| **Margins** | SaaS gross margin | >70% | Unknown |
| **Margins** | Hardware gross margin | >30% | Unknown |

**Tool:** Google Sheets template → Later migrate to Geckoboard/Databox (€40-100/mo)

**Questions for Mentor:**
1. Which 5-7 metrics should we prioritize first with limited tracking capacity?
2. How frequently should pre-revenue startup review financials? (Weekly/monthly?)
3. Should we hire fractional CFO (€500-1500/mo) or DIY until seed round?

---

## 2. UNIT ECONOMICS ANALYSIS

### 2.1 SaaS Unit Economics: DATA VOID

**Pricing Structure Documented:**

| Tier | Price | Target Market | Hive Limit | Status |
|------|-------|---------------|------------|--------|
| Hobbyist | Free | 1-3 hives | 3 hives | ✅ Live |
| Starter | €15/mo (€180/yr) | 10-20 hives | 20 hives | ✅ Live |
| Professional | €49/mo (€588/yr) | 50-150 hives | 150 hives | 🚧 Dev |
| Flexible | €100/1000 tokens | Research/Enterprise | Unlimited | 🚧 Dev |

**Critical Missing Data:**

1. **Customer Acquisition Cost (CAC):**
   - How much spent to acquire one paying customer?
   - Channels: Organic (SEO, content) vs Paid (ads, events)
   - Current assumption: Likely very low (200 users organically) but zero revenue
   - **Question:** Is organic only sustainable, or will paid acquisition be needed?

2. **Lifetime Value (LTV):**
   - Average customer lifespan: Unknown (no retention data)
   - Average revenue per user per month: Unknown
   - Churn rate: Unknown
   - Formula: LTV = ARPU × (1 / Monthly Churn Rate)
   - Example: If ARPU = €20/mo and churn = 5%, LTV = €20 × 20 = €400
   - **Current LTV: Undefined**

3. **LTV/CAC Ratio:**
   - Healthy SaaS: 3:1 minimum (ideally 5:1)
   - Gratheon: Cannot calculate without CAC and LTV
   - Risk: Could be unprofitable without knowing this

4. **Gross Margin:**
   - SaaS typically: 70-90%
   - Gratheon COGS:
     - Cloud infrastructure (AWS, Firebase, etc): Unknown monthly cost
     - AI inference costs (GPU compute for vision models): Unknown per-frame cost
     - Data storage (images, videos): Unknown per-user cost
     - Support labor: Unknown (volunteer-based currently?)
   - **Estimated gross margin: 60-80%?** (needs validation)

**Questions for Mentor:**
1. At 200 registered users with €0 MRR, should we focus on conversion before adding more features?
2. What's acceptable CAC for €15/mo product? (Rule of thumb: `<€50`?)
3. How to estimate AI inference costs before scaling? (Run pilot with 10 paying users?)
4. Should we delay hardware launch until SaaS unit economics proven?

### 2.2 Hardware Unit Economics: COMPLETELY UNKNOWN

**Planned Products:**

| Product | Planned Price | Units (2026) | Status |
|---------|---------------|--------------|--------|
| IoT Scales | €300-400 | 20 units Q1 | TRL 4 (prototype) |
| Entrance Observer | €600-800 | 5 units Q3 | TRL 5 (alpha) |
| Robotic Beehive | TBD | 0 (5+ years) | TRL 2 (concept) |

**Critical Missing Data:**

1. **Manufacturing COGS (Cost of Goods Sold):**
   - **IoT Scales:**
     - Load cell sensor: €? 
     - Microcontroller (ESP32?): €?
     - Weatherproof enclosure: €?
     - PCB + assembly: €?
     - Estimated COGS: **€100-150?** (pure guess)
     - Gross margin at €350 price: **57-71%?**
   
   - **Entrance Observer:**
     - Camera module: €?
     - NVIDIA Jetson Orin Nano: €?
     - Protective case + landing board: €?
     - Estimated COGS: **€250-350?** (pure guess)
     - Gross margin at €700 price: **50-64%?**

2. **Manufacturing Complexity:**
   - Low volume (20 scales, 5 cameras in 2026) = high per-unit cost
   - No documented manufacturing partner (DIY assembly? Local contractor?)
   - Quality control process: Undefined
   - Warranty/replacement rate: Unknown
   - Shipping costs: Unknown (domestic vs EU-wide)

3. **Inventory & Working Capital:**
   - Need upfront cash to manufacture before sales
   - Example: 20 scales × €150 COGS = €3,000 pre-funding required
   - 5 cameras × €300 COGS = €1,500
   - Total: €4,500 minimum working capital for 2026 hardware
   - **Question:** Where does this cash come from? (€40k fundraise must cover this)

4. **Support & Warranty Costs:**
   - Field failure rate: Unknown (alpha products)
   - Replacement cost per unit: Unknown
   - Technical support hours per customer: Unknown
   - Installation support: Beekeeper self-installs or assisted?

**Hardware Profitability Model (Hypothetical):**

Assuming €350 IoT Scale:
- COGS: €120 (target)
- Gross profit per unit: €230
- Fulfillment (shipping, packaging): €20
- Support/warranty reserve (10%): €35
- **Net profit per unit: €175 (50% margin)**

But at 20 units/year: €175 × 20 = **€3,500 total hardware profit in 2026**
This does NOT cover:
- R&D costs (engineering time to develop scales)
- Marketing costs (how to find 20 customers?)
- Operational overhead

**Questions for Mentor:**
1. Should hardware be priced for profitability or as a loss-leader to drive SaaS subscriptions?
2. What's realistic hardware gross margin for low-volume deeptech? (30%? 50%?)
3. How to estimate COGS without manufacturing quotes? (Should we get 3 quotes ASAP?)
4. Is €40k fundraise enough to manufacture 20 scales + 5 cameras AND fund 12 months operations?

### 2.3 Blended Business Model: UNMODELED

**Revenue Streams:**

| Stream | 2026 Forecast | 2027 Forecast | Margin | Status |
|--------|---------------|---------------|--------|--------|
| SaaS (Hobbyist free) | €0 | €0 | 0% | ✅ Live |
| SaaS (Starter €15/mo) | €? | €? | 70%? | ✅ Live |
| SaaS (Pro €49/mo) | €0 | €? | 75%? | 🚧 Dev Q2 |
| Hardware (Scales) | €7k (20 units) | €35k (100 units)? | 50%? | 🚧 Q1 launch |
| Hardware (Cameras) | €3.5k (5 units) | €35k (50 units)? | 55%? | 🚧 Q3 launch |
| Corporate Sponsorship | €0 | €10k (10 hives)? | 20%? | 📝 Documented only |
| **Total Revenue** | **€10.5k?** | **€80k?** | **Mixed** | **Unvalidated** |

**Critical Questions:**
1. What % of hardware buyers subscribe to paid SaaS? (Assume 100%? 50%?)
2. What % of SaaS users buy hardware? (Upsell rate unknown)
3. Does hardware sale happen before or after SaaS trial? (Sales process undefined)
4. What's customer payback period? (€350 hardware + €180/yr SaaS = €530 Year 1 cost)

**Blended Margin Scenario (2027 Goal):**
- 100 SaaS customers × €300 ARPU = €30k ARR (75% margin = €22.5k gross profit)
- 100 hardware units × €175 profit = €17.5k one-time profit
- **Total 2027 gross profit: €40k**
- But if annual opex is €60k (2 salaries) → **€20k loss**
- Need 200 SaaS customers to break even? Or raise more capital?

**Questions for Mentor:**
1. How to model blended hardware + SaaS unit economics? (Industry examples?)
2. Should we focus on SaaS-only GTM first, add hardware later? Or vice versa?
3. What's realistic timeframe to profitability for deeptech IoT startup? (3 years? 5 years?)

---

## 3. CASH FLOW & BURN RATE ANALYSIS

### 3.1 Current Financial Position: COMPLETELY OPAQUE

**What We Know:**
- Company founded 2012 (web development), pivoted to beekeeping 2020
- Bootstrapping phase, no external funding yet
- Participating in Prototron accelerator (€40k target)
- 200+ registered users (likely €0 revenue)
- 12+ volunteers contributing (unclear if any paid contractors)

**What We Don't Know:**
- Current bank balance: Unknown
- Monthly expenses: Unknown
- Revenue to date: Unknown (likely €0)
- Founder salary: Unknown (likely €0, living on savings?)
- Burn rate: Unknown
- Runway: Unknown

**Estimated Monthly Expenses (Pre-Funding):**

| Category | Estimated Cost/Month | Notes |
|----------|---------------------|-------|
| **Cloud Infrastructure** | €50-200 | AWS, Firebase, domain hosting for 200 users |
| **AI/ML Inference** | €0-50 | Low usage with 200 free users, GPU credits from NVIDIA |
| **Legal/Accounting** | €0-100 | Minimal compliance, no bookkeeper yet |
| **Trademark/IP** | €25 (€300/12mo) | Filed Dec 2025 |
| **Marketing** | €0-50 | Website hosting, minimal ads |
| **Founder Salary** | €0 | Unpaid, bootstrapping |
| **Office/Tools** | €0-100 | Likely working from home, software subscriptions |
| **Insurance** | €0-50 | Business liability (if any) |
| **R&D Materials** | €100-500 | Prototyping hardware (scales, cameras) |
| **TOTAL BURN RATE** | **€175-1,050/mo** | **Wide range, needs validation** |

**Estimated Annual Burn (Pre-Funding): €2,000-12,000/year**

**Questions for Mentor:**
1. Is €0 founder salary sustainable for how long? (Runway based on personal savings?)
2. What's minimum viable burn rate for pre-revenue deeptech startup? (€2k/mo? €5k/mo?)
3. Should we prioritize paying founder minimum salary (€1,500/mo) over feature development?

### 3.2 Post-Funding Scenarios (€40k Angel Round)

**Assumption:** Raise €40k in Q1 2026 (Prototron + angels)

**Allocation Strategy (Needs Validation):**

| Category | Amount | % | Justification |
|----------|--------|---|---------------|
| **Product Development** | €15,000 | 37.5% | Finish IoT scales prototype, cameras alpha testing |
| **Manufacturing** | €5,000 | 12.5% | Build 20 scales + 5 cameras (working capital) |
| **Marketing & Sales** | €8,000 | 20% | Beekeeping events, ads, content, partnerships |
| **Founder Salary** | €10,000 | 25% | €1,250/mo × 8 months (survival mode) |
| **Operations** | €2,000 | 5% | Legal, accounting, insurance, tools |
| **TOTAL** | **€40,000** | **100%** | **Runway: 8-10 months** |

**Burn Rate Post-Funding:**
- Monthly burn: €4,000-5,000 (€40k / 8-10 months)
- Need revenue by Month 6-8 to extend runway
- Target: €1,000 MRR by Month 8 (20 Starter customers × €50 avg)

**Questions for Mentor:**
1. Is 25% to founder salary reasonable, or should it be 0% to extend runway to 12 months?
2. Is 12.5% (€5k) enough for hardware manufacturing working capital? (Risk of underestimating COGS)
3. Should we allocate more to sales/marketing (20% → 30%) to drive early revenue?
4. What's safe cash reserve buffer? (Keep €5k untouched for emergencies?)

### 3.3 Revenue Milestones & Path to Sustainability

**Scenario: Path to €1M ARR by 2027 (Seed Fundraising Requirement)**

Needed for credible Seed round (€5M at €19M valuation per cap table):
- Prove product-market fit
- Show repeatable sales motion
- Demonstrate path to profitability
- Achieve €500k-1M ARR

**Revenue Milestones:**

| Quarter | SaaS Customers | MRR | Hardware Units | One-Time Revenue | Total Quarterly Revenue |
|---------|----------------|-----|----------------|---------------------|-------------------------|
| **2026 Q1** | 10 paying (from 200 free) | €150 | 5 scales | €1,750 | €2,200 |
| **2026 Q2** | 25 | €400 | 10 scales | €3,500 | €4,700 |
| **2026 Q3** | 50 | €900 | 15 scales + 5 cameras | €8,750 | €11,450 |
| **2026 Q4** | 100 | €2,000 | 20 scales + 10 cameras | €14,000 | €20,000 |
| **2027 Q1** | 150 | €3,500 | 30 scales + 15 cameras | €21,000 | €31,500 |
| **2027 Q2** | 250 | €6,000 | 50 scales + 25 cameras | €35,000 | €53,000 |
| **2027 Q3** | 400 | €10,000 | 75 scales + 40 cameras | €52,500 | €82,500 |
| **2027 Q4** | 600 | €18,000 | 100 scales + 50 cameras | €70,000 | €124,000 |
| **END 2027** | **600 customers** | **€18k MRR** | **305 total units** | **€206.5k hardware** | **€329.5k total revenue** |

**ARR End of 2027: €18k × 12 = €216k** (Plus €206k one-time hardware = **€422k total revenue**)

**Gap to €1M ARR: Need 3,000 SaaS customers at €27 ARPU** or **different model**

**Alternative: B2B2B Corporate Sponsorship Focus**

| Quarter | Corporate Sponsors | Hives Managed | ARR/Sponsor | Quarterly ARR Add |
|---------|-------------------|---------------|-------------|-------------------|
| 2026 Q3 | 2 | 10 hives | €10k | €20k |
| 2026 Q4 | 5 | 25 hives | €10k | €50k |
| 2027 Q1 | 10 | 50 hives | €10k | €100k |
| 2027 Q2 | 20 | 100 hives | €10k | €200k |
| 2027 Q3 | 40 | 200 hives | €10k | €400k |
| 2027 Q4 | 70 | 350 hives | €10k | €700k |
| **END 2027** | **70 sponsors** | **350 hives** | **€10k avg** | **€700k ARR** |

Add SaaS baseline: €216k ARR → **Total €916k ARR** (Close to €1M target!)

**Questions for Mentor:**
1. Which path is more realistic: 3,000 individual beekeepers or 70 corporate sponsors?
2. Should we pivot strategy to prioritize B2B2B over B2C given higher ACV and ARR potential?
3. What's typical sales cycle for B2B2B corporate sponsorship? (3 months? 6 months? 12 months?)
4. How to model blended revenue when hardware is one-time but SaaS is recurring?

---

## 4. FUNDRAISING STRATEGY & VALUATION

### 4.1 Cap Table Analysis: WELL STRUCTURED

**Fundraising Roadmap:**

| Round | Amount | Equity % | Post-Money Val | Use of Funds | Timeline |
|-------|--------|----------|----------------|--------------|----------|
| **Angel** | €40k | 2% | €2M | Prototype IoT, field test | Q1 2026 (now) |
| **Pre-Seed** | €1M | 16.7% | €5.67M | Market entry, hire engineers | Q3 2026 |
| **Seed** | €5M | 16.6% | €19.4M | Scale sales, robotic beehive R&D | Q2 2027 |
| **Series A** | €15M | 14.5% | €56.6M | EU expansion, 150 hives target | Q4 2028 |
| **Series B** | €40M | 10.8% | €158.6M | Mass market, robotic beehive launch | 2030 |

**Strengths:**
- Dilution managed well (founder retains 21.6% at Series B)
- Team option pool expands over time (20% → 32%)
- Valuation growth realistic (10x per round)
- Convertible notes structure (standard for early stage)

**Concerns:**
1. **€2M valuation with €0 revenue?**
   - Typical pre-revenue valuation: €500k-2M (depends on team, tech, traction)
   - Gratheon has 200 users, strong tech, open source community → justifiable
   - But investors will question without revenue proof

2. **€40k at 2% implies €2M valuation**
   - Is this pre-money or post-money? (Needs clarification in term sheet)
   - Standard: Post-money for SAFE notes, pre-money for priced rounds

3. **Timeline Aggressive:**
   - Angel Q1 2026 (now) → Pre-seed Q3 2026 (6 months) → Seed Q2 2027 (9 months)
   - Typically: 12-18 months between rounds
   - Requires strong traction (MRR growth, unit sales) between rounds

**Questions for Mentor:**
1. Is €2M pre-money valuation defensible with €0 revenue but strong tech and 200 users?
2. Should we use SAFE notes (post-money) or priced round (pre-money) for €40k angel?
3. What traction milestones do we need to hit to raise €1M pre-seed at €5.67M valuation?
4. Is it better to raise larger angel round (€100k) to extend runway, or stay lean at €40k?

### 4.2 Investor Due Diligence Readiness: CRITICAL GAPS

**Typical Investor DD Checklist (Pre-Seed):**

| Category | Requirement | Gratheon Status | Gap Severity |
|----------|-------------|-----------------|--------------|
| **Financials** | 12-24 months financial statements | ❌ None | 🔴 Critical |
| **Financials** | Cap table with fully diluted shares | ✅ Documented | 🟢 Complete |
| **Financials** | Budget & burn rate | ❌ None | 🔴 Critical |
| **Financials** | Revenue forecast (3 years) | ❌ None | 🔴 Critical |
| **Financials** | Unit economics (CAC, LTV, churn) | ❌ None | 🔴 Critical |
| **Legal** | Company registration documents | ✅ Gratheon OÜ | 🟢 Complete |
| **Legal** | Founder agreements & vesting | ⚠️ Implied, not shown | 🟡 Needs validation |
| **Legal** | Employee/contractor agreements | ❌ Unknown | 🟡 Medium |
| **Legal** | IP ownership & assignment | ⚠️ Open source (AGPL) | 🟡 Needs clarity |
| **Legal** | Trademark registration | ✅ Filed Dec 2025 | 🟢 In progress |
| **Product** | Product roadmap & milestones | ✅ Documented | 🟢 Complete |
| **Product** | Tech stack & architecture | ✅ Well documented | 🟢 Complete |
| **Product** | Security & data privacy | ⚠️ Not explicit | 🟡 Needs docs |
| **Market** | TAM/SAM/SOM analysis | ✅ Market sizing done | 🟢 Complete |
| **Market** | Customer personas & validation | ✅ Detailed | 🟢 Complete |
| **Market** | Competitive analysis | ✅ 45+ competitors mapped | 🟢 Complete |
| **Traction** | User metrics (DAU, MAU, retention) | ⚠️ 200 users, no details | 🟡 Needs metrics |
| **Traction** | Revenue (MRR, ARR, growth rate) | ❌ Likely €0 | 🔴 Expected pre-rev |
| **Team** | Team bios & LinkedIn profiles | ⚠️ Notion link, not in dataroom | 🟡 Needs consolidation |
| **Team** | Advisors & board members | ❌ Not documented | 🟡 Medium |

**Blockers for Fundraising:**
1. **No financial statements** → Cannot assess business health
2. **No revenue forecast** → Cannot model return on investment
3. **No unit economics** → Cannot validate scalability
4. **No burn rate** → Cannot determine runway and urgency

**Minimum Viable DD Package (4 Weeks to Prepare):**

**Week 1: Financial Basics**
- Set up bookkeeping (Merit Aktiva or Xero)
- Generate P&L statement (past 12 months)
- Document current cash position
- Calculate monthly burn rate

**Week 2: Forecasting**
- Build 3-year revenue forecast (conservative, base, optimistic)
- Model unit economics (CAC, LTV assumptions)
- Create fundraising budget (how €40k will be spent)
- Define financial milestones (MRR targets per quarter)

**Week 3: Legal & Compliance**
- Compile company formation documents
- Draft founder vesting agreement (if not exists)
- Document IP ownership (especially open source strategy)
- Prepare contractor/volunteer agreements templates

**Week 4: Dataroom Assembly**
- Create investor dataroom folder structure:
  - `/financials` (P&L, forecast, cap table, budget)
  - `/legal` (company docs, IP, agreements)
  - `/product` (roadmap, architecture, demo videos)
  - `/market` (TAM, personas, competitors)
  - `/team` (bios, org chart, advisors)
- Write 1-page executive summary
- Prepare pitch deck (10-15 slides)

**Questions for Mentor:**
1. What's absolute minimum financial data needed for €40k angel round vs €1M pre-seed?
2. Can we fundraise with revenue forecast based on assumptions, or do we need actual sales first?
3. How to present open-source strategy (AGPL) to investors concerned about IP moats?
4. Should we delay fundraising to Q2 2026 to get revenue traction first?

---

## 5. COST STRUCTURE & PROFITABILITY PATH

### 5.1 Operating Expenses: UNMODELED

**Estimated Annual Opex (Post-€40k Funding, 2026):**

| Category | Annual Cost | % of Opex | Notes |
|----------|-------------|-----------|-------|
| **Salaries** | €18,000 | 45% | 1 founder at €1,500/mo (survival mode) |
| **Cloud Infrastructure** | €2,400 | 6% | €200/mo for 500 users |
| **AI/ML Compute** | €1,200 | 3% | €100/mo (NVIDIA credits offset) |
| **Manufacturing COGS** | €4,500 | 11% | 20 scales + 5 cameras (working capital) |
| **Marketing** | €6,000 | 15% | Events, ads, content, partnerships |
| **R&D Materials** | €3,000 | 7.5% | Prototyping, sensors, electronics |
| **Legal/Accounting** | €1,800 | 4.5% | Bookkeeper, annual audit |
| **Insurance** | €600 | 1.5% | Business liability |
| **Tools/Software** | €1,200 | 3% | SaaS subscriptions, design tools |
| **Office/Travel** | €1,200 | 3% | Coworking, beekeeping field visits |
| **TOTAL OPEX** | **€40,000** | **100%** | **Burn rate: €3,333/mo** |

**Runway:** €40,000 / €3,333/mo = **12 months** (if no revenue)

**Revenue Target to Break Even (2026):**
- Need to cover €40k opex with gross profit
- If SaaS gross margin is 75%, need €53k revenue (€40k / 0.75)
- If blended margin is 50% (hardware heavy), need €80k revenue
- **Target: €50k revenue in 2026** → Still burning cash, need pre-seed by Q4

### 5.2 Break-Even Analysis: WHEN DO WE BECOME PROFITABLE?

**Scenario 1: SaaS-Only Business**

Assumptions:
- ARPU (Average Revenue Per User): €20/month (mix of Starter and Pro tiers)
- Gross margin: 75% (SaaS standard)
- Fixed costs: €40k/year (lean operations)
- Variable costs: €5/customer/year (support, infrastructure)

Break-even customers:
- Fixed costs / (ARPU × 12 × Gross Margin - Variable Costs)
- €40,000 / (€20 × 12 × 0.75 - €5) = €40,000 / €175 = **229 paying customers**

Timeline to 229 customers:
- If conversion from free is 10%: Need 2,290 registered users
- Current: 200 registered users → Need 2,090 more users
- Growth rate: If 100 new users/month → **21 months (Q3 2027)**

**Scenario 2: Hardware + SaaS Blended**

Assumptions:
- 50% customers buy hardware (€350 avg) + subscribe (€20/mo)
- 50% customers subscribe only (€20/mo)
- Hardware gross margin: 50% (€175 profit per unit)
- SaaS gross margin: 75%

Blended economics per customer:
- 50% buy hardware: €175 one-time + (€20 × 12 × 0.75 × 3 years) = €175 + €540 = €715 LTV
- 50% SaaS only: €20 × 12 × 0.75 × 3 years = €540 LTV
- Average LTV: €627.50
- Less variable costs (€5/year × 3 years): €612.50 net LTV

Break-even customers:
- €40,000 / €612.50 = **65 customers** (much better!)

Timeline to 65 customers:
- If 10% conversion: Need 650 registered users
- Current: 200 users → Need 450 more
- If 50 new users/month → **9 months (Q3 2026)**

**Conclusion:** Hardware accelerates path to profitability (better unit economics)

**Scenario 3: B2B2B Corporate Sponsorship**

Assumptions:
- €10,000 ARR per corporate sponsor (10 hives × €1,000/hive/year)
- Gross margin: 20% (high service costs: beekeeper management, hardware, support)
- €2,000 gross profit per sponsor per year

Break-even sponsors:
- €40,000 / €2,000 = **20 corporate sponsors**

Timeline to 20 sponsors:
- If sales cycle is 3-6 months: 1-2 sponsors per month
- Need 10-20 months → **Q3 2027**

**Questions for Mentor:**
1. Which business model has clearest path to profitability: SaaS-only, hardware+SaaS, or B2B2B?
2. Should we optimize for fastest break-even (65 customers with hardware) or highest margin (SaaS-only)?
3. Is it realistic to achieve profitability before Series A, or is burning capital expected for deeptech?
4. How to balance growth (spending on sales/marketing) vs profitability (conserving cash)?

### 5.3 Scalability & Margin Improvement

**Current Cost Structure Issues:**
1. **Low volume hardware = high COGS** (no economies of scale)
2. **High support costs** (manual beekeeper onboarding)
3. **Founder-dependent** (no team leverage)

**Path to Improved Margins (2027-2028):**

| Initiative | Impact | Timeline |
|-----------|--------|----------|
| **Negotiate volume discounts** | Reduce hardware COGS by 20% (100+ units) | Q3 2026 |
| **Optimize cloud infrastructure** | Reduce hosting costs by 30% | Q2 2026 |
| **Self-service onboarding** | Reduce support costs by 50% | Q4 2026 |
| **Hire sales engineer** | Increase revenue 3x, costs 1.5x | Q1 2027 |
| **Automated hardware testing** | Reduce warranty costs by 40% | Q2 2027 |
| **API partnerships** | Reduce development costs, add revenue streams | Q3 2027 |

**Target Margins by 2027:**
- SaaS gross margin: 75% → 85% (scale efficiency)
- Hardware gross margin: 50% → 60% (volume discounts)
- Blended gross margin: 60% → 70%

**Target Profitability:**
- 2026: -€30k loss (burn capital, grow users)
- 2027: -€10k loss (near break-even)
- 2028: +€50k profit (post-Series A efficiency)

---

## 6. KEY QUESTIONS FOR FINANCE MENTOR

### Strategic Finance

1. **Business Model Prioritization:**
   - Should we focus on B2C (individual beekeepers) or B2B2B (corporate sponsorships) given limited resources?
   - Is hardware a growth driver or distraction from higher-margin SaaS business?

2. **Fundraising Timing:**
   - Can we credibly raise €40k at €2M valuation with €0 revenue and 200 users?
   - Should we delay to Q2 2026 to show revenue traction first?
   - What minimum traction is needed for €1M pre-seed round? (MRR target?)

3. **Profitability Strategy:**
   - Is aiming for profitability pre-Series A realistic for deeptech, or should we optimize for growth?
   - What's healthy burn rate for pre-revenue IoT startup? (€3k/mo? €5k/mo? €10k/mo?)

### Tactical Finance

4. **Financial Infrastructure:**
   - Should we hire fractional CFO now (€500-1500/mo) or wait until pre-seed round?
   - Best accounting software for Estonian startup planning EU expansion? (Merit Aktiva vs Xero)
   - How to set up billing for usage-based Flexible tier (€100/1000 tokens)?

5. **Unit Economics:**
   - What's acceptable CAC for €15/mo SaaS product in niche market? (&lt;€50? &lt;€100?)
   - How to estimate AI inference costs before scaling? (Pilot with 10 paying users and measure?)
   - What's realistic hardware gross margin for low-volume (20-100 units/year) deeptech? (30%? 50%?)

6. **Cash Management:**
   - How much of €40k should go to founder salary vs product development? (25% salary reasonable?)
   - Should we keep cash reserve buffer? (€5k untouched for emergencies?)
   - How to manage working capital for hardware manufacturing? (Need €5k upfront before sales)

### Market & Pricing

7. **Pricing Validation:**
   - Are current prices (€15 Starter, €49 Pro) too low, too high, or right for market?
   - Should we test higher prices first (price skimming) or start low (penetration pricing)?
   - How to transition free users to paid without churn? (Grandfather free tier or force upgrade?)

8. **Revenue Forecasting:**
   - What's realistic conversion rate from free to paid for niche B2B SaaS? (5%? 10%? 20%?)
   - What's acceptable churn rate for annual subscription? (`<5%`? `<10%`?)
   - How to forecast blended revenue (hardware one-time + SaaS recurring)?

---

## 7. ACTION ITEMS & NEXT STEPS

### Immediate Actions (Before Mentor Meeting)

**Priority 1: Financial Data Collection (Week 1)**
- [ ] List all expenses for past 12 months (bank statements, credit cards)
- [ ] Calculate current cash position (bank balances, liabilities)
- [ ] Estimate monthly burn rate (average last 6 months)
- [ ] Document any revenue to date (even if €0, state it explicitly)

**Priority 2: Basic Financial Model (Week 2)**
- [ ] Build simple 3-year revenue forecast in Google Sheets (conservative case)
- [ ] Estimate hardware COGS (get 3 quotes for scales and cameras)
- [ ] Calculate theoretical unit economics (CAC, LTV with assumptions)
- [ ] Map out use of funds for €40k raise (budget allocation)

**Priority 3: Dataroom Prep (Week 3)**
- [ ] Create `/financials` folder in prototron_dataroom
- [ ] Add cap table (already exists in equity doc)
- [ ] Add revenue forecast spreadsheet
- [ ] Add fundraising budget (how €40k will be spent)
- [ ] Add founder bio and team structure

### Post-Mentor Meeting Actions

**Based on mentor feedback, prioritize:**

1. **If "Focus on revenue first":**
   - Convert 10-20 free users to paid Starter plan (€15/mo)
   - Validate pricing and willingness to pay
   - Measure churn and support costs
   - Delay hardware until SaaS unit economics proven

2. **If "Hardware is your differentiator":**
   - Get manufacturing quotes for 20 IoT scales ASAP
   - Pre-sell scales to 10 customers (deposit model)
   - Validate COGS and gross margin in field
   - Use hardware as lead generation for SaaS upsell

3. **If "Pivot to B2B2B corporate":**
   - Identify 20 target Estonian companies (tech, sustainability-focused)
   - Develop corporate sponsorship sales deck
   - Pilot with 2-3 sponsors in Q1 2026
   - Validate pricing (€500-2,000/hive/year)

4. **If "Not ready to fundraise yet":**
   - Build financial infrastructure first (bookkeeping, forecasts)
   - Get to €1,000 MRR (50-70 paying customers)
   - Reduce burn rate to extend runway 12+ months
   - Revisit fundraising in Q3 2026 with traction proof

### Long-Term Financial Roadmap

**Q1 2026 (Current):**
- Set up bookkeeping system
- Build financial model and forecasts
- Prepare investor dataroom
- Launch paid tier conversion campaign
- Target: 10 paying customers, €150 MRR

**Q2 2026:**
- Raise €40k angel round (Prototron + angels)
- Launch IoT scales (20 units)
- Hire fractional CFO or bookkeeper (€500/mo)
- Target: 25 paying customers, €400 MRR, €7k hardware sales

**Q3 2026:**
- Validate hardware unit economics (COGS, support costs)
- Achieve €1,000 MRR milestone
- Start pre-seed fundraising conversations (€1M target)
- Launch Entrance Observer alpha (5 units)

**Q4 2026:**
- Close €1M pre-seed round
- Hire full-time engineer (€3k/mo)
- Target: 100 paying customers, €2,000 MRR
- Prepare Series A metrics (path to €1M ARR by 2027)

---

## 8. SUMMARY & RECOMMENDATIONS

### Financial Health Assessment: 4/10 (Needs Immediate Attention)

**What's Working:**
- Clear equity structure and fundraising roadmap
- Realistic valuation expectations
- Strong market sizing and positioning
- Disciplined capital allocation mindset (bootstrapping until now)

**What's Critical:**
- **No financial tracking system** → Implement bookkeeping within 2 weeks
- **No unit economics validation** → Test with 10 paying customers
- **No cash flow visibility** → Calculate burn rate and runway immediately
- **Hardware COGS unknown** → Get manufacturing quotes before committing to production

### Top 3 Finance Priorities

1. **Financial Infrastructure (Week 1-2):**
   - Set up Merit Aktiva or Xero
   - Generate P&L for past 12 months
   - Track burn rate and cash runway
   - **Cost:** €300 setup + €30/mo
   - **Impact:** Enables all other financial decisions

2. **Unit Economics Validation (Week 3-6):**
   - Convert 10-20 free users to Starter plan
   - Measure CAC, LTV, churn, support costs
   - Get 3 manufacturing quotes for hardware COGS
   - **Cost:** €500 marketing/sales effort
   - **Impact:** Proves business model viability

3. **Revenue Forecast & Fundraising Plan (Week 7-8):**
   - Build 3-year financial model
   - Document use of funds for €40k raise
   - Prepare investor dataroom
   - **Cost:** 20-40 hours founder time
   - **Impact:** Unlocks fundraising ability

### Meeting Preparation Checklist

**Bring to mentor meeting:**
- [ ] Current cash position (bank balance)
- [ ] Estimated monthly expenses (even rough)
- [ ] List of 200 registered users: How many active? How many could convert to paid?
- [ ] Cap table spreadsheet (already well documented)
- [ ] Questions about specific business model trade-offs (listed above)

**Ask mentor for:**
- [ ] Recommendation on accounting software (Merit Aktiva, Xero, or other?)
- [ ] Fractional CFO referrals (if recommended)
- [ ] Industry benchmarks (SaaS conversion rates, hardware margins, burn rates for comparable startups)
- [ ] Investor introductions (if fundraising readiness score improves to 7/10+)

---

**Document Status:** Draft v1.0  
**Next Review:** Post-mentor meeting (update with feedback)  
**Owner:** Founder (Artjom)  
**Last Updated:** December 8, 2025
