import { builder } from "src/builder";

import { UnassignedDestinyCreate } from "../../types/inputs/unassignedDestiny/create";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.mutationField("unassignedDestinyCreate", (t) =>
  t.field({
    type: UnassignedDestiny,
    nullable: false,
    args: {
      data: t.arg({ type: UnassignedDestinyCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unassignedDestiny.create({ data: args.data });
    },
  }),
);
