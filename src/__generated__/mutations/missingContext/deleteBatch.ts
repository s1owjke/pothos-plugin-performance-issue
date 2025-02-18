import { builder } from "src/builder";

import { MissingContextWhereUnique } from "../../types/inputs/missingContext/whereUnique";

builder.mutationField("missingContextDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [MissingContextWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.missingContext.delete({ where })));
      return true;
    },
  }),
);
