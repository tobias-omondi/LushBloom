import React from 'react';

const PaymentCard = () => {
  const paymentcard = [
    {
      id: 1,
      title: "FREE PLAN",
      description:
        "Start selling with no upfront cost. Ideal for individuals testing the market or just starting their beauty journey.",
      featuresone: "5 product listings",
      featurestwo: "Basic store design",
      featurethree: "Limited support"
    },
    {
      id: 2,
      title: "PREMIUM PLAN",
      description:
        "Unlock powerful features to boost your sales and brand presence. Perfect for growing beauty vendors who need more customization and support.",
      featuresone: "50 product listings",
      featurestwo: "Custom branding & themes",
      featurethree: "Priority support"
    },
    {
      id: 3,
      title: "BUSINESS PLAN (PRO)",
      description:
        "For established beauty brands ready to scale. Access advanced tools, analytics, and dedicated support for your online store.",
      featuresone: "Unlimited products",
      featurestwo: "Advanced analytics",
      featurethree: "Dedicated account manager"
    }
  ];

  return (
    <div className='mt-7'>
      <h1 className='text-center font-semibold text-2xl'>The Perfect Plan for Your Business</h1>
      <p className='text-center py-5 w-3/4 mx-auto text-gray-600'>
        Whether you're just getting started or scaling your beauty brand, we have a plan designed to support your growth. Compare our vendor packages and pick what suits your needs.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4'>
        {paymentcard.map((plan) => (
          <div key={plan.id} className='border rounded-lg shadow-lg p-6 bg-gray-950'>
            <h2 className='text-xl font-bold mb-2 text-center text-white'>{plan.title}</h2>
            <p className='text-sm text-white mb-4'>{plan.description}</p>
            <ul className='text-sm list-disc pl-5 space-y-1 text-white'>
              <li>{plan.featuresone}</li>
              <li>{plan.featurestwo}</li>
              <li>{plan.featurethree}</li>
            </ul>
            <button className='mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-gray-800 transition'>
                Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
