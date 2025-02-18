import { builder } from "src/builder";

import { EndlessLoopUpdate } from "../../types/inputs/endlessLoop/update";
import { EndlessLoopWhereUnique } from "../../types/inputs/endlessLoop/whereUnique";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.mutationField("endlessLoopUpdateBatch", (t) =>
  t.field({
    type: [EndlessLoop],
    nullable: false,
    args: {
      where: t.arg({ type: [EndlessLoopWhereUnique], required: true }),
      data: t.arg({ type: [EndlessLoopUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.endlessLoop.update({ where, data });
        }),
      );
    },
  }),
);
