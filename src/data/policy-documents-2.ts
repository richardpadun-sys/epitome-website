/**
 * The remaining legal documents, migrated verbatim from theepitome.co.uk.
 * Split across two files purely for readability — see `policy-documents.ts`
 * for the shared types and the registry that combines them.
 */

import type { PolicyDoc } from "./policy-documents";

const acceptableUsePolicy: PolicyDoc = {
  slug: "acceptable-use-policy",
  title: "Acceptable Use Policy",
  lastUpdated: "25 June 2026",
  description:
    "Expected conduct for training delegates and for all client users of any AIOS, AI agent, automation, workflow or integration provided by The Epitome Group.",
  blocks: [
    { h: "Scope" },
    {
      p: "This Acceptable Use Policy ('AUP') applies to all delegates, participants, and individuals who attend or access AI training, workshops, courses, or related services ('Training'), and to all client users of any AIOS, AI agent, automation, workflow, or integration ('Client System') provided, configured, or supported by The Epitome Group.",
    },
    {
      p: "By attending or accessing any Training, or by using any Client System, you agree to comply with this policy. Failure to comply may result in removal from a Training session without refund, or suspension of access to a Client System.",
    },

    { h: "Conduct During Training" },
    { p: "All delegates are expected to:" },
    {
      ul: [
        "Behave professionally and respectfully towards the trainer, fellow delegates, and any support staff.",
        "Arrive on time and be prepared to participate in the session.",
        "Follow any reasonable instructions given by the trainer regarding the use of AI tools, platforms, or equipment during the session.",
        "Not disrupt, interfere with, or undermine the training experience for other delegates.",
      ],
    },

    { h: "Use of AI Tools During Training" },
    {
      p: "During Training, delegates may be given access to or asked to use third-party AI tools and platforms (such as ChatGPT, Microsoft Copilot, Google Gemini, or others). When using these tools, delegates must:",
    },
    {
      ul: [
        "Not input personal data (as defined by UK GDPR) belonging to themselves, colleagues, clients, or any other individual, unless expressly instructed by the trainer and lawful to do so.",
        "Not input confidential business information, trade secrets, client data, or commercially sensitive information into any AI tool.",
        "Not use AI tools to generate content that is offensive, discriminatory, defamatory, threatening, obscene, illegal, or otherwise harmful.",
        "Not use AI tools to generate content that infringes the intellectual property rights, privacy, or other rights of any third party.",
        "Not attempt to circumvent, override, or 'jailbreak' any safety features, content filters, or usage restrictions built into AI tools.",
        "Comply with the terms of service of any third-party AI tool used during the Training.",
      ],
    },

    { h: "Recording and Sharing" },
    {
      p: "Delegates may not record (by audio, video, screen capture, photography, or any other means) any part of a Training session without the express prior written consent of The Epitome Group.",
    },
    {
      p: "Delegates may not share, publish, or distribute any Training Materials, session content, or recordings on social media, websites, file-sharing platforms, or any other medium without the prior written consent of The Epitome Group.",
    },
    {
      p: "Brief quotations or references to general concepts covered in training may be shared, provided they are attributed to The Epitome Group and do not reproduce substantial portions of the Training Materials.",
    },

    { h: "Post-Training Use of AI" },
    {
      p: "The skills, concepts, and techniques taught during Training are for the delegate's own professional development and their employer's internal use.",
    },
    {
      p: "Delegates may not use the Training Materials or content to deliver, resell, or offer competing training, consultancy, or advisory services without the prior written consent of The Epitome Group.",
    },
    {
      p: "Delegates are solely responsible for their own use of AI tools following the Training, including compliance with applicable laws, regulations, and their own organisation's AI and data protection policies.",
    },

    { h: "Use of AIOS and Client Systems" },
    {
      p: "Where The Epitome Group has built, configured, or supports an AIOS, AI agent, automation, workflow, or integration for a client, all client users must not:",
    },
    {
      ul: [
        "Use the Client System for any unlawful, discriminatory, harmful, infringing, deceptive, or fraudulent purpose.",
        "Jailbreak, bypass, disable, or circumvent any safety controls, content filters, guardrails, or usage restrictions, or remove or obscure any warning or labelling.",
        "Upload or input personal, confidential, or third-party data without the necessary rights, permissions, consents, and lawful basis to do so.",
        "Use the Client System to make or execute legal, financial, medical, employment, credit, lending, insurance, regulatory, or other high-risk or regulated decisions without appropriate human review and specialist professional advice.",
        "Allow unauthorised individuals to access the Client System, or share credentials contrary to the client's access controls.",
        "Reuse a workflow, agent, or automation outside the agreed business context or scope without approval.",
        "Connect new tools, data sources, integrations, or automations to the Client System without The Epitome Group's prior approval where the engagement requires it.",
        "Rely on any output, workflow, or automation that has not been tested and approved for live use, or rely on outputs without independent verification.",
      ],
    },

    { h: "Consequences of Breach" },
    { p: "The Epitome Group reserves the right to:" },
    {
      ul: [
        "Remove any delegate from a Training session immediately if their conduct breaches this policy.",
        "Refuse future bookings from any individual or organisation that has breached this policy.",
        "Pursue legal remedies for any breach that causes damage to The Epitome Group or third parties.",
      ],
    },
    {
      p: "No refund will be given where a delegate is removed from Training due to a breach of this policy.",
    },
  ],
};

const cookiePolicy: PolicyDoc = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  lastUpdated: "25 June 2026",
  description:
    "How theepitome.co.uk uses cookies and similar technologies, the categories in use, third-party cookies, and how to manage your consent and preferences.",
  blocks: [
    { h: "What Are Cookies" },
    {
      p: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply information to the website owner.",
    },

    { h: "How We Use Cookies" },
    {
      p: "The Epitome Group website (theepitome.co.uk) uses cookies and similar technologies for the following purposes:",
    },
    {
      ul: [
        "Strictly Necessary Cookies: These are essential for the website to function and cannot be switched off. They include cookies that enable core functionality such as page navigation, form submissions, and security features.",
        "Analytics Cookies: We use analytics tools (such as Google Analytics or similar) to understand how visitors interact with our website. These cookies collect information about page visits, traffic sources, and user behaviour in an anonymised or aggregated form. This helps us improve our website.",
        "Functional Cookies: These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, more personalised features.",
        "Marketing Cookies: These cookies may be set by our advertising partners to build a profile of your interests and show you relevant advertisements on other websites. We do not currently use marketing cookies.",
      ],
    },

    { h: "Third-Party Cookies" },
    {
      p: "Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties that may set cookies on our website include analytics providers, embedded content hosts (such as YouTube or Vimeo), and social media platforms.",
    },
    {
      p: "Please refer to the relevant third party's privacy and cookie policies for more information.",
    },

    { h: "Your Consent and Managing Cookies" },
    {
      p: "When you first visit our website, our cookie banner lets you Accept All, Reject All, or Customise Preferences for functional, analytics, and marketing cookies. Non-essential cookies are not set until you consent, and you can change your preferences at any time.",
    },
    {
      p: "You can also control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. The methods for doing so vary between browsers — consult your browser's help documentation for instructions.",
    },
    {
      p: "Please note that disabling certain cookies may affect the functionality of our website.",
    },
    {
      p: "You can also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
    },

    { h: "Changes to This Policy" },
    {
      p: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. The 'Last updated' date at the top of this page indicates when it was last revised.",
    },
  ],
};

const privacyPolicy: PolicyDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  lastUpdated: "7 October 2025",
  effective: "Effective date: 7 October 2025",
  description:
    "How The Epitome Group Ltd collects, uses, discloses and safeguards your personal data, your rights under UK GDPR, and how to contact us or complain.",
  intro:
    "At www.theepitome.co.uk (“we”, “us”, or “our”), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and services. By accessing or using www.theepitome.co.uk, you agree to the practices described in this Privacy Policy.",
  blocks: [
    { h: "Contact Details" },
    {
      p: "The Epitome Group Ltd. Website: www.theepitome.co.uk. Email: info@theepitome.co.uk.",
    },

    { h: "Information We Collect" },
    { p: "1. Categories of Data" },
    { p: "We collect the following types of personal information:" },
    {
      ul: [
        "Personal Data: Name, email address, phone number, business name, and other contact or registration details you provide via forms or correspondence.",
        "Usage Data: Pages viewed, actions taken, IP address, device identifiers, browser type, and access times as you interact with our website.",
        "Cookies and Tracking: Cookies and similar technologies to improve website security, functionality, analytics, and marketing. See our separate Cookie Policy for full details.",
      ],
    },
    { p: "2. Data Sources" },
    {
      p: "We obtain data directly from you (website forms, contact, registration) and automatically via website technologies (cookies, analytics tools).",
    },

    { h: "How We Use Your Information" },
    {
      p: "We rely on several lawful bases under the UK GDPR, including consent, performance of a contract, legal obligations, and our legitimate interests. Your data is used to:",
    },
    {
      ul: [
        "Provide Services: Manage communications, registrations, access, transactions, and respond to enquiries.",
        "Analytics and Improvements: Monitor, analyze, and enhance site performance, usability, and security.",
        "Marketing and Communication: Send updates, newsletters, and occasional promotional materials (opt-out at any time via unsubscribe or by contacting us).",
        "Legal Obligations: Meet legal or regulatory requirements, respond to lawful requests, and protect our rights or property.",
      ],
    },

    { h: "Data Sharing and Disclosure" },
    {
      p: "We may share your personal data with trusted third parties only as needed to:",
    },
    {
      ul: [
        "Service Providers: Support website hosting, analytics, email, CRM systems, or similar essential operations.",
        "Legal Authorities: Comply with applicable law or governmental requests.",
        "Business Transfers: Facilitate a merger, acquisition, or sale of business assets, in which case you will be notified if your data is transferred.",
        "International Transfers: Some service providers may be outside the UK. We ensure appropriate safeguards for international transfers, following ICO guidance.",
      ],
    },

    { h: "Client Service Data and Data Processing" },
    {
      p: "This Privacy Policy covers personal data we handle as a controller in connection with our website, marketing, and general business administration — for example, where we decide why and how your data is used.",
    },
    {
      p: "Separately, when we deliver AIOS, AI integration, automation, or consultancy services, we may process personal data contained in a client's own systems, documents, or datasets (such as the client's staff, customers, suppliers, prospects, and contractors). In that context the client is normally the controller and The Epitome Group acts as a processor, processing personal data only on the client's documented instructions to deliver the agreed Services.",
    },
    {
      p: "This public notice is not itself a data processing agreement. Where we process personal data on a client's behalf, that processing is governed by a separate Data Processing Agreement (DPA) and the relevant Statement of Work, which set out the subject matter, duration, nature and purpose of processing, categories of data and data subjects, security measures, and the parties' respective obligations under Article 28 of the UK GDPR.",
    },
    {
      p: "Subprocessors and third-party platforms: delivering these services may involve trusted third-party platforms and tools (such as hosting, model providers, automation, CRM, and accounting tools). Where these act as subprocessors, their use is addressed in the applicable DPA, and we will give clients notice of material changes to subprocessors.",
    },
    {
      p: "International transfers: some providers may be located outside the UK. Where personal data is transferred internationally, we apply appropriate safeguards (such as UK adequacy regulations or the International Data Transfer Agreement / Addendum), following ICO guidance.",
    },
    {
      p: "Breach notification: where we process personal data on a client's behalf and become aware of a personal data breach, we will notify the affected client without undue delay so that the client can meet its own regulatory obligations.",
    },

    { h: "Data Retention" },
    {
      p: "We retain your personal information only as long as is necessary for the purposes for which it was collected or to comply with legal, accounting, or regulatory requirements. When no longer needed, we securely delete or anonymise your data.",
    },

    { h: "Your Rights" },
    {
      p: "Under UK GDPR and the Data (Use and Access) Act 2025, you have specific rights:",
    },
    {
      ul: [
        "Access: Request a copy of your personal data.",
        "Rectification: Correct or complete any inaccurate or incomplete data.",
        "Erasure: Request deletion of your data (“right to be forgotten”) where applicable.",
        "Restriction: Ask us to limit processing of your information in certain circumstances.",
        "Objection: Object to processing for direct marketing or based on legitimate interests.",
        "Portability: Request we transfer your personal data to another organisation or directly to you.",
        "Withdraw Consent: If we rely on your consent, you can withdraw this at any time.",
        "Complain: Make a complaint to us or the UK Information Commissioner's Office (ICO).",
      ],
    },
    { p: "To exercise your rights, contact us at info@theepitome.co.uk." },

    { h: "Cookies and Tracking Technologies" },
    {
      p: "Our site uses cookies and tracking technologies for security, analytics, and marketing. You can manage your cookie preferences at any time via your browser settings. For more detail, please see our separate Cookie Policy.",
    },

    { h: "Security" },
    {
      p: "We use appropriate technical and organisational measures — including encryption, access controls, and secure hosting — to safeguard your data. Note that no system can guarantee absolute security.",
    },

    { h: "Automated Decision-Making and AI" },
    {
      p: "Where we use AI or automated decision-making (e.g., to improve web experience or manage communications), we do not make legally significant decisions about you without human review. You may request an explanation or challenge automated decisions by contacting us.",
    },

    { h: "Changes to this Privacy Policy" },
    {
      p: "We may update this Privacy Policy to reflect changes in our practices or for operational, legal, or regulatory reasons. Substantial changes will be communicated on our website. Please review this page regularly.",
    },

    { h: "How to Contact Us or Complain" },
    {
      p: "If you have any questions or concerns about our Privacy Policy or your personal data, please contact us at info@theepitome.co.uk.",
    },
    {
      p: "If you remain unhappy with our response, you may contact the ICO: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF. Helpline: 0303 123 1113. Website: www.ico.org.uk/make-a-complaint",
    },
    {
      p: "By continuing to use www.theepitome.co.uk, you acknowledge this Privacy Policy and accept any updates as published.",
    },
  ],
};

const contractorTerms: PolicyDoc = {
  slug: "contractor-terms",
  title: "Epitome Contractor Terms v2026-07-28",
  lastUpdated: "28 July 2026",
  description:
    "Terms for external contractors, subcontractors, outsourcers, consultants, agencies and freelancers engaged to provide services on behalf of The Epitome Group Ltd.",
  intro:
    "These terms apply to every external contractor, subcontractor, outsourcer, consultant, agency or freelancer engaged to provide services on behalf of The Epitome Group Ltd. They are accepted through our contractor registration process and form a binding written contract between us. They are separate from, and are not, our referral partner programme. If you are being asked to introduce business to us rather than to deliver work, these terms are not the right ones for you.",
  blocks: [
    { h: "1. Parties and Status" },
    {
      p: "1.1 These terms are between The Epitome Group Ltd, a private limited company incorporated in England and Wales under company number 15504940, whose registered office is at Town Square Kingston, 3 Buckland's Wharf, Thames Side, Kingston Upon Thames, United Kingdom, KT1 1TF (“Epitome”, “we”, “us”, “our”), and the contractor, subcontractor, outsourcer, consultant, agency or freelancer that accepts them (“you”, “the Contractor”).",
    },
    {
      p: "1.2 You are an independent contractor. Nothing in these terms creates a relationship of employment, partnership, agency, or joint venture between us. You are responsible for your own tax, National Insurance, VAT and any statutory obligations arising from your business, and for those of your own personnel.",
    },
    {
      p: "1.3 You must not sub-contract any part of the Services without our prior written approval. Where we approve a sub-contractor, you remain fully responsible for their acts and omissions, and you must ensure they are bound by obligations no less protective than these terms, including the insurance requirements in section 6.",
    },

    { h: "2. Purpose and Scope" },
    {
      p: "2.1 These terms govern work you perform on Epitome's behalf for the delivery of services to our clients, or for Epitome itself. This includes, without limitation: AIOS and business operating system work, AI integration, AI agent development, workflow and process automation, data processing, software development and configuration, systems and API integration, consulting and advisory work, training delivery, project management, and branding, advertising, design or media services (“the Services”).",
    },
    {
      p: "2.2 These terms set the baseline. Each individual piece of work is governed by a separate written statement of work, brief, or purchase order agreed with you (“SOW”). Where an SOW conflicts with these terms, these terms prevail on insurance, indemnity, confidentiality, data protection, intellectual property and governing law, unless we have expressly agreed otherwise in writing and signed by an authorised Epitome signatory.",
    },
    {
      p: "2.3 Our client-facing terms also form relevant context for your work, in particular our AIOS & AI Integration Terms, Intellectual Property Notice and Acceptable Use Policy. You must not act in a way that would put Epitome in breach of them.",
    },

    { h: "3. Registration and Approval" },
    {
      p: "3.1 Completing the registration form does not approve you, engage you, or entitle you to any work. It is an application.",
    },
    {
      p: "3.2 We will review your registration, your declared risk profile and your evidence of insurance. We may approve, request further evidence, or reject an application. We are not obliged to give reasons.",
    },
    {
      p: "3.3 You must not begin any client work, access any client system, or receive any client data until we have confirmed your approval in writing. An acknowledgement that your registration was received is not an approval.",
    },
    {
      p: "3.4 Approval is specific to the services and risk profile you declared. If the nature of your work changes — in particular if you begin to access client systems, process personal data, use AI tools with client data, or produce advertising, branding or public-facing media — you must tell us and be re-approved before doing so.",
    },
    {
      p: "3.5 Approval may be time-limited by reference to your insurance expiry date. It lapses automatically if your professional indemnity cover expires, and you must not continue working until renewed cover is evidenced and confirmed by us.",
    },

    { h: "4. Standards of Work" },
    {
      p: "4.1 You will perform the Services with the reasonable skill, care and diligence expected of a competent professional experienced in the relevant field, in accordance with the applicable SOW, and in compliance with all applicable laws, regulations and professional standards.",
    },
    {
      p: "4.2 You warrant that you hold the skills, qualifications, licences, registrations and permissions necessary to provide the Services, and that the personnel you assign are competent and appropriately supervised.",
    },
    {
      p: "4.3 You must not misrepresent your capabilities, capacity, qualifications, accreditations or insurance position, whether to us or to a client.",
    },
    {
      p: "4.4 You must tell us promptly if you become aware of any error, defect, delay, security weakness, regulatory issue or risk in your work, or of anything that may cause a claim or complaint. Early notification is a contractual obligation, not a courtesy.",
    },

    { h: "5. No Authority to Bind Epitome" },
    { p: "5.1 You have no authority, actual or apparent, to:" },
    {
      ul: [
        "enter into, vary, extend, waive or terminate any contract on Epitome's behalf;",
        "vary the scope, price, timetable or terms of any client engagement;",
        "admit liability, fault or negligence on Epitome's behalf, or on behalf of a client;",
        "make or accept any settlement offer, credit, refund, discount or goodwill payment;",
        "give any warranty, guarantee, representation, commitment, deadline or assurance to a client or third party that has not been approved by us in writing;",
        "make any public statement, marketing claim, case study, testimonial, social media post or press comment referring to Epitome or a client, or use Epitome's or a client's name, logo or branding, without our prior written approval.",
      ],
    },
    {
      p: "5.2 If a client raises a complaint, a claim, a legal or regulatory issue, a data protection concern, or a request that falls outside the agreed scope, you must refer it to us promptly and must not respond substantively yourself.",
    },
    {
      p: "5.3 You must not solicit or accept payment directly from an Epitome client for work performed under an Epitome engagement, and must not approach an Epitome client to take the engagement outside of Epitome.",
    },

    { h: "6. Professional Indemnity and Other Insurance" },
    {
      p: "This section is a condition of engagement. We cannot lawfully or commercially engage you without it, because our own insurance requires that any contractor working on our behalf carries professional indemnity cover at least equal to our own limit.",
    },
    {
      p: "6.1 You must hold and maintain professional indemnity insurance with a limit of indemnity of not less than £1,000,000 for each and every claim, or in the aggregate where cover is written on that basis, with a reputable insurer.",
    },
    {
      p: "6.2 You must maintain that cover for the whole period during which you provide the Services, without gap. Where such cover is available to you on reasonable commercial terms, you must also maintain run-off cover at the same limit for at least six years after you stop providing the Services, that period reflecting the primary limitation period for claims in England and Wales.",
    },
    {
      p: "6.3 The cover must respond to the Services you actually provide, including, where relevant, technology, professional services, media and advertising liability. It is your responsibility to satisfy yourself that your policy is not excluded, restricted or voided in respect of the work you do for us — for example by an exclusion for AI, automated decision-making, software, media content, or work performed as a sub-contractor.",
    },
    {
      p: "6.4 Where the Services involve attendance at client premises, you must also hold public liability insurance, and employers' liability insurance where you employ staff, in each case at the statutory minimum or the amount we reasonably require.",
    },
    {
      p: "6.5 Evidence. You must provide evidence of cover — a certificate of insurance or insurer's schedule showing insurer, policy number, limit of indemnity and expiry date — on registration, on each renewal, and at any other time we reasonably request. We may retain a copy of that evidence for as long as we may need it to answer our own insurers, a client, or a regulator.",
    },
    {
      p: "6.6 Notification. You must notify us immediately, and in any event within five working days, if your professional indemnity cover expires, is cancelled, lapses, is not renewed, is reduced below £1,000,000, has a materially increased excess, has any new exclusion relevant to the Services, or if any claim, circumstance or notification is made under it that could affect the available limit.",
    },
    {
      p: "6.7 You must not misstate your insurance position. Providing false or misleading insurance information is a material breach of these terms entitling us to terminate immediately.",
    },

    { h: "7. Indemnity" },
    {
      p: "7.1 You will indemnify, and keep indemnified, The Epitome Group Ltd against all liability, loss, damage, claims, demands, proceedings, fines, penalties, awards, settlements, and reasonable costs and expenses (including reasonable legal and professional fees) that Epitome incurs, to the extent caused or contributed to by any act, omission, error, default, negligence, breach of these terms, breach of statutory duty or infringement of third-party rights by you, your personnel or your approved sub-contractors:",
    },
    {
      ul: [
        "in the performance of, or failure to perform, the Services;",
        "in the conduct of your business activities in connection with Epitome or an Epitome client; or",
        "in any advertising, branding, marketing, design, copy, imagery or media you produce, supply, publish or contribute to.",
      ],
    },
    {
      p: "7.2 The indemnity covers, without limitation, claims relating to breach of confidentiality, breach of data protection law, infringement of intellectual property rights, defamation, regulatory breach, security incidents, and loss or corruption of data.",
    },
    {
      p: "7.3 The indemnity is not limited or discharged by the existence, adequacy, response or exhaustion of your insurance. Insurance is a means of meeting your obligations, not a cap on them.",
    },
    {
      p: "7.4 We will notify you of any claim to which the indemnity may apply, will not settle it without consulting you, and will give you reasonable opportunity to comment on its conduct. You must not settle or compromise any claim in a way that admits liability on Epitome's behalf or imposes obligations on Epitome without our written consent.",
    },
    {
      p: "7.5 We may set off any amount you owe us under this indemnity against any sum otherwise due to you.",
    },

    { h: "8. Confidentiality" },
    {
      p: "8.1 “Confidential Information” means any non-public information of Epitome or of an Epitome client that you receive or access in connection with the Services, in any form. It includes client lists, commercial terms, pricing, methodologies, prompts, system configurations, credentials, source code, business plans, client data, personal data, and the existence and content of any engagement.",
    },
    {
      p: "8.2 You must keep Confidential Information confidential, use it only to perform the Services, and disclose it only to those of your personnel who need it and who are bound by equivalent obligations.",
    },
    {
      p: "8.3 You must not use Confidential Information for your own benefit or that of any third party, including to develop competing products, to train or fine-tune any AI model, to build a portfolio, or to solicit Epitome's clients.",
    },
    {
      p: "8.4 Section 8 does not apply to information that is or becomes public through no fault of yours, that you already lawfully held without obligation of confidence, or that you are required to disclose by law or by a regulator — in which case you must, where lawfully able, tell us first.",
    },
    {
      p: "8.5 Confidentiality obligations continue without time limit after the engagement ends.",
    },

    { h: "9. Client Data and Data Protection" },
    {
      p: "9.1 You must comply with the UK General Data Protection Regulation, the Data Protection Act 2018, the Privacy and Electronic Communications Regulations, and any other applicable data protection law.",
    },
    {
      p: "9.2 Where you process personal data in connection with the Services, you do so as a processor or sub-processor acting only on our documented instructions or those of the client. You must not process personal data for your own purposes, and must not determine the purposes of processing.",
    },
    { p: "9.3 You must:" },
    {
      ul: [
        "process only the minimum personal data necessary, and only for as long as necessary to perform the Services;",
        "apply appropriate technical and organisational measures to protect personal data, having regard to the risk;",
        "ensure your personnel with access to personal data are subject to a duty of confidence and have received appropriate data protection training;",
        "not transfer personal data outside the United Kingdom, and not store it in a jurisdiction outside the United Kingdom, without our prior written approval and an appropriate transfer mechanism;",
        "engage no sub-processor — including any hosting, storage, analytics, communications or AI service that receives personal data — without our prior written approval, and flow down equivalent obligations to any we approve;",
        "assist us promptly with data subject access requests, erasure requests, objections, complaints, regulatory enquiries and data protection impact assessments;",
        "return or securely and irreversibly delete personal data, and all copies, on completion of the Services or on our request, and confirm in writing when you have done so.",
      ],
    },
    {
      p: "9.4 Incidents. You must notify us immediately and without undue delay, and in any event within 24 hours of becoming aware, of any actual or suspected personal data breach, unauthorised access, loss, corruption, ransomware, misdirected communication, or other security incident affecting Epitome or client data. You must give us all information we need to meet our own 72-hour regulatory notification obligations, must not notify the client or the regulator yourself unless we instruct you to, and must preserve evidence and cooperate fully with investigation and remediation.",
    },
    {
      p: "9.5 Where we require it, you will enter into a separate data processing agreement. Its terms supplement this section.",
    },

    { h: "10. Use of AI Tools" },
    {
      p: "10.1 You must not input, upload, paste or otherwise disclose any Confidential Information, client data, personal data, credentials or client source code into any AI tool, model, assistant, agent or service unless we have approved that specific tool and that specific use in writing.",
    },
    {
      p: "10.2 Where we approve the use of an AI tool, you must use a configuration that does not permit the provider to train models on the input, must respect any data residency requirement we specify, and must keep records of what was used and for what.",
    },
    {
      p: "10.3 You remain fully responsible for all output. AI-assisted output must be reviewed, tested, verified and corrected by a competent human before it is delivered to us, delivered to a client, published, or relied on. “The model produced it” is not a defence to a claim, and does not reduce your obligations under section 4 or your liability under section 7.",
    },
    {
      p: "10.4 You must satisfy yourself that AI-assisted output does not infringe third-party intellectual property rights, does not reproduce another party's confidential or licensed material, is not defamatory, is not misleading, and is not otherwise unlawful.",
    },
    {
      p: "10.5 You must not use AI tools to make or materially influence a decision about an individual — including recruitment, credit, insurance, eligibility, disciplinary or safety decisions — or in any high-risk, regulated, medical, legal or safety-critical context, without our express prior written agreement.",
    },
    {
      p: "10.6 You must disclose to us, on request, which AI tools you used in producing any deliverable.",
    },

    { h: "11. Information Security" },
    { p: "11.1 You must:" },
    {
      ul: [
        "enable multi-factor authentication on every account used in connection with the Services where the platform makes it available;",
        "use unique, strong credentials held in a reputable password manager, and never share, reuse, export or transmit credentials in plain text;",
        "access only the systems, data and accounts necessary for your work, and only using the access we or the client have granted you — never a shared, borrowed or inherited login;",
        "keep devices used for the Services encrypted, patched, password-protected, and running supported software with active endpoint protection;",
        "not store Epitome or client data on personal or unmanaged cloud accounts, removable media, or personal messaging services;",
        "notify us immediately of any lost or stolen device, suspected credential compromise, phishing success, malware infection or unauthorised access;",
        "revoke access for any of your personnel promptly when they no longer need it, and tell us when someone with client access leaves your organisation;",
        "return or securely delete all Epitome and client data, and surrender all access, on completion of the Services or on our request.",
      ],
    },
    {
      p: "11.2 You must independently verify by a trusted channel any request to change bank details, payment instructions, or the destination of data or funds, however convincing the request appears.",
    },

    { h: "12. Intellectual Property" },
    {
      p: "12.1 All intellectual property rights in materials, data, systems, content, branding and know-how belonging to Epitome or to a client before the engagement, or provided to you for the engagement, remain the property of Epitome or that client. You get no rights in them beyond a revocable, non-exclusive licence to use them solely to perform the Services.",
    },
    {
      p: "12.2 All intellectual property rights in deliverables, work product, code, configurations, prompts, documentation, designs, copy, artwork and media created by you in the course of the Services are assigned to Epitome on creation, absolutely and throughout the world, together with all rights of action in respect of them. You will execute any document and do anything we reasonably request to give effect to or perfect that assignment, and you appoint us as your attorney to do so if you fail to.",
    },
    {
      p: "12.3 To the extent any right cannot be assigned, you grant Epitome a perpetual, irrevocable, worldwide, royalty-free, transferable and sub-licensable licence to use, copy, modify, adapt, publish and otherwise exploit it for any purpose, including onward licensing to the client — a licence sufficient for Epitome and its clients to use the deliverable fully and without further payment.",
    },
    {
      p: "12.4 You waive, to the extent permitted by law, any moral rights in the deliverables.",
    },
    {
      p: "12.5 You warrant that the deliverables are your original work, do not infringe any third-party right, and are free of any encumbrance. You must disclose to us in advance, and obtain our written approval for, any third-party component, library, framework, template, dataset, stock asset, font, plugin, AI-generated asset or open-source software you intend to incorporate, together with its licence terms.",
    },
    {
      p: "12.6 You must not incorporate anything under a copyleft or reciprocal licence — such as the GPL, LGPL or AGPL — or any licence that could require disclosure of source code, restrict commercial use, or impose obligations on Epitome or a client, without our express written approval. Contamination of a client deliverable with an incompatible licence is a material breach.",
    },
    {
      p: "12.7 You must not retain, reuse or repurpose client deliverables, code or data for other customers or your own products, and must not present client work as your own portfolio without our written consent.",
    },

    { h: "13. Conflicts of Interest" },
    {
      p: "13.1 You must disclose to us, before accepting an engagement and promptly if it arises later, any actual or potential conflict of interest — including any relationship with a competitor of the client, any commission, referral fee, rebate or incentive from a vendor or platform you recommend, and any personal or financial interest in the outcome of your recommendations.",
    },
    {
      p: "13.2 You must not accept any undisclosed benefit from a third party in connection with the Services, and must comply with the Bribery Act 2010 and applicable anti-bribery, anti-facilitation-of-tax-evasion, sanctions and modern slavery legislation.",
    },
    {
      p: "13.3 You must not use an Epitome engagement to market your own services to an Epitome client.",
    },

    { h: "14. Fees and Payment" },
    {
      p: "14.1 Registration and approval create no entitlement to work, to any minimum volume of work, or to any payment.",
    },
    {
      p: "14.2 You are paid only for work performed under an agreed SOW or purchase order, at the rate or price stated in it. We are not liable for work performed outside an agreed SOW, in excess of an agreed cap, or before written approval under section 3.",
    },
    {
      p: "14.3 Invoices must reference the applicable SOW or purchase order. Unless the SOW says otherwise, we pay correctly submitted, undisputed invoices within 30 days of receipt.",
    },
    {
      p: "14.4 You bear your own costs and expenses unless we have agreed them in writing in advance.",
    },
    {
      p: "14.5 We may withhold or set off payment to the extent of any sum you owe us, any unremedied breach, or any claim under the indemnity in section 7.",
    },

    { h: "15. Suspension, Rejection and Termination" },
    {
      p: "15.1 We may suspend or withdraw your approval, reject your registration, or remove you from our approved contractor list, with immediate effect, if:",
    },
    {
      ul: [
        "your professional indemnity insurance expires, lapses, is cancelled, or falls below £1,000,000, or you cannot evidence it on request;",
        "you fail to provide evidence or information we reasonably require;",
        "you breach these terms, or we reasonably believe you are likely to;",
        "there is a security incident, data protection breach, confidentiality breach, or conduct issue involving you;",
        "you become insolvent, enter administration or liquidation, or cease to trade;",
        "a client reasonably objects to your involvement; or",
        "we no longer require the Services.",
      ],
    },
    {
      p: "15.2 We may terminate any individual SOW, and the relationship as a whole, on written notice. Where the termination is not for your breach, we will pay for work properly performed and accepted up to the termination date.",
    },
    {
      p: "15.3 On suspension or termination you must immediately stop work, stop accessing all Epitome and client systems and data, hand over work in progress in a usable form, and return or securely delete all Confidential Information, client data and materials, confirming in writing that you have done so.",
    },
    {
      p: "15.4 Suspension for a lapse in insurance does not entitle you to compensation, and does not relieve you of your obligations under sections 6 to 12.",
    },

    { h: "16. Audit, Evidence and Records" },
    {
      p: "16.1 You must provide, promptly on request, evidence of your insurance, your data protection compliance, your security controls, your sub-processors and AI tools, and your right to use any third-party component in a deliverable. We may need this to answer our own insurers, a client, or a regulator.",
    },
    {
      p: "16.2 You must keep records sufficient to demonstrate compliance with these terms for at least six years after the engagement ends, and must not destroy any record relevant to an actual or threatened claim.",
    },
    {
      p: "16.3 Where a client's own contract, regulator or insurer requires an audit or assurance information relating to your part of the work, you will cooperate reasonably, at our cost unless the audit reveals a breach by you.",
    },
    {
      p: "16.4 We keep a record of your registration, the version of these terms you accepted, the confirmations you gave, the date and time of acceptance, the name and email of the person who accepted, and the originating IP address, as evidence that the required written contract is in place.",
    },

    { h: "17. Liability" },
    {
      p: "17.1 Nothing in these terms limits or excludes either party's liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be limited.",
    },
    {
      p: "17.2 Your liability under these terms is not capped by reference to the fees you receive. Given that a single act or omission by you can expose Epitome to a client claim far exceeding your fee, your liability is limited only by the general law, and your obligation under section 6 to carry insurance of not less than £1,000,000 reflects that exposure.",
    },
    {
      p: "17.3 Epitome's liability to you is limited to the fees properly due for work performed and accepted under the applicable SOW.",
    },

    { h: "18. Governing Law and Jurisdiction" },
    {
      p: "18.1 These terms, and any dispute or claim arising out of or in connection with them, their subject matter or their formation (including non-contractual disputes or claims), are governed by and construed in accordance with the laws of England and Wales.",
    },
    {
      p: "18.2 The courts of England and Wales have exclusive jurisdiction to settle any such dispute or claim.",
    },
    {
      p: "18.3 As an alternative to court proceedings, the parties may agree in writing to refer a dispute to arbitration before an arbitration panel seated in the United Kingdom, conducted in English and under English procedural law. Any such arbitration is final and binding. Nothing in this section permits a dispute to be referred to a court or arbitration panel outside the United Kingdom.",
    },
    {
      p: "18.4 Section 18 survives termination and applies however the dispute arises.",
    },

    { h: "19. General" },
    {
      p: "19.1 Survival. Sections 5 (no authority, as to past acts), 6.2 and 6.5 to 6.7 (run-off cover, insurance evidence and notification), 7 (indemnity), 8 (confidentiality), 9 (data protection), 12 (intellectual property), 16 (audit, evidence and records), 17 (liability) and 18 (governing law and jurisdiction) survive expiry or termination and continue for as long as the relevant liability or obligation can arise.",
    },
    {
      p: "19.2 Versioning. These terms are versioned. The version you accepted, shown in the title of this page, is the version that binds you for engagements entered into under it. We may issue a new version for future engagements, and may require you to accept the current version as a condition of continued approval. We will not change the version you accepted retrospectively.",
    },
    {
      p: "19.3 Assignment. You may not assign, transfer or charge your rights or obligations without our written consent. We may assign or transfer ours to a group company or to a purchaser of our business.",
    },
    {
      p: "19.4 Entire agreement. These terms, together with the applicable SOW and any data processing agreement, form the entire agreement between us on their subject matter, and supersede any prior discussion, proposal or representation. Neither party relies on any statement not set out in them, save that nothing excludes liability for fraudulent misrepresentation.",
    },
    {
      p: "19.5 No waiver. A failure or delay in enforcing any provision is not a waiver of it.",
    },
    {
      p: "19.6 Severance. If any provision is found unenforceable, it is modified to the minimum extent necessary, or severed, and the remainder continues in force.",
    },
    {
      p: "19.7 Third-party rights. Except that an Epitome client may enforce sections 8, 9, 11 and 12 directly against you, no third party has any right to enforce these terms under the Contracts (Rights of Third Parties) Act 1999.",
    },
    {
      p: "19.8 Notices. Notices must be in writing and sent to the email address held for you on your registration, or to Epitome at the address below. Notices required to be given “immediately” must be given by email and must not wait for a scheduled report or meeting.",
    },

    { h: "20. Confirmations Given on Acceptance" },
    {
      p: "When you accept these terms through the contractor registration form, you confirm each of the following. Every confirmation is mandatory, and each one is recorded individually against your registration.",
    },
    {
      ul: [
        "I confirm I am authorised to accept these terms on behalf of the contractor/provider.",
        "The contractor agreement is governed by the laws of England and Wales.",
        "Any dispute will be referred to the courts or an arbitration panel in the United Kingdom.",
        "The contractor will indemnify The Epitome Group Ltd for any liability caused or contributed to by anything the contractor does or fails to do in performance of services on Epitome's behalf, including any advertising or branding provided.",
        "The contractor has and will maintain professional indemnity insurance with a limit of indemnity of not less than £1,000,000 for the whole time it provides services to Epitome.",
        "The contractor will notify Epitome immediately if its PI cover expires, is cancelled, is reduced below £1,000,000, or if any material claim or circumstance arises.",
        "The contractor will not start any client work until Epitome has confirmed approval.",
        "The contractor will comply with Epitome's confidentiality, data protection, client data, AI tool and information security requirements.",
      ],
    },
    { p: "Accepting these terms does not approve you to start work. See section 3." },

    { h: "Company Details" },
    {
      p: "The Epitome Group Ltd. Company number: 15504940 (registered in England and Wales). Registered office: Town Square Kingston, 3 Buckland's Wharf, Thames Side, Kingston Upon Thames, United Kingdom, KT1 1TF.",
    },
  ],
};

export const POLICY_DOCS_PART_TWO: PolicyDoc[] = [
  acceptableUsePolicy,
  cookiePolicy,
  privacyPolicy,
  contractorTerms,
];
