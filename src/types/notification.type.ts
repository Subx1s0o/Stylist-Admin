export type NotificationType =
  // Adding Services
  | "add-success"
  | "add-error"
  // Update Services
  | "update-success"
  | "update-error"
  // Deleting Services
  | "delete-error"
  | "delete-success"
  // Adding Portfolio
  | "portfolio-error"
  | "portfolio-success"
  // Deleting Portfolio
  | "portfolio-delete-success"
  | "portfolio-delete-error";
