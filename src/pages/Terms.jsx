import React from "react";

const Terms = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">

      <div className="w-full h-[40vh] md:h-[45vh] bg-cover bg-center relative">
        <div className="absolute left-1/2 -bottom-16 md:-bottom-20 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] bg-white shadow-lg rounded-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-24 md:mt-32 px-4">
        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-10 bg-white shadow-md p-6 md:p-10">

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Who we are
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Welcome to CapitalVenue ("Site"), operated by CapitalVenue CREDIT,
              incorporated under the Companies Act, 2017, with its office at Office
              No. 504, 5th Floor, Signature Global Mall, Sector-3, Vaishali,
              Ghaziabad, Uttar Pradesh, India. These Terms and Conditions of Use
              ("T&C" or "Agreement") govern all access to and use of the Site and
              CapitalVenue CREDIT services. By using the Site, each user confirms they
              have read, understood, and agree to abide by these T&C and our
              incorporated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Description of Services
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              CapitalVenue CREDIT provides personalized quotes for loans and credit cards
              and offers a broad range of products including loans for individuals,
              professionals, entrepreneurs, business purposes, and consumer needs.
              Services include quick disbursal, competitive rates, advisory support,
              and referrals. By submitting personal information, users authorize
              CapitalVenue CREDIT and its authorized partners to contact them through
              electronic means.
            </p>
          </section>

          {/* LICENSE AND ACCESS */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              License and Access
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Certain Site features require account creation. Users confirm they
              are legally eligible and agree to provide accurate information.
              Providing false information or violating these Terms may result in
              account suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Submitted Content
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Users may submit comments or testimonials (“Submitted Content”).
              By doing so, users grant CapitalVenue CREDIT a perpetual, royalty-free,
              worldwide license to use such content. Users remain solely
              responsible for their submissions. CapitalVenue CREDIT reserves the right
              to monitor, edit, or remove content.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Restrictions and Prohibited Activities
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Unauthorized commercial use, impersonation, unlawful submissions,
              unsolicited communication, or violation of laws and intellectual
              property rights is prohibited and may result in access suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Electronic Communication
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Users consent to receive communication via email, SMS, calls, and
              notifications, satisfying legal requirements for written
              communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Third-party links are provided for convenience only. CapitalVenue CREDIT
              does not endorse or assume responsibility for their content or
              availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              All Site content and trademarks belong to CapitalVenue CREDIT or licensors
              and may not be used without written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The Site is provided “as is” without warranties of any kind,
              including fitness, reliability, or uninterrupted access.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              CapitalVenue CREDIT shall not be liable for any indirect, incidental, or
              consequential damages arising from Site usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              These Terms are governed by Indian law, with exclusive jurisdiction
              in Uttar Pradesh, India.
            </p>
          </section>

          <section className="border-t pt-6">
            <p className="text-gray-700 font-medium text-sm md:text-base">
              Final Note: Continued use of this Site signifies acceptance of these
              Terms and Conditions. If you do not agree, discontinue use
              immediately.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
