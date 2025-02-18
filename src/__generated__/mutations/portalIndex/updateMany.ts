import { builder } from "src/builder";

import { PortalIndexUpdateMany } from "../../types/inputs/portalIndex/updateMany";
import { PortalIndexWhere } from "../../types/inputs/portalIndex/where";

builder.mutationField("portalIndexUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PortalIndexWhere, required: true }),
      data: t.arg({ type: PortalIndexUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.portalIndex.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
