const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow p-4">
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    {children}
  </div>
);

export default Card;
