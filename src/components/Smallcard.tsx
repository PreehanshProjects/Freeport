import type { LucideIcon } from "lucide-react";

type SmallCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
};

const SmallCard = ({ title, value, icon: Icon }: SmallCardProps) => (
  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4 shadow-sm">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
    <Icon className="w-6 h-6 text-primary" />
  </div>
);

export default SmallCard;
