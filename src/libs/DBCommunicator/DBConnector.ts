import prisma from "./prisma";

export const DBConnector = {
	tmp: async () => {
		await prisma.product.create({
			data: {
				name,
				img,
				price,
			},
		});
	},
};
