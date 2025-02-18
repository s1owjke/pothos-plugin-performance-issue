import { builder } from "src/builder";

import { SecretSauceUpdate } from "../../types/inputs/secretSauce/update";
import { SecretSauceWhereUnique } from "../../types/inputs/secretSauce/whereUnique";
import { SecretSauce } from "../../types/objects/secretSauce";

builder.mutationField("secretSauceUpdateBatch", (t) =>
  t.field({
    type: [SecretSauce],
    nullable: false,
    args: {
      where: t.arg({ type: [SecretSauceWhereUnique], required: true }),
      data: t.arg({ type: [SecretSauceUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.secretSauce.update({ where, data });
        }),
      );
    },
  }),
);
