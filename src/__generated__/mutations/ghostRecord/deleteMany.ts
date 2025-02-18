import { builder } from "src/builder";

import { GhostRecordWhere } from "../../types/inputs/ghostRecord/where";

builder.mutationField("ghostRecordDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GhostRecordWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.ghostRecord.deleteMany({ where: args.where });
      return count;
    },
  }),
);
