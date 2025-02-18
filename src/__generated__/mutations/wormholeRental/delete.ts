import { builder } from "src/builder";

import { WormholeRentalWhereUnique } from "../../types/inputs/wormholeRental/whereUnique";

builder.mutationField("wormholeRentalDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: WormholeRentalWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.wormholeRental.delete({ where: args.where });
      return true;
    },
  }),
);
