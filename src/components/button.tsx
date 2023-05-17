const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="mt-2 w-full rounded-md border border-transparent 
      bg-orange-500 px-4 py-2 
      text-sm font-medium text-white shadow-sm 
    hover:bg-orange-600 
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 "
    >
      {children}
    </button>
  );
};

export default Button;
