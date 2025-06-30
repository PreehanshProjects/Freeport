import { useState, useMemo } from "react";

const deliveries = [
  { id: "D001", item: "Box A", status: "Pending" },
  { id: "D002", item: "Box B", status: "Completed" },
  { id: "D003", item: "Box C", status: "In Progress" },
  { id: "D004", item: "Box D", status: "Pending" },
  { id: "D005", item: "Box E", status: "Completed" },
  { id: "D006", item: "Box F", status: "In Progress" },
  { id: "D007", item: "Box G", status: "Pending" },
  { id: "D008", item: "Box H", status: "Completed" },
];

const statuses = ["All", "Pending", "In Progress", "Completed"];

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

const Delivery = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter deliveries by status
  const filtered = useMemo(() => {
    if (statusFilter === "All") return deliveries;
    return deliveries.filter((d) => d.status === statusFilter);
  }, [statusFilter]);

  // Pagination logic
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

  return (
    <div className="max-w-7xl w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Delivery</h2>

      <div className="mb-6 flex items-center gap-4">
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

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["ID", "Item", "Status"].map((heading) => (
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
                  No deliveries found.
                </td>
              </tr>
            ) : (
              paginated.map(({ id, item, status }) => (
                <tr
                  key={id}
                  className="hover:bg-primary/10 transition-colors cursor-default"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-900">
                    {id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : status === "Completed"
                          ? "bg-green-100 text-green-800"
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

      {/* Modern Pagination */}
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

export default Delivery;
