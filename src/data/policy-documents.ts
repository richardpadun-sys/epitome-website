/**
 * The legal documents, migrated verbatim from theepitome.co.uk.
 *
 * Nothing in this file is rewritten, summarised or "improved" — legal wording
 * is reproduced exactly as published. Only the structure is expressed here,
 * so the long-form template can render headings, prose, lists and tables
 * consistently.
 */

import { POLICY_DOCS_PART_TWO } from "./policy-documents-2";

export type PolicyBlock =
  | { h: string }
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type PolicyDoc = {
  slug: string;
  title: string;
  lastUpdated: string;
  effective?: string;
  intro?: string;
  description: string;
  blocks: PolicyBlock[];
};

const termsAndConditionsOfSale: PolicyDoc = {
  slug: "terms-and-conditions-of-sale",
  title: "Terms and Conditions of Sale",
  lastUpdated: "25 June 2026",
  description:
    "Terms and Conditions of Sale governing all services purchased from The Epitome Group — definitions, basis of contract, charges, liability, data protection and governing law.",
  blocks: [
    { h: "1. Definitions and Interpretation" },
    {
      p: "In these Terms and Conditions of Sale ('Terms'), the following definitions apply:",
    },
    {
      ul: [
        "'Company' means The Epitome Group, operating at theepitome.co.uk, contactable at info@theepitome.co.uk.",
        "'Customer' means the individual, sole trader, partnership, or company that purchases Services from the Company.",
        "'Delegate' means any individual nominated by the Customer to attend or participate in Training.",
        "'Services' means any AI consultancy, AI integration, AIOS and business operating system design, AI agent configuration, workflow automation, software configuration, data processing, knowledge-base configuration, systems integration, third-party SaaS/API integration, AI training, audit, support, troubleshooting, optimisation, or related services provided by the Company as described in the relevant Proposal, Statement of Work, booking confirmation, or service description on the Company's website.",
        "'AIOS' means an AI-enabled business operating system, together with any associated AI agents, automations, workflows, integrations, and configurations designed, built, configured, or supported by the Company.",
        "'Training' means any workshop, course, seminar, or training programme (whether delivered in-person, online, or in hybrid format) provided by the Company.",
        "'Training Materials' means all slides, handouts, templates, frameworks, recordings, digital resources, and any other materials provided or made available in connection with the Services.",
        "'Proposal' means any written quotation, proposal document, or online service description issued by the Company to the Customer.",
        "'Statement of Work' or 'SOW' means any proposal, order form, scope document, or written scope confirmation describing the specific Services, deliverables, fees, and responsibilities for a particular engagement, project, or retainer.",
        "'Business Day' means a day other than a Saturday, Sunday, or public holiday in England.",
        "'Consumer' means an individual acting for purposes wholly or mainly outside that individual's trade, business, craft, or profession, as defined in the Consumer Rights Act 2015.",
      ],
    },
    {
      p: "References to 'writing' or 'written' include email and communications via the Company's website.",
    },

    { h: "2. Basis of Contract" },
    {
      p: "2.1 These Terms apply to and form part of all contracts between the Company and the Customer for the supply of Services. They supersede any previously issued terms and conditions or any terms the Customer seeks to impose or incorporate.",
    },
    {
      p: "2.2 A contract is formed when the Customer: (a) submits a booking via the Company's website and receives written confirmation; (b) signs or digitally accepts a Proposal; or (c) confirms acceptance by email — whichever occurs first.",
    },
    {
      p: "2.3 No variation to these Terms shall be binding unless agreed in writing and signed by an authorised representative of the Company.",
    },
    {
      p: "2.4 Any descriptive matter, illustrations, or advertising issued by the Company, and any descriptions or illustrations contained in the Company's website or marketing materials, are issued or published for the sole purpose of giving an approximate idea of the Services described in them. They shall not form part of the contract nor have any contractual force.",
    },

    { h: "3. Services" },
    {
      p: "3.1 The Company shall supply the Services to the Customer as described in the relevant Proposal or booking confirmation.",
    },
    {
      p: "3.2 The Company reserves the right to amend the content, format, or delivery method of any Training where reasonably necessary, provided the overall scope and objectives remain substantially the same. The Company will notify the Customer of any material changes as soon as reasonably practicable.",
    },
    {
      p: "3.3 The Company shall use reasonable endeavours to meet any performance dates specified in the Proposal, but such dates shall be estimates only and time shall not be of the essence for the performance of Services.",
    },
    {
      p: "3.4 Where Services are delivered at the Customer's premises, the Customer shall provide suitable facilities, equipment, internet access, and a safe working environment as reasonably required by the Company.",
    },
    {
      p: "3.5 Statement of Work. Each engagement, project, or retainer will be governed by a Statement of Work, proposal, order form, or written scope confirmation. The Customer is responsible for checking that the scope accurately reflects the Services required. Any work outside the agreed scope requires written approval and may be subject to additional fees and revised timelines. The Customer accepts these Terms once at the start of the relationship; each new project, retainer, change of scope, or go-live event requires a fresh written, email, or digital acceptance.",
    },
    {
      p: "3.6 Go-live acceptance. No AI agent, automation, integration, workflow, or system configuration will be treated as approved for live use until the Customer has completed testing and confirmed acceptance in writing. If the Customer uses any deliverable before formal acceptance, it will be deemed accepted to the extent used.",
    },
    {
      p: "3.7 Third-party platforms. The Company is not responsible for the availability, security, performance, output, pricing, changes, outages, data practices, model changes, or terms of any third-party platform, model provider, API, software, hosting provider, payment provider, CRM, accounting system, AI tool, automation tool, or other external service, except to the extent directly caused by the Company's negligence. The Company does not warrant uptime, resilience, business continuity, or the continued availability of any third-party service.",
    },
    {
      p: "3.8 No guarantee of outcomes. The Company does not guarantee any specific commercial, financial, operational, productivity, ranking, compliance, revenue, cost-saving, or performance outcome from the Services.",
    },

    { h: "4. Charges and Payment" },
    {
      p: "4.1 The fees for the Services shall be as set out in the relevant Proposal or booking confirmation.",
    },
    {
      p: "4.2 All fees are quoted exclusive of Value Added Tax (VAT), which shall be added at the prevailing rate where applicable.",
    },
    {
      p: "4.3 Unless otherwise stated in the Proposal, payment is due in full prior to the delivery of Services. For consultancy engagements, the Company may issue invoices monthly in arrears, payable within 14 days of the invoice date.",
    },
    {
      p: "4.4 If the Customer fails to make any payment due by the due date, the Company reserves the right to: (a) charge interest on the overdue amount at the rate of 8% per annum above the Bank of England base rate from time to time, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998; (b) suspend or withhold delivery of Services until payment is received; and (c) recover all reasonable costs of collection, including legal fees.",
    },
    {
      p: "4.5 All amounts due under these Terms shall be paid in full without any set-off, counterclaim, deduction, or withholding.",
    },

    { h: "5. Customer Obligations" },
    {
      p: "5.1 The Customer shall: (a) co-operate with the Company in all matters relating to the Services; (b) provide the Company with such information, materials, and access as the Company may reasonably require to deliver the Services; (c) ensure that all Delegates attend Training at the agreed time and with any prerequisite knowledge or equipment specified.",
    },
    {
      p: "Delegates must comply with the Company's Acceptable Use Policy at all times during Training.",
    },
    {
      p: "5.2 If the Company's performance of its obligations is prevented or delayed by any act or omission of the Customer or its Delegates, the Company shall not be liable for any costs, charges, or losses sustained or incurred by the Customer arising directly or indirectly from such prevention or delay.",
    },
    {
      p: "5.3 The Customer shall ensure that the number of Delegates attending any Training session does not exceed the number specified in the Proposal without the Company's prior written consent.",
    },
    {
      p: "5.4 Review, testing, and approval. The Customer acknowledges that AI systems, AI agents, automations, and integrations may produce inaccurate, incomplete, biased, unexpected, or unsuitable outputs. The Customer remains responsible for reviewing, testing, and approving all AI outputs, workflows, automations, integrations, and recommendations before relying on them, publishing them, sending them to third parties, using them in customer communications, or using them in any financial, legal, employment, regulatory, safety-critical, or other material business decision. Human review must be maintained over any AI-enabled workflow or system in live use.",
    },
    {
      p: "5.5 Data rights. The Customer warrants that it has all necessary rights, permissions, consents, notices, and lawful bases to provide data, documents, system access, prompts, credentials, materials, and instructions to the Company for use in the Services.",
    },
    {
      p: "5.6 Backups and access controls. The Customer is responsible for maintaining appropriate backups, access controls, user permissions, administrative controls, cyber security controls, and business continuity arrangements for its own systems and data. The Company is not responsible for loss arising from the Customer's failure to maintain adequate backups or access controls.",
    },
    {
      p: "5.7 Financial workflows and fraud verification. The Customer is responsible for independently verifying all payment instructions, bank account details, invoice changes, supplier changes, refund requests, payroll instructions, and financial approvals. The Company does not authorise payments on the Customer's behalf unless expressly agreed in writing. The Customer must maintain its own approval controls for payment-related workflows. The Company is not liable for losses arising from fraud, impersonation, social engineering, payment diversion, invoice fraud, business email compromise, or unauthorised payment instructions unless directly caused by the Company's proven negligence and subject always to the liability limits in clause 9.",
    },
    {
      p: "5.8 Change of use and high-risk use. The Customer must not use any deliverable, AI agent, automation, workflow, or integration for a purpose outside the agreed scope, or in a high-risk, regulated, safety-critical, medical, legal, employment, credit, lending, insurance underwriting, financial trading, or similar context, without the Company's prior written agreement.",
    },

    { h: "6. Cancellation and Refund Policy" },
    {
      p: "Full details of the Company's cancellation and refund terms are set out in the Cancellation and Refund Policy.",
    },
    { p: "6.1 Cancellation by the Customer:" },
    {
      ul: [
        "More than 30 days before the training date: Full refund less a £100 administration fee.",
        "14–29 days before the training date: 50% refund.",
        "Less than 14 days before the training date: No refund. Full fee payable. An alternative date may be offered subject to availability.",
        "No-show: No refund. Full fee payable.",
      ],
    },
    {
      p: "6.2 All cancellation requests must be submitted in writing to info@theepitome.co.uk.",
    },
    {
      p: "6.3 Refunds will be processed within 14 working days of the cancellation request.",
    },
    {
      p: "6.4 Cancellation by the Company: If the Company is unable to deliver the Training (including due to trainer illness or emergency), the Training will be rescheduled at no additional cost. If rescheduling is not possible, a full refund will be issued.",
    },
    {
      p: "6.5 Delegate Substitution: The Customer may substitute a Delegate at any time prior to the start of Training by giving written notice to the Company. No additional charge will apply.",
    },
    {
      p: "6.6 Consumer Cancellation Rights: Where the Customer is a Consumer and has booked Services at a distance (online or by telephone), the Customer has a statutory right to cancel within 14 days of the contract being formed (the 'cooling-off period') under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. If the Customer has expressly requested that Services begin within the cooling-off period and acknowledges that the right to cancel will be lost once the Services have been fully performed, the Consumer shall pay for Services supplied up to the point of cancellation.",
    },

    { h: "7. Intellectual Property" },
    { p: "Full details are set out in the Intellectual Property Notice." },
    {
      p: "7.1 All intellectual property rights in the Training Materials, including but not limited to copyright, trademarks, and database rights, are and shall remain the property of the Company.",
    },
    {
      p: "7.2 The Company grants the Customer a limited, non-exclusive, non-transferable licence to use the Training Materials solely for the Customer's own internal business purposes.",
    },
    {
      p: "7.3 The Customer shall not, without the prior written consent of the Company: (a) reproduce, distribute, or make available the Training Materials to any third party; (b) modify or create derivative works based on the Training Materials; (c) record (whether by audio, video, or screen capture) any Training session; (d) use the Training Materials for the purposes of providing training to third parties or for any commercial resale.",
    },
    { p: "7.4 This clause shall survive termination of the contract." },

    { h: "8. AI, AIOS and Integration Disclaimer" },
    {
      p: "Full details are set out in the AI Training, AIOS and AI Integration Disclaimer and, for live AIOS engagements, the AIOS & AI Integration Terms.",
    },
    {
      p: "8.1 The Services are educational in nature. The Company provides training, guidance, and information regarding the use and application of artificial intelligence technologies. The Company does not guarantee any specific business outcomes, financial results, productivity improvements, or return on investment arising from the Customer's use or implementation of AI technologies following the Training.",
    },
    {
      p: "8.2 AI technologies are rapidly evolving. The content of Training reflects the state of knowledge at the time of delivery. The Company does not warrant that Training content will remain accurate, current, or applicable following delivery.",
    },
    {
      p: "8.3 Any AI-generated outputs produced during Training sessions (including outputs from tools such as ChatGPT, Microsoft Copilot, Google Gemini, or other third-party AI platforms) are produced for demonstration and educational purposes only. The Customer and Delegates are solely responsible for independently verifying any AI-generated content before relying on it in any business, legal, financial, medical, or operational context.",
    },
    {
      p: "8.4 The Company is not responsible for the terms of service, data processing practices, availability, accuracy, or outputs of any third-party AI platform or tool demonstrated or referenced during Training.",
    },
    {
      p: "8.5 The Training does not constitute legal, financial, tax, medical, or other professional advice. Customers should seek independent professional advice before making business decisions based on Training content.",
    },
    {
      p: "8.6 No regulated advice. Unless expressly agreed in writing, the Company does not provide legal, tax, accounting, audit, investment, insurance, medical, employment, regulatory, cybersecurity certification, penetration testing, or other regulated professional advice in connection with any Services (including implementation, AIOS, integration, and automation Services). The Customer remains responsible for obtaining specialist advice before relying on any workflow, AI output, report, document, or recommendation in those areas.",
    },

    { h: "9. Limitation of Liability" },
    {
      p: "9.1 Nothing in these Terms limits or excludes the Company's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; (c) any liability which cannot be limited or excluded by applicable law.",
    },
    {
      p: "9.2 Subject to clause 9.1, the Company shall not be liable to the Customer, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for: (a) any loss of profits, sales, business, or revenue; (b) any loss of business opportunity; (c) any loss of anticipated savings; (d) any loss of goodwill; (e) any indirect or consequential loss; arising under or in connection with the contract.",
    },
    {
      p: "9.3 Subject to clause 9.1, the Company's total aggregate liability arising out of or in connection with the contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the total fees paid or payable by the Customer for the specific Services giving rise to the claim, unless a higher cap is expressly agreed in the applicable Statement of Work. Any liability cap agreed in a Statement of Work is an aggregate cap for all claims arising from that Statement of Work unless expressly stated otherwise.",
    },
    {
      p: "9.4 The Customer acknowledges that the limitations and exclusions of liability set out in these Terms are reasonable having regard to the nature of the Services and the fees charged.",
    },
    {
      p: "9.5 No service credits. The Company will not be required to provide service credits, refunds, rebates, or free additional services as compensation unless expressly agreed in writing by the Company.",
    },
    {
      p: "9.6 Claims and insurer notification. The Customer must not require the Company to admit liability, make any payment, settle any claim, or provide compensation before the Company has had a reasonable opportunity to notify its insurers and take advice.",
    },

    { h: "10. Data Protection" },
    {
      p: "10.1 Both parties shall comply with their respective obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
    },
    {
      p: "10.2 The Company will process personal data of Delegates (such as names, email addresses, and dietary requirements) for the purposes of delivering the Services and administering bookings. Full details of how the Company processes personal data are set out in the Company's Privacy Policy.",
    },
    {
      p: "10.3 Where Training involves the use of third-party AI tools, the Customer and Delegates are responsible for ensuring they do not input personal data, confidential business information, or sensitive data into such tools unless expressly instructed by the Company and in compliance with applicable data protection law.",
    },

    { h: "11. Confidentiality" },
    {
      p: "11.1 Each party shall keep confidential all information of a confidential nature obtained from the other party in connection with the Services, and shall not disclose such information to any third party without the prior written consent of the disclosing party.",
    },
    {
      p: "11.2 This obligation shall not apply to information that: (a) is or becomes publicly available other than through a breach of this clause; (b) was already known to the receiving party prior to disclosure; (c) is required to be disclosed by law, regulation, or order of a court or regulatory authority.",
    },

    { h: "12. Force Majeure" },
    {
      p: "12.1 Neither party shall be liable for any failure or delay in performing its obligations under the contract to the extent that such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to: acts of God, fire, flood, severe weather, epidemic or pandemic, government action, war, terrorism, power failure, internet or telecommunications failure, or industrial action.",
    },
    {
      p: "12.2 The affected party shall promptly notify the other party in writing and shall use reasonable endeavours to mitigate the effect of the force majeure event.",
    },

    { h: "13. Termination" },
    {
      p: "13.1 Without limiting any other right or remedy, either party may terminate the contract with immediate effect by giving written notice to the other party if: (a) the other party commits a material breach of the contract and fails to remedy that breach within 14 days of receiving written notice requiring it to do so; (b) the other party becomes insolvent, enters administration, or ceases to carry on business.",
    },
    {
      p: "13.2 On termination, the Customer shall pay the Company for all Services delivered up to the date of termination.",
    },
    {
      p: "13.3 Clauses which by their nature should survive termination (including clauses 7, 8, 9, 11, and 15) shall continue in force.",
    },

    { h: "14. General" },
    {
      p: "14.1 Assignment: The Customer shall not assign, transfer, or subcontract any of its rights or obligations under the contract without the prior written consent of the Company.",
    },
    {
      p: "14.2 Entire Agreement: The contract constitutes the entire agreement between the parties and supersedes all prior discussions, representations, and agreements relating to its subject matter.",
    },
    {
      p: "14.3 Severance: If any provision of these Terms is found by any court or authority to be invalid, illegal, or unenforceable, that provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable. If such modification is not possible, the relevant provision shall be deemed deleted. Any modification or deletion shall not affect the validity and enforceability of the remaining provisions.",
    },
    {
      p: "14.4 Waiver: A failure or delay by a party to exercise any right or remedy provided under the contract or by law shall not constitute a waiver of that right or remedy, nor shall it prevent or restrict the further exercise of that or any other right or remedy.",
    },
    {
      p: "14.5 Third Party Rights: No person other than a party to the contract shall have any right to enforce any of its terms under the Contracts (Rights of Third Parties) Act 1999.",
    },

    { h: "15. Governing Law and Jurisdiction" },
    {
      p: "15.1 These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.",
    },
    {
      p: "15.2 The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms.",
    },
  ],
};

const aiosAndAiIntegrationTerms: PolicyDoc = {
  slug: "aios-and-ai-integration-terms",
  title: "AIOS & AI Integration Terms",
  lastUpdated: "25 June 2026",
  description:
    "Terms applying whenever The Epitome Group builds, configures, integrates, automates or supports AI-enabled systems — acceptance, customer responsibilities, go-live, third-party dependencies and liability.",
  blocks: [
    { h: "Purpose and Scope" },
    {
      p: "These AIOS & AI Integration Terms apply whenever The Epitome Group builds, configures, integrates, automates, or supports AI-enabled systems for a customer. This includes AIOS and business operating system design, AI agent configuration, workflow automation, software configuration, data processing, knowledge-base configuration, systems integration, and third-party SaaS/API integration.",
    },
    {
      p: "These terms supplement our Terms and Conditions of Sale, our AI Training, AIOS and AI Integration Disclaimer, and the applicable Statement of Work. Where there is any conflict, the signed or accepted Statement of Work takes precedence for the engagement it governs.",
    },

    { h: "Acceptance Process" },
    {
      p: "Customers do not need to re-sign our full terms for every interaction, but our acceptance process operates in layers:",
    },
    {
      ul: [
        "Master acceptance (once per customer): The customer accepts our Terms and Conditions of Sale, Privacy Policy, and AI Training, AIOS and AI Integration Disclaimer, and, where personal data is processed, a Data Processing Agreement.",
        "Statement of Work acceptance (each engagement): Every project, retainer, training booking, AIOS build, integration, or support package is governed by a written proposal or SOW accepted by email, e-signature, or portal confirmation.",
        "Change-order acceptance: Any change of scope, new system, new automation, new data source, new AI tool, new finance or payment workflow, new public-facing output, or increased contract value requires written acceptance.",
        "Go-live acceptance: The customer confirms acceptance before any AI agent, automation, or integration moves into live use.",
      ],
    },

    { h: "Customer Responsibilities" },
    {
      p: "AI systems, AI agents, automations, and integrations may produce inaccurate, incomplete, biased, unexpected, or unsuitable outputs. The customer remains responsible for reviewing, testing, supervising, and approving all AI outputs, workflows, automations, integrations, and recommendations before relying on them, publishing them, sending them to third parties, or using them in any financial, legal, employment, regulatory, safety-critical, or other material business decision.",
    },
    {
      p: "The customer warrants that it has all necessary rights, permissions, consents, notices, and lawful bases to provide the data, documents, system access, prompts, credentials, materials, and instructions used in the Services. The customer is responsible for maintaining its own backups, access controls, user permissions, cyber security controls, and business continuity arrangements.",
    },

    { h: "Go-Live and Acceptance Testing" },
    {
      p: "No AI agent, automation, integration, workflow, or system configuration will be treated as approved for live use until the customer has completed testing and confirmed acceptance in writing. If the customer uses any deliverable before formal acceptance, it will be deemed accepted to the extent used.",
    },

    { h: "Third-Party Platforms and Dependencies" },
    {
      p: "AIOS and integration work typically relies on third-party platforms, model providers, APIs, hosting, payment providers, CRMs, accounting systems, AI tools, and automation tools. The Epitome Group is not responsible for the availability, security, performance, output, pricing, changes, outages, data practices, model changes, or terms of any such third-party service, except to the extent directly caused by the Company's negligence.",
    },
    {
      p: "We do not warrant uptime, resilience, business continuity, or the continued availability of any third-party service. Open-source software, third-party software, and AI tool outputs remain subject to their own terms.",
    },

    { h: "Financial Workflows and Fraud Prevention" },
    {
      p: "The customer is responsible for independently verifying all payment instructions, bank account details, invoice changes, supplier changes, refund requests, payroll instructions, and financial approvals, and for maintaining its own approval controls for payment-related workflows. The Epitome Group does not authorise payments on the customer's behalf unless expressly agreed in writing.",
    },
    {
      p: "The Epitome Group is not liable for losses arising from fraud, impersonation, social engineering, payment diversion, invoice fraud, business email compromise, or unauthorised payment instructions unless directly caused by the Company's proven negligence and subject always to the liability limits in our Terms and Conditions of Sale.",
    },

    { h: "No Regulated Advice" },
    {
      p: "Unless expressly agreed in writing, the Services do not constitute legal, tax, accounting, audit, investment, insurance, medical, employment, regulatory, cybersecurity certification, penetration testing, or other regulated professional advice. The customer remains responsible for obtaining specialist advice before relying on any workflow, AI output, report, document, or recommendation in those areas.",
    },

    { h: "High-Risk and Out-of-Scope Use" },
    {
      p: "The customer must not use any deliverable, AI agent, automation, workflow, or integration for a purpose outside the agreed scope, or in a high-risk, regulated, safety-critical, medical, legal, employment, credit, lending, insurance underwriting, financial trading, or similar context, without our prior written agreement. A low-risk internal workflow must not be reused in a higher-risk context that was never scoped, priced, or agreed.",
    },

    { h: "Intellectual Property and Data Protection" },
    {
      p: "Ownership of background IP, client data, and project deliverables is addressed in our Intellectual Property Notice. Where we process personal data on the customer's behalf to deliver the Services, that processing is governed by a separate Data Processing Agreement and the relevant SOW, as outlined in our Privacy Policy.",
    },

    { h: "Liability" },
    {
      p: "Liability for AIOS and integration Services is governed by the limitation of liability provisions in our Terms and Conditions of Sale. The Company's total aggregate liability is capped at the fees paid or payable for the specific Services giving rise to the claim, unless a higher cap is expressly agreed in the applicable Statement of Work.",
    },
  ],
};

const cancellationAndRefundPolicy: PolicyDoc = {
  slug: "cancellation-and-refund-policy",
  title: "Cancellation and Refund Policy",
  lastUpdated: "25 June 2026",
  description:
    "Cancellation and refund terms for all training, workshops and services booked with The Epitome Group, including notice periods, substitutions, rescheduling and consumer cancellation rights.",
  blocks: [
    { h: "Overview" },
    {
      p: "This policy sets out the cancellation and refund terms for all training, workshops, and services booked with The Epitome Group. This policy forms part of our Terms and Conditions of Sale and should be read alongside them.",
    },

    { h: "Cancellation by the Customer" },
    {
      p: "All cancellation requests must be submitted in writing to info@theepitome.co.uk. The following cancellation charges apply based on the notice period provided:",
    },
    {
      table: {
        head: ["Notice period", "Refund"],
        rows: [
          [
            "More than 30 days before the training date",
            "Full refund less £100 administration fee",
          ],
          ["14–29 days before the training date", "50% refund"],
          [
            "Less than 14 days before the training date",
            "No refund. Full fee payable. An alternative date may be offered subject to availability.",
          ],
          ["No-show (failure to attend)", "No refund. Full fee payable."],
        ],
      },
    },

    { h: "Refund Processing" },
    {
      p: "Refunds will be processed within 14 working days of the Company receiving a valid cancellation request in writing. Refunds will be issued to the original payment method.",
    },

    { h: "Delegate Substitution" },
    {
      p: "Customers may substitute one delegate for another at any time before the start of training by providing written notice to the Company at info@theepitome.co.uk. No additional charge applies for delegate substitutions.",
    },

    { h: "Rescheduling by the Customer" },
    {
      p: "Requests to reschedule (rather than cancel) are subject to availability and must be made in writing at least 14 days before the original training date. One reschedule is permitted at no additional cost. Subsequent reschedule requests may be treated as a cancellation and the cancellation charges above will apply.",
    },

    { h: "Cancellation or Rescheduling by The Epitome Group" },
    {
      p: "If The Epitome Group is unable to deliver the training for any reason (including trainer illness or emergency), we will offer to reschedule the training at no additional cost at a mutually convenient date.",
    },
    {
      p: "If rescheduling is not possible or acceptable to the Customer, a full refund will be issued.",
    },

    { h: "Consultancy, AIOS and Project Services" },
    {
      p: "The cancellation charges in the table above apply to scheduled training. For consultancy, AIOS, integration, automation, and other project services, cancellation, postponement, and refund rights will be as set out in the relevant Statement of Work.",
    },
    {
      p: "Unless otherwise agreed in writing, fees for work already performed, committed third-party costs, and time spent on discovery, planning, configuration, development, testing, and project management are non-refundable.",
    },
    {
      p: "Where a project is paused or delayed by the Customer, The Epitome Group may invoice for work completed to that point and may revise timelines, pricing, and resource availability before recommencing work.",
    },

    { h: "Consumer Cancellation Rights" },
    {
      p: "If you are a Consumer (an individual acting for purposes outside your trade, business, craft, or profession) and you have booked services online or by telephone, you have a statutory right to cancel within 14 days of the date the contract is formed under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.",
    },
    {
      p: "If you have requested that services begin within the 14-day cooling-off period and you subsequently cancel, you will be required to pay for the services provided up to the point of cancellation.",
    },
    {
      p: "Once training has been fully delivered or digital training content has been fully accessed, the right to cancel is lost, provided you gave your express consent at the point of booking.",
    },
    {
      p: "To exercise your statutory cancellation right, please contact us in writing at info@theepitome.co.uk.",
    },
  ],
};

const aiTrainingDisclaimer: PolicyDoc = {
  slug: "ai-training-disclaimer",
  title: "AI Training, AIOS and AI Integration Disclaimer",
  lastUpdated: "25 June 2026",
  description:
    "Disclaimer covering all AI training and AI integration services from The Epitome Group — educational purpose, outcomes, AI-generated outputs, third-party tools and live systems.",
  blocks: [
    { h: "Purpose of This Disclaimer" },
    {
      p: "This disclaimer applies to all AI training, workshops, courses, and related advisory services ('AI Training Services'), and to all AIOS, AI agent, automation, workflow, data processing, and systems integration services ('AI Integration Services') provided by The Epitome Group. By booking, attending, accessing, or using any of these Services, you acknowledge and agree to the following. The terms governing live AIOS and integration engagements are set out more fully in our AIOS & AI Integration Terms.",
    },

    { h: "Educational Purpose Only" },
    {
      p: "Our AI Training Services are provided for educational and informational purposes only. They are designed to improve understanding of artificial intelligence concepts, tools, and practical applications relevant to small and micro businesses.",
    },
    {
      p: "The training does not constitute professional advice of any kind, including but not limited to legal, financial, tax, medical, regulatory, or technical advice. You should seek independent professional advice before making any business decisions based on the content of our training.",
    },

    { h: "No Guarantee of Outcomes" },
    {
      p: "The Epitome Group does not guarantee any specific business outcomes, financial results, efficiency gains, cost savings, or return on investment arising from the application of concepts, tools, or strategies covered in our training.",
    },
    {
      p: "Results will vary depending on numerous factors outside our control, including but not limited to your existing business systems, data quality, staff capability, organisational culture, market conditions, and the specific AI tools and platforms you choose to implement.",
    },
    {
      p: "Any case studies, examples, or projected outcomes shared during training are for illustrative purposes only and should not be interpreted as a promise or guarantee of similar results.",
    },

    { h: "AI-Generated Outputs" },
    {
      p: "During training sessions, delegates may use or observe the use of third-party AI tools and platforms (such as ChatGPT, Microsoft Copilot, Google Gemini, Claude, or other generative AI systems). Any outputs generated by these tools during training are produced for demonstration and educational purposes only.",
    },
    {
      p: "AI-generated content can be inaccurate, incomplete, outdated, or biased. You must independently verify all AI-generated outputs before relying on them for any business, legal, financial, operational, or personal purpose.",
    },
    {
      p: "The Epitome Group accepts no responsibility or liability for any decisions made, or actions taken, based on AI-generated outputs produced during or after training.",
    },

    { h: "Third-Party AI Tools and Platforms" },
    {
      p: "The Epitome Group is not affiliated with, endorsed by, or responsible for any third-party AI tools, platforms, or services demonstrated or referenced during training.",
    },
    {
      p: "Each third-party tool is subject to its own terms of service, privacy policy, and data processing practices. It is your responsibility to review and comply with the terms of any third-party AI tool you choose to use.",
    },
    {
      p: "The Epitome Group is not liable for: (a) the accuracy, reliability, or availability of third-party AI tools; (b) any changes to the functionality, pricing, or terms of third-party tools; (c) any data you input into third-party AI tools during or after training; (d) any loss or damage arising from your use of third-party AI tools.",
    },

    { h: "Rapidly Evolving Technology" },
    {
      p: "Artificial intelligence is a rapidly evolving field. The information, tools, and best practices covered in our training reflect the state of knowledge at the time of delivery.",
    },
    {
      p: "The Epitome Group does not warrant that the training content will remain accurate, current, complete, or applicable after the date of delivery. AI tools, regulations, and industry practices may change at any time.",
    },
    {
      p: "We recommend that attendees stay informed of developments in AI technology and regulation relevant to their business and industry.",
    },

    { h: "Data Protection During Training" },
    {
      p: "Delegates should not input personal data (as defined by the UK GDPR), confidential business information, trade secrets, or commercially sensitive information into any AI tool during training unless expressly instructed to do so by the trainer and in compliance with applicable data protection legislation.",
    },
    {
      p: "The Epitome Group is not responsible for any data entered into third-party AI tools by delegates, whether during or after training.",
    },

    { h: "AIOS, AI Agents, Automations and Live Systems" },
    {
      p: "AIOS and AI integration services may involve the configuration of third-party tools, client systems, data flows, prompts, knowledge bases, AI agents, and automations. The Epitome Group will use reasonable skill and care in providing these Services, but the customer remains responsible for testing, approving, supervising, and monitoring the live use of any AI-enabled workflow or system.",
    },
    {
      p: "AI agents and automations can act on inputs in ways that are difficult to predict, and outputs may be inaccurate, incomplete, biased, outdated, or unsuitable. No AI agent, automation, integration, or workflow should be treated as approved for live use until the customer has tested it and confirmed acceptance in writing.",
    },
    {
      p: "This includes responsibility for any public-facing outputs (such as website, social media, or email content), internal business decisions made from AI outputs, and any client-approved prompts and workflows. Human review must be maintained over live AI-enabled systems.",
    },
    {
      p: "You must not rely on any AIOS, AI agent, automation, or integration to make or execute decisions in financial, legal, HR, employment, regulatory, medical, safety-critical, credit, lending, insurance, or financial trading contexts without appropriate human review and, where relevant, specialist professional advice.",
    },

    { h: "Third-Party Tools and Live Dependencies" },
    {
      p: "AIOS and integration work depends on third-party platforms, model providers, APIs, hosting, payment providers, CRMs, accounting systems, and automation tools. The Epitome Group does not control these services and is not responsible for their availability, security, performance, output, pricing, changes, outages, or data practices, except to the extent directly caused by the Company's negligence. We do not warrant uptime, resilience, or business continuity.",
    },

    { h: "Limitation of Liability" },
    {
      p: "To the fullest extent permitted by law, The Epitome Group's liability in connection with AI Training Services is limited as set out in our Terms and Conditions of Sale.",
    },
    {
      p: "Nothing in this disclaimer excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded or limited under applicable law.",
    },
  ],
};

const intellectualPropertyNotice: PolicyDoc = {
  slug: "intellectual-property-notice",
  title: "Intellectual Property Notice",
  lastUpdated: "25 June 2026",
  description:
    "Ownership of The Epitome Group's materials, licences granted to customers, allocation of IP in AIOS and project deliverables, restrictions, website content and trademarks.",
  blocks: [
    { h: "Ownership of Intellectual Property" },
    {
      p: "All intellectual property rights in the content, training materials, frameworks, templates, slides, handouts, recordings, digital resources, and any other materials ('Materials') created, developed, or provided by The Epitome Group in connection with its services are and shall remain the exclusive property of The Epitome Group.",
    },
    {
      p: "This includes, without limitation, all copyright, trademarks, design rights, database rights, trade secrets, and any other intellectual property rights (whether registered or unregistered) subsisting in the Materials.",
    },

    { h: "Licence to Use Materials" },
    {
      p: "Upon purchase of our services, customers are granted a limited, non-exclusive, non-transferable, revocable licence to use the Materials provided solely for their own internal business purposes.",
    },
    {
      p: "This licence does not extend to any third party. Materials may not be shared with, distributed to, or used for the benefit of any individual or organisation other than the purchasing customer and their authorised delegates.",
    },

    { h: "AIOS, Integration and Project Deliverables" },
    {
      p: "For consultancy, AIOS, integration, automation, and other project work, intellectual property is allocated as follows, subject to the applicable Statement of Work:",
    },
    {
      ul: [
        "Client materials and data: The client retains ownership of its own data, content, and pre-existing materials provided to The Epitome Group.",
        "Background IP: The Epitome Group retains ownership of its methodologies, templates, reusable workflows, prompts, frameworks, know-how, generic automations, tools, and other background or pre-existing intellectual property, including any improvements to them.",
        "Deliverables: Unless the Statement of Work expressly provides otherwise, the client receives a non-exclusive licence to use the project deliverables for its internal business purposes. Exclusive ownership or assignment of a deliverable will only apply where it is expressly agreed in the Statement of Work and priced accordingly.",
        "Reuse of know-how: The Epitome Group may continue to use general know-how, non-confidential techniques, templates, and learning gained from engagements.",
        "Third-party and open-source components: Open-source software, third-party software, and AI tool outputs remain subject to their own licences and terms.",
      ],
    },

    { h: "Restrictions" },
    {
      p: "Without the prior written consent of The Epitome Group, you may not:",
    },
    {
      ul: [
        "Reproduce, copy, or duplicate the Materials in whole or in part.",
        "Distribute, publish, or make the Materials available to any third party by any means.",
        "Modify, adapt, or create derivative works based on the Materials.",
        "Use the Materials to deliver training, education, or advisory services to third parties.",
        "Sell, sublicence, lease, or otherwise commercially exploit the Materials.",
        "Record (by audio, video, screen capture, or any other means) any live or virtual training session without express written permission.",
        "Remove, alter, or obscure any copyright notice, trademark, or proprietary marking on the Materials.",
      ],
    },

    { h: "Website Content" },
    {
      p: "All content on theepitome.co.uk — including text, images, graphics, logos, icons, and software — is the property of The Epitome Group or its licensors and is protected by United Kingdom and international copyright and intellectual property laws.",
    },
    {
      p: "You may view and print pages from the website for your own personal, non-commercial use. Any other use requires our prior written consent.",
    },

    { h: "Brand and Trademarks" },
    {
      p: "'The Epitome Group', 'Epitome', and associated logos and branding are trademarks of The Epitome Group. You may not use our trademarks without prior written permission, except as necessary to refer to our services in an accurate and non-misleading manner.",
    },

    { h: "Reporting Infringement" },
    {
      p: "If you become aware of any unauthorised use of our intellectual property, please contact us immediately at info@theepitome.co.uk. We take the protection of our intellectual property seriously and will take appropriate action against any infringement.",
    },

    { h: "Survival" },
    {
      p: "The intellectual property provisions set out in this notice and in our Terms and Conditions of Sale shall survive the termination or expiry of any contract between The Epitome Group and the customer.",
    },
  ],
};

const PART_ONE: PolicyDoc[] = [
  termsAndConditionsOfSale,
  aiosAndAiIntegrationTerms,
  cancellationAndRefundPolicy,
  aiTrainingDisclaimer,
  intellectualPropertyNotice,
];

/** Every legal document, keyed by the route slug used on the live site. */
export const policyDocs: PolicyDoc[] = [...PART_ONE, ...POLICY_DOCS_PART_TWO];

export function policyDocBySlug(slug: string): PolicyDoc {
  const doc = policyDocs.find((d) => d.slug === slug);
  if (!doc) throw new Error(`Unknown policy document: ${slug}`);
  return doc;
}
