"use client";

import React, { useState } from "react";
import { MinusIcon, PlusIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useRouter } from "next/navigation";

const CheckAvailabilityPage = () => {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [roomType, setRoomType] = useState("standard");
  const [beds, setBeds] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const roomData = {
    standard: {
      name: "Standard Room",
      images: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    deluxe: {
      name: "Deluxe Room",
      images: [
        "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    suite: {
      name: "Master Suite",
      images: [
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  };

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const nights = calculateNights();
  const pricePerNight = roomType === "deluxe" ? 150 : roomType === "suite" ? 250 : 100;
  const basePrice = nights * pricePerNight;
  const adultFee = adults > 2 ? (adults - 2) * 20 * nights : 0;
  const childrenFee = children * 15 * nights;
  const petFee = pets * 25 * nights;
  const subtotal = basePrice + adultFee + childrenFee + petFee;
  const cleaningFee = 50;
  const serviceFee = subtotal * 0.1;
  const taxes = (subtotal + cleaningFee + serviceFee) * 0.08;
  const total = subtotal + cleaningFee + serviceFee + taxes;

  const Counter = ({ value, onChange, min = 0, max = 20 }: any) => (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center hover:border-neutral-700 dark:hover:border-neutral-400 transition-colors"
      >
        <MinusIcon className="w-4 h-4" />
      </button>
      <span className="w-8 text-center font-medium">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center hover:border-neutral-700 dark:hover:border-neutral-400 transition-colors"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const isSameDay = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isInRange = (date: Date) => {
    if (!checkInDate || !checkOutDate) return false;
    return date > checkInDate && date < checkOutDate;
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date) => {
    if (isPastDate(date)) return;
    
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(date);
      setCheckOutDate(null);
    } else if (date > checkInDate) {
      setCheckOutDate(date);
    } else {
      setCheckInDate(date);
      setCheckOutDate(null);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const images = currentRoomData.images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = currentRoomData.images;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleReserve = () => {
    const bookingData = {
      checkInDate: checkInDate?.toISOString(),
      checkOutDate: checkOutDate?.toISOString(),
      nights,
      adults,
      children,
      pets,
      roomType,
      roomName: currentRoomData.name,
      beds,
      basePrice,
      adultFee,
      childrenFee,
      petFee,
      subtotal,
      cleaningFee,
      serviceFee,
      taxes,
      total,
    };
    
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    router.push('/checkout-booking');
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isCheckIn = isSameDay(checkInDate, date);
      const isCheckOut = isSameDay(checkOutDate, date);
      const inRange = isInRange(date);
      const isPast = isPastDate(date);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          disabled={isPast}
          className={`
            aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
            ${isPast ? 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed' : 'cursor-pointer'}
            ${isCheckIn || isCheckOut ? 'bg-primary-6000 text-white shadow-lg scale-105' : ''}
            ${inRange ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' : ''}
            ${!isPast && !isCheckIn && !isCheckOut && !inRange ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{monthName}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-medium text-neutral-500 dark:text-neutral-400 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  const currentRoomData = roomData[roomType as keyof typeof roomData];
  const mainImage = currentRoomData.images[0];
  const additionalPhotos = currentRoomData.images.length - 1;

  return (
    <>
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold">Reserve Your Stay</h2>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Choose your perfect room, select dates, and complete your reservation
          </span>

          <div className="w-full border-b border-neutral-200 dark:border-neutral-700 my-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Calendar & Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calendar Section */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Select Your Dates</h3>
                
                {renderCalendar()}

                {nights > 0 && (
                  <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-center">
                    <span className="text-sm font-medium">
                      Selected: <span className="text-primary-600 dark:text-primary-400">{nights} night{nights > 1 ? 's' : ''}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Guest Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Guest Details</h3>
                
                <div className="space-y-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6">
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <span className="font-medium">Adults</span>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Ages 13+ • $20/night per extra adult</p>
                    </div>
                    <Counter value={adults} onChange={setAdults} min={1} />
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-neutral-200 dark:border-neutral-700">
                    <div>
                      <span className="font-medium">Children</span>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Ages 2-12 • $15/night per child</p>
                    </div>
                    <Counter value={children} onChange={setChildren} />
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-neutral-200 dark:border-neutral-700">
                    <div>
                      <span className="font-medium">Pets</span>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">$25/night per pet</p>
                    </div>
                    <Counter value={pets} onChange={setPets} max={5} />
                  </div>
                </div>
              </div>

              {/* Room Configuration */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Room Configuration</h3>
                
                <div className="space-y-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6">
                  <div>
                    <label className="text-sm font-medium">Room Type</label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="block w-full border border-neutral-300 dark:border-neutral-700 rounded-2xl px-4 py-3 mt-2 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="standard">Standard Room - $100/night</option>
                      <option value="deluxe">Deluxe Room - $150/night</option>
                      <option value="suite">Master Suite - $250/night</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-neutral-200 dark:border-neutral-700">
                    <div>
                      <span className="font-medium">Number of Beds</span>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Select bed configuration</p>
                    </div>
                    <Counter value={beds} onChange={setBeds} min={1} max={4} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Images & Price Summary */}
            <div className="lg:col-span-1 space-y-6">
              {/* Room Images */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-semibold">{currentRoomData.name}</h4>
                </div>
                <div className="relative aspect-[4/3] cursor-pointer" onClick={() => openModal(0)}>
                  <img
                    src={mainImage}
                    alt="Room"
                    className="w-full h-full object-cover"
                  />
                  {additionalPhotos > 0 && (
                    <div className="absolute bottom-4 right-4 bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-full shadow-lg">
                      <span className="text-sm font-medium">+{additionalPhotos}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price Summary */}
              <div className="sticky top-24 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-3xl p-6 shadow-sm space-y-6">
                <h3 className="text-xl font-semibold">Price Details</h3>
                
                {nights > 0 ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                        <span>${pricePerNight} × {nights} nights</span>
                        <span>${basePrice.toFixed(2)}</span>
                      </div>
                      
                      {adultFee > 0 && (
                        <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                          <span>Extra adults ({adults - 2})</span>
                          <span>${adultFee.toFixed(2)}</span>
                        </div>
                      )}
                      
                      {childrenFee > 0 && (
                        <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                          <span>Children ({children})</span>
                          <span>${childrenFee.toFixed(2)}</span>
                        </div>
                      )}
                      
                      {petFee > 0 && (
                        <div className="flex justify-between text-neutral-600 dark:text-neutral-400 text-sm">
                          <span>Pets ({pets})</span>
                          <span>${petFee.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                        <span>Cleaning fee</span>
                        <span>${cleaningFee.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                        <span>Service fee</span>
                        <span>${serviceFee.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                        <span>Estimated taxes</span>
                        <span>${taxes.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <ButtonPrimary className="w-full" onClick={handleReserve}>
                      Reserve Now
                    </ButtonPrimary>
                  </>
                ) : (
                  <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
                    <p>Select check-in and check-out dates to see pricing</p>
                  </div>
                )}

                <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  You won't be charged yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10]">
              <img
                src={currentRoomData.images[currentImageIndex]}
                alt="Room"
                className="w-full h-full object-cover"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {currentImageIndex + 1} / {currentRoomData.images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckAvailabilityPage;
