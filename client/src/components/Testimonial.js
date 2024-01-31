import React from 'react'

export default function Testimonial() {
  return (
    <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                    <p className="leading-relaxed">"I absolutely loved the course! It is a very well-curated collection of materials. All of the educators and teachers were good. This course increased my understanding of ML and DL so much. Kudos to you for putting out such a course!"</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sameer Hablani</h2>
                    <p className="text-gray-500">NIT Warangal</p>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                    <p className="leading-relaxed">"This course helped me understand the various machine learning algorithms, I understood the importance of learning the right way and not just for the sake of completing a course. The course proved that quality education doesn't always have to come with money but with enough time. I thank all of the members for coming up with such an excellent course and would request to conduct more such courses in every 3-4 months. Thanks a ton:)"</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Garima Sharma</h2>
                    <p className="text-gray-500">Gayatri Vidya Parishad College Of Engineering</p>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 p-4">
                    <div className="h-full text-center">
                    <p className="leading-relaxed">"Thanks to Consulting ,Finance & Analytics Club, IIT Indore, and the team members for making the program truthful. The knowledge I acquire during the program will enable me to develop a keener business acumen to make a lasting impact on society. Finally, your aim to help students explore data analytics has been achieved. We are grateful."</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Rohan Tyagi</h2>
                    <p className="text-gray-500">IIT Goa</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
