import { builder } from "src/builder";

import { GravityOverrideWhereUnique } from "../../types/inputs/gravityOverride/whereUnique";
import { GravityOverride } from "../../types/objects/gravityOverride";

builder.queryField("gravityOverride", (t) =>
  t.prismaField({
    type: GravityOverride,
    nullable: true,
    args: {
      where: t.arg({ type: GravityOverrideWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.gravityOverride.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
