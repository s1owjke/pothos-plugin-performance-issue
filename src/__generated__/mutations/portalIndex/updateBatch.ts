import { builder } from "src/builder";

import { PortalIndexUpdate } from "../../types/inputs/portalIndex/update";
import { PortalIndexWhereUnique } from "../../types/inputs/portalIndex/whereUnique";
import { PortalIndex } from "../../types/objects/portalIndex";

builder.mutationField("portalIndexUpdateBatch", (t) =>
  t.field({
    type: [PortalIndex],
    nullable: false,
    args: {
      where: t.arg({ type: [PortalIndexWhereUnique], required: true }),
      data: t.arg({ type: [PortalIndexUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.portalIndex.update({ where, data });
        }),
      );
    },
  }),
);
