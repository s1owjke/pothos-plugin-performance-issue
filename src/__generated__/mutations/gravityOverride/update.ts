import { builder } from "src/builder";

import { GravityOverrideUpdate } from "../../types/inputs/gravityOverride/update";
import { GravityOverrideWhereUnique } from "../../types/inputs/gravityOverride/whereUnique";
import { GravityOverride } from "../../types/objects/gravityOverride";

builder.mutationField("gravityOverrideUpdate", (t) =>
  t.field({
    type: GravityOverride,
    nullable: false,
    args: {
      where: t.arg({ type: GravityOverrideWhereUnique, required: true }),
      data: t.arg({ type: GravityOverrideUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.gravityOverride.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
