import { builder } from "src/builder";

import { WormholeRentalCreate } from "../../types/inputs/wormholeRental/create";
import { WormholeRental } from "../../types/objects/wormholeRental";

builder.mutationField("wormholeRentalCreateBatch", (t) =>
  t.field({
    type: [WormholeRental],
    nullable: false,
    args: {
      data: t.arg({ type: [WormholeRentalCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.wormholeRental.create({ data })));
    },
  }),
);
