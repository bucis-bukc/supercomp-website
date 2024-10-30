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
    console.log(data);
    return {
      success: true,
      response: data.data,
    };
  } catch (error: any) {
    console.log("Errorr:", error);
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};
