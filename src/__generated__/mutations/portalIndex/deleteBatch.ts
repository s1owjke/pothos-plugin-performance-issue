import { builder } from "src/builder";

import { PortalIndexWhereUnique } from "../../types/inputs/portalIndex/whereUnique";

builder.mutationField("portalIndexDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [PortalIndexWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.portalIndex.delete({ where })));
      return true;
    },
  }),
);
