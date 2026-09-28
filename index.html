import React, { useMemo, useState } from "react";
import { CheckCircle2, Mountain, Backpack, Dumbbell, Footprints, RotateCcw } from "lucide-react";

const weeks = [
  {week:1, focus:"Build", sessions:[
    ["Easy walk","2 miles","Comfortable pace"],
    ["Strength","35-45 min","Goblet squat, step-ups, Romanian deadlift, calf raises, plank"],
    ["Incline","35-40 min","Brisk hills, stairs, or incline treadmill; controlled effort"],
    ["Easy walk","2 miles","Recovery pace"],
    ["Long hike","4-5 miles","Light pack, about 10-15 lb; seek hills when possible"]]},
  {week:2, focus:"Build climbing endurance", sessions:[
    ["Easy walk","2 miles","Comfortable pace"],
    ["Strength","40-45 min","Step-ups, split squats, kettlebell deadlift, slow step-downs, core"],
    ["Incline","45 min","Sustained hills/stairs; steady, conversational effort"],
    ["Easy walk","2 miles","Recovery pace"],
    ["Long hike","5-6 miles","15-20 lb pack; prioritize rolling or hilly terrain"]]},
  {week:3, focus:"Peak specificity", sessions:[
    ["Easy walk","2 miles","Keep legs loose"],
    ["Strength","35-40 min","Moderate loads; emphasize step-ups and controlled step-downs"],
    ["Incline","50-60 min","Longest climbing session; steady rather than maximal"],
    ["Easy walk","2 miles","Recovery pace"],
    ["Long hike","6-7 miles","15-20 lb pack; this is your key rehearsal"]]},
  {week:4, focus:"Taper and summit", sessions:[
    ["Easy walk","1.5-2 miles","Relaxed"],
    ["Light strength","20-25 min","Easy full-body session; stop well before fatigue"],
    ["Easy incline","25-30 min","Comfortable effort"],
    ["Rest / easy walk","Optional","Prioritize fresh legs"],
    ["Guadalupe Peak","8.4 miles / ~3,000 ft gain","Hike day. Use the pack, footwear, food and hydration strategy you practiced"]]}
];

export default function GuadalupePlan(){
 const [done,setDone]=useState({});
 const total=useMemo(()=>weeks.reduce((n,w)=>n+w.sessions.length,0),[]);
 const completed=Object.values(done).filter(Boolean).length;
 const toggle=(k)=>setDone(d=>({...d,[k]:!d[k]}));
 return <main className="min-h-screen bg-stone-50 text-stone-900 p-4 md:p-8">
  <div className="max-w-5xl mx-auto space-y-6">
   <header className="rounded-3xl bg-emerald-950 text-white p-7 md:p-10 shadow-lg">
    <div className="flex items-center gap-3 text-emerald-200"><Mountain/><span className="font-semibold">4-week mountain-specific build</span></div>
    <h1 className="text-3xl md:text-5xl font-bold mt-3">Guadalupe Peak Training Plan</h1>
    <p className="mt-3 text-emerald-50 max-w-3xl">Built around your current baseline: roughly 2 miles of walking per day, periodic 3+ mile walks with a 35 lb pack, and weekly dumbbell/kettlebell strength training.</p>
    <div className="mt-6 bg-white/10 rounded-2xl p-4"><div className="flex justify-between text-sm mb-2"><span>Training progress</span><span>{completed}/{total} sessions</span></div><div className="h-3 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-lime-300 transition-all" style={{width:`${100*completed/total}%`}}/></div></div>
   </header>

   <section className="grid md:grid-cols-3 gap-3">
    <div className="bg-white rounded-2xl p-4 shadow-sm"><Footprints className="text-emerald-700"/><b className="block mt-2">Goal</b><span className="text-sm text-stone-600">Longer feet-on-trail endurance</span></div>
    <div className="bg-white rounded-2xl p-4 shadow-sm"><Mountain className="text-emerald-700"/><b className="block mt-2">Specificity</b><span className="text-sm text-stone-600">Weekly sustained incline work</span></div>
    <div className="bg-white rounded-2xl p-4 shadow-sm"><Dumbbell className="text-emerald-700"/><b className="block mt-2">Durability</b><span className="text-sm text-stone-600">Step-ups and slow step-downs for climbing and descending</span></div>
   </section>

   {weeks.map(w=><section key={w.week} className="bg-white rounded-3xl p-5 md:p-7 shadow-sm">
    <div className="flex justify-between items-end gap-4 mb-4"><div><span className="text-emerald-700 font-bold">WEEK {w.week}</span><h2 className="text-2xl font-bold">{w.focus}</h2></div><Backpack className="text-stone-400"/></div>
    <div className="space-y-2">{w.sessions.map((s,i)=>{const k=`${w.week}-${i}`; return <button key={k} onClick={()=>toggle(k)} className={`w-full text-left rounded-2xl border p-4 flex gap-3 items-start transition ${done[k]?"bg-emerald-50 border-emerald-200":"bg-stone-50 border-stone-200 hover:border-emerald-300"}`}><CheckCircle2 className={done[k]?"text-emerald-600":"text-stone-300"}/><div className="grid md:grid-cols-[160px_170px_1fr] gap-1 md:gap-4 flex-1"><b>{s[0]}</b><span>{s[1]}</span><span className="text-stone-600">{s[2]}</span></div></button>})}</div>
   </section>)}

   <section className="rounded-3xl bg-amber-50 border border-amber-200 p-5 md:p-7">
    <h2 className="text-xl font-bold">Pack and recovery notes</h2>
    <ul className="list-disc pl-5 mt-3 space-y-2 text-stone-700"><li>Your existing 35 lb weighted walks show useful load tolerance, but you do not need to train every long hike that heavy. Use a lighter, hike-realistic pack for most sessions.</li><li>Keep easy days easy. If pain alters your gait, stop and recover rather than pushing through it.</li><li>Practice footwear, socks, hydration and food during long hikes so summit day is not an experiment.</li><li>Place at least one easy or rest day after the longest incline or hiking session.</li></ul>
   </section>

   <div className="flex justify-end"><button onClick={()=>setDone({})} className="inline-flex gap-2 items-center px-4 py-2 bg-stone-200 rounded-xl font-semibold"><RotateCcw size={17}/> Reset checkboxes</button></div>
  </div>
 </main>
}
