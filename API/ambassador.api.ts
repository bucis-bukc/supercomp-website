import api from "./middleware";

interface CreateAmbassador {
  name: string;
  email: string;
  phone: string;
  cnic: string;
  picture: string;
  institute: string;
}

export const createAmbassador = async (body: CreateAmbassador) => {
  try {
    const data = await api.post("/ambassador", body);
    return {
      success: true,
      response: data.data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.error || "Something went wrong",
    };
  }
};
