import { builder } from "src/builder";

import { AlternativeFactUpdate } from "../../types/inputs/alternativeFact/update";
import { AlternativeFactWhereUnique } from "../../types/inputs/alternativeFact/whereUnique";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.mutationField("alternativeFactUpdate", (t) =>
  t.field({
    type: AlternativeFact,
    nullable: false,
    args: {
      where: t.arg({ type: AlternativeFactWhereUnique, required: true }),
      data: t.arg({ type: AlternativeFactUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.alternativeFact.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
