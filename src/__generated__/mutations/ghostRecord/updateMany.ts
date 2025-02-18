import { builder } from "src/builder";

import { GhostRecordUpdateMany } from "../../types/inputs/ghostRecord/updateMany";
import { GhostRecordWhere } from "../../types/inputs/ghostRecord/where";

builder.mutationField("ghostRecordUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GhostRecordWhere, required: true }),
      data: t.arg({ type: GhostRecordUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.ghostRecord.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
