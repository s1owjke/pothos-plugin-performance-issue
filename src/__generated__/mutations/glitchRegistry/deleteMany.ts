import { builder } from "src/builder";

import { GlitchRegistryWhere } from "../../types/inputs/glitchRegistry/where";

builder.mutationField("glitchRegistryDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GlitchRegistryWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.glitchRegistry.deleteMany({ where: args.where });
      return count;
    },
  }),
);
