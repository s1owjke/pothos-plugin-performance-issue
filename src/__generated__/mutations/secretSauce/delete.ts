import { builder } from "src/builder";

import { SecretSauceWhereUnique } from "../../types/inputs/secretSauce/whereUnique";

builder.mutationField("secretSauceDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SecretSauceWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.secretSauce.delete({ where: args.where });
      return true;
    },
  }),
);
