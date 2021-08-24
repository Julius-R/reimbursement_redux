import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			const {
				reimb_amount,
				reimb_type,
				reimb_description,
				reimb_author_id
			} = req.body;
			await Number.parseFloat(reimb_amount);
			const result = await prisma.$executeRaw(
				`INSERT INTO reimbursements(reimb_amount, reimb_type, reimb_description, reimb_author_id) VALUES ('${Number.parseFloat(
					reimb_amount
				)}', '${reimb_type}', '${reimb_description}', '${Number.parseInt(
					reimb_author_id
				)}');`
			);
			res.send("true");
			return;

		case "PATCH":
			const { id, solver_id, status } = req.body;
			const resultUpdate = await prisma.reimbursements.update({
				where: {
					reimb_id: id
				},
				data: {
					reimb_status: status,
					reimb_solver_id: solver_id
				}
			});
			console.log(resultUpdate);
			res.send("success");
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
