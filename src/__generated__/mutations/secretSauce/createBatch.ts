import { builder } from "src/builder";

import { SecretSauceCreate } from "../../types/inputs/secretSauce/create";
import { SecretSauce } from "../../types/objects/secretSauce";

builder.mutationField("secretSauceCreateBatch", (t) =>
  t.field({
    type: [SecretSauce],
    nullable: false,
    args: {
      data: t.arg({ type: [SecretSauceCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.secretSauce.create({ data })));
    },
  }),
);
