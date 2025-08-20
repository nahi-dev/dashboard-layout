import React from "react";
import { MdManageSearch } from "react-icons/md";
import "./user.css";
import SearchPage from "../search/page";
import Pagination from "../pagination/pagination";
import Link from "next/link";
const UserPage = () => {
  return (
    <div>
      <div className=" p-[20px] bg-[var(--bgSoft)] ml-[20px] mr-[20px] rounded-[10px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex p-[8px] gap-2.5 bg-[#2e374a] rounded-[10px]">
            <MdManageSearch size={20} />
            <SearchPage placeholder="Search for a user..." />
          </div>
          <Link
            href="/dashboard/user/add"
            className="bg-[#330b55] px-[6px] py-[6px] rounded-[5px]"
          >
            Add New
          </Link>
        </div>
        <div>
          <table className="w-full text-sm tracking-wider text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th> Name</th>
                <th>Email</th>
                <th>Created on</th>
                <th>Role</th>
                <th>Status</th>
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
                      className="rounded-full"
                    />
                    John Doe
                  </div>
                </td>
                <td>johndoe@example.com</td>
                <td>Nov 22 2025</td>
                <td>client</td>
                <td>passive</td>
                <td>
                  <div className="flex gap-2">
                    <Link href="/">
                      <button className="bg-[#04b9b9] px-[10px] py-[2px] rounded-[5px]">
                        view
                      </button>
                    </Link>
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
                    John Doe
                  </div>
                </td>
                <td>johndoe@example.com</td>
                <td>Nov 22 2025</td>
                <td>client</td>
                <td>passive</td>
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

export default UserPage;
