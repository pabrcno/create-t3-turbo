export { GET, POST } from "@mapads/auth";

export const runtime =
  process.env.NODE_ENV === "development" ? "nodejs" : "experimental-edge";
