import { builder } from "src/builder";

import { GlitchRegistryWhereUnique } from "../../types/inputs/glitchRegistry/whereUnique";

builder.mutationField("glitchRegistryDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: GlitchRegistryWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.glitchRegistry.delete({ where: args.where });
      return true;
    },
  }),
);
