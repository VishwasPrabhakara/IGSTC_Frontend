document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const scheduleContent = document.getElementById("schedule-content");

    const schedules = {
        day1: ` <h3 >Day 1 Schedule</h3>
             <div class="session-break">
                <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                <p>9:00 - 9:30</p>
            </div>
            <div class="theme-block"><h4>Sustainable Habitat</h4></div>
            <div class="session group-session">
                <div class="session-details">
                    <h4>Opening Remarks: Introduction to the Workshop Themes and Exploration of Future Opportunities</h4>
                    
                    <div class="speakers">
                        <div class="speaker">
                            <img src="assets/Speaker_photos/Dr. L.N. Rao.jpg" alt="Speaker Photo">
                            <p><strong>Prof. L.N. Rao</strong><br>IISc, Bengaluru</p>
                        </div>
                        <div class="speaker">
                            <img src="assets/Speaker_photos/Dr. Christina Bogner.jpg" alt="Speaker Photo">
                            <p><strong>Prof. Christina Bogner</strong><br>University of Cologne, Germany</p>
                        </div>
                        <div class="speaker">
                            <img src="assets/Speaker_photos/Anantha Suresh.jpg" alt="Speaker Photo">
                            <p><strong>Prof. G.K. Anantha Suresh</strong><br>Dean, IISc, Bengaluru</p>
                        </div>
                        <div class="speaker">
                            <img src="assets/Speaker_photos/madhavi latha g.jpg" alt="Speaker Photo">
                            <p><strong>Prof. Madhavi Latha G</strong><br>Chair, CST, IISc Bangalore</p>
                        </div>
                    </div>
                    <p class="session-time">9:30 - 10:00</p>
                </div>
            </div>
            <div style="height: 450px;" class="session">
                <div  style="" class="session-details  ">
                    <h4 style="text-align: center;">Inaugural and presentation on other funding opportunities</h4>
                    
                        <div class="speaker ">
                            <img src="assets/Speaker_photos/director-madhan.png" alt="Speaker Photo">
                            <p><strong>Mr. R Madhan</strong><br>Director, Indo-German Science & Technology Centre (IGSTC) & Team</p>
                        </div>
                                
                        </div>
                    </div>
                    <p class="session-time" style="text-align: center; margin-top: -80px;">10:05 - 10:25</p>
                </div>
            </div>
            <div class="session-break">
                <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                <p>10:30 - 11:00</p>
            </div>
            <div class="theme-block"><h4>Water Security and Wastewater Management<br></h4>
                    <h3><strong> Session Chair :</strong>  Prof. Mohan Kumar</h3>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. L.N. Rao.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Prof. L.N. Rao</h4>
                    <p> IISc, Bengaluru</p>
                    <p class="talk-title">Large Scale Recycling of Treated Wastewater for Indirect Groundwater Recharge</p>
                    <p class="session-time">11:00 - 11:15</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Christina Bogner.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Prof. Christina Bogner</h4>
                    <p> University of Cologne, Germany</p>
                    <p class="talk-title">Microplastics as novel entities</p>
                    <p class="session-time">11:20 - 11:35</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Sekhar M.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Prof. Sekhar M</h4>
                    <p> IISc, Bengaluru</p>
                    <p class="talk-title">Breaking Silos: Collaborative Strategies for Creating Integrated Water Management</p>
                    <p class="session-time">11:40 - 11:55</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Shubha Avinash.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Shubha Avinash</h4>
                    <p> Gitam University, Bangalore</p>
                    <p class="talk-title">Innovative Approaches for Sustainable Water Reuse</p>
                    <p class="session-time">12:00 - 12:15</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Ganesh Kumar P.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Ganesh Kumar P</h4>
                    <p> L&T, Chennai</p>
                    <p class="talk-title">Advancing Clean Air Solutions: Strategies for Tackling Urban Air Pollution</p>
                    <p class="session-time">12:20-12:35</p>
                </div>
            </div>
            <div class="session-break">
                <i class="fa fa-utensils"></i> <span>Lunch Break</span>
                <p>12:35 - 13:45</p>
            </div>
            <div class="theme-block"><h4>Sustainable habitat and Agriculture Practices<br></h4>
                <h3><strong> Session Chair :</strong>  Dr. Chanakya HN</h3> </div>

                <div class="session">
                    <img src="assets/Speaker_photos/Dr. Peter Fiener.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Dr. Peter Fiener</h4>
                        <p> University of Augsburg, Germany</p>
                        <p class="talk-title">Microplastics in agricultural soils: source, effects and sustainable use of plastic products.</p>
                        <p class="session-time">14:00 - 14:15</p>
                    </div>
                </div>
                <div class="session">
                    <img src="assets/Speaker_photos/Dr. Sheshshayee Sreeman.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Dr. Sheshshayee Sreeman</h4>
                        <p> GKVK, Bangalore</p>
                        <p class="talk-title">Circular Farming: Integrating Wastewater and Resource Efficiency for Sustainable Agriculture</p>
                        <p class="session-time">14:20 - 14:35</p>
                    </div>
                </div>
                <div class="session">
                    <img src="assets/Speaker_photos/Mr. Prabhav Garudadhwajan.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Mr. Prabhav Garudadhwajan</h4>
                        <p> EasyKrishi Pvt. Ltd, Bangalore</p>
                        <p class="talk-title">Empowering Sustainability in Agriculture</p>
                        <p class="session-time">14:40 - 14:55</p>
                    </div>
                </div>
                <div class="session">
                    <img src="assets/Speaker_photos/Dr. Sarala Kumari.J.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Dr. Sarala Kumari.J</h4>
                        <p> GKVK, Bangalore</p>
                        <p class="talk-title">Harnessing Sustainable Practices for Resilient Agriculture in a Changing Climate</p>
                        <p class="session-time">15:00 - 15:15</p>
                    </div>
                </div>
                <div class="session-break">
                    <i class="fa fa-image"></i> <span>Group Photo</span>
                    <p>15:15</p>
                </div>
                <div class="session-break">
                    <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                    <p>15:30 - 16:15</p>
                </div>
                <div class="theme-block"><h4>Sustainable Habitat</h4></div>
                <div class="session">
                    <img src="assets/Speaker_photos/Dr. Senol Öz.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Dr. Senol Öz</h4>
                        <p> Solaveni GmbH, Germany</p>
                        <p class="talk-title">Sustainable Perovskite Photovoltaics through Innovative Green Halide Chemistry and Life Cycle Assessment.</p>
                        <p class="session-time">16:20 - 16:35</p>
                    </div>
                </div>
                
                <div class="session">
                    <img src="assets/Speaker_photos/Dr. Lisa Biber- Freudenberger.jpg" alt="Speaker Photo">
                    <div class="session-details">
                        <h4>Dr. Lisa Biber- Freudenberger</h4>
                        <p> University of Bonn, Germany</p>
                        <p class="talk-title">Biodiversity crisis and its implications for sustainable habitats</p>
                        <p class="session-time">16:40 - 16:55</p>
                    </div>
                </div>
                <div class="theme-block roundtable"><h4>Roundtable Discussion<br></h4>
                    <h3><strong> Session Chair :</strong>  Dr. Chanakya HN and Prof. Mohan Kumar</h3> 
                    <p class="session-time" style="text-align:center;">17:00 - 17:30</p>
                </div>
            </div>`,

        day2: `<h3 style="text-align: center;">Day 2 Schedule</h3>
            <div class="theme-block"><h4>Energy and Material<br></h4>
                <h3><strong> Session Chair :</strong>  Dr. L.N. Rao</h3> 
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Payam Kaghazchi.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Payam Kaghazchi</h4>
                    <p> IMD-2, Germany</p>
                    <p class="talk-title">Multiscale Modeling of Na-Ion Battery Materials</p>
                    <p class="session-time">9:30 - 9:45</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/ram prasath manohar.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Ram Prasath Manohar V, IAS</h4>
                    <p> BWWSB Chariman, Karnataka</p>
                    
                    <p class="session-time">9:50 - 10:05</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Sanjay Mathur.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Prof. Sanjay Mathur</h4>
                    <p>University of Cologne, Germany</p>
                    <p class="talk-title">Materials innovation for sustainable hydrogen production</p>
                    <p class="session-time">10:10 - 10:25</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Navneet Kumar Gupta.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Navneet Kumar Gupta</h4>
                    <p> IISc, Bengaluru</p>
                    <p class="talk-title">From Waste to Wealth: Sustainable Materials and Renewable Energy Pathways</p>
                    <p class="session-time">10:30 - 10:45</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Gesa Beck.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Gesa Beck</h4>
                    <p> Berlin University of Applied Sciences, Germany</p>
                    <p class="talk-title">Material Flow Cost Accounting as a Resource-Saving Tool for Emerging Recycling Technologies</p>
                    <p class="session-time">10:50 - 11:05</p>
                </div>
            </div>
            <div class="session-break">
                <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                <p>11:05 - 11:20 </p>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Silke Christiansen.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Silke Christiansen</h4>
                    <p> IKTS, Germany</p>
                    <p class="talk-title">3-D nano-architectures in energy, bio-medical, electronic and sensing applications – optimization based on correlative microscopy and spectroscopy and machine learning</p>
                    <p class="session-time">11:20-11:35</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Thomas Fischer.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Thomas Fischer</h4>
                    <p> Steinbeis Technology Transfer Centre, Germany</p>
                    <p class="talk-title">Functional surfaces and interfaces for sensing and small molecule activation</p>
                    <p class="session-time">11:40-11:55</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Emanuel Ionescu.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Emanuel Ionescu</h4>
                    <p> IWKS, Germany</p>
                    <p class="talk-title">Sustainability and Circular Economy: Research Activities at Fraunhofer Research Institution for Materials Recycling and Resource Strategy IWKS</p>
                    <p class="session-time">12:00 - 12:15</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/manjula.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Manjula </h4>
                    <p class="talk-title">The German Research landscape and funding options</p>
                    <p class="session-time">12:20 - 12:35</p>
                </div>
            </div>
            
            <div class="session-break">
                <i class="fas fa-utensils"></i> <span>Lunch Break</span>
                <p>12:45 - 13:45</p>
            </div>
            <div class="theme-block"><h4>Air Quality and AI-ML for Sustainable Habitat<br></h4>
                <h3><strong> Session Chair :</strong>  Dr. Christina Bogner</h3> 
            </div>
            
            <div class="session">
                <img src="assets/Speaker_photos/Mr. Winfried Korb.jpg" alt="Speaker Photo">
                <div class="session-details">
                    
                    <h4>Mr. Winfried Korb</h4>
                    <p> Arteos GmbH, Germany</p>
                    <p class="talk-title">Realization of an AI-based industrial circular economy process in Germany</p>
                    <p class="session-time">14:40-14:55</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Vikas Rana.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Vikas Rana</h4>
                    <p> Peter Grünberg Institut (PGI, Electronic Materials (PGI-7), Germany</p>
                    <p class="talk-title">Making AI tools for energy efficient by using memristors</p>
                    <p class="session-time">15:00 - 15:15</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Prasad S. Murthy.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Prasad S. Murthy</h4>
                    <p> Advanced Technology Group (ARG) at GE, Health Care,Bangalore </p>
                    <p class="talk-title">Artificial Intelligence in Action: Transforming Sustainability in Urban Habitats</p>
                    <p class="session-time">15:20 - 15:35</p>
                </div>
            </div>
            <div class="session-break">
                <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                <p>15:35 - 16:15 </p>
            </div>
            <div class="theme-block"><h4>Integrating the legal perspective (Policy and law)<br></h4>
                <h3><strong> Session Chair :</strong>  Prof. Sanjay Mathur</h3> 
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Sairam Bhat.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Sairam Bhat</h4>
                    <p> Centre for Environmental Law, Education, Research and Advocacy (CEERA), Bengaluru</p>
                    <p class="talk-title">Water rights in India:Law, Ethics, and Governance</p>
                    <p class="session-time">16:20-16:35</p>
                </div>
            </div>
            
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Ratheesh.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Ratheesh</h4>
                    <p> IIT Madras, Chennai</p>
                    <p class="talk-title">The Role of Law and Policies for Sustainable Future</p>
                    <p class="session-time">16:40 - 16:55</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/dr d bhagwan.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. D. Bhagawan</h4>
                    <p> Central University Of Rajasthan </p>
                    <p class="talk-title">Advanced Technology For Wastewater Treatment.</p>
                    <p class="session-time">17:00 - 17:15</p>
                </div>
            </div>
            <div class="theme-block roundtable"><h4>Roundtable Discussion<br></h4>
                <h3><strong> Session Chair :</strong>  Prof. Sanjay Mathur and Prof. Christina Bogner</h3> 
                <p style="text-align: center;" class="session-time">17:35 - 18:00</p>
            </div>
            <div class="session-break">
                <i class="fas fa-utensils"></i> <span>Official Dinner</span>
                <p>18:30 onwards</p>
            </div>`,

        day3: `<h3 style="text-align: center;">Day 3 Schedule</h3>
            <div class="theme-block"><h4>Sustainable Cities and Communities<br></h4>
                <h3><strong> Session Chair :</strong>  Prof. L.N. Rao</h3> 
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Verena Dlugoß.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Verena Dlugoß</h4>
                    <p> University of Cologne, Germany</p>
                    <p class="talk-title">Climate change adaptation and mitigation of heat stress for sustainable cities</p>
                    <p class="session-time">9:30 - 9:45</p>
                </div>
            </div>
            <div class="session group-session">
                <div class="session-details">
                    <h4>Driving Sustainability: Insights from Industry and Startups</h4>
                    <div class="speakers" style="align-items: center;">
                        <div class="speaker">
                            <img  src="assets/Speaker_photos/Ambika Banotra.jpg" alt="Speaker Photo">
                            <h4><strong>Ms. Ambika Banotra</strong></h4><br>NRW.Global Business GmbH, Germany</p>
                        </div>
                        <div class="speaker">
                            <img src="assets/Speaker_photos/Mr. Sakthikumar. R,.jpeg" alt="Speaker Photo">
                            <h4><strong>Mr. Sakthikumar. R </strong></h4><br>Orbit AID Aerospace Pvt. Ltd., Bengaluru</p>
                        </div>
                    </div>
                    
                    
                    <p class="session-time"><br>9:50 - 10:05</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Vijay Sai Prasad.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Dr. Vijay Sai Prasad</h4>
                    <p> Larsen & Toubro, Chennai</p>
                    <p class="talk-title">Smart Cities, Sustainable Living: Leveraging AI/ML for Habitat Resilience</p>
                    <p class="session-time">10:10 - 10:25</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Mr. Avinash Krishnamurthy.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Mr. Avinash Krishnamurthy</h4>
                    <p> Biome Trust, Bengaluru</p>
                    <p class="talk-title">Transforming Waste to Resource: Advancing Water Security through Integrated Wastewater Management</p>
                    <p class="session-time">10:30 - 10:45</p>
                </div>
            </div>
            <div class="session">
                <img src="assets/Speaker_photos/Dr. Shamita Kumar.jpg" alt="Speaker Photo">
                <div class="session-details">
                    <h4>Prof. Shamita Kumar</h4>
                    <p> Bharati Vidyapeeth, Pune</p>
                    <p class="talk-title">Crafting Sustainable Futures: The Role of Law and Policy in Driving Environmental Transition</p>
                    <p class="session-time">10:50-11:05</p>
                </div>
            </div>
            <div class="session-break">
                <i class="fa fa-coffee"></i> <span>Tea/Coffee Break</span>
                <p>11:05 - 11:25 </p>
            </div>
            <div class="theme-block roundtable"><h4>Roundtable Discussion<br></h4>
                <h3><strong> Session Chair :</strong>  Prof. L.N. Rao and Prof. Christina Bogner</h3> 
                <p style="text-align: center;" class="session-time">11:30 - 12:00</p>
            </div>
            <div class="theme-block"><h4>Vote of Thanks<br></h4>
                <h3><strong> </strong>  Dr. Kavita Verma and Dr. Thomas Fischer</h3> 
            </div>
            <div class="session-break">
                <i class="fas fa-utensils"></i> <span>Lunch Break</span>
                <p>13:00 - 14:30</p>
            </div>
            <div  class="theme-block feild-trip"><h4>Field visit to Bangalore International Airport to study the sustainability Initiatives of the International Airport</h4> <p style="text-align: center;" class="session-time">14:30 - 19:30</p>
                
                
            </div>`
    };

    function loadSchedule(day) {
        scheduleContent.innerHTML = schedules[day];
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            loadSchedule(this.getAttribute("data-target"));
        });
    });

    loadSchedule("day1"); // Default load Day 1
});
