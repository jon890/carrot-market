import { classnames } from "@/libs/utils";

const Badge = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={classnames(
        "rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
