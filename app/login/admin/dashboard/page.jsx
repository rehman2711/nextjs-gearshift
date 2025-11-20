"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6">

      {/* PAGE TITLE */}
      <h2 className="bg-yellow-500 text-white py-5 mx-3 mb-8 text-center rounded-xl text-4xl font-extrabold shadow">
        Rental Car Dashboard
      </h2>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white rounded-xl p-6 shadow">
          <h5 className="text-xl font-semibold">Total Cars</h5>
          <p className="text-3xl mt-2">150</p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-6 shadow">
          <h5 className="text-xl font-semibold">Available Cars</h5>
          <p className="text-3xl mt-2">120</p>
        </div>

        <div className="bg-red-500 text-white rounded-xl p-6 shadow">
          <h5 className="text-xl font-semibold">Booked Cars</h5>
          <p className="text-3xl mt-2">30</p>
        </div>

      </div>

      {/* RECENT BOOKINGS */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold mb-4">Recent Bookings</h4>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full text-left bg-white border border-gray-200">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-3 font-semibold">Booking ID</th>
                <th className="p-3 font-semibold">Car Model</th>
                <th className="p-3 font-semibold">Customer</th>
                <th className="p-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">#001</td>
                <td className="p-3">Toyota Corolla</td>
                <td className="p-3">John Doe</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm bg-green-500 text-white rounded">
                    Confirmed
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">#002</td>
                <td className="p-3">Honda Civic</td>
                <td className="p-3">Jane Smith</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm bg-yellow-400 text-black rounded">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3">#003</td>
                <td className="p-3">Ford Focus</td>
                <td className="p-3">Mike Johnson</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm bg-red-500 text-white rounded">
                    Cancelled
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link
            href="/login/admin/add-car"
            className="bg-blue-600 text-white text-center py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add New Car
          </Link>

          <Link
            href="/login/admin/manage-bookings"
            className="bg-yellow-500 text-gray-900 text-center py-3 rounded-lg shadow hover:bg-yellow-400 transition"
          >
            Manage Bookings
          </Link>

          <Link
            href="/login/admin/car-reports"
            className="bg-green-600 text-white text-center py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            View Reports
          </Link>

        </div>
      </div>
    </div>
  );
}
