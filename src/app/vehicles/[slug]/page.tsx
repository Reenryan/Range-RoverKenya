import PlaceholderPage from "@/components/shared/Placeholderpage";
export const instant = false;
interface VehicleDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function VehicleDetailsPage({
  params,
}: VehicleDetailsPageProps) {
  const { slug } = await params;

  const vehicleName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <PlaceholderPage
      eyebrow="Vehicle Details"
      title={vehicleName}
      description="Discover more about this vehicle. Contact our team for availability, specifications and purchasing enquiries."
      buttonText="Enquire About This Vehicle"
    />
  );
}