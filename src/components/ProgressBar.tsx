type Props = {
  visited: number;
  total: number;
};

export default function ProgressBar({ visited, total }: Props) {
  const percent = Math.round((visited / total) * 100);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl shadow-lg px-6 py-3 flex flex-col items-center gap-2 min-w-64">
      <p className="text-sm font-semibold text-zinc-700">
        {visited} из {total} мест посещено
      </p>
      <div className="w-full bg-zinc-200 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
