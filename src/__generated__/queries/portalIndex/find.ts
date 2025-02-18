import { builder } from "src/builder";

import { PortalIndexWhereUnique } from "../../types/inputs/portalIndex/whereUnique";
import { PortalIndex } from "../../types/objects/portalIndex";

builder.queryField("portalIndex", (t) =>
  t.prismaField({
    type: PortalIndex,
    nullable: true,
    args: {
      where: t.arg({ type: PortalIndexWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.portalIndex.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
