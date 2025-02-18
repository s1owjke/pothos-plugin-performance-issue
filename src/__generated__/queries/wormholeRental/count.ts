import { builder } from "src/builder";

import { WormholeRentalWhere } from "../../types/inputs/wormholeRental/where";

builder.queryField("wormholeRentalCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: WormholeRentalWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.wormholeRental.count({ where: args.where || undefined });
    },
  }),
);
