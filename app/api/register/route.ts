import type { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

const RegisterFormZod = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6).max(100),
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
        const body = await req.body;
        return body;
 
}
