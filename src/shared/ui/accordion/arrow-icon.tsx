type Props = {
  className?: string;
};

export function ArrowIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12L11.8103 2.65681C12.1966 2.289 12.8034 2.289 13.1897 2.65681L23 12"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
