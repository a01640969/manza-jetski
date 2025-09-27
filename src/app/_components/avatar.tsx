import cn from "classnames";

type Props = {
  name: string;
  picture: string;
  className?: string;
  nameClassName?: string;
};

const Avatar = ({ name, picture, className, nameClassName }: Props) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className={cn("text-xl font-bold", nameClassName)}>{name}</div>
    </div>
  );
};

export default Avatar;
