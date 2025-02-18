import { builder } from "src/builder";

import { WormholeRentalUpdate } from "../../types/inputs/wormholeRental/update";
import { WormholeRentalWhereUnique } from "../../types/inputs/wormholeRental/whereUnique";
import { WormholeRental } from "../../types/objects/wormholeRental";

builder.mutationField("wormholeRentalUpdate", (t) =>
  t.field({
    type: WormholeRental,
    nullable: false,
    args: {
      where: t.arg({ type: WormholeRentalWhereUnique, required: true }),
      data: t.arg({ type: WormholeRentalUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.wormholeRental.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
