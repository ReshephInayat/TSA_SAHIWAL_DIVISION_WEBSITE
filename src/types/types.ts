// types.ts
import { z } from "zod";

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number")
    .min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;


// types/types.ts



export interface DetailsProps {
  id: number;
  name: string;
  category: string;
  officers: string;
  distance: string;
  condition: string;
  buildingSize: string;
  buildingScore: number;
  description: string;
  pageLink: string;
  images: string[];
}