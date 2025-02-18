import { builder } from "src/builder";

import { PortalIndexCreate } from "../../types/inputs/portalIndex/create";
import { PortalIndex } from "../../types/objects/portalIndex";

builder.mutationField("portalIndexCreateBatch", (t) =>
  t.field({
    type: [PortalIndex],
    nullable: false,
    args: {
      data: t.arg({ type: [PortalIndexCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.portalIndex.create({ data })));
    },
  }),
);
