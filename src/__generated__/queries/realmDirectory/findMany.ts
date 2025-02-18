import { builder } from "src/builder";

import { RealmDirectoryOrderBy } from "../../types/inputs/realmDirectory/orderBy";
import { RealmDirectoryWhere } from "../../types/inputs/realmDirectory/where";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.queryField("realmDirectoryList", (t) =>
  t.prismaField({
    type: [RealmDirectory],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: RealmDirectoryWhere }),
      orderBy: t.arg({ type: [RealmDirectoryOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.realmDirectory.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
