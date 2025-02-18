import { builder } from "src/builder";

import { GlitchRegistryCreate } from "../../types/inputs/glitchRegistry/create";
import { GlitchRegistry } from "../../types/objects/glitchRegistry";

builder.mutationField("glitchRegistryCreate", (t) =>
  t.field({
    type: GlitchRegistry,
    nullable: false,
    args: {
      data: t.arg({ type: GlitchRegistryCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.glitchRegistry.create({ data: args.data });
    },
  }),
);
