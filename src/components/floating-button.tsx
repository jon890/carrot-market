interface FloatingButtonProps {
  children: React.ReactNode;
}

const FloatingButton = ({ children }: FloatingButtonProps) => {
  return (
    <button
      className="fixed bottom-24 right-5 cursor-pointer rounded-full bg-orange-400 p-4 text-white
      shadow-xl transition-colors hover:bg-orange-500"
    >
      {children}
    </button>
  );
};

export default FloatingButton;
