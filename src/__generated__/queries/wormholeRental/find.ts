import { builder } from "src/builder";

import { WormholeRentalWhereUnique } from "../../types/inputs/wormholeRental/whereUnique";
import { WormholeRental } from "../../types/objects/wormholeRental";

builder.queryField("wormholeRental", (t) =>
  t.prismaField({
    type: WormholeRental,
    nullable: true,
    args: {
      where: t.arg({ type: WormholeRentalWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.wormholeRental.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
