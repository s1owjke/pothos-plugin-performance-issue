import { builder } from "src/builder";

import { UnnecessaryPermissionWhereUnique } from "../../types/inputs/unnecessaryPermission/whereUnique";
import { UnnecessaryPermission } from "../../types/objects/unnecessaryPermission";

builder.queryField("unnecessaryPermission", (t) =>
  t.prismaField({
    type: UnnecessaryPermission,
    nullable: true,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.unnecessaryPermission.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
