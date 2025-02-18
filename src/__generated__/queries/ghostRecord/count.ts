import { builder } from "src/builder";

import { GhostRecordWhere } from "../../types/inputs/ghostRecord/where";

builder.queryField("ghostRecordCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GhostRecordWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.ghostRecord.count({ where: args.where || undefined });
    },
  }),
);
