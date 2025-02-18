import { builder } from "src/builder";

import { HyperlinkedUnicornCreate } from "../../types/inputs/hyperlinkedUnicorn/create";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.mutationField("hyperlinkedUnicornCreate", (t) =>
  t.field({
    type: HyperlinkedUnicorn,
    nullable: false,
    args: {
      data: t.arg({ type: HyperlinkedUnicornCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hyperlinkedUnicorn.create({ data: args.data });
    },
  }),
);
