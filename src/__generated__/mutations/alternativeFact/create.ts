import { builder } from "src/builder";

import { AlternativeFactCreate } from "../../types/inputs/alternativeFact/create";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.mutationField("alternativeFactCreate", (t) =>
  t.field({
    type: AlternativeFact,
    nullable: false,
    args: {
      data: t.arg({ type: AlternativeFactCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.alternativeFact.create({ data: args.data });
    },
  }),
);
