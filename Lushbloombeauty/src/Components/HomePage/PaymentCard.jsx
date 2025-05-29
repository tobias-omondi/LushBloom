import React from 'react';

const PaymentCard = () => {
  const paymentcard = [
    {
      id: 1,
      title: "FREE PLAN",
      price: "KSH 0/",
      description:
        "Start selling with no upfront cost. Ideal for individuals testing the market or just starting their beauty journey.",
      featuresone: "5 product listings",
      featurestwo: "Basic store design",
      featurethree: "Limited support"
    },
    {
      id: 2,
      title: "PREMIUM PLAN",
      price: "KSH 200/",
      description:
        "Unlock powerful features to boost your sales and brand presence. Perfect for growing beauty vendors who need more customization and support.",
      featuresone: "50 product listings",
      featurestwo: "Custom branding & themes",
      featurethree: "Priority support",
      featurefour: "Social media integrations"
    },
    {
      id: 3,
      title: "BUSINESS PLAN (PRO)",
      price: "KSH 750/",
      description:
        "For established beauty brands ready to scale. Access advanced tools, analytics, and dedicated support for your online store.",
      featuresone: "Unlimited products",
      featurestwo: "Advanced analytics",
      featurethree: "Dedicated account manager",
      featurefour: "Dedicated account manager"
    }
  ];

  return (
    <div className='mt-12'>
      <h1 className='text-center font-semibold text-2xl text-gray-900'>The Perfect Plan for Your Business</h1>
      <p className='text-center py-5 w-3/4 mx-auto text-gray-600'>
        Whether you're just getting started or scaling your beauty brand, we have a plan designed to support your growth. Compare our vendor packages and pick what suits your needs.
      </p>

      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-3 mt-10 px-4'>
          {paymentcard.map((plan) => (
            <div key={plan.id} className='border rounded-lg shadow-lg p-6 bg-gray-950 hover:bg-gray-700 hover:delay-200 hover:ease-in-out cursor-pointer hover:transition-all'>
              <h1 className='text-xl font-bold mb-2 text-center text-white'>{plan.title}</h1>
              <h2 className='text-3xl font-bold mb-2 text-center text-green-500'>{plan.price}</h2>
              <p className='text-sm text-white mb-4'>{plan.description}</p>
              <ul className='text-sm list-disc pl-5 space-y-1 text-white'>
                <li>{plan.featuresone}</li>
                <li>{plan.featurestwo}</li>
                <li>{plan.featurethree}</li>
                {plan.featurefour && <li>{plan.featurefour}</li>}
              </ul>
              <div className='text-center mt-8'>
                <button className='mt-4 w-1/2 items-center cursor-pointer bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-800 transition'>
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;