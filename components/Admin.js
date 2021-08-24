import { useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { useColorModeValue, Text, Box, Flex } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Admin({ user, reimbursements }) {
	const router = useRouter();
	// function to filter reimbursements by category
	const filterReimbursements = (arr, filter) => {
		const cleansedList = arr.filter((item) => {
			return item.reimb_status === filter;
		});
		return cleansedList;
	};
	const [allReimbursements, setAllReimbursements] = useState(reimbursements);
	// filter reimbursements and show these
	const [filteredList, setFilteredList] = useState(
		filterReimbursements(allReimbursements, "PENDING")
	);

	const handleSubmit = (e, status) => {
		let data = {
			id: e.reimb_id,
			solver_id: user.user_id,
			status: status
		};

		fetch("/api/reimbursements", {
			body: JSON.stringify(data),
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			}
		}).then((res) => {
			setFilteredList(
				filteredList.filter((item) => {
					return item.reimb_id !== e.reimb_id;
				})
			);
			toast.success(`Reimbursement has been marked as ${status}`);
			setTimeout(() => {
				router.replace(router.asPath);
			}, 2000);
		});
	};

	return (
		<>
			<Toaster position="top-right" />
			{filteredList.map((reimbursement) => {
				return (
					<Box
						key={reimbursement.reimb_id}
						mb={4}
						px={8}
						py={4}
						rounded="lg"
						shadow="lg"
						bg={useColorModeValue("gray.100", "gray.700")}
						width="2xl">
						<Flex
							justifyContent="space-between"
							alignItems="center">
							<Text fontSize="sm">
								Submitted:{" "}
								{new Date(
									reimbursement.reimb_submitted
								).toLocaleString()}
							</Text>
							<Text
								px={3}
								py={1}
								bg="gray.700"
								color="gray.100"
								fontSize="sm"
								fontWeight="700"
								rounded="md">
								{reimbursement.reimb_status}
							</Text>
						</Flex>

						<Box mt={2}>
							<Text fontSize="2xl">
								Amount Submitted: ${reimbursement.reimb_amount}
							</Text>
							<Text mt={2}>
								{reimbursement.reimb_description}
							</Text>
						</Box>

						<Flex
							justifyContent="space-between"
							alignItems="center"
							mt={4}>
							<Text>Category: {reimbursement.reimb_type}</Text>

							{reimbursement.reimb_status === "PENDING" ? (
								<Text>
									<CloseIcon
										mr={5}
										color="red.500"
										onClick={() => {
											handleSubmit(
												reimbursement,
												"REJECTED"
											);
										}}
									/>
									<CheckIcon
										color="green.500"
										onClick={() => {
											handleSubmit(
												reimbursement,
												"APPROVED"
											);
										}}
									/>
								</Text>
							) : (
								<Text>
									{reimbursement.reimb_status != "PENDING" &&
										`Resolved On: ${new Date(
											reimbursement.reimb_resolved
										).toLocaleString()}`}
								</Text>
							)}
						</Flex>
					</Box>
				);
			})}
		</>
	);
}
