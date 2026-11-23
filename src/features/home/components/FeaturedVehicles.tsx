import { CarFront } from "lucide-react";

export default function FeaturedVehicles() {
  return (
    <section
      className="vehicles-section section-padding"
      id="vehicles"
    >
      <div className="section-heading">
        <p className="section-eyebrow">OUR COLLECTION</p>

        <h2>Exceptional by nature.</h2>

        <p>
          Explore our collection of Range Rover and Land Rover vehicles.
        </p>
      </div>

      {/* Database-driven vehicle inventory will go here */}
      <div className="empty-inventory">
        <div className="empty-inventory-icon">
          <CarFront size={42} strokeWidth={1.2} />
        </div>

        <h3>Something exceptional is coming.</h3>

        <p>
          Our vehicle collection will be displayed here soon.
          Check back to discover our latest arrivals.
        </p>
      </div>
    </section>
  );
}