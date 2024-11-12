interface Stat {
  id: number;
  name: string;
  value: string;
}

const stats: Stat[] = [
  { id: 1, name: "Games", value: "100+" },
  { id: 2, name: "Twitch Watch Time", value: "11.3M" },
  { id: 3, name: "Controllers", value: "10+" },
];

export default function Example() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="flex flex-col gap-y-8 sm:flex-row sm:justify-around text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-2 sm:gap-y-4">
              <dt className="text-base/7 text-red-500">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
