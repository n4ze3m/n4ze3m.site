import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({
            message: "Method not allowed"
        });
    }
    try {
        const body = req.body
        const { name, description, github_url, demo_url } = body;
        if (!name || !description || !github_url) {
            return res.status(400).send({
                message: "Missing required fields"
            });
        }
    
        await prisma.projects.create({
            data: {
                ...body,
            }
        });
    
        return res.status(201).send({
            message: "Project created successfully"
        });
    }catch(e) {
        console.log(e)
        return res.status(500).send({
            message: "Internal server error"
        });
    }
}
