import { useMemo, useState } from "react";
import {
  Backpack,
  CheckCircle2,
  Dumbbell,
  Footprints,
  Mountain,
  RotateCcw,
} from "lucide-react";

const weeks = [
  {
    week: 1,
    focus: "Build",
    sessions: [
      ["Easy walk", "2 miles", "Comfortable pace"],
      ["Strength", "35-45 min", "Goblet squat, step-ups, Romanian deadlift, calf raises, plank"],
      ["Incline", "35-40 min", "Brisk hills, stairs, or incline treadmill; controlled effort"],
      ["Easy walk", "2 miles", "Recovery pace"],
      ["Long hike", "4-5 miles", "Light pack, about 10-15 lb; seek hills when possible"],
    ],
  },
  {
    week: 2,
    focus: "Build climbing endurance",
    sessions: [
      ["Easy walk", "2 miles", "Comfortable pace"],
      ["Strength", "40-45 min", "Step-ups, split squats, kettlebell deadlift, slow step-downs, core"],
      ["Incline", "45 min", "Sustained hills/stairs; steady, conversational effort"],
      ["Easy walk", "2 miles", "Recovery pace"],
      ["Long hike", "5-6 miles", "15-20 lb pack; prioritize rolling or hilly terrain"],
    ],
  },
  {
    week: 3,
    focus: "Peak specificity",
    sessions: [
      ["Easy walk", "2 miles", "Keep legs loose"],
      ["Strength", "35-40 min", "Moderate loads; emphasize step-ups and controlled step-downs"],
      ["Incline", "50-60 min", "Longest climbing session; steady rather than maximal"],
      ["Easy walk", "2 miles", "Recovery pace"],
      ["Long hike", "6-7 miles", "15-20 lb pack; this is your key rehearsal"],
    ],
  },
  {
    week: 4,
    focus: "Taper and summit",
    sessions: [
      ["Easy walk", "1.5-2 miles", "Relaxed"],
      ["Light strength", "20-25 min", "Easy full-body session; stop well before fatigue"],
      ["Easy incline", "25-30 min", "Comfortable effort"],
      ["Rest / easy walk", "Optional", "Prioritize fresh legs"],
      ["Guadalupe Peak", "8.4 miles / ~3,000 ft gain", "Hike day. Use the pack, footwear, food and hydration strategy you practiced"],
    ],
  },
];

export default function GuadalupePlan() {
  const [done, setDone] = useState({});

  const total = useMemo(
    () => weeks.reduce((count, week) => count + week.sessions.length, 0),
    []
  );

  const completed = Object.values(done).filter(Boolean).length;

  const toggle = (key) => {
    setDone((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-3xl bg-emerald-950 p-7 text-white shadow-lg md:p-10">
          <div className="flex items-center gap-3 text-emerald-200">
            <Mountain />
            <span className="font-semibold">4-week mountain-specific build</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold md:text-5xl">
            Guadalupe Peak Training Plan
          </h1>

          <p className="mt-3 max-w-3xl text-emerald-50">
            Built around your current baseline: roughly 2 miles of walking per day,
            periodic 3+ mile walks with a 35 lb pack, and weekly dumbbell/kettlebell
            strength work focused on the exact demands of the climb.
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Training progress</span>
              <span>
                {completed}/{total} sessions
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                style={{ width: `${(completed / total) * 100}%` }}
              />
            </div>
          </div>
        </header>

        <section className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <Footprints className="text-emerald-700" />
            <b className="mt-2 block">Goal</b>
            <span className="text-sm text-stone-600">
              Longer feet-on-trail endurance with a strong, efficient uphill rhythm.
            </span>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <Mountain className="text-emerald-700" />
            <b className="mt-2 block">Specificity</b>
            <span className="text-sm text-stone-600">
              Weekly sustained incline work and one hike that mirrors the summit effort.
            </span>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <Dumbbell className="text-emerald-700" />
            <b className="mt-2 block">Durability</b>
            <span className="text-sm text-stone-600">
              Step-ups and slow step-downs build leg power while keeping joints ready.
            </span>
          </div>
        </section>

        {weeks.map((week) => (
          <section
            key={week.week}
            className="rounded-3xl bg-white p-5 shadow-sm md:p-7"
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <span className="font-bold text-emerald-700">WEEK {week.week}</span>
                <h2 className="text-2xl font-bold">{week.focus}</h2>
              </div>
              <Backpack className="text-emerald-700" />
            </div>

            <div className="space-y-2">
              {week.sessions.map((session, index) => {
                const key = `${week.week}-${index}`;
                const isDone = Boolean(done[key]);

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggle(key)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      isDone
                        ? "border-emerald-300 bg-emerald-50"
                        : "border-stone-200 bg-white hover:border-emerald-200 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-stone-100 p-1 text-stone-700">
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <span className="block h-4 w-4 rounded-full border-2 border-stone-400" />
                        )}
                      </div>

                      <div className="flex-1 md:flex md:items-center md:justify-between md:gap-4">
                        <div>
                          <div className="font-semibold text-stone-900">{session[0]}</div>
                          <div className="text-sm text-stone-600">{session[2]}</div>
                        </div>
                        <div className="mt-1 text-sm font-medium text-emerald-700 md:mt-0">
                          {session[1]}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 md:p-7">
          <h2 className="text-xl font-bold">Pack and recovery notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
            <li>
              Your existing 35 lb weighted walks show useful load tolerance, but you do
              not need to train every long hike that heavy. Use a lighter pack for most
              sessions and save the heavier load for a few specific workouts.
            </li>
            <li>
              Keep the intensity controlled on the hill work: steady, sustainable effort
              beats a brutal peak that leaves you flattened before the summit day.
            </li>
            <li>
              Prioritize sleep, hydration, and consistent calories during the final week
              to make sure the legs feel fresh when the summit push arrives.
            </li>
          </ul>
        </section>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setDone({})}
            className="inline-flex items-center gap-2 rounded-xl bg-stone-200 px-4 py-2 font-semibold text-stone-700 transition hover:bg-stone-300"
          >
            <RotateCcw size={17} />
            Reset checkboxes
          </button>
        </div>
      </div>
    </main>
  );
}
