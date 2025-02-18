import { builder } from "src/builder";

import { WormholeRentalCreateMany } from "../../types/inputs/wormholeRental/createMany";

builder.mutationField("wormholeRentalCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [WormholeRentalCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.wormholeRental.createMany({ data: args.data });
      return count;
    },
  }),
);
