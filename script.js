const startDate = new Date('2025-05-24');
        const currentDate = new Date();
        const days = 50;
        const daysPerPage = 7;
        const totalPages = Math.ceil(days / daysPerPage);
        const calendar = document.querySelector('.calendar');
        const prevPage = document.getElementById('prev-page');
        const nextPage = document.getElementById('next-page');
        const pageInfo = document.getElementById('page-info');
        localStorage.removeItem('progressData');
        let progressData = {};
        let currentPage = 1;
        const predefinedNotes = {
            '2025-05-24': "Basics of C++ ✅\n Time and Space Complexity ✅ \n Pattern Problems✅  ",
            '2025-05-25': "Introduction to ML ✅ \n Linear Regression✅ \n Cost Function ✅ \n Gradient descent✅ \n STLs in C++ ✅",
            '2025-05-26': "Multiple linear Regression ✅ \n Polynomial Regression✅ \n Vectorization & Scaling ✅ \n Basic Maths in DSA ✅",
            '2025-05-27': "Logistic Regression and Regularization ✅ \n Overfitting and Underfitting✅ \n Started Recursion ✅",
            '2025-05-28': "Recursion ✅ \n Hashing✅",
            '2025-05-29': "Selection Sort ✅ \n Bubble Sort✅ \n Insertion Sort ✅",
            '2025-05-30': "Merge Sort ✅ \n Quick Sort✅ \n Started Arrays with Qs like\n Rotation of elements of arrays✅ \n Union and Intersection  ✅",
            '2025-05-31': "Solved Arrays Questions: \n Max consecutive 1's✅ \n Longest subarray with sum K  ✅ \n Missing Number✅",
            '2025-06-01': "Solved Arrays Questions: \n Dutch's National FLag Algorithm✅ \n Kadane's Algorithm ✅ \n Moore's Voting Algorithm✅",
            '2025-06-02': "Solved Arrays Questions: \n Best time to Sell & Buy Stocks✅ \n Next Permutation ✅ \n Leaders in an array✅ ",
            '2025-06-03': "Solved Arrays Questions: \n Longest consecutive sequence✅ \n Rearrange elements by sign✅",
            '2025-06-04': "Solved Arrays Questions: \ Set Matrix zeroes✅ \n Rotate matrix by 90 degrees✅ \n Spiral Traversal in Matrix✅",
            '2025-06-05': "Started a new course on Deep Learning and Neural Networks✅",
            '2025-06-06': "Logistic Regression ✅ \n Gradient descent✅ \n Derivatives✅ \n Computation Graph✅",
            '2025-06-07': "WVectorization of Logistic Regression ✅ \n Gradient descent✅",
            '2025-06-08': "Worked logistic regression on python and learned about broadcasting ✅ ",
            '2025-06-09': "Solved Python assignment for logistic regression \n Started Neural Networks",
            '2025-06-10': "Neural Networks ✅ \n Activation function✅ \n Gradient descent for Neural Networks✅",
            '2025-06-11': "Back Propagation✅ \n L Layer Neural Networks ✅ \n HyperParameters✅",
            '2025-06-12': "Practied on a jupyter notebook of L layer neural network",
            '2025-06-13': "Regularization✅ \n Normalization ✅ \n Weighted intialization✅ \n Gradient Checking✅",
            '2025-06-14': "Mini Batch Gradient Descent ✅\n Bias correction ✅\n Gradient descent with momentum ✅",
            '2025-06-15': "RMSprop ✅\n Adam Optimization Algorithm✅\n Learning Rate decay✅",
            '2025-06-16': "Batch Norm ✅\n Softmax Regression✅\n Worked a bit on TensorFlow✅",
            '2025-06-17': "Finished a course on Structures of Machine Learning Projects",
            '2025-06-18': "Convolutional Neural Network ✅\n Vertical Edge detection ✅\n Pooling and Padding ✅",
            '2025-06-19': "Inception Network ✅\n  ResNet ✅\n  MobileNet ✅\n  Depthwise convolution✅",
            '2025-06-20': "Image Normalization ✅\n  Object detection ✅\n  SLiding window algorithm ✅",
            '2025-06-21': "Python assignment on Residual Networks and Transfer learning with MobileNet",
            '2025-06-22': "Non max supression✅\n  IoU Bounding boxes ✅\n  Anchor Boxes✅",
            '2025-06-23': "YOLO Algorithm ✅\n  Transpose Convolution ✅\n  U net architecture✅",
            '2025-06-24': "Face Recognition ✅\n  Siamese Network ✅\n Triplet Loss✅ ✅\n  Neural Style Transfer ✅\n Content and Style Cost Funtion✅",
            '2025-06-25': "Python Lab on \n Face Recognition and \n Art Generation with \n Neural Style Transfer",
            '2025-06-26': "finished 2 hours of JavaScript Oneshot",
            '2025-06-27': "Continued java script and collected data sets for the new project",
            '2025-06-28': "formatted the data sets and revised arrays",
            '2025-06-29': "Started a new ML course on sequential networks",
            '2025-06-30': "Recurrent Neural Networks ✅\n Backward propagation through time ✅\n Language Model and Sequence Generation✅",
            '2025-07-01': "Gated Recurrent Unit(GRU)✅\n Long Short Term Memory(LSTM) ✅\n Bidirectional and Deep RNNs✅",
            '2025-07-02': "Solved revised Array Solutions and ML theory",
            '2025-07-03': "Augmented Datasets for the project and continued JS",
            '2025-07-04': "Finished Python Labs based On RNN and created a Dinosaur name generator",
            '2025-07-05': "Finished pythonlab created a jazz music generator",
            '2025-07-06': "We're not there yet",
            '2025-07-07': "We're not there yet",
            '2025-07-08': "We're not there yet",
            '2025-07-09': "We're not there yet",
            '2025-07-10': "We're not there yet",
            '2025-07-11': "We're not there yet",
            '2025-07-12': "We're not there yet"
        };
        localStorage.setItem('progressData', JSON.stringify({}));

        const predefinedSources = {
            '2025-05-24': [
                { url: 'https://youtu.be/EAR7De6Goz4?si=AV5lHVnCp9cOM9mQ', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' },
                { url: 'https://youtu.be/EAR7De6Goz4?si=0KDKsbkFtL7QP0Av', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' }
            ],
            '2025-05-25': [
                { url: 'https://youtu.be/RRVYpIET_RU?si=3sK0rU_hlCb3TeS7', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' }
            ],
            '2025-05-26': [
                { url: 'https://youtu.be/1xNbjMdbjug?si=UxjZdR2dLNY_bsCi', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png'},
            ],
            '2025-05-27': [],
            '2025-05-28': [
                { url: 'https://youtu.be/kvRjNm4rVBE?si=3MFIZyjL-ZlGL-qP', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' }
            ],
            '2025-05-29': [
                { url: 'https://youtu.be/HGk_ypEuS24?si=jDj3F_MdxcScHj__', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' }
            ],
            '2025-05-30': [
                { url: 'https://youtu.be/ogjf7ORKfd8?si=v4rVmpqMMX-XtP8i', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' },
                { url: 'https://youtu.be/wvcQg43_V8U?si=9y4-jgYyzeqCJp45', image: 'https://www.pngplay.com/wp-content/uploads/8/Youtube-Red-Logo-PNG-Clipart-Background.png' }
            ],
            '2025-05-31': [],
            '2025-06-01': [],
            '2025-06-02': [],
            '2025-06-03': [],
            '2025-06-04': [
                
            ],
            '2025-06-05': [
               
            ],
            '2025-06-06': [
            ],
            '2025-06-07': [],
            '2025-06-08': [

            ],
            '2025-06-09': [
             
            ],
            '2025-06-10': [],
            '2025-06-11': [
            ],
            '2025-06-12': [
            ],
            '2025-06-13': [

            ],
            '2025-06-14': [],
            '2025-06-15': [

            ],
            '2025-06-16': [

            ],
            '2025-06-17': [],
            '2025-06-18': [

            ],
            '2025-06-19': [

            ],
            '2025-06-20': [

            ],
            '2025-06-21': [],
            '2025-06-22': [
                            
            ],
            '2025-06-23': [

            ],
            '2025-06-24': [],
            '2025-06-25': [
    
            ],
            '2025-06-26': [
              
            ],
            '2025-06-27': [],
            '2025-06-28': [
                        
            ],
            '2025-06-29': [
       
            ],
            '2025-06-30': [

            ],
            '2025-07-01': [],
            '2025-07-02': [
  
            ],
            '2025-07-03': [

            ],
            '2025-07-04': [],
            '2025-07-05': [
          
            ],
            '2025-07-06': [

            ],
            '2025-07-07': [],
            '2025-07-08': [
        
            ],
            '2025-07-09': [
           
            ],
            '2025-07-10': [],
            '2025-07-11': [
        
            ],
            '2025-07-12': []
              
        };
        function generateStars() {
            const numStars = 50;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.width = `${Math.random() * 3 + 1}px`;
                star.style.height = star.style.width;
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                document.body.appendChild(star);
            }
        }
        function generateCalendar(page) {
            calendar.innerHTML = '';
            const startIndex = (page - 1) * daysPerPage;
            const endIndex = Math.min(startIndex + daysPerPage, days);
            if (page === totalPages) {
                calendar.classList.add('last-page');
            } else {
                calendar.classList.remove('last-page');
            }
            for (let i = startIndex; i < endIndex; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                const dateKey = date.toISOString().split('T')[0];
                if (progressData[dateKey]?.progress && date <= currentDate) {
                    dayDiv.classList.add('progress');
                }
                if (dateKey === currentDate.toISOString().split('T')[0]) {
                    dayDiv.classList.add('current');
                }
                const dayLabel = document.createElement('div');
                dayLabel.classList.add('day-label');
                dayLabel.textContent = date.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                });
                const dayNumber = document.createElement('div');
                dayNumber.textContent = `Day ${i + 1}`;
                dayDiv.appendChild(dayLabel);
                dayDiv.appendChild(dayNumber);
                dayDiv.addEventListener('click', (e) => {
                    showModal(date, dayDiv, e);
                });
                calendar.appendChild(dayDiv);
            }
            pageInfo.textContent = `Page ${page}/${totalPages}`;
            prevPage.disabled = page === 1;
            nextPage.disabled = page === totalPages;
        }
        function showModal(date, dayDiv, event) {
            const existingModal = document.querySelector('.modal');
            if (existingModal) existingModal.remove();
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const dateKey = date.toISOString().split('T')[0];
            const heading = document.createElement('h3');
            heading.textContent = date.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            });
            const content = document.createElement('textarea');
            content.classList.add('modal-content');
            content.readOnly = true;
            content.textContent = date > currentDate ? "This day hasn't even arrived young man!" : (predefinedNotes[dateKey] || 'No notes for this day');
            const sources = document.createElement('div');
            sources.classList.add('modal-sources');
            if (date <= currentDate) {
                (predefinedSources[dateKey] || []).forEach(source => {
                    const link = document.createElement('a');
                    link.href = source.url;
                    link.target = '_blank';
                    const img = document.createElement('img');
                    img.src = source.image;
                    link.appendChild(img);
                    sources.appendChild(link);
                });
            }
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            modal.appendChild(heading);
            modal.appendChild(content);
            modal.appendChild(sources);
            modal.appendChild(closeButton);
            calendar.appendChild(modal);
            modal.style.display = 'block';
            const rect = dayDiv.getBoundingClientRect();
            const calendarRect = calendar.getBoundingClientRect();
            modal.style.left = `${rect.left - calendarRect.left + rect.width + 10}px`;
            modal.style.top = `${rect.top - calendarRect.top}px`;
            if (rect.left + rect.width + modal.offsetWidth > window.innerWidth) {
                modal.style.left = `${rect.left - calendarRect.left - modal.offsetWidth - 10}px`;
            }
            if (rect.top + modal.offsetHeight > window.innerHeight) {
                modal.style.top = `${rect.top - calendarRect.top - modal.offsetHeight + rect.height}px`;
            }
            closeButton.addEventListener('click', () => {
                if (date <= currentDate) {
                    progressData[dateKey] = {
                        progress: !progressData[dateKey]?.progress,
                        notes: predefinedNotes[dateKey] || ''
                    };
                    localStorage.setItem('progressData', JSON.stringify(progressData));
                    dayDiv.classList.toggle('progress');
                }
                modal.remove();
            });
            document.addEventListener('click', (e) => {
                if (!modal.contains(e.target) && !dayDiv.contains(e.target)) {
                    modal.remove();
                }
            }, { once: true });
        }
        prevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                generateCalendar(currentPage);
            }
        });
        nextPage.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                generateCalendar(currentPage);
            }
        });
        generateStars();
        generateCalendar(currentPage);
