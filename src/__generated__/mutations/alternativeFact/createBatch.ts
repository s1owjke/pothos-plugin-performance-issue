import { builder } from "src/builder";

import { AlternativeFactCreate } from "../../types/inputs/alternativeFact/create";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.mutationField("alternativeFactCreateBatch", (t) =>
  t.field({
    type: [AlternativeFact],
    nullable: false,
    args: {
      data: t.arg({ type: [AlternativeFactCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.alternativeFact.create({ data })));
    },
  }),
);
