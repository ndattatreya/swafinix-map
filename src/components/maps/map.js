'use client';

import React from 'react';

const ClientMap = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-5 items-start">
                {/* Office Information */}
                <div className="bg-blue-900 text-white p-6 rounded-lg col-span-1">
                    <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg">Address</h3>
                            <p className="text-sm">
                                4TH FLOOR, 44, SAKET BUILDING, MULLICK BAZAR, <br />
                                MOTHER TERESA SARANI, PARK STREET AREA, <br />
                                Kolkata, West Bengal, 700016
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Business Hours</h3>
                            <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                            <p className="text-sm">Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="bg-white p-2 rounded-lg overflow-hidden col-span-4">
                    <iframe
                        className="w-full h-[380px] rounded-lg"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.828262409027!2d88.3562354748143!3d22.548105179509182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027710dcb42b93%3A0xe7c9000dba3e0976!2sSaket%20Building!5e0!3m2!1sen!2sin!4v1743929683278!5m2!1sen!2sin"
                        title="Office Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ClientMap;
