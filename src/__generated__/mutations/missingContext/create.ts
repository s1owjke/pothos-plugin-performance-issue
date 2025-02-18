import { builder } from "src/builder";

import { MissingContextCreate } from "../../types/inputs/missingContext/create";
import { MissingContext } from "../../types/objects/missingContext";

builder.mutationField("missingContextCreate", (t) =>
  t.field({
    type: MissingContext,
    nullable: false,
    args: {
      data: t.arg({ type: MissingContextCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.missingContext.create({ data: args.data });
    },
  }),
);
