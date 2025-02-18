import { builder } from "src/builder";

import { SecretSauceWhere } from "../../types/inputs/secretSauce/where";

builder.mutationField("secretSauceDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SecretSauceWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.secretSauce.deleteMany({ where: args.where });
      return count;
    },
  }),
);
