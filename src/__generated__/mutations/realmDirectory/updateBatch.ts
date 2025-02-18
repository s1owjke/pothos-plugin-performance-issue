import { builder } from "src/builder";

import { RealmDirectoryUpdate } from "../../types/inputs/realmDirectory/update";
import { RealmDirectoryWhereUnique } from "../../types/inputs/realmDirectory/whereUnique";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.mutationField("realmDirectoryUpdateBatch", (t) =>
  t.field({
    type: [RealmDirectory],
    nullable: false,
    args: {
      where: t.arg({ type: [RealmDirectoryWhereUnique], required: true }),
      data: t.arg({ type: [RealmDirectoryUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.realmDirectory.update({ where, data });
        }),
      );
    },
  }),
);
