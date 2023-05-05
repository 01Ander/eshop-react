import { XCircleIcon } from "@heroicons/react/24/outline";

export const ProductDetail = (): JSX.Element => {
  return (
    <aside className="product-detail flex flex-col  fixed right-0 border border-black rounded-lg bg-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </aside>
  );
};
