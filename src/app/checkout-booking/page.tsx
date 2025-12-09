"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/shared/ButtonPrimary";

const CheckoutPage = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      router.push('/check-availability');
    }
  }, [router]);

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Booking submitted:", { ...bookingData, ...formData });
      alert("Booking submitted successfully!");
      localStorage.removeItem('bookingData');
      router.push('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    }
  };

  if (!bookingData) {
    return (
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const checkInDate = new Date(bookingData.checkInDate);
  const checkOutDate = new Date(bookingData.checkOutDate);

  return (
    <div className="container pt-10 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold">Complete Your Booking</h2>
        <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
          Review your reservation details and provide your information
        </span>

        <div className="w-full border-b border-neutral-200 dark:border-neutral-700 my-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Booking Summary */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Check-in</p>
                    <p className="font-medium">{checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Check-out</p>
                    <p className="font-medium">{checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Total Nights</p>
                  <p className="font-medium">{bookingData.nights} night{bookingData.nights > 1 ? 's' : ''}</p>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Guest Information</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-neutral-600 dark:text-neutral-400">Adults:</span>
                      <span className="ml-2 font-medium">{bookingData.adults}</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 dark:text-neutral-400">Children:</span>
                      <span className="ml-2 font-medium">{bookingData.children}</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 dark:text-neutral-400">Pets:</span>
                      <span className="ml-2 font-medium">{bookingData.pets}</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 dark:text-neutral-400">Beds:</span>
                      <span className="ml-2 font-medium">{bookingData.beds}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Room Type</p>
                  <p className="font-medium">{bookingData.roomName}</p>
                </div>
              </div>
            </div>

            {/* Contact Information Form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Your Information</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium block mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`block w-full border ${errors.fullName ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'} rounded-2xl px-4 py-3 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full border ${errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'} rounded-2xl px-4 py-3 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`block w-full border ${errors.phone ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'} rounded-2xl px-4 py-3 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Address <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="block w-full border border-neutral-300 dark:border-neutral-700 rounded-2xl px-4 py-3 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Special Requests <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="block w-full border border-neutral-300 dark:border-neutral-700 rounded-2xl px-4 py-3 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any special requests or requirements..."
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="text-xl font-semibold">Price Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Base price</span>
                  <span>${bookingData.basePrice.toFixed(2)}</span>
                </div>
                
                {bookingData.adultFee > 0 && (
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                    <span>Extra adults</span>
                    <span>${bookingData.adultFee.toFixed(2)}</span>
                  </div>
                )}
                
                {bookingData.childrenFee > 0 && (
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                    <span>Children</span>
                    <span>${bookingData.childrenFee.toFixed(2)}</span>
                  </div>
                )}
                
                {bookingData.petFee > 0 && (
                  <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                    <span>Pets</span>
                    <span>${bookingData.petFee.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Cleaning fee</span>
                  <span>${bookingData.cleaningFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Service fee</span>
                  <span>${bookingData.serviceFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Taxes</span>
                  <span>${bookingData.taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span>${bookingData.total.toFixed(2)}</span>
                </div>
              </div>

              <ButtonPrimary className="w-full" onClick={handleSubmit}>
                Confirm Booking
              </ButtonPrimary>

              <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                By confirming, you agree to our terms and conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
