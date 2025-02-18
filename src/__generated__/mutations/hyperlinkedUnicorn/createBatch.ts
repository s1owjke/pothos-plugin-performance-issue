import { builder } from "src/builder";

import { HyperlinkedUnicornCreate } from "../../types/inputs/hyperlinkedUnicorn/create";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.mutationField("hyperlinkedUnicornCreateBatch", (t) =>
  t.field({
    type: [HyperlinkedUnicorn],
    nullable: false,
    args: {
      data: t.arg({ type: [HyperlinkedUnicornCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.hyperlinkedUnicorn.create({ data })));
    },
  }),
);
