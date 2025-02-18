import { builder } from "src/builder";

import { SecretSauceWhereUnique } from "../../types/inputs/secretSauce/whereUnique";
import { SecretSauce } from "../../types/objects/secretSauce";

builder.queryField("secretSauce", (t) =>
  t.prismaField({
    type: SecretSauce,
    nullable: true,
    args: {
      where: t.arg({ type: SecretSauceWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.secretSauce.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
