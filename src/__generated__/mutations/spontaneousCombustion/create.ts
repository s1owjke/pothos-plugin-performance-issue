import { builder } from "src/builder";

import { SpontaneousCombustionCreate } from "../../types/inputs/spontaneousCombustion/create";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.mutationField("spontaneousCombustionCreate", (t) =>
  t.field({
    type: SpontaneousCombustion,
    nullable: false,
    args: {
      data: t.arg({ type: SpontaneousCombustionCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.spontaneousCombustion.create({ data: args.data });
    },
  }),
);
