import { builder } from "src/builder";

import { GravityOverrideCreateMany } from "../../types/inputs/gravityOverride/createMany";

builder.mutationField("gravityOverrideCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [GravityOverrideCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gravityOverride.createMany({ data: args.data });
      return count;
    },
  }),
);
