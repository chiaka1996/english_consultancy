export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  className = "",
  inverted = false,
}) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {tag && (
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
            inverted
              ? "bg-navy-800 text-accent-300 border border-navy-700"
              : "bg-accent-50 text-accent-800 border border-accent-100"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight ${
          inverted ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
