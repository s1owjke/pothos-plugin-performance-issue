import { builder } from "src/builder";

import { GravityOverrideWhere } from "../../types/inputs/gravityOverride/where";

builder.mutationField("gravityOverrideDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GravityOverrideWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gravityOverride.deleteMany({ where: args.where });
      return count;
    },
  }),
);
