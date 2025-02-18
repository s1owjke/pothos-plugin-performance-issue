import { builder } from "src/builder";

import { DimensionalBackupOrderBy } from "../../types/inputs/dimensionalBackup/orderBy";
import { DimensionalBackupWhere } from "../../types/inputs/dimensionalBackup/where";
import { DimensionalBackup } from "../../types/objects/dimensionalBackup";

builder.queryField("dimensionalBackupList", (t) =>
  t.prismaField({
    type: [DimensionalBackup],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: DimensionalBackupWhere }),
      orderBy: t.arg({ type: [DimensionalBackupOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.dimensionalBackup.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
