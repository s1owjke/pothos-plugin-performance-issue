import { builder } from "src/builder";

import { UnnecessaryPermissionOrderBy } from "../../types/inputs/unnecessaryPermission/orderBy";
import { UnnecessaryPermissionWhere } from "../../types/inputs/unnecessaryPermission/where";
import { UnnecessaryPermission } from "../../types/objects/unnecessaryPermission";

builder.queryField("unnecessaryPermissionList", (t) =>
  t.prismaField({
    type: [UnnecessaryPermission],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhere }),
      orderBy: t.arg({ type: [UnnecessaryPermissionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.unnecessaryPermission.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
