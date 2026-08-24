"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  domains,
  questions,
  scoreAssessment,
  tierForScore,
} from "@/data/assessment";
import { contact } from "@/data/site";

/**
 * The AI Integration Assessment — a 23-question weighted quiz reproduced
 * from the live tool (see src/data/assessment.ts for provenance). Entirely
 * client-side: no answer ever leaves the browser, matching the original's
 * own "no email required" promise.
 */
export function AssessmentTool() {
  const [step, setStep] = useState<"intro" | number | "results">("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const currentQuestion =
    typeof step === "number" ? questions[step] : null;

  const result = useMemo(() => {
    if (step !== "results") return null;
    const { overall, byDomain } = scoreAssessment(answers);
    return { overall, byDomain, tier: tierForScore(overall) };
  }, [step, answers]);

  const answeredCount = Object.keys(answers).length;

  function selectAnswer(questionIndex: number, optionIndex: number) {
    const q = questions[questionIndex];
    setAnswers((a) => ({ ...a, [q.n]: optionIndex }));
  }

  function goNext() {
    if (typeof step !== "number") return;
    if (step + 1 >= questions.length) setStep("results");
    else setStep(step + 1);
  }

  function goPrevious() {
    if (typeof step !== "number") return;
    if (step === 0) setStep("intro");
    else setStep(step - 1);
  }

  function restart() {
    setAnswers({});
    setStep("intro");
  }

  if (step === "intro") {
    return (
      <div className="rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle md:p-32">
        <h2 className="type-heading-sm">
          We&rsquo;ll assess your organisation across six key domains
        </h2>
        <ul className="mt-24 grid gap-16 sm:grid-cols-2">
          {domains.map((d) => (
            <li key={d.name} className="rounded-lg border border-mist-gray p-16">
              <p className="type-caption font-medium text-ink">{d.name}</p>
              <p className="type-caption mt-4 text-ink-subtle">{d.description}</p>
            </li>
          ))}
        </ul>
        <p className="type-caption mt-24 text-ink-subtle">
          23 questions · roughly 5 minutes · no email required to see your
          result.
        </p>
        <div className="mt-24">
          <Button onClick={() => setStep(0)} trailingIcon>
            Start your assessment
          </Button>
        </div>
      </div>
    );
  }

  if (step === "results" && result) {
    const scorePct = Math.round(result.overall);
    return (
      <div className="rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle md:p-32">
        <h2 className="type-heading-sm">Your AI Integration Assessment results</h2>
        <div className="mt-24 flex flex-wrap items-baseline gap-24">
          <div>
            <span className="type-display numeric block text-violet-core">
              {scorePct}%
            </span>
            <span className="type-caption text-ink-subtle">AI readiness score</span>
          </div>
          <div>
            <span className="type-heading-sm block">{result.tier.label}</span>
            <span className="type-caption max-w-[360px] text-ink-subtle">
              {result.tier.summary}
            </span>
          </div>
        </div>

        <h3 className="type-label mt-32 text-ink-subtle">
          Domain performance breakdown
        </h3>
        <ul className="mt-16 space-y-12">
          {result.byDomain.map((d) => (
            <li key={d.domain}>
              <div className="flex items-baseline justify-between">
                <span className="type-caption font-medium text-ink">{d.domain}</span>
                <span className="type-caption numeric text-ink-subtle">
                  {Math.round(d.score)}%
                </span>
              </div>
              <div className="mt-6 h-4 overflow-hidden rounded-full bg-mist-gray">
                <div
                  className="h-full rounded-full bg-violet-core"
                  style={{ width: `${Math.round(d.score)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>

        <h3 className="type-label mt-32 text-ink-subtle">Key recommendations</h3>
        <ol className="mt-16 space-y-10">
          {result.tier.recommendations.map((r, i) => (
            <li key={r} className="flex gap-12">
              <span className="numeric type-caption mt-2 shrink-0 font-medium text-ink-subtle">
                {i + 1}
              </span>
              <span className="type-body text-ink-muted">{r}</span>
            </li>
          ))}
        </ol>

        <div className="mt-32 rounded-xl border border-mist-gray bg-mist-gray/50 p-24">
          <h3 className="type-subheading font-semibold">
            Ready to close your AI integration gap?
          </h3>
          <p className="type-body mt-8 text-ink-muted">
            Schedule a free 30-minute consultation to discuss your results and
            create a personalised AI adoption roadmap.
          </p>
          <div className="mt-16 flex flex-wrap gap-10">
            <Button href="/contact" trailingIcon>
              Book your free consultation
            </Button>
            <Button variant="secondary" onClick={restart}>
              Retake assessment
            </Button>
          </div>
          <p className="type-caption mt-16 text-ink-subtle">
            Or email your results to us directly at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-ink underline decoration-cloud-gray underline-offset-4 hover:text-violet-core"
            >
              {contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;
  const selected = answers[currentQuestion.n];
  const pct = Math.round(((step as number) / questions.length) * 100);

  return (
    <div className="rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle md:p-32">
      <div className="flex items-baseline justify-between">
        <span className="type-caption font-medium text-ink-subtle">
          Question {(step as number) + 1} of {questions.length}
        </span>
        <span className="type-caption numeric text-ink-subtle">{pct}% complete</span>
      </div>
      <div className="mt-8 h-4 overflow-hidden rounded-full bg-mist-gray">
        <div
          className="h-full rounded-full bg-violet-core transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="type-label mt-24 text-violet-core">{currentQuestion.domain}</p>
      <h2 className="type-heading-sm mt-8">{currentQuestion.question}</h2>

      <div
        role="radiogroup"
        aria-label={currentQuestion.question}
        className="mt-24 space-y-10"
      >
        {currentQuestion.options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={selected === i}
            onClick={() => selectAnswer(step as number, i)}
            className={`block w-full rounded-lg border px-16 py-14 text-left text-body transition-colors ${
              selected === i
                ? "border-violet-core bg-violet-wash"
                : "border-cloud-gray bg-paper-white hover:border-[#c6c6c6]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-24 flex items-center justify-between">
        <Button variant="ghost" onClick={goPrevious}>
          {step === 0 ? "Back to intro" : "Previous"}
        </Button>
        <span className="type-caption numeric text-ink-subtle">
          {answeredCount} of {questions.length}
        </span>
        <Button onClick={goNext} disabled={selected === undefined} trailingIcon>
          {(step as number) + 1 === questions.length ? "View results" : "Next"}
        </Button>
      </div>
    </div>
  );
}
