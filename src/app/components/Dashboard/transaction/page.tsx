import React from "react";
import "./transaction.css";

const Transaction = () => {
  return (
    <div>
      <div className="transaction max-h-[400px] p-[20px] overflow-y-auto box-border">
        <h2 className="text-[gray] text-[24px] font-[200]">
          Latest Transactions
        </h2>
        <div>
          <table className="w-full text-sm tracking-wider text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm tracking-wider text-left  ">
                <td className="text-left py-2">Name</td>
                <td className="text-left py-2">Status</td>
                <td className="text-left  py-2">Date</td>
                <td className="text-left  py-2">Amount</td>
              </tr>
            </thead>
            <tbody>
              <tr className="py-4">
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src="/user_avatar.jpg"
                      alt="Transaction"
                      height={40}
                      width={40}
                    />
                    John Doe
                  </div>
                </td>

                <td>
                  <span className="bg-[#00ff0042] p-1.5 rounded-[5px]">
                    Completed{" "}
                  </span>
                </td>

                <td className="text-left">2023-10-01</td>
                <td className="text-left">$100.00</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src="/user_avatar.jpg"
                      alt="Transaction"
                      height={40}
                      width={40}
                    />
                    John Doe
                  </div>
                </td>
                <td>
                  <span className="bg-[#ffff004d] p-1.5 rounded-[5px]">
                    Pending
                  </span>
                </td>
                <td>2023-10-01</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src="/user_avatar.jpg"
                      alt="Transaction"
                      height={40}
                      width={40}
                    />
                    John Doe
                  </div>
                </td>
                <td>
                  <span className="bg-[#ffff004d] p-1.5 rounded-[5px]">
                    Pending
                  </span>
                </td>
                <td>2023-10-01</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src="/user_avatar.jpg"
                      alt="Transaction"
                      height={40}
                      width={40}
                    />
                    John Doe
                  </div>
                </td>

                <td>
                  <span className="bg-[#00ff0042] p-1.5 rounded-[5px]">
                    Completed{" "}
                  </span>
                </td>

                <td className="text-left">2023-10-01</td>
                <td className="text-left">$100.00</td>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src="/user_avatar.jpg"
                      alt="Transaction"
                      height={40}
                      width={40}
                    />
                    John Doe
                  </div>
                </td>
                <td>
                  <span className="bg-[#99060652] p-1.5 rounded-[5px]">
                    Cancelled
                  </span>
                </td>
                <td>2023-10-01</td>
                <td>$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
