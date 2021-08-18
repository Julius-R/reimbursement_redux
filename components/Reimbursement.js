import { useColorModeValue, Text, Box, Flex } from "@chakra-ui/react";

export default function Reimbursement({ reimbursement }) {
	return (
		<Box
			mx="auto"
			px={8}
			py={4}
			rounded="lg"
			shadow="lg"
			bg={useColorModeValue("gray.100", "gray.700")}
			maxW="2xl">
			<Flex justifyContent="space-between" alignItems="center">
				<Text fontSize="sm">Submitted: {new Date(reimbursement.reimb_submitted).toLocaleString()}</Text>
				<Text
					px={3}
					py={1}
					bg="gray.600"
					color="gray.100"
					fontSize="sm"
					fontWeight="700"
					rounded="md">
					{reimbursement.reimb_status}
				</Text>
			</Flex>

			<Box mt={2}>
				<Text
					fontSize="2xl">
					Amount Submitted: ${reimbursement.reimb_amount}
				</Text>
				<Text mt={2} >
					{reimbursement.reimb_description}
				</Text>
			</Box>

			<Flex justifyContent="space-between" alignItems="center" mt={4}>
				<Text>
					Category: {reimbursement.reimb_type}
				</Text>

				<Text>
					{reimbursement.reimb_status != "PENDING" && `Resolved On: ${new Date(reimbursement.reimb_resolved).toLocaleString()}`}
				</Text>
			</Flex>
		</Box>
	);
}
