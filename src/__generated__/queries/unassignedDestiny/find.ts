import { builder } from "src/builder";

import { UnassignedDestinyWhereUnique } from "../../types/inputs/unassignedDestiny/whereUnique";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.queryField("unassignedDestiny", (t) =>
  t.prismaField({
    type: UnassignedDestiny,
    nullable: true,
    args: {
      where: t.arg({ type: UnassignedDestinyWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.unassignedDestiny.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
