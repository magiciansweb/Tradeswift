"use client"

import Image from "next/image";
import Link from "next/link";
;

const AboutUs = () => {


    






    return (
        <div className="mt-5">

            {/* accounts registered */}

          
                  <div className="text-center bg-white px-4 py-8 md:py-12 lg:py-16"> 
    <h2 className="text-4xl font-bold text-black mb-4 md:text-5xl lg:text-6xl"> Accounts <span className="text-green-400"> Registered </span> </h2>
    <p className="mt-3 text-xl text-gray-500 md:text-2xl lg:text-3xl">
        The number of active users is growing rapidly from year to year
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 md:mt-12 lg:mt-16">
        {/* Stat Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          
            <Image className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4" src="https://i.ibb.co/ZdR2PYc/user-8647311.png" alt="icon" width={100} height={100} />

            <span className="text-lg font-semibold text-gray-800">5k</span>
            <p className="text-gray-600">Registered users (2014)</p>
        </div>
        
        {/* Stat Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">

            
            <Image className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4" src="https://i.ibb.co/bHPX5rD/people-1769041.png" alt=""  width={100} height={100} />
            <span className="text-lg font-semibold text-gray-800">15k</span>
            <p className="text-gray-600">Registered users (2018)</p>
        </div>
        
        {/* Stat Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
         
            <Image className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4"  src="https://i.ibb.co/xGkMBdR/people-3369137.png" alt="" width={100} height={100} />
            <span className="text-lg font-semibold text-gray-800">40k</span>
            <p className="text-gray-600">Registered users (2023)</p>
        </div>
    </div>
</div>

{/* trades per day */}
       

<div className="text-center mt-5 bg-gradient-to-r from-blue-300 to-green-500 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl">
        <span className="text-green-600"> Trades </span> Per Day
    </h2>
    <p className="text-gray-300 mt-3 font-semibold text-lg md:text-xl lg:text-2xl">
        From 2014 to 2023, the number of trades made per day increased by more than 800%!
    </p>

    <div className="flex mt-8 justify-center items-center gap-10 md:gap-16 lg:gap-20">
        <div className="text-xl font-extrabold text-white">
            <p className="">2014</p>
            <div className="h-1 w-16 bg-white mx-auto"></div>
            <p>14,340</p>
        </div>

        <div className="h-1 w-1 bg-white hidden md:block"></div>

        <div className="text-xl font-extrabold text-white">
            <p>2023</p>
            <div className="h-1 w-16 bg-white mx-auto"></div>
            <p>1,243,534</p>
        </div>
    </div>
</div>                    

{/* withdrawn */}

                     

<div class="bg-gray-100 mt-4 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center">
            <h2 class="text-3xl font-extrabold text-teal-500">Withdrawn by Traders per Month</h2>
            <p class="mt-2 font-bold text-lg text-gray-400">Traders withdrew 2.9 times more money from the platform in 2023 than in 2016</p>
        </div>

        <div class="flex flex-col md:flex-row items-center mt-10 gap-5">
            <div class="w-full md:w-2/3 lg:w-3/5 xl:w-2/3">
                <div class="mt-10 space-y-8">
                    <div class="flex items-center">
                        <div class="h-12 w-12 flex items-center justify-center bg-teal-500 rounded-full">
                            <span class="text-white">2016</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800">$134,580</h3>
                            <p class="text-gray-600">per Month</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="h-12 w-12 flex items-center justify-center bg-teal-500 rounded-full">
                            <span class="text-white">2018</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800">$6,827,280</h3>
                            <p class="text-gray-600">per Month</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="h-12 w-12 flex items-center justify-center bg-teal-500 rounded-full">
                            <span class="text-white">2023</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800">$20,375,097</h3>
                            <p class="text-gray-600">per Month</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden md:block">
                <Image src="https://i.ibb.co/Fq4fMMC/fluctuation-5343414.png" alt="pic" width={300} height={500} />
            </div>
        </div>
    </div>
</div>



{/* our team */}

    <section class="py-12 mt-5 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-teal-500 mb-4">Our Team</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               
                <div class="bg-gray-200 p-6 rounded-lg shadow-md">


                    
                    <Image src="https://i.ibb.co/8sx5pyr/businessman-6997481.png" alt="icon" width={50} height={50}/>
                    <h3 class="text-xl font-bold text-gray-800">John Doe</h3>
                    <p class="text-gray-600">CEO</p>
                </div>
               
                <div class="bg-gray-200 p-6 rounded-lg shadow-md">
                   
                    <Image src="https://i.ibb.co/VB9JtC2/man-6997531.png" alt="icon" width={50} height={50}/>
                    <h3 class="text-xl font-bold text-gray-800"> steve Smith</h3>
                    <p class="text-gray-600">Head of Trading</p>
                </div>
              
                <div class="bg-gray-200 p-6 rounded-lg shadow-md">
                    {/* <img src="team-member3.jpg" alt="Team Member 3" class="w-full h-auto rounded-full mb-4"> */}
                    <Image src="https://i.ibb.co/qnfgmdt/businessman-6997519.png" alt="icon" width={50} height={50}/>
                    <h3 class="text-xl font-bold text-gray-800">Alex Johnson</h3>
                    <p class="text-gray-600">Financial Analyst</p>
                </div>
               
            </div>
        </div>
    </section>

{/* support team */}
    <section class="py-12 bg-green-600 mt-5 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-7 mb-3  ">
            <h2 class="text-3xl font-extrabold text-white mb-4">Support Team</h2>

<Image src="https://i.ibb.co/47Y1vc6/phone-3014736.png" alt="icon" width={50} height={50}/> </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                  
                    <span class="text-lg font-semibold text-gray-800"> Alex gill </span>
                    <p class="text-gray-600">Support Member</p>
                    <p class="text-gray-600 mt-2">+123 456 7890</p>
                </div>
               
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    
                    <span class="text-lg font-semibold text-gray-800"> sami Zayn </span>
                    <p class="text-gray-600">Support Member</p>
                    <p class="text-gray-600 mt-2">+123 456 7890</p>
                </div>
               
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                  
                    <span class="text-lg font-semibold text-gray-800"> Mitchell Johnson</span>
                    <p class="text-gray-600">Support Member</p>
                    <p class="text-gray-600 mt-2">+123 456 7890</p>
                </div>
               
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    
                    <span class="text-lg font-semibold text-gray-800">Emily Brown</span>
                    <p class="text-gray-600">Support Member</p>
                    <p class="text-gray-600 mt-2">+123 456 7890</p>
                </div>
            </div>
        </div>
    </section>

{/* contact us  */}
    <section class="py-12 mt-5 bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-5 mb-5 items-center"> 
            <h2 class="text-3xl font-extrabold mb-4">Client Support</h2>

<Image src="https://i.ibb.co/c12YGNW/support-2268705.png" alt="icon" width={50} height={50} />
            </div>
            <p class="text-lg text-gray-300 mb-6">We're here to help you with any questions or concerns you may have. Contact our support team for assistance.</p>
            <div class="flex items-center justify-center">
               <Link href="/contact">  <button class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-md">Contact Us</button> </Link>
            </div>
        </div>
    </section>

{/* Faq section */}

    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-white mb-4">Frequently Asked <span className="text-green-400"> Questions </span></h2>
            <div class="space-y-8">
               
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-bold text-gray-800">How do I open a trading account?</h3>
                    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est ut fermentum tempor, nisi ex laoreet enim, id gravida purus arcu eget justo.</p>
                </div>
               
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-bold text-gray-800">What trading platforms do you offer?</h3>
                    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est ut fermentum tempor, nisi ex laoreet enim, id gravida purus arcu eget justo.</p>
                </div>
               
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-bold text-gray-800">How can I deposit funds into my trading account?</h3>
                    <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, est ut fermentum tempor, nisi ex laoreet enim, id gravida purus arcu eget justo.</p>
                </div>
                
            </div>
        </div>
    </section>


{/* risk warning */}
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  gap-5">
          <h2 class="text-3xl font-extrabold text-teal-500 mb-4">Risk Warning</h2>

<Image src="https://i.ibb.co/wLcQ13t/warning-4201973.png" alt='icon' width={50} height={50} /> 
          </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <p class="text-gray-600">The Financial Products offered by the company include Contracts for Difference  and other complex financial products. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, CFDs may not be suitable for all investors because it is possible to lose all of your invested capital. You should never invest money that you cannot afford to lose. Before trading in the complex financial products offered, please ensure to understand the risks involved.</p>
            </div>
        </div>
    </section>


    





                       






        


                        
                        
                        









          
        </div>
    );
};

export default AboutUs;