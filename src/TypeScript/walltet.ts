


export interface TWallet {
  _id: string;
  title: string;
  description: string;
  images: string[] ;  // Update if needed
  location: string;
  city: string;
  dateFound: string; // ISO date string
  status: "AVAILABLE" | "RETURNED" | "PENDING" | string;
  isReported: boolean;
  reportCount: number;
  category: string | null;
  user: string | null ; // change based on your data
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
