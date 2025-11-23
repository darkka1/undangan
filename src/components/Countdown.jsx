import React, { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-05-31T08:00:00+07:00").getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;
      setTime({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        mins: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="section-padding bg-pink-50 text-center">
      <h2 className="font-script text-4xl text-pink-600 mb-6">Menuju Hari Bahagia</h2>

      <div className="flex justify-center space-x-4 text-gray-800 text-lg font-semibold">
        <div className="bg-white w-20 p-3 rounded-xl shadow">{time.days} <span className="block text-xs">Hari</span></div>
        <div className="bg-white w-20 p-3 rounded-xl shadow">{time.hours} <span className="block text-xs">Jam</span></div>
        <div className="bg-white w-20 p-3 rounded-xl shadow">{time.mins} <span className="block text-xs">Menit</span></div>
      </div>
    </section>
  );
}