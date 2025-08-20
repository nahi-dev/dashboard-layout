import React from "react";
import { MdManageSearch } from "react-icons/md";

import SearchPage from "../search/page";
import Pagination from "../pagination/pagination";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      <div className=" p-[20px] bg-[var(--bgSoft)] ml-[20px] mr-[20px] rounded-[10px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex p-[8px] gap-2.5 bg-[#2e374a] rounded-[10px]">
            <MdManageSearch size={20} />
            <SearchPage placeholder="Search for a product..." />
          </div>
          <Link
            href="/dashboard/products/add"
            className="bg-[#330b55] px-[6px] py-[6px] rounded-[5px]"
          >
            Add New
          </Link>
        </div>
        <div>
          <table className="w-full text-sm tracking-wider text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Created on</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src="/user_avatar.jpg"
                      alt="user"
                      height={40}
                      width={40}
                      className="rounded-full object-cover"
                    />
                    iphone
                  </div>
                </td>
                <td>fhsdfk dfvbjk sdhfksdh</td>
                <td>$133</td>
                <td>Nov 22 2025</td>
                <td>30</td>

                <td>
                  <div className="flex gap-2">
                    <button className="bg-[#04b9b9] px-[10px] py-[2px] rounded-[5px]">
                      view
                    </button>
                    <button className="bg-[crimson] px-[10px] py-[2px] rounded-[5px]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src="/user_avatar.jpg"
                      alt="user"
                      height={40}
                      width={40}
                      className="rounded-full object-cover"
                    />
                    iphone
                  </div>
                </td>
                <td>fhsdfk dfvbjk sdhfksdh</td>
                <td>$133</td>
                <td>Nov 22 2025</td>
                <td>30</td>

                <td>
                  <div className="flex gap-2">
                    <button className="bg-[#04b9b9] px-[10px] py-[2px] rounded-[5px]">
                      view
                    </button>
                    <button className="bg-[crimson] px-[10px] py-[2px] rounded-[5px]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};
export default ProductsPage;
