export function navbar(location) {
  return true; // The navbar is always active
}

export function employees(location) {
  const regex = /^\/employees/;
  return location.pathname.match(regex);
}

export function employeeDetails(location) {
  const regex = /^\/employees\/\d+?$/;
  return location.pathname.match(regex);
}

export function webTradingClient(location) {
  const regex = /^\/webtc/;
  return location.pathname.match(regex);
}

export function football(location) {
  const regex = /^\/football/;
  return location.pathname.match(regex);
}

