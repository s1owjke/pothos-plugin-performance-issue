import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "../../types/inputs/spontaneousCombustion/create";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.mutationField("spontaneousCombustionCreateBatch", (t) =>
  t.field({
    type: [SpontaneousCombustion],
    nullable: false,
    args: {
      data: t.arg({ type: [SpontaneousCombustionCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.spontaneousCombustion.create({ data })));
    },
  }),
);
