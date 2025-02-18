import { builder } from "src/builder";

import { WormholeRentalWhere } from "../../types/inputs/wormholeRental/where";

builder.mutationField("wormholeRentalDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: WormholeRentalWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.wormholeRental.deleteMany({ where: args.where });
      return count;
    },
  }),
);
