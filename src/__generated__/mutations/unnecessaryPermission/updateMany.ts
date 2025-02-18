import { builder } from "src/builder";

import { UnnecessaryPermissionUpdateMany } from "../../types/inputs/unnecessaryPermission/updateMany";
import { UnnecessaryPermissionWhere } from "../../types/inputs/unnecessaryPermission/where";

builder.mutationField("unnecessaryPermissionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhere, required: true }),
      data: t.arg({ type: UnnecessaryPermissionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unnecessaryPermission.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
