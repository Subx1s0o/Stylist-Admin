import { instance } from "@/instance";
import Cookies from "js-cookie";

export function logout() {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");

  return true;
}

export async function changePassword(passwords: {
  old_password: string;
  new_password: string;
}) {
  const res = await instance.post("/auth/change-password", passwords);
  return res.data;
}
