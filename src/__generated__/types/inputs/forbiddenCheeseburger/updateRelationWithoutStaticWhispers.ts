import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateWithoutStaticWhispers } from "./createWithoutStaticWhispers";
import { ForbiddenCheeseburgerUpdateWithoutStaticWhispers } from "./updateWithoutStaticWhispers";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers = builder
  .inputRef<any>("ForbiddenCheeseburgerUpdateRelationWithoutStaticWhispers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      disconnect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
      create: t.field({ type: ForbiddenCheeseburgerCreateWithoutStaticWhispers }),
      update: t.field({ type: ForbiddenCheeseburgerUpdateWithoutStaticWhispers }),
    }),
  });
