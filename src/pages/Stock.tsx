import { useState, useMemo } from "react";
import { Box, Clock, Activity } from "lucide-react"; // Icons for tabs

const stockItems = [
  { item: "Item A", quantity: 24, status: "In Stock" },
  { item: "Item B", quantity: 0, status: "Out of Stock" },
  { item: "Item C", quantity: 5, status: "Low Stock" },
  { item: "Item D", quantity: 12, status: "In Stock" },
  { item: "Item E", quantity: 1, status: "Low Stock" },
  { item: "Item F", quantity: 0, status: "Out of Stock" },
];

const statuses = ["All", "In Stock", "Low Stock", "Out of Stock"];

const PAGE_SIZE = 4;

const PaginationButton = ({
  children,
  onClick,
  disabled,
  active = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-3 py-1 rounded-full
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
      ${
        active
          ? "bg-primary text-white shadow"
          : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
      }
      ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    `}
  >
    {children}
  </button>
);

const Stock = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Track active tab (but no action on click yet)
  const [activeTab, setActiveTab] = useState("Current Levels");

  const filtered = useMemo(() => {
    if (statusFilter === "All") return stockItems;
    return stockItems.filter((s) => s.status === statusFilter);
  }, [statusFilter]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, pageCount));
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  // Tab click handler: only sets active tab, no other action
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-[1600px] w-full mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Stock</h2>

      {/* Floating Tabs */}
      <nav className="flex space-x-4 bg-white rounded-xl shadow-md px-4 py-2 w-max select-none cursor-pointer">
        {[
          { name: "Current Levels", icon: Box },
          { name: "History", icon: Clock },
          { name: "Movements", icon: Activity },
        ].map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleTabClick(name)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition-colors
              ${
                activeTab === name
                  ? "bg-primary text-white shadow"
                  : "text-gray-600 hover:bg-primary/20"
              }
            `}
            aria-current={activeTab === name ? "page" : undefined}
            type="button"
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{name}</span>
          </button>
        ))}
      </nav>

      {/* Filter */}
      <div className="flex items-center gap-4">
        <label htmlFor="status" className="font-medium text-gray-700">
          Filter by status:
        </label>
        <select
          id="status"
          value={statusFilter}
          onChange={handleStatusChange}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 focus:outline-none"
        >
          {statuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Item", "Quantity", "Status"].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No stock items found.
                </td>
              </tr>
            ) : (
              paginated.map(({ item, quantity, status }) => (
                <tr
                  key={item}
                  className="hover:bg-primary/10 transition-colors cursor-default"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-900">
                    {quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        status === "In Stock"
                          ? "bg-green-100 text-green-800"
                          : status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-800"
                          : status === "Out of Stock"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav
        className="mt-6 flex justify-center items-center space-x-2 select-none"
        aria-label="Pagination"
      >
        <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </PaginationButton>

        {[...Array(pageCount)].map((_, i) => {
          const page = i + 1;
          return (
            <PaginationButton
              key={page}
              onClick={() => setCurrentPage(page)}
              active={page === currentPage}
            >
              {page}
            </PaginationButton>
          );
        })}

        <PaginationButton onClick={handleNext} disabled={currentPage === pageCount}>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </PaginationButton>
      </nav>
    </div>
  );
};

export default Stock;
