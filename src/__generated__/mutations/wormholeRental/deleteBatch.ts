import { builder } from "src/builder";

import { WormholeRentalWhereUnique } from "../../types/inputs/wormholeRental/whereUnique";

builder.mutationField("wormholeRentalDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [WormholeRentalWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.wormholeRental.delete({ where })));
      return true;
    },
  }),
);
