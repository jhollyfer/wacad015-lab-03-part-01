const greeting = "world";

export function hello(world = greeting): string {
  if (world == "WebAcademy") {
    return "Hi WebAcademy!";
  }

  return `Hello ${world}!`;
}
