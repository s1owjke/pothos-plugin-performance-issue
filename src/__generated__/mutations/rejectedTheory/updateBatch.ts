import { builder } from "src/builder";

import { RejectedTheoryUpdate } from "../../types/inputs/rejectedTheory/update";
import { RejectedTheoryWhereUnique } from "../../types/inputs/rejectedTheory/whereUnique";
import { RejectedTheory } from "../../types/objects/rejectedTheory";

builder.mutationField("rejectedTheoryUpdateBatch", (t) =>
  t.field({
    type: [RejectedTheory],
    nullable: false,
    args: {
      where: t.arg({ type: [RejectedTheoryWhereUnique], required: true }),
      data: t.arg({ type: [RejectedTheoryUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.rejectedTheory.update({ where, data });
        }),
      );
    },
  }),
);
