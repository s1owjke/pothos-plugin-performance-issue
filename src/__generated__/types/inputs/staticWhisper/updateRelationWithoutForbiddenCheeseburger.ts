import { builder } from "src/builder";

import { StaticWhisperCreateWithoutForbiddenCheeseburger } from "./createWithoutForbiddenCheeseburger";
import { StaticWhisperUpdateWithoutForbiddenCheeseburger } from "./updateWithoutForbiddenCheeseburger";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelationWithoutForbiddenCheeseburger = builder
  .inputRef<any>("StaticWhisperUpdateRelationWithoutForbiddenCheeseburger")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: StaticWhisperWhereUnique }),
      disconnect: t.field({ type: StaticWhisperWhereUnique }),
      create: t.field({ type: StaticWhisperCreateWithoutForbiddenCheeseburger }),
      update: t.field({ type: StaticWhisperUpdateWithoutForbiddenCheeseburger }),
    }),
  });
