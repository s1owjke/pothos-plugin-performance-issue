import { builder } from "src/builder";

import { SecretSauceUpdateMany } from "../../types/inputs/secretSauce/updateMany";
import { SecretSauceWhere } from "../../types/inputs/secretSauce/where";

builder.mutationField("secretSauceUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SecretSauceWhere, required: true }),
      data: t.arg({ type: SecretSauceUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.secretSauce.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
