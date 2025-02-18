import { builder } from "src/builder";

import { SecretSauceWhereUnique } from "../../types/inputs/secretSauce/whereUnique";

builder.mutationField("secretSauceDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SecretSauceWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.secretSauce.delete({ where })));
      return true;
    },
  }),
);
