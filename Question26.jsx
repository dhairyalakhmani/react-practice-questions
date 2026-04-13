import React, { useMemo, useState } from "react";

const orders = [
  { id: 1, customerName: "Aarav", status: "Pending", amount: 1200 },
  { id: 2, customerName: "Meera", status: "Shipped", amount: 2500 },
  { id: 3, customerName: "Kabir", status: "Delivered", amount: 1800 },
  { id: 4, customerName: "Aisha", status: "Pending", amount: 900 },
];

export default function OrdersDashboard() {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");

  // TODO: memoize visibleOrders
  const visibleOrders = useMemo(() => {
    return orders.filter((order) => order.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  // TODO: memoize visibleTotal
  const visibleTotal = useMemo(() => {
    return visibleOrders.reduce((acc, val) => acc + val.amount, 0);
  }, [visibleOrders]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders Dashboard</h2>

      <input
        type="text"
        placeholder="Search by customer name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setActiveStatus("All")}>All</button>
        <button onClick={() => setActiveStatus("Pending")} style={{ marginLeft: "10px" }}>
          Pending
        </button>
        <button onClick={() => setActiveStatus("Shipped")} style={{ marginLeft: "10px" }}>
          Shipped
        </button>
        <button onClick={() => setActiveStatus("Delivered")} style={{ marginLeft: "10px" }}>
          Delivered
        </button>
      </div>

      <p style={{ marginTop: "15px" }}>Visible Orders: {visibleOrders.length}</p>
      <p>Total Value: ₹{visibleTotal}</p>

      <div style={{ marginTop: "15px" }}>
        {visibleOrders.length === 0 ?
        (<p>No orders found!!</p>) :
        (visibleOrders.map((order) => (
          <div key={order.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h4>{order.customerName}</h4>
            <p>Status: {order.status}</p>
            <p>₹{order.amount}</p>
          </div>
        )))}
      </div>
    </div>
  );
}