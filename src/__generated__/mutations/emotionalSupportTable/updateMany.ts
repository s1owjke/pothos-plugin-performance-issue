import { builder } from "src/builder";

import { EmotionalSupportTableUpdateMany } from "../../types/inputs/emotionalSupportTable/updateMany";
import { EmotionalSupportTableWhere } from "../../types/inputs/emotionalSupportTable/where";

builder.mutationField("emotionalSupportTableUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EmotionalSupportTableWhere, required: true }),
      data: t.arg({ type: EmotionalSupportTableUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.emotionalSupportTable.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
