import { usePathname } from "next/navigation";

import { APP_ROUTES } from "~/constants";

export const useIsValidAppRoute = () => {
  const pathname = usePathname();

  return APP_ROUTES.includes(pathname);
};