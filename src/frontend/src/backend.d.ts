import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeadForm {
    name: string;
    email: string;
    company: string;
    message: string;
}
export interface backendInterface {
    getLead(id: string): Promise<LeadForm | null>;
    submitLead(id: string, name: string, email: string, company: string, message: string): Promise<void>;
}
