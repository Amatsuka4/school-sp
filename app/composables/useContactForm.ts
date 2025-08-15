import type { FormData } from "../types/form";

export default async function useContactForm({ name, email, message }: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { status: 200 };
}