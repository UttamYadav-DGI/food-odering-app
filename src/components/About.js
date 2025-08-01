import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header */}
      <section className="bg-orange-500 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-lg opacity-90">
            Delivering happiness, one meal at a time — just like Swiggy.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to connect people with the best food in their city. Whether
            it's a quick snack or a fine dining experience, we bring it to your
            doorstep with speed and reliability. Just like Swiggy, we believe in
            making every meal memorable.
          </p>
        </div>
        <img 
          src="https://as2.ftcdn.net/v2/jpg/11/30/68/31/1000_F_1130683168_bZZoR2t1RxPyTpzsCjkhCos6wjjnr8mk.jpg"
          alt="Food Delivery"
          className="rounded-lg shadow-md"
        />
      </section>
{/* https://as2.ftcdn.net/v2/jpg/11/30/68/31/1000_F_1130683168_bZZoR2t1RxPyTpzsCjkhCos6wjjnr8mk.jpg */}
      {/* Stats */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-600">Partner Restaurants</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500">100K+</h3>
            <p className="text-gray-600">Orders Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500">50+</h3>
            <p className="text-gray-600">Cities Served</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Join Our Journey</h2>
        <p className="text-gray-600 leading-relaxed">
          We're on a mission to make great food accessible to everyone. Whether
          you're a customer, restaurant partner, or delivery hero — you're part
          of our story.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
