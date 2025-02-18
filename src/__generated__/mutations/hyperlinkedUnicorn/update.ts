import { builder } from "src/builder";

import { HyperlinkedUnicornUpdate } from "../../types/inputs/hyperlinkedUnicorn/update";
import { HyperlinkedUnicornWhereUnique } from "../../types/inputs/hyperlinkedUnicorn/whereUnique";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.mutationField("hyperlinkedUnicornUpdate", (t) =>
  t.field({
    type: HyperlinkedUnicorn,
    nullable: false,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhereUnique, required: true }),
      data: t.arg({ type: HyperlinkedUnicornUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hyperlinkedUnicorn.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
