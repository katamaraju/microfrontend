import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mf-demo/navbar",
  () => System.import("@mf-demo/navbar"),
  isActive.navbar
);

registerApplication({
  name: "@mf-demo/employees",
  app: () => System.import("@mf-demo/employees"),
  activeWhen: isActive.employees
});

registerApplication({
  name: "@mf-demo/employee-details",
  app: () => System.import("@mf-demo/employee-details"),
  activeWhen: isActive.employeeDetails
});

registerApplication({
  name: "@mf-demo/webtc",
  app: () => System.import("@mf-demo/webtc"),
  activeWhen: isActive.webTradingClient
});

registerApplication({
  name: "@mf-demo/football",
  app: () => System.import("@mf-demo/football"),
  activeWhen: isActive.football
});

start();
