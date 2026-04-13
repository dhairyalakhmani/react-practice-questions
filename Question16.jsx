import React, { useMemo, useState } from "react";

const expenses = [
    { id: 1, title: "Lunch", category: "Food", amount: 250 },
    { id: 2, title: "Cab Ride", category: "Travel", amount: 480 },
    { id: 3, title: "Electricity Bill", category: "Bills", amount: 1800 },
    { id: 4, title: "Coffee", category: "Food", amount: 180 },
];

export default function ExpenseDashboard() {
    const [activeCategory, setActiveCategory] = useState("All");

    // TODO: memoize filtered expenses
    const visibleExpenses = useMemo(() => {
        return activeCategory === "All" ? expenses : 
        expenses.filter((expense) => expense.category === activeCategory);
    }, [activeCategory]);

    // TODO: memoize total amount
    const totalAmount = useMemo(() => {
        return visibleExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    }, [visibleExpenses]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Expense Dashboard</h2>

            <button onClick={() => setActiveCategory("All")}>All</button>
            <button onClick={() => setActiveCategory("Food")} style={{ marginLeft: "10px" }}>
                Food
            </button>
            <button onClick={() => setActiveCategory("Travel")} style={{ marginLeft: "10px" }}>
                Travel
            </button>
            <button onClick={() => setActiveCategory("Bills")} style={{ marginLeft: "10px" }}>
                Bills
            </button>

            <p style={{ marginTop: "15px" }}>Visible Total: ₹{totalAmount}</p>

            <div style={{ marginTop: "15px" }}>
                {visibleExpenses.length === 0 ?
                    (<p>No expense found!!</p>) :
                    (visibleExpenses.map((expense) => (
                        <div key={expense.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                            <h4>{expense.title}</h4>
                            <p>{expense.category}</p>
                            <p>₹{expense.amount}</p>
                        </div>
                    )))
                }
            </div>
        </div>
    );
}