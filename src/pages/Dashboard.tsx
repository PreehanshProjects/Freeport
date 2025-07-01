import Card from "../components/Card";
import {
  Truck,
  Loader2,
  CheckCircle,
  CalendarClock,
  PackageSearch,
  Bell,
  Users,
  Eye,
} from "lucide-react";
import SmallCard from "../components/Smallcard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* First Row: 3 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Delivery Summary */}
        <Card title="Delivery Summary">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <SmallCard title="Pending Orders" value={12} icon={Truck} />
            <SmallCard title="In Progress" value={8} icon={Loader2} />
            <SmallCard title="Completed" value={22} icon={CheckCircle} />
            <SmallCard title="Scheduled" value={5} icon={CalendarClock} />
          </div>
          <button className="flex items-center justify-center gap-2 w-full border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
            <Eye className="w-5 h-5" />
            View Delivery Summary
          </button>
        </Card>

        {/* Stock Overview */}
        <Card title="Stock Overview">
          <div className="grid grid-cols-1 gap-4">
            <SmallCard
              title="Current Stock Level"
              value={350}
              icon={PackageSearch}
            />
            <SmallCard title="Stock Summary" value={14} icon={PackageSearch} />
            <SmallCard title="Stock Movement" value={9} icon={Loader2} />
          </div>
        </Card>

        {/* Order Summary */}
        <Card title="Order Summary">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <SmallCard title="Pending Orders" value={10} icon={Truck} />
            <SmallCard title="Orders In Progress" value={6} icon={Loader2} />
            <SmallCard title="Completed Orders" value={19} icon={CheckCircle} />
          </div>
          <button className="flex items-center justify-center gap-2 w-full border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
            <Eye className="w-5 h-5" />
            View Order Overview
          </button>
        </Card>
      </div>

      {/* Second Row: 2 Wider Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Alert and Notifications */}
        <Card title="Alerts & Notifications">
          <div className="text-gray-600 space-y-2">
            <p>
              <Bell className="inline w-4 h-4 text-primary mr-2" /> Scheduled
              delivery tomorrow
            </p>
            <p>
              <Bell className="inline w-4 h-4 text-primary mr-2" /> Stock
              running low for Item X
            </p>
          </div>
        </Card>

        {/* User Activity (takes 2 columns) */}
        <Card title="User Activity">
          <div className="text-gray-600 space-y-2">
            <p>
              <Users className="inline w-4 h-4 text-primary mr-2" /> John
              created a delivery order
            </p>
            <p>
              <Users className="inline w-4 h-4 text-primary mr-2" /> Sarah
              updated stock levels
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
