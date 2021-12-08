import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function handler(req, res) {
    try {
        const projects = await prisma.projects.findMany()
        // sort projects by random
        const projectsSorted = projects.sort(() => 0.5 - Math.random())
        return res.send(projectsSorted)
    } catch (err) {
        return res.status(500).send({ message: "Internal server error" })
    }
}
