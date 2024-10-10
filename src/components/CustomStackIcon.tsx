import StackIcon from "tech-stack-icons";

type CustomStackIconProps = {
  name: string;
  label: string;
};
const CustomStackIcon = ({ name, label }: CustomStackIconProps) => {
  return (
    <figure className="flex flex-col gap-2 items-center">
      <StackIcon name={name} className="w-2/3" />
      <figcaption className="text-xs text-slate-600">{label}</figcaption>
    </figure>
  );
};

export default CustomStackIcon;
