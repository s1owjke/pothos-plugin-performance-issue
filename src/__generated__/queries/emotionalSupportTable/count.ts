import { builder } from "src/builder";

import { EmotionalSupportTableWhere } from "../../types/inputs/emotionalSupportTable/where";

builder.queryField("emotionalSupportTableCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.emotionalSupportTable.count({ where: args.where || undefined });
    },
  }),
);
