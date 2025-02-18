import { builder } from "src/builder";

import { MissingContextUpdate } from "../../types/inputs/missingContext/update";
import { MissingContextWhereUnique } from "../../types/inputs/missingContext/whereUnique";
import { MissingContext } from "../../types/objects/missingContext";

builder.mutationField("missingContextUpdate", (t) =>
  t.field({
    type: MissingContext,
    nullable: false,
    args: {
      where: t.arg({ type: MissingContextWhereUnique, required: true }),
      data: t.arg({ type: MissingContextUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.missingContext.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
