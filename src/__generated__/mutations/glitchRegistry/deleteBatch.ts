import { builder } from "src/builder";

import { GlitchRegistryWhereUnique } from "../../types/inputs/glitchRegistry/whereUnique";

builder.mutationField("glitchRegistryDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [GlitchRegistryWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.glitchRegistry.delete({ where })));
      return true;
    },
  }),
);
