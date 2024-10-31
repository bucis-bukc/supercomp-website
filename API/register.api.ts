import api from "./middleware";

interface MemberPayload {
  name: string;
  email: string;
  phone: string;
  institute: string;
  // isLeader: boolean;
}

interface RegisterPayload {
  competitionName: string;
  payslip: string;
  members: MemberPayload[];
}

export const registerforCompetition = async (body: RegisterPayload) => {
  try {
    const { data } = await api.post("/register", body);
    return {
      success: true,
      response: data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};
