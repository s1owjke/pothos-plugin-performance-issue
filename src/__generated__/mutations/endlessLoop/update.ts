import { builder } from "src/builder";

import { EndlessLoopUpdate } from "../../types/inputs/endlessLoop/update";
import { EndlessLoopWhereUnique } from "../../types/inputs/endlessLoop/whereUnique";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.mutationField("endlessLoopUpdate", (t) =>
  t.field({
    type: EndlessLoop,
    nullable: false,
    args: {
      where: t.arg({ type: EndlessLoopWhereUnique, required: true }),
      data: t.arg({ type: EndlessLoopUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.endlessLoop.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
