import { builder } from "src/builder";

import { PortalIndexWhereUnique } from "../../types/inputs/portalIndex/whereUnique";

builder.mutationField("portalIndexDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: PortalIndexWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.portalIndex.delete({ where: args.where });
      return true;
    },
  }),
);
