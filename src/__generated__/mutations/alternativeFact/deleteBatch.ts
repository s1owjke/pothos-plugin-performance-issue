import { builder } from "src/builder";

import { AlternativeFactWhereUnique } from "../../types/inputs/alternativeFact/whereUnique";

builder.mutationField("alternativeFactDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [AlternativeFactWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.alternativeFact.delete({ where })));
      return true;
    },
  }),
);
