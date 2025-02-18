import { builder } from "src/builder";

import { RealmDirectoryUpdateMany } from "../../types/inputs/realmDirectory/updateMany";
import { RealmDirectoryWhere } from "../../types/inputs/realmDirectory/where";

builder.mutationField("realmDirectoryUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RealmDirectoryWhere, required: true }),
      data: t.arg({ type: RealmDirectoryUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.realmDirectory.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
