import { builder } from "src/builder";

import { GlitchRegistryCreateMany } from "../../types/inputs/glitchRegistry/createMany";

builder.mutationField("glitchRegistryCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [GlitchRegistryCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.glitchRegistry.createMany({ data: args.data });
      return count;
    },
  }),
);
