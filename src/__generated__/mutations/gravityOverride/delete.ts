import { builder } from "src/builder";

import { GravityOverrideWhereUnique } from "../../types/inputs/gravityOverride/whereUnique";

builder.mutationField("gravityOverrideDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: GravityOverrideWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.gravityOverride.delete({ where: args.where });
      return true;
    },
  }),
);
