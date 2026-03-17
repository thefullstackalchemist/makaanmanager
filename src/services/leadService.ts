export interface LeadData {
  services: string[];
  name: string;
  email: string;
  mobile: string;
}

export async function submitLead(data: LeadData): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lead submitted:", data);
      resolve(true);
    }, 1500);
  });
}
