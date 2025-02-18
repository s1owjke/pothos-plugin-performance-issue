import { builder } from "src/builder";

import { UnnecessaryPermissionWhere } from "../../types/inputs/unnecessaryPermission/where";

builder.mutationField("unnecessaryPermissionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnnecessaryPermissionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unnecessaryPermission.deleteMany({ where: args.where });
      return count;
    },
  }),
);
