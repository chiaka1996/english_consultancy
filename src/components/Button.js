import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variantStyles = {
    primary:
      "bg-accent-800 text-white hover:bg-accent-700 active:bg-accent-900 focus:ring-accent-800 shadow-sm",
    secondary:
      "bg-white text-navy-950 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 focus:ring-navy-800 shadow-sm",
    navy:
      "bg-navy-950 text-white hover:bg-navy-900 active:bg-slate-900 focus:ring-navy-900 shadow-sm",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-navy-950 focus:ring-slate-400",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
