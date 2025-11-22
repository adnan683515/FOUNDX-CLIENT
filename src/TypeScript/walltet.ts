


export interface TWallet {
  _id: string;
  title: string;
  description: string;
  images: string[] ; 
  location: string;
  city: string;
  dateFound: string;
  status: "AVAILABLE" | "RETURNED" | "PENDING" | string;
  isReported: boolean;
  reportCount: number;
  category: string | null;
  user: string | null ; 
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

