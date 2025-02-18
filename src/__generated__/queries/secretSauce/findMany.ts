import { builder } from "src/builder";

import { SecretSauceOrderBy } from "../../types/inputs/secretSauce/orderBy";
import { SecretSauceWhere } from "../../types/inputs/secretSauce/where";
import { SecretSauce } from "../../types/objects/secretSauce";

builder.queryField("secretSauceList", (t) =>
  t.prismaField({
    type: [SecretSauce],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SecretSauceWhere }),
      orderBy: t.arg({ type: [SecretSauceOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.secretSauce.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
