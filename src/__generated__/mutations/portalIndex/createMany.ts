import { builder } from "src/builder";

import { PortalIndexCreateMany } from "../../types/inputs/portalIndex/createMany";

builder.mutationField("portalIndexCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [PortalIndexCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.portalIndex.createMany({ data: args.data });
      return count;
    },
  }),
);
