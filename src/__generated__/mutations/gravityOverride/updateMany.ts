import { builder } from "src/builder";

import { GravityOverrideUpdateMany } from "../../types/inputs/gravityOverride/updateMany";
import { GravityOverrideWhere } from "../../types/inputs/gravityOverride/where";

builder.mutationField("gravityOverrideUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GravityOverrideWhere, required: true }),
      data: t.arg({ type: GravityOverrideUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gravityOverride.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
