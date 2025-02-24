import { ConfigService } from "../config/config.service";
import { DebugLogService } from "../debug-log/debug-log.service";
import { LogService } from "./log.service";

export const logServiceFactory = (config: ConfigService) => {
    return config.getConfig().useDebugService ? new DebugLogService() : new LogService();
};
