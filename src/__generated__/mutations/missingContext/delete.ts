import { builder } from "src/builder";

import { MissingContextWhereUnique } from "../../types/inputs/missingContext/whereUnique";

builder.mutationField("missingContextDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: MissingContextWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.missingContext.delete({ where: args.where });
      return true;
    },
  }),
);
