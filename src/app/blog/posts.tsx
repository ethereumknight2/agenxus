// app/blog/posts.tsx
// TSX because we return JSX for each post's content.
import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  author: string;
  readingTime?: string;
  hero?: string; // e.g., "/images/blog/auto-ai-hero.jpg"
  tags?: string[];
  render: () => JSX.Element;
};

/**
 * Add new posts by appending to this array.
 * 1) Save any hero image under /public/images/blog/...
 * 2) Set `hero` to "/images/blog/your-file.jpg"
 * 3) Write your article inside `render()`
 */
export const POSTS: Post[] = [
  {
    slug: "ai-for-auto-dealers",
    title: "AI for Auto Dealers: Voice, Chat, Video & Workflow Automation",
    description:
      "A practical guide to deploying AI agents across your dealership to capture more leads, book more appointments, and reduce overhead.",
    date: "2025-08-20",
    author: "Agenxus Team",
    readingTime: "12 min",
    hero: "/images/blog/auto-ai-hero.jpeg",
    tags: ["Automotive", "Voice AI", "Chatbots", "Automation"],
    render: () => (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          The retail automotive industry has spent the last decade modernizing
          its digital storefronts, yet most dealerships still leak revenue in
          the least glamorous parts of the customer journey: unanswered calls,
          slow replies, long handoffs between departments, and manual follow-ups
          that depend on whoever happens to be free. Over the last two years, a
          wave of practical artificial intelligence has reached the front lines:
          voice agents that answer every call, chat systems that qualify
          prospects in seconds, video agents that deliver high-quality
          walkarounds on demand, and workflow automation that quietly handles
          the repetitive, error-prone work that clogs calendars and CRMs. This
          guide explains, in plain language, what those technologies are, how
          they fit together inside a dealership, what kind of ROI to expect,
          which metrics to track, and the exact sequence you can follow to
          launch with confidence.
        </p>

        <p>
          If you are responsible for sales performance, service throughput, or
          the customer experience, the goal is simple: respond first, respond
          well, and keep every promise the store makes. AI makes that doable at
          scale. Voice agents can pick up instantly, route to Sales, Service, or
          Parts, and book appointments even when the BDC is swamped or the store
          is closed. Conversational chat can hold a natural dialogue with
          shoppers on the website, SMS, or social, gather intent, qualify, and
          hand off to a person with full context. Video agents can present a
          model lineup and common questions in a format customers actually
          finish, while workflow automation ties everything together—logging
          records, scheduling reminders, triggering follow-ups, and surfacing
          exceptions. Done right, AI does not replace trusted people; it removes
          the busywork that kept them from doing their best work in the first
          place.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          What “AI Agents” Actually Mean in a Dealership
        </h2>
        <p>
          “AI agent” is an umbrella term, but in practice you can think of it as
          software that listens to a customer, understands what they want, and
          then takes an action you define. The important part isn’t the
          buzzword; it’s the behavior. A voice agent answers an inbound call,
          recognizes whether the caller needs sales, service, or parts, looks up
          availability, and books an appointment into your scheduling stack. A
          chat agent greets a website visitor, asks a couple of crisp questions
          to learn intent, looks up inventory details if needed, and either
          schedules a test drive or routes the conversation to a person. A video
          agent appears as a familiar face and walks through trim differences,
          financing basics, or “what to expect at your first service” while
          letting the viewer click to take the next step. What binds these
          together is the ability to read and write to your systems of
          record—CRM, DMS, calendars—and to follow rules that you control about
          tone, compliance, and escalation.
        </p>

        <p>
          It helps to draw a sharp line between a scripted bot and an agent.
          Scripted bots follow a fixed tree; they are brittle and easy to stall.
          Agents use natural-language understanding to interpret real, messy
          input, and they can call functions—“book_appointment,” “create_lead,”
          “get_inventory,” “send_payment_link”—that you expose. That means the
          same front-door experience can gracefully handle an after-hours
          service booking, a shopper comparing trims, a customer asking whether
          a recall applies to their VIN, or a parent trying to reschedule a
          Saturday appointment between soccer and a birthday party. Because
          agents are programmable, you can encode guardrails: never quote
          pricing, always disclaim finance examples, never collect card numbers
          over the phone, and always escalate if the conversation mentions
          safety or legal concerns.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Why Dealers Are Adopting AI Now
        </h2>
        <p>
          The timing is about economics and expectations. On the cost side, the
          average store fields more inbound calls and messages than ever, but
          staffing to answer instantly across phone, web, and text has become
          expensive and unpredictable. On the demand side, shoppers expect
          immediate, accurate answers twenty-four hours a day because every
          other consumer experience teaches them that is normal. AI fills the
          gap because it can be always available and always consistent, and
          because modern models are good enough to hold a courteous, on-brand
          conversation while doing useful work. The first wins come fast:
          answering missed calls, shaving minutes off response times, and
          turning abandoned forms into booked appointments. From there, gains
          compound as follow-ups become reliable, data entry becomes automatic,
          and managers get clean dashboards that reflect what is actually
          happening in the store.
        </p>

        <p>
          ROI typically appears in a handful of predictable places. In Service,
          fewer missed calls and instant scheduling lift bay utilization and
          smooth out the day. In Sales, faster replies and better qualification
          increase the percentage of inquiries that turn into test drives. After
          hours, AI keeps capturing demand instead of letting it slip until the
          morning. And in the back office, automation reduces the silent costs
          everyone knows but rarely measures: double entry, manual list uploads,
          ad-hoc reminders, and the hours burned compiling reports. None of this
          requires a moonshot. It requires a narrow first project that proves
          value in weeks, then a steady cadence of small expansions that reuse
          the same foundations.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Voice AI at the Front Door: Answer Every Call, Every Time
        </h2>
        <p>
          The phone is still the most valuable and volatile channel in a
          dealership. When the rush hits, calls stack up. When the store is
          closed, voicemail piles up. When an advisor steps away from the desk,
          a promise gets missed. Voice AI is a practical antidote. You configure
          a friendly greeting in your brand’s voice, define menu-free intent
          routing, and connect the agent to your calendar or scheduler with
          clear rules about service lines, durations, technicians, and cut-offs.
          From the caller’s perspective, the experience is simple: the phone is
          answered immediately; they state what they need in natural language;
          the agent confirms a few details; and a slot appears on the calendar
          with a confirmation sent by SMS or email. If the caller asks for a
          person by name, the call forwards. If the situation is sensitive, the
          agent can escalate to a live queue or take a message with structured
          fields so the callback is efficient.
        </p>

        <p>
          The difference between a tolerated system and a loved one is the last
          ten percent of polish. Teach the agent your store’s vocabulary, like
          how you refer to express service or what you call a “multi-point
          inspection.” Give it access to hours and exception dates so it never
          books a holiday. Decide how aggressively to reschedule when a customer
          cancels. Match every automated message to your brand style. And most
          important, give managers the ability to review transcripts, correct
          mistakes, and push those learnings back into the agent so it keeps
          improving. When that feedback loop is healthy, a voice agent becomes
          the most consistent member of the team: never off, never rushed, and
          never forgetful.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Conversational Chat That Qualifies and Books
        </h2>
        <p>
          Website chat has existed for years, but the experience was often a
          form in disguise. Modern AI chat is different. It greets visitors
          conversationally, asks short, specific questions to learn intent, and
          adapts based on the answer. A shopper who knows the exact stock number
          gets inventory details and a simple path to book a test drive. A
          curious browser gets concise differences between trims, a sense of
          total cost, and an invitation to continue on SMS. Someone comparing
          financing options gets the right disclosure language and a link to
          next steps without pretending to be a finance manager. Because the
          chat agent can call functions, it does more than answer questions: it
          creates leads, sets appointments, and starts nurture sequences with
          the consent you require.
        </p>

        <p>
          Great chat feels lightweight and human. Keep turns short, avoid
          jargon, and never force a long paragraph into a chat bubble. Offer
          choices when that speeds things up—“today or tomorrow?”—but always
          allow free text so customers can simply say what they want. Connect
          the agent to your CRM so every conversation becomes a record with
          source, timestamp, and intent tagged. Use that data. If an inbound
          call mentions “trade-in” and a website chat later mentions
          “appraisal,” those should be stitched together into one customer
          story, not two disjointed entries. The payoff is a day where every
          conversation has context and nobody on the team has to start from
          zero.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Video Agents and Virtual Walkarounds
        </h2>
        <p>
          Shoppers consume mountains of video before they ever contact a store.
          A video agent harnesses that behavior in your favor by presenting a
          consistent, branded walkthrough that answers the questions your team
          hears every day. Imagine a prospective customer opening a model page
          at 10:30 p.m. and seeing a familiar face offer a two-minute overview:
          what’s new for this model year, which trims match common needs, how
          driver-assist features actually work, what to budget for standard
          maintenance, and how easy it is to book a test drive. The viewer can
          click to expand a section, request a quote, or schedule an appointment
          without leaving the flow. Unlike a one-off YouTube video, a video
          agent can react to inputs, hand off to chat, and write results back to
          your systems.
        </p>

        <p>
          The trick is not cinematic flair; it is clarity. Keep explanations
          grounded and neutral. Use the same language a trusted salesperson
          would use at a desk. Close every segment with a simple next step—“book
          a time,” “see availability,” “text me these details”—so the viewer can
          act on the momentum you just created. Video agents are especially
          powerful for service education: a ninety-second explanation of
          warranty coverage, tire rotation timing, or what “multi-point
          inspection” includes reduces friction and saves advisors from
          repeating themselves all day.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Workflow Automation: The Invisible Workhorse
        </h2>
        <p>
          For every glamorous moment on the sales floor there are a dozen
          administrative steps that make it possible. AI-assisted automation
          excels here because the rules are clear and the value accumulates.
          Start with the basics. When a call is missed, send a polite SMS within
          a minute with a link to book. When a lead completes a form, write a
          complete, normalized record to the CRM and tag the source correctly.
          When a service appointment is booked, send a confirmation, a calendar
          invite, and a reminder with a reschedule link that actually works.
          Post-visit, thank the customer, include any promised resources, and
          ask a single, specific question that invites a reply. None of this is
          groundbreaking; what is new is that you can orchestrate it reliably
          without asking a human to remember.
        </p>

        <p>
          Think in terms of events and actions. Events are things that
          happen—missed call, new lead, appointment created, appointment
          canceled, voicemail transcribed, payment received. Actions are what
          you do—create or update a contact, schedule, send, tag, alert,
          escalate. Connect events to actions with conditions and fallbacks,
          then layer in AI where judgment matters, like drafting a courteous
          response that references the exact reason for the appointment change.
          The store gets the benefits everyone wanted for years: fewer balls
          dropped, fewer apologies, and data that finally tells the truth.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          How to Evaluate Vendors Without the Hype
        </h2>
        <p>
          The market is crowded and the language is noisy, so anchor your
          evaluation in real work. Ask each vendor to demonstrate one narrow,
          valuable flow end-to-end inside your environment. For voice, that
          might be booking a service appointment with your real hours,
          durations, and technician constraints. For chat, it might be
          qualifying a sales inquiry, writing a lead to your CRM, and starting a
          two-day nurture sequence. For video, it might be a short model
          overview that hands off to chat and writes a transcript to the
          customer record. Watch for three things: consistency, transparency,
          and control. Consistency means the agent behaves the same way on a
          Monday morning and a Saturday night. Transparency means you can read
          transcripts, see which rules fired, and understand why the agent did
          what it did. Control means you can change prompts, guardrails, and
          workflows without opening a support ticket.
        </p>

        <p>
          Data stewardship is non-negotiable. Clarify what the system stores,
          for how long, and who can access it. Require encryption in transit and
          at rest, role-based access, and audit logs. Insist on sane defaults
          for PII handling, opt-in language that reflects your policies, and the
          ability to erase a record on request. If you operate in
          healthcare-adjacent niches—like service scheduling that references
          medical mobility equipment—make sure your vendor understands the extra
          care required. Above all, pick a partner who will scope the first win
          tightly, deliver it quickly, and earn the right to expand.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          KPIs That Prove the Program Works
        </h2>
        <p>
          A program that feels good but does not measure is a program that will
          be cut in the next budgeting cycle. Choose a handful of KPIs that map
          to revenue and experience, and track them before you start, during the
          pilot, and after expansion. For Service, watch call answer rate, time
          to appointment, show rate, and bay utilization. For Sales, monitor
          time-to-first-response, lead-to-appointment conversion,
          appointment-to-show, and sold rate. Across channels, track after-hours
          capture, average handle time for calls the team does take, and the
          percentage of conversations that end with a clear next step. Then look
          at the quiet savings: fewer manual errors, fewer duplicate records,
          and fewer hours spent compiling reports because the system now writes
          clean data by default.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          A Practical Roadmap: From Pilot to Standard Practice
        </h2>
        <p>
          Begin with a single, narrow problem that matters, like missed service
          calls. Define the current baseline—how many calls arrive daily, how
          many go unanswered, how long a typical booking takes, and how many
          appointments you lose in a week when nobody answers. Choose one make
          and one service lane as your pilot scope and wire your voice agent to
          book only those appointments with rules that reflect reality. Put a
          manager on point to review transcripts every day for the first two
          weeks and create a simple list of improvements: a phrase the agent
          should learn, a rule that needs adjusting, a handoff that could be
          smoother. Publish those improvements like release notes so the team
          sees the system getting better.
        </p>

        <p>
          When the agent books reliably and callers stop complaining, expand
          sideways to an additional service line, then forward to sales overflow
          with a different set of rules that never quote pricing and always
          escalate sensitive cases. In parallel, add a conversational chat that
          mirrors the voice flows so the experience is consistent: ask only what
          you need, respond quickly, and offer a helpful next step. Once both
          channels are steady, introduce a low-risk video agent where customers
          already expect a short explanation, like “what to expect at your first
          service visit” or “how to prepare for a test drive.” Throughout, keep
          instrumentation tight and visible. A simple dashboard that shows calls
          answered, appointments booked, response times, and after-hours capture
          by day will do more to build trust than any slide deck.
        </p>

        <p>
          With the foundations solid, you can automate the connective tissue.
          Missed calls trigger an SMS that references the topic of the call and
          links to schedule. Appointment confirmations include a reschedule link
          that actually modifies the original booking instead of creating a
          duplicate. Post-visit messages include exactly what the advisor
          promised and a single question that invites a reply. Escalations send
          a transcript snippet to the right manager instead of a generic “please
          call back.” None of this requires a new philosophy; it requires the
          discipline to let the system do what people could not do consistently
          at scale.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          {/* …keep your 12 Q&As here exactly as you had them… */}
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Conclusion: Win More Deals by Being First and Being Reliable
        </h2>
        <p>
          Most dealerships do not need a grand reinvention to benefit from AI;
          they need a dependable way to answer, qualify, schedule, and follow
          through without fail. Voice agents make unanswered calls a thing of
          the past. Conversational chat removes the awkward delay between
          inquiry and reply. Video agents explain once and scale infinitely.
          Workflow automation knits those pieces together so the experience
          feels seamless for customers and simple for staff. Start with one
          useful flow, prove it, and keep going. Six months from now, the wins
          will look obvious, and you will wonder how the store ran without them.
        </p>

        <p>
          If you want pragmatic help mapping the first project and wiring the
          integrations, we can show you live examples and tailor a pilot to your
          goals. Book a short discovery call and we’ll share a concrete plan for
          the next thirty days—no buzzwords, just results.
        </p>

        <p>
          Ready to see how AI can transform your dealership?{" "}
          <Link
            href="https://cal.com/agenxus/discoverycall-30min"
            className="text-cyan-400 hover:text-cyan-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a discovery call
          </Link>
          .
        </p>
      </div>
    ),
  },

  {
    slug: "ai-intake-for-healthcare",
    title: "AI Intake for Healthcare: Faster Scheduling, Fewer No-Shows",
    description:
      "How HIPAA-minded voice & chat agents streamline patient intake, reminders, and SOAP note workflows.",
    date: "2025-08-28",
    author: "Agenxus Team",
    readingTime: "9 min",
    hero: "/images/blog/health-intake-hero.jpeg",
    tags: ["Healthcare", "Voice AI", "Automation"],
    render: () => (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Patient experience hinges on access and speed. AI agents handle
          scheduling, intake forms, insurance checks, and reminders—reducing
          friction and no-shows.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Where AI helps
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>24/7 appointment scheduling & confirmations</li>
          <li>Automated pre-visit intake and eligibility Q&amp;A</li>
          <li>Reminders via SMS/voice with reschedule links</li>
          <li>Drafting SOAP notes from transcripts for clinician review</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Rollout plan
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Start with new-patient scheduling & reminders</li>
          <li>Add intake streams (forms, insurance, triage)</li>
          <li>Enable transcription → SOAP draft → EHR export</li>
          <li>Measure wait times, no-show rate, staff time saved</li>
        </ol>
      </div>
    ),
  },

  {
    slug: "automation-stack-for-smbs",
    title: "The Practical Automation Stack for SMBs (n8n, Make, Zapier + AI)",
    description:
      "A battle-tested blueprint for wiring AI agents into CRMs, calendars, and back-office workflows—without drowning in custom code.",
    date: "2025-08-10",
    author: "Agenxus Team",
    readingTime: "10 min",
    hero: "/images/blog/automation-stack-hero.jpg",
    tags: ["Automation", "n8n", "Make.com", "Zapier"],
    render: () => (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          You don’t need a platform rewrite to get leverage. Start with clear
          events and actions, then glue them with a reliable workflow engine.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Core building blocks
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Events: calls, chats, form submits, payments, bookings</li>
          <li>
            Actions: create/update lead, schedule, send reminder, route ticket
          </li>
          <li>Storage: CRM + a lightweight DB for state/flags</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Starter recipes
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Missed call → AI SMS follow-up → book or escalate</li>
          <li>New lead → qualify → assign → 24h nurture sequence</li>
          <li>Abandoned booking → reminder → reschedule link</li>
        </ul>
      </div>
    ),
  },
];

/** Helper for pages (optional) */
export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
