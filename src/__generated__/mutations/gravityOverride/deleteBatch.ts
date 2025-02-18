import { builder } from "src/builder";

import { GravityOverrideWhereUnique } from "../../types/inputs/gravityOverride/whereUnique";

builder.mutationField("gravityOverrideDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [GravityOverrideWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.gravityOverride.delete({ where })));
      return true;
    },
  }),
);
