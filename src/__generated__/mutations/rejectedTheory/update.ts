import { builder } from "src/builder";

import { RejectedTheoryUpdate } from "../../types/inputs/rejectedTheory/update";
import { RejectedTheoryWhereUnique } from "../../types/inputs/rejectedTheory/whereUnique";
import { RejectedTheory } from "../../types/objects/rejectedTheory";

builder.mutationField("rejectedTheoryUpdate", (t) =>
  t.field({
    type: RejectedTheory,
    nullable: false,
    args: {
      where: t.arg({ type: RejectedTheoryWhereUnique, required: true }),
      data: t.arg({ type: RejectedTheoryUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.rejectedTheory.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
