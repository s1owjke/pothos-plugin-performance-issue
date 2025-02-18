import { builder } from "src/builder";

import { MissingContextCreate } from "../../types/inputs/missingContext/create";
import { MissingContext } from "../../types/objects/missingContext";

builder.mutationField("missingContextCreateBatch", (t) =>
  t.field({
    type: [MissingContext],
    nullable: false,
    args: {
      data: t.arg({ type: [MissingContextCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.missingContext.create({ data })));
    },
  }),
);
