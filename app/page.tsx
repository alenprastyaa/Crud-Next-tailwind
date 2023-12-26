import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="px-5 py-5">
      <p className=" text-center font-bold  text-5xl">
        Wel<span className="text-blue-600">come</span> To Ho
        <span className="text-blue-600">me</span> Page
      </p>
      <p className="mt-5 text-2xl font-bold uppercase">
        Alen Pra<span className="text-blue-600">stya</span>
      </p>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        nostrum reiciendis, dolore ducimus adipisci eius architecto nemo minus
        accusantium voluptas fuga aspernatur qui amet pariatur nam hic quasi
        autem enim? Earum eaque a illo cumque perferendis. Laudantium voluptas
        facilis sed!
      </p>
      <p className="mt-3 italic">
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem
        laboriosam recusandae ipsa facere consequuntur optio tempore sed nemo
        temporibus! "
      </p>
      <p className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        accusantium cum animi nam eligendi non, iusto tenetur hic error
        similique, dolores corrupti! Quam, neque laboriosam aperiam deserunt
        labore ipsam aspernatur culpa obcaecati officiis nemo ut eos, sed at
        harum, cumque placeat repellat dolorem. Harum nulla eveniet delectus
        mollitia, laboriosam officiis.
      </p>
      <div className="inline">
        <br />
        <Link
          style={{ textDecoration: "none" }}
          className="font-bold inline-block bg-green-600 hover:bg-green-900 text-white px-2 py-2 rounded-xl"
          href="/products"
        >
          Goto Product
        </Link>
        <br />
      </div>
    </div>
  );
}
