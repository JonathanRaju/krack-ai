"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  CreditCard,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Search,
  X,
  Mail,
} from "lucide-react";

interface Payment {
  orderId: string;
  planId?: string;
  planName?: string;
  originalPrice?: number;
  offerPrice?: number;
  minutes?: number;
  bonusMinutes?: number;
  status: string;
  createdAt?: number;
}

interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
  experience?: string;
  techStack?: string;
  codingLanguages?: string;
  projects?: string;
  timer?: number;
  disabled?: boolean;
  isAdmin?: boolean;
  isLoggedIn?: boolean;
  createdAt?: number;

  paymentCount: number;
  totalSpent: number;
  payments: Payment[];
  pendingPayment: Payment | null;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateSort, setDateSort] = useState<"newest" | "oldest">("newest");
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [paymentFilter, setPaymentFilter] = useState<
  "all" | "active" | "pending"
>("all");

  useEffect(() => {
    getUsers();
  }, []);

const filteredUsers = useMemo(() => {
  const search = searchTerm.trim().toLowerCase();

  const result = users.filter((user) => {
    /*
     * SEARCH
     */
    const searchableText = [
      user.id,
      user.firstName,
      user.lastName,
      `${user.firstName || ""} ${user.lastName || ""}`,
      user.email,
      user.phone,
      user.role,
      user.experience,
      user.techStack,
      user.codingLanguages,
      user.projects,
      user.isAdmin ? "admin" : "",
      user.disabled ? "disabled" : "active",

      user.paymentCount,
      user.totalSpent,

      ...(user.payments || []).flatMap((payment) => [
        payment.orderId,
        payment.planId,
        payment.planName,
        payment.status,
        payment.originalPrice,
        payment.offerPrice,
        payment.minutes,
        payment.bonusMinutes,
      ]),

      user.pendingPayment?.orderId,
      user.pendingPayment?.planId,
      user.pendingPayment?.planName,
      user.pendingPayment?.status,
      user.pendingPayment?.offerPrice,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !search || searchableText.includes(search);

    /*
     * DATE FILTER
     */
    const userDate = user.createdAt
      ? new Date(user.createdAt)
      : null;

    const matchesFromDate =
      !fromDate ||
      (userDate &&
        userDate >= new Date(`${fromDate}T00:00:00`));

    const matchesToDate =
      !toDate ||
      (userDate &&
        userDate <= new Date(`${toDate}T23:59:59.999`));

    /*
     * PAYMENT FILTER
     */
    const hasPendingPayment = !!user.pendingPayment;

    const hasActivePayment =
      Number(user.paymentCount || 0) > 0;

    let matchesPaymentFilter = true;

    if (paymentFilter === "pending") {
      matchesPaymentFilter = hasPendingPayment;
    }

    if (paymentFilter === "active") {
      matchesPaymentFilter = hasActivePayment;
    }

    return (
      matchesSearch &&
      matchesFromDate &&
      matchesToDate &&
      matchesPaymentFilter
    );
  });

  /*
   * DATE SORT
   */
  result.sort((a, b) => {
    const dateA = a.createdAt || 0;
    const dateB = b.createdAt || 0;

    return dateSort === "newest"
      ? dateB - dateA
      : dateA - dateB;
  });

  return result;
}, [
  users,
  searchTerm,
  fromDate,
  toDate,
  dateSort,
  paymentFilter,
]);

const toggleEmailSelection = (email?: string) => {
  if (!email) return;

  setSelectedEmails((current) => {
    if (current.includes(email)) {
      return current.filter((item) => item !== email);
    }

    return [...current, email];
  });
};

const selectableEmails = filteredUsers
  .map((user) => user.email)
  .filter((email): email is string => Boolean(email));

const allFilteredSelected =
  selectableEmails.length > 0 &&
  selectableEmails.every((email) =>
    selectedEmails.includes(email)
  );

  const toggleSelectAll = () => {
  if (allFilteredSelected) {
    // Remove only currently visible/filtered users
    setSelectedEmails((current) =>
      current.filter(
        (email) => !selectableEmails.includes(email)
      )
    );
  } else {
    // Add currently filtered users
    setSelectedEmails((current) => [
      ...new Set([
        ...current,
        ...selectableEmails,
      ]),
    ]);
  }
};

const downloadSelectedUsersCSV = () => {
  if (selectedEmails.length === 0) return;

  const csvContent = [
    "Email ",
    ...selectedEmails,
  ].join("\n");

  const blob = new Blob(
    [csvContent],
    { type: "text/csv;charset=utf-8;" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;

  link.download = `selected-emails-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

const sendBulkEmail = async () => {
  try {
    setEmailError("");

    if (selectedEmails.length === 0) {
      setEmailError("Please select at least one user.");
      return;
    }

    if (!emailSubject.trim()) {
      setEmailError("Please enter an email subject.");
      return;
    }

    if (!emailBody.trim()) {
      setEmailError("Please enter the email body.");
      return;
    }

    setSendingEmail(true);

    const response = await fetch("/api/send-bulk-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emails: selectedEmails,
        subject: emailSubject.trim(),
        body: emailBody,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Failed to send emails"
      );
    }

    alert(
      `Email sent successfully to ${data.totalEmails} users.`
    );

    // Reset
    setSelectedEmails([]);
    setEmailSubject("");
    setEmailBody("");
    setEmailError("");
    setShowEmailModal(false);

  } catch (error) {
    console.error("Send email error:", error);

    setEmailError(
      error instanceof Error
        ? error.message
        : "Failed to send emails."
    );
  } finally {
    setSendingEmail(false);
  }
};

const clearFilters = () => {
  setSearchTerm("");
  setFromDate("");
  setToDate("");
  setDateSort("newest");
};

  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/users");
      const data = await response.json();

      if (data.success) {
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp?: number) => {
    if (!timestamp) return "-";

    return new Date(timestamp).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (timestamp?: number) => {
    if (!timestamp) return "-";

    return new Date(timestamp).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleUser = (email: string) => {
    setExpandedUser(
      expandedUser === email ? null : email
    );
  };

  const totalUsers = filteredUsers.length;

const totalRevenue = filteredUsers.reduce(
  (total, user) => total + Number(user.totalSpent || 0),
  0
);

const totalPayments = filteredUsers.reduce(
  (total, user) =>
    total + Number(user.paymentCount || 0),
  0
);

const pendingPayments = filteredUsers.filter(
  (user) => user.pendingPayment
).length;

  return (
    <main className="min-h-screen bg-[#fafafa] p-6 md:p-10">
      {showEmailModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-5 border-b">

        <div>
          <h2 className="text-xl font-bold text-[#020826]">
            Send Email
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Sending to{" "}
            <span className="font-semibold text-blue-600">
              {selectedEmails.length}
            </span>{" "}
            selected users
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            if (!sendingEmail) {
              setShowEmailModal(false);
              setEmailError("");
            }
          }}
          className="p-2 rounded-lg hover:bg-slate-100 transition"
        >
          <X size={20} />
        </button>

      </div>

      {/* BODY */}
      <div className="p-6 space-y-5">

        {/* RECIPIENTS */}
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Recipients
          </label>

          <div className="border border-slate-200 rounded-xl bg-slate-50 p-3 max-h-24 overflow-y-auto">

            <div className="flex flex-wrap gap-2">

              {selectedEmails.map((email) => (
                <span
                  key={email}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
                >
                  {email}
                </span>
              ))}

            </div>

          </div>
        </div>

        {/* SUBJECT */}
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Subject
          </label>

          <input
            type="text"
            value={emailSubject}
            onChange={(e) =>
              setEmailSubject(e.target.value)
            }
            placeholder="Enter email subject"
            className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={sendingEmail}
          />
        </div>

        {/* BODY */}
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Email Body
          </label>

          <textarea
            value={emailBody}
            onChange={(e) =>
              setEmailBody(e.target.value)
            }
            placeholder="Enter your email content..."
            rows={10}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
            disabled={sendingEmail}
          />

          <p className="text-xs text-slate-400 mt-2">
            You can enter HTML content for formatted emails.
          </p>
        </div>

        {/* ERROR */}
        {emailError && (
          <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {emailError}
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div className="px-3 py-3 border-t bg-slate-50 flex items-center justify-end gap-3">

        <button
          type="button"
          onClick={() => {
            setShowEmailModal(false);
            setEmailError("");
          }}
          disabled={sendingEmail}
          className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium hover:bg-slate-100 transition disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={sendBulkEmail}
          disabled={sendingEmail}
          className="px-6 py-2.5 rounded-xl bg-[#020826] text-white font-semibold hover:bg-[#101936] transition disabled:opacity-50 flex items-center gap-2"
        >
          {sendingEmail ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail size={17} />
              Send to {selectedEmails.length} Users
            </>
          )}
        </button>

      </div>

    </div>

  </div>
)}

      {/* HEADER */}

      <div className="max-w-[1600px] mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#020826]">
            Users
          </h1>

          <p className="mt-2 text-slate-500">
            View users, payments, revenue and pending transactions.
          </p>
        </div>


        {/* SUMMARY CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Total Users
                </p>

                <p className="text-3xl font-bold text-[#020826] mt-2">
                  {totalUsers}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50">
                <Users className="text-blue-600" />
              </div>
            </div>
          </div>


          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Successful Payments
                </p>

                <p className="text-3xl font-bold text-[#020826] mt-2">
                  {totalPayments}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-green-50">
                <CheckCircle className="text-green-600" />
              </div>
            </div>
          </div>


          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Total Revenue
                </p>

                <p className="text-3xl font-bold text-[#020826] mt-2">
                  ₹{totalRevenue.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-pink-50">
                <CreditCard className="text-pink-600" />
              </div>
            </div>
          </div>


          <div className="bg-white border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Pending Payments
                </p>

                <p className="text-3xl font-bold text-[#020826] mt-2">
                  {pendingPayments}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-yellow-50">
                <Clock className="text-yellow-600" />
              </div>
            </div>
          </div>

        </div>

        {/* FILTERS */}
<div className="bg-white border rounded-2xl p-5 mb-6">
  <div className="grid grid-cols-1 xl:grid-cols-[minmax(400px,1fr)_200px_200px_210px_202px_116px] gap-5 items-end">

    {/* SEARCH */}
    {/* PAYMENT FILTER */}

    <div>
      <label className="block text-sm font-semibold text-slate-500 mb-2">
        Search
      </label>

      <div className="relative">
        <Search
          size={21}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, phone, order ID, plan, role, tech stack..."
          className="w-full h-[50px] pl-11 pr-10 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[16px]"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>

    {/* FROM DATE */}
    <div>
      <label className="block text-sm font-semibold text-slate-500 mb-2">
        From Date
      </label>

      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="w-full h-[50px] px-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>

    {/* TO DATE */}
    <div>
      <label className="block text-sm font-semibold text-slate-500 mb-2">
        To Date
      </label>

      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="w-full h-[50px] px-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>

    {/* SORT */}
    <div>
      <label className="block text-sm font-semibold text-slate-500 mb-2">
        Joined
      </label>

      <select
        value={dateSort}
        onChange={(e) =>
          setDateSort(e.target.value as "newest" | "oldest")
        }
        className="w-full h-[50px] px-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <option value="newest">
          Newest First
        </option>

        <option value="oldest">
          Oldest First
        </option>
      </select>
    </div>

    {/* CLEAR */}
    <div>
      <label className="block text-sm font-semibold text-transparent mb-2">
        Clear
      </label>

      <button
        type="button"
        onClick={clearFilters}
        className="w-full h-[50px] px-5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition font-medium"
      >
        Clear
      </button>
    </div>
  </div>
  <div>
  <label className="block text-sm font-semibold text-slate-500 mb-2">
    Payment Status
  </label>

  <select
    value={paymentFilter}
    onChange={(e) =>
      setPaymentFilter(
        e.target.value as "all" | "active" | "pending"
      )
    }
    className="w-full h-[50px] px-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
  >
    <option value="all">
      All Users
    </option>

    <option value="active">
      Active Payments
    </option>

    <option value="pending">
      Pending Payments
    </option>
  </select>
</div>

  {/* FILTER RESULT */}
  <div className="mt-5 flex items-center justify-between text-sm">
    <p className="text-slate-500">
      Showing{" "}
      <span className="font-semibold text-slate-800">
        {filteredUsers.length}
      </span>{" "}
      of{" "}
      <span className="font-semibold text-slate-800">
        {users.length}
      </span>{" "}
      users
    </p>

    {(searchTerm || fromDate || toDate) && (
      <p className="text-blue-600 font-medium">
        Filters active
      </p>
    )}
  </div>
</div>

{selectedEmails.length > 0 && (
  <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 flex items-center justify-between">

    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
        {selectedEmails.length}
      </div>

      <div>
        <p className="font-semibold text-blue-900">
          {selectedEmails.length} users selected
        </p>

        <p className="text-xs text-blue-600">
          These users are ready to receive an email.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3">

      <button
        type="button"
        onClick={() => setSelectedEmails([])}
        className="px-4 py-2 rounded-lg border border-blue-200 bg-white text-blue-700 text-sm font-medium hover:bg-blue-100 transition"
      >
        Clear Selection
      </button>

      <button
  type="button"
  onClick={() => {
    setEmailError("");
    setShowEmailModal(true);
  }}
  className="px-5 py-2 rounded-lg bg-[#020826] text-white text-sm font-semibold hover:bg-[#101936] transition flex items-center gap-2"
>
  <Mail size={16} />
  Send Email ({selectedEmails.length})
</button>
      <button
  type="button"
  onClick={downloadSelectedUsersCSV}
  className="px-5 py-2 rounded-lg border border-green-200 bg-white text-green-700 text-sm font-semibold hover:bg-green-50 transition"
>
  Download CSV ({selectedEmails.length})
</button>

    </div>
  </div>
)}


        {/* TABLE */}

        <div className="bg-white border rounded-2xl overflow-hidden">

          {loading ? (

            <div className="py-20 text-center text-slate-500">
              Loading users...
            </div>

          ) : users.length === 0 ? (
  <div className="py-20 text-center text-slate-500">
    No users found.
  </div>
) : filteredUsers.length === 0 ? (
  <div className="py-20 text-center">
    <Search className="mx-auto text-slate-300 mb-3" size={40} />

    <p className="text-lg font-semibold text-slate-700">
      No matching users
    </p>

    <p className="text-sm text-slate-400 mt-1">
      Try changing your search or date filters.
    </p>

    <button
      onClick={clearFilters}
      className="mt-4 px-4 py-2 rounded-lg bg-[#020826] text-white text-sm font-medium"
    >
      Clear Filters
    </button>
  </div>
) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1000px]">

                <thead>
                  <tr className="bg-slate-50 border-b">
                    <th className="px-3 py-3 w-[55px]">
      <input
        type="checkbox"
        checked={allFilteredSelected}
        onChange={toggleSelectAll}
        disabled={selectableEmails.length === 0}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />
    </th>

                    <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                      User
                    </th>

                    <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                      Contact
                    </th>


                    {/* <th className="px-3 py-3 text-center text-sm font-semibold text-slate-600">
                      Payments
                    </th> */}

                    <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                      Total Spent
                    </th>

                    <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                      Latest Pending
                    </th>

                    <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                      Joined
                    </th>

                    <th className="px-3 py-3 text-center text-sm font-semibold text-slate-600">
                      Status
                    </th>

                    {/* <th className="px-3 py-3 text-center text-sm font-semibold text-slate-600">
                      Details
                    </th> */}

                  </tr>
                </thead>


                <tbody>

                  {filteredUsers.map((user) => (

                    <>
                      <tr
                      onClick={() =>
                              // @ts-ignore
                              toggleUser(user.email)
                            }
                        key={user.email}
                        className="border-b hover:bg-slate-50 transition"
                      >

                        {/* USER */}
                        <td className="px-4 py-5 w-[55px]">
  <input
    type="checkbox"
    checked={
      !!user.email &&
      selectedEmails.includes(user.email)
    }
    onChange={() =>
      toggleEmailSelection(user.email)
    }
    disabled={!user.email}
    className="w-4 h-4 accent-blue-600 cursor-pointer"
  />
</td>

                        <td className="px-3 py-3">

                          <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                              {(user.firstName?.[0] || "U").toUpperCase()}
                            </div>

                            <div>
                              <p className="font-semibold text-[#020826]">
                                {user.firstName} {user.lastName}
                              </p>

                              {user.isAdmin && (
                                <span className="text-xs text-purple-600 font-semibold">
                                  Admin
                                </span>
                              )}
                            </div>

                          </div>

                        </td>


                        {/* CONTACT */}

                        <td className="px-4 py-5">

                          <p className="text-sm text-[#020826]">
                            {user.email}
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            {user.phone || "-"}
                          </p>

                        </td>


                        {/* PAYMENTS */}

                        {/* <td className="px-4 py-5 text-center">

                          <span className="inline-flex items-center justify-center min-w-[35px] px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">
                            {user.paymentCount}
                          </span>

                        </td> */}


                        {/* TOTAL SPENT */}

                        <td className="px-4 py-5 text-left">

                          <span className="font-bold text-[#020826]">
                            ₹
                            {Number(
                              user.totalSpent || 0
                            ).toLocaleString("en-IN")}
                          </span>

                        </td>


                        {/* PENDING */}

                        <td className="px-4 py-5">

                          {user.pendingPayment ? (

                            <div>

                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                                <AlertCircle size={14} />
                                Pending
                              </span>

                              <p className="text-sm font-semibold mt-2">
                                {user.pendingPayment.planName || "Plan"}
                                {" · "}
                                ₹
                                {Number(
                                  user.pendingPayment.offerPrice || 0
                                ).toLocaleString("en-IN")}
                              </p>

                              <p className="text-xs text-slate-400 mt-1">
                                {formatDateTime(
                                  user.pendingPayment.createdAt
                                )}
                              </p>

                            </div>

                          ) : (

                            <span className="text-sm text-slate-400">
                              No pending payment
                            </span>

                          )}

                        </td>


                        {/* JOINED */}

                        <td className="px-4 py-5 text-sm text-slate-600">
                          {formatDate(user.createdAt)}
                        </td>


                        {/* STATUS */}

                        <td className="px-4 py-5 text-center">

                          {user.disabled ? (

                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                              Disabled
                            </span>

                          ) : (

                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                              Active
                            </span>

                          )}

                        </td>


                        {/* DETAILS */}

                        {/* <td className="px-4 py-5 text-center">

                          <button
                            onClick={() =>
                              // @ts-ignore
                              toggleUser(user.email)
                            }
                            className="p-2 rounded-lg hover:bg-slate-100 transition"
                          >

                            {expandedUser === user.email ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}

                          </button>

                        </td> */}

                      </tr>


                      {/* EXPANDED PAYMENT DETAILS */}

                      {expandedUser === user.email && (

                        <tr key={`${user.email}-details`}>
                          <td
                            colSpan={10}
                            className="bg-slate-50 px-3 py-6"
                          >

                            <div className="grid md:grid-cols-3 gap-5 mb-6">

                              <div className="bg-white border rounded-xl p-5">
                                <p className="text-sm text-slate-500">
                                  Current Minutes
                                </p>

                                <p className="text-2xl font-bold mt-1">
                                  {user.timer || 0}
                                </p>
                              </div>

                              <div className="bg-white border rounded-xl p-5">
                                <p className="text-sm text-slate-500">
                                  Successful Payments
                                </p>

                                <p className="text-2xl font-bold mt-1">
                                  {user.paymentCount}
                                </p>
                              </div>

                              <div className="bg-white border rounded-xl p-5">
                                <p className="text-sm text-slate-500">
                                  Total Spent
                                </p>

                                <p className="text-2xl font-bold mt-1">
                                  ₹
                                  {Number(
                                    user.totalSpent || 0
                                  ).toLocaleString("en-IN")}
                                </p>
                              </div>

                            </div>


                            {/* PAYMENT HISTORY */}

                            <div className="bg-white border rounded-xl overflow-hidden">

                              <div className="px-3 py-3 border-b">
                                <h3 className="font-bold text-lg">
                                  Payment History
                                </h3>
                              </div>

                              {user.payments.length === 0 ? (

                                <div className="p-6 text-center text-slate-400">
                                  No successful payments.
                                </div>

                              ) : (

                                <div className="overflow-x-auto">

                                  <table className="w-full table-fixed text-sm">

                                    <thead>
                                      <tr className="bg-slate-50">

                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                                          Order ID
                                        </th>

                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                                          Plan
                                        </th>

                                        <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500">
                                          Original
                                        </th>

                                        <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500">
                                          Paid
                                        </th>

                                        <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500">
                                          Minutes
                                        </th>

                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                                          Date
                                        </th>

                                      </tr>
                                    </thead>

                                    <tbody>

                                      {user.payments.map(
                                        (payment) => (

                                          <tr
                                            key={payment.orderId}
                                            className="border-t"
                                          >

                                            <td className="px-3 py-3 text-sm font-mono">
                                              {payment.orderId}
                                            </td>

                                            <td className="px-3 py-3">
                                              <p className="font-semibold text-sm">
                                                {payment.planName || "-"}
                                              </p>

                                              <p className="text-xs text-slate-400">
                                                {payment.planId || "-"}
                                              </p>
                                            </td>

                                            <td className="px-3 py-3 text-right text-sm text-slate-400">
                                              ₹
                                              {Number(
                                                payment.originalPrice || 0
                                              ).toLocaleString("en-IN")}
                                            </td>

                                            <td className="px-3 py-3 text-right font-bold text-sm">
                                              ₹
                                              {Number(
                                                payment.offerPrice ||
                                                0
                                              ).toLocaleString("en-IN")}
                                            </td>

                                            <td className="px-3 py-3 text-center text-sm">
                                              {payment.minutes || 0}

                                              {payment.bonusMinutes ? (
                                                <span className="text-green-600 text-xs ml-1">
                                                  +{payment.bonusMinutes}
                                                </span>
                                              ) : null}
                                            </td>

                                            <td className="px-3 py-3 text-sm text-slate-500">
                                              {formatDateTime(
                                                payment.createdAt
                                              )}
                                            </td>

                                          </tr>

                                        )
                                      )}

                                    </tbody>

                                  </table>

                                </div>

                              )}

                            </div>

                          </td>
                        </tr>

                      )}

                    </>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}