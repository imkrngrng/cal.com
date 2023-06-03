import { useRouter } from "next/navigation";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Badge } from "@calcom/ui";

export default function UnconfirmedBookingBadge() {
  const router = useRouter();
  const { t } = useLocale();
  const { data: unconfirmedBookingCount } = trpc.viewer.bookingUnconfirmedCount.useQuery();

  if (!unconfirmedBookingCount) return null;

  const handleBadgeClick = () => {
    router.push("/bookings/unconfirmed");
  };

  return (
    <div onClick={handleBadgeClick} >
      <Badge
        rounded
        title={t("unconfirmed_bookings_tooltip")}
        variant="orange"
        className="cursor-pointer hover:bg-orange-800 hover:text-orange-100"
        >
        {unconfirmedBookingCount}
      </Badge>
    </div>
  );
}
