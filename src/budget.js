function calculateSubtotal(tasks) {
  return tasks.reduce((sum, t) => sum + (t.cost || 0), 0);
}
function calculateServiceFee(subtotal) {
  return subtotal * 0.5;
}
function calculateTotal(tasks) {
  const subtotal = calculateSubtotal(tasks);
  const fee = calculateServiceFee(subtotal);
  return subtotal + fee;
}
function updateBudget() {
  const total = calculateTotal(tasks);
  document.getElementById('budget-total').textContent =
    `Est. total: $${total.toFixed(2)}`;
}
