import { ConfigPlugin } from "@expo/config-plugins";

const withMyApiKey: ConfigPlugin = (config) => {
  return config;
};

export default withMyApiKey;
