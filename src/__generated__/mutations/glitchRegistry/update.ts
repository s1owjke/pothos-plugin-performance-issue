import { builder } from "src/builder";

import { GlitchRegistryUpdate } from "../../types/inputs/glitchRegistry/update";
import { GlitchRegistryWhereUnique } from "../../types/inputs/glitchRegistry/whereUnique";
import { GlitchRegistry } from "../../types/objects/glitchRegistry";

builder.mutationField("glitchRegistryUpdate", (t) =>
  t.field({
    type: GlitchRegistry,
    nullable: false,
    args: {
      where: t.arg({ type: GlitchRegistryWhereUnique, required: true }),
      data: t.arg({ type: GlitchRegistryUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.glitchRegistry.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
