import {Routes,Route } from "react-router-dom";
import {Home,Login, ProtectedRoute ,UserAuth} from "../index"

export function MyRoutes() {
  const { user } = UserAuth();

  console.log("user en MyRoutes:", user); // 👈 revisa esto en consola

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}