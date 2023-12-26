import Link from "next/link";
import DeleteProduct from "../deleteproduct/page";
import AddProduct from "../addproduct/page";
import UpdateProduct from "../updateproduct/page";
import { Table } from "react-bootstrap";

type Product = {
  id: number;
  title: string;
  price: string;
};

// Helper function to format price as Rupiah
function formatPrice(price: string): string {
  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const formattedPrice = numberFormat.format(parseInt(price));
  return formattedPrice;
}

async function getProduct() {
  const res = await fetch("http://localhost:3004/product", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProduct();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <Table striped>
        <thead>
          <tr>
            <th className="text-left">No</th>
            <th className="text-left">Product Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{formatPrice(product.price)}</td>
              <td className="flex">
                {/* <Link
                  className="mr-3 bg-green-600 py-1 px-2 text-sm text-white rounded-lg"
                  href={`/updateproduct/${product.id}`}
                >
                  Edit
                </Link> */}
                <UpdateProduct {...product} />
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
