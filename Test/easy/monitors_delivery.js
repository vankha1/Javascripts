function maxOrdersFulfilled(P, D, C) {
    // Create an array of orders with their distances and the number of monitors needed
    let orders = [];
    for (let i = 0; i < D.length; i++) {
        orders.push({ distance: D[i], count: C[i] });
    }

    // Sort the orders by the number of monitors requested (ascending) to try to fulfill smaller orders first
    orders.sort((a, b) => a.count - b.count);

    let totalMonitors = P;
    let fulfilledOrders = 0;

    // Iterate through the sorted orders and check if they can be fulfilled
    for (let i = 0; i < orders.length; i++) {
        if (totalMonitors >= orders[i].count) {
            totalMonitors -= orders[i].count;  // Fulfill this order and reduce the available monitors
            fulfilledOrders++;  // Increment the count of fulfilled orders
        } else {
            break;  // No more orders can be fulfilled if we run out of monitors
        }
    }

    return fulfilledOrders;  // Return the number of fulfilled orders
}

// Example Test Case
let P = 19;  // Total number of monitors available
let D = [1,4,2,5];  // Distances for each order
let C = [4,9,2,3];  // Number of monitors requested for each order

console.log(maxOrdersFulfilled(P, D, C));  // Output the number of orders that can be fulfilled
