import SchemaBuilder, {
  BasePlugin,
  createInputValueMapper,
  InputObjectRef,
  mapInputFields,
  PothosOutputFieldConfig,
  resolveInputTypeConfig,
  SchemaTypes,
} from "@pothos/core";

declare global {
  export namespace PothosSchemaTypes {
    export interface InputObjectRef<Types extends SchemaTypes, T> {
      transform: <U>(fn: (value: T) => U) => InputObjectRef<Types, U>;
    }

    export interface Plugins<Types extends SchemaTypes> {
      transformInputs: TransformInputs<Types>;
    }
  }
}

InputObjectRef.prototype.transform = function (this: InputObjectRef<SchemaTypes, unknown>, fn: (value: unknown) => unknown) {
  this.updateConfig((config) => {
    return {
      ...config,
      extensions: {
        ...config.extensions,
        inputTransformFunctions: [...((config.extensions?.inputTransformFunctions as [] | undefined) ?? []), fn],
      },
    };
  });

  return this;
};

export class TransformInputs<Types extends SchemaTypes> extends BasePlugin<Types> {
  override onOutputFieldConfig(fieldConfig: PothosOutputFieldConfig<Types>): PothosOutputFieldConfig<Types> | null {
    const argMappings = mapInputFields(fieldConfig.args, this.buildCache, (inputField) => {
      let inputTypeConfig: ReturnType<typeof resolveInputTypeConfig> | null = null;

      try {
        inputTypeConfig = resolveInputTypeConfig(inputField.type, this.buildCache);
      } catch {}

      return inputTypeConfig?.extensions?.inputTransformFunctions || null;
    });

    if (!argMappings) {
      return fieldConfig;
    }

    const argMapper = createInputValueMapper(argMappings, (value, mapping) => {
      return value;
    });

    return {
      ...fieldConfig,
      argMappers: [...fieldConfig.argMappers, (args) => argMapper(args)],
    };
  }
}

const pluginName = "transformInputs";

export default pluginName;

SchemaBuilder.registerPlugin("transformInputs", TransformInputs);
