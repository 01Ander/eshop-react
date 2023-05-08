interface OrderCardProps {
  order: myOrder;
}

export const OrderCards = ({ order }: OrderCardProps) => {
  const { totalProducts, total, date } = order;
  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg py-2 px-4">
      <p className="flex gap-4">
        <span className="font-light">Date: {date.toLocaleDateString()}</span>
        <span className="font-light">Total Products: {totalProducts}</span>
        <span className="font-medium">Total: ${total}</span>
      </p>
    </div>
  );
};
