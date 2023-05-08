import { XMarkIcon } from "@heroicons/react/24/outline";

interface OrderCardProps {
  product: Product;
  handleDelete?: (id: number) => void;
}

export const OrderCard = ({ product, handleDelete }: OrderCardProps) => {
  const { id, title, price, images } = product;
  const renderXMarkIcon = handleDelete ? (
    <XMarkIcon
      className="h-6 w-6 cursor-pointer"
      onClick={() => handleDelete(id)}
    />
  ) : null;
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};
