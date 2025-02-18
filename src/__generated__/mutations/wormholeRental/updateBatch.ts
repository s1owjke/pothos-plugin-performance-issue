import { builder } from "src/builder";

import { WormholeRentalUpdate } from "../../types/inputs/wormholeRental/update";
import { WormholeRentalWhereUnique } from "../../types/inputs/wormholeRental/whereUnique";
import { WormholeRental } from "../../types/objects/wormholeRental";

builder.mutationField("wormholeRentalUpdateBatch", (t) =>
  t.field({
    type: [WormholeRental],
    nullable: false,
    args: {
      where: t.arg({ type: [WormholeRentalWhereUnique], required: true }),
      data: t.arg({ type: [WormholeRentalUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.wormholeRental.update({ where, data });
        }),
      );
    },
  }),
);
