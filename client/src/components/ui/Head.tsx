import type { HeadProps } from "@/types/types";

const Head = ({title, description, className}: HeadProps) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Head;
