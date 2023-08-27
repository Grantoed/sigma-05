import { server } from "src/api/default";

export const subscribe = async (email: string) => {
  try {
    const res = await server.post(`/subscribe`, { email });
    return res.data;
  } catch (e) {
    throw e;
  }
};
