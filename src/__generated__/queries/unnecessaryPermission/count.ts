import { builder } from "src/builder";

import { UnnecessaryPermissionWhere } from "../../types/inputs/unnecessaryPermission/where";

builder.queryField("unnecessaryPermissionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unnecessaryPermission.count({ where: args.where || undefined });
    },
  }),
);
