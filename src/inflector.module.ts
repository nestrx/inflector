import { Global, Module } from "@nestjs/common";
import { InflectorService } from "./inflector.service";

@Global()
@Module({
  providers: [InflectorService],
  exports: [InflectorService]
})
export class InflectorModule {
}
