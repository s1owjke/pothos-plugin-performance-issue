import { builder } from "src/builder";

import { WormholeRentalUpdateMany } from "../../types/inputs/wormholeRental/updateMany";
import { WormholeRentalWhere } from "../../types/inputs/wormholeRental/where";

builder.mutationField("wormholeRentalUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: WormholeRentalWhere, required: true }),
      data: t.arg({ type: WormholeRentalUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.wormholeRental.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
