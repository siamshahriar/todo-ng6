import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportsPageComponent } from "./reports-page/reports-page.component";
import { LoginModule } from "../login/login.module";

@NgModule({
  imports: [CommonModule, LoginModule],
  declarations: [ReportsPageComponent],
  exports: [ReportsPageComponent],
})
export class ReportsModule {}
