export interface IRegisterations {
  _id: string;
  competitionName: string;
  payslip: string;
  members: IMember[];
}

export interface IMember {
  _id: string;
  name: string;
  email: string;
  phone: string;
  institute: string;
  isLeader: boolean;
}
export interface IAmbassador {
  _id: string;
  name: string;
  email: string;
  phone: string;
  institute: string;
  cnic: string;
  picture: string;
}

export interface MemberPayload {
  name: string;
  email: string;
  phone: string;
  institute: string;
  isLeader: boolean;
}
