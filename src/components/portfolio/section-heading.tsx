export function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="label-caps text-primary">{index}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
