import { builder } from "src/builder";

import { GravityOverrideUpdate } from "../../types/inputs/gravityOverride/update";
import { GravityOverrideWhereUnique } from "../../types/inputs/gravityOverride/whereUnique";
import { GravityOverride } from "../../types/objects/gravityOverride";

builder.mutationField("gravityOverrideUpdateBatch", (t) =>
  t.field({
    type: [GravityOverride],
    nullable: false,
    args: {
      where: t.arg({ type: [GravityOverrideWhereUnique], required: true }),
      data: t.arg({ type: [GravityOverrideUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.gravityOverride.update({ where, data });
        }),
      );
    },
  }),
);
