import { findAndParseConfig } from "@graphql-mesh/cli";
import { getMesh } from "@graphql-mesh/runtime";

export const getSchema = async () => {
  const meshConfig = await findAndParseConfig();
  const { schema } = await getMesh(meshConfig);

  return schema;
}
