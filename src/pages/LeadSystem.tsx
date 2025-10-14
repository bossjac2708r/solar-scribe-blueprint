import leadSystemImage from "@/assets/leadtitan-info.png";

const LeadSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9E5] via-white to-[#FFF3CC] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <img 
            src={leadSystemImage} 
            alt="LeadTitan System Overview" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadSystem;
