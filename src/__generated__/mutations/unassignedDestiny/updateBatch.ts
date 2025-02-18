import { builder } from "src/builder";

import { UnassignedDestinyUpdate } from "../../types/inputs/unassignedDestiny/update";
import { UnassignedDestinyWhereUnique } from "../../types/inputs/unassignedDestiny/whereUnique";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.mutationField("unassignedDestinyUpdateBatch", (t) =>
  t.field({
    type: [UnassignedDestiny],
    nullable: false,
    args: {
      where: t.arg({ type: [UnassignedDestinyWhereUnique], required: true }),
      data: t.arg({ type: [UnassignedDestinyUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.unassignedDestiny.update({ where, data });
        }),
      );
    },
  }),
);
