import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			return;
		case "PATCH":
			return;
		default:
			res.status(405).send("Method not allowed");
	}

	// const { id } = req.query;

	// const reimbursements = await prisma.reimbursements.findMany({
	// 	where: {
	// 		reimb_author_id: parseInt(id)
	// 	}
	// });

	// res.json(reimbursements);
}
