import { builder } from "src/builder";

import { SecretSauceCreateMany } from "../../types/inputs/secretSauce/createMany";

builder.mutationField("secretSauceCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SecretSauceCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.secretSauce.createMany({ data: args.data });
      return count;
    },
  }),
);
