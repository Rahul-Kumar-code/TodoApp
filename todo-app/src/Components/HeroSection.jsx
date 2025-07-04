import Tasks from "./Tasks";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-168 bg-teal-50 px-4">
      <div className="w-full max-w-2xl border-2 border-cyan-400 rounded-2xl p-4 bg-white shadow-md">
        <Tasks />
      </div>
    </div>
  );
}
