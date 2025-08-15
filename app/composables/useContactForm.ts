import type { FormData } from "../types/form";

export default async function useContactForm({ name, email, message }: FormData): Promise<{ status: number }> {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (name === "error") {
        return { status: 500 };
    }
    return { status: 200 };
}