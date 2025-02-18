import { builder } from "src/builder";

import { EmotionalSupportTableWhereUnique } from "../../types/inputs/emotionalSupportTable/whereUnique";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.queryField("emotionalSupportTable", (t) =>
  t.prismaField({
    type: EmotionalSupportTable,
    nullable: true,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.emotionalSupportTable.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
