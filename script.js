            var newmp4 = 'emtedited.mp4'
            var video = document.getElementById("myVideo");
            var btn = document.getElementById("myBtn");

            function myFunction() 
            {
              if (video.paused) {
                video.play();
                pauseBtn.innerHTML = "Pause";
              } else {
                video.pause();
                pauseBtn.innerHTML = "Play";
              }
            }
            
             function myFunction1() 
            {
               window.location="index.html";
            }
            
            function myFunction2() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "code.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "C++ and Java";
               document.getElementById("description").innerHTML = "This course is the C++ and Java programming languages. \n\
                Using C++, the student will focus on structured programming techniques, proper program design and object-oriented programming techniques, \n\
                programming concepts and skills. Students must have at least a 2.5 GPA and a B or better in Algebra 2 to enroll. ";
            }
            
            function myFunction3() 
            {
               var videocontainer = document.getElementById('myVideo');
               var videosource = document.getElementById('sourcevideo');
               videocontainer.pause();
               videosource.setAttribute("src", "health.mp4");
               videocontainer.load();
               videocontainer.play();
               document.getElementById("title").innerHTML = "Health Science";       
              document.getElementById("description").innerHTML= "Students will acquire knowledge and skills in core competencies including an introduction to the health care delivery system, \n\
                        human anatomy and physiology, medical terminology, infection control, human growth and development and interpersonal communication. \n\
                        Prior to completion of the program, students will sit for the CNA exam and be prepared for entry level employment \n\
                        and/or continued education at the post-secondary level";
            }
            
            function myFunction4() 
            {
              document.getElementById("title").innerHTML = "Construction Technology"; 
              document.getElementById("description").innerHTML= "In this space we will describe construction technolgoy";
            }
            
            function myFunction5() 
            {
               document.getElementById("title").innerHTML = "Emergency Medical Technician";
              document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction6() 
            {
               document.getElementById("title").innerHTML = "Culinary Arts";
               document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction7() 
            {
               document.getElementById("title").innerHTML = "Automotive Collision Repair";
               document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction8() 
            {
               document.getElementById("title").innerHTML = "Auto Mechanics";
               document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction9() 
            {
              document.getElementById("title").innerHTML = "Introduction to Engineering Design";
             document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction10() 
            {
               document.getElementById("title").innerHTML = "Educator Preparation";
               document.getElementById("description").innerHTML = "Add description here";
            }
            function myFunction11() 
            {
               window.location.href = "contact.html"
            }
            var vid = document.getElementById("myVideo");

            function enableMute() { 
                if (video.muted === false)
                {
                    vid.muted = true;
                    soundBtn.innerHTML = "Unmute";
                } else {
                    vid.muted = false;
                    soundBtn.innerHTML = "Mute";
                }
            } 

          