import { builder } from "src/builder";

import { UnnecessaryPermissionCreateMany } from "../../types/inputs/unnecessaryPermission/createMany";

builder.mutationField("unnecessaryPermissionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnnecessaryPermissionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unnecessaryPermission.createMany({ data: args.data });
      return count;
    },
  }),
);
