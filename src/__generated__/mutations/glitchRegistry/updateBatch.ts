import { builder } from "src/builder";

import { GlitchRegistryUpdate } from "../../types/inputs/glitchRegistry/update";
import { GlitchRegistryWhereUnique } from "../../types/inputs/glitchRegistry/whereUnique";
import { GlitchRegistry } from "../../types/objects/glitchRegistry";

builder.mutationField("glitchRegistryUpdateBatch", (t) =>
  t.field({
    type: [GlitchRegistry],
    nullable: false,
    args: {
      where: t.arg({ type: [GlitchRegistryWhereUnique], required: true }),
      data: t.arg({ type: [GlitchRegistryUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.glitchRegistry.update({ where, data });
        }),
      );
    },
  }),
);
