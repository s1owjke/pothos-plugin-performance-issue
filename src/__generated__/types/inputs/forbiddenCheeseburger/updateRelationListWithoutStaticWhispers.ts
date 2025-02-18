import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelationListWithoutStaticWhispers = builder
  .inputRef<any>("ForbiddenCheeseburgerUpdateRelationListWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      set: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      disconnect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
      create: t.field({ type: [ForbiddenCheeseburgerCreateWithoutStaticWhispers] }),
    }),
  });
