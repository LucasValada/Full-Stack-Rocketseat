export function index({ request, response, database }) {
  const { status } = request.query;
  const filters = status ? { status } : null;
  console.log(status);
  const tickets = database.select("tickets", filters);
  return response.end(JSON.stringify(tickets));
}
