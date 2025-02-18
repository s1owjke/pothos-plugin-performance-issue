import { builder } from "src/builder";

import { PortalIndexWhere } from "../../types/inputs/portalIndex/where";

builder.mutationField("portalIndexDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PortalIndexWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.portalIndex.deleteMany({ where: args.where });
      return count;
    },
  }),
);
