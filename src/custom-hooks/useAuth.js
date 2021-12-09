export function useAuth() {
  const token = localStorage.getItem("strangersThingsAuthToken");
  return { isLoggedIn: !!token, token };
}
