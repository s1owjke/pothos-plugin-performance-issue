import { builder } from "src/builder";

import { UnassignedDestinyUpdate } from "../../types/inputs/unassignedDestiny/update";
import { UnassignedDestinyWhereUnique } from "../../types/inputs/unassignedDestiny/whereUnique";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.mutationField("unassignedDestinyUpdate", (t) =>
  t.field({
    type: UnassignedDestiny,
    nullable: false,
    args: {
      where: t.arg({ type: UnassignedDestinyWhereUnique, required: true }),
      data: t.arg({ type: UnassignedDestinyUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unassignedDestiny.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
