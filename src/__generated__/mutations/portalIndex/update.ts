import { builder } from "src/builder";

import { PortalIndexUpdate } from "../../types/inputs/portalIndex/update";
import { PortalIndexWhereUnique } from "../../types/inputs/portalIndex/whereUnique";
import { PortalIndex } from "../../types/objects/portalIndex";

builder.mutationField("portalIndexUpdate", (t) =>
  t.field({
    type: PortalIndex,
    nullable: false,
    args: {
      where: t.arg({ type: PortalIndexWhereUnique, required: true }),
      data: t.arg({ type: PortalIndexUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.portalIndex.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
