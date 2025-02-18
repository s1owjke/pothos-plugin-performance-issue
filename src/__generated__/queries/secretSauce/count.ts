import { builder } from "src/builder";

import { SecretSauceWhere } from "../../types/inputs/secretSauce/where";

builder.queryField("secretSauceCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SecretSauceWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.secretSauce.count({ where: args.where || undefined });
    },
  }),
);
