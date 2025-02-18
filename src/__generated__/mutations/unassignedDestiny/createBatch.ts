import { builder } from "src/builder";

import { UnassignedDestinyCreate } from "../../types/inputs/unassignedDestiny/create";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.mutationField("unassignedDestinyCreateBatch", (t) =>
  t.field({
    type: [UnassignedDestiny],
    nullable: false,
    args: {
      data: t.arg({ type: [UnassignedDestinyCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.unassignedDestiny.create({ data })));
    },
  }),
);
