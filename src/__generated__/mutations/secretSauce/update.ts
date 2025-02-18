import { builder } from "src/builder";

import { SecretSauceUpdate } from "../../types/inputs/secretSauce/update";
import { SecretSauceWhereUnique } from "../../types/inputs/secretSauce/whereUnique";
import { SecretSauce } from "../../types/objects/secretSauce";

builder.mutationField("secretSauceUpdate", (t) =>
  t.field({
    type: SecretSauce,
    nullable: false,
    args: {
      where: t.arg({ type: SecretSauceWhereUnique, required: true }),
      data: t.arg({ type: SecretSauceUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.secretSauce.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
